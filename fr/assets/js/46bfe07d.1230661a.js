/*! For license information please see 46bfe07d.1230661a.js.LICENSE.txt */
(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2490],{94146:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(67294),o=(n(73935),n(39960),n(52263)),i=n(695);n(29512),n(10933);function u(){const{siteConfig:t}=(0,o.Z)();return r.createElement(i.Z,{title:`${t.title}`,description:"Learn Prompt Engineering"},r.createElement("main",null,r.createElement("div",{style:{alignSelf:"center",display:"flex",width:"100%",justifyContent:"center"}},r.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfAMl_8iutmRj_O4iMVEJoqnwTr-0XZ5VV9ZT4jPv4lk1U4Aw/viewform?embedded=true",width:"700",height:"1500",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026"))))}},10933:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r={features:"features_t9lD",featureSvg:"featureSvg_GfXr"}},29512:(t,e,n)=>{"use strict";n.d(e,{AI:()=>u});var r=n(67294),o="https://platform.twitter.com/widgets.js",i="createFollowButton",u=function(t){var e=r.useRef(null),u=r.useState(!0),a=u[0],l=u[1];return r.useEffect((function(){var r=!0;return n(5277)(o,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[i])return void console.error("Method "+i+" is not present anymore in twttr.widget api");window.twttr.widgets[i](t.screenName,null==e?void 0:e.current,t.options).then((function(e){l(!1),t.onLoad&&t.onLoad(e)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),r.createElement(r.Fragment,null,a&&r.createElement(r.Fragment,null,t.placeholder),r.createElement("div",{ref:e}))}},5277:(t,e,n)=>{var r,o,i;i=function(){var t,e,n=document,r=n.getElementsByTagName("head")[0],o=!1,i="push",u="readyState",a="onreadystatechange",l={},c={},f={},s={};function d(t,e){for(var n=0,r=t.length;n<r;++n)if(!e(t[n]))return o;return 1}function m(t,e){d(t,(function(t){return e(t),1}))}function g(e,n,r){e=e[i]?e:[e];var o=n&&n.call,u=o?n:r,a=o?e.join(""):n,p=e.length;function h(t){return t.call?t():l[t]}function v(){if(!--p)for(var t in l[a]=1,u&&u(),f)d(t.split("|"),h)&&!m(f[t],h)&&(f[t]=[])}return setTimeout((function(){m(e,(function e(n,r){return null===n?v():(r||/^https?:\/\//.test(n)||!t||(n=-1===n.indexOf(".js")?t+n+".js":t+n),s[n]?(a&&(c[a]=1),2==s[n]?v():setTimeout((function(){e(n,!0)}),0)):(s[n]=1,a&&(c[a]=1),void w(n,v)))}))}),0),g}function w(t,o){var i,l=n.createElement("script");l.onload=l.onerror=l[a]=function(){l[u]&&!/^c|loade/.test(l[u])||i||(l.onload=l[a]=null,i=1,s[t]=2,o())},l.async=1,l.src=e?t+(-1===t.indexOf("?")?"?":"&")+e:t,r.insertBefore(l,r.lastChild)}return g.get=w,g.order=function(t,e,n){!function r(o){o=t.shift(),t.length?g(o,r):g(o,e,n)}()},g.path=function(e){t=e},g.urlArgs=function(t){e=t},g.ready=function(t,e,n){t=t[i]?t:[t];var r,o=[];return!m(t,(function(t){l[t]||o[i](t)}))&&d(t,(function(t){return l[t]}))?e():(r=t.join("|"),f[r]=f[r]||[],f[r][i](e),n&&n(o)),g},g.done=function(t){g([null],t)},g},t.exports?t.exports=i():void 0===(o="function"==typeof(r=i)?r.call(e,n,e,t):r)||(t.exports=o)}}]);