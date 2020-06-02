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
  console.log('post', post);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts/[id]",
    as: "/posts/".concat(post.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_2__["PostBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, post.title), __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_2__["Body"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, post.body), "Comments:", post.comments && post.comments.map(function (el) {
    return __jsx("p", {
      key: el.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvUG9zdC50c3giXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsIm1hcCIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFVQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFzQztBQUFBLE1BQW5DQyxJQUFtQyxRQUFuQ0EsSUFBbUM7QUFDL0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0EsU0FDSSxtRUFDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsTUFBRSxtQkFBWUEsSUFBSSxDQUFDRyxFQUFqQixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFILElBQUksQ0FBQ0ksS0FBYixDQURKLEVBRUksTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9KLElBQUksQ0FBQ0ssSUFBWixDQUZKLGVBSUtMLElBQUksQ0FBQ00sUUFBTCxJQUNHTixJQUFJLENBQUNNLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxFQUFEO0FBQUEsV0FDZDtBQUFHLFNBQUcsRUFBRUEsRUFBRSxDQUFDTCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9LLEVBQUUsQ0FBQ0wsRUFBVixPQURKLE9BQzRCSyxFQUFFLENBQUNILElBRC9CLENBRGM7QUFBQSxHQUFsQixDQUxSLENBREosQ0FESixDQURKO0FBaUJILENBbkJEOztLQUFNTixJO0FBcUJTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUG9zdHNcXFtpZF0uanMuZGRhMDQ5ZjEwZjgxZTRiMmFkYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgUG9zdEJsb2NrLCBUaXRsZSwgQm9keSB9IGZyb20gJy4vUG9zdC5zdHlsZWQnO1xuXG5pbnRlcmZhY2UgUHJvcHNQb3N0IHtcbiAgICBwb3N0OiB7XG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGJvZHk6IHN0cmluZztcbiAgICB9O1xufVxuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9OiBQcm9wc1Bvc3QpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Bvc3QnLCBwb3N0KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9baWRdXCIgYXM9e2AvcG9zdHMvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxQb3N0QmxvY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Qm9keT57cG9zdC5ib2R5fTwvQm9keT5cbiAgICAgICAgICAgICAgICAgICAgQ29tbWVudHM6XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmNvbW1lbnRzLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2VsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmlkfTogPC9zcGFuPiB7ZWwuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1Bvc3RCbG9jaz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9