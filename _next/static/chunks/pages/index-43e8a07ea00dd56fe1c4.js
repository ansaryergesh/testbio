(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6808:function(e,n,t){var i,o;!function(r){if(void 0===(o="function"===typeof(i=r)?i.call(n,t,n,e):i)||(e.exports=o),!0,e.exports=r(),!!0){var c=window.Cookies,a=window.Cookies=r();a.noConflict=function(){return window.Cookies=c,a}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var i in t)n[i]=t[i]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(i){function o(){}function r(n,t,r){if("undefined"!==typeof document){"number"===typeof(r=e({path:"/"},o.defaults,r)).expires&&(r.expires=new Date(1*new Date+864e5*r.expires)),r.expires=r.expires?r.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(u){}t=i.write?i.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var s in r)r[s]&&(a+="; "+s,!0!==r[s]&&(a+="="+r[s].split(";")[0]));return document.cookie=n+"="+t+a}}function c(e,t){if("undefined"!==typeof document){for(var o={},r=document.cookie?document.cookie.split("; "):[],c=0;c<r.length;c++){var a=r[c].split("="),s=a.slice(1).join("=");t||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=n(a[0]);if(s=(i.read||i)(s,u)||n(s),t)try{s=JSON.parse(s)}catch(f){}if(o[u]=s,e===u)break}catch(f){}}return e?o[e]:o}}return o.set=r,o.get=function(e){return c(e,!1)},o.getJSON=function(e){return c(e,!0)},o.remove=function(n,t){r(n,"",e(t,{expires:-1}))},o.defaults={},o.withConverter=t,o}((function(){}))}))},1725:function(e,n,t){"use strict";var i=t(5893),o=t(7294),r=t(6737),c=t.n(r);n.Z=function(e){var n=e.setLiveDoc;function t(){var e=veridoc.start();console.log("sesion_token is: "+e)}function r(e){e.face_picture?n("data:image/jpeg;base64,"+e.face_picture):n("".concat(e))}function a(e){r(e),function(){var e=veridoc.getRecognitionWarnings();e.includes(RecognitionWarning.DOCUMENT_EXPIRED)&&console.log("This document expired!"),e.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)&&console.log("Transliteration check fail warning!")}()}function s(e){r(e)}function u(){}return(0,o.useEffect)((function(){var e=parseInt(1),n=parseInt(0);c()("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u043e\u0448\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 '\u0436\u0438\u0432\u043e\u0441\u0442\u0438'. \u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435 \u0432\u0430\u0448\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0438\u0446\u0435\u0432\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u044f \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 OK","info").then((function(){veridoc.init("https://dev.verilive.verigram.ai/ru/veridoc/","DUMMY_API_KEY",a,s,u).then((function(){veridoc.setDocType(e),veridoc.setRecognitionMode(n),veridoc.setIsGlareCheckNeeded(false),veridoc.setIsTranslitCheckNeeded(false),veridoc.setMirrorPreviewForWebCameras(false),veridoc.setIsAutoDocTypeMode(false)})).then((function(){t()}))}))}),[]),(0,i.jsx)("div",{className:"veridoc",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{id:"id_veridoc"})})})}},2352:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t(5893),o=t(7294),r=t(6737),c=t.n(r),a=(t(6808),t(1163)),s=function(e){var n=e.setLivePhoto,t={recordVideo:!1,rotated:!1,lang:"ru",render:{oval:!0,faceContourInsteadOfOval:!0,ovalRingColor:{default:"#F5F542",actionSuccess:"#00F500",actionFailure:"#F50000",sessionSuccess:"#00F500",sessionFailure:"#F50000"},ovalWidth:1,overlay:!0,overlayColor:{default:"#2F4F4F"},overlayTransparency:{default:.55},arrow:!0,arrowColor:{default:"#F0F0F0"},arrowProgressColor:{default:"#404040"},hint:!0,hintTextColor:{default:"#C8C9CC"},hintFontType:"Arial",hintUseProgressiveFontSize:!0,hintProgressiveFontSizeMultiplier:1,hintFontSize:25,hintCloudColor:{default:"#2D312F"}},hints:{noHint:"",noFace:"\u0412\u0430\u0441 \u041d\u0435 \u0412\u0438\u0434\u043d\u043e",badLight:"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0442\u0435 \u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",closer:"\u0411\u043b\u0438\u0436\u0435",away:"\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u0435\u0441\u044c",closerToCenter:"\u0411\u043b\u0438\u0436\u0435 \u043a \u0426\u0435\u043d\u0442\u0440\u0443 \u042d\u043a\u0440\u0430\u043d\u0430",targetLeft:"\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u041f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0413\u043e\u043b\u043e\u0432\u0443 \u0412\u043b\u0435\u0432\u043e",targetRight:"\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u041f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0413\u043e\u043b\u043e\u0432\u0443 \u0412\u043f\u0440\u0430\u0432\u043e",targetCenter:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u041f\u0440\u044f\u043c\u043e",sessionSuccess:"\u0412\u044b \u041f\u0440\u043e\u0448\u043b\u0438!",sessionFailure:"\u0412\u044b \u041d\u0435 \u041f\u0440\u043e\u0448\u043b\u0438!",sessionError:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"}};function r(e){var t=JSON.stringify(e,void 0,2).replace(/</g,"&lt;");n(JSON.parse(t)),console.log(JSON.parse(t).bestFrame),localStorage.setItem("livephoto",JSON.parse(t).bestFrame),a.default.push("/secondStep").then((function(){location.reload()}))}function s(e){n(JSON.stringify(e,void 0,2).replace(/</g,"&lt;"))}function u(e){JSON.stringify(e,void 0,2).replace(/</g,"&lt;")}function f(e){}return(0,o.useEffect)((function(){verilive.init("https://face.verigram.ai/verilive","process.env.BIO_KEY",r,s,u,f,t).then((function(){c()("\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 '\u0436\u0438\u0432\u043e\u0441\u0442\u0438'","\u0415\u0441\u043b\u0438 \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 OK","info").then((function(){!function(){var e=verilive.start();console.log(verilive.name+": Token - "+e)}()}))}))}),[]),(0,i.jsx)("div",{children:(0,i.jsx)("div",{id:"id_verilive"})})},u=t(9669),f=t.n(u),l=(t(1725),function(){var e=(0,o.useState)(1),n=e[0],t=e[1],r=(0,o.useState)(null),c=r[0],a=r[1],u=(0,o.useState)(null),l=u[0],d=u[1],v=(0,o.useState)(null),p=v[0],g=v[1],h=(0,o.useState)(null),C=h[0],m=h[1];function N(e,n,t){return t=t||(e.match(/^data:([^;]+);/)||"")[1],fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){return new File([e],n,{type:t})}))}return(0,o.useEffect)((function(){null!==l&&N(l,"doc.png","image/jpeg").then((function(e){m(e)}))}),[l]),(0,o.useEffect)((function(){!function(){if(null!==C){var e=new FormData;e.append("doc",C),e.append("photo",p),f().post("https://services.verigram.ai:8443/veriface",e,{headers:{apiKey:"PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ","Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),swal("\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438","".concat(e.data.Similarity),"info").then((function(){location.reload()}))})).catch((function(e){e.response&&console.log(e.response)}))}}()}),[C]),(0,o.useEffect)((function(){null!==c&&N(c.bestFrame,"a.png").then((function(e){g(e)}))}),[c]),(0,o.useEffect)((function(){null!==p&&t(2)}),[p]),(0,o.useEffect)((function(){function e(e){e.face_picture?d("data:image/jpeg;base64,"+e.face_picture):d("".concat(e))}2===n&&veridoc.init("https://dev.verilive.verigram.ai/ru/veridoc/","DUMMY_API_KEY",(function(n){e(n),function(){var e=veridoc.getRecognitionWarnings();e.includes(RecognitionWarning.DOCUMENT_EXPIRED)&&console.log("This document expired!"),e.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)&&console.log("Transliteration check fail warning!")}()}),(function(n){e(n)}),(function(){}))}),[n]),(0,i.jsx)("div",{children:(0,i.jsx)(s,{setLivePhoto:a})})})},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2352)}])}},function(e){e.O(0,[357,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);