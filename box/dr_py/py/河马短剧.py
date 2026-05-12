# -*- coding: utf-8 -*-
import requests
import re
import json
import traceback
import sys

sys.path.append('../../')
try:
    from base.spider import Spider
except ImportError:
    class Spider:
        def init(self, extend=""):
            pass

class Spider(Spider):
    def __init__(self):
        self.siteUrl = "https://www.kuaikaw.cn"
        # 筛选列表（加“全部”）
        self.filterManual = {
            "全部": "",
            "🦄 甜宠": "462",
            "🦄 古装仙侠": "1102",
            "🦄 现代言情": "1145",
            "🦄 青春": "1170",
            "🦄 豪门恩怨": "585",
            "🦄 逆袭": "417-464",
            "🦄 重生": "439-465",
            "🦄 系统": "1159",
            "🦄 总裁": "1147",
            "🦄 职场商战": "943"
        }

    def getName(self):
        return "河马短剧"

    def init(self, extend=""):
        return

    def fetch(self, url, headers=None):
        if headers is None:
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
                "Referer": self.siteUrl,
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
                "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
            }
        try:
            response = requests.get(url, headers=headers, timeout=10, allow_redirects=True)
            response.raise_for_status()
            return response
        except Exception as e:
            print(f"请求异常: {url}, 错误: {str(e)}")
            return None

    def isVideoFormat(self, url):
        video_formats = ['.mp4', '.mkv', '.avi', '.wmv', '.m3u8', '.flv', '.rmvb']
        return any(f in url.lower() for f in video_formats)

    def manualVideoCheck(self):
        return False

    # ✅ 关键：严格按 TVBox 格式返回 class + filters
    def homeContent(self, filter):
        result = {}
        # 顶部分类：只留一个“全部短剧”（必须有，否则不进分类页）
        result['class'] = [{"type_name": "全部短剧", "type_id": "all"}]
        # 筛选器：固定 key=cate，格式必须是 n/v
        result['filters'] = [{
            "key": "cate",
            "name": "分类筛选",
            "value": [{"n": k, "v": v} for k, v in self.filterManual.items()]
        }]
        # 首页列表
        try:
            result['list'] = self.homeVideoContent()['list']
        except:
            result['list'] = []
        return result

    def homeVideoContent(self):
        videos = []
        try:
            response = self.fetch(self.siteUrl)
            html_content = response.text
            next_data_pattern = r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>'
            next_data_match = re.search(next_data_pattern, html_content, re.DOTALL)
            if next_data_match:
                next_data_json = json.loads(next_data_match.group(1))
                page_props = next_data_json.get("props", {}).get("pageProps", {})
                # 轮播
                for banner in page_props.get("bannerList", []):
                    book_id = banner.get("bookId")
                    if not book_id:
                        continue
                    videos.append({
                        "vod_id": f"/drama/{book_id}",
                        "vod_name": banner.get("bookName", ""),
                        "vod_pic": banner.get("coverWap", ""),
                        "vod_remarks": f"{banner.get('statusDesc','')} {banner.get('totalChapterNum','')}集"
                    })
                # 推荐
                for column in page_props.get("seoColumnVos", []):
                    for book in column.get("bookInfos", []):
                        book_id = book.get("bookId")
                        if not book_id:
                            continue
                        videos.append({
                            "vod_id": f"/drama/{book_id}",
                            "vod_name": book.get("bookName", ""),
                            "vod_pic": book.get("coverWap", ""),
                            "vod_remarks": f"{book.get('statusDesc','')} {book.get('totalChapterNum','')}集"
                        })
        except Exception as e:
            print(f"homeVideoContent 出错: {e}")
        return {"list": videos}

    # ✅ 关键：categoryContent 要读 filter["cate"]
    def categoryContent(self, tid, pg, filter, extend):
        # 优先取筛选值
        cate = filter.get("cate", "")
        if cate:
            tid = cate
        # 拼接 URL
        if not tid or tid == "all":
            url = f"{self.siteUrl}/browse/all/{pg}"
        else:
            url = f"{self.siteUrl}/browse/{tid}/{pg}"
        # 请求解析
        response = self.fetch(url)
        if not response:
            return {"list": [], "page": pg, "pagecount": 1, "limit": 0, "total": 0}
        html = response.text
        next_data_match = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html, re.DOTALL)
        if not next_data_match:
            return {"list": [], "page": pg, "pagecount": 1, "limit": 0, "total": 0}
        next_data = json.loads(next_data_match.group(1))
        page_props = next_data.get("props", {}).get("pageProps", {})
        book_list = page_props.get("bookList", [])
        videos = []
        for book in book_list:
            book_id = book.get("bookId")
            if not book_id:
                continue
            videos.append({
                "vod_id": f"/drama/{book_id}",
                "vod_name": book.get("bookName", ""),
                "vod_pic": book.get("coverWap", ""),
                "vod_remarks": f"{book.get('statusDesc','')} {book.get('totalChapterNum','')}集"
            })
        return {
            "list": videos,
            "page": page_props.get("page", 1),
            "pagecount": page_props.get("pages", 1),
            "limit": len(videos),
            "total": page_props.get("pages", 1) * len(videos)
        }

    def switch(self, key, pg):
        search_results = []
        url = f"{self.siteUrl}/search?searchValue={key}&page={pg}"
        response = self.fetch(url)
        html = response.text
        next_data_match = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html, re.DOTALL)
        if next_data_match:
            next_data_json = json.loads(next_data_match.group(1))
            page_props = next_data_json.get("props", {}).get("pageProps", {})
            all_book_list = page_props.get("bookList", [])
            for p in range(2, page_props.get("pages", 1) + 1):
                p_html = self.fetch(f"{self.siteUrl}/search?searchValue={key}&page={p}").text
                p_json = json.loads(re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', p_html, re.DOTALL).group(1))
                all_book_list.extend(p_json.get("props", {}).get("pageProps", {}).get("bookList", []))
            for book in all_book_list:
                book_id = book.get("bookId")
                if not book_id:
                    continue
                search_results.append({
                    "vod_id": f"/drama/{book_id}",
                    "vod_name": book.get("bookName", ""),
                    "vod_pic": book.get("coverWap", ""),
                    "vod_remarks": f"{book.get('statusDesc','')} {book.get('totalChapterNum','')}集"
                })
        return {"list": search_results, "page": pg}

    def searchContent(self, key, quick, pg=1):
        return self.switch(key, pg)

    def searchContentPage(self, key, quick, pg=1):
        return self.searchContent(key, quick, pg)

    def detailContent(self, ids):
        vod_id = ids[0]
        if not vod_id.startswith('/drama/'):
            vod_id = '/drama/' + vod_id
        drama_url = self.siteUrl + vod_id
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
            "Referer": self.siteUrl
        }
        rsp = self.fetch(drama_url, headers=headers)
        if not rsp:
            return {}
        html = rsp.text
        next_data_match = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html, re.DOTALL)
        if not next_data_match:
            return {}
        next_data = json.loads(next_data_match.group(1))
        page_props = next_data.get("props", {}).get("pageProps", {})
        book_info = page_props.get("bookInfoVo", {})
        chapter_list = page_props.get("chapterList", [])
        vod = {
            "vod_id": vod_id,
            "vod_name": book_info.get("title", ""),
            "vod_pic": book_info.get("coverWap", ""),
            "type_name": ",".join([c.get("name", "") for c in book_info.get("categoryList", [])]),
            "vod_area": book_info.get("countryName", ""),
            "vod_remarks": f"{book_info.get('totalChapterNum','')}集",
            "vod_actor": ", ".join([p.get("name", "") for p in book_info.get("performerList", [])]),
            "vod_content": book_info.get("introduction", "")
        }
        episodes = []
        for chapter in chapter_list:
            cid = chapter.get("chapterId")
            cname = chapter.get("chapterName")
            if not cid or not cname:
                continue
            episodes.append(f"{cname}${vod_id}${cid}")
        if episodes:
            vod['vod_play_from'] = '珍爱短剧'
            vod['vod_play_url'] = '$$$'.join(["#".join(episodes)])
        return {"list": [vod]}

    def playerContent(self, flag, id, vipFlags):
        parts = id.split('$')
        if len(parts) < 2:
            return {"parse": 0, "url": id, "header": "{}"}
        drama_id, chapter_id = parts[0], parts[1]
        drama_id_clean = drama_id.replace('/drama/', '')
        episode_url = f"{self.siteUrl}/episode/{drama_id_clean}/{chapter_id}"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
            "Referer": self.siteUrl
        }
        rsp = self.fetch(episode_url, headers=headers)
        if not rsp:
            return {"parse": 0, "url": episode_url, "header": json.dumps(headers)}
        html = rsp.text
        mp4_matches = re.findall(r'(https?://[^"\']+\.mp4)', html)
        if mp4_matches:
            return {"parse": 0, "url": mp4_matches[0], "header": json.dumps(headers)}
        return {"parse": 0, "url": episode_url, "header": json.dumps(headers)}

    def localProxy(self, param):
        return [200, "video/MP2T", {}, param]

    def destroy(self):
        pass