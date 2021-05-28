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
          console.log(err.response); // console.log(err.response.config.data.get('photo'))
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
    } // var bodyFormData = new FormData();
    // const API_URL = 'https://services.verigram.ai:8443/veriface'
    // const config = {
    //   headers: {
    //     apiKey: process.env.BIO_KEY,
    //     'Content-Type': 'multipart/form-data'
    //   }
    // }
    // bodyFormData.append('doc', file)
    // bodyFormData.append('photo', file)
    // return  axios.post(API_URL,bodyFormData, config)
    // .then(res=> {
    //   console.log(res)
    // })
    // .catch(err=> {
    //   if(err.response) {
    //     console.log(err.response)
    //     console.log(err.response.config.data.get('photo'))
    //   }
    // })

  }, [file]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [step === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriLive__WEBPACK_IMPORTED_MODULE_2__.default, {
      setLivePhoto: setLivePhoto
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 22
    }, _this), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__.default, {
      setLiveDoc: setLiveDoc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdENoZWNrIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlUGhvdG9IYW5kbGUiLCJwaG90b0Jhc2UiLCJiZXN0RnJhbWUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNDQywrQ0FBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNWQyxPQURVOztBQUFBLG1CQUVXRiwrQ0FBUSxDQUFDLElBQUQsQ0FGbkI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFTEMsWUFGSzs7QUFBQSxtQkFHT0osK0NBQVEsQ0FBQyxJQUFELENBSGY7QUFBQSxNQUdmSyxPQUhlO0FBQUEsTUFHUEMsVUFITzs7QUFBQSxtQkFJQ04sK0NBQVEsQ0FBQyxJQUFELENBSlQ7QUFBQSxNQUlm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SUFxQyxrREFBUyxDQUFDLFlBQU07QUFDZHZCLG1CQUFlO0FBQ2ZjLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZbkMsU0FBWjtBQUNELEdBSlEsRUFJUCxDQUFDQSxTQUFELENBSk8sQ0FBVDtBQU1BMkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RULFdBQU8sQ0FBQ0MsR0FBUixDQUFZL0IsSUFBWjtBQUNBOEIsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjs7QUFDQSxRQUFHL0IsSUFBSSxLQUFLLElBQVosRUFBa0I7QUFDaEJMLGFBQU8sQ0FBQyxDQUFELENBQVA7QUFDRCxLQUxhLENBTWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxHQTFCUSxFQTBCTixDQUFDSyxJQUFELENBMUJNLENBQVQ7QUEyQkEsc0JBQ0U7QUFBQSxlQUNHTixJQUFJLEtBQUssQ0FBVCxpQkFBYyw4REFBQyxrRUFBRDtBQUFVLGtCQUFZLEVBQUVHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEakIsRUFFR0gsSUFBSSxLQUFLLENBQVQsaUJBQWMsOERBQUMsaUVBQUQ7QUFBUyxnQkFBVSxFQUFFSztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FoSEQ7O0dBQU1QLFM7O0tBQUFBLFM7QUFtSE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTkzMTc2OGYyY2M2ZGMzMTNjMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFZlcmlMaXZlIGZyb20gXCIuLi9jb21wb25lbnRzL1ZlcmlncmFtL1ZlcmlMaXZlXCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBWZXJpRG9jIGZyb20gXCIuLi9jb21wb25lbnRzL1ZlcmlncmFtL1ZlcmlEb2NcIlxuY29uc3QgVGVzdENoZWNrID0gKCkgPT4ge1xuICBjb25zdCBbc3RlcCxzZXRTdGVwXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFtsaXZlUGhvdG8sc2V0TGl2ZVBob3RvXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtsaXZlRG9jLHNldExpdmVEb2NdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2ZpbGUsc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZmlsZURvYyxzZXRGaWxlRG9jXSA9IHVzZVN0YXRlKG51bGwpXG5cblxuICBmdW5jdGlvbiB1cmx0b0ZpbGUodXJsLCBmaWxlbmFtZSwgbWltZVR5cGUpe1xuICAgIG1pbWVUeXBlID0gbWltZVR5cGUgfHwgKHVybC5tYXRjaCgvXmRhdGE6KFteO10rKTsvKXx8JycpWzFdO1xuICAgIHJldHVybiAoZmV0Y2godXJsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXMpe3JldHVybiByZXMuYXJyYXlCdWZmZXIoKTt9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihidWYpe3JldHVybiBuZXcgRmlsZShbYnVmXSwgZmlsZW5hbWUsIHt0eXBlOm1pbWVUeXBlfSk7fSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbGl2ZVBob3RvSGFuZGxlKCkge1xuICAgIGlmKGxpdmVQaG90byE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwaG90b0Jhc2UgPSBsaXZlUGhvdG8uYmVzdEZyYW1lXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaG90by5iZXN0RnJhbWUpXG4gICAgICB1cmx0b0ZpbGUocGhvdG9CYXNlLCAnYS5wbmcnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oZmlsZSl7XG4gICAgICAgIHNldEZpbGUoZmlsZSl9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpdmVEb2NIYW5kbGUoKSB7XG4gICAgaWYobGl2ZURvYyAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2cobGl2ZURvYylcbiAgICAgIHVybHRvRmlsZShsaXZlRG9jLCAnZG9jLnBuZycsICdpbWFnZS9qcGVnJylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgIHNldEZpbGVEb2MoZmlsZSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tTaW1pbGFyKCkge1xuICAgIGlmKGZpbGVEb2MhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coZmlsZURvYylcbiAgICAgIHZhciBib2R5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9zZXJ2aWNlcy52ZXJpZ3JhbS5haTo4NDQzL3ZlcmlmYWNlJ1xuICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5CSU9fS0VZLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnZG9jJywgZmlsZURvYylcbiAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSlcbiAgICAgIHJldHVybiAgYXhpb3MucG9zdChBUElfVVJMLGJvZHlGb3JtRGF0YSwgY29uZmlnKVxuICAgICAgLnRoZW4ocmVzPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHN3YWwoXCLQn9GA0L7RhtC10L3RgiDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YLQuFwiLCBgJHtyZXMuZGF0YS5TaW1pbGFyaXR5fWAsIFwiaW5mb1wiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnI9PiB7XG4gICAgICAgIGlmKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSlcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuY29uZmlnLmRhdGEuZ2V0KCdwaG90bycpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGl2ZURvY0hhbmRsZSgpXG4gIH0sIFtsaXZlRG9jXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNoZWNrU2ltaWxhcigpXG4gIH0sIFtmaWxlRG9jXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpdmVQaG90b0hhbmRsZSgpXG4gICAgY29uc29sZS5sb2coJ2xpdmUgcGhvdG8gY2hhbmdlZCcpXG4gICAgY29uc29sZS5sb2cobGl2ZVBob3RvKVxuICB9LFtsaXZlUGhvdG9dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlsZSlcbiAgICBjb25zb2xlLmxvZygnY2hlY2tpbmcnKVxuICAgIGlmKGZpbGUgIT09IG51bGwpIHtcbiAgICAgIHNldFN0ZXAoMilcbiAgICB9XG4gICAgLy8gdmFyIGJvZHlGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIC8vIGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9zZXJ2aWNlcy52ZXJpZ3JhbS5haTo4NDQzL3ZlcmlmYWNlJ1xuICAgIC8vIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5CSU9fS0VZLFxuICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ2RvYycsIGZpbGUpXG4gICAgLy8gYm9keUZvcm1EYXRhLmFwcGVuZCgncGhvdG8nLCBmaWxlKVxuICAgIC8vIHJldHVybiAgYXhpb3MucG9zdChBUElfVVJMLGJvZHlGb3JtRGF0YSwgY29uZmlnKVxuICAgIC8vIC50aGVuKHJlcz0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaChlcnI9PiB7XG4gICAgLy8gICBpZihlcnIucmVzcG9uc2UpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuY29uZmlnLmRhdGEuZ2V0KCdwaG90bycpKVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH0sIFtmaWxlXSlcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICB7c3RlcCA9PT0gMSAmJiA8VmVyaUxpdmUgc2V0TGl2ZVBob3RvPXtzZXRMaXZlUGhvdG99IC8+fVxuICAgICAge3N0ZXAgPT09IDIgJiYgPFZlcmlEb2Mgc2V0TGl2ZURvYz17c2V0TGl2ZURvY30vPn1cbiAgICAgIHsvKiA8VmVyaURvYyBzZXRMaXZlRG9jPXtzZXRMaXZlRG9jfS8+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGVzdENoZWNrOyJdLCJzb3VyY2VSb290IjoiIn0=