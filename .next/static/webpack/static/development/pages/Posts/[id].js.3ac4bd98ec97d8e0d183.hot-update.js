webpackHotUpdate("static\\development\\pages\\Posts\\[id].js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post.styled */ "./components/Post/Post.styled.ts");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\Post\\Post.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Post = function Post(_ref) {
  var post = _ref.post;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/[id]",
    as: "/posts/".concat(post.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_2__["PostBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, post.title), __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, post.body), post.comments && post.comments.map(function (el) {
    return __jsx("p", {
      key: el.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 33
      }
    }, el.id, ": "), " ", el.body);
  }))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvUG9zdC50c3giXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJpZCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwibWFwIiwiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXNDO0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUMvQyxTQUNJLG1FQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixNQUFFLG1CQUFZQSxJQUFJLENBQUNDLEVBQWpCLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUQsSUFBSSxDQUFDRSxLQUFiLENBREosRUFFSSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0YsSUFBSSxDQUFDRyxJQUFaLENBRkosRUFJS0gsSUFBSSxDQUFDSSxRQUFMLElBQ0lKLElBQUksQ0FBQ0ksUUFBTixDQUE0Q0MsR0FBNUMsQ0FBZ0QsVUFBQ0MsRUFBRDtBQUFBLFdBQzVDO0FBQUcsU0FBRyxFQUFFQSxFQUFFLENBQUNMLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0ssRUFBRSxDQUFDTCxFQUFWLE9BREosT0FDNEJLLEVBQUUsQ0FBQ0gsSUFEL0IsQ0FENEM7QUFBQSxHQUFoRCxDQUxSLENBREosQ0FESixDQURKO0FBaUJILENBbEJEOztLQUFNSixJO0FBb0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUG9zdHNcXFtpZF0uanMuM2FjNGJkOThlYzk3ZDhlMGQxODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgUG9zdEJsb2NrLCBUaXRsZSwgQm9keSB9IGZyb20gJy4vUG9zdC5zdHlsZWQnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nVHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHNQb3N0IHtcbiAgICBwb3N0OiB0eXBlcy5Qb3N0VHlwZTtcbn1cblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfTogUHJvcHNQb3N0KTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL1tpZF1cIiBhcz17YC9wb3N0cy8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgPFBvc3RCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxCb2R5Pntwb3N0LmJvZHl9PC9Cb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAocG9zdC5jb21tZW50cyBhcyBBcnJheTx0eXBlcy5Db21tZW50VHlwZT4pLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2VsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmlkfTogPC9zcGFuPiB7ZWwuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1Bvc3RCbG9jaz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9