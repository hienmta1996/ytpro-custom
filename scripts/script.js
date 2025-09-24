/**
 * Minified by jsDelivr using Terser v5.39.0.
 * Original file: /npm/ytpro@3.8.7/script.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
if (null == window.eruda && "true" == localStorage.getItem("devMode") && (window.location.href = "javascript:(function () { var script = document.createElement('script'); script.src=\"//cdn.jsdelivr.net/npm/eruda\"; document.body.appendChild(script); script.onload = function () { eruda.init();} })();"), !YTProVer) {
    var YTProVer = "3.87",
        ytoldV = "",
        isF = !1,
        isAp = !1;
    const e = HTMLMediaElement.prototype.pause;
    window.PIPause = !1, window.pauseAllowed = !0;
    var sTime = [],
        webUrls = ["m.youtube.com", "youtube.com", "yout.be", "accounts.google.com"],
        GeminiAT = "",
        GeminiModels = {
            "2.0 Flash": '[null,null,null,null,"f299729663a2343f"]',
            "2.0 Flash Thinking": '[null,null,null,null,"9c17b1863f581b8a"]',
            "2.0 Flash Thinking with apps": '[null,null,null,null,"f8f8f5ea629f5d37"]',
            "2.0 Experimental Advanced": '[null,null,null,null,"b1e46a6037e6aa9f"]',
            "2.5 Flash": '[1,null,null,null,"35609594dbe934d8"]',
            "2.5 Pro": '[1,null,null,null,"2525e3954d185b3c"]',
            "2.5 Experimental Advanced": '[null,null,null,null,"203e6bb81620bcfe"]'
        },
        YTPROCodecs = {
            video: ["AV1", "VP8", "VP9", "H264"],
            audio: ["Opus", "Mp4a"]
        };
    let t = 0,
        n = 0;
    null != localStorage.getItem("saveCInfo") && null != localStorage.getItem("fitS") && null != localStorage.getItem("bgplay") || (localStorage.setItem("autoSpn", "true"), localStorage.setItem("fitS", "true"), localStorage.setItem("bgplay", "true"), localStorage.setItem("fzoom", "false"), localStorage.setItem("saveCInfo", "true"), localStorage.setItem("geminiModel", "2.5 Flash"), localStorage.setItem("prompt", "Give me details about this YouTube video Id: {videoId} , a detailed summary of timestamps with facts , resources and reviews of the main content "), localStorage.setItem("devMode", "false"), localStorage.setItem("block_60fps", "false"), YTPROCodecs.video.forEach((e => {
        localStorage.setItem(e, "true")
    })), YTPROCodecs.audio.forEach((e => {
        localStorage.setItem(e, "true")
    }))), "true" == localStorage.getItem("fzoom") && document.getElementsByName("viewport")[0].setAttribute("content", ""), ytoldV = window.location.pathname.indexOf("shorts") > -1 ? window.location.pathname : new URLSearchParams(window.location.search).get("v");
    var c = "#000",
        d = "#f2f2f2",
        dc = "#fff",
        isD = !1,
        dislikes = "...";
    document.cookie.indexOf("f6=400") > -1 ? (dc = "#000", c = "#fff", d = "rgba(255,255,255,0.1)", isD = !0) : (dc = "#fff", c = "#000", d = "rgba(0,0,0,0.05)", isD = !1);
    var downBtn = `<svg xmlns="http://www.w3.org/2000/svg" height="18" fill="${c}" viewBox="0 0 24 24" width="18" focusable="false"><path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path></svg>`;

    function override() {
        var e = document.createElement("video"),
            t = e.canPlayType.bind(e);
        e.__proto__.canPlayType = makeModifiedTypeChecker(t);
        var n = window.MediaSource;
        if (void 0 !== n) {
            var i = n.isTypeSupported.bind(n);
            n.isTypeSupported = makeModifiedTypeChecker(i)
        }
    }

    function makeModifiedTypeChecker(e) {
        return function(t) {
            if (void 0 === t) return "";
            var n = [];
            "false" === localStorage.H264 && n.push("avc"), "false" === localStorage.VP8 && n.push("vp8"), "false" === localStorage.VP9 && n.push("vp9", "vp09"), "true" === localStorage.AV1 && n.push("av01", "av99"), "false" === localStorage.Opus && n.push("opus"), "false" === localStorage.Mp4a && n.push("mp4a");
            for (var i = 0; i < n.length; i++)
                if (-1 !== t.indexOf(n[i])) return "";
            if ("true" === localStorage.block_60fps) {
                var o = /framerate=(\d+)/.exec(t);
                if (o && o[1] > 30) return ""
            }
            return e(t)
        }
    }

    function insertAfter(e, t) {
        try {
            e.parentNode.insertBefore(t, e.nextSibling)
        } catch {}
    }
    async function waitForElement(e, t) {
        return new Promise((n => {
            const i = document.querySelector(e);
            if (i) {
                if (t && "" != i.src) return n(i);
                if (!t) return n(i)
            }
            const o = new MutationObserver((() => {
                const i = document.querySelector(e);
                i && (t && i.src && (n(i), o.disconnect()), t || (n(i), o.disconnect()))
            }));
            o.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }))
    }
    override();
    var addSettingsTab = () => {
        if (null == document.getElementById("setDiv")) {
            var e = document.createElement("div");
            e.setAttribute("style", "\nheight:30px;width:30px;\nz-index:9999999999;\nfont-size:22px;\ntext-align:center;line-height:35px;\n"), e.setAttribute("id", "setDiv");
            var t = document.createElement("div");
            t.innerHTML = `<svg fill="${window.location.href.indexOf("watch")<0?c:"#fff"}" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 22 22" width="22"  id="hSett"><path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path></svg>\n`, e.appendChild(t), insertAfter(document.getElementsByTagName("ytm-home-logo")[0], e), null != document.getElementById("hSett") && document.getElementById("hSett").addEventListener("click", (function(e) {
                window.location.hash = "settings"
            }))
        }
    };

    function getDislikesInLocale(e) {
        var t = e;
        if (e < 1e3) t = e;
        else {
            const n = Math.floor(Math.log10(e) - 2),
                i = n + (n % 3 ? 1 : 0);
            t = Math.floor(e / 10 ** i) * 10 ** i
        }
        let n;
        if (document.documentElement.lang) n = document.documentElement.lang;
        else if (navigator.language) n = navigator.language;
        else try {
            n = new URL(Array.from(document.querySelectorAll("head > link[rel='search']"))?.find((e => e?.getAttribute("href")?.includes("?locale=")))?.getAttribute("href"))?.searchParams?.get("locale")
        } catch {
            n = "en"
        }
        return Intl.NumberFormat(n, {
            notation: "compact",
            compactDisplay: "short"
        }).format(t)
    }
    async function skipSponsor() {
        var e = document.createElement("div");
        e.setAttribute("style", "height:3px;pointer-events:none;width:100%;position:absolute;z-index:99;"), e.setAttribute("id", "sDiv");
        var t = document.getElementsByClassName("video-stream")[0].duration;
        if (!isNaN(t)) {
            for (var n in sTime) {
                var i = document.createElement("div"),
                    o = sTime[n];
                i.setAttribute("style", `height:3px;width:${100/t*(o[1]-o[0])}%;background:#0f8;position:absolute;z-index:9;left:${100/t*o[0]}%;`), e.appendChild(i)
            }
            await waitForElement("yt-progress-bar", !1);
            if (null == document.getElementById("sDiv"))
                if (null != document.getElementsByClassName("ytPlayerProgressBarHost")[0]) document.getElementsByClassName("ytPlayerProgressBarHost")[0].appendChild(e);
                else try {
                    document.getElementsByClassName("ytProgressBarLineProgressBarLine")[0].appendChild(e)
                } catch {}
        }
    }
    async function fDislikes(e) {
        var t = new URL(e),
            n = "";
        t.pathname.indexOf("shorts") > -1 ? n = t.pathname.substr(8, t.pathname.length) : t.pathname.indexOf("watch") > -1 && (n = t.searchParams.get("v")), fetch("https://returnyoutubedislikeapi.com/votes?videoId=" + n).then((e => e.json())).then((e => {
            "dislikes" in e && (dislikes = getDislikesInLocale(parseInt(e.dislikes)))
        })).catch((e => {}))
    }
    async function checkSponsors(e) {
        if (e.indexOf("watch") > -1) {
            sTime = [], await fetch("https://sponsor.ajay.app/api/skipSegments?videoID=" + new URL(e).searchParams.get("v")).then((e => e.json())).then((e => {
                for (var t in e) {
                    var n = e[t].segment;
                    sTime.push(n)
                }
            })).catch((e => {}));
            var t = await waitForElement(".video-stream", !0);
            t.ontimeupdate = () => {
                skipSponsor();
                var e = t.currentTime;
                for (var n in sTime) {
                    var i = sTime[n];
                    Math.floor(e) == Math.floor(i[0]) && "true" == localStorage.getItem("autoSpn") && (t.currentTime = i[1], addSkipper(i[0]))
                }
            }
        }
    }

    function addSkipper(e) {
        var t = document.createElement("div");
        t.setAttribute("style", `\nheight:50px;${screen.width>screen.height?"width:50%;":"width:80%;"}overflow:auto;background:rgba(130,130,130,.3);\nbackdrop-filter:blur(6px);\nposition:absolute;bottom:40px;\nline-height:50px;\nleft:calc(15% / 2 );padding-left:10px;padding-right:10px;\nz-index:99999999999999;text-align:center;border-radius:25px;\ncolor:white;text-align:center;\n`), t.innerHTML = `<span style="height:30px;line-height:30px;margin-top:10px;display:block;font-family:monospace;font-size:16px;float:left;">Skipped Sponsor</span>\n<span style="height:30px;line-height:44px;float:right;padding-right:30px;margin-top:10px;display:block;padding-left:30px;border-left:1px solid white;">\n<svg onclick="this.parentElement.parentElement.remove();document.getElementsByClassName('video-stream')[0].currentTime=${e+1};" xmlns="http://www.w3.org/2000/svg" width="23" height="23" style="margin-top:0px;" fill="currentColor" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>\n<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>\n</svg>\n<svg onclick="this.parentElement.parentElement.remove();" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:30px;" fill="#f24" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>`, document.getElementById("player-control-container").appendChild(t), setTimeout((() => {
            t.remove()
        }), 5e3)
    }
    if (fDislikes(window.location.href), checkSponsors(window.location.href), window.location.pathname.indexOf("watch") > -1 || window.location.pathname.indexOf("shorts") > -1) var unV = setInterval((() => {
        document.getElementsByClassName("video-stream")[0].muted = !1, document.getElementsByClassName("video-stream")[0].muted || clearInterval(unV)
    }), 5);

    function sty(e, t) {
        var n = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "550",
            height: "65%",
            minWidth: "80px",
            width: "auto",
            borderRadius: "20px",
            background: d,
            fontSize: "12px",
            marginRight: "5px",
            textAlign: "center"
        };
        for (x in n) e.style[x] = n[x]
    }

    function getGeminiModels() {
        var e = "";
        for (var t in GeminiModels) e += `<br>\n<button onclick="localStorage.removeItem('geminiChatInfo');localStorage.setItem('geminiModel','${t}');this.parentElement.style.display='none';" ${t==localStorage.getItem("geminiModel")?`style="background:${c};color:${dc};"`:""} >${t}\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${c}"  viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg>\n</button>`;
        return e
    }

    function getYTPROCodecs() {
        var e = '<p style="text-align:center;font-size:14px;">This feature is experimental , this may break YouTube Pro if not configured correctly. By default all the codecs are enabled , tap on the buttons below to switch them.</p><br> <vc  style="font-size:14px;">Video Codecs</vc><br>';
        for (var t in YTPROCodecs.video) {
            e += `<button onclick="setRemoveCodec('${n=YTPROCodecs.video[t]}',this)" ${"true"==localStorage.getItem(n)?`style="background:${c};color:${dc};"`:""} >${n}\n<svg  ${"true"!=localStorage.getItem(n)?'style="display:none"':""} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${dc}"  viewBox="0 0 16 16">\n<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>\n</svg>\n</button>`
        }
        for (var t in e += '<br><br><vc  style="font-size:14px">Audio Codecs</vc><br>', YTPROCodecs.audio) {
            var n;
            e += `<button onclick="setRemoveCodec('${n=YTPROCodecs.audio[t]}',this)" ${"true"==localStorage.getItem(n)?`style="background:${c};color:${dc};"`:""} >${n}\n<svg ${"true"!=localStorage.getItem(n)?'style="display:none"':""} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${dc}"  viewBox="0 0 16 16">\n<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>\n</svg>\n</button>`
        }
        return e += `<br><br>\n<div>Block 60FPS <span onclick="sttCnf(this,'block_60fps');" style="${sttCnf(0,0,"fzoom")}" ><b style="${sttCnf(0,1,"fzoom")}" ></b></span></div> `, e += `<br><br><button onclick="this.parentElement.style.display='none';" style="margin-top:10px;width:25%;float:right;text-align:center;background:${c};color:${dc};" >Done</button>`
    }

    function setRemoveCodec(e, t) {
        "true" == localStorage[e] ? (localStorage.setItem(e, "false"), t.style.background = isD ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)", t.style.color = c, t.children[0].style.display = "none") : (localStorage.setItem(e, "true"), t.style.background = c, t.style.color = dc, t.children[0].style.display = "block")
    }
    async function ytproSettings() {
        var e = document.createElement("div"),
            t = document.createElement("div");
        e.setAttribute("id", "settingsprodiv"), t.setAttribute("id", "ssprodivI"), e.setAttribute("style", "\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.7);\nz-index:9999;\n"), e.addEventListener("click", (function(e) {
            e.target == t || t.contains(e.target) || history.back()
        })), t.setAttribute("style", `\nheight:65%;width:calc(95% - 20px);overflow:auto;\nbackground:${isD?"#212121":"#f1f1f1"};\nposition:fixed;\nbottom:20px;\nz-index:99999999999999;padding:10px;text-align:center;border-radius:25px;color:${c};text-align:center;\ncolor:${isD?"#ccc":"#444"};`), t.innerHTML = `<style>\n@import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');\n#settingsprodiv a{text-decoration:underline;} #settingsprodiv li{list-style:none; display:flex;align-items:center;justify-content:center;color:#fff;border-radius:25px;padding:10px;background:#000;margin:5px;}\n#ssprodivI div{\nheight:10px;\nwidth:calc(100% - 20px);\npadding:10px;\nfont-size:1.45rem;\ntext-align:left;\ndisplay:flex;\nalign-items:center;\nposition:relative;\nmargin-top:3px;\n}\n#ssprodivI div span{\ndisplay:block;\nheight:23px;\nwidth:40px;\nborder-radius:40px;\nright:10px;\nposition:absolute;\nbackground:#151515;\n}\n#ssprodivI div span b{\ndisplay:block;\nheight:19px;\nwidth:19px;\nposition:absolute;\nright:2px;\ntop:2px;\nborder-radius:50px;\nbackground:#fff;\n}\n#ssprodivI div input::placeholder{color:${isD?"white":"#000"};}\n#ssprodivI div input,#ssprodivI div button{\nheight:35px;\nbackground:${isD?"rgba(255,255,255,.1)":"rgba(0,0,0,.1)"};\nwidth:100%;\nborder:0;\nborder-radius:20px;\npadding:10px;\nfont-size:1.25rem;\n}\n#ssprodivI button{\nbackground:transparent;\nfont-size:1.45rem;\nwidth:calc(100% - 20px);\nheight:40px;\ncolor:${isD?"#ccc":"#444"};\nmargin-top:3px;\ntext-align:left;\n}\n#ssprodivI button svg{\nfloat:right;\n}\n#ssprodivI .credit{\nfont-family: "Delius", cursive;\nfont-style: normal;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ntext-align:center;\nfont-size:1.55rem;\nfont-weight:bolder;\ncolor:${isD?"#fff":"#000"};\nposition:fixed;\nbottom:20px;\nwidth:calc(95% - 20px);\nleft:calc(2.5% + 0px);\nbackground:${d};\nborder-radius:0 0 25px 25px;\nbackdrop-filter:blur(10px);\nheight:15px;\n}\n#ssprodivI .geminiModels,#ssprodivI .disableCodecs,#ssprodivI .geminiPrompt{\nheight:auto;\nmin-height:100px;\npadding-bottom:12px;\nbackground:${isD?"#212121":"#f1f1f1"};\nposition:fixed;\ndisplay:block;\nwidth:calc(95% - 20px);\nleft:calc(2.5% + 0px);\nbottom:20px;\nz-index:999999;\nbox-shadow:0px 0px 5px black;\nborder-radius:25px;\ndisplay:none;\n}\n#ssprodivI .geminiModels:before,#ssprodivI .disableCodecs:before,#ssprodivI .geminiPrompt:before{\nheight:100%;\nwidth:100%;\nbackground:rgba(0,0,0,.6);\nposition:fixed;\ntop:0;\nleft:0;\nz-index:-999;\n}\n#ssprodivI .geminiPrompt textarea{\nheight:300px;\nwidth:95%;\nborder-radius:20px;\npadding:15px;\nbackground:${d};\n}\n#ssprodivI .disableCodecs{\ncolumn:50%;\n}\n#ssprodivI .disableCodecs button{\nwidth:48%;\ncolumn:50%;\nmargin-right:2%;\ncolor:${c};\n}\n</style>`, t.innerHTML += `<br><b style='font-size:18px' >YT PRO Settings</b>\n<span style="font-size:10px">v${YTProVer}</span>\n<br><br>\n<div><input type="url" placeholder="Enter Youtube URL" onkeyup="searchUrl(this,event)"></div>\n<br>\n<button onclick="window.location.hash='#hearts';">Liked Videos\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${isD?"#ccc":"#444"}" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg>\n</button>\n<br>\n<button onclick="checkUpdates();">Check for Updates\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${isD?"#ccc":"#444"}"  viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg>\n</button>\n<br>\n<div>Autoskip Sponsors <span onclick="sttCnf(this,'autoSpn');" style="${sttCnf(0,0,"autoSpn")}" ><b style="${sttCnf(0,1,"autoSpn")}"></b></span></div>\n<br>\n<div>Auto FitScreen <span onclick="sttCnf(this,'fitS');" style="${sttCnf(0,0,"fitS")}" ><b style="${sttCnf(0,1,"fitS")}" ></b></span></div> \n<br>\n<div>Force Zoom <span onclick="sttCnf(this,'fzoom');" style="${sttCnf(0,0,"fzoom")}" ><b style="${sttCnf(0,1,"fzoom")}" ></b></span></div> \n<br>\n<div>Background Play <span onclick="sttCnf(this,'bgplay');" style="${sttCnf(0,0,"bgplay")}" ><b style="${sttCnf(0,1,"bgplay")}" ></b></span></div> \n<br>\n<div>Hide Shorts <span onclick="sttCnf(this,'shorts');" style="${sttCnf(0,0,"shorts")}" ><b style="${sttCnf(0,1,"shorts")}" ></b></span></div> \n<br>\n<div>Use single Gemini chat <span onclick="sttCnf(this,'saveCInfo');" style="${sttCnf(0,0,"saveCInfo")}" ><b style="${sttCnf(0,1,"saveCInfo")}"></b></span></div>\n<br>\n<button onclick="document.getElementsByClassName('geminiModels')[0].style.display='block';document.getElementsByClassName('geminiModels')[0].innerHTML=getGeminiModels();">Select Gemini Model\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${isD?"#ccc":"#444"}" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg>\n</button>\n<br>\n<button onclick="document.getElementsByClassName('geminiPrompt')[0].style.display='block';">Edit Gemini Prompt\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${isD?"#ccc":"#444"}" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg>\n</button>\n<br>\n<button onclick="document.getElementsByClassName('disableCodecs')[0].style.display='block';document.getElementsByClassName('disableCodecs')[0].innerHTML=getYTPROCodecs();">Disable Codecs\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${isD?"#ccc":"#444"}" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg>\n</button>\n<br>\n<button onclick="Android.oplink('https://github.com/prateek-chaubey/YTPRO/issues')">Report Bugs\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${isD?"#ccc":"#444"}" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg>\n</button>\n<br>\n<div>Developer Mode <span onclick="sttCnf(this,'devMode');" style="${sttCnf(0,0,"devMode")}" ><b style="${sttCnf(0,1,"devMode")}"></b></span></div>\n<br><br>\n<p style="font-size:1.25rem;width:calc(100% - 20px);margin:auto;text-align:left"><b style="font-weight:bold">Disclaimer</b>: This is an unofficial OSS Youtube Mod, all the logos and brand names are property of Google LLC.<br>\nYou can find the source code at <a href="#" style="font-family:monospace;" onclick="Android.oplink('https://github.com/prateek-chaubey/YTPRO')" > https://github.com/prateek-chaubey/YTPRO</a>\n<br><br></p><br><br><br>\n\n<div class="geminiModels">\n\n</div>\n\n\n<div class="geminiPrompt" style="text-align:center;">\n\n<textarea>\n${localStorage.getItem("prompt")}\n</textarea>\n\n<button onclick="localStorage.setItem('prompt',this.previousElementSibling.value);this.parentElement.style.display='none';" style="margin-top:10px;width:25%;float:right;text-align:center;background:${c};color:${dc};" >Save</button>\n<br><br>\n</div>\n\n\n<div class="disableCodecs">\n\n</div>\n\n\n<div class="credit" >\n<z style="margin-right:6px">Made with </z>\n\n<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="-1 -1 18 18">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" \nstroke="black" ${isD?"":"stroke-width='1'"} stroke-linejoin="round" stroke-linecap="round"/>\n</svg>\n\n\n\n<z style="margin-left:6px">by Prateek Chaubey</z>\n</div>\n`, document.body.appendChild(e), e.appendChild(t)
    }

    function searchUrl(e, t) {
        if (13 === t.keyCode || "Enter" === t) {
            var n = "",
                i = "",
                o = e.value;
            try {
                n = new URL(o)
            } catch {
                return void Android.showToast("Enter a valid URL")
            }(n.hostname.indexOf("youtube.com") > -1 || n.hostname.indexOf("youtu.be") > -1) && (n.pathname.indexOf("shorts") > -1 ? i = n.pathname.substr(8, n.pathname.length) : n.pathname.indexOf("watch") > -1 ? i = n.searchParams.get("v") : n.hostname.indexOf("youtu.be") > -1 && (i = i = n.pathname.substr(1, n.pathname.length)));
            var a = document.createElement("a");
            a.href = `/watch?v=${i}`, document.body.appendChild(a);
            try {
                document.getElementById("settingsprodiv").remove()
            } catch {}
            a.click()
        }
    }

    function checkUpdates() {
        parseFloat(Android.getInfo()) < parseFloat(YTProVer) ? updateModel() : Android.showToast("Your app is up to date"), fetch("https://cdn.jsdelivr.net/npm/ytpro", {
            cache: "reload"
        }), fetch("https://cdn.jsdelivr.net/npm/ytpro/bgplay.js", {
            cache: "reload"
        }), fetch("https://cdn.jsdelivr.net/npm/ytpro/innertube.js", {
            cache: "reload"
        })
    }

    function sttCnf(e, t, n) {
        if (isD) var i = ["#000", "#717171", "#fff"];
        else i = ["#fff", "#909090", "#151515"];
        if ("string" == typeof n) return "true" != localStorage.getItem(n) ? 1 == t ? `background:${i[0]};left:2px;` : `background:${i[1]};` : 1 == t ? `background:${i[0]};` : `background:${i[2]};`;
        if ("true" == localStorage.getItem(t) ? (localStorage.setItem(t, "false"), e.style.background = i[1], e.children[0].style.left = "2px", e.children[0].style.background = i[0]) : (localStorage.setItem(t, "true"), e.style.background = i[2], e.children[0].style.left = "auto", e.children[0].style.right = "2px", e.children[0].style.background = i[0]), "false" == localStorage.getItem("fzoom") ? document.getElementsByName("viewport")[0].setAttribute("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,") : document.getElementsByName("viewport")[0].setAttribute("content", ""), "true" == localStorage.getItem("bgplay") ? Android.setBgPlay(!0) : Android.setBgPlay(!1), "false" == localStorage.getItem("devMode")) try {
            eruda.destroy()
        } catch {} else window.location.href = "javascript:(function () { var script = document.createElement('script'); script.src=\"//cdn.jsdelivr.net/npm/eruda\"; document.body.appendChild(script); script.onload = function () { eruda.init();} })();"
    }

    function formatFileSize(e) {
        var t = parseInt(e);
        for (var n = 0; t > 1024; n++) t /= 1024;
        return ` | ${t.toFixed(1)} ${["B","KB","MB","GB","TB","PB"][n]}`
    }
    async function ytproDownVid() {
        var e = document.createElement("div"),
            t = document.createElement("div");
        t.setAttribute("id", "downytprodiv"), e.setAttribute("id", "outerdownytprodiv"), e.setAttribute("style", "\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.4);\nz-index:99999999999999;\n"), e.addEventListener("click", (function(e) {
            e.target == t || t.contains(e.target) || history.back()
        })), t.setAttribute("style", `\nheight:50%;width:85%;overflow:auto;background:${isD?"#212121":"#f1f1f1"};\nposition:absolute;bottom:20px;\nz-index:99999999999999;padding:20px;text-align:center;border-radius:25px;text-align:center;\n`), document.body.appendChild(e), e.appendChild(t);
        window.location.pathname.indexOf("shorts") > -1 ? window.location.pathname.substr(8, window.location.pathname.length) : new URLSearchParams(window.location.search).get("v"), t.innerHTML = "Loading...", window.getDownloadStreams()
    }

    function showHideAdaptives() {
        document.querySelectorAll(".adpFormats").forEach((e => {
            "none" == e.style.display ? e.style.display = "flex" : e.style.display = "none"
        }))
    }

    function downCap(e, t) {
        Android.downvid(t, `https://m.youtube.com${e}`, "plain/text")
    }

    function YTDownVid(e, t) {
        var n = "";
        ".png" == t ? n = "image/png" : ".mp4" == t ? n = "video/mp4" : ".mp3" == t && (n = "audio/mp3"), Android.downvid(e.getAttribute("data-ytprotit") + t, e.getAttribute("data-ytprourl"), n)
    }

    function checkDirection(e) {
        n > t && n - t > 20 ? minimize(!0) : n < t && t - n > 20 && minimize(!1)
    }

    function minimize(e) {
        var t = document.getElementById("miniIframe") || (() => {
                var e = document.createElement("iframe");
                e.setAttribute("id", "miniIframe"), e.setAttribute("style", `\nheight:99.999%;width:100%;\nbackground:${c};\ntop:0px;\nline-height:50px;\nposition:fixed;\nleft:0;\nz-index:999;\nborder:0;\n`), e.src = "https://m.youtube.com/", document.body.appendChild(e);
                var t = e.contentWindow || e.contentDocument.defaultView,
                    n = t.document;
                "complete" == n.readyState && t.trustedTypes && t.trustedTypes.createPolicy && !t.trustedTypes.defaultPolicy && t.trustedTypes.createPolicy("default", {
                    createHTML: e => e,
                    createScriptURL: e => e,
                    createScript: e => e
                }), t.navigation.addEventListener("navigate", (e => {
                    if (e.destination.url.indexOf("youtube.com") > -1) {
                        (e.destination.url.indexOf("/watch") > -1 || e.destination.url.indexOf("/shorts") > -1) && (window.location.href = e.destination.url);
                        n.createElement("script")
                    } else window.location.href = e.destination.url
                }));
                var i = n.createElement("script"),
                    o = n.createTextNode("window.addEventListener('DOMContentLoaded', function() {\nvar script2 = document.createElement('script');\nscript2.src=\"//cdn.jsdelivr.net/npm/ytpro\";\ndocument.body.appendChild(script2);\n});\n");
                return i.appendChild(o), n.body.appendChild(i), e
            })(),
            n = document.getElementById("player-container-id");
        e ? (t.style.display = "block", n.setAttribute("ogTop", getComputedStyle(n).top), n.style.transform = "scale(0.65)", n.style.top = window.screen.height - 2 * n.getBoundingClientRect().height + "px", n.style.zIndex = "9999") : (t.style.display = "none", n.style.transform = "scale(1)", n.style.top = n.getAttribute("ogTop"), n.style.zIndex = "normal", n.removeAttribute("ogTop"))
    }

    function callbackSNlM0e() {
        return new Promise((e => {
            callbackSNlM0e.resolve = e
        }))
    }

    function callbackGeminiClient() {
        return new Promise((e => {
            callbackGeminiClient.resolve = e
        }))
    }

    function handleGeminiResponse(e) {
        var t = e.stream;
        if (null == t) return document.getElementById("GeminiResponse").innerHTML = '<center style="margin-top:15px" > An error Occurred while connecting to Gemini';
        var n = t.split("\n"),
            i = (e => {
                for (var t in e) try {
                    var n = JSON.parse(e[t][2]);
                    if (n[4]?.[0]?.[0].indexOf("rc_") > -1) return n
                } catch (e) {
                    console.log("JSON parse error: " + e)
                }
            })(JSON.parse(n[2])) || [],
            o = [];
        o.push(i?.[1]?.[0]), o.push(i?.[1]?.[1]), o.push(i?.[4]?.[0]?.[0]), localStorage.setItem("geminiChatInfo", o.toString()), i = i?.[4]?.[0];
        var a = i?.[1]?.[0] || "";
        a = a.replace(/http:\/\/googleusercontent\.com\/\S+/g, "");
        var l = i?.[37]?.[0]?.[0] || null,
            r = [];
        for (var s in i?.[12]?.[1]) {
            var d = i?.[12]?.[1]?.[s];
            r.push({
                url: d[0][0][0],
                alt: d[0][4],
                title: d[7][0]
            }), a += `<center><img alt="${d[0][4]}" src="${d[0][0][0]}"></center>`
        }
        let c = new showdown.Converter,
            p = (e => {
                var t = e,
                    n = t.match(/href="([^"]*)"/g) || [],
                    i = [...n].map((e => e.replace(/href="|"/g, "")));
                return n.forEach(((e, n) => {
                    var o = new URL(i[n]).searchParams.get("t");
                    null != o ? t = t.replace(e, `href="javascript:void(0);" onclick="document.getElementsByClassName('video-stream')[0].currentTime='${o}'"`) : i[n].indexOf("youtube.com") < 0 && i[n].indexOf("youtu.be") < 0 && (t = t.replace(e, `href="javascript:void(0);" onclick="try{document.getElementsByClassName('video-stream')[0].pause();}catch{}Android.oplink('${i[n]}')"`))
                })), t
            })(c.makeHtml(a)),
            h = null != l ? `<button onclick="(this.nextElementSibling.style.height=='auto') ? (this.children[0].style.transform='rotate(-90deg)',this.nextElementSibling.style.height='0') : (this.children[0].style.transform='rotate(90deg)',this.nextElementSibling.style.height='auto');" class="think" >Show Thinking \n<svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg);margin-left:10px" width="16" height="16" fill="${isD?"#ccc":"#444"}" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n</svg></button>\n<div class="geminiThoughts">\n<br>\n${c.makeHtml(l)}\n\n\n</div><br>` : "";
        document.getElementById("GeminiResponse").innerHTML = `<a href="https://gemini.google.com/chat/${o[0].replace("c_","")}" >Go to the chat</a><br><br>\n\n${h}\n\n\n\n<div class="geminiAnswer">\n${p}\n</div>\n`
    }
    async function geminiInfo() {
        if (null == document.getElementById("GeminiResponse"))(e = document.createElement("div")).setAttribute("style", `min-height:80px;max-height:400px;display:block;height:auto;overflow:scroll;font-weight:400;width:calc(92% - 20px);font-size:14px;padding:10px;position:relative;margin:auto;background:${d};border-radius:15px;margin-bottom:8px;`), e.setAttribute("id", "GeminiResponse"), insertAfter(document.getElementById("ytproMainDivE"), e);
        else var e = document.getElementById("GeminiResponse");
        document.getElementById("GeminiResponse").innerHTML = '\n<div class="geminiLoader"></div>';
        var t = Android.getAllCookies(window.location.href);
        if (t.indexOf("__Secure-1PSID=") < 0) return void(e.innerHTML = `\n<center style="margin-top:15px">\n<span >Sign in to use Gemini<span>\n<br><br>\n<a href="https://accounts.google.com/ServiceLogin?service=youtube" >\n<button style="background:${c};color:${isD?"#000":"#fff"};font-weight:500;height:35px;width:90px;border-radius:25px;text-align:center;line-height:35px;">Sign In</button>\n</a>\n<br><br>\n\n</center>`);
        t = t.split(";");
        var n = "";
        t.forEach((e => {
            (e.indexOf("__Secure-1PSID=") > -1 || e.indexOf("__Secure-1PSIDTS=") > -1) && (n += e + ";")
        }));
        var i = JSON.stringify({
            accept: "*/*",
            "accept-language": "en",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            "x-goog-ext-525001261-jspb": GeminiModels[localStorage.getItem("geminiModel")],
            "x-same-domain": "1",
            cookie: n,
            Referer: "https://gemini.google.com/",
            "Referrer-Policy": "origin"
        });
        if ("" == GeminiAT) {
            Android.getSNlM0e(n), GeminiAT = await callbackSNlM0e();
            var o = document.createElement("script");
            o.src = "//cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js", document.body.appendChild(o)
        }
        var a = localStorage.getItem("prompt").replaceAll("{url}", window.location.href).replaceAll("{videoId}", new URL(window.location.href).searchParams.get("v")).replaceAll("{title}", document.getElementsByClassName("slim-video-metadata-header")[0].textContent.replaceAll("|", "").replaceAll("\\", "").replaceAll("?", "").replaceAll("*", "").replaceAll("<", "").replaceAll("/", "").replaceAll(":", "").replaceAll('"', "").replaceAll(">", "")),
            l = null;
        "true" == localStorage.getItem("saveCInfo") && null != localStorage.getItem("geminiChatInfo") && (l = localStorage.getItem("geminiChatInfo").split(","));
        const r = new URLSearchParams;
        r.append("f.req", JSON.stringify([null, JSON.stringify([
            [a], null, l
        ])])), r.append("at", GeminiAT), Android.GeminiClient("https://gemini.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate", i, r.toString()), handleGeminiResponse(await callbackGeminiClient())
    }
    async function pkc() {
        if (window.location.href.indexOf("youtube.com/watch") > -1) {
            try {
                var e = document.getElementsByTagName("dislike-button-view-model")[0].children[0];
                e.children[0].children[0].children[0].style.width = "90px", e.children[0].children[0].children[0].children[0].style.position = "absolute", e.children[0].children[0].children[0].children[0].style.left = "15px", e.parentElement.innerHTML = `<yt-button-shape class="yt-spec-button-shape-next__button-shape-wiz-class" nt="true">\n<button class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-button yt-spec-button-shape-next--segmented-end yt-spec-button-shape-next--enable-backdrop-filter-experiment" title="" aria-pressed="false" aria-label="Dislike this video" aria-disabled="false" nt="true" style="width: 80px;"><div class="yt-spec-button-shape-next__icon" aria-hidden="true" nt="true" style="position: absolute; left: 15px;"><c3-icon style="height: 24px; width: 24px;"><span class="yt-icon-shape yt-spec-icon-shape"><div style="width: 100%; height: 100%; display: block; fill: currentcolor;"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path></svg></div></span></c3-icon></div><yt-touch-feedback-shape style="border-radius: inherit;"><div aria-hidden="true" class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"><div class="yt-spec-touch-feedback-shape__stroke"></div><div class="yt-spec-touch-feedback-shape__fill"></div></div></yt-touch-feedback-shape>\n\n<span style="margin-left:20px;margin-bottom:3px;">${dislikes}</span>\n\n</button></yt-button-shape>\n`
            } catch (e) {}
            if (null == document.getElementById("ytproMainDivE")) {
                var t = document.createElement("div");
                t.setAttribute("id", "ytproMainDivE"), t.setAttribute("style", "\nheight:50px;width:100%;display:block;overflow:auto;\n"), insertAfter(document.getElementsByClassName("slim-video-action-bar-actions")[0], t);
                var n = document.createElement("div");
                n.setAttribute("style", "\nheight:50px;width:100%;display:flex;overflow:auto;\nalign-items:center;justify-content:center;padding-left:20px;padding-right:10px;\n"), t.appendChild(n);
                var i = document.createElement("div");
                sty(i), i.style.width = "115px", i.style.height = "calc(65% - 4.5px)", i.style.position = "relative", i.style.background = `linear-gradient(${isD?"#272727,#272727":"#f2f2f2,#f2f2f2"}) padding-box , linear-gradient(16deg ,#4285f4 ,#9b72cb ,#d96570) border-box`, i.style.border = "2px solid transparent", i.innerHTML = `\n<svg style="height:16px;width:16px" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)"/><defs><radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"><stop offset=".067" stop-color="#9168C0"/><stop offset=".343" stop-color="#5684D1"/><stop offset=".672" stop-color="#1BA1E3"/></radialGradient></defs></svg>\n<span style="margin-left:4px">Gemini</span>\n<style type="text/css">\n#GeminiResponse img{\nmax-width:90%;\nheight:auto;\nborder-radius:10px;\nmargin-top:5px;\n}\n#GeminiResponse a{\ncolor:rgb(62,166,255);\n}\n.geminiLoader,.geminiLoader:before,.geminiLoader:after{\ncontent:'';\nheight:10px;\nwidth:70%;\nposition:absolute;\ntop:15px;\nborder-radius:5px;\nleft:10px;\nbackground:${d};\nanimation: geminiLoad 1s linear infinite alternate;\n}\n.geminiLoader:before{\ntop:27px;\nleft:0;\n}\n.geminiLoader:after{\ntop:54px;\nleft:0;\nwidth:90%;\n}\n@keyframes geminiLoad{\n0% {\nopacity:1;\n}\n100% {\nopacity:.4;\n}\n}\n.geminiThoughts{\nheight:0;\nwidth:calc(100% - 30px);\ntransition:5s;\nfloat:left;\noverflow:hidden;\npadding-left:5px;\nfont-style:italic;\nborder-left:3px solid ${d};\ndisplay:block;\nfloat:none;\nclear:both;\n}\n.geminiAnswer{\nheight:auto;\nwidth:100%;\ndisplay:block;\nfloat:none;\nclear:both;\n}\n#GeminiResponse .think{\nbackground:transparent;\nfont-size:1.45rem;\nwidth:calc(100% - 20px);\nheight:20px;\ncolor:${isD?"#ccc":"#444"};\nmargin-top:3px;\ntext-align:left;\ndisplay:flex;\npadding-left:5px;\nborder-left:3px solid ${d};\n}\n</style>\n`, n.appendChild(i), i.addEventListener("click", (async function() {
                    parseFloat(Android.getInfo()) < parseFloat(YTProVer) ? updateModel() : geminiInfo()
                }));
                var o = document.createElement("div");
                sty(o), isHeart() ? o.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f00" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg><span style="margin-left:8px">Heart<span>' : o.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${c}" viewBox="0 0 16 16">\n<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n</svg><span style="margin-left:8px">Heart<span>`, n.appendChild(o), o.addEventListener("click", (() => {
                    ytProHeart(o)
                }));
                var a = document.createElement("div");
                sty(a), a.style.width = "140px", a.innerHTML = `${downBtn.replace('width="18"','width="24"').replace('height="18"','height="24"')}<span style="margin-left:2px">Download<span>`, n.appendChild(a), a.addEventListener("click", (function() {
                    window.location.hash = "download"
                }));
                var l = document.createElement("div");
                sty(l), l.style.width = "140px", l.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${c}"  viewBox="0 0 16 16">\n<path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>\n<path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z"/>\n</svg>\n<span style="margin-left:8px">PIP Mode<span>`, n.appendChild(l), l.addEventListener("click", (function() {
                    PIPlayer(!0)
                }))
            }
        } else if (window.location.href.indexOf("youtube.com/shorts") > -1) {
            if (null == document.getElementById("ytproMainSDivE")) {
                var r = document.createElement("div");
                r.setAttribute("id", "ytproMainSDivE"), r.setAttribute("style", "width:50px;height:auto;position:relative;display:block;"), ysDown = document.createElement("div"), ysDown.setAttribute("style", "\nheight:48px;width:48px;display:flex;align-items:center;justify-content:center;\nbackground:rgba(0,0,0,.3);border-radius:50%;margin-bottom:20px;\n"), ysDown.innerHTML = downBtn.replace(`fill="${c}"`, 'fill="#fff"').replace('width="18"', 'width="30"').replace('height="18"', 'height="30"'), ysDown.addEventListener("click", (function() {
                    window.location.hash = "download"
                })), ysHeart = document.createElement("div"), ysHeart.setAttribute("style", "\nheight:48px;width:48px;\ndisplay:flex;align-items:center;justify-content:center;\nbackground:rgba(0,0,0,.3);border-radius:50%;margin-top:8px;margin-bottom:0px;\n"), isHeart() ? ysHeart.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#f00" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg>' : ysHeart.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#fff" viewBox="0 0 16 16">\n<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n</svg>', ysHeart.addEventListener("click", (function() {
                    ytProHeart(ysHeart)
                }));
                try {
                    document.getElementsByClassName("reel-player-overlay-actions")[0].insertBefore(r, document.getElementsByClassName("reel-player-overlay-actions")[0].children[0]), r.appendChild(ysDown), r.appendChild(ysHeart)
                } catch {}
            }
            try {
                document.querySelectorAll('[aria-label="Dislike this video"]')[0].nextElementSibling.children[0].innerHTML = dislikes
            } catch {}
        }
    }
    async function showHearts() {
        var e = document.createElement("div"),
            t = document.createElement("div");
        if (t.setAttribute("id", "heartytprodiv"), e.setAttribute("id", "outerheartsdiv"), e.setAttribute("style", "\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.4);\nz-index:99999999999999;\n"), t.setAttribute("style", `\nheight:50%;width:85%;overflow:auto;background:${isD?"#212121":"#f1f1f1"};\nposition:absolute;bottom:20px;\nz-index:99999999999999;padding:20px;text-align:center;border-radius:25px;text-align:center;\n`), t.innerHTML = `<style>#heartytprodiv a{text-decoration:none;} #heartytprodiv li{list-style:none; display:flex;align-items:center;border-radius:15px;padding:0px;background:${isD?"rgba(0,0,0,.5)":"#fff"};margin:5px;}</style>`, t.innerHTML += "Liked Videos<ul id='listurl'>", t.innerHTML += "<style>.thum{height:70px;border-radius:5px;}.thum img{float:left;height:70px;width:125px;border-radius:15px 0 0 15px;flex-shrink: 0;}</style>", document.body.appendChild(e), e.appendChild(t), e.addEventListener("click", (function(e) {
                event.composedPath().includes(t) || history.back()
            })), null == localStorage.getItem("hearts")) t.innerHTML += "No Videos Found";
        else {
            var n = JSON.parse(localStorage.getItem("hearts"));
            if (0 === Object.keys(n).length) return t.innerHTML += "No Videos Found";
            for (var i = Object.keys(n).length - 1; i > -1; i--) {
                var o = Object.keys(n)[i];
                t.innerHTML += `<li class="thum" >\n<img onclick="window.location.href=('https://youtu.be/${o}');" src="${n[o].thumb}" ><br>\n<div style="width:calc(100% - 170px);margin-left:5px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical; -webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;" onclick="window.location.href=('https://youtu.be/${o}');" >${n[o].title}</div>\n<div style="width:calc(100% - (100% - 35px))">\n<svg onclick="remHeart(this,'${o}');" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:0px;" fill="#f24" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>\n</div>\n</li>`, await new Promise((e => setTimeout(e, 1)))
            }
        }
    }

    function remHeart(e, t) {
        if (localStorage.getItem("hearts")?.indexOf(t) > -1) {
            e.parentElement.parentElement.remove();
            var n = JSON.parse(localStorage.getItem("hearts") || "{}");
            delete n[t], localStorage.setItem("hearts", JSON.stringify(n))
        }
    }

    function ytProHeart(e) {
        var t = new URLSearchParams(window.location.search).get("v") || window.location.pathname.replace("/shorts/", ""),
            n = document.getElementsByClassName("video-stream")[0],
            i = document.createElement("canvas");
        i.style.width = "1600px", i.style.height = "900px", i.style.background = "black";
        var o = i.getContext("2d");
        window.location.pathname.indexOf("shorts") > -1 ? o.drawImage(n, 105, 0, 90, 160) : o.drawImage(n, 0, 0, 320, 180);
        var a = i.toDataURL("image/jpeg");
        if (window.location.pathname.indexOf("shorts") > -1) var l = {
            thumb: a,
            title: document.getElementsByClassName("ytShortsVideoTitleViewModelShortsVideoTitle")[0].textContent.replaceAll("|", "").replaceAll("\\", "").replaceAll("?", "").replaceAll("*", "").replaceAll("<", "").replaceAll("/", "").replaceAll(":", "").replaceAll('"', "").replaceAll(">", "")
        };
        else l = {
            thumb: a,
            title: document.getElementsByClassName("slim-video-metadata-header")[0].textContent.replaceAll("|", "").replaceAll("\\", "").replaceAll("?", "").replaceAll("*", "").replaceAll("<", "").replaceAll("/", "").replaceAll(":", "").replaceAll('"', "").replaceAll(">", "")
        };
        var r, s = "16",
            d = '<span style="margin-left:8px">Heart<span>';
        (d = window.location.href.indexOf("youtube.com/shorts") > -1 ? "" : '<span style="margin-left:8px">Heart<span>', s = window.location.href.indexOf("youtube.com/shorts") > -1 ? "23" : "16", localStorage.getItem("hearts")?.indexOf(t) > -1) ? (delete(r = JSON.parse(localStorage.getItem("hearts") || "{}"))[t], localStorage.setItem("hearts", JSON.stringify(r)), e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" fill="${window.location.href.indexOf("youtube.com/shorts")>-1?"#fff":c}" viewBox="0 0 16 16">\n<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n</svg>${d}`) : ((r = JSON.parse(localStorage.getItem("hearts") || "{}"))[t] = l, localStorage.setItem("hearts", JSON.stringify(r)), e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" fill="#f00" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg>${d}`)
    }

    function isHeart() {
        return localStorage.getItem("hearts")?.indexOf(new URLSearchParams(window.location.search).get("v")) > -1 || localStorage.getItem("hearts")?.indexOf(window.location.pathname.replace("/shorts/", "")) > -1
    }

    function removePIP() {
        pauseAllowed = !0, pipSize(), document.getElementsByClassName("video-stream")[0].pause(), setTimeout((() => {
            document.getElementsByClassName("video-stream")[0].play()
        }), 5)
    }

    function PIPlayer(e = !1) {
        var t = document.getElementsByClassName("video-stream")[0];
        if ((e || !e && !t.paused) && window.location.pathname.indexOf("watch") > 0 && document.getElementById("player-container-id") !== document.fullscreenElement) {
            t.play(), pauseAllowed = !1, t.getBoundingClientRect().height > t.getBoundingClientRect().width ? Android.pipvid("portrait") : Android.pipvid("landscape");
            var n = document.getElementById("player-container-id"),
                i = document.getElementsByClassName("video-stream")[0];
            n.setAttribute("ogTop", getComputedStyle(n).top), n.setAttribute("zI", getComputedStyle(n).zIndex), n.setAttribute("ogHeight", n.getBoundingClientRect().height), n.setAttribute("ogWidth", n.getBoundingClientRect().width), i.setAttribute("ogHeight", i.getBoundingClientRect().height), i.setAttribute("ogWidth", i.getBoundingClientRect().width), i.setAttribute("ogTop", getComputedStyle(i).top)
        }
    }

    function pipSize() {
        var e = document.getElementById("player-container-id"),
            t = document.getElementsByClassName("video-stream")[0];
        if (null != t && null != e)
            if (pauseAllowed) {
                if (null == document.getElementsByClassName("video-stream")[0].getAttribute("ogTop")) return;
                Object.assign(e.style, {
                    top: e.getAttribute("ogTop"),
                    "z-index": e.getAttribute("zI")
                }), Object.assign(t.style, {
                    height: t.getAttribute("ogHeight") + "px",
                    width: t.getAttribute("ogWidth") + "px",
                    top: t.getAttribute("ogTop"),
                    "z-index": "auto",
                    position: "absolute"
                }), e.removeAttribute("ogTop"), e.removeAttribute("zI"), e.removeAttribute("ogHeight"), e.removeAttribute("ogWidth"), t.removeAttribute("ogTop"), t.removeAttribute("ogHeight"), t.removeAttribute("ogWidth"), document.getElementById("player-control-container").style.display = "block"
            } else Object.assign(e.style, {
                "z-index": 9999999,
                top: 0
            }), Object.assign(t.style, {
                height: window.innerHeight + "px",
                width: window.innerWidth + "px",
                top: 0,
                left: 0,
                position: "fixed"
            }), t.style.zIndex = "999999999999999", document.getElementById("player-control-container").style.display = "none", document.getElementById("movie_player").removeAttribute("style")
    }
    document.body.addEventListener("touchstart", (e => {
        t = e.changedTouches[0].screenY
    }), {
        capture: !0
    }), document.body.addEventListener("touchend", (e => {
        n = e.changedTouches[0].screenY, !e.target.className.toString().includes("video-stream") && !e.target.className.toString().includes("player-controls-background") || document.fullscreenElement || checkDirection()
    }), {
        capture: !0
    }), navigation.addEventListener("navigate", (e => {
        (e.destination.url.indexOf("watch") > -1 || e.destination.url.indexOf("shorts") > -1) && (fDislikes(e.destination.url), checkSponsors(e.destination.url))
    })), setInterval(pkc, 0), HTMLMediaElement.prototype.pause = function() {
        if (pauseAllowed || PIPause) return e.apply(this, arguments);
        this.paused && this.play().catch((() => {}))
    };
    const i = Element.prototype.requestFullscreen;

    function adsBlock() {
        try {
            document.getElementsByClassName("video-stream")[0].removeAttribute("disablepictureinpicture")
        } catch {}
        var e = document.getElementsByTagName("ad-slot-renderer");
        for (var t in e) try {
            e[t].remove()
        } catch {}
        try {
            document.getElementsByClassName("ad-interrupting")[0].getElementsByTagName("video")[0].currentTime = document.getElementsByClassName("ad-interrupting")[0].getElementsByTagName("video")[0].duration, document.getElementsByClassName("ytp-skip-ad-button")[0].click()
        } catch {}
        try {
            document.getElementsByTagName("ytm-promoted-sparkles-web-renderer")[0].remove()
        } catch {}
        try {
            document.getElementsByTagName("ytm-companion-ad-renderer")[0].remove()
        } catch {}
        try {
            document.querySelectorAll("a").forEach((e => {
                e.href.indexOf("intent://") > -1 && (e.style.display = "none")
            }))
        } catch {}
        try {
            document.getElementsByTagName("ytm-paid-content-overlay-renderer")[0].style.display = "none"
        } catch {}
        if ("true" == localStorage.getItem("shorts")) {
            for (t in document.getElementsByClassName("big-shorts-singleton")) try {
                document.getElementsByClassName("big-shorts-singleton")[t].remove()
            } catch {}
            for (t in document.getElementsByTagName("ytm-reel-shelf-renderer")) {
                try {
                    document.getElementsByTagName("ytm-reel-shelf-renderer")[t].remove()
                } catch {}
                for (t in document.getElementsByTagName("ytm-shorts-lockup-view-model")) try {
                    document.getElementsByTagName("ytm-shorts-lockup-view-model")[t].remove()
                } catch {}
            }
        }
    }

    function addMaxButton() {
        if (document.getElementById("player-container-id") === document.fullscreenElement) {
            if (screen.height - window.innerHeight > 5) return;
            var e = document.getElementsByClassName("video-stream")[0],
                t = document.createElement("div");
            if (t.setAttribute("id", "mE"), t.setAttribute("style", "position:absolute;right:60px;padding:15px;"), "true" == localStorage.getItem("fitS")) {
                var n = Math.max(screen.height / e.getBoundingClientRect().height, screen.width / e.getBoundingClientRect().width);
                t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"/>\n</svg>'
            } else {
                n = 1;
                t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>\n</svg>'
            }
            console.log(n), t.addEventListener("click", (() => {
                var n = Math.max(screen.height / e.getBoundingClientRect().height, screen.width / e.getBoundingClientRect().width);
                n < 1 && (n = 1), e.getBoundingClientRect().width / e.offsetWidth > 1 ? (t.setAttribute("scale", n), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>\n</svg>') : (t.setAttribute("scale", n), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"/>\n</svg>')
            })), null == document.getElementById("mE") && (document.getElementsByClassName("player-controls-bottom")[0].appendChild(t), t.setAttribute("scale", n)), e.style.transform = `scale(${document.getElementById("mE").getAttribute("scale")})`
        } else try {
            document.getElementsByClassName("video-stream")[0].style.transform = "scale(1)", document.getElementById("mE").remove()
        } catch {}
    }
    Element.prototype.requestFullscreen = function(...e) {
        var t = document.getElementsByClassName("video-stream")[0];
        return t.getBoundingClientRect().height > t.getBoundingClientRect().width ? Android.fullScreen(!0) : Android.fullScreen(!1), i.apply(this, e)
    }, window.onhashchange = () => {
        try {
            document.getElementById("outerdownytprodiv").remove()
        } catch {}
        try {
            document.getElementById("outerheartsdiv").remove()
        } catch {}
        try {
            document.getElementById("settingsprodiv").remove()
        } catch {}
        "#download" == window.location.hash ? ytproDownVid() : "#settings" == window.location.hash ? ytproSettings() : "#hearts" == window.location.hash && showHearts()
    };
    const o = document.body,
        a = {
            childList: !0,
            subtree: !0
        };

    function updateModel() {
        var e = document.createElement("div");
        e.setAttribute("style", "height:100%;width:100%;position:fixed;display:grid;align-items:center;top:0;left:0;background:rgba(0,0,0,.6);z-index:99999;"), e.innerHTML = `\n<div style="height:auto;width:70%;padding:20px;background:rgba(0,0,0,.6);border:1px solid #888;box-shadow:0px 0px 5px black;color:white;backdrop-filter:blur(10px);border-radius:15px;margin:auto">\n<h2> Mandatory Update </h2><br>\nLatest Version ${YTProVer} of YTPRO is available , update the YTPRO to get latest features.\n<br>- This update is mandatory as it fixes a ton of bugs and improves functionality <br>\n- Fixed PIP mode , BG Player , Downloads<br>\n- Now you can disable / enable codecs as per your choice<br>\n- Added media session in PIP Mode as well<br>\n- Optimized the UI of both Download and Settings menu<br>\n- Fixed the full screen bug<br>\n- Fixed bugs and improved functionality<br>\n- for the full list <u onclick="Android.oplink('https://github.com/prateek-chaubey/YTPRO/releases');" >click here</u>\n<br>\n<br>\n<div style="display:flex;">\n\x3c!--<button style="border:0;border-radius:10px;height:30px;width:150px;background:;" onclick="this.parentElement.parentElement.parentElement.remove();">Cancel</button>--\x3e\n<button style="border:0;border-radius:10px;height:30px;width:150px;background:rgba(255,50,50,.7);float:right;" onclick="Android.downvid('YTPRO.zip','https://nightly.link/prateek-chaubey/YTPro/workflows/gradle/main/YTPRO.zip','application/zip');">Download</button>\n</div>\n\n</div>\n`, document.body.appendChild(e)
    }
    new MutationObserver((() => {
        adsBlock(), pipSize(), addMaxButton(), addSettingsTab()
    })).observe(o, a), window.onload = function() {
        parseFloat(Android.getInfo()) < parseFloat(YTProVer) && ("https://m.youtube.com/" == window.location.href || "https://m.youtube.com" == window.location.href) && updateModel()
    }, document.addEventListener("click", (e => {
        let t = e.target.closest("a");
        if (t && t.href.includes("www.youtube.com/redirect")) {
            try {
                document.getElementsByClassName("video-stream")[0].pause()
            } catch {}
            const n = new URL(t.href).searchParams.get("q");
            setTimeout((() => {
                Android.oplink(n)
            }), 50), e.preventDefault(), e.stopPropagation()
        }
    }), !0)
}
//# sourceMappingURL=/sm/938097f1a14d26f82a1f168d1943de76980c0e11cf1827842639de56fe0613c4.map
