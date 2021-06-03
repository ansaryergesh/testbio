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
    console.log(JSON.parse(result).bestFrame); // cookie.set('livephoto',JSON.parse(result).bestFrame )

    localStorage.setItem('livephot', JSON.parse(result).bestFrame);
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
      lineNumber: 120,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpTGl2ZS5qcyJdLCJuYW1lcyI6WyJWZXJpTGl2ZSIsInNldExpdmVQaG90byIsInVybCIsImFwaUtleSIsImNvbmZpZyIsInN1Y2Nlc3NDYWxsYmFjayIsImRhdGEiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImJlc3RGcmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJmYWlsQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiYmFzZTY0aW1nIiwidXBkYXRlQ2FsbGJhY2siLCJvblN0YXJ0QnV0dG9uQ2xpY2siLCJ0b2tlbiIsInZlcmlsaXZlIiwic3RhcnQiLCJuYW1lIiwidXNlRWZmZWN0IiwiaW5pdCIsInRoZW4iLCJzd2FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW9CO0FBQUE7O0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjtBQUNuQyxNQUFNQyxHQUFHLEdBQUcsbUNBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUcscUJBQWY7QUFDQSxNQUFPQyxNQUFNLEdBQUc7QUFDZCxtQkFBZSxLQUREO0FBRWQsZUFBVyxLQUZHO0FBR2QsWUFBUSxJQUhNO0FBS2QsY0FBVTtBQUNOLGNBQVEsSUFERjtBQUVOLGtDQUE0QixJQUZ0QjtBQUdOLHVCQUFpQjtBQUNiLG1CQUFXLFNBREU7QUFFYix5QkFBaUIsU0FGSjtBQUdiLHlCQUFpQixTQUhKO0FBSWIsMEJBQWtCLFNBSkw7QUFLYiwwQkFBa0I7QUFMTCxPQUhYO0FBVU4sbUJBQWEsR0FWUDtBQVlOLGlCQUFXLElBWkw7QUFhTixzQkFBZ0I7QUFDWixtQkFBWTtBQURBLE9BYlY7QUFnQk4sNkJBQXVCO0FBQ25CLG1C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QUFBQTtBQUFBLFdBREY7QUFNRCxDQXJIRDs7R0FBTXRCLFE7O0tBQUFBLFE7QUF1SE4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTlmYmU2ZDUyYmVlMTYyYzBhNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5jb25zdCBWZXJpTGl2ZSA9ICh7c2V0TGl2ZVBob3RvfSkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9mYWNlLnZlcmlncmFtLmFpL3ZlcmlsaXZlXCJcclxuICBjb25zdCBhcGlLZXkgPSAncHJvY2Vzcy5lbnYuQklPX0tFWSdcclxuICBjb25zdCAgY29uZmlnID0ge1xyXG4gICAgJ3JlY29yZFZpZGVvJzogZmFsc2UsXHJcbiAgICAncm90YXRlZCc6IGZhbHNlLFxyXG4gICAgJ2xhbmcnOiBcInJ1XCIsXHJcblxyXG4gICAgJ3JlbmRlcic6IHtcclxuICAgICAgICAnb3ZhbCc6IHRydWUsXHJcbiAgICAgICAgJ2ZhY2VDb250b3VySW5zdGVhZE9mT3ZhbCc6IHRydWUsXHJcbiAgICAgICAgJ292YWxSaW5nQ29sb3InOiB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJyNGNUY1NDInLFxyXG4gICAgICAgICAgICAnYWN0aW9uU3VjY2Vzcyc6ICcjMDBGNTAwJyxcclxuICAgICAgICAgICAgJ2FjdGlvbkZhaWx1cmUnOiAnI0Y1MDAwMCcsXHJcbiAgICAgICAgICAgICdzZXNzaW9uU3VjY2Vzcyc6ICcjMDBGNTAwJyxcclxuICAgICAgICAgICAgJ3Nlc3Npb25GYWlsdXJlJzogJyNGNTAwMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ292YWxXaWR0aCc6IDEuMCxcclxuXHJcbiAgICAgICAgJ292ZXJsYXknOiB0cnVlLFxyXG4gICAgICAgICdvdmVybGF5Q29sb3InOiB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JyA6ICcjMkY0RjRGJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdvdmVybGF5VHJhbnNwYXJlbmN5Jzoge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IDAuNTUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ2Fycm93JzogdHJ1ZSxcclxuICAgICAgICAnYXJyb3dDb2xvcic6IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnI0YwRjBGMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnYXJyb3dQcm9ncmVzc0NvbG9yJzoge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICcjNDA0MDQwJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnaGludCc6IHRydWUsXHJcbiAgICAgICAgJ2hpbnRUZXh0Q29sb3InOiB7XHJcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIiNDOEM5Q0NcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgICdoaW50Rm9udFR5cGUnOiBcIkFyaWFsXCIsXHJcbiAgICAgICAgJ2hpbnRVc2VQcm9ncmVzc2l2ZUZvbnRTaXplJzogdHJ1ZSxcclxuICAgICAgICAnaGludFByb2dyZXNzaXZlRm9udFNpemVNdWx0aXBsaWVyJzogMS4wLFxyXG4gICAgICAgICdoaW50Rm9udFNpemUnOiAyNSxcclxuICAgICAgICBcImhpbnRDbG91ZENvbG9yXCI6IHtcclxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiIzJEMzEyRlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgICdoaW50cyc6IHtcclxuICAgICAgICAnbm9IaW50JzogJycsXHJcbiAgICAgICAgJ25vRmFjZSc6ICfQktCw0YEg0J3QtSDQktC40LTQvdC+JyxcclxuICAgICAgICAnYmFkTGlnaHQnOiBcItCS0YvRgNCw0LLQvdC40YLQtSDQntGB0LLQtdGJ0LXQvdC40LVcIixcclxuICAgICAgICAnY2xvc2VyJzogJ9CR0LvQuNC20LUnLFxyXG4gICAgICAgICdhd2F5JzogJ9Ce0YLQtNCw0LvQuNGC0LXRgdGMJyxcclxuICAgICAgICAnY2xvc2VyVG9DZW50ZXInOiAn0JHQu9C40LbQtSDQuiDQptC10L3RgtGA0YMg0K3QutGA0LDQvdCwJyxcclxuXHJcbiAgICAgICAgJ3RhcmdldExlZnQnOiAn0JzQtdC00LvQtdC90L3QviDQn9C+0LLQvtGA0LDRh9C40LLQsNC50YLQtSDQk9C+0LvQvtCy0YMg0JLQu9C10LLQvicsXHJcbiAgICAgICAgJ3RhcmdldFJpZ2h0JzogJ9Cc0LXQtNC70LXQvdC90L4g0J/QvtCy0L7RgNCw0YfQuNCy0LDQudGC0LUg0JPQvtC70L7QstGDINCS0L/RgNCw0LLQvicsXHJcbiAgICAgICAgJ3RhcmdldENlbnRlcic6ICfQn9C+0YHQvNC+0YLRgNC40YLQtSDQn9GA0Y/QvNC+JyxcclxuXHJcbiAgICAgICAgJ3Nlc3Npb25TdWNjZXNzJzogJ9CS0Ysg0J/RgNC+0YjQu9C4IScsXHJcbiAgICAgICAgJ3Nlc3Npb25GYWlsdXJlJzogJ9CS0Ysg0J3QtSDQn9GA0L7RiNC70LghJyxcclxuICAgICAgICAnc2Vzc2lvbkVycm9yJzogJ9Cf0YDQvtC40LfQvtGI0LvQsCDQutCw0LrQsNGPLdGC0L4g0L7RiNC40LHQutCwLiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQv9C10YDQtdC30LDQv9GD0YHRgtC40YLRjCcsXHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgLy8gRS5nLiBTaG93IHJlc3VsdHMgdG8gdXNlclxyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzXCIpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIHVuZGVmaW5lZCwgMikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XHJcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXHJcbiAgICBzZXRMaXZlUGhvdG8oSlNPTi5wYXJzZShyZXN1bHQpKVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShyZXN1bHQpLmJlc3RGcmFtZSlcclxuICAgIC8vIGNvb2tpZS5zZXQoJ2xpdmVwaG90bycsSlNPTi5wYXJzZShyZXN1bHQpLmJlc3RGcmFtZSApXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGl2ZXBob3QnLCBKU09OLnBhcnNlKHJlc3VsdCkuYmVzdEZyYW1lKVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyBGYWlsdXJlIFZlcmlMaXZlIGpzb24gcmVzdWx0c1xyXG4gIGZ1bmN0aW9uIGZhaWxDYWxsYmFjayhkYXRhKSB7XHJcbiAgICAvLyBFLmcuIFNob3cgdG8gdXNlciwgc2F5IHRvIHJldHJ5IGFnYWluXHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNcIikuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgdW5kZWZpbmVkLCAyKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKTtcclxuXHJcbiAgICBzZXRMaXZlUGhvdG8oSlNPTi5zdHJpbmdpZnkoZGF0YSwgdW5kZWZpbmVkLCAyKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgLy8gRS5nLiBTaG93IHRvIHVzZXIsIHNheSB0byByZXRyeSBhZ2FpblxyXG4gICAgY29uc3QgYmFzZTY0aW1nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgdW5kZWZpbmVkLCAyKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKTtcclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xyXG4gICAgLy8gc2V0TGl2ZVBob3RvKGRhdGFVUkx0b0ZpbGUoYmFzZTY0aW1nKSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUNhbGxiYWNrKGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvblN0YXJ0QnV0dG9uQ2xpY2soKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHZlcmlsaXZlLnN0YXJ0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh2ZXJpbGl2ZS5uYW1lICsgJzogVG9rZW4gLSAnICsgdG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZlcmlsaXZlLmluaXQodXJsLCBhcGlLZXksIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbENhbGxiYWNrLCBlcnJvckNhbGxiYWNrLCB1cGRhdGVDYWxsYmFjaywgY29uZmlnKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc3dhbChcItCf0YDQvtCy0LXRgNC60LAgJ9C20LjQstC+0YHRgtC4J1wiLCBg0JXRgdC70Lgg0LLRiyDQs9C+0YLQvtCy0Ysg0L3QsNC20LzQuNGC0LUg0LrQvdC+0L/QutGDIE9LYCwgXCJpbmZvXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgb25TdGFydEJ1dHRvbkNsaWNrKClcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT0nY2hlY2snIG9uQ2xpY2s9eygpID0+IGNoZWNrQnV0dG9uKCl9PjwvYnV0dG9uPiAqL31cclxuICAgICAgPGRpdiBpZD1cImlkX3ZlcmlsaXZlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcmlMaXZlOyJdLCJzb3VyY2VSb290IjoiIn0=