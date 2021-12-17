const $$ = document;
let random = parseInt(Math.random() * 100000000);
let IP = {
    get: (url, type) =>
        fetch(url, { method: 'GET' }).then((resp) => {
            if (type === 'text')
                return Promise.all([resp.ok, resp.status, resp.text(), resp.headers]);
            else {
                return Promise.all([resp.ok, resp.status, resp.json(), resp.headers]);
            }
        }).then(([ok, status, data, headers]) => {
            if (ok) {
                let json = {
                    ok,
                    status,
                    data,
                    headers
                }
                return json;
            } else {
                throw new Error(JSON.stringify(json.error));
            }
        }).catch(error => {
            throw error;
        }),
    parseIPIpapi: (ip, elID) => {
        IP.get(`https://api.skk.moe/network/parseIp/v2/${ip}`, 'json')
            .then(resp => {
                $$.getElementById(elID).innerHTML = `${resp.data.country} ${resp.data.regionName} ${resp.data.city} ${resp.data.isp}`;
            })
    },
    parseIPIpip: (ip, elID) => {
        IP.get(`https://api.skk.moe/network/parseIp/ipip/${ip}`, 'json')
            .then(resp => {
                let x = '';
                for (let i of resp.data) {
                    x += (i !== '') ? `${i} ` : '';
                }
                $$.getElementById(elID).innerHTML = x;
                //$$.getElementById(elID).innerHTML = `${resp.data.country} ${resp.data.regionName} ${resp.data.city} ${resp.data.isp}`;
            })
    },
/*
    getWebrtcIP: () => {
        window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        let pc = new RTCPeerConnection({ iceServers: [] }),
            noop = () => { };

        pc.createDataChannel('');
        pc.createOffer(pc.setLocalDescription.bind(pc), noop);
        pc.onicecandidate = (ice) => {
            if (!ice || !ice.candidate || !ice.candidate.candidate) {
                $$.getElementById('ip-webrtc').innerHTML = '没有查询到 IP';
                return;
            }
            let ip = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
            $$.getElementById('ip-webrtc').innerHTML = ip;
            IP.parseIPIpip(ip, 'ip-webrtc-cz88');
            pc.onicecandidate = noop;
        };
    },
*/
    getIpipnetIP: () => {
        IP.get(`https://myip.ipip.net/?z=${random}`, 'text')
            .then((resp) => {
                let data = resp.data.replace('当前 IP：', '').split(' 来自于：');
                $$.getElementById('ip-ipipnet').innerHTML = `<p>${data[0]}</p><p class="sk-text-small">${data[1]}</p>`;
            });
    },  
 	getIpmyIP: () => {
        IP.get(`https://api.myip.com`, 'json')
            .then(resp => {
                $$.getElementById('ip-ipmy').innerHTML = resp.data.ip;
                $$.getElementById('ip-ipmy-ipip').innerHTML = resp.data.country+` `+resp.data.cc;
            })
    }, 

/* 
	getIpmyIP: () => {
        IP.get(`http://ip.zxinc.org/info.php?type=json`, 'json')
            .then(resp => {
                $$.getElementById('ip-ipmy').innerHTML = resp.data.myip;
                $$.getElementById('ip-ipmy-ipip').innerHTML = resp.data.country+` `+resp.data.local;
            })
    },	
*/	
/*
    getTaobaoIP: (data) => {
        $$.getElementById('ip-taobao').innerHTML = data.ip;
        IP.parseIPIpip(data.ip, 'ip-taobao-ipip');
    },
*/
    getIpsbIP: (data) => {
        IP.get(`https://api.ip.sb/geoip`, 'json')
            .then(resp => {
                $$.getElementById('ip-ipsb').innerHTML = `test`;
                return resp.data.ip;
            })
    },
    getIpifyIP: () => {
        IP.get(`https://api.ip.sb/geoip`, 'json')
            .then(resp => {
                $$.getElementById('ip-ipify').innerHTML = resp.data.ip;
                $$.getElementById('ip-ipify-ipip').innerHTML = resp.data.country+` `+resp.data.region+` `+resp.data.asn_organization;
            })
    },

    getIPApiIP: () => {
        IP.get(`https://ipapi.co/json`, 'json')
            .then(resp => {
                $$.getElementById('ip-ipapi').innerHTML = resp.data.ip;
                IP.parseIPIpip(resp.data.ip, 'ip-ipapi-geo');
            })
    }

};

//window.ipCallback = (data) => IP.getTaobaoIP(data);

let HTTP = {
    checker: (domain, cbElID) => {
        let img = new Image;
        let timeout = setTimeout(() => {
            img.onerror = img.onload = null;
            $$.getElementById(cbElID).innerHTML = '<span class="sk-text-error">连接超时</span>'
            // Cancel the load
            img.src = null;
        }, 6000);

        img.onerror = () => {
            clearTimeout(timeout);
            $$.getElementById(cbElID).innerHTML = '<span class="sk-text-error">无法访问</span>'
        }

        img.onload = () => {
            clearTimeout(timeout);
            $$.getElementById(cbElID).innerHTML = '<span class="sk-text-success">连接正常</span>'
        }

        img.src = `https://${domain}/favicon.ico?${+(new Date)}`
    },
    runcheck: () => {
        HTTP.checker('www.baidu.com', 'http-baidu');
        HTTP.checker('s1.music.126.net/style', 'http-163');
        HTTP.checker('github.com', 'http-github');
		HTTP.checker('www.google.com', 'http-google');
        HTTP.checker('www.youtube.com', 'http-youtube');
    }
};

//IP.getWebrtcIP();
IP.getIpipnetIP();
//IP.getIPApiIP();
IP.getIpifyIP();
HTTP.runcheck();
