webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostsList/PostsList.tsx":
/*!********************************************!*\
  !*** ./components/PostsList/PostsList.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostsList_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostsList.styled */ "./components/PostsList/PostsList.styled.ts");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\PostsList\\PostsList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Posts = function Posts(_ref) {
  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, posts.map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/posts/[id]",
      as: "/posts/".concat(post.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }, __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["PostBlock"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 29
      }
    }, __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 33
      }
    }, post.title), __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["Body"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 33
      }
    }, post.body), post.comments && post.comments.map(function (el) {
      return __jsx("p", {
        key: el.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 41
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 45
        }
      }, el.id, ": "), " ", el.body);
    })));
  }))));
};

_c = Posts;
/* harmony default export */ __webpack_exports__["default"] = (Posts);

var _c;

$RefreshReg$(_c, "Posts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RzTGlzdC9Qb3N0c0xpc3QudHN4Il0sIm5hbWVzIjpbIlBvc3RzIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFNQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE2QztBQUFBLHdCQUExQ0MsS0FBMEM7QUFBQSxNQUExQ0EsS0FBMEMsMkJBQWxDLEVBQWtDO0FBQ3ZELFNBQ0ksbUVBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNQLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixRQUFFLG1CQUFZQSxJQUFJLENBQUNDLEVBQWpCLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUUQsSUFBSSxDQUFDRSxLQUFiLENBREosRUFFSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0YsSUFBSSxDQUFDRyxJQUFaLENBRkosRUFJS0gsSUFBSSxDQUFDSSxRQUFMLElBQ0lKLElBQUksQ0FBQ0ksUUFBTixDQUE0Q0wsR0FBNUMsQ0FBZ0QsVUFBQ00sRUFBRDtBQUFBLGFBQzVDO0FBQUcsV0FBRyxFQUFFQSxFQUFFLENBQUNKLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBT0ksRUFBRSxDQUFDSixFQUFWLE9BREosT0FDNEJJLEVBQUUsQ0FBQ0YsSUFEL0IsQ0FENEM7QUFBQSxLQUFoRCxDQUxSLENBREosQ0FETztBQUFBLEdBQVYsQ0FETCxDQURKLENBREosQ0FESjtBQXVCSCxDQXhCRDs7S0FBTU4sSztBQTBCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmI2NDNhMGM1NzIzMzRiYTVlZmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQb3N0IGZyb20gJy4uL1Bvc3QvUG9zdCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcyc7XG5pbXBvcnQgeyBXcmFwcGVyLCBMaXN0LCBQb3N0QmxvY2ssIFRpdGxlLCBCb2R5IH0gZnJvbSAnLi9Qb3N0c0xpc3Quc3R5bGVkJztcblxuaW50ZXJmYWNlIFBvc3RzQXJyYXkge1xuICAgIHBvc3RzOiB0eXBlcy5Qb3N0VHlwZVtdO1xufVxuXG5jb25zdCBQb3N0cyA9ICh7IHBvc3RzID0gW10gfTogUG9zdHNBcnJheSk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL1tpZF1cIiBhcz17YC9wb3N0cy8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5Pntwb3N0LmJvZHl9PC9Cb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zdC5jb21tZW50cyBhcyBBcnJheTx0eXBlcy5Db21tZW50VHlwZT4pLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2VsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmlkfTogPC9zcGFuPiB7ZWwuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9