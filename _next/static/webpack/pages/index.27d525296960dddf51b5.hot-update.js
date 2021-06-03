self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Verigram/VeriDoc.js":
/*!****************************************!*\
  !*** ./components/Verigram/VeriDoc.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\verigram\\components\\Verigram\\VeriDoc.js",
    _this = undefined,
    _s = $RefreshSig$();




var VeriDoc = function VeriDoc(_ref) {
  _s();

  var setLiveDoc = _ref.setLiveDoc;

  function onInitializeButtonClick() {
    var endpointAddress = 'https://services.verigram.ai:8443/veridoc/ru/veridoc/';
    var documentType = parseInt('1');
    var recognitionMode = parseInt('0');
    var isGlareCheckNeeded = false;
    var isTranslitCheckNeeded = false;
    var isMirrorMode = false;
    var isAutoDocTypeMode = false;
    var apiKey = "PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ";
    veridoc.init(endpointAddress, apiKey, successCallback, errorCallback, gotPhotoCallback).then(function () {
      veridoc.setDocType(documentType);
      veridoc.setRecognitionMode(recognitionMode);
      veridoc.setIsGlareCheckNeeded(isGlareCheckNeeded);
      veridoc.setIsTranslitCheckNeeded(isTranslitCheckNeeded);
      veridoc.setMirrorPreviewForWebCameras(isMirrorMode);
      veridoc.setIsAutoDocTypeMode(isAutoDocTypeMode);
    }).then(function () {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Вы успешно прошли проверка 'живости'. Приготовьте ваше удостоверение личности для сканирование", "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0438\u0446\u0435\u0432\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438. \u0415\u0441\u043B\u0438 \u0432\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 OK", "info").then(function () {
        onStartButtonClick();
      });
    })["catch"](function (e) {
      document.getElementById("results").innerHTML = e;
    });
  }

  function onStartButtonClick() {
    var session_token = veridoc.start();
    console.log('sesion_token is: ' + session_token);
  }

  function showResults(data) {
    if (data.face_picture) {
      setLiveDoc("data:image/jpeg;base64," + data.face_picture);
    } else {
      setLiveDoc("".concat(data));
    }
  }

  function checkRecognitionWarnings() {
    var recognitionWarnings = veridoc.getRecognitionWarnings();

    if (recognitionWarnings.includes(RecognitionWarning.DOCUMENT_EXPIRED)) {
      console.log('This document expired!');
    }

    if (recognitionWarnings.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)) {
      console.log('Transliteration check fail warning!');
    }
  }

  function successCallback(data) {
    showResults(data);
    checkRecognitionWarnings();
  }

  function errorCallback(data) {
    showResults(data);
  }

  function gotPhotoCallback() {}

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var endpointAddress = 'https://dev.verilive.verigram.ai/ru/veridoc/';
    var documentType = parseInt(1);
    var recognitionMode = parseInt(0);
    var isGlareCheckNeeded = false;
    var isTranslitCheckNeeded = false;
    var isMirrorMode = false;
    var isAutoDocTypeMode = false;
    var apiKey = 'DUMMY_API_KEY';
    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Вы успешно прошли проверка 'живости'. Приготовьте ваше удостоверение личности для сканирование", "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0438\u0446\u0435\u0432\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438. \u0415\u0441\u043B\u0438 \u0432\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 OK", "info").then(function () {
      veridoc.init(endpointAddress, apiKey, successCallback, errorCallback, gotPhotoCallback).then(function () {
        veridoc.setDocType(documentType);
        veridoc.setRecognitionMode(recognitionMode);
        veridoc.setIsGlareCheckNeeded(isGlareCheckNeeded);
        veridoc.setIsTranslitCheckNeeded(isTranslitCheckNeeded);
        veridoc.setMirrorPreviewForWebCameras(isMirrorMode);
        veridoc.setIsAutoDocTypeMode(isAutoDocTypeMode);
      }).then(function () {
        onStartButtonClick();
      });
    }); // onInitializeButtonClick()
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "veridoc",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "id_veridoc"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, _this);
};

_s(VeriDoc, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = VeriDoc;
/* harmony default export */ __webpack_exports__["default"] = (VeriDoc);

var _c;

$RefreshReg$(_c, "VeriDoc");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpRG9jLmpzIl0sIm5hbWVzIjpbIlZlcmlEb2MiLCJzZXRMaXZlRG9jIiwib25Jbml0aWFsaXplQnV0dG9uQ2xpY2siLCJlbmRwb2ludEFkZHJlc3MiLCJkb2N1bWVudFR5cGUiLCJwYXJzZUludCIsInJlY29nbml0aW9uTW9kZSIsImlzR2xhcmVDaGVja05lZWRlZCIsImlzVHJhbnNsaXRDaGVja05lZWRlZCIsImlzTWlycm9yTW9kZSIsImlzQXV0b0RvY1R5cGVNb2RlIiwiYXBpS2V5IiwicHJvY2VzcyIsInZlcmlkb2MiLCJpbml0Iiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImdvdFBob3RvQ2FsbGJhY2siLCJ0aGVuIiwic2V0RG9jVHlwZSIsInNldFJlY29nbml0aW9uTW9kZSIsInNldElzR2xhcmVDaGVja05lZWRlZCIsInNldElzVHJhbnNsaXRDaGVja05lZWRlZCIsInNldE1pcnJvclByZXZpZXdGb3JXZWJDYW1lcmFzIiwic2V0SXNBdXRvRG9jVHlwZU1vZGUiLCJzd2FsIiwib25TdGFydEJ1dHRvbkNsaWNrIiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJzZXNzaW9uX3Rva2VuIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwic2hvd1Jlc3VsdHMiLCJkYXRhIiwiZmFjZV9waWN0dXJlIiwiY2hlY2tSZWNvZ25pdGlvbldhcm5pbmdzIiwicmVjb2duaXRpb25XYXJuaW5ncyIsImdldFJlY29nbml0aW9uV2FybmluZ3MiLCJpbmNsdWRlcyIsIlJlY29nbml0aW9uV2FybmluZyIsIkRPQ1VNRU5UX0VYUElSRUQiLCJJTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZB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NTFiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcblxyXG5jb25zdCBWZXJpRG9jID0gKHtzZXRMaXZlRG9jfSkgPT4ge1xyXG4gIFxyXG4gIGZ1bmN0aW9uIG9uSW5pdGlhbGl6ZUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdmFyIGVuZHBvaW50QWRkcmVzcyA9ICdodHRwczovL3NlcnZpY2VzLnZlcmlncmFtLmFpOjg0NDMvdmVyaWRvYy9ydS92ZXJpZG9jLyc7XHJcbiAgICB2YXIgZG9jdW1lbnRUeXBlID0gcGFyc2VJbnQoJzEnKTtcclxuICAgIHZhciByZWNvZ25pdGlvbk1vZGUgPSBwYXJzZUludCgnMCcpO1xyXG4gICAgdmFyIGlzR2xhcmVDaGVja05lZWRlZCA9IGZhbHNlO1xyXG4gICAgdmFyIGlzVHJhbnNsaXRDaGVja05lZWRlZCA9IGZhbHNlO1xyXG4gICAgdmFyIGlzTWlycm9yTW9kZSA9IGZhbHNlO1xyXG4gICAgdmFyIGlzQXV0b0RvY1R5cGVNb2RlID1mYWxzZTtcclxuICAgIHZhciBhcGlLZXkgPSBwcm9jZXNzLmVudi5CSU9fS0VZO1xyXG5cclxuICAgIHZlcmlkb2MuaW5pdChlbmRwb2ludEFkZHJlc3MsIGFwaUtleSwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrLCBnb3RQaG90b0NhbGxiYWNrKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHZlcmlkb2Muc2V0RG9jVHlwZShkb2N1bWVudFR5cGUpO1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXRSZWNvZ25pdGlvbk1vZGUocmVjb2duaXRpb25Nb2RlKTtcclxuICAgICAgICAgIHZlcmlkb2Muc2V0SXNHbGFyZUNoZWNrTmVlZGVkKGlzR2xhcmVDaGVja05lZWRlZCk7XHJcbiAgICAgICAgICB2ZXJpZG9jLnNldElzVHJhbnNsaXRDaGVja05lZWRlZChpc1RyYW5zbGl0Q2hlY2tOZWVkZWQpO1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXRNaXJyb3JQcmV2aWV3Rm9yV2ViQ2FtZXJhcyhpc01pcnJvck1vZGUpO1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXRJc0F1dG9Eb2NUeXBlTW9kZShpc0F1dG9Eb2NUeXBlTW9kZSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLQktGLINGD0YHQv9C10YjQvdC+INC/0YDQvtGI0LvQuCDQv9GA0L7QstC10YDQutCwICfQttC40LLQvtGB0YLQuCcuINCf0YDQuNCz0L7RgtC+0LLRjNGC0LUg0LLQsNGI0LUg0YPQtNC+0YHRgtC+0LLQtdGA0LXQvdC40LUg0LvQuNGH0L3QvtGB0YLQuCDQtNC70Y8g0YHQutCw0L3QuNGA0L7QstCw0L3QuNC1XCIsIGDQodC60LDQvdC40YDRg9C10YLRgdGPINGC0L7Qu9GM0LrQviDQu9C40YbQtdCy0LDRjyDRgdGC0L7RgNC+0L3QsCDRg9C00L7RgdGC0L7QstC10YDQtdC90LjRjyDQu9C40YfQvdC+0YHRgtC4LiDQldGB0LvQuCDQstGLINCz0L7RgtC+0LLRiyDQvdCw0LbQvNC40YLQtSDQutC90L7Qv9C60YMgT0tgLCBcImluZm9cIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgb25TdGFydEJ1dHRvbkNsaWNrKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5pbm5lckhUTUwgPSBlO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gb25TdGFydEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdmFyIHNlc3Npb25fdG9rZW4gPSB2ZXJpZG9jLnN0YXJ0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnc2VzaW9uX3Rva2VuIGlzOiAnICsgc2Vzc2lvbl90b2tlbik7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jlc3VsdHMoZGF0YSkge1xyXG4gICAgaWYoZGF0YS5mYWNlX3BpY3R1cmUpIHtcclxuICAgICAgc2V0TGl2ZURvYyhcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgKyBkYXRhLmZhY2VfcGljdHVyZSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgc2V0TGl2ZURvYyhgJHtkYXRhfWApXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUmVjb2duaXRpb25XYXJuaW5ncygpIHtcclxuICAgIHZhciByZWNvZ25pdGlvbldhcm5pbmdzID0gdmVyaWRvYy5nZXRSZWNvZ25pdGlvbldhcm5pbmdzKCk7XHJcbiAgICBpZiAocmVjb2duaXRpb25XYXJuaW5ncy5pbmNsdWRlcyhSZWNvZ25pdGlvbldhcm5pbmcuRE9DVU1FTlRfRVhQSVJFRCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBkb2N1bWVudCBleHBpcmVkIScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlY29nbml0aW9uV2FybmluZ3MuaW5jbHVkZXMoUmVjb2duaXRpb25XYXJuaW5nLklOQ09OU0lTVEVOVF9UUkFOU0xJVEVSQVRJT04pKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RyYW5zbGl0ZXJhdGlvbiBjaGVjayBmYWlsIHdhcm5pbmchJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhkYXRhKSB7XHJcbiAgICBzaG93UmVzdWx0cyhkYXRhKTtcclxuICAgIGNoZWNrUmVjb2duaXRpb25XYXJuaW5ncygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvckNhbGxiYWNrKGRhdGEpIHtcclxuICAgIHNob3dSZXN1bHRzKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb3RQaG90b0NhbGxiYWNrKCkge31cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBlbmRwb2ludEFkZHJlc3MgPSAnaHR0cHM6Ly9kZXYudmVyaWxpdmUudmVyaWdyYW0uYWkvcnUvdmVyaWRvYy8nO1xyXG4gICAgdmFyIGRvY3VtZW50VHlwZSA9IHBhcnNlSW50KDEpO1xyXG4gICAgdmFyIHJlY29nbml0aW9uTW9kZSA9IHBhcnNlSW50KDApO1xyXG4gICAgdmFyIGlzR2xhcmVDaGVja05lZWRlZCA9IGZhbHNlO1xyXG4gICAgdmFyIGlzVHJhbnNsaXRDaGVja05lZWRlZCA9IGZhbHNlO1xyXG4gICAgdmFyIGlzTWlycm9yTW9kZSA9IGZhbHNlO1xyXG4gICAgdmFyIGlzQXV0b0RvY1R5cGVNb2RlID1mYWxzZTtcclxuICAgIHZhciBhcGlLZXkgPSAnRFVNTVlfQVBJX0tFWSc7XHJcblxyXG5cclxuICAgIHN3YWwoXCLQktGLINGD0YHQv9C10YjQvdC+INC/0YDQvtGI0LvQuCDQv9GA0L7QstC10YDQutCwICfQttC40LLQvtGB0YLQuCcuINCf0YDQuNCz0L7RgtC+0LLRjNGC0LUg0LLQsNGI0LUg0YPQtNC+0YHRgtC+0LLQtdGA0LXQvdC40LUg0LvQuNGH0L3QvtGB0YLQuCDQtNC70Y8g0YHQutCw0L3QuNGA0L7QstCw0L3QuNC1XCIsIGDQodC60LDQvdC40YDRg9C10YLRgdGPINGC0L7Qu9GM0LrQviDQu9C40YbQtdCy0LDRjyDRgdGC0L7RgNC+0L3QsCDRg9C00L7RgdGC0L7QstC10YDQtdC90LjRjyDQu9C40YfQvdC+0YHRgtC4LiDQldGB0LvQuCDQstGLINCz0L7RgtC+0LLRiyDQvdCw0LbQvNC40YLQtSDQutC90L7Qv9C60YMgT0tgLCBcImluZm9cIilcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHZlcmlkb2MuaW5pdChlbmRwb2ludEFkZHJlc3MsIGFwaUtleSwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrLCBnb3RQaG90b0NhbGxiYWNrKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHZlcmlkb2Muc2V0RG9jVHlwZShkb2N1bWVudFR5cGUpO1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXRSZWNvZ25pdGlvbk1vZGUocmVjb2duaXRpb25Nb2RlKTtcclxuICAgICAgICAgIHZlcmlkb2Muc2V0SXNHbGFyZUNoZWNrTmVlZGVkKGlzR2xhcmVDaGVja05lZWRlZCk7XHJcbiAgICAgICAgICB2ZXJpZG9jLnNldElzVHJhbnNsaXRDaGVja05lZWRlZChpc1RyYW5zbGl0Q2hlY2tOZWVkZWQpO1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXRNaXJyb3JQcmV2aWV3Rm9yV2ViQ2FtZXJhcyhpc01pcnJvck1vZGUpO1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXRJc0F1dG9Eb2NUeXBlTW9kZShpc0F1dG9Eb2NUeXBlTW9kZSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgb25TdGFydEJ1dHRvbkNsaWNrKClcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgLy8gb25Jbml0aWFsaXplQnV0dG9uQ2xpY2soKVxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndmVyaWRvYyc+XHJcbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU3RhcnRCdXR0b25DbGljaygpfSBpZD1cInN0YXJ0QnV0dG9uXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+U3RhcnQgc2Nhbm5pbmc8L2J1dHRvbj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJpZF92ZXJpZG9jXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaURvYzsiXSwic291cmNlUm9vdCI6IiJ9