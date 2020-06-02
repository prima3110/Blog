webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Loader/Loader.styled.ts":
/*!********************************************!*\
  !*** ./components/Loader/Loader.styled.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    z-index: 101;\n    background-color: rgba(255, 107, 8, 0.1);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var LoaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyles);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Loader/Loader.tsx":
/*!**************************************!*\
  !*** ./components/Loader/Loader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.styled */ "./components/Loader/Loader.styled.ts");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\Loader\\Loader.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Loader = function Loader() {
  return __jsx(_Loader_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "Puff",
    color: "#00BFFF",
    height: 100,
    width: 100,
    timeout: 3000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), ";");
};

_c = Loader;
/* harmony default export */ __webpack_exports__["default"] = (Loader);

var _c;

$RefreshReg$(_c, "Loader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! ./loader */ "./node_modules/react-loader-spinner/dist/loader/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _loader) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Loader;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var componentNames = ["Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "TailSpin", "ThreeDots", "Watch", "RevolvingDot", "Triangle", "Plane", "MutatingDots", "CradleLoader"];

  function componentName(type) {
    if (componentNames.includes(type)) {
      return _loader.Spinner[type];
    }
    return _loader.Spinner.Audio;
  }

  /**
   * @return {null}
   */
  function Loader(props) {
    var _useState = (0, _react.useState)(true),
        _useState2 = _slicedToArray(_useState, 2),
        display = _useState2[0],
        setDisplay = _useState2[1];

    (0, _react.useEffect)(function () {
      var timer = void 0;
      if (props.timeout && props.timeout > 0) {
        timer = setTimeout(function () {
          setDisplay(false);
        }, props.timeout);
      }

      return function () {
        if (timer) clearTimeout(timer);
      };
    });

    if (!props.visible || props.visible === "false") {
      return null;
    }
    return display ? _react2.default.createElement(
      "div",
      { "aria-busy": "true", className: props.className, style: props.style },
      _react2.default.createElement(componentName(props.type), _extends({}, props))
    ) : null;
  }

  Loader.propTypes = {
    type: _propTypes2.default.oneOf([].concat(componentNames)),
    style: _propTypes2.default.objectOf(_propTypes2.default.string),
    className: _propTypes2.default.string,
    visible: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    timeout: _propTypes2.default.number
  };

  Loader.defaultProps = {
    type: "Audio",
    style: {},
    className: "",
    visible: true,
    timeout: 0
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Audio.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Audio.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Audio = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Audio = exports.Audio = function Audio(props) {
    return _react2.default.createElement(
      "svg",
      {
        height: props.height,
        width: props.width,
        fill: props.color,
        viewBox: "0 0 55 80",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { transform: "matrix(1 0 0 -1 0 80)" },
        _react2.default.createElement(
          "rect",
          { width: "10", height: "20", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "4.3s",
            values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "15", width: "10", height: "80", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "2s",
            values: "80;55;33;5;75;23;73;33;12;14;60;80",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "30", width: "10", height: "50", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "1.4s",
            values: "50;34;78;23;56;23;34;76;80;54;21;50",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "rect",
          { x: "45", width: "10", height: "30", rx: "3" },
          _react2.default.createElement("animate", {
            attributeName: "height",
            begin: "0s",
            dur: "2s",
            values: "30;45;13;80;56;72;45;76;34;23;67;30",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };

  Audio.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Audio.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/BallTriangle.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BallTriangle = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var BallTriangle = exports.BallTriangle = function BallTriangle(props) {
    return _react2.default.createElement(
      "svg",
      {
        height: props.height,
        width: props.width,
        stroke: props.color,
        viewBox: "0 0 57 57",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: "2" },
          _react2.default.createElement(
            "circle",
            { cx: "5", cy: "50", r: props.radius },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              values: "50;5;50;50",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              begin: "0s",
              dur: "2.2s",
              values: "5;27;49;5",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { cx: "27", cy: "5", r: props.radius },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              from: "5",
              to: "5",
              values: "5;50;50;5",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              begin: "0s",
              dur: "2.2s",
              from: "27",
              to: "27",
              values: "27;49;5;27",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { cx: "49", cy: "50", r: props.radius },
            _react2.default.createElement("animate", {
              attributeName: "cy",
              begin: "0s",
              dur: "2.2s",
              values: "50;50;5;50",
              calcMode: "linear",
              repeatCount: "indefinite"
            }),
            _react2.default.createElement("animate", {
              attributeName: "cx",
              from: "49",
              to: "49",
              begin: "0s",
              dur: "2.2s",
              values: "49;5;27;49",
              calcMode: "linear",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };

  BallTriangle.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  BallTriangle.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    radius: 5,
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Bars.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Bars.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Bars = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Bars = exports.Bars = function Bars(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        fill: props.color,
        viewBox: "0 0 135 140",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "rect",
        { y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "30", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "60", width: "15", height: "140", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "90", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.25s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.25s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "rect",
        { x: "120", y: "10", width: "15", height: "120", rx: "6" },
        _react2.default.createElement("animate", {
          attributeName: "height",
          begin: "0.5s",
          dur: "1s",
          values: "120;110;100;90;80;70;60;50;40;140;120",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "y",
          begin: "0.5s",
          dur: "1s",
          values: "10;15;20;25;30;35;40;45;50;0;10",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };

  Bars.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Bars.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Circles.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Circles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Circles = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Circles = exports.Circles = function Circles(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 135 135",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "path",
        { d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "-360 67 67",
          dur: "2.5s",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "path",
        { d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          from: "0 67 67",
          to: "360 67 67",
          dur: "8s",
          repeatCount: "indefinite"
        })
      )
    );
  };

  Circles.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Circles.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/CradleLoader.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CradleLoader = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var CradleLoader = exports.CradleLoader = function CradleLoader(props) {
    return _react2.default.createElement(
      "div",
      { "aria-label": props.label, role: "presentation", className: "container" },
      _react2.default.createElement(
        "div",
        { className: "react-spinner-loader-swing" },
        _react2.default.createElement("div", { className: "react-spinner-loader-swing-l" }),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", { className: "react-spinner-loader-swing-r" })
      ),
      _react2.default.createElement(
        "div",
        { className: "react-spinner-loader-shadow" },
        _react2.default.createElement("div", { className: "react-spinner-loader-shadow-l" }),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", null),
        _react2.default.createElement("div", { className: "react-spinner-loader-shadow-r" })
      )
    );
  };

  CradleLoader.propTypes = {
    label: _propTypes2.default.string
  };

  CradleLoader.defaultProps = {
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Grid.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Grid.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Grid = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Grid = exports.Grid = function Grid(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 105 105",
        fill: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "12.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "52.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "100ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "12.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "300ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "52.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "600ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "12.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "800ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "52.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "400ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "12.5", cy: "92.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "700ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "52.5", cy: "92.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "500ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "92.5", cy: "92.5", r: props.radius },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "200ms",
          dur: "1s",
          values: "1;.2;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };

  Grid.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Grid.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    radius: 12.5,
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Hearts.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Hearts.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hearts = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Hearts = exports.Hearts = function Hearts(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 140 64",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "path",
        {
          d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
          attributeName: "fill-opacity",
          from: "0",
          to: ".5"
        },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "path",
        {
          d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
          attributeName: "fill-opacity",
          from: "0",
          to: ".5"
        },
        _react2.default.createElement("animate", {
          attributeName: "fill-opacity",
          begin: "0.7s",
          dur: "1.4s",
          values: "0.5;1;0.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })
    );
  };

  Hearts.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Hearts.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/MutatingDots.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MutatingDots = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var MutatingDots = exports.MutatingDots = function MutatingDots(props) {
    return _react2.default.createElement(
      "svg",
      { id: "goo-loader", width: props.width, height: props.height, "aria-label": props.label },
      _react2.default.createElement(
        "filter",
        { id: "fancy-goo" },
        _react2.default.createElement("feGaussianBlur", { "in": "SourceGraphic", stdDeviation: "6", result: "blur" }),
        _react2.default.createElement("feColorMatrix", {
          "in": "blur",
          mode: "matrix",
          values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
          result: "goo"
        }),
        _react2.default.createElement("feComposite", { "in": "SourceGraphic", in2: "goo", operator: "atop" })
      ),
      _react2.default.createElement(
        "g",
        { filter: "url(#fancy-goo)" },
        _react2.default.createElement("animateTransform", {
          id: "mainAnim",
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          from: "0 50 50",
          to: "359 50 50",
          dur: "1.2s",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement(
          "circle",
          { cx: "50%", cy: "40", r: props.radius, fill: props.color },
          _react2.default.createElement("animate", {
            id: "cAnim1",
            attributeType: "XML",
            attributeName: "cy",
            dur: "0.6s",
            begin: "0;cAnim1.end+0.2s",
            calcMode: "spline",
            values: "40;20;40",
            keyTimes: "0;0.3;1",
            keySplines: "0.175, 0.885, 0.320, 1.5; 0.175, 0.885, 0.320, 1.5"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "50%", cy: "60", r: props.radius, fill: props.secondaryColor },
          _react2.default.createElement("animate", {
            id: "cAnim2",
            attributeType: "XML",
            attributeName: "cy",
            dur: "0.6s",
            begin: "0.4s;cAnim2.end+0.2s",
            calcMode: "spline",
            values: "60;80;60",
            keyTimes: "0;0.3;1",
            keySplines: "0.175, 0.885, 0.320, 1.5;0.175, 0.885, 0.320, 1.5"
          })
        )
      )
    );
  };

  MutatingDots.propTypes = {
    width: _propTypes2.default.number,
    secondaryColor: _propTypes2.default.string,
    height: _propTypes2.default.number,
    color: _propTypes2.default.string,
    radius: _propTypes2.default.number,
    label: _propTypes2.default.string
  };

  MutatingDots.defaultProps = {
    width: 80,
    height: 90,
    color: "green",
    radius: 11,
    secondaryColor: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Oval.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Oval.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Oval = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Oval = exports.Oval = function Oval(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)", strokeWidth: "2" },
          _react2.default.createElement("circle", { strokeOpacity: ".5", cx: "18", cy: "18", r: props.radius }),
          _react2.default.createElement(
            "path",
            { d: "M36 18c0-9.94-8.06-18-18-18" },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "1s",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };

  Oval.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Oval.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 18
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Plane.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Plane.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Plane = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Plane = exports.Plane = function Plane(props) {
    return _react2.default.createElement(
      "svg",
      {
        className: "react-spinner-loader-svg-calLoader",
        xmlns: "http://www.w3.org/2000/svg",
        width: "230",
        height: "230",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "desc",
        null,
        "Plane animation. Loading "
      ),
      _react2.default.createElement("path", {
        className: "react-spinner-loader-cal-loader__path",
        style: { stroke: props.secondaryColor },
        d: "M86.429 40c63.616-20.04 101.511 25.08 107.265 61.93 6.487 41.54-18.593 76.99-50.6 87.643-59.46 19.791-101.262-23.577-107.142-62.616C29.398 83.441 59.945 48.343 86.43 40z",
        fill: "none",
        stroke: "#0099cc",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "10 10 10 10 10 10 10 432",
        strokeDashoffset: "77"
      }),
      _react2.default.createElement("path", {
        className: "cal-loader__plane",
        style: { fill: props.color },
        d: "M141.493 37.93c-1.087-.927-2.942-2.002-4.32-2.501-2.259-.824-3.252-.955-9.293-1.172-4.017-.146-5.197-.23-5.47-.37-.766-.407-1.526-1.448-7.114-9.773-4.8-7.145-5.344-7.914-6.327-8.976-1.214-1.306-1.396-1.378-3.79-1.473-1.036-.04-2-.043-2.153-.002-.353.1-.87.586-1 .952-.139.399-.076.71.431 2.22.241.72 1.029 3.386 1.742 5.918 1.644 5.844 2.378 8.343 2.863 9.705.206.601.33 1.1.275 1.125-.24.097-10.56 1.066-11.014 1.032a3.532 3.532 0 0 1-1.002-.276l-.487-.246-2.044-2.613c-2.234-2.87-2.228-2.864-3.35-3.309-.717-.287-2.82-.386-3.276-.163-.457.237-.727.644-.737 1.152-.018.39.167.805 1.916 4.373 1.06 2.166 1.964 4.083 1.998 4.27.04.179.004.521-.076.75-.093.228-1.109 2.064-2.269 4.088-1.921 3.34-2.11 3.711-2.123 4.107-.008.25.061.557.168.725.328.512.72.644 1.966.676 1.32.029 2.352-.236 3.05-.762.222-.171 1.275-1.313 2.412-2.611 1.918-2.185 2.048-2.32 2.45-2.505.241-.111.601-.232.82-.271.267-.058 2.213.201 5.912.8 3.036.48 5.525.894 5.518.914 0 .026-.121.306-.27.638-.54 1.198-1.515 3.842-3.35 9.021-1.029 2.913-2.107 5.897-2.4 6.62-.703 1.748-.725 1.833-.594 2.286.137.46.45.833.872 1.012.41.177 3.823.24 4.37.085.852-.25 1.44-.688 2.312-1.724 1.166-1.39 3.169-3.948 6.771-8.661 5.8-7.583 6.561-8.49 7.387-8.702.233-.065 2.828-.056 5.784.011 5.827.138 6.64.09 8.62-.5 2.24-.67 4.035-1.65 5.517-3.016 1.136-1.054 1.135-1.014.207-1.962-.357-.38-.767-.777-.902-.893z",
        fill: "#000033"
      })
    );
  };

  Plane.propTypes = {
    secondaryColor: _propTypes2.default.string,
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Plane.defaultProps = {
    secondaryColor: "grey",
    color: "#FFA500",
    label: "async-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Puff.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Puff.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Puff = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Puff = exports.Puff = function Puff(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 44 44",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "0s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 20",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.165, 0.84, 0.44, 1",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "-0.9s",
            dur: "1.8s",
            values: "1; 0",
            calcMode: "spline",
            keyTimes: "0; 1",
            keySplines: "0.3, 0.61, 0.355, 1",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };

  Puff.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Puff.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 1
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RevolvingDot = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var RevolvingDot = exports.RevolvingDot = function RevolvingDot(props) {
    return _react2.default.createElement(
      "svg",
      {
        version: "1.1",
        width: props.width,
        height: props.height,
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        "aria-label": props.label
      },
      _react2.default.createElement("circle", {
        fill: "none",
        stroke: props.color,
        strokeWidth: "4",
        cx: "50",
        cy: "50",
        r: props.radius + 38,
        style: { opacity: 0.5 }
      }),
      _react2.default.createElement(
        "circle",
        { fill: props.color, stroke: props.color, strokeWidth: "3", cx: "8", cy: "54", r: props.radius },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "2s",
          type: "rotate",
          from: "0 50 48",
          to: "360 50 52",
          repeatCount: "indefinite"
        })
      )
    );
  };

  RevolvingDot.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  RevolvingDot.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 6
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Rings.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Rings.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Rings = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Rings = exports.Rings = function Rings(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 45 45",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd", transform: "translate(1 1)", strokeWidth: "2" },
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius, strokeOpacity: "0" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "1.5s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "stroke-opacity",
            begin: "1.5s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "stroke-width",
            begin: "1.5s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius, strokeOpacity: "0" },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "3s",
            dur: "3s",
            values: "6;22",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeOpacity",
            begin: "3s",
            dur: "3s",
            values: "1;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          }),
          _react2.default.createElement("animate", {
            attributeName: "strokeWidth",
            begin: "3s",
            dur: "3s",
            values: "2;0",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        ),
        _react2.default.createElement(
          "circle",
          { cx: "22", cy: "22", r: props.radius + 2 },
          _react2.default.createElement("animate", {
            attributeName: "r",
            begin: "0s",
            dur: "1.5s",
            values: "6;1;2;3;4;5;6",
            calcMode: "linear",
            repeatCount: "indefinite"
          })
        )
      )
    );
  };

  Rings.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Rings.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    radius: 6,
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/TailSpin.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TailSpin = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TailSpin = exports.TailSpin = function TailSpin(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-label": props.label
      },
      _react2.default.createElement(
        "defs",
        null,
        _react2.default.createElement(
          "linearGradient",
          { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
          _react2.default.createElement("stop", { stopColor: props.color, stopOpacity: "0", offset: "0%" }),
          _react2.default.createElement("stop", { stopColor: props.color, stopOpacity: ".631", offset: "63.146%" }),
          _react2.default.createElement("stop", { stopColor: props.color, offset: "100%" })
        )
      ),
      _react2.default.createElement(
        "g",
        { fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "g",
          { transform: "translate(1 1)" },
          _react2.default.createElement(
            "path",
            { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: props.color, strokeWidth: "2" },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            })
          ),
          _react2.default.createElement(
            "circle",
            { fill: "#fff", cx: "36", cy: "18", r: props.radius },
            _react2.default.createElement("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              from: "0 18 18",
              to: "360 18 18",
              dur: "0.9s",
              repeatCount: "indefinite"
            })
          )
        )
      )
    );
  };

  TailSpin.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  TailSpin.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    radius: 1,
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/ThreeDots.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ThreeDots = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ThreeDots = exports.ThreeDots = function ThreeDots(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        viewBox: "0 0 120 30",
        xmlns: "http://www.w3.org/2000/svg",
        fill: props.color,
        "aria-label": props.label
      },
      _react2.default.createElement(
        "circle",
        { cx: "15", cy: "15", r: props.radius + 6 },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        {
          cx: "60",
          cy: "15",
          r: props.radius,
          attributeName: "fillOpacity",
          from: "1",
          to: "0.3"
        },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "9",
          to: "9",
          begin: "0s",
          dur: "0.8s",
          values: "9;15;9",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "0.5",
          to: "0.5",
          begin: "0s",
          dur: "0.8s",
          values: ".5;1;.5",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "circle",
        { cx: "105", cy: "15", r: props.radius + 6 },
        _react2.default.createElement("animate", {
          attributeName: "r",
          from: "15",
          to: "15",
          begin: "0s",
          dur: "0.8s",
          values: "15;9;15",
          calcMode: "linear",
          repeatCount: "indefinite"
        }),
        _react2.default.createElement("animate", {
          attributeName: "fillOpacity",
          from: "1",
          to: "1",
          begin: "0s",
          dur: "0.8s",
          values: "1;.5;1",
          calcMode: "linear",
          repeatCount: "indefinite"
        })
      )
    );
  };

  ThreeDots.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  ThreeDots.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 9
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Triangle.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Triangle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Triangle = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Triangle = exports.Triangle = function Triangle(props) {
    return _react2.default.createElement(
      "div",
      { className: "react-spinner-loader-svg" },
      _react2.default.createElement(
        "svg",
        {
          id: "triangle",
          width: props.width,
          height: props.height,
          viewBox: "-3 -4 39 39",
          "aria-label": props.label
        },
        _react2.default.createElement("polygon", { fill: "transparent", stroke: props.color, strokeWidth: "1", points: "16,0 32,32 0,32" })
      )
    );
  };

  Triangle.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  Triangle.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading"
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/Watch.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/Watch.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Watch = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Watch = exports.Watch = function Watch(props) {
    return _react2.default.createElement(
      "svg",
      {
        width: props.width,
        height: props.height,
        version: "1.1",
        id: "L2",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        enableBackground: "new 0 0 100 100",
        xmlSpace: "preserve",
        "aria-label": props.label
      },
      _react2.default.createElement("circle", {
        fill: "none",
        stroke: props.color,
        strokeWidth: "4",
        strokeMiterlimit: "10",
        cx: "50",
        cy: "50",
        r: props.radius
      }),
      _react2.default.createElement(
        "line",
        {
          fill: "none",
          strokeLinecap: "round",
          stroke: props.color,
          strokeWidth: "4",
          strokeMiterlimit: "10",
          x1: "50",
          y1: "50",
          x2: "85",
          y2: "50.5"
        },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "2s",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite"
        })
      ),
      _react2.default.createElement(
        "line",
        {
          fill: "none",
          strokeLinecap: "round",
          stroke: props.color,
          strokeWidth: "4",
          strokeMiterlimit: "10",
          x1: "50",
          y1: "50",
          x2: "49.5",
          y2: "74"
        },
        _react2.default.createElement("animateTransform", {
          attributeName: "transform",
          dur: "15s",
          type: "rotate",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite"
        })
      )
    );
  };

  Watch.propTypes = {
    height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    color: _propTypes2.default.string,
    label: _propTypes2.default.string,
    radius: _propTypes2.default.number
  };

  Watch.defaultProps = {
    height: 80,
    width: 80,
    color: "green",
    label: "audio-loading",
    radius: 48
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/loader/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/loader/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Circles */ "./node_modules/react-loader-spinner/dist/loader/Circles.js"), __webpack_require__(/*! ./Watch */ "./node_modules/react-loader-spinner/dist/loader/Watch.js"), __webpack_require__(/*! ./Audio */ "./node_modules/react-loader-spinner/dist/loader/Audio.js"), __webpack_require__(/*! ./BallTriangle */ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js"), __webpack_require__(/*! ./Bars */ "./node_modules/react-loader-spinner/dist/loader/Bars.js"), __webpack_require__(/*! ./CradleLoader */ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js"), __webpack_require__(/*! ./Grid */ "./node_modules/react-loader-spinner/dist/loader/Grid.js"), __webpack_require__(/*! ./Hearts */ "./node_modules/react-loader-spinner/dist/loader/Hearts.js"), __webpack_require__(/*! ./MutatingDots */ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js"), __webpack_require__(/*! ./Oval */ "./node_modules/react-loader-spinner/dist/loader/Oval.js"), __webpack_require__(/*! ./Plane */ "./node_modules/react-loader-spinner/dist/loader/Plane.js"), __webpack_require__(/*! ./Puff */ "./node_modules/react-loader-spinner/dist/loader/Puff.js"), __webpack_require__(/*! ./RevolvingDot */ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js"), __webpack_require__(/*! ./Rings */ "./node_modules/react-loader-spinner/dist/loader/Rings.js"), __webpack_require__(/*! ./TailSpin */ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js"), __webpack_require__(/*! ./ThreeDots */ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js"), __webpack_require__(/*! ./Triangle */ "./node_modules/react-loader-spinner/dist/loader/Triangle.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _Circles, _Watch, _Audio, _BallTriangle, _Bars, _CradleLoader, _Grid, _Hearts, _MutatingDots, _Oval, _Plane, _Puff, _RevolvingDot, _Rings, _TailSpin, _ThreeDots, _Triangle) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Spinner = undefined;
  var Spinner = exports.Spinner = {
    Circles: _Circles.Circles,
    Audio: _Audio.Audio,
    BallTriangle: _BallTriangle.BallTriangle,
    Bars: _Bars.Bars,
    CradleLoader: _CradleLoader.CradleLoader,
    Grid: _Grid.Grid,
    Hearts: _Hearts.Hearts,
    MutatingDots: _MutatingDots.MutatingDots,
    Oval: _Oval.Oval,
    Plane: _Plane.Plane,
    Puff: _Puff.Puff,
    RevolvingDot: _RevolvingDot.RevolvingDot,
    Rings: _Rings.Rings,
    TailSpin: _TailSpin.TailSpin,
    ThreeDots: _ThreeDots.ThreeDots,
    Triangle: _Triangle.Triangle,
    Watch: _Watch.Watch
  };
});

/***/ }),

/***/ "./node_modules/react-loader-spinner/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-loader-spinner/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/react-loader-spinner/dist/index.js");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostsList_PostsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostsList/PostsList */ "./components/PostsList/PostsList.tsx");
/* harmony import */ var _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/blog/blogSelectors */ "./redux/blog/blogSelectors.ts");
/* harmony import */ var _redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/blog/blogOperations */ "./redux/blog/blogOperations.ts");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loader/Loader */ "./components/Loader/Loader.tsx");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var App = function App(_ref) {
  _s();

  var posts = _ref.posts,
      getPosts = _ref.getPosts,
      isLoading = _ref.isLoading;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPosts();
  }, [getPosts]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 27
    }
  }), posts && __jsx(_components_PostsList_PostsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: posts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 23
    }
  }));
};

_s(App, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = App;

var mapStateToProps = function mapStateToProps(store) {
  return {
    posts: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_3__["getPosts"](store),
    isLoading: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_3__["getLoader"](store)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPosts: function getPosts() {
      return dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_4__["getPosts"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuc3R5bGVkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0F1ZGlvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9CYWxsVHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0JhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0NpcmNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL0NyYWRsZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvSGVhcnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9NdXRhdGluZ0RvdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL092YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL1BsYW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9QdWZmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9SZXZvbHZpbmdEb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL1JpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9UYWlsU3Bpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvVGhyZWVEb3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9kaXN0L2xvYWRlci9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbG9hZGVyLXNwaW5uZXIvZGlzdC9sb2FkZXIvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxvYWRlci1zcGlubmVyL2Rpc3QvbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sb2FkZXItc3Bpbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTG9hZGVyU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiTG9hZGVyIiwiQXBwIiwicG9zdHMiLCJnZXRQb3N0cyIsImlzTG9hZGluZyIsInVzZUVmZmVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiYmxvZ1NlbGVjdG9ycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmxvZ09wZXJhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ0wsU0FBSyxFQUFFTSxrRUFBQSxDQUF1QkQsS0FBdkIsQ0FEeUI7QUFFaENILGFBQVMsRUFBRUksbUVBQUEsQ0FBd0JELEtBQXhCO0FBRnFCLEdBQVo7QUFBQSxDQUF4Qjs7QUFLQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3RDUCxZQUFRLEVBQUU7QUFBQSxhQUFZTyxRQUFRLENBQUNDLG1FQUFBLEVBQUQsQ0FBcEI7QUFBQTtBQUQ0QixHQUFmO0FBQUEsQ0FBM0I7O0FBSWVDLDBIQUFPLENBQUNOLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDUixHQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lNDkwMTZiM2MxMGJjY2Y3MTFhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExvYWRlclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTA3LCA4LCAwLjEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclN0eWxlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XG5pbXBvcnQgTG9hZGVyU3R5bGVzIGZyb20gJy4vTG9hZGVyLnN0eWxlZCc7XG5cbmNvbnN0IExvYWRlciA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRlclN0eWxlcz5cbiAgICAgICAgICAgIDxTcGlubmVyIHR5cGU9XCJQdWZmXCIgY29sb3I9XCIjMDBCRkZGXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IHRpbWVvdXQ9ezMwMDB9IC8+O1xuICAgICAgICA8L0xvYWRlclN0eWxlcz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIiwgXCIuL2xvYWRlclwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIiksIHJlcXVpcmUoXCIuL2xvYWRlclwiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMsIGdsb2JhbC5sb2FkZXIpO1xuICAgIGdsb2JhbC5pbmRleCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzLCBfbG9hZGVyKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICB2YXIgX3NsaWNlZFRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICAgIHZhciBfYXJyID0gW107XG4gICAgICB2YXIgX24gPSB0cnVlO1xuICAgICAgdmFyIF9kID0gZmFsc2U7XG4gICAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2QgPSB0cnVlO1xuICAgICAgICBfZSA9IGVycjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfYXJyO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgICB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkge1xuICAgICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgICB9XG4gICAgfTtcbiAgfSgpO1xuXG4gIHZhciBjb21wb25lbnROYW1lcyA9IFtcIkF1ZGlvXCIsIFwiQmFsbFRyaWFuZ2xlXCIsIFwiQmFyc1wiLCBcIkNpcmNsZXNcIiwgXCJHcmlkXCIsIFwiSGVhcnRzXCIsIFwiT3ZhbFwiLCBcIlB1ZmZcIiwgXCJSaW5nc1wiLCBcIlRhaWxTcGluXCIsIFwiVGhyZWVEb3RzXCIsIFwiV2F0Y2hcIiwgXCJSZXZvbHZpbmdEb3RcIiwgXCJUcmlhbmdsZVwiLCBcIlBsYW5lXCIsIFwiTXV0YXRpbmdEb3RzXCIsIFwiQ3JhZGxlTG9hZGVyXCJdO1xuXG4gIGZ1bmN0aW9uIGNvbXBvbmVudE5hbWUodHlwZSkge1xuICAgIGlmIChjb21wb25lbnROYW1lcy5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgcmV0dXJuIF9sb2FkZXIuU3Bpbm5lclt0eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIF9sb2FkZXIuU3Bpbm5lci5BdWRpbztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudWxsfVxuICAgKi9cbiAgZnVuY3Rpb24gTG9hZGVyKHByb3BzKSB7XG4gICAgdmFyIF91c2VTdGF0ZSA9ICgwLCBfcmVhY3QudXNlU3RhdGUpKHRydWUpLFxuICAgICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgICAgZGlzcGxheSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICAgIHNldERpc3BsYXkgPSBfdXNlU3RhdGUyWzFdO1xuXG4gICAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aW1lciA9IHZvaWQgMDtcbiAgICAgIGlmIChwcm9wcy50aW1lb3V0ICYmIHByb3BzLnRpbWVvdXQgPiAwKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2V0RGlzcGxheShmYWxzZSk7XG4gICAgICAgIH0sIHByb3BzLnRpbWVvdXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKCFwcm9wcy52aXNpYmxlIHx8IHByb3BzLnZpc2libGUgPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5ID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBcImFyaWEtYnVzeVwiOiBcInRydWVcIiwgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsIHN0eWxlOiBwcm9wcy5zdHlsZSB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50TmFtZShwcm9wcy50eXBlKSwgX2V4dGVuZHMoe30sIHByb3BzKSlcbiAgICApIDogbnVsbDtcbiAgfVxuXG4gIExvYWRlci5wcm9wVHlwZXMgPSB7XG4gICAgdHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbXS5jb25jYXQoY29tcG9uZW50TmFtZXMpKSxcbiAgICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RPZihfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyksXG4gICAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICB2aXNpYmxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLFxuICAgIHRpbWVvdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH07XG5cbiAgTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiBcIkF1ZGlvXCIsXG4gICAgc3R5bGU6IHt9LFxuICAgIGNsYXNzTmFtZTogXCJcIixcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIHRpbWVvdXQ6IDBcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5BdWRpbyA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLkF1ZGlvID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBBdWRpbyA9IGV4cG9ydHMuQXVkaW8gPSBmdW5jdGlvbiBBdWRpbyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCA1NSA4MFwiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIHsgdHJhbnNmb3JtOiBcIm1hdHJpeCgxIDAgMCAtMSAwIDgwKVwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwicmVjdFwiLFxuICAgICAgICAgIHsgd2lkdGg6IFwiMTBcIiwgaGVpZ2h0OiBcIjIwXCIsIHJ4OiBcIjNcIiB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgIGR1cjogXCI0LjNzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiMjA7NDU7NTc7ODA7NjQ7MzI7NjY7NDU7NjQ7MjM7NjY7MTM7NjQ7NTY7MzQ7MzQ7MjsyMzs3Njs3OTsyMFwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcInJlY3RcIixcbiAgICAgICAgICB7IHg6IFwiMTVcIiwgd2lkdGg6IFwiMTBcIiwgaGVpZ2h0OiBcIjgwXCIsIHJ4OiBcIjNcIiB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgIGR1cjogXCIyc1wiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjgwOzU1OzMzOzU7NzU7MjM7NzM7MzM7MTI7MTQ7NjA7ODBcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgXCJyZWN0XCIsXG4gICAgICAgICAgeyB4OiBcIjMwXCIsIHdpZHRoOiBcIjEwXCIsIGhlaWdodDogXCI1MFwiLCByeDogXCIzXCIgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJoZWlnaHRcIixcbiAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICBkdXI6IFwiMS40c1wiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjUwOzM0Ozc4OzIzOzU2OzIzOzM0Ozc2OzgwOzU0OzIxOzUwXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwicmVjdFwiLFxuICAgICAgICAgIHsgeDogXCI0NVwiLCB3aWR0aDogXCIxMFwiLCBoZWlnaHQ6IFwiMzBcIiwgcng6IFwiM1wiIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgICAgZHVyOiBcIjJzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiMzA7NDU7MTM7ODA7NTY7NzI7NDU7NzY7MzQ7MjM7Njc7MzBcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgQXVkaW8ucHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICB9O1xuXG4gIEF1ZGlvLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLkJhbGxUcmlhbmdsZSA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLkJhbGxUcmlhbmdsZSA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgQmFsbFRyaWFuZ2xlID0gZXhwb3J0cy5CYWxsVHJpYW5nbGUgPSBmdW5jdGlvbiBCYWxsVHJpYW5nbGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBzdHJva2U6IHByb3BzLmNvbG9yLFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCA1NyA1N1wiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJnXCIsXG4gICAgICAgIHsgZmlsbDogXCJub25lXCIsIGZpbGxSdWxlOiBcImV2ZW5vZGRcIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImdcIixcbiAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMSAxKVwiLCBzdHJva2VXaWR0aDogXCIyXCIgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgICB7IGN4OiBcIjVcIiwgY3k6IFwiNTBcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImN5XCIsXG4gICAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICAgIGR1cjogXCIyLjJzXCIsXG4gICAgICAgICAgICAgIHZhbHVlczogXCI1MDs1OzUwOzUwXCIsXG4gICAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJjeFwiLFxuICAgICAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgICAgICBkdXI6IFwiMi4yc1wiLFxuICAgICAgICAgICAgICB2YWx1ZXM6IFwiNTsyNzs0OTs1XCIsXG4gICAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgICB7IGN4OiBcIjI3XCIsIGN5OiBcIjVcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImN5XCIsXG4gICAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICAgIGR1cjogXCIyLjJzXCIsXG4gICAgICAgICAgICAgIGZyb206IFwiNVwiLFxuICAgICAgICAgICAgICB0bzogXCI1XCIsXG4gICAgICAgICAgICAgIHZhbHVlczogXCI1OzUwOzUwOzVcIixcbiAgICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImN4XCIsXG4gICAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICAgIGR1cjogXCIyLjJzXCIsXG4gICAgICAgICAgICAgIGZyb206IFwiMjdcIixcbiAgICAgICAgICAgICAgdG86IFwiMjdcIixcbiAgICAgICAgICAgICAgdmFsdWVzOiBcIjI3OzQ5OzU7MjdcIixcbiAgICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgICAgIHsgY3g6IFwiNDlcIiwgY3k6IFwiNTBcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImN5XCIsXG4gICAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICAgIGR1cjogXCIyLjJzXCIsXG4gICAgICAgICAgICAgIHZhbHVlczogXCI1MDs1MDs1OzUwXCIsXG4gICAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJjeFwiLFxuICAgICAgICAgICAgICBmcm9tOiBcIjQ5XCIsXG4gICAgICAgICAgICAgIHRvOiBcIjQ5XCIsXG4gICAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICAgIGR1cjogXCIyLjJzXCIsXG4gICAgICAgICAgICAgIHZhbHVlczogXCI0OTs1OzI3OzQ5XCIsXG4gICAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBCYWxsVHJpYW5nbGUucHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICByYWRpdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH07XG5cbiAgQmFsbFRyaWFuZ2xlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIHJhZGl1czogNSxcbiAgICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5CYXJzID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuQmFycyA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgQmFycyA9IGV4cG9ydHMuQmFycyA9IGZ1bmN0aW9uIEJhcnMocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICBmaWxsOiBwcm9wcy5jb2xvcixcbiAgICAgICAgdmlld0JveDogXCIwIDAgMTM1IDE0MFwiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJyZWN0XCIsXG4gICAgICAgIHsgeTogXCIxMFwiLCB3aWR0aDogXCIxNVwiLCBoZWlnaHQ6IFwiMTIwXCIsIHJ4OiBcIjZcIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgICAgICAgYmVnaW46IFwiMC41c1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxMjA7MTEwOzEwMDs5MDs4MDs3MDs2MDs1MDs0MDsxNDA7MTIwXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwieVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjAuNXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTA7MTU7MjA7MjU7MzA7MzU7NDA7NDU7NTA7MDsxMFwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcInJlY3RcIixcbiAgICAgICAgeyB4OiBcIjMwXCIsIHk6IFwiMTBcIiwgd2lkdGg6IFwiMTVcIiwgaGVpZ2h0OiBcIjEyMFwiLCByeDogXCI2XCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImhlaWdodFwiLFxuICAgICAgICAgIGJlZ2luOiBcIjAuMjVzXCIsXG4gICAgICAgICAgZHVyOiBcIjFzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjEyMDsxMTA7MTAwOzkwOzgwOzcwOzYwOzUwOzQwOzE0MDsxMjBcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMC4yNXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTA7MTU7MjA7MjU7MzA7MzU7NDA7NDU7NTA7MDsxMFwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcInJlY3RcIixcbiAgICAgICAgeyB4OiBcIjYwXCIsIHdpZHRoOiBcIjE1XCIsIGhlaWdodDogXCIxNDBcIiwgcng6IFwiNlwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJoZWlnaHRcIixcbiAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxMjA7MTEwOzEwMDs5MDs4MDs3MDs2MDs1MDs0MDsxNDA7MTIwXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwieVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjFzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjEwOzE1OzIwOzI1OzMwOzM1OzQwOzQ1OzUwOzA7MTBcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJyZWN0XCIsXG4gICAgICAgIHsgeDogXCI5MFwiLCB5OiBcIjEwXCIsIHdpZHRoOiBcIjE1XCIsIGhlaWdodDogXCIxMjBcIiwgcng6IFwiNlwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJoZWlnaHRcIixcbiAgICAgICAgICBiZWdpbjogXCIwLjI1c1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxMjA7MTEwOzEwMDs5MDs4MDs3MDs2MDs1MDs0MDsxNDA7MTIwXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwieVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjAuMjVzXCIsXG4gICAgICAgICAgZHVyOiBcIjFzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjEwOzE1OzIwOzI1OzMwOzM1OzQwOzQ1OzUwOzA7MTBcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJyZWN0XCIsXG4gICAgICAgIHsgeDogXCIxMjBcIiwgeTogXCIxMFwiLCB3aWR0aDogXCIxNVwiLCBoZWlnaHQ6IFwiMTIwXCIsIHJ4OiBcIjZcIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiaGVpZ2h0XCIsXG4gICAgICAgICAgYmVnaW46IFwiMC41c1wiLFxuICAgICAgICAgIGR1cjogXCIxc1wiLFxuICAgICAgICAgIHZhbHVlczogXCIxMjA7MTEwOzEwMDs5MDs4MDs3MDs2MDs1MDs0MDsxNDA7MTIwXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwieVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjAuNXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTA7MTU7MjA7MjU7MzA7MzU7NDA7NDU7NTA7MDsxMFwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgQmFycy5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gIH07XG5cbiAgQmFycy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA4MCxcbiAgICB3aWR0aDogODAsXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5DaXJjbGVzID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuQ2lyY2xlcyA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgQ2lyY2xlcyA9IGV4cG9ydHMuQ2lyY2xlcyA9IGZ1bmN0aW9uIENpcmNsZXMocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMzUgMTM1XCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIGZpbGw6IHByb3BzLmNvbG9yLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJwYXRoXCIsXG4gICAgICAgIHsgZDogXCJNNjcuNDQ3IDU4YzUuNTIzIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc3LTEwLTEwLTEwLTEwIDQuNDc3LTEwIDEwIDQuNDc3IDEwIDEwIDEwem05LjQ0OCA5LjQ0N2MwIDUuNTIzIDQuNDc3IDEwIDEwIDEwIDUuNTIyIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc4LTEwLTEwLTEwYy01LjUyMyAwLTEwIDQuNDc3LTEwIDEwem0tOS40NDggOS40NDhjLTUuNTIzIDAtMTAgNC40NzctMTAgMTAgMCA1LjUyMiA0LjQ3NyAxMCAxMCAxMHMxMC00LjQ3OCAxMC0xMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwek01OCA2Ny40NDdjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHMtMTAgNC40NzctMTAgMTAgNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTB6XCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlVHJhbnNmb3JtXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgICAgICAgZnJvbTogXCIwIDY3IDY3XCIsXG4gICAgICAgICAgdG86IFwiLTM2MCA2NyA2N1wiLFxuICAgICAgICAgIGR1cjogXCIyLjVzXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwicGF0aFwiLFxuICAgICAgICB7IGQ6IFwiTTI4LjE5IDQwLjMxYzYuNjI3IDAgMTItNS4zNzQgMTItMTIgMC02LjYyOC01LjM3My0xMi0xMi0xMi02LjYyOCAwLTEyIDUuMzcyLTEyIDEyIDAgNi42MjYgNS4zNzIgMTIgMTIgMTJ6bTMwLjcyLTE5LjgyNWM0LjY4NiA0LjY4NyAxMi4yODQgNC42ODcgMTYuOTcgMCA0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45Ny00LjY4Ni00LjY4Ny0xMi4yODQtNC42ODctMTYuOTcgMC00LjY4NyA0LjY4Ni00LjY4NyAxMi4yODQgMCAxNi45N3ptMzUuNzQgNy43MDVjMCA2LjYyNyA1LjM3IDEyIDEyIDEyIDYuNjI2IDAgMTItNS4zNzMgMTItMTIgMC02LjYyOC01LjM3NC0xMi0xMi0xMi02LjYzIDAtMTIgNS4zNzItMTIgMTJ6bTE5LjgyMiAzMC43MmMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcgNC42ODcgNC42ODYgMTIuMjg1IDQuNjg2IDE2Ljk3IDAgNC42ODctNC42ODYgNC42ODctMTIuMjg0IDAtMTYuOTctNC42ODUtNC42ODctMTIuMjgzLTQuNjg3LTE2Ljk3IDB6bS03LjcwNCAzNS43NGMtNi42MjcgMC0xMiA1LjM3LTEyIDEyIDAgNi42MjYgNS4zNzMgMTIgMTIgMTJzMTItNS4zNzQgMTItMTJjMC02LjYzLTUuMzczLTEyLTEyLTEyem0tMzAuNzIgMTkuODIyYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMC00LjY4NiA0LjY4Ny00LjY4NiAxMi4yODUgMCAxNi45NyA0LjY4NiA0LjY4NyAxMi4yODQgNC42ODcgMTYuOTcgMCA0LjY4Ny00LjY4NSA0LjY4Ny0xMi4yODMgMC0xNi45N3ptLTM1Ljc0LTcuNzA0YzAtNi42MjctNS4zNzItMTItMTItMTItNi42MjYgMC0xMiA1LjM3My0xMiAxMnM1LjM3NCAxMiAxMiAxMmM2LjYyOCAwIDEyLTUuMzczIDEyLTEyem0tMTkuODIzLTMwLjcyYzQuNjg3LTQuNjg2IDQuNjg3LTEyLjI4NCAwLTE2Ljk3LTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAwLTQuNjg3IDQuNjg2LTQuNjg3IDEyLjI4NCAwIDE2Ljk3IDQuNjg2IDQuNjg3IDEyLjI4NCA0LjY4NyAxNi45NyAwelwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCB7XG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICB0eXBlOiBcInJvdGF0ZVwiLFxuICAgICAgICAgIGZyb206IFwiMCA2NyA2N1wiLFxuICAgICAgICAgIHRvOiBcIjM2MCA2NyA2N1wiLFxuICAgICAgICAgIGR1cjogXCI4c1wiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgQ2lyY2xlcy5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gIH07XG5cbiAgQ2lyY2xlcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA4MCxcbiAgICB3aWR0aDogODAsXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5DcmFkbGVMb2FkZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5DcmFkbGVMb2FkZXIgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIENyYWRsZUxvYWRlciA9IGV4cG9ydHMuQ3JhZGxlTG9hZGVyID0gZnVuY3Rpb24gQ3JhZGxlTG9hZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsLCByb2xlOiBcInByZXNlbnRhdGlvblwiLCBjbGFzc05hbWU6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyLWxvYWRlci1zd2luZ1wiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXItbG9hZGVyLXN3aW5nLWxcIiB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyLWxvYWRlci1zd2luZy1yXCIgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc2hhZG93XCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc2hhZG93LWxcIiB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyLWxvYWRlci1zaGFkb3ctclwiIH0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBDcmFkbGVMb2FkZXIucHJvcFR5cGVzID0ge1xuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xuICB9O1xuXG4gIENyYWRsZUxvYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuR3JpZCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLkdyaWQgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIEdyaWQgPSBleHBvcnRzLkdyaWQgPSBmdW5jdGlvbiBHcmlkKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgdmlld0JveDogXCIwIDAgMTA1IDEwNVwiLFxuICAgICAgICBmaWxsOiBwcm9wcy5jb2xvcixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiMTIuNVwiLCBjeTogXCIxMi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiMTIuNVwiLCBjeTogXCI1Mi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMTAwbXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiNTIuNVwiLCBjeTogXCIxMi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMzAwbXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiNTIuNVwiLCBjeTogXCI1Mi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiNjAwbXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiOTIuNVwiLCBjeTogXCIxMi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiODAwbXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiOTIuNVwiLCBjeTogXCI1Mi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiNDAwbXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiMTIuNVwiLCBjeTogXCI5Mi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiNzAwbXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiNTIuNVwiLCBjeTogXCI5Mi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiNTAwbXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiOTIuNVwiLCBjeTogXCI5Mi41XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMjAwbXNcIixcbiAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuMjsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBHcmlkLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgcmFkaXVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlclxuICB9O1xuXG4gIEdyaWQuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgcmFkaXVzOiAxMi41LFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLkhlYXJ0cyA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLkhlYXJ0cyA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgSGVhcnRzID0gZXhwb3J0cy5IZWFydHMgPSBmdW5jdGlvbiBIZWFydHMocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB2aWV3Qm94OiBcIjAgMCAxNDAgNjRcIixcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgZmlsbDogcHJvcHMuY29sb3IsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcInBhdGhcIixcbiAgICAgICAge1xuICAgICAgICAgIGQ6IFwiTTMwLjI2MiA1Ny4wMkw3LjE5NSA0MC43MjNjLTUuODQtMy45NzYtNy41Ni0xMi4wNi0zLjg0Mi0xOC4wNjMgMy43MTUtNiAxMS40NjctNy42NSAxNy4zMDYtMy42OGw0LjUyIDMuNzYgMi42LTUuMjc0YzMuNzE3LTYuMDAyIDExLjQ3LTcuNjUgMTcuMzA1LTMuNjggNS44NCAzLjk3IDcuNTYgMTIuMDU0IDMuODQyIDE4LjA2MkwzNC40OSA1Ni4xMThjLS44OTcgMS41MTItMi43OTMgMS45MTUtNC4yMjguOXpcIixcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImZpbGwtb3BhY2l0eVwiLFxuICAgICAgICAgIGZyb206IFwiMFwiLFxuICAgICAgICAgIHRvOiBcIi41XCJcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImZpbGwtb3BhY2l0eVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjEuNHNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMC41OzE7MC41XCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwicGF0aFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZDogXCJNMTA1LjUxMiA1Ni4xMmwtMTQuNDQtMjQuMjcyYy0zLjcxNi02LjAwOC0xLjk5Ni0xNC4wOTMgMy44NDMtMTguMDYyIDUuODM1LTMuOTcgMTMuNTg4LTIuMzIyIDE3LjMwNiAzLjY4bDIuNiA1LjI3NCA0LjUyLTMuNzZjNS44NC0zLjk3IDEzLjU5Mi0yLjMyIDE3LjMwNyAzLjY4IDMuNzE4IDYuMDAzIDEuOTk4IDE0LjA4OC0zLjg0MiAxOC4wNjRMMTA5Ljc0IDU3LjAyYy0xLjQzNCAxLjAxNC0zLjMzLjYxLTQuMjI4LS45elwiLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgZnJvbTogXCIwXCIsXG4gICAgICAgICAgdG86IFwiLjVcIlxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbC1vcGFjaXR5XCIsXG4gICAgICAgICAgYmVnaW46IFwiMC43c1wiLFxuICAgICAgICAgIGR1cjogXCIxLjRzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjAuNTsxOzAuNVwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTY3LjQwOCA1Ny44MzRsLTIzLjAxLTI0Ljk4Yy01Ljg2NC02LjE1LTUuODY0LTE2LjEwOCAwLTIyLjI0OCA1Ljg2LTYuMTQgMTUuMzctNi4xNCAyMS4yMzQgMEw3MCAxNi4xNjhsNC4zNjgtNS41NjJjNS44NjMtNi4xNCAxNS4zNzUtNi4xNCAyMS4yMzUgMCA1Ljg2MyA2LjE0IDUuODYzIDE2LjA5OCAwIDIyLjI0N2wtMjMuMDA3IDI0Ljk4Yy0xLjQzIDEuNTU2LTMuNzU3IDEuNTU2LTUuMTg4IDB6XCIgfSlcbiAgICApO1xuICB9O1xuXG4gIEhlYXJ0cy5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gIH07XG5cbiAgSGVhcnRzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLk11dGF0aW5nRG90cyA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLk11dGF0aW5nRG90cyA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgTXV0YXRpbmdEb3RzID0gZXhwb3J0cy5NdXRhdGluZ0RvdHMgPSBmdW5jdGlvbiBNdXRhdGluZ0RvdHMocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAgeyBpZDogXCJnb28tbG9hZGVyXCIsIHdpZHRoOiBwcm9wcy53aWR0aCwgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbCB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZmlsdGVyXCIsXG4gICAgICAgIHsgaWQ6IFwiZmFuY3ktZ29vXCIgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmZUdhdXNzaWFuQmx1clwiLCB7IFwiaW5cIjogXCJTb3VyY2VHcmFwaGljXCIsIHN0ZERldmlhdGlvbjogXCI2XCIsIHJlc3VsdDogXCJibHVyXCIgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZmVDb2xvck1hdHJpeFwiLCB7XG4gICAgICAgICAgXCJpblwiOiBcImJsdXJcIixcbiAgICAgICAgICBtb2RlOiBcIm1hdHJpeFwiLFxuICAgICAgICAgIHZhbHVlczogXCIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxOSAtOVwiLFxuICAgICAgICAgIHJlc3VsdDogXCJnb29cIlxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJmZUNvbXBvc2l0ZVwiLCB7IFwiaW5cIjogXCJTb3VyY2VHcmFwaGljXCIsIGluMjogXCJnb29cIiwgb3BlcmF0b3I6IFwiYXRvcFwiIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7IGZpbHRlcjogXCJ1cmwoI2ZhbmN5LWdvbylcIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgICAgICAgIGlkOiBcIm1haW5BbmltXCIsXG4gICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICBhdHRyaWJ1dGVUeXBlOiBcIlhNTFwiLFxuICAgICAgICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgICAgICAgZnJvbTogXCIwIDUwIDUwXCIsXG4gICAgICAgICAgdG86IFwiMzU5IDUwIDUwXCIsXG4gICAgICAgICAgZHVyOiBcIjEuMnNcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgeyBjeDogXCI1MCVcIiwgY3k6IFwiNDBcIiwgcjogcHJvcHMucmFkaXVzLCBmaWxsOiBwcm9wcy5jb2xvciB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBpZDogXCJjQW5pbTFcIixcbiAgICAgICAgICAgIGF0dHJpYnV0ZVR5cGU6IFwiWE1MXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImN5XCIsXG4gICAgICAgICAgICBkdXI6IFwiMC42c1wiLFxuICAgICAgICAgICAgYmVnaW46IFwiMDtjQW5pbTEuZW5kKzAuMnNcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcInNwbGluZVwiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjQwOzIwOzQwXCIsXG4gICAgICAgICAgICBrZXlUaW1lczogXCIwOzAuMzsxXCIsXG4gICAgICAgICAgICBrZXlTcGxpbmVzOiBcIjAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuNTsgMC4xNzUsIDAuODg1LCAwLjMyMCwgMS41XCJcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImNpcmNsZVwiLFxuICAgICAgICAgIHsgY3g6IFwiNTAlXCIsIGN5OiBcIjYwXCIsIHI6IHByb3BzLnJhZGl1cywgZmlsbDogcHJvcHMuc2Vjb25kYXJ5Q29sb3IgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgaWQ6IFwiY0FuaW0yXCIsXG4gICAgICAgICAgICBhdHRyaWJ1dGVUeXBlOiBcIlhNTFwiLFxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJjeVwiLFxuICAgICAgICAgICAgZHVyOiBcIjAuNnNcIixcbiAgICAgICAgICAgIGJlZ2luOiBcIjAuNHM7Y0FuaW0yLmVuZCswLjJzXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJzcGxpbmVcIixcbiAgICAgICAgICAgIHZhbHVlczogXCI2MDs4MDs2MFwiLFxuICAgICAgICAgICAga2V5VGltZXM6IFwiMDswLjM7MVwiLFxuICAgICAgICAgICAga2V5U3BsaW5lczogXCIwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjU7MC4xNzUsIDAuODg1LCAwLjMyMCwgMS41XCJcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBNdXRhdGluZ0RvdHMucHJvcFR5cGVzID0ge1xuICAgIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICBzZWNvbmRhcnlDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgcmFkaXVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgfTtcblxuICBNdXRhdGluZ0RvdHMuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiA4MCxcbiAgICBoZWlnaHQ6IDkwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgcmFkaXVzOiAxMSxcbiAgICBzZWNvbmRhcnlDb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLk92YWwgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5PdmFsID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBPdmFsID0gZXhwb3J0cy5PdmFsID0gZnVuY3Rpb24gT3ZhbChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDM4IDM4XCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIHN0cm9rZTogcHJvcHMuY29sb3IsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyBmaWxsOiBcIm5vbmVcIiwgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZ1wiLFxuICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxIDEpXCIsIHN0cm9rZVdpZHRoOiBcIjJcIiB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsgc3Ryb2tlT3BhY2l0eTogXCIuNVwiLCBjeDogXCIxOFwiLCBjeTogXCIxOFwiLCByOiBwcm9wcy5yYWRpdXMgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBcInBhdGhcIixcbiAgICAgICAgICAgIHsgZDogXCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIiB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlVHJhbnNmb3JtXCIsIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICAgICAgICAgICAgZnJvbTogXCIwIDE4IDE4XCIsXG4gICAgICAgICAgICAgIHRvOiBcIjM2MCAxOCAxOFwiLFxuICAgICAgICAgICAgICBkdXI6IFwiMXNcIixcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgT3ZhbC5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHJhZGl1czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBPdmFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIixcbiAgICByYWRpdXM6IDE4XG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuUGxhbmUgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5QbGFuZSA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgUGxhbmUgPSBleHBvcnRzLlBsYW5lID0gZnVuY3Rpb24gUGxhbmUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcInN2Z1wiLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IFwicmVhY3Qtc3Bpbm5lci1sb2FkZXItc3ZnLWNhbExvYWRlclwiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICB3aWR0aDogXCIyMzBcIixcbiAgICAgICAgaGVpZ2h0OiBcIjIzMFwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcHJvcHMubGFiZWxcbiAgICAgIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJkZXNjXCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFwiUGxhbmUgYW5pbWF0aW9uLiBMb2FkaW5nIFwiXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInJlYWN0LXNwaW5uZXItbG9hZGVyLWNhbC1sb2FkZXJfX3BhdGhcIixcbiAgICAgICAgc3R5bGU6IHsgc3Ryb2tlOiBwcm9wcy5zZWNvbmRhcnlDb2xvciB9LFxuICAgICAgICBkOiBcIk04Ni40MjkgNDBjNjMuNjE2LTIwLjA0IDEwMS41MTEgMjUuMDggMTA3LjI2NSA2MS45MyA2LjQ4NyA0MS41NC0xOC41OTMgNzYuOTktNTAuNiA4Ny42NDMtNTkuNDYgMTkuNzkxLTEwMS4yNjItMjMuNTc3LTEwNy4xNDItNjIuNjE2QzI5LjM5OCA4My40NDEgNTkuOTQ1IDQ4LjM0MyA4Ni40MyA0MHpcIixcbiAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgIHN0cm9rZTogXCIjMDA5OWNjXCIsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBcIjRcIixcbiAgICAgICAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICAgICAgICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiLFxuICAgICAgICBzdHJva2VEYXNoYXJyYXk6IFwiMTAgMTAgMTAgMTAgMTAgMTAgMTAgNDMyXCIsXG4gICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IFwiNzdcIlxuICAgICAgfSksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiY2FsLWxvYWRlcl9fcGxhbmVcIixcbiAgICAgICAgc3R5bGU6IHsgZmlsbDogcHJvcHMuY29sb3IgfSxcbiAgICAgICAgZDogXCJNMTQxLjQ5MyAzNy45M2MtMS4wODctLjkyNy0yLjk0Mi0yLjAwMi00LjMyLTIuNTAxLTIuMjU5LS44MjQtMy4yNTItLjk1NS05LjI5My0xLjE3Mi00LjAxNy0uMTQ2LTUuMTk3LS4yMy01LjQ3LS4zNy0uNzY2LS40MDctMS41MjYtMS40NDgtNy4xMTQtOS43NzMtNC44LTcuMTQ1LTUuMzQ0LTcuOTE0LTYuMzI3LTguOTc2LTEuMjE0LTEuMzA2LTEuMzk2LTEuMzc4LTMuNzktMS40NzMtMS4wMzYtLjA0LTItLjA0My0yLjE1My0uMDAyLS4zNTMuMS0uODcuNTg2LTEgLjk1Mi0uMTM5LjM5OS0uMDc2LjcxLjQzMSAyLjIyLjI0MS43MiAxLjAyOSAzLjM4NiAxLjc0MiA1LjkxOCAxLjY0NCA1Ljg0NCAyLjM3OCA4LjM0MyAyLjg2MyA5LjcwNS4yMDYuNjAxLjMzIDEuMS4yNzUgMS4xMjUtLjI0LjA5Ny0xMC41NiAxLjA2Ni0xMS4wMTQgMS4wMzJhMy41MzIgMy41MzIgMCAwIDEtMS4wMDItLjI3NmwtLjQ4Ny0uMjQ2LTIuMDQ0LTIuNjEzYy0yLjIzNC0yLjg3LTIuMjI4LTIuODY0LTMuMzUtMy4zMDktLjcxNy0uMjg3LTIuODItLjM4Ni0zLjI3Ni0uMTYzLS40NTcuMjM3LS43MjcuNjQ0LS43MzcgMS4xNTItLjAxOC4zOS4xNjcuODA1IDEuOTE2IDQuMzczIDEuMDYgMi4xNjYgMS45NjQgNC4wODMgMS45OTggNC4yNy4wNC4xNzkuMDA0LjUyMS0uMDc2Ljc1LS4wOTMuMjI4LTEuMTA5IDIuMDY0LTIuMjY5IDQuMDg4LTEuOTIxIDMuMzQtMi4xMSAzLjcxMS0yLjEyMyA0LjEwNy0uMDA4LjI1LjA2MS41NTcuMTY4LjcyNS4zMjguNTEyLjcyLjY0NCAxLjk2Ni42NzYgMS4zMi4wMjkgMi4zNTItLjIzNiAzLjA1LS43NjIuMjIyLS4xNzEgMS4yNzUtMS4zMTMgMi40MTItMi42MTEgMS45MTgtMi4xODUgMi4wNDgtMi4zMiAyLjQ1LTIuNTA1LjI0MS0uMTExLjYwMS0uMjMyLjgyLS4yNzEuMjY3LS4wNTggMi4yMTMuMjAxIDUuOTEyLjggMy4wMzYuNDggNS41MjUuODk0IDUuNTE4LjkxNCAwIC4wMjYtLjEyMS4zMDYtLjI3LjYzOC0uNTQgMS4xOTgtMS41MTUgMy44NDItMy4zNSA5LjAyMS0xLjAyOSAyLjkxMy0yLjEwNyA1Ljg5Ny0yLjQgNi42Mi0uNzAzIDEuNzQ4LS43MjUgMS44MzMtLjU5NCAyLjI4Ni4xMzcuNDYuNDUuODMzLjg3MiAxLjAxMi40MS4xNzcgMy44MjMuMjQgNC4zNy4wODUuODUyLS4yNSAxLjQ0LS42ODggMi4zMTItMS43MjQgMS4xNjYtMS4zOSAzLjE2OS0zLjk0OCA2Ljc3MS04LjY2MSA1LjgtNy41ODMgNi41NjEtOC40OSA3LjM4Ny04LjcwMi4yMzMtLjA2NSAyLjgyOC0uMDU2IDUuNzg0LjAxMSA1LjgyNy4xMzggNi42NC4wOSA4LjYyLS41IDIuMjQtLjY3IDQuMDM1LTEuNjUgNS41MTctMy4wMTYgMS4xMzYtMS4wNTQgMS4xMzUtMS4wMTQuMjA3LTEuOTYyLS4zNTctLjM4LS43NjctLjc3Ny0uOTAyLS44OTN6XCIsXG4gICAgICAgIGZpbGw6IFwiIzAwMDAzM1wiXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgUGxhbmUucHJvcFR5cGVzID0ge1xuICAgIHNlY29uZGFyeUNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG4gIH07XG5cbiAgUGxhbmUuZGVmYXVsdFByb3BzID0ge1xuICAgIHNlY29uZGFyeUNvbG9yOiBcImdyZXlcIixcbiAgICBjb2xvcjogXCIjRkZBNTAwXCIsXG4gICAgbGFiZWw6IFwiYXN5bmMtbG9hZGluZ1wiXG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuUHVmZiA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLlB1ZmYgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIFB1ZmYgPSBleHBvcnRzLlB1ZmYgPSBmdW5jdGlvbiBQdWZmKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgdmlld0JveDogXCIwIDAgNDQgNDRcIixcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7IGZpbGw6IFwibm9uZVwiLCBmaWxsUnVsZTogXCJldmVub2RkXCIsIHN0cm9rZVdpZHRoOiBcIjJcIiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImNpcmNsZVwiLFxuICAgICAgICAgIHsgY3g6IFwiMjJcIiwgY3k6IFwiMjJcIiwgcjogcHJvcHMucmFkaXVzIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgIGR1cjogXCIxLjhzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiMTsgMjBcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcInNwbGluZVwiLFxuICAgICAgICAgICAga2V5VGltZXM6IFwiMDsgMVwiLFxuICAgICAgICAgICAga2V5U3BsaW5lczogXCIwLjE2NSwgMC44NCwgMC40NCwgMVwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwic3Ryb2tlT3BhY2l0eVwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMHNcIixcbiAgICAgICAgICAgIGR1cjogXCIxLjhzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiMTsgMFwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwic3BsaW5lXCIsXG4gICAgICAgICAgICBrZXlUaW1lczogXCIwOyAxXCIsXG4gICAgICAgICAgICBrZXlTcGxpbmVzOiBcIjAuMywgMC42MSwgMC4zNTUsIDFcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgeyBjeDogXCIyMlwiLCBjeTogXCIyMlwiLCByOiBwcm9wcy5yYWRpdXMgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJyXCIsXG4gICAgICAgICAgICBiZWdpbjogXCItMC45c1wiLFxuICAgICAgICAgICAgZHVyOiBcIjEuOHNcIixcbiAgICAgICAgICAgIHZhbHVlczogXCIxOyAyMFwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwic3BsaW5lXCIsXG4gICAgICAgICAgICBrZXlUaW1lczogXCIwOyAxXCIsXG4gICAgICAgICAgICBrZXlTcGxpbmVzOiBcIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJzdHJva2VPcGFjaXR5XCIsXG4gICAgICAgICAgICBiZWdpbjogXCItMC45c1wiLFxuICAgICAgICAgICAgZHVyOiBcIjEuOHNcIixcbiAgICAgICAgICAgIHZhbHVlczogXCIxOyAwXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJzcGxpbmVcIixcbiAgICAgICAgICAgIGtleVRpbWVzOiBcIjA7IDFcIixcbiAgICAgICAgICAgIGtleVNwbGluZXM6IFwiMC4zLCAwLjYxLCAwLjM1NSwgMVwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgUHVmZi5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHJhZGl1czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBQdWZmLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIixcbiAgICByYWRpdXM6IDFcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5SZXZvbHZpbmdEb3QgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5SZXZvbHZpbmdEb3QgPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIFJldm9sdmluZ0RvdCA9IGV4cG9ydHMuUmV2b2x2aW5nRG90ID0gZnVuY3Rpb24gUmV2b2x2aW5nRG90KHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgdmVyc2lvbjogXCIxLjFcIixcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgeDogXCIwcHhcIixcbiAgICAgICAgeTogXCIwcHhcIixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IFwiNFwiLFxuICAgICAgICBjeDogXCI1MFwiLFxuICAgICAgICBjeTogXCI1MFwiLFxuICAgICAgICByOiBwcm9wcy5yYWRpdXMgKyAzOCxcbiAgICAgICAgc3R5bGU6IHsgb3BhY2l0eTogMC41IH1cbiAgICAgIH0pLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgZmlsbDogcHJvcHMuY29sb3IsIHN0cm9rZTogcHJvcHMuY29sb3IsIHN0cm9rZVdpZHRoOiBcIjNcIiwgY3g6IFwiOFwiLCBjeTogXCI1NFwiLCByOiBwcm9wcy5yYWRpdXMgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlVHJhbnNmb3JtXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgIGR1cjogXCIyc1wiLFxuICAgICAgICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgICAgICAgZnJvbTogXCIwIDUwIDQ4XCIsXG4gICAgICAgICAgdG86IFwiMzYwIDUwIDUyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBSZXZvbHZpbmdEb3QucHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICByYWRpdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH07XG5cbiAgUmV2b2x2aW5nRG90LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIixcbiAgICByYWRpdXM6IDZcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5SaW5ncyA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLlJpbmdzID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBSaW5ncyA9IGV4cG9ydHMuUmluZ3MgPSBmdW5jdGlvbiBSaW5ncyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDQ1IDQ1XCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIHN0cm9rZTogcHJvcHMuY29sb3IsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBwcm9wcy5sYWJlbFxuICAgICAgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyBmaWxsOiBcIm5vbmVcIiwgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEgMSlcIiwgc3Ryb2tlV2lkdGg6IFwiMlwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgeyBjeDogXCIyMlwiLCBjeTogXCIyMlwiLCByOiBwcm9wcy5yYWRpdXMsIHN0cm9rZU9wYWNpdHk6IFwiMFwiIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMS41c1wiLFxuICAgICAgICAgICAgZHVyOiBcIjNzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiNjsyMlwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJzdHJva2Utb3BhY2l0eVwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMS41c1wiLFxuICAgICAgICAgICAgZHVyOiBcIjNzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiMTswXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInN0cm9rZS13aWR0aFwiLFxuICAgICAgICAgICAgYmVnaW46IFwiMS41c1wiLFxuICAgICAgICAgICAgZHVyOiBcIjNzXCIsXG4gICAgICAgICAgICB2YWx1ZXM6IFwiMjswXCIsXG4gICAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgICAgeyBjeDogXCIyMlwiLCBjeTogXCIyMlwiLCByOiBwcm9wcy5yYWRpdXMsIHN0cm9rZU9wYWNpdHk6IFwiMFwiIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgICAgICAgICAgYmVnaW46IFwiM3NcIixcbiAgICAgICAgICAgIGR1cjogXCIzc1wiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjY7MjJcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwic3Ryb2tlT3BhY2l0eVwiLFxuICAgICAgICAgICAgYmVnaW46IFwiM3NcIixcbiAgICAgICAgICAgIGR1cjogXCIzc1wiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjE7MFwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJzdHJva2VXaWR0aFwiLFxuICAgICAgICAgICAgYmVnaW46IFwiM3NcIixcbiAgICAgICAgICAgIGR1cjogXCIzc1wiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjI7MFwiLFxuICAgICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImNpcmNsZVwiLFxuICAgICAgICAgIHsgY3g6IFwiMjJcIiwgY3k6IFwiMjJcIiwgcjogcHJvcHMucmFkaXVzICsgMiB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInJcIixcbiAgICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgICBkdXI6IFwiMS41c1wiLFxuICAgICAgICAgICAgdmFsdWVzOiBcIjY7MTsyOzM7NDs1OzZcIixcbiAgICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgUmluZ3MucHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICByYWRpdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH07XG5cbiAgUmluZ3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogODAsXG4gICAgd2lkdGg6IDgwLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgcmFkaXVzOiA2LFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIlxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCJyZWFjdFwiLCBcInByb3AtdHlwZXNcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLlRhaWxTcGluID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuVGFpbFNwaW4gPSB1bmRlZmluZWQ7XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIFRhaWxTcGluID0gZXhwb3J0cy5UYWlsU3BpbiA9IGZ1bmN0aW9uIFRhaWxTcGluKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJzdmdcIixcbiAgICAgIHtcbiAgICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgdmlld0JveDogXCIwIDAgMzggMzhcIixcbiAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiZGVmc1wiLFxuICAgICAgICBudWxsLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgICAgeyB4MTogXCI4LjA0MiVcIiwgeTE6IFwiMCVcIiwgeDI6IFwiNjUuNjgyJVwiLCB5MjogXCIyMy44NjUlXCIsIGlkOiBcImFcIiB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7IHN0b3BDb2xvcjogcHJvcHMuY29sb3IsIHN0b3BPcGFjaXR5OiBcIjBcIiwgb2Zmc2V0OiBcIjAlXCIgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdG9wXCIsIHsgc3RvcENvbG9yOiBwcm9wcy5jb2xvciwgc3RvcE9wYWNpdHk6IFwiLjYzMVwiLCBvZmZzZXQ6IFwiNjMuMTQ2JVwiIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3RvcFwiLCB7IHN0b3BDb2xvcjogcHJvcHMuY29sb3IsIG9mZnNldDogXCIxMDAlXCIgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyBmaWxsOiBcIm5vbmVcIiwgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFwiZ1wiLFxuICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxIDEpXCIgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFwicGF0aFwiLFxuICAgICAgICAgICAgeyBkOiBcIk0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFwiLCBpZDogXCJPdmFsLTJcIiwgc3Ryb2tlOiBwcm9wcy5jb2xvciwgc3Ryb2tlV2lkdGg6IFwiMlwiIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcInRyYW5zZm9ybVwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInJvdGF0ZVwiLFxuICAgICAgICAgICAgICBmcm9tOiBcIjAgMTggMThcIixcbiAgICAgICAgICAgICAgdG86IFwiMzYwIDE4IDE4XCIsXG4gICAgICAgICAgICAgIGR1cjogXCIwLjlzXCIsXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgICAgIHsgZmlsbDogXCIjZmZmXCIsIGN4OiBcIjM2XCIsIGN5OiBcIjE4XCIsIHI6IHByb3BzLnJhZGl1cyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlVHJhbnNmb3JtXCIsIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICAgICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICAgICAgICAgICAgZnJvbTogXCIwIDE4IDE4XCIsXG4gICAgICAgICAgICAgIHRvOiBcIjM2MCAxOCAxOFwiLFxuICAgICAgICAgICAgICBkdXI6IFwiMC45c1wiLFxuICAgICAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBUYWlsU3Bpbi5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHJhZGl1czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBUYWlsU3Bpbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA4MCxcbiAgICB3aWR0aDogODAsXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICByYWRpdXM6IDEsXG4gICAgbGFiZWw6IFwiYXVkaW8tbG9hZGluZ1wiXG4gIH07XG59KTsiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW1wiZXhwb3J0c1wiLCBcInJlYWN0XCIsIFwicHJvcC10eXBlc1wiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzKTtcbiAgICBnbG9iYWwuVGhyZWVEb3RzID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3QsIF9wcm9wVHlwZXMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuVGhyZWVEb3RzID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBUaHJlZURvdHMgPSBleHBvcnRzLlRocmVlRG90cyA9IGZ1bmN0aW9uIFRocmVlRG90cyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDEyMCAzMFwiLFxuICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBmaWxsOiBwcm9wcy5jb2xvcixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHsgY3g6IFwiMTVcIiwgY3k6IFwiMTVcIiwgcjogcHJvcHMucmFkaXVzICsgNiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgICAgICAgIGZyb206IFwiMTVcIixcbiAgICAgICAgICB0bzogXCIxNVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjAuOHNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTU7OTsxNVwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImZpbGxPcGFjaXR5XCIsXG4gICAgICAgICAgZnJvbTogXCIxXCIsXG4gICAgICAgICAgdG86IFwiMVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjAuOHNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuNTsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiY2lyY2xlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjeDogXCI2MFwiLFxuICAgICAgICAgIGN5OiBcIjE1XCIsXG4gICAgICAgICAgcjogcHJvcHMucmFkaXVzLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiZmlsbE9wYWNpdHlcIixcbiAgICAgICAgICBmcm9tOiBcIjFcIixcbiAgICAgICAgICB0bzogXCIwLjNcIlxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgICAgICAgIGZyb206IFwiOVwiLFxuICAgICAgICAgIHRvOiBcIjlcIixcbiAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgIGR1cjogXCIwLjhzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIjk7MTU7OVwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImZpbGxPcGFjaXR5XCIsXG4gICAgICAgICAgZnJvbTogXCIwLjVcIixcbiAgICAgICAgICB0bzogXCIwLjVcIixcbiAgICAgICAgICBiZWdpbjogXCIwc1wiLFxuICAgICAgICAgIGR1cjogXCIwLjhzXCIsXG4gICAgICAgICAgdmFsdWVzOiBcIi41OzE7LjVcIixcbiAgICAgICAgICBjYWxjTW9kZTogXCJsaW5lYXJcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJjaXJjbGVcIixcbiAgICAgICAgeyBjeDogXCIxMDVcIiwgY3k6IFwiMTVcIiwgcjogcHJvcHMucmFkaXVzICsgNiB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVcIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwiclwiLFxuICAgICAgICAgIGZyb206IFwiMTVcIixcbiAgICAgICAgICB0bzogXCIxNVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjAuOHNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTU7OTsxNVwiLFxuICAgICAgICAgIGNhbGNNb2RlOiBcImxpbmVhclwiLFxuICAgICAgICAgIHJlcGVhdENvdW50OiBcImluZGVmaW5pdGVcIlxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhbmltYXRlXCIsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiBcImZpbGxPcGFjaXR5XCIsXG4gICAgICAgICAgZnJvbTogXCIxXCIsXG4gICAgICAgICAgdG86IFwiMVwiLFxuICAgICAgICAgIGJlZ2luOiBcIjBzXCIsXG4gICAgICAgICAgZHVyOiBcIjAuOHNcIixcbiAgICAgICAgICB2YWx1ZXM6IFwiMTsuNTsxXCIsXG4gICAgICAgICAgY2FsY01vZGU6IFwibGluZWFyXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBUaHJlZURvdHMucHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICByYWRpdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXG4gIH07XG5cbiAgVGhyZWVEb3RzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHdpZHRoOiA4MCxcbiAgICBjb2xvcjogXCJncmVlblwiLFxuICAgIGxhYmVsOiBcImF1ZGlvLWxvYWRpbmdcIixcbiAgICByYWRpdXM6IDlcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5UcmlhbmdsZSA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLlRyaWFuZ2xlID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBUcmlhbmdsZSA9IGV4cG9ydHMuVHJpYW5nbGUgPSBmdW5jdGlvbiBUcmlhbmdsZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJyZWFjdC1zcGlubmVyLWxvYWRlci1zdmdcIiB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwic3ZnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJ0cmlhbmdsZVwiLFxuICAgICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHByb3BzLmhlaWdodCxcbiAgICAgICAgICB2aWV3Qm94OiBcIi0zIC00IDM5IDM5XCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicG9seWdvblwiLCB7IGZpbGw6IFwidHJhbnNwYXJlbnRcIiwgc3Ryb2tlOiBwcm9wcy5jb2xvciwgc3Ryb2tlV2lkdGg6IFwiMVwiLCBwb2ludHM6IFwiMTYsMCAzMiwzMiAwLDMyXCIgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFRyaWFuZ2xlLnByb3BUeXBlcyA9IHtcbiAgICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICAgIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgfTtcblxuICBUcmlhbmdsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA4MCxcbiAgICB3aWR0aDogODAsXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCJcbiAgfTtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXCJleHBvcnRzXCIsIFwicmVhY3RcIiwgXCJwcm9wLXR5cGVzXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3QsIGdsb2JhbC5wcm9wVHlwZXMpO1xuICAgIGdsb2JhbC5XYXRjaCA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgX3JlYWN0LCBfcHJvcFR5cGVzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLldhdGNoID0gdW5kZWZpbmVkO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBXYXRjaCA9IGV4cG9ydHMuV2F0Y2ggPSBmdW5jdGlvbiBXYXRjaChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gICAgICAgIHZlcnNpb246IFwiMS4xXCIsXG4gICAgICAgIGlkOiBcIkwyXCIsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgIHg6IFwiMHB4XCIsXG4gICAgICAgIHk6IFwiMHB4XCIsXG4gICAgICAgIHZpZXdCb3g6IFwiMCAwIDEwMCAxMDBcIixcbiAgICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDEwMCAxMDBcIixcbiAgICAgICAgeG1sU3BhY2U6IFwicHJlc2VydmVcIixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHByb3BzLmxhYmVsXG4gICAgICB9LFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IFwiNFwiLFxuICAgICAgICBzdHJva2VNaXRlcmxpbWl0OiBcIjEwXCIsXG4gICAgICAgIGN4OiBcIjUwXCIsXG4gICAgICAgIGN5OiBcIjUwXCIsXG4gICAgICAgIHI6IHByb3BzLnJhZGl1c1xuICAgICAgfSksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJsaW5lXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgICAgICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICBzdHJva2VXaWR0aDogXCI0XCIsXG4gICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiLFxuICAgICAgICAgIHgxOiBcIjUwXCIsXG4gICAgICAgICAgeTE6IFwiNTBcIixcbiAgICAgICAgICB4MjogXCI4NVwiLFxuICAgICAgICAgIHkyOiBcIjUwLjVcIlxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgZHVyOiBcIjJzXCIsXG4gICAgICAgICAgdHlwZTogXCJyb3RhdGVcIixcbiAgICAgICAgICBmcm9tOiBcIjAgNTAgNTBcIixcbiAgICAgICAgICB0bzogXCIzNjAgNTAgNTBcIixcbiAgICAgICAgICByZXBlYXRDb3VudDogXCJpbmRlZmluaXRlXCJcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJsaW5lXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxsOiBcIm5vbmVcIixcbiAgICAgICAgICBzdHJva2VMaW5lY2FwOiBcInJvdW5kXCIsXG4gICAgICAgICAgc3Ryb2tlOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICBzdHJva2VXaWR0aDogXCI0XCIsXG4gICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdDogXCIxMFwiLFxuICAgICAgICAgIHgxOiBcIjUwXCIsXG4gICAgICAgICAgeTE6IFwiNTBcIixcbiAgICAgICAgICB4MjogXCI0OS41XCIsXG4gICAgICAgICAgeTI6IFwiNzRcIlxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFuaW1hdGVUcmFuc2Zvcm1cIiwge1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IFwidHJhbnNmb3JtXCIsXG4gICAgICAgICAgZHVyOiBcIjE1c1wiLFxuICAgICAgICAgIHR5cGU6IFwicm90YXRlXCIsXG4gICAgICAgICAgZnJvbTogXCIwIDUwIDUwXCIsXG4gICAgICAgICAgdG86IFwiMzYwIDUwIDUwXCIsXG4gICAgICAgICAgcmVwZWF0Q291bnQ6IFwiaW5kZWZpbml0ZVwiXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBXYXRjaC5wcm9wVHlwZXMgPSB7XG4gICAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gICAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgIHJhZGl1czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJcbiAgfTtcblxuICBXYXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiA4MCxcbiAgICB3aWR0aDogODAsXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICBsYWJlbDogXCJhdWRpby1sb2FkaW5nXCIsXG4gICAgcmFkaXVzOiA0OFxuICB9O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtcImV4cG9ydHNcIiwgXCIuL0NpcmNsZXNcIiwgXCIuL1dhdGNoXCIsIFwiLi9BdWRpb1wiLCBcIi4vQmFsbFRyaWFuZ2xlXCIsIFwiLi9CYXJzXCIsIFwiLi9DcmFkbGVMb2FkZXJcIiwgXCIuL0dyaWRcIiwgXCIuL0hlYXJ0c1wiLCBcIi4vTXV0YXRpbmdEb3RzXCIsIFwiLi9PdmFsXCIsIFwiLi9QbGFuZVwiLCBcIi4vUHVmZlwiLCBcIi4vUmV2b2x2aW5nRG90XCIsIFwiLi9SaW5nc1wiLCBcIi4vVGFpbFNwaW5cIiwgXCIuL1RocmVlRG90c1wiLCBcIi4vVHJpYW5nbGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKFwiLi9DaXJjbGVzXCIpLCByZXF1aXJlKFwiLi9XYXRjaFwiKSwgcmVxdWlyZShcIi4vQXVkaW9cIiksIHJlcXVpcmUoXCIuL0JhbGxUcmlhbmdsZVwiKSwgcmVxdWlyZShcIi4vQmFyc1wiKSwgcmVxdWlyZShcIi4vQ3JhZGxlTG9hZGVyXCIpLCByZXF1aXJlKFwiLi9HcmlkXCIpLCByZXF1aXJlKFwiLi9IZWFydHNcIiksIHJlcXVpcmUoXCIuL011dGF0aW5nRG90c1wiKSwgcmVxdWlyZShcIi4vT3ZhbFwiKSwgcmVxdWlyZShcIi4vUGxhbmVcIiksIHJlcXVpcmUoXCIuL1B1ZmZcIiksIHJlcXVpcmUoXCIuL1Jldm9sdmluZ0RvdFwiKSwgcmVxdWlyZShcIi4vUmluZ3NcIiksIHJlcXVpcmUoXCIuL1RhaWxTcGluXCIpLCByZXF1aXJlKFwiLi9UaHJlZURvdHNcIiksIHJlcXVpcmUoXCIuL1RyaWFuZ2xlXCIpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5DaXJjbGVzLCBnbG9iYWwuV2F0Y2gsIGdsb2JhbC5BdWRpbywgZ2xvYmFsLkJhbGxUcmlhbmdsZSwgZ2xvYmFsLkJhcnMsIGdsb2JhbC5DcmFkbGVMb2FkZXIsIGdsb2JhbC5HcmlkLCBnbG9iYWwuSGVhcnRzLCBnbG9iYWwuTXV0YXRpbmdEb3RzLCBnbG9iYWwuT3ZhbCwgZ2xvYmFsLlBsYW5lLCBnbG9iYWwuUHVmZiwgZ2xvYmFsLlJldm9sdmluZ0RvdCwgZ2xvYmFsLlJpbmdzLCBnbG9iYWwuVGFpbFNwaW4sIGdsb2JhbC5UaHJlZURvdHMsIGdsb2JhbC5UcmlhbmdsZSk7XG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfQ2lyY2xlcywgX1dhdGNoLCBfQXVkaW8sIF9CYWxsVHJpYW5nbGUsIF9CYXJzLCBfQ3JhZGxlTG9hZGVyLCBfR3JpZCwgX0hlYXJ0cywgX011dGF0aW5nRG90cywgX092YWwsIF9QbGFuZSwgX1B1ZmYsIF9SZXZvbHZpbmdEb3QsIF9SaW5ncywgX1RhaWxTcGluLCBfVGhyZWVEb3RzLCBfVHJpYW5nbGUpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuU3Bpbm5lciA9IHVuZGVmaW5lZDtcbiAgdmFyIFNwaW5uZXIgPSBleHBvcnRzLlNwaW5uZXIgPSB7XG4gICAgQ2lyY2xlczogX0NpcmNsZXMuQ2lyY2xlcyxcbiAgICBBdWRpbzogX0F1ZGlvLkF1ZGlvLFxuICAgIEJhbGxUcmlhbmdsZTogX0JhbGxUcmlhbmdsZS5CYWxsVHJpYW5nbGUsXG4gICAgQmFyczogX0JhcnMuQmFycyxcbiAgICBDcmFkbGVMb2FkZXI6IF9DcmFkbGVMb2FkZXIuQ3JhZGxlTG9hZGVyLFxuICAgIEdyaWQ6IF9HcmlkLkdyaWQsXG4gICAgSGVhcnRzOiBfSGVhcnRzLkhlYXJ0cyxcbiAgICBNdXRhdGluZ0RvdHM6IF9NdXRhdGluZ0RvdHMuTXV0YXRpbmdEb3RzLFxuICAgIE92YWw6IF9PdmFsLk92YWwsXG4gICAgUGxhbmU6IF9QbGFuZS5QbGFuZSxcbiAgICBQdWZmOiBfUHVmZi5QdWZmLFxuICAgIFJldm9sdmluZ0RvdDogX1Jldm9sdmluZ0RvdC5SZXZvbHZpbmdEb3QsXG4gICAgUmluZ3M6IF9SaW5ncy5SaW5ncyxcbiAgICBUYWlsU3BpbjogX1RhaWxTcGluLlRhaWxTcGluLFxuICAgIFRocmVlRG90czogX1RocmVlRG90cy5UaHJlZURvdHMsXG4gICAgVHJpYW5nbGU6IF9UcmlhbmdsZS5UcmlhbmdsZSxcbiAgICBXYXRjaDogX1dhdGNoLldhdGNoXG4gIH07XG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9pbmRleCcpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFBvc3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdHNMaXN0L1Bvc3RzTGlzdCc7XG5pbXBvcnQgKiBhcyBibG9nU2VsZWN0b3JzIGZyb20gJy4uL3JlZHV4L2Jsb2cvYmxvZ1NlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBibG9nT3BlcmF0aW9ucyBmcm9tICcuLi9yZWR1eC9ibG9nL2Jsb2dPcGVyYXRpb25zJztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3JlZHV4L2Jsb2cvYmxvZ1R5cGVzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyJztcblxuY29uc3QgQXBwID0gKHsgcG9zdHMsIGdldFBvc3RzLCBpc0xvYWRpbmcgfSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFBvc3RzKCk7XG4gICAgfSwgW2dldFBvc3RzXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlciAvPn1cbiAgICAgICAgICAgIHtwb3N0cyAmJiA8UG9zdHMgcG9zdHM9e3Bvc3RzfSAvPn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZSkgPT4gKHtcbiAgICBwb3N0czogYmxvZ1NlbGVjdG9ycy5nZXRQb3N0cyhzdG9yZSksXG4gICAgaXNMb2FkaW5nOiBibG9nU2VsZWN0b3JzLmdldExvYWRlcihzdG9yZSksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGdldFBvc3RzOiAoKTogdm9pZCA9PiBkaXNwYXRjaChibG9nT3BlcmF0aW9ucy5nZXRQb3N0cygpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==