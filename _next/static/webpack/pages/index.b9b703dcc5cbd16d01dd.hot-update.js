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
    }, _this), JSON.stringify(liveDoc)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdENoZWNrIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlUGhvdG9IYW5kbGUiLCJwaG90b0Jhc2UiLCJiZXN0RnJhbWUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVkMsT0FEVTs7QUFBQSxtQkFFV0YsK0NBQVEsQ0FBQyxJQUFELENBRm5CO0FBQUEsTUFFZkcsU0FGZTtBQUFBLE1BRUxDLFlBRks7O0FBQUEsbUJBR09KLCtDQUFRLENBQUMsSUFBRCxDQUhmO0FBQUEsTUFHZkssT0FIZTtBQUFBLE1BR1BDLFVBSE87O0FBQUEsbUJBSUNOLCtDQUFRLENBQUMs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TSxDQUFUO0FBSUFxQyxrREFBUyxDQUFDLFlBQU07QUFDZHZCLG1CQUFlO0FBQ2hCLEdBRlEsRUFFUCxDQUFDcEIsU0FBRCxDQUZPLENBQVQ7QUFJQTJDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUd2QyxJQUFJLEtBQUssSUFBWixFQUFrQjtBQUNoQkwsYUFBTyxDQUFDLENBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNLLElBQUQsQ0FKTSxDQUFUO0FBS0Esc0JBQ0U7QUFBQSxlQUNHTixJQUFJLEtBQUssQ0FBVCxpQkFBYyw4REFBQyxrRUFBRDtBQUFVLGtCQUFZLEVBQUVHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEakIsRUFFR0gsSUFBSSxLQUFLLENBQVQsaUJBQWMsOERBQUMsaUVBQUQ7QUFBUyxnQkFBVSxFQUFFSztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmpCLEVBS0d5QyxJQUFJLENBQUNDLFNBQUwsQ0FBZTNDLE9BQWYsQ0FMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBekZEOztHQUFNTixTOztLQUFBQSxTO0FBNEZOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5YjcwM2RjYzVjYmQxNmQwMWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBWZXJpTGl2ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpTGl2ZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVmVyaURvYyBmcm9tIFwiLi4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpRG9jXCJcbmNvbnN0IFRlc3RDaGVjayA9ICgpID0+IHtcbiAgY29uc3QgW3N0ZXAsc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbbGl2ZVBob3RvLHNldExpdmVQaG90b10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbGl2ZURvYyxzZXRMaXZlRG9jXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWxlLHNldEZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2ZpbGVEb2Msc2V0RmlsZURvY10gPSB1c2VTdGF0ZShudWxsKVxuXG5cbiAgZnVuY3Rpb24gdXJsdG9GaWxlKHVybCwgZmlsZW5hbWUsIG1pbWVUeXBlKXtcbiAgICBtaW1lVHlwZSA9IG1pbWVUeXBlIHx8ICh1cmwubWF0Y2goL15kYXRhOihbXjtdKyk7Lyl8fCcnKVsxXTtcbiAgICByZXR1cm4gKGZldGNoKHVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKXtyZXR1cm4gcmVzLmFycmF5QnVmZmVyKCk7fSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oYnVmKXtyZXR1cm4gbmV3IEZpbGUoW2J1Zl0sIGZpbGVuYW1lLCB7dHlwZTptaW1lVHlwZX0pO30pXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpdmVQaG90b0hhbmRsZSgpIHtcbiAgICBpZihsaXZlUGhvdG8hPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGhvdG9CYXNlID0gbGl2ZVBob3RvLmJlc3RGcmFtZVxuICAgICAgLy8gY29uc29sZS5sb2cocGhvdG8uYmVzdEZyYW1lKVxuICAgICAgdXJsdG9GaWxlKHBob3RvQmFzZSwgJ2EucG5nJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGZpbGUpe1xuICAgICAgICBzZXRGaWxlKGZpbGUpfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXZlRG9jSGFuZGxlKCkge1xuICAgIGlmKGxpdmVEb2MgIT09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxpdmVEb2MpXG4gICAgICB1cmx0b0ZpbGUobGl2ZURvYywgJ2RvYy5wbmcnLCAnaW1hZ2UvanBlZycpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICBzZXRGaWxlRG9jKGZpbGUpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNoZWNrU2ltaWxhcigpIHtcbiAgICBpZihmaWxlRG9jIT09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVEb2MpXG4gICAgICB2YXIgYm9keUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vc2VydmljZXMudmVyaWdyYW0uYWk6ODQ0My92ZXJpZmFjZSdcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuQklPX0tFWSxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ2RvYycsIGZpbGVEb2MpXG4gICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdwaG90bycsIGZpbGUpXG4gICAgICByZXR1cm4gIGF4aW9zLnBvc3QoQVBJX1VSTCxib2R5Rm9ybURhdGEsIGNvbmZpZylcbiAgICAgIC50aGVuKHJlcz0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBzd2FsKFwi0J/RgNC+0YbQtdC90YIg0YHQvtCy0LzQtdGB0YLQuNC80L7RgdGC0LhcIiwgYCR7cmVzLmRhdGEuU2ltaWxhcml0eX1gLCBcImluZm9cIikudGhlbigoKSA9PiB7XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyPT4ge1xuICAgICAgICBpZihlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXZlRG9jSGFuZGxlKClcbiAgfSwgW2xpdmVEb2NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tTaW1pbGFyKClcbiAgfSwgW2ZpbGVEb2NdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGl2ZVBob3RvSGFuZGxlKClcbiAgfSxbbGl2ZVBob3RvXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKGZpbGUgIT09IG51bGwpIHtcbiAgICAgIHNldFN0ZXAoMilcbiAgICB9XG4gIH0sIFtmaWxlXSlcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICB7c3RlcCA9PT0gMSAmJiA8VmVyaUxpdmUgc2V0TGl2ZVBob3RvPXtzZXRMaXZlUGhvdG99IC8+fVxuICAgICAge3N0ZXAgPT09IDIgJiYgPFZlcmlEb2Mgc2V0TGl2ZURvYz17c2V0TGl2ZURvY30vPn1cbiAgICAgIHsvKiA8VmVyaURvYyBzZXRMaXZlRG9jPXtzZXRMaXZlRG9jfS8+ICovfVxuXG4gICAgICB7SlNPTi5zdHJpbmdpZnkobGl2ZURvYyl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXN0Q2hlY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==