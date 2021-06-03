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
    console.log(JSON.parse(result).bestFrame);
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
      lineNumber: 119,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpTGl2ZS5qcyJdLCJuYW1lcyI6WyJWZXJpTGl2ZSIsInNldExpdmVQaG90byIsInVybCIsImFwaUtleSIsImNvbmZpZyIsInN1Y2Nlc3NDYWxsYmFjayIsImRhdGEiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImJlc3RGcmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJmYWlsQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwiYmFzZTY0aW1nIiwidXBkYXRlQ2FsbGJhY2siLCJvblN0YXJ0QnV0dG9uQ2xpY2siLCJ0b2tlbiIsInZlcmlsaXZlIiwic3RhcnQiLCJuYW1lIiwidXNlRWZmZWN0IiwiaW5pdCIsInRoZW4iLCJzd2FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW9CO0FBQUE7O0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjtBQUNuQyxNQUFNQyxHQUFHLEdBQUcsbUNBQVo7QUFDQSxNQUFNQyxNQUFNLEdBQUcscUJBQWY7QUFDQSxNQUFPQyxNQUFNLEdBQUc7QUFDZCxtQkFBZSxLQUREO0FBRWQsZUFBVyxLQUZHO0FBR2QsWUFBUSxJQUhNO0FBS2QsY0FBVTtBQUNOLGNBQVEsSUFERjtBQUVOLGtDQUE0QixJQUZ0QjtBQUdOLHVCQUFpQjtBQUNiLG1CQUFXLFNBREU7QUFFYix5QkFBaUIsU0FGSjtBQUdiLHlCQUFpQixTQUhKO0FBSWIsMEJBQWtCLFNBSkw7QUFLYiwwQkFBa0I7QUFMTCxPQUhYO0FBVU4sbUJBQWEsR0FWUDtBQVlOLGlCQUFXLElBWkw7QUFhTixzQkFBZ0I7QUFDWixtQkFBWTtBQURBLE9BYlY7QUFnQk4sNkJBQXVCO0FBQ25CLG1C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RjtBQU1ELENBcEhEOztHQUFNdEIsUTs7S0FBQUEsUTtBQXNITiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNjYxNWRmZTY4YzA2Yzc1ODgyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmNvbnN0IFZlcmlMaXZlID0gKHtzZXRMaXZlUGhvdG99KSA9PiB7XHJcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2ZhY2UudmVyaWdyYW0uYWkvdmVyaWxpdmVcIlxyXG4gIGNvbnN0IGFwaUtleSA9ICdwcm9jZXNzLmVudi5CSU9fS0VZJ1xyXG4gIGNvbnN0ICBjb25maWcgPSB7XHJcbiAgICAncmVjb3JkVmlkZW8nOiBmYWxzZSxcclxuICAgICdyb3RhdGVkJzogZmFsc2UsXHJcbiAgICAnbGFuZyc6IFwicnVcIixcclxuXHJcbiAgICAncmVuZGVyJzoge1xyXG4gICAgICAgICdvdmFsJzogdHJ1ZSxcclxuICAgICAgICAnZmFjZUNvbnRvdXJJbnN0ZWFkT2ZPdmFsJzogdHJ1ZSxcclxuICAgICAgICAnb3ZhbFJpbmdDb2xvcic6IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnI0Y1RjU0MicsXHJcbiAgICAgICAgICAgICdhY3Rpb25TdWNjZXNzJzogJyMwMEY1MDAnLFxyXG4gICAgICAgICAgICAnYWN0aW9uRmFpbHVyZSc6ICcjRjUwMDAwJyxcclxuICAgICAgICAgICAgJ3Nlc3Npb25TdWNjZXNzJzogJyMwMEY1MDAnLFxyXG4gICAgICAgICAgICAnc2Vzc2lvbkZhaWx1cmUnOiAnI0Y1MDAwMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnb3ZhbFdpZHRoJzogMS4wLFxyXG5cclxuICAgICAgICAnb3ZlcmxheSc6IHRydWUsXHJcbiAgICAgICAgJ292ZXJsYXlDb2xvcic6IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnIDogJyMyRjRGNEYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ292ZXJsYXlUcmFuc3BhcmVuY3knOiB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogMC41NSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnYXJyb3cnOiB0cnVlLFxyXG4gICAgICAgICdhcnJvd0NvbG9yJzoge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICcjRjBGMEYwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdhcnJvd1Byb2dyZXNzQ29sb3InOiB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJyM0MDQwNDAnLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgICdoaW50JzogdHJ1ZSxcclxuICAgICAgICAnaGludFRleHRDb2xvcic6IHtcclxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiI0M4QzlDQ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2hpbnRGb250VHlwZSc6IFwiQXJpYWxcIixcclxuICAgICAgICAnaGludFVzZVByb2dyZXNzaXZlRm9udFNpemUnOiB0cnVlLFxyXG4gICAgICAgICdoaW50UHJvZ3Jlc3NpdmVGb250U2l6ZU11bHRpcGxpZXInOiAxLjAsXHJcbiAgICAgICAgJ2hpbnRGb250U2l6ZSc6IDI1LFxyXG4gICAgICAgIFwiaGludENsb3VkQ29sb3JcIjoge1xyXG4gICAgICAgICAgICBcImRlZmF1bHRcIjogXCIjMkQzMTJGXCIsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgJ2hpbnRzJzoge1xyXG4gICAgICAgICdub0hpbnQnOiAnJyxcclxuICAgICAgICAnbm9GYWNlJzogJ9CS0LDRgSDQndC1INCS0LjQtNC90L4nLFxyXG4gICAgICAgICdiYWRMaWdodCc6IFwi0JLRi9GA0LDQstC90LjRgtC1INCe0YHQstC10YnQtdC90LjQtVwiLFxyXG4gICAgICAgICdjbG9zZXInOiAn0JHQu9C40LbQtScsXHJcbiAgICAgICAgJ2F3YXknOiAn0J7RgtC00LDQu9C40YLQtdGB0YwnLFxyXG4gICAgICAgICdjbG9zZXJUb0NlbnRlcic6ICfQkdC70LjQttC1INC6INCm0LXQvdGC0YDRgyDQrdC60YDQsNC90LAnLFxyXG5cclxuICAgICAgICAndGFyZ2V0TGVmdCc6ICfQnNC10LTQu9C10L3QvdC+INCf0L7QstC+0YDQsNGH0LjQstCw0LnRgtC1INCT0L7Qu9C+0LLRgyDQktC70LXQstC+JyxcclxuICAgICAgICAndGFyZ2V0UmlnaHQnOiAn0JzQtdC00LvQtdC90L3QviDQn9C+0LLQvtGA0LDRh9C40LLQsNC50YLQtSDQk9C+0LvQvtCy0YMg0JLQv9GA0LDQstC+JyxcclxuICAgICAgICAndGFyZ2V0Q2VudGVyJzogJ9Cf0L7RgdC80L7RgtGA0LjRgtC1INCf0YDRj9C80L4nLFxyXG5cclxuICAgICAgICAnc2Vzc2lvblN1Y2Nlc3MnOiAn0JLRiyDQn9GA0L7RiNC70LghJyxcclxuICAgICAgICAnc2Vzc2lvbkZhaWx1cmUnOiAn0JLRiyDQndC1INCf0YDQvtGI0LvQuCEnLFxyXG4gICAgICAgICdzZXNzaW9uRXJyb3InOiAn0J/RgNC+0LjQt9C+0YjQu9CwINC60LDQutCw0Y8t0YLQviDQvtGI0LjQsdC60LAuINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC/0LXRgNC10LfQsNC/0YPRgdGC0LjRgtGMJyxcclxuICAgIH0sXHJcblxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhkYXRhKSB7XHJcbiAgICAvLyBFLmcuIFNob3cgcmVzdWx0cyB0byB1c2VyXHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNcIikuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgdW5kZWZpbmVkLCAyKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIHVuZGVmaW5lZCwgMikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIilcclxuICAgIHNldExpdmVQaG90byhKU09OLnBhcnNlKHJlc3VsdCkpXHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3VsdCkuYmVzdEZyYW1lKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpdmVwaG90JywgSlNPTi5wYXJzZShyZXN1bHQpLmJlc3RGcmFtZSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy8gRmFpbHVyZSBWZXJpTGl2ZSBqc29uIHJlc3VsdHNcclxuICBmdW5jdGlvbiBmYWlsQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgLy8gRS5nLiBTaG93IHRvIHVzZXIsIHNheSB0byByZXRyeSBhZ2FpblxyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzXCIpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIHVuZGVmaW5lZCwgMikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XHJcblxyXG4gICAgc2V0TGl2ZVBob3RvKEpTT04uc3RyaW5naWZ5KGRhdGEsIHVuZGVmaW5lZCwgMikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlcnJvckNhbGxiYWNrKGRhdGEpIHtcclxuICAgIC8vIEUuZy4gU2hvdyB0byB1c2VyLCBzYXkgdG8gcmV0cnkgYWdhaW5cclxuICAgIGNvbnN0IGJhc2U2NGltZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIHVuZGVmaW5lZCwgMikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHNcIikuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgdW5kZWZpbmVkLCAyKS5yZXBsYWNlKC88L2csIFwiJmx0O1wiKTtcclxuICAgIC8vIHNldExpdmVQaG90byhkYXRhVVJMdG9GaWxlKGJhc2U2NGltZykpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVDYWxsYmFjayhkYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gb25TdGFydEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgY29uc3QgdG9rZW4gPSB2ZXJpbGl2ZS5zdGFydCgpO1xyXG4gICAgY29uc29sZS5sb2codmVyaWxpdmUubmFtZSArICc6IFRva2VuIC0gJyArIHRva2VuKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2ZXJpbGl2ZS5pbml0KHVybCwgYXBpS2V5LCBzdWNjZXNzQ2FsbGJhY2ssIGZhaWxDYWxsYmFjaywgZXJyb3JDYWxsYmFjaywgdXBkYXRlQ2FsbGJhY2ssIGNvbmZpZylcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHN3YWwoXCLQn9GA0L7QstC10YDQutCwICfQttC40LLQvtGB0YLQuCdcIiwgYNCV0YHQu9C4INCy0Ysg0LPQvtGC0L7QstGLINC90LDQttC80LjRgtC1INC60L3QvtC/0LrRgyBPS2AsIFwiaW5mb1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIG9uU3RhcnRCdXR0b25DbGljaygpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9J2NoZWNrJyBvbkNsaWNrPXsoKSA9PiBjaGVja0J1dHRvbigpfT48L2J1dHRvbj4gKi99XHJcbiAgICAgIDxkaXYgaWQ9XCJpZF92ZXJpbGl2ZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJpTGl2ZTsiXSwic291cmNlUm9vdCI6IiJ9