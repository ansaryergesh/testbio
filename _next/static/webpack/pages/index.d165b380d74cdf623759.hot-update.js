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
      lineNumber: 122,
      columnNumber: 22
    }, _this), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__.default, {
      setLiveDoc: setLiveDoc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdENoZWNrIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlUGhvdG9IYW5kbGUiLCJwaG90b0Jhc2UiLCJiZXN0RnJhbWUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0Iiwic2hvd1Jlc3VsdHMiLCJmYWNlX3BpY3R1cmUiLCJjaGVja1JlY29nbml0aW9uV2FybmluZ3MiLCJyZWNvZ25pdGlvbldhcm5pbmdzIiwidmVyaWRvYyIsImdldFJlY29nbml0aW9uV2FybmluZ3MiLCJpbmNsdWRlcyIsIlJlY29nbml0aW9uV2FybmluZyIsIkRPQ1VNRU5UX0VYUElSRUQiLCJJTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImdvdFBob3RvQ2FsbGJhY2siLCJlbmRwb2ludEFkZHJlc3MiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEs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RUFBbUY7QUFDL0VuQixlQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNIO0FBQ0o7O0FBRUQsYUFBU21CLGVBQVQsQ0FBeUJqQixJQUF6QixFQUErQjtBQUMzQk8saUJBQVcsQ0FBQ1AsSUFBRCxDQUFYO0FBQ0FTLDhCQUF3QjtBQUMzQjs7QUFFRCxhQUFTUyxhQUFULENBQXVCbEIsSUFBdkIsRUFBNkI7QUFDekJPLGlCQUFXLENBQUNQLElBQUQsQ0FBWDtBQUNIOztBQUVELGFBQVNtQixnQkFBVCxHQUE0QixDQUFFOztBQUM1QixRQUFJMUIsTUFBTSxHQUFHLGVBQWI7QUFDQSxRQUFJMkIsZUFBZSxHQUFHLDhDQUF0Qjs7QUFDQSxRQUFHM0QsSUFBSSxLQUFLLENBQVosRUFBZTtBQUNia0QsYUFBTyxDQUFDVSxJQUFSLENBQWFELGVBQWIsRUFBOEIzQixNQUE5QixFQUFzQ3dCLGVBQXRDLEVBQXVEQyxhQUF2RCxFQUFzRUMsZ0JBQXRFO0FBQ0Q7QUFDRixHQWxDUSxFQWtDTixDQUFDMUQsSUFBRCxDQWxDTSxDQUFUO0FBbUNBLHNCQUNFO0FBQUEsZUFDR0EsSUFBSSxLQUFLLENBQVQsaUJBQWMsOERBQUMsa0VBQUQ7QUFBVSxrQkFBWSxFQUFFRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGpCLEVBRUdILElBQUksS0FBSyxDQUFULGlCQUFjLDhEQUFDLGlFQUFEO0FBQVMsZ0JBQVUsRUFBRUs7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBNUhEOztHQUFNUCxTOztLQUFBQSxTO0FBK0hOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQxNjViMzgwZDc0Y2RmNjIzNzU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBWZXJpTGl2ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpTGl2ZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVmVyaURvYyBmcm9tIFwiLi4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpRG9jXCJcbmNvbnN0IFRlc3RDaGVjayA9ICgpID0+IHtcbiAgY29uc3QgW3N0ZXAsc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbbGl2ZVBob3RvLHNldExpdmVQaG90b10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbGl2ZURvYyxzZXRMaXZlRG9jXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWxlLHNldEZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2ZpbGVEb2Msc2V0RmlsZURvY10gPSB1c2VTdGF0ZShudWxsKVxuICBcblxuICBmdW5jdGlvbiB1cmx0b0ZpbGUodXJsLCBmaWxlbmFtZSwgbWltZVR5cGUpe1xuICAgIG1pbWVUeXBlID0gbWltZVR5cGUgfHwgKHVybC5tYXRjaCgvXmRhdGE6KFteO10rKTsvKXx8JycpWzFdO1xuICAgIHJldHVybiAoZmV0Y2godXJsKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXMpe3JldHVybiByZXMuYXJyYXlCdWZmZXIoKTt9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihidWYpe3JldHVybiBuZXcgRmlsZShbYnVmXSwgZmlsZW5hbWUsIHt0eXBlOm1pbWVUeXBlfSk7fSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gbGl2ZVBob3RvSGFuZGxlKCkge1xuICAgIGlmKGxpdmVQaG90byE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwaG90b0Jhc2UgPSBsaXZlUGhvdG8uYmVzdEZyYW1lXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaG90by5iZXN0RnJhbWUpXG4gICAgICB1cmx0b0ZpbGUocGhvdG9CYXNlLCAnYS5wbmcnKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oZmlsZSl7XG4gICAgICAgIHNldEZpbGUoZmlsZSl9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpdmVEb2NIYW5kbGUoKSB7XG4gICAgaWYobGl2ZURvYyAhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2cobGl2ZURvYylcbiAgICAgIHVybHRvRmlsZShsaXZlRG9jLCAnZG9jLnBuZycsICdpbWFnZS9qcGVnJylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgIHNldEZpbGVEb2MoZmlsZSlcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2tTaW1pbGFyKCkge1xuICAgIGlmKGZpbGVEb2MhPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coZmlsZURvYylcbiAgICAgIHZhciBib2R5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9zZXJ2aWNlcy52ZXJpZ3JhbS5haTo4NDQzL3ZlcmlmYWNlJ1xuICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5CSU9fS0VZLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYm9keUZvcm1EYXRhLmFwcGVuZCgnZG9jJywgZmlsZURvYylcbiAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ3Bob3RvJywgZmlsZSlcbiAgICAgIHJldHVybiAgYXhpb3MucG9zdChBUElfVVJMLGJvZHlGb3JtRGF0YSwgY29uZmlnKVxuICAgICAgLnRoZW4ocmVzPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHN3YWwoXCLQn9GA0L7RhtC10L3RgiDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YLQuFwiLCBgJHtyZXMuZGF0YS5TaW1pbGFyaXR5fWAsIFwiaW5mb1wiKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnI9PiB7XG4gICAgICAgIGlmKGVyci5yZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpdmVEb2NIYW5kbGUoKVxuICB9LCBbbGl2ZURvY10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1NpbWlsYXIoKVxuICB9LCBbZmlsZURvY10pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpdmVQaG90b0hhbmRsZSgpXG4gIH0sW2xpdmVQaG90b10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihmaWxlICE9PSBudWxsKSB7XG4gICAgICBzZXRTdGVwKDIpXG4gICAgfVxuICB9LCBbZmlsZV0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gc2hvd1Jlc3VsdHMoZGF0YSkge1xuICAgICAgaWYoZGF0YS5mYWNlX3BpY3R1cmUpIHtcbiAgICAgICAgc2V0TGl2ZURvYyhcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgKyBkYXRhLmZhY2VfcGljdHVyZSlcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgc2V0TGl2ZURvYyhgJHtkYXRhfWApXG4gICAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNoZWNrUmVjb2duaXRpb25XYXJuaW5ncygpIHtcbiAgICAgIHZhciByZWNvZ25pdGlvbldhcm5pbmdzID0gdmVyaWRvYy5nZXRSZWNvZ25pdGlvbldhcm5pbmdzKCk7XG4gICAgICBpZiAocmVjb2duaXRpb25XYXJuaW5ncy5pbmNsdWRlcyhSZWNvZ25pdGlvbldhcm5pbmcuRE9DVU1FTlRfRVhQSVJFRCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBkb2N1bWVudCBleHBpcmVkIScpO1xuICAgICAgfVxuICAgICAgaWYgKHJlY29nbml0aW9uV2FybmluZ3MuaW5jbHVkZXMoUmVjb2duaXRpb25XYXJuaW5nLklOQ09OU0lTVEVOVF9UUkFOU0xJVEVSQVRJT04pKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1RyYW5zbGl0ZXJhdGlvbiBjaGVjayBmYWlsIHdhcm5pbmchJyk7XG4gICAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhkYXRhKSB7XG4gICAgICBzaG93UmVzdWx0cyhkYXRhKTtcbiAgICAgIGNoZWNrUmVjb2duaXRpb25XYXJuaW5ncygpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKGRhdGEpIHtcbiAgICAgIHNob3dSZXN1bHRzKGRhdGEpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBnb3RQaG90b0NhbGxiYWNrKCkge31cbiAgICB2YXIgYXBpS2V5ID0gJ0RVTU1ZX0FQSV9LRVknO1xuICAgIHZhciBlbmRwb2ludEFkZHJlc3MgPSAnaHR0cHM6Ly9kZXYudmVyaWxpdmUudmVyaWdyYW0uYWkvcnUvdmVyaWRvYy8nO1xuICAgIGlmKHN0ZXAgPT09IDIpIHtcbiAgICAgIHZlcmlkb2MuaW5pdChlbmRwb2ludEFkZHJlc3MsIGFwaUtleSwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrLCBnb3RQaG90b0NhbGxiYWNrKVxuICAgIH1cbiAgfSwgW3N0ZXBdKVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIHtzdGVwID09PSAxICYmIDxWZXJpTGl2ZSBzZXRMaXZlUGhvdG89e3NldExpdmVQaG90b30gLz59XG4gICAgICB7c3RlcCA9PT0gMiAmJiA8VmVyaURvYyBzZXRMaXZlRG9jPXtzZXRMaXZlRG9jfS8+fVxuICAgICAgey8qIDxWZXJpRG9jIHNldExpdmVEb2M9e3NldExpdmVEb2N9Lz4gKi99XG5cbiAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkobGl2ZURvYyl9ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGVzdENoZWNrOyJdLCJzb3VyY2VSb290IjoiIn0=