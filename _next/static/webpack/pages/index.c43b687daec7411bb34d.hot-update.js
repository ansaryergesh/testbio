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
    _this = undefined;




var VeriDoc = function VeriDoc(_ref) {
  var setLiveDoc = _ref.setLiveDoc;

  function onInitializeButtonClick() {
    // var endpointAddress = 'https://services.verigram.ai:8443/veridoc/ru/veridoc/';
    // var documentType = parseInt('1');
    // var recognitionMode = parseInt('0');
    // var isGlareCheckNeeded = false;
    // var isTranslitCheckNeeded = false;
    // var isMirrorMode = false;
    // var isAutoDocTypeMode =false;
    // var apiKey = process.env.BIO_KEY;
    // veridoc.init(endpointAddress, apiKey, successCallback, errorCallback, gotPhotoCallback)
    //     .then(() => {
    //       veridoc.setDocType(documentType);
    //       veridoc.setRecognitionMode(recognitionMode);
    //       veridoc.setIsGlareCheckNeeded(isGlareCheckNeeded);
    //       veridoc.setIsTranslitCheckNeeded(isTranslitCheckNeeded);
    //       veridoc.setMirrorPreviewForWebCameras(isMirrorMode);
    //       veridoc.setIsAutoDocTypeMode(isAutoDocTypeMode);
    //     })
    //       .then(() => {
    //         swal("Вы успешно прошли проверка 'живости'. Приготовьте ваше удостоверение личности для сканирование", `Сканируется только лицевая сторона удостоверения личности. Если вы готовы нажмите кнопку OK`, "info").then(() => {
    //           onStartButtonClick()
    //         })
    //       })
    //     .catch((e) => {
    //         document.getElementById("results").innerHTML = e;
    //     });
    sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Вы успешно прошли проверка 'живости'. Приготовьте ваше удостоверение личности для сканирование", "\u0421\u043A\u0430\u043D\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043B\u0438\u0446\u0435\u0432\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u044F \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438. \u0415\u0441\u043B\u0438 \u0432\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 OK", "info").then(function () {// onStartButtonClick()
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

  function gotPhotoCallback() {} // useEffect(() => {
  //   var endpointAddress = 'https://dev.verilive.verigram.ai/ru/veridoc/';
  //   var documentType = parseInt(1);
  //   var recognitionMode = parseInt(0);
  //   var isGlareCheckNeeded = false;
  //   var isTranslitCheckNeeded = false;
  //   var isMirrorMode = false;
  //   var isAutoDocTypeMode =false;
  //   var apiKey = 'DUMMY_API_KEY';
  //   swal("Вы успешно прошли проверка 'живости'. Приготовьте ваше удостоверение личности для сканирование", `Сканируется только лицевая сторона удостоверения личности. Если вы готовы нажмите кнопку OK`, "info")
  //     .then(() => {
  //       veridoc.init(endpointAddress, apiKey, successCallback, errorCallback, gotPhotoCallback)
  //       .then(() => {
  //         veridoc.setDocType(documentType);
  //         veridoc.setRecognitionMode(recognitionMode);
  //         veridoc.setIsGlareCheckNeeded(isGlareCheckNeeded);
  //         veridoc.setIsTranslitCheckNeeded(isTranslitCheckNeeded);
  //         veridoc.setMirrorPreviewForWebCameras(isMirrorMode);
  //         veridoc.setIsAutoDocTypeMode(isAutoDocTypeMode);
  //       })
  //       .then(() => {
  //         onStartButtonClick()
  //       })
  //     })
  //   // onInitializeButtonClick()
  // },[])


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "veridoc",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        id: "id_veridoc"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: function onClick() {
          return onInitializeButtonClick();
        },
        children: "Start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpRG9jLmpzIl0sIm5hbWVzIjpbIlZlcmlEb2MiLCJzZXRMaXZlRG9jIiwib25Jbml0aWFsaXplQnV0dG9uQ2xpY2siLCJzd2FsIiwidGhlbiIsIm9uU3RhcnRCdXR0b25DbGljayIsInNlc3Npb25fdG9rZW4iLCJ2ZXJpZG9jIiwic3RhcnQiLCJjb25zb2xlIiwibG9nIiwic2hvd1Jlc3VsdHMiLCJkYXRhIiwiZmFjZV9waWN0dXJlIiwiY2hlY2tSZWNvZ25pdGlvbldhcm5pbmdzIiwicmVjb2duaXRpb25XYXJuaW5ncyIsImdldFJlY29nbml0aW9uV2FybmluZ3MiLCJpbmNsdWRlcyIsIlJlY29nbml0aW9uV2FybmluZyIsIkRPQ1VNRU5UX0VYUElSRUQiLCJJTkNPTlNJU1RFTlRfVFJBTlNMSVRFUkFUSU9OIiwic3VjY2Vzc0NhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImdvdFBob3RvQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWtCO0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFFaEMsV0FBU0MsdUJBQVQsR0FBbUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDWUMscURBQUksQ0FBQyxnR0FBRCxrZUFBa00sTUFBbE0sQ0FBSixDQUE4TUMsSUFBOU0sQ0FBbU4sWUFBTSxDQUMzTjtBQUNELEtBRkc7QUFHYjs7QUFHRCxXQUFTQyxrQkFBVCxHQUE4QjtBQUM1QixRQUFJQyxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsS0FBUixFQUFwQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0JKLGFBQWxDO0FBQ0Q7O0FBRUgsV0FBU0ssV0FBVCxDQUFxQkMsSUFBckIsRUFBMkI7QUFDdkIsUUFBR0EsSUFBSSxDQUFDQyxZQUFSLEVBQXNCO0FBQ3BCWixnQkFBVSxDQUFDLDRCQUE0QlcsSUFBSSxDQUFDQyxZQUFsQyxDQUFWO0FBQ0QsS0FGRCxNQUVNO0FBQ0paLGdCQUFVLFdBQUlXLElBQUosRUFBVjtBQUNEO0FBQ0o7O0FBRUQsV0FBU0Usd0JBQVQsR0FBb0M7QUFDaEMsUUFBSUMsbUJBQW1CLEdBQUdSLE9BQU8sQ0FBQ1Msc0JBQVIsRUFBMUI7O0FBQ0EsUUFBSUQsbUJBQW1CLENBQUNFLFFBQXBCLENBQTZCQyxrQkFBa0IsQ0FBQ0MsZ0JBQWhELENBQUosRUFBdUU7QUFDbkVWLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0g7O0FBQ0QsUUFBSUssbUJBQW1CLENBQUNFLFFBQXBCLENBQTZCQyxrQkFBa0IsQ0FBQ0UsNEJBQWhELENBQUosRUFBbUY7QUFDL0VYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFaO0FBQ0g7QUFDSjs7QUFFRCxXQUFTVyxlQUFULENBQXlCVCxJQUF6QixFQUErQjtBQUMzQkQsZUFBVyxDQUFDQyxJQUFELENBQVg7QUFDQUUsNEJBQXdCO0FBQzNCOztBQUVELFdBQVNRLGFBQVQsQ0FBdUJWLElBQXZCLEVBQTZCO0FBQ3pCRCxlQUFXLENBQUNDLElBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNXLGdCQUFULEdBQTRCLENBQUUsQ0FyRUksQ0F1RWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxVQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLGVBQU8sRUFBRTtBQUFBLGlCQUFJckIsdUJBQXVCLEVBQTNCO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQWhIRDs7S0FBTUYsTztBQWtITiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNDNiNjg3ZGFlYzc0MTFiYjM0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcblxyXG5jb25zdCBWZXJpRG9jID0gKHtzZXRMaXZlRG9jfSkgPT4ge1xyXG4gIFxyXG4gIGZ1bmN0aW9uIG9uSW5pdGlhbGl6ZUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgLy8gdmFyIGVuZHBvaW50QWRkcmVzcyA9ICdodHRwczovL3NlcnZpY2VzLnZlcmlncmFtLmFpOjg0NDMvdmVyaWRvYy9ydS92ZXJpZG9jLyc7XHJcbiAgICAvLyB2YXIgZG9jdW1lbnRUeXBlID0gcGFyc2VJbnQoJzEnKTtcclxuICAgIC8vIHZhciByZWNvZ25pdGlvbk1vZGUgPSBwYXJzZUludCgnMCcpO1xyXG4gICAgLy8gdmFyIGlzR2xhcmVDaGVja05lZWRlZCA9IGZhbHNlO1xyXG4gICAgLy8gdmFyIGlzVHJhbnNsaXRDaGVja05lZWRlZCA9IGZhbHNlO1xyXG4gICAgLy8gdmFyIGlzTWlycm9yTW9kZSA9IGZhbHNlO1xyXG4gICAgLy8gdmFyIGlzQXV0b0RvY1R5cGVNb2RlID1mYWxzZTtcclxuICAgIC8vIHZhciBhcGlLZXkgPSBwcm9jZXNzLmVudi5CSU9fS0VZO1xyXG5cclxuICAgIC8vIHZlcmlkb2MuaW5pdChlbmRwb2ludEFkZHJlc3MsIGFwaUtleSwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrLCBnb3RQaG90b0NhbGxiYWNrKVxyXG4gICAgLy8gICAgIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgIHZlcmlkb2Muc2V0RG9jVHlwZShkb2N1bWVudFR5cGUpO1xyXG4gICAgLy8gICAgICAgdmVyaWRvYy5zZXRSZWNvZ25pdGlvbk1vZGUocmVjb2duaXRpb25Nb2RlKTtcclxuICAgIC8vICAgICAgIHZlcmlkb2Muc2V0SXNHbGFyZUNoZWNrTmVlZGVkKGlzR2xhcmVDaGVja05lZWRlZCk7XHJcbiAgICAvLyAgICAgICB2ZXJpZG9jLnNldElzVHJhbnNsaXRDaGVja05lZWRlZChpc1RyYW5zbGl0Q2hlY2tOZWVkZWQpO1xyXG4gICAgLy8gICAgICAgdmVyaWRvYy5zZXRNaXJyb3JQcmV2aWV3Rm9yV2ViQ2FtZXJhcyhpc01pcnJvck1vZGUpO1xyXG4gICAgLy8gICAgICAgdmVyaWRvYy5zZXRJc0F1dG9Eb2NUeXBlTW9kZShpc0F1dG9Eb2NUeXBlTW9kZSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHN3YWwoXCLQktGLINGD0YHQv9C10YjQvdC+INC/0YDQvtGI0LvQuCDQv9GA0L7QstC10YDQutCwICfQttC40LLQvtGB0YLQuCcuINCf0YDQuNCz0L7RgtC+0LLRjNGC0LUg0LLQsNGI0LUg0YPQtNC+0YHRgtC+0LLQtdGA0LXQvdC40LUg0LvQuNGH0L3QvtGB0YLQuCDQtNC70Y8g0YHQutCw0L3QuNGA0L7QstCw0L3QuNC1XCIsIGDQodC60LDQvdC40YDRg9C10YLRgdGPINGC0L7Qu9GM0LrQviDQu9C40YbQtdCy0LDRjyDRgdGC0L7RgNC+0L3QsCDRg9C00L7RgdGC0L7QstC10YDQtdC90LjRjyDQu9C40YfQvdC+0YHRgtC4LiDQldGB0LvQuCDQstGLINCz0L7RgtC+0LLRiyDQvdCw0LbQvNC40YLQtSDQutC90L7Qv9C60YMgT0tgLCBcImluZm9cIikudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgb25TdGFydEJ1dHRvbkNsaWNrKClcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgIH0pXHJcbiAgICAvLyAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5pbm5lckhUTUwgPSBlO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc3dhbChcItCS0Ysg0YPRgdC/0LXRiNC90L4g0L/RgNC+0YjQu9C4INC/0YDQvtCy0LXRgNC60LAgJ9C20LjQstC+0YHRgtC4Jy4g0J/RgNC40LPQvtGC0L7QstGM0YLQtSDQstCw0YjQtSDRg9C00L7RgdGC0L7QstC10YDQtdC90LjQtSDQu9C40YfQvdC+0YHRgtC4INC00LvRjyDRgdC60LDQvdC40YDQvtCy0LDQvdC40LVcIiwgYNCh0LrQsNC90LjRgNGD0LXRgtGB0Y8g0YLQvtC70YzQutC+INC70LjRhtC10LLQsNGPINGB0YLQvtGA0L7QvdCwINGD0LTQvtGB0YLQvtCy0LXRgNC10L3QuNGPINC70LjRh9C90L7RgdGC0LguINCV0YHQu9C4INCy0Ysg0LPQvtGC0L7QstGLINC90LDQttC80LjRgtC1INC60L3QvtC/0LrRgyBPS2AsIFwiaW5mb1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAvLyBvblN0YXJ0QnV0dG9uQ2xpY2soKVxyXG4gICAgICAgICAgICB9KVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gb25TdGFydEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgdmFyIHNlc3Npb25fdG9rZW4gPSB2ZXJpZG9jLnN0YXJ0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnc2VzaW9uX3Rva2VuIGlzOiAnICsgc2Vzc2lvbl90b2tlbik7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jlc3VsdHMoZGF0YSkge1xyXG4gICAgaWYoZGF0YS5mYWNlX3BpY3R1cmUpIHtcclxuICAgICAgc2V0TGl2ZURvYyhcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIgKyBkYXRhLmZhY2VfcGljdHVyZSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgc2V0TGl2ZURvYyhgJHtkYXRhfWApXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrUmVjb2duaXRpb25XYXJuaW5ncygpIHtcclxuICAgIHZhciByZWNvZ25pdGlvbldhcm5pbmdzID0gdmVyaWRvYy5nZXRSZWNvZ25pdGlvbldhcm5pbmdzKCk7XHJcbiAgICBpZiAocmVjb2duaXRpb25XYXJuaW5ncy5pbmNsdWRlcyhSZWNvZ25pdGlvbldhcm5pbmcuRE9DVU1FTlRfRVhQSVJFRCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBkb2N1bWVudCBleHBpcmVkIScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlY29nbml0aW9uV2FybmluZ3MuaW5jbHVkZXMoUmVjb2duaXRpb25XYXJuaW5nLklOQ09OU0lTVEVOVF9UUkFOU0xJVEVSQVRJT04pKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RyYW5zbGl0ZXJhdGlvbiBjaGVjayBmYWlsIHdhcm5pbmchJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhkYXRhKSB7XHJcbiAgICBzaG93UmVzdWx0cyhkYXRhKTtcclxuICAgIGNoZWNrUmVjb2duaXRpb25XYXJuaW5ncygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvckNhbGxiYWNrKGRhdGEpIHtcclxuICAgIHNob3dSZXN1bHRzKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb3RQaG90b0NhbGxiYWNrKCkge31cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHZhciBlbmRwb2ludEFkZHJlc3MgPSAnaHR0cHM6Ly9kZXYudmVyaWxpdmUudmVyaWdyYW0uYWkvcnUvdmVyaWRvYy8nO1xyXG4gIC8vICAgdmFyIGRvY3VtZW50VHlwZSA9IHBhcnNlSW50KDEpO1xyXG4gIC8vICAgdmFyIHJlY29nbml0aW9uTW9kZSA9IHBhcnNlSW50KDApO1xyXG4gIC8vICAgdmFyIGlzR2xhcmVDaGVja05lZWRlZCA9IGZhbHNlO1xyXG4gIC8vICAgdmFyIGlzVHJhbnNsaXRDaGVja05lZWRlZCA9IGZhbHNlO1xyXG4gIC8vICAgdmFyIGlzTWlycm9yTW9kZSA9IGZhbHNlO1xyXG4gIC8vICAgdmFyIGlzQXV0b0RvY1R5cGVNb2RlID1mYWxzZTtcclxuICAvLyAgIHZhciBhcGlLZXkgPSAnRFVNTVlfQVBJX0tFWSc7XHJcblxyXG5cclxuICAvLyAgIHN3YWwoXCLQktGLINGD0YHQv9C10YjQvdC+INC/0YDQvtGI0LvQuCDQv9GA0L7QstC10YDQutCwICfQttC40LLQvtGB0YLQuCcuINCf0YDQuNCz0L7RgtC+0LLRjNGC0LUg0LLQsNGI0LUg0YPQtNC+0YHRgtC+0LLQtdGA0LXQvdC40LUg0LvQuNGH0L3QvtGB0YLQuCDQtNC70Y8g0YHQutCw0L3QuNGA0L7QstCw0L3QuNC1XCIsIGDQodC60LDQvdC40YDRg9C10YLRgdGPINGC0L7Qu9GM0LrQviDQu9C40YbQtdCy0LDRjyDRgdGC0L7RgNC+0L3QsCDRg9C00L7RgdGC0L7QstC10YDQtdC90LjRjyDQu9C40YfQvdC+0YHRgtC4LiDQldGB0LvQuCDQstGLINCz0L7RgtC+0LLRiyDQvdCw0LbQvNC40YLQtSDQutC90L7Qv9C60YMgT0tgLCBcImluZm9cIilcclxuICAvLyAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgIHZlcmlkb2MuaW5pdChlbmRwb2ludEFkZHJlc3MsIGFwaUtleSwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrLCBnb3RQaG90b0NhbGxiYWNrKVxyXG4gIC8vICAgICAgIC50aGVuKCgpID0+IHtcclxuICAvLyAgICAgICAgIHZlcmlkb2Muc2V0RG9jVHlwZShkb2N1bWVudFR5cGUpO1xyXG4gIC8vICAgICAgICAgdmVyaWRvYy5zZXRSZWNvZ25pdGlvbk1vZGUocmVjb2duaXRpb25Nb2RlKTtcclxuICAvLyAgICAgICAgIHZlcmlkb2Muc2V0SXNHbGFyZUNoZWNrTmVlZGVkKGlzR2xhcmVDaGVja05lZWRlZCk7XHJcbiAgLy8gICAgICAgICB2ZXJpZG9jLnNldElzVHJhbnNsaXRDaGVja05lZWRlZChpc1RyYW5zbGl0Q2hlY2tOZWVkZWQpO1xyXG4gIC8vICAgICAgICAgdmVyaWRvYy5zZXRNaXJyb3JQcmV2aWV3Rm9yV2ViQ2FtZXJhcyhpc01pcnJvck1vZGUpO1xyXG4gIC8vICAgICAgICAgdmVyaWRvYy5zZXRJc0F1dG9Eb2NUeXBlTW9kZShpc0F1dG9Eb2NUeXBlTW9kZSk7XHJcblxyXG4gICAgICAgIFxyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gIC8vICAgICAgICAgb25TdGFydEJ1dHRvbkNsaWNrKClcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgLy8gb25Jbml0aWFsaXplQnV0dG9uQ2xpY2soKVxyXG4gIC8vIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndmVyaWRvYyc+XHJcbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU3RhcnRCdXR0b25DbGljaygpfSBpZD1cInN0YXJ0QnV0dG9uXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+U3RhcnQgc2Nhbm5pbmc8L2J1dHRvbj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJpZF92ZXJpZG9jXCI+PC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+b25Jbml0aWFsaXplQnV0dG9uQ2xpY2soKX0+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJpRG9jOyJdLCJzb3VyY2VSb290IjoiIn0=