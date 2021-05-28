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
    onInitializeButtonClick();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "veridoc",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "id_veridoc"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpRG9jLmpzIl0sIm5hbWVzIjpbIlZlcmlEb2MiLCJzZXRMaXZlRG9jIiwib25Jbml0aWFsaXplQnV0dG9uQ2xpY2siLCJlbmRwb2ludEFkZHJlc3MiLCJkb2N1bWVudFR5cGUiLCJwYXJzZUludCIsInJlY29nbml0aW9uTW9kZSIsImlzR2xhcmVDaGVja05lZWRlZCIsImlzVHJhbnNsaXRDaGVja05lZWRlZCIsImlzTWlycm9yTW9kZSIsImlzQXV0b0RvY1R5cGVNb2RlIiwiYXBpS2V5IiwicHJvY2VzcyIsInZlcmlkb2MiLCJpbml0Iiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImdvdFBob3RvQ2FsbGJhY2siLCJ0aGVuIiwic2V0RG9jVHlwZSIsInNldFJlY29nbml0aW9uTW9kZSIsInNldElzR2xhcmVDaGVja05lZWRlZCIsInNldElzVHJhbnNsaXRDaGVja05lZWRlZCIsInNldE1pcnJvclByZXZpZXdGb3JXZWJDYW1lcmFzIiwic2V0SXNBdXRvRG9jVHlwZU1vZGUiLCJzd2FsIiwib25TdGFydEJ1dHRvbkNsaWNrIiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJzZXNzaW9uX3Rva2VuIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwic2hvd1Jlc3VsdHMiLCJkYXRhIiwiZmFjZV9waWN0dXJlIiwiY2hlY2tSZWNvZ25pdGlvbldhcm5pbmdzIiwicmVjb2duaXRpb25XYXJuaW5ncyIsImdldFJlY29nbml0aW9uV2FybmluZ3MiLCJpbmNsdWRlcyIsIlJlY29nbml0aW9uV2FybmluZyIsIkRPQ1VNRU5UX0VYUElSRUQiLCJJTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZB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QTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBaEZEOztHQUFNRixPOztLQUFBQSxPO0FBa0ZOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzZTQ5ZjAwZTEzNmUwNDI2NTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuXHJcbmNvbnN0IFZlcmlEb2MgPSAoe3NldExpdmVEb2N9KSA9PiB7XHJcbiAgXHJcbiAgZnVuY3Rpb24gb25Jbml0aWFsaXplQnV0dG9uQ2xpY2soKSB7XHJcbiAgICB2YXIgZW5kcG9pbnRBZGRyZXNzID0gJ2h0dHBzOi8vc2VydmljZXMudmVyaWdyYW0uYWk6ODQ0My92ZXJpZG9jL3J1L3Zlcmlkb2MvJztcclxuICAgIHZhciBkb2N1bWVudFR5cGUgPSBwYXJzZUludCgnMScpO1xyXG4gICAgdmFyIHJlY29nbml0aW9uTW9kZSA9IHBhcnNlSW50KCcwJyk7XHJcbiAgICB2YXIgaXNHbGFyZUNoZWNrTmVlZGVkID0gZmFsc2U7XHJcbiAgICB2YXIgaXNUcmFuc2xpdENoZWNrTmVlZGVkID0gZmFsc2U7XHJcbiAgICB2YXIgaXNNaXJyb3JNb2RlID0gZmFsc2U7XHJcbiAgICB2YXIgaXNBdXRvRG9jVHlwZU1vZGUgPWZhbHNlO1xyXG4gICAgdmFyIGFwaUtleSA9IHByb2Nlc3MuZW52LkJJT19LRVk7XHJcblxyXG4gICAgdmVyaWRvYy5pbml0KGVuZHBvaW50QWRkcmVzcywgYXBpS2V5LCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2ssIGdvdFBob3RvQ2FsbGJhY2spXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXREb2NUeXBlKGRvY3VtZW50VHlwZSk7XHJcbiAgICAgICAgICB2ZXJpZG9jLnNldFJlY29nbml0aW9uTW9kZShyZWNvZ25pdGlvbk1vZGUpO1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXRJc0dsYXJlQ2hlY2tOZWVkZWQoaXNHbGFyZUNoZWNrTmVlZGVkKTtcclxuICAgICAgICAgIHZlcmlkb2Muc2V0SXNUcmFuc2xpdENoZWNrTmVlZGVkKGlzVHJhbnNsaXRDaGVja05lZWRlZCk7XHJcbiAgICAgICAgICB2ZXJpZG9jLnNldE1pcnJvclByZXZpZXdGb3JXZWJDYW1lcmFzKGlzTWlycm9yTW9kZSk7XHJcbiAgICAgICAgICB2ZXJpZG9jLnNldElzQXV0b0RvY1R5cGVNb2RlKGlzQXV0b0RvY1R5cGVNb2RlKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc3dhbChcItCS0Ysg0YPRgdC/0LXRiNC90L4g0L/RgNC+0YjQu9C4INC/0YDQvtCy0LXRgNC60LAgJ9C20LjQstC+0YHRgtC4Jy4g0J/RgNC40LPQvtGC0L7QstGM0YLQtSDQstCw0YjQtSDRg9C00L7RgdGC0L7QstC10YDQtdC90LjQtSDQu9C40YfQvdC+0YHRgtC4INC00LvRjyDRgdC60LDQvdC40YDQvtCy0LDQvdC40LVcIiwgYNCh0LrQsNC90LjRgNGD0LXRgtGB0Y8g0YLQvtC70YzQutC+INC70LjRhtC10LLQsNGPINGB0YLQvtGA0L7QvdCwINGD0LTQvtGB0YLQvtCy0LXRgNC10L3QuNGPINC70LjRh9C90L7RgdGC0LguINCV0YHQu9C4INCy0Ysg0LPQvtGC0L7QstGLINC90LDQttC80LjRgtC1INC60L3QvtC/0LrRgyBPS2AsIFwiaW5mb1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBvblN0YXJ0QnV0dG9uQ2xpY2soKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzXCIpLmlubmVySFRNTCA9IGU7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBmdW5jdGlvbiBvblN0YXJ0QnV0dG9uQ2xpY2soKSB7XHJcbiAgICB2YXIgc2Vzc2lvbl90b2tlbiA9IHZlcmlkb2Muc3RhcnQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdzZXNpb25fdG9rZW4gaXM6ICcgKyBzZXNzaW9uX3Rva2VuKTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBzaG93UmVzdWx0cyhkYXRhKSB7XHJcbiAgICBpZihkYXRhLmZhY2VfcGljdHVyZSkge1xyXG4gICAgICBzZXRMaXZlRG9jKFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCxcIiArIGRhdGEuZmFjZV9waWN0dXJlKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1JlY29nbml0aW9uV2FybmluZ3MoKSB7XHJcbiAgICB2YXIgcmVjb2duaXRpb25XYXJuaW5ncyA9IHZlcmlkb2MuZ2V0UmVjb2duaXRpb25XYXJuaW5ncygpO1xyXG4gICAgaWYgKHJlY29nbml0aW9uV2FybmluZ3MuaW5jbHVkZXMoUmVjb2duaXRpb25XYXJuaW5nLkRPQ1VNRU5UX0VYUElSRUQpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZG9jdW1lbnQgZXhwaXJlZCEnKTtcclxuICAgIH1cclxuICAgIGlmIChyZWNvZ25pdGlvbldhcm5pbmdzLmluY2x1ZGVzKFJlY29nbml0aW9uV2FybmluZy5JTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUcmFuc2xpdGVyYXRpb24gY2hlY2sgZmFpbCB3YXJuaW5nIScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgc2hvd1Jlc3VsdHMoZGF0YSk7XHJcbiAgICBjaGVja1JlY29nbml0aW9uV2FybmluZ3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhkYXRhKSB7XHJcbiAgICBzaG93UmVzdWx0cyhkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ290UGhvdG9DYWxsYmFjaygpIHt9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvbkluaXRpYWxpemVCdXR0b25DbGljaygpXHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJpZG9jJz5cclxuICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TdGFydEJ1dHRvbkNsaWNrKCl9IGlkPVwic3RhcnRCdXR0b25cIiBhdXRvY29tcGxldGU9XCJvZmZcIj5TdGFydCBzY2FubmluZzwvYnV0dG9uPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBpZD1cImlkX3Zlcmlkb2NcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbnsvKiBcclxuICAgICAgPHAgaWQ9XCJyZXN1bHRzXCI+Tm8gc2Nhbm5pbmcgcmVzdWx0cyB5ZXQ8L3A+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJpRG9jOyJdLCJzb3VyY2VSb290IjoiIn0=