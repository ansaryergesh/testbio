(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2641:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var i=t(5893),o=t(7294),c=t(6737),r=t.n(c),s=t(9669),a=t.n(s),u=function(e){var n=e.setLiveDoc;function t(){var e=veridoc.start();console.log("sesion_token is: "+e)}function c(e){e.face_picture?n("data:image/jpeg;base64,"+e.face_picture):n("".concat(e))}function s(e){c(e),function(){var e=veridoc.getRecognitionWarnings();e.includes(RecognitionWarning.DOCUMENT_EXPIRED)&&console.log("This document expired!"),e.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)&&console.log("Transliteration check fail warning!")}()}function a(e){c(e)}function u(){}return(0,o.useEffect)((function(){var e=parseInt("1"),n=parseInt("0");r()("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u043e\u0448\u043b\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 '\u0436\u0438\u0432\u043e\u0441\u0442\u0438'. \u041f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435 \u0432\u0430\u0448\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0441\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","\u0421\u043a\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u0438\u0446\u0435\u0432\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u044f \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438. \u0415\u0441\u043b\u0438 \u0432\u044b \u0433\u043e\u0442\u043e\u0432\u044b \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 OK","info").then((function(){veridoc.init("https://services.verigram.ai:8443/veridoc/ru/veridoc/","PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ",s,a,u).then((function(){veridoc.setDocType(e),veridoc.setRecognitionMode(n),veridoc.setIsGlareCheckNeeded(false),veridoc.setIsTranslitCheckNeeded(false),veridoc.setMirrorPreviewForWebCameras(false),veridoc.setIsAutoDocTypeMode(false)})).then((function(){t()}))}))}),[]),(0,i.jsx)("div",{className:"veridoc",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{id:"id_veridoc"})})})},f=function(){var e=(0,o.useState)(1),n=(e[0],e[1]),t=(0,o.useState)(null),c=t[0],r=(t[1],(0,o.useState)(null)),s=r[0],f=r[1],l=(0,o.useState)(null),d=l[0],v=l[1],p=(0,o.useState)(null),h=p[0],g=p[1];function N(e,n,t){return t=t||(e.match(/^data:([^;]+);/)||"")[1],fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){return new File([e],n,{type:t})}))}return(0,o.useEffect)((function(){null!==s&&N(s,"doc.png","image/jpeg").then((function(e){g(e)}))}),[s]),(0,o.useEffect)((function(){!function(){if(null!==h){var e=new FormData;e.append("doc",h),e.append("photo",d),a().post("https://services.verigram.ai:8443/veriface",e,{headers:{apiKey:"PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ","Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),swal("\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438","".concat(e.data.Similarity),"info").then((function(){location.reload()}))})).catch((function(e){e.response&&console.log(e.response)}))}}()}),[h]),(0,o.useEffect)((function(){null!==c&&N(c.bestFrame,"a.png").then((function(e){v(e)}))}),[c]),(0,o.useEffect)((function(){null!==d&&n(2)}),[d]),(0,i.jsxs)("div",{children:[(0,i.jsx)(u,{setLiveDoc:f}),JSON.stringify(s)]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2641)}])}},function(e){e.O(0,[505,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);