webpackHotUpdate("static\\development\\pages\\Posts\\[id].js",{

/***/ "./components/Loader/Loader.styled.ts":
false,

/***/ "./components/Loader/Loader.tsx":
false,

/***/ "./components/Post/Post.tsx":
/*!**********************************!*\
  !*** ./components/Post/Post.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.styled */ "./components/Post/Post.styled.ts");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\Post\\Post.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Post = function Post(_ref) {
  var post = _ref.post;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["PostBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, post.title), __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["Body"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, post.body), post.comments && post.comments.length > 0 && __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 63
    }
  }, "Comments: "), post.comments && post.comments.length > 0 ? post.comments.map(function (el) {
    return __jsx("p", {
      key: el.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }
    }, el.id, ": "), " ", el.body);
  }) : __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "No comments for this post")));
};

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Audio.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/BallTriangle.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Bars.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Circles.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/CradleLoader.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Grid.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Hearts.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/MutatingDots.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Oval.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Plane.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Puff.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/RevolvingDot.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Rings.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/TailSpin.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/ThreeDots.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Triangle.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/Watch.js":
false,

/***/ "./node_modules/react-loader-spinner/dist/loader/index.js":
false,

/***/ "./node_modules/react-loader-spinner/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvUG9zdC50c3giXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsImxlbmd0aCIsIm1hcCIsImVsIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBT0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBc0M7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQy9DLFNBQ0ksbUVBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLElBQUksQ0FBQ0MsS0FBYixDQURKLEVBRUksTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ELElBQUksQ0FBQ0UsSUFBWixDQUZKLEVBR0tGLElBQUksQ0FBQ0csUUFBTCxJQUFpQkgsSUFBSSxDQUFDRyxRQUFMLENBQWNDLE1BQWQsR0FBdUIsQ0FBeEMsSUFBNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIbEQsRUFJS0osSUFBSSxDQUFDRyxRQUFMLElBQWlCSCxJQUFJLENBQUNHLFFBQUwsQ0FBY0MsTUFBZCxHQUF1QixDQUF4QyxHQUNJSixJQUFJLENBQUNHLFFBQU4sQ0FBNENFLEdBQTVDLENBQWdELFVBQUNDLEVBQUQ7QUFBQSxXQUM1QztBQUFHLFNBQUcsRUFBRUEsRUFBRSxDQUFDQyxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9ELEVBQUUsQ0FBQ0MsRUFBVixPQURKLE9BQzRCRCxFQUFFLENBQUNKLElBRC9CLENBRDRDO0FBQUEsR0FBaEQsQ0FESCxHQU9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBWFIsQ0FESixDQURKO0FBa0JILENBbkJEOztLQUFNSCxJO0FBcUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUG9zdHNcXFtpZF0uanMuNzQ0ZmM2YjdiMzRkOTNmZWI4MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQb3N0QmxvY2ssIFRpdGxlLCBCb2R5IH0gZnJvbSAnLi9Qb3N0LnN0eWxlZCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcyc7XG5cbmludGVyZmFjZSBQcm9wc1Bvc3Qge1xuICAgIHBvc3Q6IHR5cGVzLlBvc3RUeXBlO1xufVxuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9OiBQcm9wc1Bvc3QpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxQb3N0QmxvY2s+XG4gICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPEJvZHk+e3Bvc3QuYm9keX08L0JvZHk+XG4gICAgICAgICAgICAgICAge3Bvc3QuY29tbWVudHMgJiYgcG9zdC5jb21tZW50cy5sZW5ndGggPiAwICYmIDxoMz5Db21tZW50czogPC9oMz59XG4gICAgICAgICAgICAgICAge3Bvc3QuY29tbWVudHMgJiYgcG9zdC5jb21tZW50cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAocG9zdC5jb21tZW50cyBhcyBBcnJheTx0eXBlcy5Db21tZW50VHlwZT4pLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17ZWwuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5pZH06IDwvc3Bhbj4ge2VsLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGgzPk5vIGNvbW1lbnRzIGZvciB0aGlzIHBvc3Q8L2gzPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1Bvc3RCbG9jaz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9