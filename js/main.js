"use strict";function _typeof5(t){return(_typeof5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _typeof4(t){return(_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(t){return _typeof5(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof5(t)})(t)}function _typeof3(t){return(_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return _typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof4(t)})(t)}function _typeof2(t){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return _typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof3(t)})(t)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("DOMContentLoaded",function(){function N(){r&&(e=document.getElementById("site-name").offsetWidth,o=n&&n.offsetWidth,a=i&&i.offsetWidth,r=!1);var t=document.getElementById("nav");window.innerWidth<768||e+o+a>t.offsetWidth-120?t.classList.add("hide-menu"):t.classList.remove("hide-menu")}var e=document.getElementById("site-name").offsetWidth,n=document.querySelector("#menus .menus_items"),o=n&&n.offsetWidth,i=document.querySelector("#search-button"),a=i&&i.offsetWidth,r=!1;function c(t){var e=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--global-font-size")),n="";if(r=!0,t){if(20<=e)return;n=e+1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")||N()}else{if(e<=10)return;n=e-1,document.documentElement.style.setProperty("--global-font-size",n+"px"),document.getElementById("nav").classList.contains("hide-menu")&&N()}saveToLocal.set("global-font-size",n,2)}var l,T=!1;function k(t){t.forEach(function(t){var e=t,t=e.getAttribute("datetime");e.innerText=btf.diffDate(t,!0),e.style.display="inline"})}document.getElementById("rightside").addEventListener("click",function(t){switch(t.target.id||t.target.parentNode.id){case"go-up":btf.scrollToDest(0,500);break;case"rightside_config":document.getElementById("rightside-config-hide").classList.toggle("show");break;case"readmode":document.body.classList.toggle("read-mode");break;case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout(function(){return window.disqusReset()},200);break;case"hide-aside-btn":(e=document.documentElement.classList).contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside");break;case"font-plus":c(!0);break;case"font-minus":c()}var e}),window.refreshFn=function(){var e,n,t,o,i,a,r,c,l,s,d,u,f,m,y,p,h,g,b,L,v,S,A,E,_,O,w,G,I,B;function C(){o.style.overflow="",o.style.paddingRight="",btf.fadeOut(t,.5),n.classList.remove("open")}N(),document.getElementById("nav").classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(GLOBAL_CONFIG_SITE.isToc&&function(){var t=document.getElementById("card-toc"),r=t.getElementsByClassName("toc-content")[0],c=r.querySelectorAll(".toc-link"),o=document.getElementById("article-container");function e(){t.style.animation="toc-close .2s",setTimeout(function(){t.style.cssText="opacity:''; animation: ''; right: ''"},100)}window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop;n(e),i(e)},100));var n=function(t){var e=o.clientHeight,n=document.documentElement.clientHeight,e=(t-o.offsetTop)/(n<e?e-n:document.documentElement.scrollHeight-n),n=Math.round(100*e),n=100<n?100:n<=0?0:n;r.setAttribute("progress-percentage",n)},l=GLOBAL_CONFIG.isanchor;document.getElementById("mobile-toc-button").addEventListener("click",function(){("0"===window.getComputedStyle(t).getPropertyValue("opacity")?function(){t.style.cssText="animation: toc-open .3s; opacity: 1; right: 45px"}:e)()}),r.addEventListener("click",function(t){t.preventDefault(),t=t.target.classList.contains("toc-link")?t.target:t.target.parentElement,btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(t.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&e()});var s=o.querySelectorAll("h1,h2,h3,h4,h5,h6"),d="",i=function(n){if(0===c.length||0===n)return!1;var t,o="",i="";if(s.forEach(function(t,e){n>btf.getEleTop(t)-70&&(o="#"+encodeURI(t.getAttribute("id")),i=e)}),d!==i){if(l&&(t=o,window.history.replaceState&&t!==window.location.hash&&(t=t||location.pathname,window.history.replaceState({},"",t))),""===o)return r.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),void(d=i);d=i,r.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")});var a=c[i];a.classList.add("active"),setTimeout(function(){var t=(e=a).getBoundingClientRect().top,e=r.scrollTop;t>document.documentElement.clientHeight-100&&(r.scrollTop=e+150),t<100&&(r.scrollTop=e-150)},0);for(var e=a.parentNode;!e.matches(".toc");e=e.parentNode)e.matches("li")&&e.classList.add("active")}}}(),void 0!==GLOBAL_CONFIG.noticeOutdate&&(O=GLOBAL_CONFIG.noticeOutdate,(w=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate))>=O.limitDay&&((G=document.createElement("div")).className="post-outdate-notice",G.textContent=O.messagePrev+" "+w+" "+O.messageNext,w=document.getElementById("article-container"),"top"===O.position?w.insertBefore(G,w.firstChild):w.appendChild(G))),GLOBAL_CONFIG.relativeDate.post&&k(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&k(document.querySelectorAll("#recent-posts time")),!GLOBAL_CONFIG.runtime||(G=document.getElementById("runtimeshow"))&&(I=G.getAttribute("data-publishDate"),G.innerText=btf.diffDate(I)+" "+GLOBAL_CONFIG.runtime),(I=document.getElementById("last-push-date"))&&(B=I.getAttribute("data-lastPushDate"),I.innerText=btf.diffDate(B,!0)),(B=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")).length&&B.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.toggle("expand"),t=this.parentNode.nextElementSibling,btf.isHidden(t)?t.style.display="block":t.style.display="none"})})),e=document.getElementById("toggle-menu"),n=document.getElementById("sidebar-menus"),t=document.getElementById("menu-mask"),o=document.body,e.addEventListener("click",function(){btf.sidebarPaddingR(),o.style.overflow="hidden",btf.fadeIn(t,.5),n.classList.add("open")}),t.addEventListener("click",function(t){n.classList.contains("open")&&C()}),window.addEventListener("resize",function(t){btf.isHidden(e)&&n.classList.contains("open")&&C()}),!GLOBAL_CONFIG_SITE.isHome||(r=document.getElementById("scroll-down"))&&r.addEventListener("click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),GLOBAL_CONFIG.highlight&&(O=GLOBAL_CONFIG.highlight.highlightCopy,w=GLOBAL_CONFIG.highlight.highlightLang,G=GLOBAL_CONFIG_SITE.isHighlightShrink,I=O||w||void 0!==G,B="highlighjs"===GLOBAL_CONFIG.highlight.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),I&&B.length&&(b="prismjs"===GLOBAL_CONFIG.highlight.plugin,S=!(v=L="")===G?"closed":"",void 0!==G&&(L='<i class="fas fa-angle-down expand '.concat(S,'"></i>')),O&&(v='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>'),A=function(t){var e=t.parentNode;e.classList.add("copy-true");var n,o=window.getSelection(),i=document.createRange();b?i.selectNodeContents(e.querySelectorAll("pre code")[0]):i.selectNodeContents(e.querySelectorAll("table .code pre")[0]),o.removeAllRanges(),o.addRange(i),o.toString(),t=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.success):((n=t.previousElementSibling).innerText=GLOBAL_CONFIG.copy.success,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},700))):void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport,o.removeAllRanges(),e.classList.remove("copy-true")},E=function(t){var e=t.target.classList;e.contains("expand")?(t=_toConsumableArray(this.parentNode.children).slice(1),this.firstChild.classList.toggle("closed"),btf.isHidden(t[0])?t.forEach(function(t){t.style.display="block"}):t.forEach(function(t){t.style.display="none"})):e.contains("copy-button")&&A(this)},_=function(){var t=document.createElement("div");return t.className="highlight-tools ".concat(S),t.addEventListener("click",E),t},w?b?B.forEach(function(t){var e=void 0!==t.getAttribute("data-language")?t.getAttribute("data-language"):"Code",n='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure","","highlight"),(e=_()).innerHTML=L+n+v,t.parentNode.insertBefore(e,t)}):B.forEach(function(t){var e=t.getAttribute("class").split(" ")[1];"plain"!==e&&void 0!==e||(e="Code");var n='<div class="code-lang">'.concat(e,"</div>");(e=_()).innerHTML=L+n+v,t.insertBefore(e,t.firstChild)}):b?B.forEach(function(t){btf.wrap(t,"figure","","highlight");var e=_();e.innerHTML=L+v,t.parentNode.insertBefore(e,t)}):B.forEach(function(t){var e=_();e.innerHTML=L+v,t.insertBefore(e,t.firstChild)}))),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.parentNode;n.parentNode.classList.contains("justified-gallery")||((e=document.createElement("div")).className="img-alt is-center",e.textContent=t.getAttribute("alt"),n.insertBefore(e,t.nextSibling))}),y="fancybox"===GLOBAL_CONFIG.lightbox,p=y?document.querySelectorAll("#article-container :not(a):not(.gallery-group) > img, #article-container > img"):null,h=document.querySelectorAll("#article-container .justified-gallery"),!(g=h.length)&&null===p||btf.isJqueryLoad(function(){var t,e,n,o;g&&(t=h,(t=(e=$(t)).find("img")).unwrap(),t.length&&t.each(function(t,e){$(e).attr("data-lazy-src")&&$(e).attr("src",$(e).attr("data-lazy-src")),$(e).wrap("<div></div>")}),T?btf.initJustifiedGallery(e):($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.justifiedGallery.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.justifiedGallery.js),function(){btf.initJustifiedGallery(e)}),T=!0)),!y||(n=p).length&&(o=function(t){t.each(function(t,e){var n=$(e),o=n.attr("data-lazy-src")||n.attr("src"),e=n.attr("alt")||"";n.wrap('<a href="'.concat(o,'" data-fancybox="group" data-caption="').concat(e,'" class="fancybox"></a>'))}),$().fancybox({selector:"[data-fancybox]",loop:!0,transitionEffect:"slide",protect:!0,buttons:["slideShow","fullScreen","thumbs","close"],hash:!1})},void 0===$.fancybox?($("head").append('<link rel="stylesheet" type="text/css" href="'.concat(GLOBAL_CONFIG.source.fancybox.css,'">')),$.getScript("".concat(GLOBAL_CONFIG.source.fancybox.js),function(){o($(n))})):o($(n)))}),"mediumZoom"===GLOBAL_CONFIG.lightbox&&(i=mediumZoom(document.querySelectorAll("#article-container :not(a)>img"))).on("open",function(t){var e="dark"===$(document.documentElement).attr("data-theme")?"#121212":"#fff";i.update({background:e})}),f=document.getElementById("rightside"),m=window.innerHeight+56,document.body.scrollHeight<=m?f.style.cssText="opacity: 1; transform: translateX(-38px)":(l=!(c=0),s=document.getElementById("nav"),d="function"==typeof chatBtnHide,u="function"==typeof chatBtnShow,window.addEventListener("scroll",btf.throttle(function(t){var e=window.scrollY||document.documentElement.scrollTop,n=c<e;56<(c=e)?(n?(s.classList.contains("visible")&&s.classList.remove("visible"),u&&!0===l&&(chatBtnHide(),l=!1)):(s.classList.contains("visible")||s.classList.add("visible"),d&&!1===l&&(chatBtnShow(),l=!0)),s.classList.add("fixed"),"0"===window.getComputedStyle(f).getPropertyValue("opacity")&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")):(0===e&&s.classList.remove("fixed","visible"),f.style.cssText="opacity: ''; transform: ''"),document.body.scrollHeight<=m&&(f.style.cssText="opacity: 1; transform: translateX(-38px)")},200))),(r=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")).length&&r.forEach(function(t){btf.wrap(t,"div","","table-wrap")}),(r=document.querySelectorAll("#article-container .hide-button")).length&&r.forEach(function(t){t.addEventListener("click",function(t){var e=this.nextElementSibling;this.classList.toggle("open"),this.classList.contains("open")&&0<e.querySelectorAll(".justified-gallery").length&&btf.initJustifiedGallery(e.querySelectorAll(".justified-gallery"))})}),document.querySelectorAll("#article-container .tab > button").forEach(function(t){t.addEventListener("click",function(t){var e,n,o,i=this.parentNode;i.classList.contains("active")||(o=i.parentNode.nextElementSibling,(e=btf.siblings(i,".active")[0])&&e.classList.remove("active"),i.classList.add("active"),n=this.getAttribute("data-href").replace("#",""),_toConsumableArray(o.children).forEach(function(t){t.id===n?t.classList.add("active"):t.classList.remove("active")}),0<(o=o.querySelectorAll("#".concat(n," .justified-gallery"))).length&&btf.initJustifiedGallery(o))})}),document.querySelectorAll("#article-container .tabs .tab-to-top").forEach(function(t){t.addEventListener("click",function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)})}),a=!1,(r=document.querySelector("#comment-switch > .switch-btn"))&&r.addEventListener("click",function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach(function(t){btf.isHidden(t)?t.style.cssText="display: block;animation: tabshow .5s":t.style.cssText="display: none;animation: ''"}),a||"function"!=typeof loadOtherComment||(a=!0,loadOtherComment())})},refreshFn(),window.addEventListener("resize",N),document.querySelectorAll("#sidebar-menus .expand").forEach(function(t){t.addEventListener("click",function(){this.classList.toggle("hide");var t=this.parentNode.nextElementSibling;btf.isHidden(t)?t.style.display="block":t.style.display="none"})}),window.addEventListener("touchmove",function(t){document.querySelectorAll("#nav .menus_item_child").forEach(function(t){btf.isHidden(t)||(t.style.display="none")})}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(l=GLOBAL_CONFIG.copyright,document.body.oncopy=function(t){t.preventDefault();var e=(e=window.getSelection(0).toString()).length>l.limitCount?e+"\n\n\n"+l.languages.author+"\n"+l.languages.link+window.location.href+"\n"+l.languages.source+"\n"+l.languages.info:e;return(t.clipboardData?t:window).clipboardData.setData("text",e)})});