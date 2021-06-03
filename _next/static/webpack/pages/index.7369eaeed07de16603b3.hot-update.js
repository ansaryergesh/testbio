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
      lineNumber: 142,
      columnNumber: 22
    }, _this), step === 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Verigram_VeriDoc__WEBPACK_IMPORTED_MODULE_4__.default, {
      setLiveDoc: setLiveDoc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzdENoZWNrIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsImxpdmVQaG90byIsInNldExpdmVQaG90byIsImxpdmVEb2MiLCJzZXRMaXZlRG9jIiwiZmlsZSIsInNldEZpbGUiLCJmaWxlRG9jIiwic2V0RmlsZURvYyIsInVybHRvRmlsZSIsInVybCIsImZpbGVuYW1lIiwibWltZVR5cGUiLCJtYXRjaCIsImZldGNoIiwidGhlbiIsInJlcyIsImFycmF5QnVmZmVyIiwiYnVmIiwiRmlsZSIsInR5cGUiLCJsaXZlUGhvdG9IYW5kbGUiLCJwaG90b0Jhc2UiLCJiZXN0RnJhbWUiLCJsaXZlRG9jSGFuZGxlIiwiY2hlY2tTaW1pbGFyIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJBUElfVVJMIiwiY29uZmlnIiwiaGVhZGVycyIsImFwaUtleSIsInByb2Nlc3MiLCJhcHBlbmQiLCJheGlvcyIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwiZGF0YSIsIlNpbWlsYXJpdHkiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVyciIsInJlc3BvbnNlIiwidXNlRWZmZWN0IiwiZW5kcG9pbnRBZGRyZXNzIiwiZG9jdW1lbnRUeXBlIiwicGFyc2VJbnQiLCJyZWNvZ25pdGlvbk1vZGUiLCJpc0dsYXJlQ2hlY2tOZWVkZWQiLCJpc1RyYW5zbGl0Q2hlY2tOZWVkZWQiLCJpc01pcnJvck1vZGUiLCJpc0F1dG9Eb2NUeXBlTW9kZSIsInZlcmlkb2MiLCJpbml0Iiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImdvdFBob3RvQ2FsbGJhY2siLCJzZXREb2NUeXBlIiwic2V0UmVjb2duaXRpb25Nb2RlIiwic2V0SXNHbGFyZUNoZWNrTmVlZGVkIiwic2V0SXNUcmFuc2xpdENoZWNrTmVlZGVkIiwic2V0TWlycm9yUHJldmlld0ZvcldlYkNhbWVyYXMiLCJzZXRJc0F1dG9Eb2NUeXBlTW9kZSIsIm9uU3RhcnRCdXR0b25DbGljayIsInNlc3Npb25fdG9rZW4iLCJzdGFydCIsInNob3dSZXN1bHRzIiwiZmFjZV9waWN0dXJlIiwiY2hlY2tSZWNvZ25pdGlvbldhcm5pbmdzIiwicmVjb2duaXRpb25XYXJuaW5ncyIsImdldFJlY29nbml0aW9uV2FybmluZ3MiLCJpbmNsdWRlcyIsIlJlY29nbml0aW9uV2FybmluZyIsIkRPQ1VNRU5UX0VYUElSRUQiLCJJTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNDQywrQ0FBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNWQyxPQURVOztBQUFBLG1CQUVXRiwrQ0FBUSxDQUFDLElBQUQsQ0FGbkI7QUFBQSxNQUVmRyxTQUZlO0FBQUEsTUFFTEMsWUFGSzs7QUFBQSxtQkFHT0osK0NBQVEsQ0FBQyxJQUFELENBSGY7QUFBQSxNQUdmSyxPQUhlO0FBQUEsTUFHUEMsVUFITzs7QUFBQSxtQkFJQ04sK0NBQVEsQ0FBQyxJQUFELENBSlQ7QUFBQSxNQUlmTyxJQUplO0FBQUEsTUFJVkMsT0FKVTs7QUFBQSxtQkFLT1IsK0NBQVEsQ0FBQyxJQUFELENBTGY7QUFBQSxNQUtmUyxPQUxlO0FBQUEsTUFLUEMsVUFMTzs7QUFRdEIsV0FBU0MsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLFFBQXhCLEVBQWtDQyxRQUFsQyxFQUEyQztBQUN6Q0EsWUFBUSxHQUFHQSxRQUFRLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxLQUFKLENBQVUsZ0JBQVYsS0FBNkIsRUFBOUIsRUFBa0MsQ0FBbEMsQ0FBdkI7QUFDQSxXQUFRQyxLQUFLLENBQUNKLEdBQUQsQ0FBTCxDQUNISyxJQURHLENBQ0UsVUFBU0MsR0FBVCxFQUFhO0FBQUMsYUFBT0EsR0FBRyxDQUFDQyxXQUFKLEVBQVA7QUFBMEIsS0FEMUMsRUFFSEYsSUFGRyxDQUVFLFVBQVNHLEdBQVQsRUFBYTtBQUFDLGFBQU8sSUFBSUMsSUFBSixDQUFTLENBQUNELEdBQUQsQ0FBVCxFQUFnQlAsUUFBaEIsRUFBMEI7QUFBQ1MsWUFBSSxFQUFDUjtBQUFOLE9BQTFCLENBQVA7QUFBbUQsS0FGbkUsQ0FBUjtBQUlEOztBQUVELFdBQVNTLGVBQVQsR0FBMkI7QUFDekIsUUFBR3BCLFNBQVMsS0FBSSxJQUFoQixFQUFzQjtBQUNwQixVQUFNcUIsU0FBUyxHQUFHckIsU0FBUyxDQUFDc0IsU0FBNUIsQ0FEb0IsQ0FFcEI7O0FBQ0FkLGVBQVMsQ0FBQ2EsU0FBRCxFQUFZLE9BQVosQ0FBVCxDQUNDUCxJQURELENBQ00sVUFBU1YsSUFBVCxFQUFjO0FBQ2xCQyxlQUFPLENBQUNELElBQUQsQ0FBUDtBQUFjLE9BRmhCO0FBR0Q7QUFDRjs7QUFFRCxXQUFTbUIsYUFBVCxHQUF5QjtBQUN2QixRQUFHckIsT0FBTyxLQUFLLElBQWYsRUFBcUI7QUFDbkI7QUFDQU0sZUFBUyxDQUFDTixPQUFELEVBQVUsU0FBVixFQUFxQixZQUFyQixDQUFULENBQ0dZLElBREgsQ0FDUSxVQUFTVixJQUFULEVBQWU7QUFDbkJHLGtCQUFVLENBQUNILElBQUQsQ0FBVjtBQUNELE9BSEg7QUFJRDtBQUNGOztBQUNELFdBQVNvQixZQUFULEdBQXdCO0FBQ3RCLFFBQUdsQixPQUFPLEtBQUksSUFBZCxFQUFvQjtBQUNsQjtBQUNBLFVBQUltQixZQUFZLEdBQUcsSUFBSUMsUUFBSixFQUFuQjtBQUNBLFVBQU1DLE9BQU8sR0FBRyw0Q0FBaEI7QUFDQSxVQUFNQyxNQUFNLEdBQUc7QUFDYkMsZUFBTyxFQUFFO0FBQ1BDLGdCQUFNLEVBQUVDLGtDQUREO0FBRVAsMEJBQWdCO0FBRlQ7QUFESSxPQUFmO0FBTUFOLGtCQUFZLENBQUNPLE1BQWIsQ0FBb0IsS0FBcEIsRUFBMkIxQixPQUEzQjtBQUNBbUIsa0JBQVksQ0FBQ08sTUFBYixDQUFvQixPQUFwQixFQUE2QjVCLElBQTdCO0FBQ0EsYUFBUTZCLGlEQUFBLENBQVdOLE9BQVgsRUFBbUJGLFlBQW5CLEVBQWlDRyxNQUFqQyxFQUNQZCxJQURPLENBQ0YsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZtQixlQUFPLENBQUNDLEdBQVIsQ0FBWXBCLEdBQVo7QUFDQXFCLFlBQUksQ0FBQyx1QkFBRCxZQUE2QnJCLEdBQUcsQ0FBQ3NCLElBQUosQ0FBU0MsVUFBdEMsR0FBb0QsTUFBcEQsQ0FBSixDQUFnRXhCLElBQWhFLENBQXFFLFlBQU07QUFDekV5QixrQkFBUSxDQUFDQyxNQUFUO0FBQ0QsU0FGRDtBQUdELE9BTk8sV0FPRCxVQUFBQyxHQUFHLEVBQUc7QUFDWCxZQUFHQSxHQUFHLENBQUNDLFFBQVAsRUFBaUI7QUFDZlIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxHQUFHLENBQUNDLFFBQWhCO0FBQ0Q7QUFDRixPQVhPLENBQVI7QUFZRDtBQUNGOztBQUNEQyxrREFBUyxDQUFDLFlBQU07QUFDVixRQUFJQyxlQUFlLEdBQUcsdURBQXRCO0FBQ0osUUFBSUMsWUFBWSxHQUFHQyxRQUFRLENBQUMsR0FBRCxDQUEzQjtBQUNBLFFBQUlDLGVBQWUsR0FBR0QsUUFBUSxDQUFDLEdBQUQsQ0FBOUI7QUFDQSxRQUFJRSxrQkFBa0IsR0FBRyxLQUF6QjtBQUNBLFFBQUlDLHFCQUFxQixHQUFHLEtBQTVCO0FBQ0EsUUFBSUMsWUFBWSxHQUFHLEtBQW5CO0FBQ0EsUUFBSUMsaUJBQWlCLEdBQUUsS0FBdkI7QUFDQSxRQUFJckIsTUFBTSxHQUFHQyxrQ0FBYjtBQUVBcUIsV0FBTyxDQUFDQyxJQUFSLENBQWFULGVBQWIsRUFBOEJkLE1BQTlCLEVBQXNDd0IsZUFBdEMsRUFBdURDLGFBQXZELEVBQXNFQyxnQkFBdEUsRUFDSzFDLElBREwsQ0FDVSxZQUFNO0FBQ1ZzQyxhQUFPLENBQUNLLFVBQVIsQ0FBbUJaLFlBQW5CO0FBQ0FPLGFBQU8sQ0FBQ00sa0JBQVIsQ0FBMkJYLGVBQTNCO0FBQ0FLLGFBQU8sQ0FBQ08scUJBQVIsQ0FBOEJYLGtCQUE5QjtBQUNBSSxhQUFPLENBQUNRLHdCQUFSLENBQWlDWCxxQkFBakM7QUFDQUcsYUFBTyxDQUFDUyw2QkFBUixDQUFzQ1gsWUFBdEM7QUFDQUUsYUFBTyxDQUFDVSxvQkFBUixDQUE2QlgsaUJBQTdCO0FBR0QsS0FWTDtBQVdELEdBckJRLEVBcUJOLEVBckJNLENBQVQ7O0FBdUJBLFdBQVNZLGtCQUFULEdBQThCO0FBQzVCLFFBQUlDLGFBQWEsR0FBR1osT0FBTyxDQUFDYSxLQUFSLEVBQXBCO0FBQ0EvQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0I2QixhQUFsQztBQUNEOztBQUVILFdBQVNFLFdBQVQsQ0FBcUI3QixJQUFyQixFQUEyQjtBQUN2QixRQUFHQSxJQUFJLENBQUM4QixZQUFSLEVBQXNCO0FBQ3BCaEUsZ0JBQVUsQ0FBQyw0QkFBNEJrQyxJQUFJLENBQUM4QixZQUFsQyxDQUFWO0FBQ0QsS0FGRCxNQUVNO0FBQ0poRSxnQkFBVSxXQUFJa0MsSUFBSixFQUFWO0FBQ0Q7QUFDSjs7QUFFRCxXQUFTK0Isd0JBQVQsR0FBb0M7QUFDaEMsUUFBSUMsbUJBQW1CLEdBQUdqQixPQUFPLENBQUNrQixzQkFBUixFQUExQjs7QUFDQSxRQUFJRCxtQkFBbUIsQ0FBQ0UsUUFBcEIsQ0FBNkJDLGtCQUFrQixDQUFDQyxnQkFBaEQsQ0FBSixFQUF1RTtBQUNuRXZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0g7O0FBQ0QsUUFBSWtDLG1CQUFtQixDQUFDRSxRQUFwQixDQUE2QkMsa0JBQWtCLENBQUNFLDRCQUFoRCxDQUFKLEVBQW1GO0FBQy9FeEMsYUFBTyxDQUFDQyxHQUFSLENBQVkscUNBQVo7QUFDSDtBQUNKOztBQUVELFdBQVNtQixlQUFULENBQXlCakIsSUFBekIsRUFBK0I7QUFDM0I2QixlQUFXLENBQUM3QixJQUFELENBQVg7QUFDQStCLDRCQUF3QjtBQUMzQjs7QUFFRCxXQUFTYixhQUFULENBQXVCbEIsSUFBdkIsRUFBNkI7QUFDekI2QixlQUFXLENBQUM3QixJQUFELENBQVg7QUFDSDs7QUFFRCxXQUFTbUIsZ0JBQVQsR0FBNEIsQ0FBRTs7QUFDNUJiLGtEQUFTLENBQUMsWUFBTTtBQUNkcEIsaUJBQWE7QUFDZCxHQUZRLEVBRU4sQ0FBQ3JCLE9BQUQsQ0FGTSxDQUFUO0FBSUF5QyxrREFBUyxDQUFDLFlBQU07QUFDZG5CLGdCQUFZO0FBQ2IsR0FGUSxFQUVOLENBQUNsQixPQUFELENBRk0sQ0FBVDtBQUlBcUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2R2QixtQkFBZTtBQUNoQixHQUZRLEVBRVAsQ0FBQ3BCLFNBQUQsQ0FGTyxDQUFUO0FBSUEyQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHdkMsSUFBSSxLQUFLLElBQVosRUFBa0I7QUFDaEJMLGFBQU8sQ0FBQyxDQUFELENBQVA7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDSyxJQUFELENBSk0sQ0FBVDtBQUtBLHNCQUNFO0FBQUEsZUFDR04sSUFBSSxLQUFLLENBQVQsaUJBQWMsOERBQUMsa0VBQUQ7QUFBVSxrQkFBWSxFQUFFRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRGpCLEVBRUdILElBQUksS0FBSyxDQUFULGlCQUFjLDhEQUFDLGlFQUFEO0FBQVMsZ0JBQVUsRUFBRUs7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBaEpEOztHQUFNUCxTOztLQUFBQSxTO0FBbUpOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjczNjllYWVlZDA3ZGUxNjYwM2IzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBWZXJpTGl2ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpTGl2ZVwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVmVyaURvYyBmcm9tIFwiLi4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpRG9jXCJcbmNvbnN0IFRlc3RDaGVjayA9ICgpID0+IHtcbiAgY29uc3QgW3N0ZXAsc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbbGl2ZVBob3RvLHNldExpdmVQaG90b10gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbGl2ZURvYyxzZXRMaXZlRG9jXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtmaWxlLHNldEZpbGVdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2ZpbGVEb2Msc2V0RmlsZURvY10gPSB1c2VTdGF0ZShudWxsKVxuXG5cbiAgZnVuY3Rpb24gdXJsdG9GaWxlKHVybCwgZmlsZW5hbWUsIG1pbWVUeXBlKXtcbiAgICBtaW1lVHlwZSA9IG1pbWVUeXBlIHx8ICh1cmwubWF0Y2goL15kYXRhOihbXjtdKyk7Lyl8fCcnKVsxXTtcbiAgICByZXR1cm4gKGZldGNoKHVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKXtyZXR1cm4gcmVzLmFycmF5QnVmZmVyKCk7fSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oYnVmKXtyZXR1cm4gbmV3IEZpbGUoW2J1Zl0sIGZpbGVuYW1lLCB7dHlwZTptaW1lVHlwZX0pO30pXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpdmVQaG90b0hhbmRsZSgpIHtcbiAgICBpZihsaXZlUGhvdG8hPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGhvdG9CYXNlID0gbGl2ZVBob3RvLmJlc3RGcmFtZVxuICAgICAgLy8gY29uc29sZS5sb2cocGhvdG8uYmVzdEZyYW1lKVxuICAgICAgdXJsdG9GaWxlKHBob3RvQmFzZSwgJ2EucG5nJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGZpbGUpe1xuICAgICAgICBzZXRGaWxlKGZpbGUpfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXZlRG9jSGFuZGxlKCkge1xuICAgIGlmKGxpdmVEb2MgIT09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGxpdmVEb2MpXG4gICAgICB1cmx0b0ZpbGUobGl2ZURvYywgJ2RvYy5wbmcnLCAnaW1hZ2UvanBlZycpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICBzZXRGaWxlRG9jKGZpbGUpXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNoZWNrU2ltaWxhcigpIHtcbiAgICBpZihmaWxlRG9jIT09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVEb2MpXG4gICAgICB2YXIgYm9keUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vc2VydmljZXMudmVyaWdyYW0uYWk6ODQ0My92ZXJpZmFjZSdcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuQklPX0tFWSxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ2RvYycsIGZpbGVEb2MpXG4gICAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdwaG90bycsIGZpbGUpXG4gICAgICByZXR1cm4gIGF4aW9zLnBvc3QoQVBJX1VSTCxib2R5Rm9ybURhdGEsIGNvbmZpZylcbiAgICAgIC50aGVuKHJlcz0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBzd2FsKFwi0J/RgNC+0YbQtdC90YIg0YHQvtCy0LzQtdGB0YLQuNC80L7RgdGC0LhcIiwgYCR7cmVzLmRhdGEuU2ltaWxhcml0eX1gLCBcImluZm9cIikudGhlbigoKSA9PiB7XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyPT4ge1xuICAgICAgICBpZihlcnIucmVzcG9uc2UpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBlbmRwb2ludEFkZHJlc3MgPSAnaHR0cHM6Ly9zZXJ2aWNlcy52ZXJpZ3JhbS5haTo4NDQzL3Zlcmlkb2MvcnUvdmVyaWRvYy8nO1xuICAgIHZhciBkb2N1bWVudFR5cGUgPSBwYXJzZUludCgnMScpO1xuICAgIHZhciByZWNvZ25pdGlvbk1vZGUgPSBwYXJzZUludCgnMCcpO1xuICAgIHZhciBpc0dsYXJlQ2hlY2tOZWVkZWQgPSBmYWxzZTtcbiAgICB2YXIgaXNUcmFuc2xpdENoZWNrTmVlZGVkID0gZmFsc2U7XG4gICAgdmFyIGlzTWlycm9yTW9kZSA9IGZhbHNlO1xuICAgIHZhciBpc0F1dG9Eb2NUeXBlTW9kZSA9ZmFsc2U7XG4gICAgdmFyIGFwaUtleSA9IHByb2Nlc3MuZW52LkJJT19LRVk7XG5cbiAgICB2ZXJpZG9jLmluaXQoZW5kcG9pbnRBZGRyZXNzLCBhcGlLZXksIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgZ290UGhvdG9DYWxsYmFjaylcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHZlcmlkb2Muc2V0RG9jVHlwZShkb2N1bWVudFR5cGUpO1xuICAgICAgICAgIHZlcmlkb2Muc2V0UmVjb2duaXRpb25Nb2RlKHJlY29nbml0aW9uTW9kZSk7XG4gICAgICAgICAgdmVyaWRvYy5zZXRJc0dsYXJlQ2hlY2tOZWVkZWQoaXNHbGFyZUNoZWNrTmVlZGVkKTtcbiAgICAgICAgICB2ZXJpZG9jLnNldElzVHJhbnNsaXRDaGVja05lZWRlZChpc1RyYW5zbGl0Q2hlY2tOZWVkZWQpO1xuICAgICAgICAgIHZlcmlkb2Muc2V0TWlycm9yUHJldmlld0ZvcldlYkNhbWVyYXMoaXNNaXJyb3JNb2RlKTtcbiAgICAgICAgICB2ZXJpZG9jLnNldElzQXV0b0RvY1R5cGVNb2RlKGlzQXV0b0RvY1R5cGVNb2RlKTtcblxuICAgICAgICBcbiAgICAgICAgfSlcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gb25TdGFydEJ1dHRvbkNsaWNrKCkge1xuICAgIHZhciBzZXNzaW9uX3Rva2VuID0gdmVyaWRvYy5zdGFydCgpO1xuICAgIGNvbnNvbGUubG9nKCdzZXNpb25fdG9rZW4gaXM6ICcgKyBzZXNzaW9uX3Rva2VuKTtcbiAgfVxuXG5mdW5jdGlvbiBzaG93UmVzdWx0cyhkYXRhKSB7XG4gICAgaWYoZGF0YS5mYWNlX3BpY3R1cmUpIHtcbiAgICAgIHNldExpdmVEb2MoXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiICsgZGF0YS5mYWNlX3BpY3R1cmUpXG4gICAgfWVsc2Uge1xuICAgICAgc2V0TGl2ZURvYyhgJHtkYXRhfWApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1JlY29nbml0aW9uV2FybmluZ3MoKSB7XG4gICAgdmFyIHJlY29nbml0aW9uV2FybmluZ3MgPSB2ZXJpZG9jLmdldFJlY29nbml0aW9uV2FybmluZ3MoKTtcbiAgICBpZiAocmVjb2duaXRpb25XYXJuaW5ncy5pbmNsdWRlcyhSZWNvZ25pdGlvbldhcm5pbmcuRE9DVU1FTlRfRVhQSVJFRCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgZG9jdW1lbnQgZXhwaXJlZCEnKTtcbiAgICB9XG4gICAgaWYgKHJlY29nbml0aW9uV2FybmluZ3MuaW5jbHVkZXMoUmVjb2duaXRpb25XYXJuaW5nLklOQ09OU0lTVEVOVF9UUkFOU0xJVEVSQVRJT04pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUcmFuc2xpdGVyYXRpb24gY2hlY2sgZmFpbCB3YXJuaW5nIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKGRhdGEpIHtcbiAgICBzaG93UmVzdWx0cyhkYXRhKTtcbiAgICBjaGVja1JlY29nbml0aW9uV2FybmluZ3MoKTtcbn1cblxuZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhkYXRhKSB7XG4gICAgc2hvd1Jlc3VsdHMoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGdvdFBob3RvQ2FsbGJhY2soKSB7fVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpdmVEb2NIYW5kbGUoKVxuICB9LCBbbGl2ZURvY10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja1NpbWlsYXIoKVxuICB9LCBbZmlsZURvY10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXZlUGhvdG9IYW5kbGUoKVxuICB9LFtsaXZlUGhvdG9dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoZmlsZSAhPT0gbnVsbCkge1xuICAgICAgc2V0U3RlcCgyKVxuICAgIH1cbiAgfSwgW2ZpbGVdKVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgIHtzdGVwID09PSAxICYmIDxWZXJpTGl2ZSBzZXRMaXZlUGhvdG89e3NldExpdmVQaG90b30gLz59XG4gICAgICB7c3RlcCA9PT0gMiAmJiA8VmVyaURvYyBzZXRMaXZlRG9jPXtzZXRMaXZlRG9jfS8+fVxuICAgICAgey8qIDxWZXJpRG9jIHNldExpdmVEb2M9e3NldExpdmVEb2N9Lz4gKi99XG5cbiAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkobGl2ZURvYyl9ICovfVxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGVzdENoZWNrOyJdLCJzb3VyY2VSb290IjoiIn0=