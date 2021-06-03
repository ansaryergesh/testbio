self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Verigram/VeriLive.js":
/*!*****************************************!*\
  !*** ./components/Verigram/VeriLive.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\verigram\\components\\Verigram\\VeriLive.js",
    _this = undefined,
    _s = $RefreshSig$();






var VeriLive = function VeriLive(_ref) {
  _s();

  var setLivePhoto = _ref.setLivePhoto;
  var url = "https://face.verigram.ai/verilive";
  var apiKey = 'process.env.BIO_KEY';
  var config = {
    'recordVideo': false,
    'rotated': false,
    'lang': "ru",
    'render': {
      'oval': true,
      'faceContourInsteadOfOval': true,
      'ovalRingColor': {
        'default': '#F5F542',
        'actionSuccess': '#00F500',
        'actionFailure': '#F50000',
        'sessionSuccess': '#00F500',
        'sessionFailure': '#F50000'
      },
      'ovalWidth': 1.0,
      'overlay': true,
      'overlayColor': {
        'default': '#2F4F4F'
      },
      'overlayTransparency': {
        'default': 0.55
      },
      'arrow': true,
      'arrowColor': {
        'default': '#F0F0F0'
      },
      'arrowProgressColor': {
        'default': '#404040'
      },
      'hint': true,
      'hintTextColor': {
        "default": "#C8C9CC"
      },
      'hintFontType': "Arial",
      'hintUseProgressiveFontSize': true,
      'hintProgressiveFontSizeMultiplier': 1.0,
      'hintFontSize': 25,
      "hintCloudColor": {
        "default": "#2D312F"
      }
    },
    'hints': {
      'noHint': '',
      'noFace': 'Вас Не Видно',
      'badLight': "Выравните Освещение",
      'closer': 'Ближе',
      'away': 'Отдалитесь',
      'closerToCenter': 'Ближе к Центру Экрана',
      'targetLeft': 'Медленно Поворачивайте Голову Влево',
      'targetRight': 'Медленно Поворачивайте Голову Вправо',
      'targetCenter': 'Посмотрите Прямо',
      'sessionSuccess': 'Вы Прошли!',
      'sessionFailure': 'Вы Не Прошли!',
      'sessionError': 'Произошла какая-то ошибка. Попробуйте перезапустить'
    }
  };

  function successCallback(data) {
    // E.g. Show results to user
    // document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    var result = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    setLivePhoto(JSON.parse(result));
    console.log(JSON.parse(result).bestFrame);
    localStorage.setItem('livephoto', JSON.parse(result).bestFrame);
    next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__.default.push('/secondStep');
  } // Failure VeriLive json results


  function failCallback(data) {
    // E.g. Show to user, say to retry again
    // document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    setLivePhoto(JSON.stringify(data, undefined, 2).replace(/</g, "&lt;"));
  }

  function errorCallback(data) {
    // E.g. Show to user, say to retry again
    var base64img = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;"); // document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    // setLivePhoto(dataURLtoFile(base64img))
  }

  function updateCallback(data) {// console.log(data);
  }

  function onStartButtonClick() {
    var token = verilive.start();
    console.log(verilive.name + ': Token - ' + token);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    verilive.init(url, apiKey, successCallback, failCallback, errorCallback, updateCallback, config).then(function () {
      sweetalert__WEBPACK_IMPORTED_MODULE_2___default()("Проверка 'живости'", "\u0415\u0441\u043B\u0438 \u0432\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 OK", "info").then(function () {
        onStartButtonClick();
      });
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "id_verilive"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, _this);
};

_s(VeriLive, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = VeriLive;
/* harmony default export */ __webpack_exports__["default"] = (VeriLive);

var _c;

$RefreshReg$(_c, "VeriLive");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpTGl2ZS5qcyJdLCJuYW1lcyI6WyJWZXJpTGl2ZSIsInNldExpdmVQaG90byIsInVybCIsImFwaUtleSIsImNvbmZpZyIsInN1Y2Nlc3NDYWxsYmFjayIsImRhdGEiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImJlc3RGcmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJSb3V0ZXIiLCJmYWlsQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiYmFzZTY0aW1nIiwidXBkYXRlQ2FsbGJhY2siLCJvblN0YXJ0QnV0dG9uQ2xpY2siLCJ0b2tlbiIsInZlcmlsaXZlIiwic3RhcnQiLCJuYW1lIiwidXNlRWZmZWN0IiwiaW5pdCIsInRoZW4iLCJzd2FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW9CO0FBQUE7O0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjtBQUNuQyxNQUFNQyxHQUFHLEdBQUcsbUNBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUcscUJBQWY7QUFDQSxNQUFPQyxNQUFNLEdBQUc7QUFDZCxtQkFBZSxLQUREO0FBRWQsZUFBVyxLQUZHO0FBR2QsWUFBUSxJQUhNO0FBS2QsY0FBVTtBQUNOLGNBQVEsSUFERjtBQUVOLGtDQUE0QixJQUZ0QjtBQUdOLHVCQUFpQjtBQUNiLG1CQUFXLFNBREU7QUFFYix5QkFBaUIsU0FGSjtBQUdiLHlCQUFpQixTQUhKO0FBSWIsMEJBQWtCLFNBSkw7QUFLYiwwQkFBa0I7QUFMTCxPQUhYO0FBVU4sbUJBQWEsR0FWUDtBQVlOLGlCQUFXLElBWkw7QUFhTixzQkFBZ0I7QUFDWixtQkFBWTtBQURBLE9BYlY7QUFnQk4s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QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FySEQ7O0dBQU12QixROztLQUFBQSxRO0FBdUhOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmYzYwNDlhZWQ3Y2YyNTc0NTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXJcIjtcclxuY29uc3QgVmVyaUxpdmUgPSAoe3NldExpdmVQaG90b30pID0+IHtcclxuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vZmFjZS52ZXJpZ3JhbS5haS92ZXJpbGl2ZVwiXHJcbiAgY29uc3QgYXBpS2V5ID0gJ3Byb2Nlc3MuZW52LkJJT19LRVknXHJcbiAgY29uc3QgIGNvbmZpZyA9IHtcclxuICAgICdyZWNvcmRWaWRlbyc6IGZhbHNlLFxyXG4gICAgJ3JvdGF0ZWQnOiBmYWxzZSxcclxuICAgICdsYW5nJzogXCJydVwiLFxyXG5cclxuICAgICdyZW5kZXInOiB7XHJcbiAgICAgICAgJ292YWwnOiB0cnVlLFxyXG4gICAgICAgICdmYWNlQ29udG91ckluc3RlYWRPZk92YWwnOiB0cnVlLFxyXG4gICAgICAgICdvdmFsUmluZ0NvbG9yJzoge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICcjRjVGNTQyJyxcclxuICAgICAgICAgICAgJ2FjdGlvblN1Y2Nlc3MnOiAnIzAwRjUwMCcsXHJcbiAgICAgICAgICAgICdhY3Rpb25GYWlsdXJlJzogJyNGNTAwMDAnLFxyXG4gICAgICAgICAgICAnc2Vzc2lvblN1Y2Nlc3MnOiAnIzAwRjUwMCcsXHJcbiAgICAgICAgICAgICdzZXNzaW9uRmFpbHVyZSc6ICcjRjUwMDAwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdvdmFsV2lkdGgnOiAxLjAsXHJcblxyXG4gICAgICAgICdvdmVybGF5JzogdHJ1ZSxcclxuICAgICAgICAnb3ZlcmxheUNvbG9yJzoge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCcgOiAnIzJGNEY0RicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnb3ZlcmxheVRyYW5zcGFyZW5jeSc6IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAwLjU1LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdhcnJvdyc6IHRydWUsXHJcbiAgICAgICAgJ2Fycm93Q29sb3InOiB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJyNGMEYwRjAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2Fycm93UHJvZ3Jlc3NDb2xvcic6IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnIzQwNDA0MCcsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ2hpbnQnOiB0cnVlLFxyXG4gICAgICAgICdoaW50VGV4dENvbG9yJzoge1xyXG4gICAgICAgICAgICBcImRlZmF1bHRcIjogXCIjQzhDOUNDXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnaGludEZvbnRUeXBlJzogXCJBcmlhbFwiLFxyXG4gICAgICAgICdoaW50VXNlUHJvZ3Jlc3NpdmVGb250U2l6ZSc6IHRydWUsXHJcbiAgICAgICAgJ2hpbnRQcm9ncmVzc2l2ZUZvbnRTaXplTXVsdGlwbGllcic6IDEuMCxcclxuICAgICAgICAnaGludEZvbnRTaXplJzogMjUsXHJcbiAgICAgICAgXCJoaW50Q2xvdWRDb2xvclwiOiB7XHJcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIiMyRDMxMkZcIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAnaGludHMnOiB7XHJcbiAgICAgICAgJ25vSGludCc6ICcnLFxyXG4gICAgICAgICdub0ZhY2UnOiAn0JLQsNGBINCd0LUg0JLQuNC00L3QvicsXHJcbiAgICAgICAgJ2JhZExpZ2h0JzogXCLQktGL0YDQsNCy0L3QuNGC0LUg0J7RgdCy0LXRidC10L3QuNC1XCIsXHJcbiAgICAgICAgJ2Nsb3Nlcic6ICfQkdC70LjQttC1JyxcclxuICAgICAgICAnYXdheSc6ICfQntGC0LTQsNC70LjRgtC10YHRjCcsXHJcbiAgICAgICAgJ2Nsb3NlclRvQ2VudGVyJzogJ9CR0LvQuNC20LUg0Log0KbQtdC90YLRgNGDINCt0LrRgNCw0L3QsCcsXHJcblxyXG4gICAgICAgICd0YXJnZXRMZWZ0JzogJ9Cc0LXQtNC70LXQvdC90L4g0J/QvtCy0L7RgNCw0YfQuNCy0LDQudGC0LUg0JPQvtC70L7QstGDINCS0LvQtdCy0L4nLFxyXG4gICAgICAgICd0YXJnZXRSaWdodCc6ICfQnNC10LTQu9C10L3QvdC+INCf0L7QstC+0YDQsNGH0LjQstCw0LnRgtC1INCT0L7Qu9C+0LLRgyDQktC/0YDQsNCy0L4nLFxyXG4gICAgICAgICd0YXJnZXRDZW50ZXInOiAn0J/QvtGB0LzQvtGC0YDQuNGC0LUg0J/RgNGP0LzQvicsXHJcblxyXG4gICAgICAgICdzZXNzaW9uU3VjY2Vzcyc6ICfQktGLINCf0YDQvtGI0LvQuCEnLFxyXG4gICAgICAgICdzZXNzaW9uRmFpbHVyZSc6ICfQktGLINCd0LUg0J/RgNC+0YjQu9C4IScsXHJcbiAgICAgICAgJ3Nlc3Npb25FcnJvcic6ICfQn9GA0L7QuNC30L7RiNC70LAg0LrQsNC60LDRjy3RgtC+INC+0YjQuNCx0LrQsC4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QtdGA0LXQt9Cw0L/Rg9GB0YLQuNGC0YwnLFxyXG4gICAgfSxcclxuXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc3VjY2Vzc0NhbGxiYWNrKGRhdGEpIHtcclxuICAgIC8vIEUuZy4gU2hvdyByZXN1bHRzIHRvIHVzZXJcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgdW5kZWZpbmVkLCAyKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKVxyXG4gICAgc2V0TGl2ZVBob3RvKEpTT04ucGFyc2UocmVzdWx0KSlcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmVzdWx0KS5iZXN0RnJhbWUpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGl2ZXBob3RvJywgSlNPTi5wYXJzZShyZXN1bHQpLmJlc3RGcmFtZSlcclxuICAgIFJvdXRlci5wdXNoKCcvc2Vjb25kU3RlcCcpXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIEZhaWx1cmUgVmVyaUxpdmUganNvbiByZXN1bHRzXHJcbiAgZnVuY3Rpb24gZmFpbENhbGxiYWNrKGRhdGEpIHtcclxuICAgIC8vIEUuZy4gU2hvdyB0byB1c2VyLCBzYXkgdG8gcmV0cnkgYWdhaW5cclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xyXG5cclxuICAgIHNldExpdmVQaG90byhKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhkYXRhKSB7XHJcbiAgICAvLyBFLmcuIFNob3cgdG8gdXNlciwgc2F5IHRvIHJldHJ5IGFnYWluXHJcbiAgICBjb25zdCBiYXNlNjRpbWcgPSBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzXCIpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIHVuZGVmaW5lZCwgMikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XHJcbiAgICAvLyBzZXRMaXZlUGhvdG8oZGF0YVVSTHRvRmlsZShiYXNlNjRpbWcpKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uU3RhcnRCdXR0b25DbGljaygpIHtcclxuICAgIGNvbnN0IHRva2VuID0gdmVyaWxpdmUuc3RhcnQoKTtcclxuICAgIGNvbnNvbGUubG9nKHZlcmlsaXZlLm5hbWUgKyAnOiBUb2tlbiAtICcgKyB0b2tlbik7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmVyaWxpdmUuaW5pdCh1cmwsIGFwaUtleSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2ssIHVwZGF0ZUNhbGxiYWNrLCBjb25maWcpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBzd2FsKFwi0J/RgNC+0LLQtdGA0LrQsCAn0LbQuNCy0L7RgdGC0LgnXCIsIGDQldGB0LvQuCDQstGLINCz0L7RgtC+0LLRiyDQvdCw0LbQvNC40YLQtSDQutC90L7Qv9C60YMgT0tgLCBcImluZm9cIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBvblN0YXJ0QnV0dG9uQ2xpY2soKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPSdjaGVjaycgb25DbGljaz17KCkgPT4gY2hlY2tCdXR0b24oKX0+PC9idXR0b24+ICovfVxyXG4gICAgICA8ZGl2IGlkPVwiaWRfdmVyaWxpdmVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaUxpdmU7Il0sInNvdXJjZVJvb3QiOiIifQ==