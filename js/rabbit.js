/*
 * @Description: pass
 * @version: 1.5
 * @Author: Hotobun
 * @Date: 2020-02-20
 * @Remember to eat on time
 * @Update: 2020-3-07 
 * 
 * 修改了cn 图床连接 
 */


function MiniText(el) {
    // 判断el标签文字是否溢出 
    // 溢出后循环缩小文字尺寸 直到文字整行在可视范围 
    let size = parseInt(window.getComputedStyle(el).fontSize);
    let count = 0;
    while (el.scrollWidth > el.clientWidth && count < 30) {
        count += 1;
        size -= 1;
        el.style.fontSize = size;
    }
}

window.onload = function () {
    // Only the first three properties need to be modified
    // rabbit.user.imghref: Click the avatar to jump to the URL
    var busuanzi = true;
    var domain = window.location.host.replace("www.", '');
    domain = "hotococoa.com"
    var rabbit = {
        // if language == zh-CN: imgsrc_cn else imgsrc
        "cocoa": {
            "cover": "#ff969a",
            "text": "＼お姉ちゃんに任せなさい .zZ／",
            "site": "hotococoa.com",
            "imgsrc": "/img/cocoa.jpg",
            "imghref": "https://hotobun.gitee.io",
        },
        "chino": {
            "cover": "#87CEFA",
            "text": "＼昨日酔拳を習いました!／",
            "site": "kafuuchino.com",
            "imgsrc": "/img/chino.jpg",
            "imghref": "https://mzh.moegirl.org/%E9%A6%99%E9%A3%8E%E6%99%BA%E4%B9%83",
            "beian": "ICP：皖ICP备19005854号-1", // 有备案号直接写 没有就不添加 
        },
        "rize": {
            "cover": "#895FB7",
            "text": "＼普通の女子高生だから信じろ／",
            "site": "tedezarize.com",
            "imgsrc": "/img/rize.jpg",
            "imghref": "https://twitter.com/sangou3",
        },
        "chiya": {
            "cover": "#7db357",
            "text": "＼はい、こちら新作の黒曜を抱く桜華よ／",
            "site": "ujimatsuchiya.com",
            "imgsrc": "/img/chiya.jpg",
            "imghref": "https://pin.it/1UuITeg",
        },
        "sharo": {
            "cover": "#F5D292",
            "text": "＼みんな～! 今日は私と遊んでくれてありがと～!／",
            "site": "kirimasharo.com",
            "imgsrc": "/img/sharo.jpg",
            "imghref": "https://kirimasharo.com/",
        },
    }

    var site_flag = false;
    for (i in rabbit) {
        var img = document.createElement("img");
        var a = document.createElement("a");
        if (domain == rabbit[i].site) {
            var master = rabbit[i]
            site_flag = true;
            img.height = 250;
            img.width = 250;
            img.alt = i;
            img.src = rabbit[i].imgsrc;
            a.href = rabbit[i].imghref;
            a.append(img);
            document.getElementById("image").append(a);
            document.getElementById("h1text").append(document.createTextNode(rabbit[i].site));
            document.getElementById("h1text").append(document.createElement("br"));
            document.getElementById("text").append(document.createTextNode(rabbit[i].text));
            document.title = i;
            document.body.style.background = rabbit[i].cover;
            let icon = document.createElement("link")
            icon.setAttribute("rel", "icon")
            icon.setAttribute("href", "ico/" + domain.replace("com", "ico"))
            this.document.head.append(icon)
            MiniText(document.getElementById("h1text"));
        } else {
            img.className = "rabbit_img"
            img.src = rabbit[i].imgsrc;
            img.alt = i;
            a.href = "http://" + rabbit[i].site;
            if (i == "sharo") {
                a.href = "https://kirimasharo.com/rabbit_house/"
            }
            a.alt = i;
            a.target = "vieww_window";
            a.append(img);
            var div = document.createElement("div");
            div.className = 'rabbit';
            div.append(a);
            document.getElementById("rabbit_footer").append(div)
        }
    }
    MiniText(document.getElementById("h1text"));
    if (site_flag == false) {
        document.body.innerHTML = "";
        alert("Your domain name is not in the target")
    }
    // 备案 
    if (master.beian) {
        this.console.log("master beian ", master);
        let beian = this.document.createElement("a");
        beian.href = "http://beian.miit.gov.cn/"
        beian.text = master.beian;
        beian.style = "width: 100%;";
        this.document.getElementById("rabbit_footer").append(beian)
        this.document.getElementById("rabbit_footer").style = "bottom: 0;"
    }
    if (busuanzi) {
        var bszdiv = document.createElement("div");
        var s1 = document.createElement("span");
        var s2 = document.createElement("span");
        s1.id = "busuanzi_value_site_pv"
        s2.id = "busuanzi_value_site_uv"
        bszdiv.append(s1);
        bszdiv.append(s2);
        bszdiv.className = "count";
        bszdiv.style = "display: none;"
        document.body.append(bszdiv);
        var bszs = document.createElement("script")
        bszs.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
        document.body.append(bszs);
    }
    console.log("%c Email %c", "background:#24272A; color:#ffffff", "", "bun@ifbun.com");
    console.log("Remember to eat on time!");
}