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
    setLivePhoto(JSON.parse(result)); // cookie.set('livephoto', JSON.parse(result).bestFrame);
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
      lineNumber: 118,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WZXJpZ3JhbS9WZXJpTGl2ZS5qcyJdLCJuYW1lcyI6WyJWZXJpTGl2ZSIsInNldExpdmVQaG90byIsInVybCIsImFwaUtleSIsImNvbmZpZyIsInN1Y2Nlc3NDYWxsYmFjayIsImRhdGEiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwidW5kZWZpbmVkIiwicmVwbGFjZSIsInBhcnNlIiwiZmFpbENhbGxiYWNrIiwiZXJyb3JDYWxsYmFjayIsImJhc2U2NGltZyIsInVwZGF0ZUNhbGxiYWNrIiwib25TdGFydEJ1dHRvbkNsaWNrIiwidG9rZW4iLCJ2ZXJpbGl2ZSIsInN0YXJ0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJ1c2VFZmZlY3QiLCJpbml0IiwidGhlbiIsInN3YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCO0FBQ25DLE1BQU1DLEdBQUcsR0FBRyxtQ0FBWjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxxQkFBZjtBQUNBLE1BQU9DLE1BQU0sR0FBRztBQUNkLG1CQUFlLEtBREQ7QUFFZCxlQUFXLEtBRkc7QUFHZCxZQUFRLElBSE07QUFLZCxjQUFVO0FBQ04sY0FBUSxJQURGO0FBRU4sa0NBQTRCLElBRnRCO0FBR04sdUJBQWlCO0FBQ2IsbUJBQVcsU0FERTtBQUViLHlCQUFpQixTQUZKO0FBR2IseUJBQWlCLFNBSEo7QUFJYiwwQkFBa0IsU0FKTDtBQUtiLDBCQUFrQjtBQUxMLE9BSFg7QUFVTixtQkFBYSxHQVZQO0FBWU4saUJBQVcsSUFaTDtBQWFOLHNCQUFnQjtBQUNaLG1CQUFZO0FBREEsT0FiVjtBQWdCTiw2QkFBdUI7QUFDbkIsbUJBQVc7QUFEUSxPQWhCakI7QUFvQk4sZUFBUyxJQXBCSDtBQXFCTixvQkFBYztBQUNWLG1CQUFXO0FBREQsT0FyQlI7QUF3Qk4sNEJBQXNCO0FBQ2xCLG1CQUFXO0FBRE8sT0F4QmhCO0FBNEJOLGNBQVEsSUE1QkY7QUE2Qk4sdUJBQWlCO0FBQ2IsbUJBQVc7QUFERSxPQTdCWDtBQWdDTixzQkFBZ0IsT0FoQ1Y7QUFpQ04sb0NBQThCLElBakN4QjtBQWtDTiwyQ0FBcUMsR0FsQy9CO0FBbUNOLHNCQUFnQixFQW5DVjtBQW9DTix3QkFBa0I7QUFDZCxtQkFBVztBQURHO0FBcENaLEtBTEk7QUE4Q2QsYUFBUztBQUNMLGdCQUFVLEVBREw7QUFFTCxnQkFBVSxjQUZMO0FBR0wsa0JBQVkscUJBSFA7QUFJTCxnQkFBVSxPQUpMO0FBS0wsY0FBUSxZQUxIO0FBTUwsd0JBQWtCLHVCQU5iO0FBUUwsb0JBQWMscUNBUlQ7QUFTTCxxQkFBZSxzQ0FUVjtBQVVMLHNCQUFnQixrQkFWWDtBQVlMLHdCQUFrQixZQVpiO0FBYUwsd0JBQWtCLGVBYmI7QUFjTCxzQkFBZ0I7QUFkWDtBQTlDSyxHQUFoQjs7QUFpRUEsV0FBU0MsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDN0I7QUFDQTtBQUNBLFFBQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsRUFBcUJJLFNBQXJCLEVBQWdDLENBQWhDLEVBQW1DQyxPQUFuQyxDQUEyQyxJQUEzQyxFQUFpRCxNQUFqRCxDQUFmO0FBQ0FWLGdCQUFZLENBQUNPLElBQUksQ0FBQ0ksS0FBTCxDQUFXTCxNQUFYLENBQUQsQ0FBWixDQUo2QixDQUs3QjtBQUVELEdBM0VrQyxDQTZFbkM7OztBQUNBLFdBQVNNLFlBQVQsQ0FBc0JQLElBQXRCLEVBQTRCO0FBQzFCO0FBQ0E7QUFFQUwsZ0JBQVksQ0FBQ08sSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsRUFBcUJJLFNBQXJCLEVBQWdDLENBQWhDLEVBQW1DQyxPQUFuQyxDQUEyQyxJQUEzQyxFQUFpRCxNQUFqRCxDQUFELENBQVo7QUFDRDs7QUFFRCxXQUFTRyxhQUFULENBQXVCUixJQUF2QixFQUE2QjtBQUMzQjtBQUNBLFFBQU1TLFNBQVMsR0FBR1AsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsRUFBcUJJLFNBQXJCLEVBQWdDLENBQWhDLEVBQW1DQyxPQUFuQyxDQUEyQyxJQUEzQyxFQUFpRCxNQUFqRCxDQUFsQixDQUYyQixDQUczQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBU0ssY0FBVCxDQUF3QlYsSUFBeEIsRUFBOEIsQ0FDNUI7QUFDRDs7QUFDRCxXQUFTVyxrQkFBVCxHQUE4QjtBQUM1QixRQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsS0FBVCxFQUFkO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNJLElBQVQsR0FBZ0IsWUFBaEIsR0FBK0JMLEtBQTNDO0FBQ0Q7O0FBRURNLGtEQUFTLENBQUMsWUFBTTtBQUNkTCxZQUFRLENBQUNNLElBQVQsQ0FBY3ZCLEdBQWQsRUFBbUJDLE1BQW5CLEVBQTJCRSxlQUEzQixFQUE0Q1EsWUFBNUMsRUFBMERDLGFBQTFELEVBQXlFRSxjQUF6RSxFQUF5RlosTUFBekYsRUFDR3NCLElBREgsQ0FDUSxZQUFNO0FBQ1ZDLHVEQUFJLENBQUMsb0JBQUQsbUtBQTJELE1BQTNELENBQUosQ0FBdUVELElBQXZFLENBQTRFLFlBQU07QUFDaEZULDBCQUFrQjtBQUNuQixPQUZEO0FBR0QsS0FMSDtBQU1ELEdBUFEsRUFPUCxFQVBPLENBQVQ7QUFTQSxzQkFDRTtBQUFBLDJCQUVFO0FBQUssUUFBRSxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBbkhEOztHQUFNakIsUTs7S0FBQUEsUTtBQXFITiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MTZkM2M0NTQ3OWZiOTA3ZmI4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5jb25zdCBWZXJpTGl2ZSA9ICh7c2V0TGl2ZVBob3RvfSkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9mYWNlLnZlcmlncmFtLmFpL3ZlcmlsaXZlXCJcclxuICBjb25zdCBhcGlLZXkgPSAncHJvY2Vzcy5lbnYuQklPX0tFWSdcclxuICBjb25zdCAgY29uZmlnID0ge1xyXG4gICAgJ3JlY29yZFZpZGVvJzogZmFsc2UsXHJcbiAgICAncm90YXRlZCc6IGZhbHNlLFxyXG4gICAgJ2xhbmcnOiBcInJ1XCIsXHJcblxyXG4gICAgJ3JlbmRlcic6IHtcclxuICAgICAgICAnb3ZhbCc6IHRydWUsXHJcbiAgICAgICAgJ2ZhY2VDb250b3VySW5zdGVhZE9mT3ZhbCc6IHRydWUsXHJcbiAgICAgICAgJ292YWxSaW5nQ29sb3InOiB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogJyNGNUY1NDInLFxyXG4gICAgICAgICAgICAnYWN0aW9uU3VjY2Vzcyc6ICcjMDBGNTAwJyxcclxuICAgICAgICAgICAgJ2FjdGlvbkZhaWx1cmUnOiAnI0Y1MDAwMCcsXHJcbiAgICAgICAgICAgICdzZXNzaW9uU3VjY2Vzcyc6ICcjMDBGNTAwJyxcclxuICAgICAgICAgICAgJ3Nlc3Npb25GYWlsdXJlJzogJyNGNTAwMDAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ292YWxXaWR0aCc6IDEuMCxcclxuXHJcbiAgICAgICAgJ292ZXJsYXknOiB0cnVlLFxyXG4gICAgICAgICdvdmVybGF5Q29sb3InOiB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JyA6ICcjMkY0RjRGJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdvdmVybGF5VHJhbnNwYXJlbmN5Jzoge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IDAuNTUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgJ2Fycm93JzogdHJ1ZSxcclxuICAgICAgICAnYXJyb3dDb2xvcic6IHtcclxuICAgICAgICAgICAgJ2RlZmF1bHQnOiAnI0YwRjBGMCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnYXJyb3dQcm9ncmVzc0NvbG9yJzoge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6ICcjNDA0MDQwJyxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAnaGludCc6IHRydWUsXHJcbiAgICAgICAgJ2hpbnRUZXh0Q29sb3InOiB7XHJcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBcIiNDOEM5Q0NcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgICdoaW50Rm9udFR5cGUnOiBcIkFyaWFsXCIsXHJcbiAgICAgICAgJ2hpbnRVc2VQcm9ncmVzc2l2ZUZvbnRTaXplJzogdHJ1ZSxcclxuICAgICAgICAnaGludFByb2dyZXNzaXZlRm9udFNpemVNdWx0aXBsaWVyJzogMS4wLFxyXG4gICAgICAgICdoaW50Rm9udFNpemUnOiAyNSxcclxuICAgICAgICBcImhpbnRDbG91ZENvbG9yXCI6IHtcclxuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IFwiIzJEMzEyRlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgICdoaW50cyc6IHtcclxuICAgICAgICAnbm9IaW50JzogJycsXHJcbiAgICAgICAgJ25vRmFjZSc6ICfQktCw0YEg0J3QtSDQktC40LTQvdC+JyxcclxuICAgICAgICAnYmFkTGlnaHQnOiBcItCS0YvRgNCw0LLQvdC40YLQtSDQntGB0LLQtdGJ0LXQvdC40LVcIixcclxuICAgICAgICAnY2xvc2VyJzogJ9CR0LvQuNC20LUnLFxyXG4gICAgICAgICdhd2F5JzogJ9Ce0YLQtNCw0LvQuNGC0LXRgdGMJyxcclxuICAgICAgICAnY2xvc2VyVG9DZW50ZXInOiAn0JHQu9C40LbQtSDQuiDQptC10L3RgtGA0YMg0K3QutGA0LDQvdCwJyxcclxuXHJcbiAgICAgICAgJ3RhcmdldExlZnQnOiAn0JzQtdC00LvQtdC90L3QviDQn9C+0LLQvtGA0LDRh9C40LLQsNC50YLQtSDQk9C+0LvQvtCy0YMg0JLQu9C10LLQvicsXHJcbiAgICAgICAgJ3RhcmdldFJpZ2h0JzogJ9Cc0LXQtNC70LXQvdC90L4g0J/QvtCy0L7RgNCw0YfQuNCy0LDQudGC0LUg0JPQvtC70L7QstGDINCS0L/RgNCw0LLQvicsXHJcbiAgICAgICAgJ3RhcmdldENlbnRlcic6ICfQn9C+0YHQvNC+0YLRgNC40YLQtSDQn9GA0Y/QvNC+JyxcclxuXHJcbiAgICAgICAgJ3Nlc3Npb25TdWNjZXNzJzogJ9CS0Ysg0J/RgNC+0YjQu9C4IScsXHJcbiAgICAgICAgJ3Nlc3Npb25GYWlsdXJlJzogJ9CS0Ysg0J3QtSDQn9GA0L7RiNC70LghJyxcclxuICAgICAgICAnc2Vzc2lvbkVycm9yJzogJ9Cf0YDQvtC40LfQvtGI0LvQsCDQutCw0LrQsNGPLdGC0L4g0L7RiNC40LHQutCwLiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQv9C10YDQtdC30LDQv9GD0YHRgtC40YLRjCcsXHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzdWNjZXNzQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgLy8gRS5nLiBTaG93IHJlc3VsdHMgdG8gdXNlclxyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzXCIpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIHVuZGVmaW5lZCwgMikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XHJcbiAgICBjb25zdCByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXHJcbiAgICBzZXRMaXZlUGhvdG8oSlNPTi5wYXJzZShyZXN1bHQpKVxyXG4gICAgLy8gY29va2llLnNldCgnbGl2ZXBob3RvJywgSlNPTi5wYXJzZShyZXN1bHQpLmJlc3RGcmFtZSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIEZhaWx1cmUgVmVyaUxpdmUganNvbiByZXN1bHRzXHJcbiAgZnVuY3Rpb24gZmFpbENhbGxiYWNrKGRhdGEpIHtcclxuICAgIC8vIEUuZy4gU2hvdyB0byB1c2VyLCBzYXkgdG8gcmV0cnkgYWdhaW5cclxuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKS5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xyXG5cclxuICAgIHNldExpdmVQaG90byhKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXJyb3JDYWxsYmFjayhkYXRhKSB7XHJcbiAgICAvLyBFLmcuIFNob3cgdG8gdXNlciwgc2F5IHRvIHJldHJ5IGFnYWluXHJcbiAgICBjb25zdCBiYXNlNjRpbWcgPSBKU09OLnN0cmluZ2lmeShkYXRhLCB1bmRlZmluZWQsIDIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xyXG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRzXCIpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIHVuZGVmaW5lZCwgMikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XHJcbiAgICAvLyBzZXRMaXZlUGhvdG8oZGF0YVVSTHRvRmlsZShiYXNlNjRpbWcpKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlQ2FsbGJhY2soZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9uU3RhcnRCdXR0b25DbGljaygpIHtcclxuICAgIGNvbnN0IHRva2VuID0gdmVyaWxpdmUuc3RhcnQoKTtcclxuICAgIGNvbnNvbGUubG9nKHZlcmlsaXZlLm5hbWUgKyAnOiBUb2tlbiAtICcgKyB0b2tlbik7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmVyaWxpdmUuaW5pdCh1cmwsIGFwaUtleSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2ssIHVwZGF0ZUNhbGxiYWNrLCBjb25maWcpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBzd2FsKFwi0J/RgNC+0LLQtdGA0LrQsCAn0LbQuNCy0L7RgdGC0LgnXCIsIGDQldGB0LvQuCDQstGLINCz0L7RgtC+0LLRiyDQvdCw0LbQvNC40YLQtSDQutC90L7Qv9C60YMgT0tgLCBcImluZm9cIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBvblN0YXJ0QnV0dG9uQ2xpY2soKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPSdjaGVjaycgb25DbGljaz17KCkgPT4gY2hlY2tCdXR0b24oKX0+PC9idXR0b24+ICovfVxyXG4gICAgICA8ZGl2IGlkPVwiaWRfdmVyaWxpdmVcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyaUxpdmU7Il0sInNvdXJjZVJvb3QiOiIifQ==