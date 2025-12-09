// 获取滚动位置
function getScroll() {
    return {
        x: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        y: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}

// 回到顶部按钮逻辑
window.onscroll = function () {
    let toTop = document.querySelector(".toTop");
    toTop.style.display = getScroll().y > 10 ? "flex" : "none";
    toTop.onclick = function () {
        window.scrollTo(0, 0);
    }
}

// 回车触发搜索（兼容event参数和废弃API）
function onkeydownEnter(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault();
        ssGo();
    }
}

// 全局元素缓存
const deleteAll = document.querySelector(".deleteAll");
const ssInput = document.querySelector("#ssInput");
const content = document.querySelector("#content");
const header = document.querySelector(".header");

// 清空搜索结果
function clickDelete() {
    content.innerHTML = "";
    deleteAll.style.display = "none";
    header.className = "header";
    ssInput.className = "";
    ssInput.value = "";
    ssInput.focus();
}

// 核心搜索逻辑（按type分支处理）
function ssGo() {
    // 基础样式切换
    header.className = "header issearch";
    ssInput.className = "issearch";
    deleteAll.style.display = "flex";
    content.innerHTML = "";

    // 关键词校验
    const ssValue = ssInput.value.trim();
    if (!ssValue) {
        alert("请输入搜索关键词！");
        ssInput.focus();
        return;
    }

    // 站点配置（按type分类）
    const websiteList = [
        // WP API类型站点（原有逻辑）
        { domain: "foxirj.com", type: "wp_api" },
        { domain: "www.appinn.com", type: "wp_api" },
        { domain: "blog.ruancang.net", type: "wp_api" },
        { domain: "www.ghxi.com", type: "wp_api" },
        { domain: "x1g.la", type: "wp_api" },
        { domain: "www.mpyit.com", type: "wp_api" },
        { domain: "www.luochenzhimu.com", type: "wp_api" },
        { domain: "baideye.com", type: "wp_api" },
        { domain: "www.macyy.cn", type: "wp_api" },
        { domain: "www.macsofter.com", type: "wp_api" },
        { domain: "www.lxapk.com", type: "wp_api" },
        { domain: "www.iplaysoft.com", type: "wp_api" },
        { domain: "www.torrentmac.net", type: "wp_api" },
        { domain: "www.yxssp.com", type: "wp_api" },
        { domain: "fy6b.com", type: "wp_api" },
        { domain: "www.sdifen.com", type: "wp_api" },
        { domain: "macpedia.xyz", type: "wp_api" },
        { domain: "softasm.com", type: "wp_api" },
        { domain: "igetintopc.com", type: "wp_api" },
        { domain: "www.sadeempc.com", type: "wp_api" },
        { domain: "haxnode.net", type: "wp_api" },
        { domain: "www.dayanzai.me", type: "wp_api" },
        { domain: "portableappk.com", type: "wp_api" },
        { domain: "www.uy5.net", type: "wp_api" },
        { domain: "www.crackingcity.com", type: "wp_api" },
        
        // 直接跳转类型站点（新增downloadlynet.ir）
        { 
            domain: "downloadlynet.ir", 
            type: "direct_jump", 
            searchUrl: "https://{domain}/?s={keyword}" // URL模板：{domain}替换域名，{keyword}替换关键词
        }
    ];

    // 遍历站点，按type处理
    websiteList.forEach(site => {
        const { domain, type, searchUrl } = site;
        
        // 分支1：WP API类型（原有逻辑）
        if (type === "wp_api") {
            // 构建WP接口URL（转义关键词避免报错）
            const wpApiUrl = `https://${domain}/wp-json/wp/v2/posts?search=${encodeURIComponent(ssValue)}&orderby=relevance&_fields=author,id,excerpt,title,link,modified&per_page=100`;
            
            myAjax("GET", wpApiUrl, 
                function (xhr) { // 成功回调
                    try {
                        const articleList = JSON.parse(xhr.responseText);
                        // 转义正则特殊字符（避免关键词含./*等报错）
                        const safeKeyword = ssValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                        const titleReg = new RegExp(safeKeyword, "i");

                        articleList.forEach(article => {
                            if (!article.title?.rendered) return; // 容错：无标题跳过

                            // 匹配标题 或 特殊处理blog.ruancang.net
                            if (titleReg.test(article.title.rendered) || domain === "blog.ruancang.net") {
                                // 关键词高亮
                                const highlightTitle = article.title.rendered.replace(titleReg, `<span class="highlight">$&</span>`);
                                // 提取日期
                                const date = article.modified?.match(/\d{4}-\d{1,2}-\d{1,2}/) || "未知日期";
                                
                                // 创建结果节点
                                const item = document.createElement("div");
                                item.className = "iterm-box";
                                item.innerHTML = `
                                    <a href="${article.link}" target="_blank" rel="noopener noreferrer">
                                        <div class="iterm-content">
                                            <div class="iterm-title">${highlightTitle}</div>
                                            <div class="iterm-info">
                                                <span class="date">${date}</span>
                                                <span class="website">${domain}</span>
                                            </div>
                                        </div>
                                    </a>
                                `;
                                content.appendChild(item);
                            }
                        });
                    } catch (e) {
                        console.error(`解析${domain}数据失败：`, e);
                    }
                },
                function (xhr) { // 失败回调
                    console.error(`请求${domain}失败（状态码：${xhr.status}）`);
                    xhr.abort();
                }
            );
        }

        // 分支2：直接跳转类型（downloadlynet.ir）
        else if (type === "direct_jump") {
            // 替换URL模板中的占位符
            const finalUrl = searchUrl
                .replace("{domain}", domain)
                .replace("{keyword}", encodeURIComponent(ssValue));
            
            // 创建跳转节点
            const jumpItem = document.createElement("div");
            jumpItem.className = "iterm-box jump-box"; // 特殊类名区分样式
            jumpItem.innerHTML = `
                <a href="${finalUrl}" target="_blank" rel="noopener noreferrer">
                    <div class="iterm-content">
                        <div class="iterm-title">前往 ${domain} 搜索「${ssValue}」</div>
                        <div class="iterm-info">
                            <span class="website">${domain}</span>
                        </div>
                    </div>
                </a>
            `;
            content.appendChild(jumpItem);
        }
    });
}

// 封装AJAX请求（增加超时、容错）
function myAjax(type, url, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 10000; // 10秒超时
    xhr.ontimeout = () => {
        console.error(`请求${url}超时`);
        error(xhr);
    };

    xhr.open(type, url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                success(xhr);
            } else {
                error(xhr);
            }
        }
    };
}
