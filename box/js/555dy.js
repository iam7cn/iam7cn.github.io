var rule = {
  title: "555电影[新]",
  host: "https://555dy1.com/",
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36"
  },
  class_name: "电影&剧集&综艺&动漫&福利&短剧",
  class_url: "1&2&3&4&124&126",
  searchUrl: "/index.php/ajax/suggest?wd={wd}&limit=10",
  searchable: 1,
  quickSearch: 1,
  filterable: 1,

  filter: {
    "1": [
      {
        "key": "class",
        "name": "类型",
        "value": [
          {"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"爱情","v":"爱情"},{"n":"喜剧","v":"喜剧"},{"n":"科幻","v":"科幻"},{"n":"犯罪","v":"犯罪"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"历史","v":"历史"},{"n":"悬疑","v":"悬疑"},{"n":"恐怖","v":"恐怖"},{"n":"经典","v":"经典"},{"n":"青春","v":"青春"},{"n":"网络电影","v":"网络电影"},{"n":"冒险","v":"冒险"},{"n":"武侠","v":"武侠"},{"n":"文艺","v":"文艺"},{"n":"运动","v":"运动"},{"n":"儿童","v":"儿童"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"其他","v":"其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n":"全部","v":""},{"n":"2026","v":"2026"},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}
        ]
      }
    ],
    "2": [
      {
        "key": "cateId",
        "name": "分类",
        "value": [
          {"n":"全部","v":""},{"n":"国产剧","v":"13"},{"n":"港台剧","v":"15"},{"n":"日韩剧","v":"44"},{"n":"欧美剧","v":"45"},{"n":"短剧","v":"125"}
        ]
      },
      {
        "key": "class",
        "name": "类型",
        "value": [
          {"n":"全部","v":""},{"n":"Netflix","v":"Netflix"},{"n":"短剧","v":"短剧"},{"n":"剧情","v":"剧情"},{"n":"丧尸","v":"丧尸"},{"n":"仙侠","v":"仙侠"},{"n":"穿越","v":"穿越"},{"n":"惊悚","v":"惊悚"},{"n":"恐怖","v":"恐怖"},{"n":"言情","v":"言情"},{"n":"科幻","v":"科幻"},{"n":"动作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"偶像","v":"偶像"},{"n":"都市","v":"都市"},{"n":"军旅","v":"军旅"},{"n":"谍战","v":"谍战"},{"n":"罪案","v":"罪案"},{"n":"宫廷","v":"宫廷"},{"n":"冒险","v":"冒险"},{"n":"儿童","v":"儿童"},{"n":"歌舞","v":"歌舞"},{"n":"音乐","v":"音乐"},{"n":"奇幻","v":"奇幻"},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"历史","v":"历史"},{"n":"经典","v":"经典"},{"n":"乡村","v":"乡村"},{"n":"情景","v":"情景"},{"n":"商战","v":"商战"},{"n":"网剧","v":"网剧"},{"n":"其他","v":"其他"}
        ]
      },
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"英国","v":"英国"},{"n":"法国","v":"法国"},{"n":"德国","v":"德国"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"丹麦","v":"丹麦"},{"n":"瑞典","v":"瑞典"},{"n":"巴西","v":"巴西"},{"n":"加拿大","v":"加拿大"},{"n":"俄罗斯","v":"俄罗斯"},{"n":"意大利","v":"意大利"},{"n":"比利时","v":"比利时"},{"n":"爱尔兰","v":"爱尔兰"},{"n":"西班牙","v":"西班牙"},{"n":"澳大利亚","v":"澳大利亚"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n":"全部","v":""},{"n":"2026","v":"2026"},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}
        ]
      }
    ],
    "3": [
      {
        "key": "area",
        "name": "地区",
        "value": [
          {"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"日本","v":"日本"},{"n":"美国","v":"美国"},{"n":"其他","v":"其他"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n":"全部","v":""},{"n":"2026","v":"2026"},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}
        ]
      }
    ],
    "4": [
      {
        "key": "class",
        "name": "类型",
        "value": [
          {"n":"全部","v":""},{"n":"国产","v":"国产"},{"n":"日本","v":"日本"}
        ]
      },
      {
        "key": "year",
        "name": "年份",
        "value": [
          {"n":"全部","v":""},{"n":"2026","v":"2026"},{"n":"2025","v":"2025"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"}
        ]
      },
      {
        "key": "by",
        "name": "排序",
        "value": [
          {"n":"时间","v":"time"},{"n":"人气","v":"hits"},{"n":"评分","v":"score"}
        ]
      }
    ]
  },

  推荐: `js:
    let d = [];
    let html = request(HOST);
    let list = xpath(html, "//div[@class='module-items module-poster-items-base ']/a");
    for (let v of list) {
      let title = xpath(v, "//@title").get();
      let href = xpath(v, "//@href").get();
      let img = xpath(v, "//div[@class='module-item-pic']/img/@data-original").get();
      let mark = xpath(v, "//div[@class='module-item-note']/text()").get();
      let id = href.match(/voddetail/(\\S+).html/)[1];
      d.push({
        url: id,
        title: title,
        img: img,
        desc: mark
      });
    }
    setResult(d);
  `,

  一级: `js:
    let d = [];
    let html = request(input);
    let list = xpath(html, "//div[@class='module-items module-poster-items-base ']/a");
    for (let v of list) {
      let title = xpath(v, "//@title").get();
      let href = xpath(v, "//@href").get();
      let img = xpath(v, "//div[@class='module-item-pic']/img/@data-original").get();
      let mark = xpath(v, "//div[@class='module-item-note']/text()").get();
      let id = href.match(/voddetail/(\\S+).html/)[1];
      d.push({
        url: id,
        title: title,
        img: img,
        desc: mark
      });
    }
    setResult(d);
  `,

  二级: `js:
    let html = request(HOST + "/voddetail/" + input + ".html");
    let name = xpath(html, "//div[@class='module-info-heading']/h1/text()").get();
    let img = xpath(html, "//div[@class='module-item-pic']/img/@data-original").get();
    let cate = xpath(html, "concat(//span[contains(text(),'分类')]/following-sibling::*//text())").get();
    let area = xpath(html, "concat(//span[contains(text(),'地区')]/following-sibling::*//text())").get();
    let mark = xpath(html, "concat(//span[contains(text(),'更新')]/following-sibling::*//text())").get();
    let actor = xpath(html, "concat(//span[contains(text(),'主演')]/following-sibling::*//text())").get();
    let director = xpath(html, "concat(//span[contains(text(),'导演')]/following-sibling::*//text())").get();
    let year = xpath(html, "concat(//span[contains(text(),'年份')]/following-sibling::*//text())").get();
    let desc = xpath(html, "//div[contains(@class,'show-desc')]/p/text()").get();

    VOD = {
      vod_name: name,
      vod_pic: img,
      type_name: cate,
      vod_year: year,
      vod_area: area,
      vod_remarks: mark,
      vod_actor: actor,
      vod_director: director,
      vod_content: desc
    };

    let pf = [];
    let pl = [];
    let tabs = xpath(html, "//div[contains(@class,'module-tab-items')]/div[2]/div/span/text()").all();
    for (let t of tabs) pf.push(t.trim());

    let plays = xpath(html, "//div[@class='module-play-list']/div/a");
    for (let p of plays) {
      let u = xpath(p, "//@href").get();
      let n = xpath(p, "//span/text()").get();
      let id = u.match(/vodplay/(\\S+).html/)[1];
      pl.push(n + "$" + id);
    }

    VOD.vod_play_from = pf.join('$$$');
    VOD.vod_play_url = pl.join('#');
  `,

  搜索: `js:
    let d = [];
    let res = JSON.parse(request(input));
    for (let it of res.list) {
      d.push({
        url: it.id + "",
        title: it.name,
        img: it.pic,
        desc: ""
      });
    }
    setResult(d);
  `,

  play_parse: true,
  lazy: `js:
    input = HOST + "/vodplay/" + input + ".html";
    let html = request(input, {headers: rule.headers});
    let m = html.match(/MacPlayerConfig.player_list=([\\w\\W]*?),MacPlayerConfig.downer_list=/);
    if (m && m[1]) {
      let j = JSON.parse(m[1]);
      for (let k in j) {
        let url = j[k][0].url;
        if (url) {
          input = {jx:0, url:url};
          break;
        }
      }
    }
  `
};