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
    });
  }, []);
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
      lineNumber: 108,
      columnNumber: 22
    }, _this), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__.default, {
      setLiveDoc: setLiveDoc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, _this);
};

_s(TestCheck, "zitlmLcit2FaeN4HjWjC+STMMr4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdENoZWNrIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlUGhvdG9IYW5kbGUiLCJwaG90b0Jhc2UiLCJiZXN0RnJhbWUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0IiwiZW5kcG9pbnRBZGRyZXNzIiwiZG9jdW1lbnRUeXBlIiwicGFyc2VJbnQiLCJyZWNvZ25pdGlvbk1vZGUiLCJpc0dsYXJlQ2hlY2tOZWVkZWQiLCJpc1RyYW5zbGl0Q2hlY2tOZWVkZWQiLCJpc01pcnJvck1vZGUiLCJpc0F1dG9Eb2NUeXBlTW9kZSIsInZlcmlkb2MiLCJpbml0Iiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImdvdFBob3RvQ2FsbGJhY2siLCJzZXREb2NUeXBlIiwic2V0UmVjb2duaXRpb25Nb2RlIiwic2V0SXNHbGFyZUNoZWNrTmVlZGVkIiwic2V0SXNUcmFuc2xpdENoZWNrTmVlZGVkIiwic2V0TWlycm9yUHJldmlld0ZvcldlYkNhbWVyYXMiLCJzZXRJc0F1dG9Eb2NU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QUFELENBRk0sQ0FBVDtBQUlBeUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RuQixnQkFBWTtBQUNiLEdBRlEsRUFFTixDQUFDbEIsT0FBRCxDQUZNLENBQVQ7QUFJQXFDLGtEQUFTLENBQUMsWUFBTTtBQUNkdkIsbUJBQWU7QUFDaEIsR0FGUSxFQUVQLENBQUNwQixTQUFELENBRk8sQ0FBVDtBQUlBMkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR3ZDLElBQUksS0FBSyxJQUFaLEVBQWtCO0FBQ2hCTCxhQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0ssSUFBRCxDQUpNLENBQVQ7QUFLQSxzQkFDRTtBQUFBLGVBQ0dOLElBQUksS0FBSyxDQUFULGlCQUFjLDhEQUFDLGtFQUFEO0FBQVUsa0JBQVksRUFBRUc7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURqQixFQUVHSCxJQUFJLEtBQUssQ0FBVCxpQkFBYyw4REFBQyxpRUFBRDtBQUFTLGdCQUFVLEVBQUVLO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQTlHRDs7R0FBTVAsUzs7S0FBQUEsUztBQWlITiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YWQ5N2VmZmZkODg4MmQ2ZGM0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmVyaUxpdmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmVyaWdyYW0vVmVyaUxpdmVcIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFZlcmlEb2MgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmVyaWdyYW0vVmVyaURvY1wiXG5jb25zdCBUZXN0Q2hlY2sgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGVwLHNldFN0ZXBdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW2xpdmVQaG90byxzZXRMaXZlUGhvdG9dID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2xpdmVEb2Msc2V0TGl2ZURvY10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZmlsZSxzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWxlRG9jLHNldEZpbGVEb2NdID0gdXNlU3RhdGUobnVsbClcblxuXG4gIGZ1bmN0aW9uIHVybHRvRmlsZSh1cmwsIGZpbGVuYW1lLCBtaW1lVHlwZSl7XG4gICAgbWltZVR5cGUgPSBtaW1lVHlwZSB8fCAodXJsLm1hdGNoKC9eZGF0YTooW147XSspOy8pfHwnJylbMV07XG4gICAgcmV0dXJuIChmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlcyl7cmV0dXJuIHJlcy5hcnJheUJ1ZmZlcigpO30pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGJ1Zil7cmV0dXJuIG5ldyBGaWxlKFtidWZdLCBmaWxlbmFtZSwge3R5cGU6bWltZVR5cGV9KTt9KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXZlUGhvdG9IYW5kbGUoKSB7XG4gICAgaWYobGl2ZVBob3RvIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHBob3RvQmFzZSA9IGxpdmVQaG90by5iZXN0RnJhbWVcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBob3RvLmJlc3RGcmFtZSlcbiAgICAgIHVybHRvRmlsZShwaG90b0Jhc2UsICdhLnBuZycpXG4gICAgICAudGhlbihmdW5jdGlvbihmaWxlKXtcbiAgICAgICAgc2V0RmlsZShmaWxlKX0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGl2ZURvY0hhbmRsZSgpIHtcbiAgICBpZihsaXZlRG9jICE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsaXZlRG9jKVxuICAgICAgdXJsdG9GaWxlKGxpdmVEb2MsICdkb2MucG5nJywgJ2ltYWdlL2pwZWcnKVxuICAgICAgICAudGhlbihmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgc2V0RmlsZURvYyhmaWxlKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjaGVja1NpbWlsYXIoKSB7XG4gICAgaWYoZmlsZURvYyE9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWxlRG9jKVxuICAgICAgdmFyIGJvZHlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3NlcnZpY2VzLnZlcmlncmFtLmFpOjg0NDMvdmVyaWZhY2UnXG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkJJT19LRVksXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdkb2MnLCBmaWxlRG9jKVxuICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlKVxuICAgICAgcmV0dXJuICBheGlvcy5wb3N0KEFQSV9VUkwsYm9keUZvcm1EYXRhLCBjb25maWcpXG4gICAgICAudGhlbihyZXM9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgc3dhbChcItCf0YDQvtGG0LXQvdGCINGB0L7QstC80LXRgdGC0LjQvNC+0YHRgtC4XCIsIGAke3Jlcy5kYXRhLlNpbWlsYXJpdHl9YCwgXCJpbmZvXCIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycj0+IHtcbiAgICAgICAgaWYoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgZW5kcG9pbnRBZGRyZXNzID0gJ2h0dHBzOi8vc2VydmljZXMudmVyaWdyYW0uYWk6ODQ0My92ZXJpZG9jL3J1L3Zlcmlkb2MvJztcbiAgICB2YXIgZG9jdW1lbnRUeXBlID0gcGFyc2VJbnQoJzEnKTtcbiAgICB2YXIgcmVjb2duaXRpb25Nb2RlID0gcGFyc2VJbnQoJzAnKTtcbiAgICB2YXIgaXNHbGFyZUNoZWNrTmVlZGVkID0gZmFsc2U7XG4gICAgdmFyIGlzVHJhbnNsaXRDaGVja05lZWRlZCA9IGZhbHNlO1xuICAgIHZhciBpc01pcnJvck1vZGUgPSBmYWxzZTtcbiAgICB2YXIgaXNBdXRvRG9jVHlwZU1vZGUgPWZhbHNlO1xuICAgIHZhciBhcGlLZXkgPSBwcm9jZXNzLmVudi5CSU9fS0VZO1xuXG4gICAgdmVyaWRvYy5pbml0KGVuZHBvaW50QWRkcmVzcywgYXBpS2V5LCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2ssIGdvdFBob3RvQ2FsbGJhY2spXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB2ZXJpZG9jLnNldERvY1R5cGUoZG9jdW1lbnRUeXBlKTtcbiAgICAgICAgICB2ZXJpZG9jLnNldFJlY29nbml0aW9uTW9kZShyZWNvZ25pdGlvbk1vZGUpO1xuICAgICAgICAgIHZlcmlkb2Muc2V0SXNHbGFyZUNoZWNrTmVlZGVkKGlzR2xhcmVDaGVja05lZWRlZCk7XG4gICAgICAgICAgdmVyaWRvYy5zZXRJc1RyYW5zbGl0Q2hlY2tOZWVkZWQoaXNUcmFuc2xpdENoZWNrTmVlZGVkKTtcbiAgICAgICAgICB2ZXJpZG9jLnNldE1pcnJvclByZXZpZXdGb3JXZWJDYW1lcmFzKGlzTWlycm9yTW9kZSk7XG4gICAgICAgICAgdmVyaWRvYy5zZXRJc0F1dG9Eb2NUeXBlTW9kZShpc0F1dG9Eb2NUeXBlTW9kZSk7XG5cbiAgICAgICAgXG4gICAgICAgIH0pXG4gIH0sIFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpdmVEb2NIYW5kbGUoKVxuICB9LCBbbGl2ZURvY10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1NpbWlsYXIoKVxuICB9LCBbZmlsZURvY10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXZlUGhvdG9IYW5kbGUoKVxuICB9LFtsaXZlUGhvdG9dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgc2V0U3RlcCgyKVxuICAgIH1cbiAgfSwgW2ZpbGVdKVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIHtzdGVwID09PSAxICYmIDxWZXJpTGl2ZSBzZXRMaXZlUGhvdG89e3NldExpdmVQaG90b30gLz59XG4gICAgICB7c3RlcCA9PT0gMiAmJiA8VmVyaURvYyBzZXRMaXZlRG9jPXtzZXRMaXZlRG9jfS8+fVxuICAgICAgey8qIDxWZXJpRG9jIHNldExpdmVEb2M9e3NldExpdmVEb2N9Lz4gKi99XG5cbiAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkobGl2ZURvYyl9ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGVzdENoZWNrOyJdLCJzb3VyY2VSb290IjoiIn0=