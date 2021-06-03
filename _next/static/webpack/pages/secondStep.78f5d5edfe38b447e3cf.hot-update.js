self["webpackHotUpdate_N_E"]("pages/secondStep",{

/***/ "./pages/secondStep.js":
/*!*****************************!*\
  !*** ./pages/secondStep.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_next_server_lib_router_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/* harmony import */ var next_dist_next_server_lib_router_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_router_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Verigram/VeriDoc */ "./components/Verigram/VeriDoc.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\verigram\\pages\\secondStep.js",
    _this = undefined,
    _s = $RefreshSig$();






var SecondStep = function SecondStep() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(2),
      step = _useState[0],
      setStep = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      livePhoto = _useState2[0],
      setLivePhoto = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      liveDoc = _useState3[0],
      setLiveDoc = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
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
      return axios__WEBPACK_IMPORTED_MODULE_1___default().post(API_URL, bodyFormData, config).then(function (res) {
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

  function livePhotoHandle() {
    if (livePhoto !== null) {
      var photoBase = livePhoto; // console.log(photo.bestFrame)

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

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    liveDocHandle();
  }, [liveDoc]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    checkSimilar();
  }, [fileDoc]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    livePhotoHandle();
  }, [livePhoto]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (localStorage.getItem('livephoto') === null) {
      next_dist_next_server_lib_router_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');
    } else {
      setLivePhoto(localStorage.getItem('livephoto'));
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__.default, {
      setLiveDoc: setLiveDoc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 10
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "ays4yAx1Ia0Kv4nslsfCQGgXypM=");

_c = SecondStep;
/* harmony default export */ __webpack_exports__["default"] = (SecondStep);

var _c;

$RefreshReg$(_c, "SecondStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2Vjb25kU3RlcC5qcyJdLCJuYW1lcyI6WyJTZWNvbmRTdGVwIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwibGl2ZVBob3RvSGFuZGxlIiwicGhvdG9CYXNlIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBR1ZDLCtDQUFRLENBQUMsQ0FBRCxDQUhFO0FBQUEsTUFFaEJDLElBRmdCO0FBQUEsTUFHckJDLE9BSHFCOztBQUFBLG1CQUtMRiwrQ0FBUSxDQUFDLElBQUQsQ0FMSDtBQUFBLE1BSWhCRyxTQUpnQjtBQUFBLE1BS3JCQyxZQUxxQjs7QUFBQSxtQkFPUEosK0NBQVEsQ0FBQyxJQUFELENBUEQ7QUFBQSxNQU1oQkssT0FOZ0I7QUFBQSxNQU9yQkMsVUFQcUI7O0FB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WSxJQURILENBQ1EsVUFBVVYsSUFBVixFQUFnQjtBQUNwQkcsa0JBQVUsQ0FBQ0gsSUFBRCxDQUFWO0FBQ0QsT0FISDtBQUlEO0FBQ0Y7O0FBQ0RzQyxrREFBUyxDQUFDLFlBQU07QUFDZHRCLGlCQUFhO0FBQ2QsR0FGUSxFQUVOLENBQUNsQixPQUFELENBRk0sQ0FBVDtBQUlBd0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2RyQixnQkFBWTtBQUNiLEdBRlEsRUFFTixDQUFDZixPQUFELENBRk0sQ0FBVDtBQUlBb0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2RGLG1CQUFlO0FBQ2hCLEdBRlEsRUFFTixDQUFDeEMsU0FBRCxDQUZNLENBQVQ7QUFJQTBDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixNQUFzQyxJQUExQyxFQUFnRDtBQUM5Q0MseUZBQUEsQ0FBWSxHQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0w1QyxrQkFBWSxDQUFDMEMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLENBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLHNCQUNFO0FBQUEsMkJBQUssOERBQUMsaUVBQUQ7QUFBUyxnQkFBVSxFQUFFekM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBdEdEOztHQUFNUCxVOztLQUFBQSxVO0FBd0dOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlY29uZFN0ZXAuNzhmNWQ1ZWRmZTM4YjQ0N2UzY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBWZXJpRG9jIGZyb20gXCIuLi9jb21wb25lbnRzL1ZlcmlncmFtL1ZlcmlEb2NcIlxyXG5cclxuY29uc3QgU2Vjb25kU3RlcCA9ICgpID0+IHtcclxuIFxyXG4gIGNvbnN0IFtzdGVwLFxyXG4gICAgc2V0U3RlcF0gPSB1c2VTdGF0ZSgyKVxyXG4gIGNvbnN0IFtsaXZlUGhvdG8sXHJcbiAgICBzZXRMaXZlUGhvdG9dID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbGl2ZURvYyxcclxuICAgIHNldExpdmVEb2NdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZmlsZSxcclxuICAgIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZmlsZURvYyxcclxuICAgIHNldEZpbGVEb2NdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgZnVuY3Rpb24gdXJsdG9GaWxlKHVybCwgZmlsZW5hbWUsIG1pbWVUeXBlKSB7XHJcbiAgICBtaW1lVHlwZSA9IG1pbWVUeXBlIHx8ICh1cmwubWF0Y2goL15kYXRhOihbXjtdKyk7LykgfHwgJycpWzFdO1xyXG4gICAgcmV0dXJuIChmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICByZXR1cm4gcmVzLmFycmF5QnVmZmVyKCk7XHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChidWYpIHtcclxuICAgICAgcmV0dXJuIG5ldyBGaWxlKFtidWZdLCBmaWxlbmFtZSwge3R5cGU6IG1pbWVUeXBlfSk7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxpdmVEb2NIYW5kbGUoKSB7XHJcbiAgICBpZiAobGl2ZURvYyAhPT0gbnVsbCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhsaXZlRG9jKVxyXG4gICAgICB1cmx0b0ZpbGUobGl2ZURvYywgJ2RvYy5wbmcnLCAnaW1hZ2UvanBlZycpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICAgIHNldEZpbGVEb2MoZmlsZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrU2ltaWxhcigpIHtcclxuICAgIGlmIChmaWxlRG9jICE9PSBudWxsKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVEb2MpXHJcbiAgICAgIHZhciBib2R5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3NlcnZpY2VzLnZlcmlncmFtLmFpOjg0NDMvdmVyaWZhY2UnXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkJJT19LRVksXHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ2RvYycsIGZpbGVEb2MpXHJcbiAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSlcclxuICAgICAgcmV0dXJuIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoQVBJX1VSTCwgYm9keUZvcm1EYXRhLCBjb25maWcpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHN3YWwoXCLQn9GA0L7RhtC10L3RgiDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YLQuFwiLCBgJHtyZXMuZGF0YS5TaW1pbGFyaXR5fWAsIFwiaW5mb1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsaXZlUGhvdG9IYW5kbGUoKSB7XHJcbiAgICBpZiAobGl2ZVBob3RvICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHBob3RvQmFzZSA9IGxpdmVQaG90b1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaG90by5iZXN0RnJhbWUpXHJcbiAgICAgIHVybHRvRmlsZShwaG90b0Jhc2UsICdhLnBuZycpLnRoZW4oZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgICAgICBzZXRGaWxlKGZpbGUpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsaXZlRG9jSGFuZGxlKCkge1xyXG4gICAgaWYgKGxpdmVEb2MgIT09IG51bGwpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2cobGl2ZURvYylcclxuICAgICAgdXJsdG9GaWxlKGxpdmVEb2MsICdkb2MucG5nJywgJ2ltYWdlL2pwZWcnKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChmaWxlKSB7XHJcbiAgICAgICAgICBzZXRGaWxlRG9jKGZpbGUpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxpdmVEb2NIYW5kbGUoKVxyXG4gIH0sIFtsaXZlRG9jXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNoZWNrU2ltaWxhcigpXHJcbiAgfSwgW2ZpbGVEb2NdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGl2ZVBob3RvSGFuZGxlKClcclxuICB9LCBbbGl2ZVBob3RvXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGl2ZXBob3RvJykgPT09IG51bGwpIHtcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TGl2ZVBob3RvKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcGhvdG8nKSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj48VmVyaURvYyBzZXRMaXZlRG9jPXtzZXRMaXZlRG9jfT48L1ZlcmlEb2M+PC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==