var rule = {
    title:'360影视',
    host:'https://www.360kan.com',
	homeUrl:'',
//    homeUrl:'https://api.web.360kan.com/v1/rank?cat=2&size=12',
    detailUrl:'https://api.web.360kan.com/v1/detail?cat=fyclass&id=fyid',
    searchUrl:'https://api.so.360kan.com/index?force_v=1&kw=**&from=&pageno=fypage&v_ap=1&tab=all',
    url:'https://api.web.360kan.com/v1/filter/list?catid=fyclass&rank=rankhot&cat=&year=&area=&act=&size=35&pageno=fypage&callback=',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:8000,
    class_name:'电视剧&电影&综艺&动漫',
    class_url:'2&1&3&4',
    limit:6,
    multi:1,
    searchable:2,
    quickSearch:1,
    play_parse:true,
    
    // 推荐列表
    推荐:'json:data;title;cover;comment;cat+ent_id;description',
    
    // 一级列表
    一级:'json:data.movies;title;cover;pubdate;id;description',
    
    // 详情页解析（完整版，已修复）
    二级:`js:
    let html = JSON.parse(fetch(input, fetch_params));
    let data = html.data;
    let title = data.title;
    let img = data.cdncover || data.cover;
    let type_name = data.moviecategory ? data.moviecategory.join(",") : "未知";
    let area = data.area ? data.area.join(",") : "未知";
    let director = data.director ? data.director.join(",") : "佚名";
    let actor = data.actor ? data.actor.join(",") : "佚名";
    let content = data.description || "暂无简介";

    let base_vod = {
        vod_id: input,
        vod_name: title,
        type_name: type_name,
        vod_actor: actor,
        vod_director: director,
        vod_content: content,
        vod_remarks: area,
        vod_pic: urljoin2(input, img)
    };

    let vod_play = {};
    let sites = data.playlink_sites || [];

    sites.forEach(function(site){
        let list = [];
        let links = data.playlinksdetail && data.playlinksdetail[site];
        if(links){
            list.push(links.sort + "$" + urlDeal(links.default_url));
        }
        if(list.length > 0){
            vod_play[site] = list.join("#");
        }
    });

    let tabs = Object.keys(vod_play);
    let playUrls = [];
    tabs.forEach(t => playUrls.push(vod_play[t]));

    if(tabs.length > 0){
        base_vod.vod_play_from = tabs.join("$$$");
        base_vod.vod_play_url = playUrls.join("$$$");
    }

    VOD = base_vod;
    `,
    
    // 搜索结果
    搜索:'json:data.longData.rows;titleTxt||titlealias;cover;cat_name;cat_id+en_id;description'
};