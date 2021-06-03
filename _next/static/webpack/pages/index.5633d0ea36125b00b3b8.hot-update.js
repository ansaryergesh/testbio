self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Verigram_VeriLive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Verigram/VeriLive */ "./components/Verigram/VeriLive.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Verigram/VeriDoc */ "./components/Verigram/VeriDoc.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\verigram\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var TestCheck = function TestCheck() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      livePhoto = _useState2[0],
      setLivePhoto = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      liveDoc = _useState3[0],
      setLiveDoc = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      fileDoc = _useState5[0],
      setFileDoc = _useState5[1];

  function urltoFile(url, filename, mimeType) {
    mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
    return fetch(url).then(function (res) {
      return res.arrayBuffer();
    }).then(function (buf) {
      return new File([buf], filename, {
        type: mimeType
      });
    });
  }

  function livePhotoHandle() {
    if (livePhoto !== null) {
      var photoBase = livePhoto.bestFrame; // console.log(photo.bestFrame)

      urltoFile(photoBase, 'a.png').then(function (file) {
        setFile(file);
      });
    }
  }

  function liveDocHandle() {
    if (liveDoc !== null) {
      // console.log(liveDoc)
      urltoFile(liveDoc, 'doc.png', 'image/jpeg').then(function (file) {
        setFileDoc(file);
      });
    }
  }

  function checkSimilar() {
    if (fileDoc !== null) {
      // console.log(fileDoc)
      var bodyFormData = new FormData();
      var API_URL = 'https://services.verigram.ai:8443/veriface';
      var config = {
        headers: {
          apiKey: "PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ",
          'Content-Type': 'multipart/form-data'
        }
      };
      bodyFormData.append('doc', fileDoc);
      bodyFormData.append('photo', file);
      return axios__WEBPACK_IMPORTED_MODULE_3___default().post(API_URL, bodyFormData, config).then(function (res) {
        console.log(res);
        swal("Процент совместимости", "".concat(res.data.Similarity), "info").then(function () {
          location.reload();
        });
      })["catch"](function (err) {
        if (err.response) {
          console.log(err.response);
        }
      });
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    liveDocHandle();
  }, [liveDoc]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    checkSimilar();
  }, [fileDoc]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    livePhotoHandle();
  }, [livePhoto]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (file !== null) {
      setStep(2);
    }
  }, [file]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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

    var apiKey = 'DUMMY_API_KEY';
    var endpointAddress = 'https://dev.verilive.verigram.ai/ru/veridoc/';

    if (step === 2) {
      veridoc.init(endpointAddress, apiKey, successCallback, errorCallback, gotPhotoCallback);
    }
  }, [step]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [step === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriLive__WEBPACK_IMPORTED_MODULE_2__.default, {
      setLivePhoto: setLivePhoto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 22
    }, _this), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__.default, {
      setLiveDoc: setLiveDoc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 128,
    columnNumber: 5
  }, _this);
};

_s(TestCheck, "+t/dkaoGzJ4GK6jE2cbJFs9kiqk=");

_c = TestCheck;
/* harmony default export */ __webpack_exports__["default"] = (TestCheck);

var _c;

$RefreshReg$(_c, "TestCheck");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdENoZWNrIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlUGhvdG9IYW5kbGUiLCJwaG90b0Jhc2UiLCJiZXN0RnJhbWUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0Iiwic2hvd1Jlc3VsdHMiLCJmYWNlX3BpY3R1cmUiLCJjaGVja1JlY29nbml0aW9uV2FybmluZ3MiLCJyZWNvZ25pdGlvbldhcm5pbmdzIiwidmVyaWRvYyIsImdldFJlY29nbml0aW9uV2FybmluZ3MiLCJpbmNsdWRlcyIsIlJlY29nbml0aW9uV2FybmluZyIsIkRPQ1VNRU5UX0VYUElSRUQiLCJJTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImdvdFBob3RvQ2FsbGJhY2siLCJlbmRwb2ludEFkZHJlc3MiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEs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LDRCQUFoRCxDQUFKLEVBQW1GO0FBQ2pGbkIsZUFBTyxDQUFDQyxHQUFSLENBQVkscUNBQVo7QUFDRDtBQUNGOztBQUVELGFBQVNtQixlQUFULENBQXlCakIsSUFBekIsRUFBK0I7QUFDN0JPLGlCQUFXLENBQUNQLElBQUQsQ0FBWDtBQUNBUyw4QkFBd0I7QUFDekI7O0FBRUQsYUFBU1MsYUFBVCxDQUF1QmxCLElBQXZCLEVBQTZCO0FBQzNCTyxpQkFBVyxDQUFDUCxJQUFELENBQVg7QUFDRDs7QUFFRCxhQUFTbUIsZ0JBQVQsR0FBNEIsQ0FBRTs7QUFDOUIsUUFBSTFCLE1BQU0sR0FBRyxlQUFiO0FBQ0EsUUFBSTJCLGVBQWUsR0FBRyw4Q0FBdEI7O0FBQ0EsUUFBSTNELElBQUksS0FBSyxDQUFiLEVBQWdCO0FBQ2RrRCxhQUFPLENBQUNVLElBQVIsQ0FBYUQsZUFBYixFQUE4QjNCLE1BQTlCLEVBQXNDd0IsZUFBdEMsRUFBdURDLGFBQXZELEVBQXNFQyxnQkFBdEU7QUFDRDtBQUNGLEdBbENRLEVBa0NOLENBQUMxRCxJQUFELENBbENNLENBQVQ7QUFtQ0Esc0JBQ0U7QUFBQSxlQUNHQSxJQUFJLEtBQUssQ0FBVCxpQkFBYyw4REFBQyxrRUFBRDtBQUFVLGtCQUFZLEVBQUVHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEakIsRUFFR0gsSUFBSSxLQUFLLENBQVQsaUJBQWMsOERBQUMsaUVBQUQ7QUFBUyxnQkFBVSxFQUFFSztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FuSUQ7O0dBQU1QLFM7O0tBQUFBLFM7QUFxSU4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTYzM2QwZWEzNjEyNWIwMGIzYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBWZXJpTGl2ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpTGl2ZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVmVyaURvYyBmcm9tIFwiLi4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpRG9jXCJcbmNvbnN0IFRlc3RDaGVjayA9ICgpID0+IHtcbiAgY29uc3QgW3N0ZXAsXG4gICAgc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbbGl2ZVBob3RvLFxuICAgIHNldExpdmVQaG90b10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbGl2ZURvYyxcbiAgICBzZXRMaXZlRG9jXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWxlLFxuICAgIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2ZpbGVEb2MsXG4gICAgc2V0RmlsZURvY10gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGZ1bmN0aW9uIHVybHRvRmlsZSh1cmwsIGZpbGVuYW1lLCBtaW1lVHlwZSkge1xuICAgIG1pbWVUeXBlID0gbWltZVR5cGUgfHwgKHVybC5tYXRjaCgvXmRhdGE6KFteO10rKTsvKSB8fCAnJylbMV07XG4gICAgcmV0dXJuIChmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgcmV0dXJuIHJlcy5hcnJheUJ1ZmZlcigpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJ1Zikge1xuICAgICAgcmV0dXJuIG5ldyBGaWxlKFtidWZdLCBmaWxlbmFtZSwge3R5cGU6IG1pbWVUeXBlfSk7XG4gICAgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGl2ZVBob3RvSGFuZGxlKCkge1xuICAgIGlmIChsaXZlUGhvdG8gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBob3RvQmFzZSA9IGxpdmVQaG90by5iZXN0RnJhbWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBob3RvLmJlc3RGcmFtZSlcbiAgICAgIHVybHRvRmlsZShwaG90b0Jhc2UsICdhLnBuZycpLnRoZW4oZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgc2V0RmlsZShmaWxlKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXZlRG9jSGFuZGxlKCkge1xuICAgIGlmIChsaXZlRG9jICE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsaXZlRG9jKVxuICAgICAgdXJsdG9GaWxlKGxpdmVEb2MsICdkb2MucG5nJywgJ2ltYWdlL2pwZWcnKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIHNldEZpbGVEb2MoZmlsZSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tTaW1pbGFyKCkge1xuICAgIGlmIChmaWxlRG9jICE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWxlRG9jKVxuICAgICAgdmFyIGJvZHlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3NlcnZpY2VzLnZlcmlncmFtLmFpOjg0NDMvdmVyaWZhY2UnXG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkJJT19LRVksXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdkb2MnLCBmaWxlRG9jKVxuICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlKVxuICAgICAgcmV0dXJuIGF4aW9zXG4gICAgICAgIC5wb3N0KEFQSV9VUkwsIGJvZHlGb3JtRGF0YSwgY29uZmlnKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICBzd2FsKFwi0J/RgNC+0YbQtdC90YIg0YHQvtCy0LzQtdGB0YLQuNC80L7RgdGC0LhcIiwgYCR7cmVzLmRhdGEuU2ltaWxhcml0eX1gLCBcImluZm9cIikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXZlRG9jSGFuZGxlKClcbiAgfSwgW2xpdmVEb2NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tTaW1pbGFyKClcbiAgfSwgW2ZpbGVEb2NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGl2ZVBob3RvSGFuZGxlKClcbiAgfSwgW2xpdmVQaG90b10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgc2V0U3RlcCgyKVxuICAgIH1cbiAgfSwgW2ZpbGVdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gc2hvd1Jlc3VsdHMoZGF0YSkge1xuICAgICAgaWYgKGRhdGEuZmFjZV9waWN0dXJlKSB7XG4gICAgICAgIHNldExpdmVEb2MoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiICsgZGF0YS5mYWNlX3BpY3R1cmUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMaXZlRG9jKGAke2RhdGF9YClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1JlY29nbml0aW9uV2FybmluZ3MoKSB7XG4gICAgICB2YXIgcmVjb2duaXRpb25XYXJuaW5ncyA9IHZlcmlkb2MuZ2V0UmVjb2duaXRpb25XYXJuaW5ncygpO1xuICAgICAgaWYgKHJlY29nbml0aW9uV2FybmluZ3MuaW5jbHVkZXMoUmVjb2duaXRpb25XYXJuaW5nLkRPQ1VNRU5UX0VYUElSRUQpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIGRvY3VtZW50IGV4cGlyZWQhJyk7XG4gICAgICB9XG4gICAgICBpZiAocmVjb2duaXRpb25XYXJuaW5ncy5pbmNsdWRlcyhSZWNvZ25pdGlvbldhcm5pbmcuSU5DT05TSVNURU5UX1RSQU5TTElURVJBVElPTikpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RyYW5zbGl0ZXJhdGlvbiBjaGVjayBmYWlsIHdhcm5pbmchJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKGRhdGEpIHtcbiAgICAgIHNob3dSZXN1bHRzKGRhdGEpO1xuICAgICAgY2hlY2tSZWNvZ25pdGlvbldhcm5pbmdzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhkYXRhKSB7XG4gICAgICBzaG93UmVzdWx0cyhkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnb3RQaG90b0NhbGxiYWNrKCkge31cbiAgICB2YXIgYXBpS2V5ID0gJ0RVTU1ZX0FQSV9LRVknO1xuICAgIHZhciBlbmRwb2ludEFkZHJlc3MgPSAnaHR0cHM6Ly9kZXYudmVyaWxpdmUudmVyaWdyYW0uYWkvcnUvdmVyaWRvYy8nO1xuICAgIGlmIChzdGVwID09PSAyKSB7XG4gICAgICB2ZXJpZG9jLmluaXQoZW5kcG9pbnRBZGRyZXNzLCBhcGlLZXksIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgZ290UGhvdG9DYWxsYmFjaylcbiAgICB9XG4gIH0sIFtzdGVwXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3N0ZXAgPT09IDEgJiYgPFZlcmlMaXZlIHNldExpdmVQaG90bz17c2V0TGl2ZVBob3RvfS8+fVxuICAgICAge3N0ZXAgPT09IDIgJiYgPFZlcmlEb2Mgc2V0TGl2ZURvYz17c2V0TGl2ZURvY30vPn1cbiAgICAgIHsvKiA8VmVyaURvYyBzZXRMaXZlRG9jPXtzZXRMaXZlRG9jfS8+ICovfVxuXG4gICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KGxpdmVEb2MpfSAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0Q2hlY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==