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
    onInitializeButtonClick();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "veridoc",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "id_veridoc"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      id: "results",
      children: "No scanning results yet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpRG9jLmpzIl0sIm5hbWVzIjpbIlZlcmlEb2MiLCJzZXRMaXZlRG9jIiwib25Jbml0aWFsaXplQnV0dG9uQ2xpY2siLCJlbmRwb2ludEFkZHJlc3MiLCJkb2N1bWVudFR5cGUiLCJwYXJzZUludCIsInJlY29nbml0aW9uTW9kZSIsImlzR2xhcmVDaGVja05lZWRlZCIsImlzVHJhbnNsaXRDaGVja05lZWRlZCIsImlzTWlycm9yTW9kZSIsImlzQXV0b0RvY1R5cGVNb2RlIiwiYXBpS2V5IiwicHJvY2VzcyIsInZlcmlkb2MiLCJpbml0Iiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImdvdFBob3RvQ2FsbGJhY2siLCJ0aGVuIiwic2V0RG9jVHlwZSIsInNldFJlY29nbml0aW9uTW9kZSIsInNldElzR2xhcmVDaGVja05lZWRlZCIsInNldElzVHJhbnNsaXRDaGVja05lZWRlZCIsInNldE1pcnJvclByZXZpZXdGb3JXZWJDYW1lcmFzIiwic2V0SXNBdXRvRG9jVHlwZU1vZGUiLCJzd2FsIiwib25TdGFydEJ1dHRvbkNsaWNrIiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJzZXNzaW9uX3Rva2VuIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwic2hvd1Jlc3VsdHMiLCJkYXRhIiwiZmFjZV9waWN0dXJlIiwiY2hlY2tSZWNvZ25pdGlvbldhcm5pbmdzIiwicmVjb2duaXRpb25XYXJuaW5ncyIsImdldFJlY29nbml0aW9uV2FybmluZ3MiLCJpbmNsdWRlcyIsIlJlY29nbml0aW9uV2FybmluZyIsIkRPQ1VNRU5UX0VYUElSRUQiLCJJTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZB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SyxVQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBTUU7QUFBRyxRQUFFLEVBQUMsU0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FsRkQ7O0dBQU1GLE87O0tBQUFBLE87QUFvRk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzE3NDUzNzZjNzBkMjA4ZTgyYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5cclxuY29uc3QgVmVyaURvYyA9ICh7c2V0TGl2ZURvY30pID0+IHtcclxuICBcclxuICBmdW5jdGlvbiBvbkluaXRpYWxpemVCdXR0b25DbGljaygpIHtcclxuICAgIHZhciBlbmRwb2ludEFkZHJlc3MgPSAnaHR0cHM6Ly9zZXJ2aWNlcy52ZXJpZ3JhbS5haTo4NDQzL3Zlcmlkb2MvcnUvdmVyaWRvYy8nO1xyXG4gICAgdmFyIGRvY3VtZW50VHlwZSA9IHBhcnNlSW50KCcxJyk7XHJcbiAgICB2YXIgcmVjb2duaXRpb25Nb2RlID0gcGFyc2VJbnQoJzAnKTtcclxuICAgIHZhciBpc0dsYXJlQ2hlY2tOZWVkZWQgPSBmYWxzZTtcclxuICAgIHZhciBpc1RyYW5zbGl0Q2hlY2tOZWVkZWQgPSBmYWxzZTtcclxuICAgIHZhciBpc01pcnJvck1vZGUgPSBmYWxzZTtcclxuICAgIHZhciBpc0F1dG9Eb2NUeXBlTW9kZSA9ZmFsc2U7XHJcbiAgICB2YXIgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuQklPX0tFWTtcclxuXHJcbiAgICB2ZXJpZG9jLmluaXQoZW5kcG9pbnRBZGRyZXNzLCBhcGlLZXksIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgZ290UGhvdG9DYWxsYmFjaylcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB2ZXJpZG9jLnNldERvY1R5cGUoZG9jdW1lbnRUeXBlKTtcclxuICAgICAgICAgIHZlcmlkb2Muc2V0UmVjb2duaXRpb25Nb2RlKHJlY29nbml0aW9uTW9kZSk7XHJcbiAgICAgICAgICB2ZXJpZG9jLnNldElzR2xhcmVDaGVja05lZWRlZChpc0dsYXJlQ2hlY2tOZWVkZWQpO1xyXG4gICAgICAgICAgdmVyaWRvYy5zZXRJc1RyYW5zbGl0Q2hlY2tOZWVkZWQoaXNUcmFuc2xpdENoZWNrTmVlZGVkKTtcclxuICAgICAgICAgIHZlcmlkb2Muc2V0TWlycm9yUHJldmlld0ZvcldlYkNhbWVyYXMoaXNNaXJyb3JNb2RlKTtcclxuICAgICAgICAgIHZlcmlkb2Muc2V0SXNBdXRvRG9jVHlwZU1vZGUoaXNBdXRvRG9jVHlwZU1vZGUpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzd2FsKFwi0JLRiyDRg9GB0L/QtdGI0L3QviDQv9GA0L7RiNC70Lgg0L/RgNC+0LLQtdGA0LrQsCAn0LbQuNCy0L7RgdGC0LgnLiDQn9GA0LjQs9C+0YLQvtCy0YzRgtC1INCy0LDRiNC1INGD0LTQvtGB0YLQvtCy0LXRgNC10L3QuNC1INC70LjRh9C90L7RgdGC0Lgg0LTQu9GPINGB0LrQsNC90LjRgNC+0LLQsNC90LjQtVwiLCBg0KHQutCw0L3QuNGA0YPQtdGC0YHRjyDRgtC+0LvRjNC60L4g0LvQuNGG0LXQstCw0Y8g0YHRgtC+0YDQvtC90LAg0YPQtNC+0YHRgtC+0LLQtdGA0LXQvdC40Y8g0LvQuNGH0L3QvtGB0YLQuC4g0JXRgdC70Lgg0LLRiyDQs9C+0YLQvtCy0Ysg0L3QsNC20LzQuNGC0LUg0LrQvdC+0L/QutGDIE9LYCwgXCJpbmZvXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIG9uU3RhcnRCdXR0b25DbGljaygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNcIikuaW5uZXJIVE1MID0gZTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIGZ1bmN0aW9uIG9uU3RhcnRCdXR0b25DbGljaygpIHtcclxuICAgIHZhciBzZXNzaW9uX3Rva2VuID0gdmVyaWRvYy5zdGFydCgpO1xyXG4gICAgY29uc29sZS5sb2coJ3Nlc2lvbl90b2tlbiBpczogJyArIHNlc3Npb25fdG9rZW4pO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHNob3dSZXN1bHRzKGRhdGEpIHtcclxuICAgIGlmKGRhdGEuZmFjZV9waWN0dXJlKSB7XHJcbiAgICAgIHNldExpdmVEb2MoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiICsgZGF0YS5mYWNlX3BpY3R1cmUpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHNldExpdmVEb2MoYCR7ZGF0YX1gKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1JlY29nbml0aW9uV2FybmluZ3MoKSB7XHJcbiAgICB2YXIgcmVjb2duaXRpb25XYXJuaW5ncyA9IHZlcmlkb2MuZ2V0UmVjb2duaXRpb25XYXJuaW5ncygpO1xyXG4gICAgaWYgKHJlY29nbml0aW9uV2FybmluZ3MuaW5jbHVkZXMoUmVjb2duaXRpb25XYXJuaW5nLkRPQ1VNRU5UX0VYUElSRUQpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZG9jdW1lbnQgZXhwaXJlZCEnKTtcclxuICAgIH1cclxuICAgIGlmIChyZWNvZ25pdGlvbldhcm5pbmdzLmluY2x1ZGVzKFJlY29nbml0aW9uV2FybmluZy5JTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUcmFuc2xpdGVyYXRpb24gY2hlY2sgZmFpbCB3YXJuaW5nIScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgc2hvd1Jlc3VsdHMoZGF0YSk7XHJcbiAgICBjaGVja1JlY29nbml0aW9uV2FybmluZ3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhkYXRhKSB7XHJcbiAgICBzaG93UmVzdWx0cyhkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ290UGhvdG9DYWxsYmFjaygpIHt9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvbkluaXRpYWxpemVCdXR0b25DbGljaygpXHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJpZG9jJz5cclxuICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TdGFydEJ1dHRvbkNsaWNrKCl9IGlkPVwic3RhcnRCdXR0b25cIiBhdXRvY29tcGxldGU9XCJvZmZcIj5TdGFydCBzY2FubmluZzwvYnV0dG9uPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBpZD1cImlkX3Zlcmlkb2NcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8cCBpZD1cInJlc3VsdHNcIj5ObyBzY2FubmluZyByZXN1bHRzIHlldDwvcD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaURvYzsiXSwic291cmNlUm9vdCI6IiJ9