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
    console.log('live photo changed');
    console.log(livePhoto);
  }, [livePhoto]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log(file);
    console.log('checking');

    if (file !== null) {
      setStep(2);
    }
  }, [file]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [step === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriLive__WEBPACK_IMPORTED_MODULE_2__.default, {
      setLivePhoto: setLivePhoto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 22
    }, _this), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__.default, {
      setLiveDoc: setLiveDoc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdENoZWNrIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlUGhvdG9IYW5kbGUiLCJwaG90b0Jhc2UiLCJiZXN0RnJhbWUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNDQywrQ0FBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNWQyxPQURVOztBQUFBLG1CQUVXRiwrQ0FBUSxDQUFDLElBQUQsQ0FGbkI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFTEMsWUFGSzs7QUFBQSxtQkFHT0osK0NBQVEsQ0FBQyxJQUFELENBSGY7QUFBQSxNQUdmSyxPQUhlO0FBQUEsTUFHUEMsVUFITzs7QUFBQSxtQkFJQ04sK0NBQVEsQ0FBQyxJQUFELENBSlQ7QUFBQSxNQUlm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LENBQUMsWUFBTTtBQUNkdkIsbUJBQWU7QUFDZmMsV0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVluQyxTQUFaO0FBQ0QsR0FKUSxFQUlQLENBQUNBLFNBQUQsQ0FKTyxDQUFUO0FBTUEyQyxrREFBUyxDQUFDLFlBQU07QUFDZFQsV0FBTyxDQUFDQyxHQUFSLENBQVkvQixJQUFaO0FBQ0E4QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaOztBQUNBLFFBQUcvQixJQUFJLEtBQUssSUFBWixFQUFrQjtBQUNoQkwsYUFBTyxDQUFDLENBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FOUSxFQU1OLENBQUNLLElBQUQsQ0FOTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSxlQUNHTixJQUFJLEtBQUssQ0FBVCxpQkFBYyw4REFBQyxrRUFBRDtBQUFVLGtCQUFZLEVBQUVHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEakIsRUFFR0gsSUFBSSxLQUFLLENBQVQsaUJBQWMsOERBQUMsaUVBQUQ7QUFBUyxnQkFBVSxFQUFFSztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0EzRkQ7O0dBQU1QLFM7O0tBQUFBLFM7QUE4Rk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDM4N2RkMWMwMGJhYmY1NTM2YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFZlcmlMaXZlIGZyb20gXCIuLi9jb21wb25lbnRzL1ZlcmlncmFtL1ZlcmlMaXZlXCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBWZXJpRG9jIGZyb20gXCIuLi9jb21wb25lbnRzL1ZlcmlncmFtL1ZlcmlEb2NcIlxuY29uc3QgVGVzdENoZWNrID0gKCkgPT4ge1xuICBjb25zdCBbc3RlcCxzZXRTdGVwXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFtsaXZlUGhvdG8sc2V0TGl2ZVBob3RvXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtsaXZlRG9jLHNldExpdmVEb2NdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2ZpbGUsc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZmlsZURvYyxzZXRGaWxlRG9jXSA9IHVzZVN0YXRlKG51bGwpXG5cblxuICBmdW5jdGlvbiB1cmx0b0ZpbGUodXJsLCBmaWxlbmFtZSwgbWltZVR5cGUpe1xuICAgIG1pbWVUeXBlID0gbWltZVR5cGUgfHwgKHVybC5tYXRjaCgvXmRhdGE6KFteO10rKTsvKXx8JycpWzFdO1xuICAgIHJldHVybiAoZmV0Y2godXJsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXMpe3JldHVybiByZXMuYXJyYXlCdWZmZXIoKTt9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihidWYpe3JldHVybiBuZXcgRmlsZShbYnVmXSwgZmlsZW5hbWUsIHt0eXBlOm1pbWVUeXBlfSk7fSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbGl2ZVBob3RvSGFuZGxlKCkge1xuICAgIGlmKGxpdmVQaG90byE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwaG90b0Jhc2UgPSBsaXZlUGhvdG8uYmVzdEZyYW1lXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaG90by5iZXN0RnJhbWUpXG4gICAgICB1cmx0b0ZpbGUocGhvdG9CYXNlLCAnYS5wbmcnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oZmlsZSl7XG4gICAgICAgIHNldEZpbGUoZmlsZSl9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpdmVEb2NIYW5kbGUoKSB7XG4gICAgaWYobGl2ZURvYyAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2cobGl2ZURvYylcbiAgICAgIHVybHRvRmlsZShsaXZlRG9jLCAnZG9jLnBuZycsICdpbWFnZS9qcGVnJylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgIHNldEZpbGVEb2MoZmlsZSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tTaW1pbGFyKCkge1xuICAgIGlmKGZpbGVEb2MhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coZmlsZURvYylcbiAgICAgIHZhciBib2R5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9zZXJ2aWNlcy52ZXJpZ3JhbS5haTo4NDQzL3ZlcmlmYWNlJ1xuICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5CSU9fS0VZLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnZG9jJywgZmlsZURvYylcbiAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSlcbiAgICAgIHJldHVybiAgYXhpb3MucG9zdChBUElfVVJMLGJvZHlGb3JtRGF0YSwgY29uZmlnKVxuICAgICAgLnRoZW4ocmVzPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHN3YWwoXCLQn9GA0L7RhtC10L3RgiDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YLQuFwiLCBgJHtyZXMuZGF0YS5TaW1pbGFyaXR5fWAsIFwiaW5mb1wiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnI9PiB7XG4gICAgICAgIGlmKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpdmVEb2NIYW5kbGUoKVxuICB9LCBbbGl2ZURvY10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1NpbWlsYXIoKVxuICB9LCBbZmlsZURvY10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXZlUGhvdG9IYW5kbGUoKVxuICAgIGNvbnNvbGUubG9nKCdsaXZlIHBob3RvIGNoYW5nZWQnKVxuICAgIGNvbnNvbGUubG9nKGxpdmVQaG90bylcbiAgfSxbbGl2ZVBob3RvXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZpbGUpXG4gICAgY29uc29sZS5sb2coJ2NoZWNraW5nJylcbiAgICBpZihmaWxlICE9PSBudWxsKSB7XG4gICAgICBzZXRTdGVwKDIpXG4gICAgfVxuICB9LCBbZmlsZV0pXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAge3N0ZXAgPT09IDEgJiYgPFZlcmlMaXZlIHNldExpdmVQaG90bz17c2V0TGl2ZVBob3RvfSAvPn1cbiAgICAgIHtzdGVwID09PSAyICYmIDxWZXJpRG9jIHNldExpdmVEb2M9e3NldExpdmVEb2N9Lz59XG4gICAgICB7LyogPFZlcmlEb2Mgc2V0TGl2ZURvYz17c2V0TGl2ZURvY30vPiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RDaGVjazsiXSwic291cmNlUm9vdCI6IiJ9