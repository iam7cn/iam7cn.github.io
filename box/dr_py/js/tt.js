var rule = {
  title: '金牌影院',
  host: 'https://m.sunnafh.com',
  url: '/api/mw-movie/anonymous/video/list?pageNum=fypage&pageSize=30&sort=1&sortBy=1&type1=fyclass&area=fyarea&year=fyyear&lang=fylang&plot=fyplot',
  searchUrl: '/api/mw-movie/anonymous/video/searchByWordPageable?keyword=**&pageNum=fypage&pageSize=12&type=false',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  },
  searchable: 2,
  quickSearch: 0,
  filterable: 1,
  limit: 6,
  double: false,
  play_parse:true,
  class_name: '电影&电视剧&综艺&动漫',
  class_url: '1&2&3&4',

  filter_def: [
    // 电影 分类ID=1
    {
      cid: 1,
      类型: [
        {"name":"全部","value":""},
        {"name":"喜剧","value":"喜剧"},
        {"name":"动作","value":"动作"},
        {"name":"科幻","value":"科幻"},
        {"name":"爱情","value":"爱情"},
        {"name":"悬疑","value":"悬疑"},
        {"name":"奇幻","value":"奇幻"},
        {"name":"剧情","value":"剧情"},
        {"name":"恐怖","value":"恐怖"},
        {"name":"犯罪","value":"犯罪"},
        {"name":"动画","value":"动画"},
        {"name":"惊悚","value":"惊悚"},
        {"name":"战争","value":"战争"},
        {"name":"冒险","value":"冒险"},
        {"name":"灾难","value":"灾难"},
        {"name":"伦理","value":"伦理"},
        {"name":"其他","value":"其他"}
      ],
      剧情: [
        {"name":"全部","value":""},
        {"name":"爱情","value":"爱情"},
        {"name":"动作","value":"动作"},
        {"name":"喜剧","value":"喜剧"},
        {"name":"战争","value":"战争"},
        {"name":"科幻","value":"科幻"},
        {"name":"剧情","value":"剧情"},
        {"name":"武侠","value":"武侠"},
        {"name":"冒险","value":"冒险"},
        {"name":"枪战","value":"枪战"},
        {"name":"恐怖","value":"恐怖"},
        {"name":"其他","value":"其他"}
      ],
      地区: [
        {"name":"全部","value":""},
        {"name":"中国大陆","value":"中国大陆"},
        {"name":"中国香港","value":"中国香港"},
        {"name":"中国台湾","value":"中国台湾"},
        {"name":"美国","value":"美国"},
        {"name":"日本","value":"日本"},
        {"name":"韩国","value":"韩国"},
        {"name":"印度","value":"印度"},
        {"name":"泰国","value":"泰国"},
        {"name":"英国","value":"英国"},
        {"name":"法国","value":"法国"},
        {"name":"其他","value":"其他"}
      ],
      年份: [
        {"name":"全部","value":""},
        {"name":"2026","value":"2026"},
        {"name":"2025","value":"2025"},
        {"name":"2024","value":"2024"},
        {"name":"2023","value":"2023"},
        {"name":"2022","value":"2022"},
        {"name":"2021","value":"2021"},
        {"name":"2020","value":"2020"},
        {"name":"2019","value":"2019"},
        {"name":"2018","value":"2018"},
        {"name":"2017","value":"2017"},
        {"name":"2016","value":"2016"},
        {"name":"2015","value":"2015"},
        {"name":"2014","value":"2014"},
        {"name":"2013","value":"2013"},
        {"name":"2012","value":"2012"},
        {"name":"2011","value":"2011"},
        {"name":"2010","value":"2010"},
        {"name":"2009~2000","value":"2000"}
      ],
      语言: [
        {"name":"全部","value":""},
        {"name":"国语","value":"国语"},
        {"name":"英语","value":"英语"},
        {"name":"粤语","value":"粤语"},
        {"name":"韩语","value":"韩语"},
        {"name":"日语","value":"日语"},
        {"name":"其他","value":"其他"}
      ]
    },
    // 电视剧 分类ID=2
    {
      cid: 2,
      类型: [
        {"name":"全部","value":""},
        {"name":"国产剧","value":"国产剧"},
        {"name":"欧美剧","value":"欧美剧"},
        {"name":"港台剧","value":"港台剧"},
        {"name":"日韩剧","value":"日韩剧"},
        {"name":"其他剧","value":"其他剧"}
      ],
      剧情: [
        {"name":"全部","value":""},
        {"name":"古装","value":"古装"},
        {"name":"战争","value":"战争"},
        {"name":"喜剧","value":"喜剧"},
        {"name":"家庭","value":"家庭"},
        {"name":"犯罪","value":"犯罪"},
        {"name":"动作","value":"动作"},
        {"name":"奇幻","value":"奇幻"},
        {"name":"剧情","value":"剧情"},
        {"name":"历史","value":"历史"},
        {"name":"短片","value":"短片"},
        {"name":"其他","value":"其他"}
      ],
      地区: [
        {"name":"全部","value":""},
        {"name":"中国大陆","value":"中国大陆"},
        {"name":"中国香港","value":"中国香港"},
        {"name":"中国台湾","value":"中国台湾"},
        {"name":"日本","value":"日本"},
        {"name":"韩国","value":"韩国"},
        {"name":"美国","value":"美国"},
        {"name":"泰国","value":"泰国"},
        {"name":"其他","value":"其他"}
      ],
      年份: [
        {"name":"全部","value":""},
        {"name":"2026","value":"2026"},
        {"name":"2025","value":"2025"},
        {"name":"2024","value":"2024"},
        {"name":"2023","value":"2023"},
        {"name":"2022","value":"2022"},
        {"name":"2021","value":"2021"},
        {"name":"2020","value":"2020"},
        {"name":"2019","value":"2019"},
        {"name":"2018","value":"2018"},
        {"name":"2017","value":"2017"},
        {"name":"2016","value":"2016"},
        {"name":"2015","value":"2015"},
        {"name":"2014","value":"2014"},
        {"name":"2013","value":"2013"},
        {"name":"2012","value":"2012"},
        {"name":"2011","value":"2011"},
        {"name":"2010","value":"2010"}
      ],
      语言: [
        {"name":"全部","value":""},
        {"name":"国语","value":"国语"},
        {"name":"英语","value":"英语"},
        {"name":"粤语","value":"粤语"},
        {"name":"韩语","value":"韩语"},
        {"name":"日语","value":"日语"},
        {"name":"泰语","value":"泰语"},
        {"name":"其他","value":"其他"}
      ]
    },
    // 综艺 分类ID=3
    {
      cid: 3,
      类型: [
        {"name":"全部","value":""},
        {"name":"国产综艺","value":"国产综艺"},
        {"name":"港台综艺","value":"港台综艺"},
        {"name":"日韩综艺","value":"日韩综艺"},
        {"name":"欧美综艺","value":"欧美综艺"}
      ],
      剧情: [
        {"name":"全部","value":""},
        {"name":"真人秀","value":"真人秀"},
        {"name":"音乐","value":"音乐"},
        {"name":"脱口秀","value":"脱口秀"}
      ],
      地区: [
        {"name":"全部","value":""},
        {"name":"中国大陆","value":"中国大陆"},
        {"name":"中国香港","value":"中国香港"},
        {"name":"中国台湾","value":"中国台湾"},
        {"name":"日本","value":"日本"},
        {"name":"韩国","value":"韩国"},
        {"name":"美国","value":"美国"},
        {"name":"其他","value":"其他"}
      ],
      年份: [
        {"name":"全部","value":""},
        {"name":"2026","value":"2026"},
        {"name":"2025","value":"2025"},
        {"name":"2024","value":"2024"},
        {"name":"2023","value":"2023"},
        {"name":"2022","value":"2022"},
        {"name":"2021","value":"2021"},
        {"name":"2020","value":"2020"}
      ],
      语言: [
        {"name":"全部","value":""},
        {"name":"国语","value":"国语"},
        {"name":"英语","value":"英语"},
        {"name":"粤语","value":"粤语"},
        {"name":"韩语","value":"韩语"},
        {"name":"日语","value":"日语"},
        {"name":"其他","value":"其他"}
      ]
    },
    // 动漫 分类ID=4
    {
      cid: 4,
      类型: [
        {"name":"全部","value":""},
        {"name":"国产动漫","value":"国产动漫"},
        {"name":"日韩动漫","value":"日韩动漫"},
        {"name":"欧美动漫","value":"欧美动漫"}
      ],
      剧情: [
        {"name":"全部","value":""},
        {"name":"喜剧","value":"喜剧"},
        {"name":"科幻","value":"科幻"},
        {"name":"热血","value":"热血"},
        {"name":"冒险","value":"冒险"},
        {"name":"动作","value":"动作"},
        {"name":"运动","value":"运动"},
        {"name":"战争","value":"战争"},
        {"name":"动画","value":"动画"}
      ],
      地区: [
        {"name":"全部","value":""},
        {"name":"中国大陆","value":"中国大陆"},
        {"name":"日本","value":"日本"},
        {"name":"美国","value":"美国"},
        {"name":"其他","value":"其他"}
      ],
      年份: [
        {"name":"全部","value":""},
        {"name":"2026","value":"2026"},
        {"name":"2025","value":"2025"},
        {"name":"2024","value":"2024"},
        {"name":"2023","value":"2023"},
        {"name":"2022","value":"2022"},
        {"name":"2021","value":"2021"},
        {"name":"2020","value":"2020"},
        {"name":"2019","value":"2019"},
        {"name":"2018","value":"2018"},
        {"name":"2017","value":"2017"},
        {"name":"2016","value":"2016"},
        {"name":"2015","value":"2015"},
        {"name":"2014","value":"2014"},
        {"name":"2013","value":"2013"},
        {"name":"2012","value":"2012"},
        {"name":"2011","value":"2011"},
        {"name":"2010","value":"2010"}
      ],
      语言: [
        {"name":"全部","value":""},
        {"name":"国语","value":"国语"},
        {"name":"英语","value":"英语"},
        {"name":"日语","value":"日语"},
        {"name":"其他","value":"其他"}
      ]
    }
  ],

  lazy:`js:
     let pid = input.split('/')[5];
     let nid = input.split('/')[7];
     const t = new Date().getTime();
     eval(getCryptoJS);
     let signkey = 'clientType=1&id='+pid+'&nid='+nid+'&key=cb808529bae6b6be45ecfab29a4889bc&t='+t;
     const key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString();
     let json_data = JSON.parse(request('https://m.sunnafh.com/api/mw-movie/anonymous/v2/video/episode/url?clientType=1&id='+pid+'&nid='+nid,{headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'deviceid': '63ffad23-a598-4f96-85d7-7bf5f3e4a0a2',
    'sign': key,
    't': t
    }}));
     let link = json_data.data.list[0].url;
     if(/\\.(m3u8|mp4)/.test(link)){input={jx:0,parse:0,url:link}}else{input={jx:0,parse:1,url:link}}
  `,

  一级: `js:
        let d = [];
        let url = '';
        let t = new Date().getTime();
        eval(getCryptoJS);
        let signkey = 'pageNum='+MY_PAGE+'&pageSize=30&sort=1&sortBy=1&type1='+MY_CATE+'&key=cb808529bae6b6be45ecfab29a4889bc&t='+t;
        let key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString();
        let list = JSON.parse(request(input,{headers:{
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/plain, */*',
            'deviceId': '63ffad23-a598-4f96-85d7-7bf5f3e4a0a2',
            'sign': key,
            't': t 
        }})).data.list;
        list.forEach((it)=>{
            d.push({
              title: it.vodName,
              desc:it.vodRemarks,
              img:it.vodPic,
              url:'http'+it.vodId
            })
        });
        setResult(d);
  `,

  二级: `js:
    let kid=input.split('http')[1];
    let t = new Date().getTime();
    eval(getCryptoJS);
    let signkey = 'id='+kid+'&key=cb808529bae6b6be45ecfab29a4889bc&t='+t;
    let key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString();
    let kjson = JSON.parse(request('https://m.sunnafh.com/api/mw-movie/anonymous/video/detail?id='+kid,{headers:{
       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'deviceId': '63ffad23-a598-4f96-85d7-7bf5f3e4a0a2',
        'sign': key,
        't': t 
    }})).data;
    let kurls = kjson.episodeList.map(function(it) => {
      return it.name + "$" + "https://m.sunnafh.com/vod/play/"+kid+"/sid/"+it.nid
    }).join('#');
    VOD = {
      vod_id: kid,
      vod_name: kjson.vodName,
      vod_pic: kjson.vodPic,
      type_name: kjson.vodClass,
      vod_remarks: kjson.vodRemarks,
      vod_year: kjson.vodYear,
      vod_area: kjson.vodArea,
      vod_lang: kjson.vodLang,
      vod_director: kjson.vodDirector,
      vod_actor: kjson.vodActor,
      vod_content: kjson.vodContent,
      vod_play_from: '金牌线路',
      vod_play_url: kurls
    }`,

  搜索: `js:
    let t = new Date().getTime();
     eval(getCryptoJS);
     let pg = MY_PAGE;
     let signkey = 'keyword='+KEY+'&pageNum='+pg+'&pageSize=12&type=false&key=cb808529bae6b6be45ecfab29a4889bc&t='+t;
     let key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString();
     let html = JSON.parse(request(input,{headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'deviceid': '63ffad23-a598-4f96-85d7-7bf5f3e4a0a2',
    'sign': key,
    't': t
    }}));
      let data = html.data.list;
      let d = [];
      data.forEach(it=>{
        d.push({
          title: it.vodName,
          desc:it.vodVersion,
          img:it.vodPic,
          url:'http'+it.vodId
        })
      });
    setResult(d)
  `,
}