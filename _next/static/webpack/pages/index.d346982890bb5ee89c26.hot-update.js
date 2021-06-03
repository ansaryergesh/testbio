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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [step === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriLive__WEBPACK_IMPORTED_MODULE_2__.default, {
      setLivePhoto: setLivePhoto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 22
    }, _this), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__.default, {
      setLiveDoc: setLiveDoc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, _this);
};

_s(TestCheck, "C+0/qJz+prPiKSufNDIVdomAdAU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdENoZWNrIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlUGhvdG9IYW5kbGUiLCJwaG90b0Jhc2UiLCJiZXN0RnJhbWUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNDQywrQ0FBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNWQyxPQURVOztBQUFBLG1CQUVXRiwrQ0FBUSxDQUFDLElBQUQsQ0FGbkI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFTEMsWUFGSzs7QUFBQSxtQkFHT0osK0NBQVEsQ0FBQyxJQUFELENBSGY7QUFBQSxNQUdmSyxPQUhlO0FBQUEsTUFHUEMsVUFITzs7QUFBQSxtQkFJQ04sK0NBQVEsQ0FBQyxJQUFELENBSlQ7QUFBQSxNQUlm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LENBQUMsWUFBTTtBQUNkdkIsbUJBQWU7QUFDaEIsR0FGUSxFQUVQLENBQUNwQixTQUFELENBRk8sQ0FBVDtBQUlBMkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR3ZDLElBQUksS0FBSyxJQUFaLEVBQWtCO0FBQ2hCTCxhQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0ssSUFBRCxDQUpNLENBQVQ7QUFLQSxzQkFDRTtBQUFBLGVBQ0dOLElBQUksS0FBSyxDQUFULGlCQUFjLDhEQUFDLGtFQUFEO0FBQVUsa0JBQVksRUFBRUc7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURqQixFQUVHSCxJQUFJLEtBQUssQ0FBVCxpQkFBYyw4REFBQyxpRUFBRDtBQUFTLGdCQUFVLEVBQUVLO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQXpGRDs7R0FBTVAsUzs7S0FBQUEsUztBQTRGTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMzQ2OTgyODkwYmI1ZWU4OWMyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmVyaUxpdmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmVyaWdyYW0vVmVyaUxpdmVcIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFZlcmlEb2MgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmVyaWdyYW0vVmVyaURvY1wiXG5jb25zdCBUZXN0Q2hlY2sgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGVwLHNldFN0ZXBdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW2xpdmVQaG90byxzZXRMaXZlUGhvdG9dID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2xpdmVEb2Msc2V0TGl2ZURvY10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZmlsZSxzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWxlRG9jLHNldEZpbGVEb2NdID0gdXNlU3RhdGUobnVsbClcblxuXG4gIGZ1bmN0aW9uIHVybHRvRmlsZSh1cmwsIGZpbGVuYW1lLCBtaW1lVHlwZSl7XG4gICAgbWltZVR5cGUgPSBtaW1lVHlwZSB8fCAodXJsLm1hdGNoKC9eZGF0YTooW147XSspOy8pfHwnJylbMV07XG4gICAgcmV0dXJuIChmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlcyl7cmV0dXJuIHJlcy5hcnJheUJ1ZmZlcigpO30pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGJ1Zil7cmV0dXJuIG5ldyBGaWxlKFtidWZdLCBmaWxlbmFtZSwge3R5cGU6bWltZVR5cGV9KTt9KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXZlUGhvdG9IYW5kbGUoKSB7XG4gICAgaWYobGl2ZVBob3RvIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBob3RvQmFzZSA9IGxpdmVQaG90by5iZXN0RnJhbWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBob3RvLmJlc3RGcmFtZSlcbiAgICAgIHVybHRvRmlsZShwaG90b0Jhc2UsICdhLnBuZycpXG4gICAgICAudGhlbihmdW5jdGlvbihmaWxlKXtcbiAgICAgICAgc2V0RmlsZShmaWxlKX0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGl2ZURvY0hhbmRsZSgpIHtcbiAgICBpZihsaXZlRG9jICE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsaXZlRG9jKVxuICAgICAgdXJsdG9GaWxlKGxpdmVEb2MsICdkb2MucG5nJywgJ2ltYWdlL2pwZWcnKVxuICAgICAgICAudGhlbihmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgc2V0RmlsZURvYyhmaWxlKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjaGVja1NpbWlsYXIoKSB7XG4gICAgaWYoZmlsZURvYyE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWxlRG9jKVxuICAgICAgdmFyIGJvZHlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3NlcnZpY2VzLnZlcmlncmFtLmFpOjg0NDMvdmVyaWZhY2UnXG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkJJT19LRVksXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdkb2MnLCBmaWxlRG9jKVxuICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlKVxuICAgICAgcmV0dXJuICBheGlvcy5wb3N0KEFQSV9VUkwsYm9keUZvcm1EYXRhLCBjb25maWcpXG4gICAgICAudGhlbihyZXM9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgc3dhbChcItCf0YDQvtGG0LXQvdGCINGB0L7QstC80LXRgdGC0LjQvNC+0YHRgtC4XCIsIGAke3Jlcy5kYXRhLlNpbWlsYXJpdHl9YCwgXCJpbmZvXCIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycj0+IHtcbiAgICAgICAgaWYoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGl2ZURvY0hhbmRsZSgpXG4gIH0sIFtsaXZlRG9jXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrU2ltaWxhcigpXG4gIH0sIFtmaWxlRG9jXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpdmVQaG90b0hhbmRsZSgpXG4gIH0sW2xpdmVQaG90b10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihmaWxlICE9PSBudWxsKSB7XG4gICAgICBzZXRTdGVwKDIpXG4gICAgfVxuICB9LCBbZmlsZV0pXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAge3N0ZXAgPT09IDEgJiYgPFZlcmlMaXZlIHNldExpdmVQaG90bz17c2V0TGl2ZVBob3RvfSAvPn1cbiAgICAgIHtzdGVwID09PSAyICYmIDxWZXJpRG9jIHNldExpdmVEb2M9e3NldExpdmVEb2N9Lz59XG4gICAgICB7LyogPFZlcmlEb2Mgc2V0TGl2ZURvYz17c2V0TGl2ZURvY30vPiAqL31cblxuICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShsaXZlRG9jKX0gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXN0Q2hlY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==