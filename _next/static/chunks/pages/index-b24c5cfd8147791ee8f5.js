(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6808:function(e,t,r){var n,i;!function(o){if(void 0===(i="function"===typeof(n=o)?n.call(t,r,t,e):n)||(e.exports=i),!0,e.exports=o(),!!0){var a=window.Cookies,c=window.Cookies=o();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function i(){}function o(t,r,o){if("undefined"!==typeof document){"number"===typeof(o=e({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var a=JSON.stringify(r);/^[\{\[]/.test(a)&&(r=a)}catch(u){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var s in o)o[s]&&(c+="; "+s,!0!==o[s]&&(c+="="+o[s].split(";")[0]));return document.cookie=t+"="+r+c}}function a(e,r){if("undefined"!==typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],a=0;a<o.length;a++){var c=o[a].split("="),s=c.slice(1).join("=");r||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var u=t(c[0]);if(s=(n.read||n)(s,u)||t(s),r)try{s=JSON.parse(s)}catch(f){}if(i[u]=s,e===u)break}catch(f){}}return e?i[e]:i}}return i.set=o,i.get=function(e){return a(e,!1)},i.getJSON=function(e){return a(e,!0)},i.remove=function(t,r){o(t,"",e(r,{expires:-1}))},i.defaults={},i.withConverter=r,i}((function(){}))}))},1725:function(e,t,r){"use strict";var n=r(5893),i=r(7294),o=r(6737),a=r.n(o);t.Z=function(e){var t=e.setLiveDoc;function r(){var e=veridoc.start();console.log("sesion_token is: "+e)}function o(e){e.face_picture?t("data:image/jpeg;base64,"+e.face_picture):t("".concat(e))}function c(e){o(e),function(){var e=veridoc.getRecognitionWarnings();e.includes(RecognitionWarning.DOCUMENT_EXPIRED)&&console.log("This document expired!"),e.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)&&console.log("Transliteration check fail warning!")}()}function s(e){o(e)}function u(){}return(0,i.useEffect)((function(){var e=parseInt(1),t=parseInt(0);a()("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u043e\u0448\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 '\u0436\u0438\u0432\u043e\u0441\u0442\u0438'. \u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435 \u0432\u0430\u0448\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0438\u0446\u0435\u0432\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u044f \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 OK","info").then((function(){veridoc.init("https://dev.verilive.verigram.ai/ru/veridoc/","DUMMY_API_KEY",c,s,u).then((function(){veridoc.setDocType(e),veridoc.setRecognitionMode(t),veridoc.setIsGlareCheckNeeded(false),veridoc.setIsTranslitCheckNeeded(false),veridoc.setMirrorPreviewForWebCameras(false),veridoc.setIsAutoDocTypeMode(false)})).then((function(){r()}))}))}),[]),(0,n.jsx)("div",{className:"veridoc",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{id:"id_veridoc"})})})}},6925:function(e,t,r){"use strict";var n=r(9713);function i(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.pathToRegexp=t.default=t.customRouteMatcherOptions=t.matcherOptions=void 0;var s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(4329));function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}t.pathToRegexp=s;var f={sensitive:!1,delimiter:"/"};t.matcherOptions=f;var l=c(c({},f),{},{strict:!0});t.customRouteMatcherOptions=l;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t){var r=[],n=s.pathToRegexp(t,r,e?l:f),o=s.regexpToFunction(n,r);return function(t,n){var a=null!=t&&o(t);if(!a)return!1;if(e){var s,u=i(r);try{for(u.s();!(s=u.n()).done;){var f=s.value;"number"===typeof f.name&&delete a.params[f.name]}}catch(l){u.e(l)}finally{u.f()}}return c(c({},n),a.params)}}}},1327:function(e,t,r){"use strict";var n=r(9713),i=r(3038);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.matchHas=function(e,t,r){var n={};if(t.every((function(t){var i,o=t.key;switch(t.type){case"header":o=o.toLowerCase(),i=e.headers[o];break;case"cookie":i=e.cookies[t.key];break;case"query":i=r[o];break;case"host":var a=((null==e?void 0:e.headers)||{}).host;i=null==a?void 0:a.split(":")[0].toLowerCase()}if(!t.value&&i)return n[h(o)]=i,!0;if(i){var c=new RegExp("^".concat(t.value,"$")),s=i.match(c);if(s)return s.groups?Object.keys(s.groups).forEach((function(e){n[e]=s.groups[e]})):"host"===t.type&&s[0]&&(n.host=s[0]),!0}return!1})))return n;return!1},t.compileNonPath=d,t.default=function(e,t,r,n){var o={},s=(r=Object.assign({},r)).__nextLocale;if(delete r.__nextLocale,delete r.__nextDefaultLocale,e.startsWith("/"))o=(0,f.parseRelativeUrl)(e);else{var p=new URL(e),h=p.pathname,v=p.searchParams,m=p.hash,y=p.hostname,g=p.port,b=p.protocol,w=p.search,E=p.href;o={pathname:h,query:(0,u.searchParamsToUrlQuery)(v),hash:m,protocol:b,hostname:y,port:g,search:w,href:E}}var O=o.query,P="".concat(o.pathname).concat(o.hash||""),x=[];l.pathToRegexp(P,x);for(var R,S=x.map((function(e){return e.name})),A=l.compile(P,{validate:!1}),_=0,C=Object.entries(O);_<C.length;_++){var j=i(C[_],2),T=j[0],N=j[1],D=Array.isArray(N)?N[0]:N;D&&(D=d(D,t)),O[T]=D}var k=Object.keys(t);s&&(k=k.filter((function(e){return"nextInternalLocale"!==e})));if(n&&!k.some((function(e){return S.includes(e)}))){var F,I=c(k);try{for(I.s();!(F=I.n()).done;){var M=F.value;M in O||(O[M]=t[M])}}catch($){I.e($)}finally{I.f()}}try{var L=(R=A(t)).split("#"),U=i(L,2),q=U[0],W=U[1];o.pathname=q,o.hash="".concat(W?"#":"").concat(W||""),delete o.search}catch($){if($.message.match(/Expected .*? to not repeat, but got an array/))throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw $}return o.query=a(a({},r),o.query),{newUrl:R,parsedDestination:o}},t.getSafeParamName=void 0;var u=r(4915),f=r(4436),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=n?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(4329));function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}var h=function(e){for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t};function d(e,t){if(!e.includes(":"))return e;for(var r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];e.includes(":".concat(i))&&(e=e.replace(new RegExp(":".concat(i,"\\*"),"g"),":".concat(i,"--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(i,"\\?"),"g"),":".concat(i,"--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(i,"\\+"),"g"),":".concat(i,"--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(i,"(?!\\w)"),"g"),"--ESCAPED_PARAM_COLON".concat(i)))}return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),l.compile("/".concat(e),{validate:!1})(t).substr(1)}t.getSafeParamName=h},2352:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),i=r(7294),o=r(6737),a=r.n(o),c=(r(6808),r(6139)),s=function(e){var t=e.setLivePhoto,r={recordVideo:!1,rotated:!1,lang:"ru",render:{oval:!0,faceContourInsteadOfOval:!0,ovalRingColor:{default:"#F5F542",actionSuccess:"#00F500",actionFailure:"#F50000",sessionSuccess:"#00F500",sessionFailure:"#F50000"},ovalWidth:1,overlay:!0,overlayColor:{default:"#2F4F4F"},overlayTransparency:{default:.55},arrow:!0,arrowColor:{default:"#F0F0F0"},arrowProgressColor:{default:"#404040"},hint:!0,hintTextColor:{default:"#C8C9CC"},hintFontType:"Arial",hintUseProgressiveFontSize:!0,hintProgressiveFontSizeMultiplier:1,hintFontSize:25,hintCloudColor:{default:"#2D312F"}},hints:{noHint:"",noFace:"\u0412\u0430\u0441 \u041d\u0435 \u0412\u0438\u0434\u043d\u043e",badLight:"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0442\u0435 \u041e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",closer:"\u0411\u043b\u0438\u0436\u0435",away:"\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u0435\u0441\u044c",closerToCenter:"\u0411\u043b\u0438\u0436\u0435 \u043a \u0426\u0435\u043d\u0442\u0440\u0443 \u042d\u043a\u0440\u0430\u043d\u0430",targetLeft:"\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u041f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0413\u043e\u043b\u043e\u0432\u0443 \u0412\u043b\u0435\u0432\u043e",targetRight:"\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u043e \u041f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0413\u043e\u043b\u043e\u0432\u0443 \u0412\u043f\u0440\u0430\u0432\u043e",targetCenter:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u041f\u0440\u044f\u043c\u043e",sessionSuccess:"\u0412\u044b \u041f\u0440\u043e\u0448\u043b\u0438!",sessionFailure:"\u0412\u044b \u041d\u0435 \u041f\u0440\u043e\u0448\u043b\u0438!",sessionError:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"}};function o(e){var r=JSON.stringify(e,void 0,2).replace(/</g,"&lt;");t(JSON.parse(r)),console.log(JSON.parse(r).bestFrame),localStorage.setItem("livephoto",JSON.parse(r).bestFrame),c.ZP.push("/secondStep")}function s(e){t(JSON.stringify(e,void 0,2).replace(/</g,"&lt;"))}function u(e){JSON.stringify(e,void 0,2).replace(/</g,"&lt;")}function f(e){}return(0,i.useEffect)((function(){verilive.init("https://face.verigram.ai/verilive","process.env.BIO_KEY",o,s,u,f,r).then((function(){a()("\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 '\u0436\u0438\u0432\u043e\u0441\u0442\u0438'","\u0415\u0441\u043b\u0438 \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 OK","info").then((function(){!function(){var e=verilive.start();console.log(verilive.name+": Token - "+e)}()}))}))}),[]),(0,n.jsx)("div",{children:(0,n.jsx)("div",{id:"id_verilive"})})},u=r(9669),f=r.n(u),l=r(1725),p=function(){var e=(0,i.useState)(1),t=e[0],r=e[1],o=(0,i.useState)(null),a=o[0],c=o[1],u=(0,i.useState)(null),p=u[0],h=u[1],d=(0,i.useState)(null),v=d[0],m=d[1],y=(0,i.useState)(null),g=y[0],b=y[1];function w(e,t,r){return r=r||(e.match(/^data:([^;]+);/)||"")[1],fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){return new File([e],t,{type:r})}))}return(0,i.useEffect)((function(){null!==p&&w(p,"doc.png","image/jpeg").then((function(e){b(e)}))}),[p]),(0,i.useEffect)((function(){!function(){if(null!==g){var e=new FormData;e.append("doc",g),e.append("photo",v),f().post("https://services.verigram.ai:8443/veriface",e,{headers:{apiKey:"PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ","Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),swal("\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438","".concat(e.data.Similarity),"info").then((function(){location.reload()}))})).catch((function(e){e.response&&console.log(e.response)}))}}()}),[g]),(0,i.useEffect)((function(){null!==a&&w(a.bestFrame,"a.png").then((function(e){m(e)}))}),[a]),(0,i.useEffect)((function(){null!==v&&r(2)}),[v]),(0,i.useEffect)((function(){function e(e){e.face_picture?h("data:image/jpeg;base64,"+e.face_picture):h("".concat(e))}2===t&&veridoc.init("https://dev.verilive.verigram.ai/ru/veridoc/","DUMMY_API_KEY",(function(t){e(t),function(){var e=veridoc.getRecognitionWarnings();e.includes(RecognitionWarning.DOCUMENT_EXPIRED)&&console.log("This document expired!"),e.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)&&console.log("Transliteration check fail warning!")}()}),(function(t){e(t)}),(function(){}))}),[t]),(0,n.jsxs)("div",{children:[1===t&&(0,n.jsx)(s,{setLivePhoto:c}),2===t&&(0,n.jsx)(l.Z,{setLiveDoc:h})]})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2352)}])},4329:function(e,t){"use strict";function r(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var i=1,o="";if("?"===e[c=r+1])throw new TypeError('Pattern cannot start with "?" at '+c);for(;c<e.length;)if("\\"!==e[c]){if(")"===e[c]){if(0===--i){c++;break}}else if("("===e[c]&&(i++,"?"!==e[c+1]))throw new TypeError("Capturing groups are not allowed at "+c);o+=e[c++]}else o+=e[c++]+e[c++];if(i)throw new TypeError("Unbalanced pattern at "+r);if(!o)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:o}),r=c}else{for(var a="",c=r+1;c<e.length;){var s=e.charCodeAt(c);if(!(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||95===s))break;a+=e[c++]}if(!a)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:a}),r=c}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,a="[^"+o(t.delimiter||"/#?")+"]+?",c=[],s=0,u=0,f="",l=function(e){if(u<r.length&&r[u].type===e)return r[u++].value},p=function(e){var t=l(e);if(void 0!==t)return t;var n=r[u],i=n.type,o=n.index;throw new TypeError("Unexpected "+i+" at "+o+", expected "+e)},h=function(){for(var e,t="";e=l("CHAR")||l("ESCAPED_CHAR");)t+=e;return t};u<r.length;){var d=l("CHAR"),v=l("NAME"),m=l("PATTERN");if(v||m){var y=d||"";-1===i.indexOf(y)&&(f+=y,y=""),f&&(c.push(f),f=""),c.push({name:v||s++,prefix:y,suffix:"",pattern:m||a,modifier:l("MODIFIER")||""})}else{var g=d||l("ESCAPED_CHAR");if(g)f+=g;else if(f&&(c.push(f),f=""),l("OPEN")){y=h();var b=l("NAME")||"",w=l("PATTERN")||"",E=h();p("CLOSE"),c.push({name:b||(w?s++:""),pattern:b&&!w?a:w,prefix:y,suffix:E,modifier:l("MODIFIER")||""})}else p("END")}}return c}function n(e,t){void 0===t&&(t={});var r=a(t),n=t.encode,i=void 0===n?function(e){return e}:n,o=t.validate,c=void 0===o||o,s=e.map((function(e){if("object"===typeof e)return new RegExp("^(?:"+e.pattern+")$",r)}));return function(t){for(var r="",n=0;n<e.length;n++){var o=e[n];if("string"!==typeof o){var a=t?t[o.name]:void 0,u="?"===o.modifier||"*"===o.modifier,f="*"===o.modifier||"+"===o.modifier;if(Array.isArray(a)){if(!f)throw new TypeError('Expected "'+o.name+'" to not repeat, but got an array');if(0===a.length){if(u)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var l=0;l<a.length;l++){var p=i(a[l],o);if(c&&!s[n].test(p))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but got "'+p+'"');r+=o.prefix+p+o.suffix}}else if("string"!==typeof a&&"number"!==typeof a){if(!u){var h=f?"an array":"a string";throw new TypeError('Expected "'+o.name+'" to be '+h)}}else{p=i(String(a),o);if(c&&!s[n].test(p))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+p+'"');r+=o.prefix+p+o.suffix}}else r+=o}return r}}function i(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var o=n[0],a=n.index,c=Object.create(null),s=function(e){if(void 0===n[e])return"continue";var r=t[e-1];"*"===r.modifier||"+"===r.modifier?c[r.name]=n[e].split(r.prefix+r.suffix).map((function(e){return i(e,r)})):c[r.name]=i(n[e],r)},u=1;u<n.length;u++)s(u);return{path:o,index:a,params:c}}}function o(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function a(e){return e&&e.sensitive?"":"i"}function c(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,c=r.start,s=void 0===c||c,u=r.end,f=void 0===u||u,l=r.encode,p=void 0===l?function(e){return e}:l,h="["+o(r.endsWith||"")+"]|$",d="["+o(r.delimiter||"/#?")+"]",v=s?"^":"",m=0,y=e;m<y.length;m++){var g=y[m];if("string"===typeof g)v+=o(p(g));else{var b=o(p(g.prefix)),w=o(p(g.suffix));if(g.pattern)if(t&&t.push(g),b||w)if("+"===g.modifier||"*"===g.modifier){var E="*"===g.modifier?"?":"";v+="(?:"+b+"((?:"+g.pattern+")(?:"+w+b+"(?:"+g.pattern+"))*)"+w+")"+E}else v+="(?:"+b+"("+g.pattern+")"+w+")"+g.modifier;else v+="("+g.pattern+")"+g.modifier;else v+="(?:"+b+w+")"+g.modifier}}if(f)i||(v+=d+"?"),v+=r.endsWith?"(?="+h+")":"$";else{var O=e[e.length-1],P="string"===typeof O?d.indexOf(O[O.length-1])>-1:void 0===O;i||(v+="(?:"+d+"(?="+h+"))?"),P||(v+="(?="+d+"|"+h+")")}return new RegExp(v,a(r))}function s(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?function(e,t,r){var n=e.map((function(e){return s(e,t,r).source}));return new RegExp("(?:"+n.join("|")+")",a(r))}(e,t,n):function(e,t,n){return c(r(e,n),t,n)}(e,t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.compile=function(e,t){return n(r(e,t),t)},t.tokensToFunction=n,t.match=function(e,t){var r=[];return i(s(e,r,t),r,t)},t.regexpToFunction=i,t.tokensToRegexp=c,t.pathToRegexp=s},6139:function(e,t,r){"use strict";t.ZP=void 0;var n,i=(n=r(6925))&&n.__esModule?n:{default:n},o=r(6528),a=r(1253),c=r(1327);const s=(0,i.default)();const u=new Set(["rewrite","redirect","header"]);function f(e,t){return t.replace(e,"")||"/"}t.ZP=class{constructor({basePath:e="",headers:t=[],fsRoutes:r=[],rewrites:n={beforeFiles:[],afterFiles:[],fallback:[]},redirects:i=[],catchAllRoute:o,dynamicRoutes:a=[],pageChecker:c,useFileSystemPublicRoutes:s,locales:u=[]}){this.basePath=void 0,this.headers=void 0,this.fsRoutes=void 0,this.redirects=void 0,this.rewrites=void 0,this.catchAllRoute=void 0,this.pageChecker=void 0,this.dynamicRoutes=void 0,this.useFileSystemPublicRoutes=void 0,this.locales=void 0,this.basePath=e,this.headers=t,this.fsRoutes=r,this.rewrites=n,this.redirects=i,this.pageChecker=c,this.catchAllRoute=o,this.dynamicRoutes=a,this.useFileSystemPublicRoutes=s,this.locales=u}setDynamicRoutes(e=[]){this.dynamicRoutes=e}addFsRoute(e){this.fsRoutes.unshift(e)}async execute(e,t,r){const n={},i=async e=>{if(e=(0,a.normalizeLocalePath)(e,this.locales).pathname,n[e])return n[e];const t=this.pageChecker(e);return n[e]=t,t};let l=r;const p=async r=>{const n=r.pathname,o=f(this.basePath,n);for(const i of this.fsRoutes){const a=i.match(o);if(a){r.pathname=o;if((await i.fn(e,t,a,r)).finished)return!0;r.pathname=n}}let c=await i(o);if(!c){const e=(0,a.normalizeLocalePath)(o,this.locales).pathname;for(const t of this.dynamicRoutes)t.match(e)&&(c=!0)}if(c){const n=this.catchAllRoute.match(r.pathname);r.pathname=o,r.query._nextBubbleNoFallback="1";return(await this.catchAllRoute.fn(e,t,n,r)).finished}},h=[...this.headers,...this.redirects,...this.rewrites.beforeFiles,...this.fsRoutes,...this.useFileSystemPublicRoutes?[{type:"route",name:"page checker",requireBasePath:!1,match:s("/:path*"),fn:async(e,t,r,n)=>{let{pathname:a}=n;return a=(0,o.removePathTrailingSlash)(a||"/"),a&&await i(a)?this.catchAllRoute.fn(e,t,r,n):{finished:!1}}}]:[],...this.rewrites.afterFiles,...this.rewrites.fallback.length?[{type:"route",name:"dynamic route/page check",requireBasePath:!1,match:s("/:path*"),fn:async(e,t,r,n)=>({finished:await p(n)})},...this.rewrites.fallback]:[],...this.useFileSystemPublicRoutes?[this.catchAllRoute]:[]],d=!this.basePath||e._nextHadBasePath;for(const o of h){let n=l.pathname;const i=n,s=!1!==o.requireBasePath,h=u.has(o.type),v="public folder catchall"===o.name,m=h||v,y=h,g=f(this.basePath,n);m||(n=g);const b=(0,a.normalizeLocalePath)(g,this.locales),w=m?this.basePath:"";y?(o.internal||!r.query.__nextLocale||b.detectedLocale||(n=`${w}/${r.query.__nextLocale}${"/"===g?"":g}`),e.__nextHadTrailingSlash&&!n.endsWith("/")&&(n+="/")):n=`${e._nextHadBasePath?w:""}${w&&"/"===b.pathname?"":b.pathname}`;let E=o.match(n);if(o.has&&E){const t=(0,c.matchHas)(e,o.has,l.query);t?Object.assign(E,t):E=!1}if(E){if(!m){if(!d&&!e._nextDidRewrite){if(s)return!1;continue}l.pathname=n}const r=await o.fn(e,t,E,l);if(r.finished)return!0;if(m||(l.pathname=i),r.pathname&&(l.pathname=r.pathname),r.query&&(l.query={...l.query,...r.query}),!0===o.check&&await p(l))return!0}}return!1}}}},function(e){e.O(0,[505,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);