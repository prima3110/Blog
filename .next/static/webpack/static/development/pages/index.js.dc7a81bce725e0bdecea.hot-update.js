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
      lineNumber: 20,
      columnNumber: 17
    }
  }, posts.map(function (post) {
    return (// <Post key={post.id} post={post} />
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 29
        }
      }, __jsx("h3", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 33
        }
      }, post.title), __jsx("p", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 33
        }
      }, post.body)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/posts/[id]",
        as: "/posts/".concat(post.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 33
        }
      }, "View")), __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["PostBlock"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 29
        }
      }, __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 33
        }
      }, post.title), __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["Body"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 33
        }
      }, post.body), post.comments && post.comments.map(function (el) {
        return __jsx("p", {
          key: el.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 41
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 45
          }
        }, el.id, ": "), " ", el.body);
      })))
    );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RzTGlzdC9Qb3N0c0xpc3QudHN4Il0sIm5hbWVzIjpbIlBvc3RzIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJib2R5IiwiaWQiLCJjb21tZW50cyIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFNQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE2QztBQUFBLHdCQUExQ0MsS0FBMEM7QUFBQSxNQUExQ0EsS0FBMEMsMkJBQWxDLEVBQWtDO0FBQ3ZELFNBQ0ksbUVBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNQO0FBQ0EseUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0EsSUFBSSxDQUFDQyxLQUFWLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlELElBQUksQ0FBQ0UsSUFBVCxDQUZKLENBREosRUFLSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsVUFBRSxtQkFBWUYsSUFBSSxDQUFDRyxFQUFqQixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQUxKLEVBUUksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVFILElBQUksQ0FBQ0MsS0FBYixDQURKLEVBRUksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQU9ELElBQUksQ0FBQ0UsSUFBWixDQUZKLEVBSUtGLElBQUksQ0FBQ0ksUUFBTCxJQUNJSixJQUFJLENBQUNJLFFBQU4sQ0FBNENMLEdBQTVDLENBQWdELFVBQUNNLEVBQUQ7QUFBQSxlQUM1QztBQUFHLGFBQUcsRUFBRUEsRUFBRSxDQUFDRixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQU9FLEVBQUUsQ0FBQ0YsRUFBVixPQURKLE9BQzRCRSxFQUFFLENBQUNILElBRC9CLENBRDRDO0FBQUEsT0FBaEQsQ0FMUixDQVJKO0FBRk87QUFBQSxHQUFWLENBREwsQ0FOSixDQURKLENBREo7QUFvQ0gsQ0FyQ0Q7O0tBQU1MLEs7QUF1Q1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kYzdhODFiY2U3MjVlMGJkZWNlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi9Qb3N0L1Bvc3QnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nVHlwZXMnO1xuaW1wb3J0IHsgV3JhcHBlciwgTGlzdCwgUG9zdEJsb2NrLCBUaXRsZSwgQm9keSB9IGZyb20gJy4vUG9zdHNMaXN0LnN0eWxlZCc7XG5cbmludGVyZmFjZSBQb3N0c0FycmF5IHtcbiAgICBwb3N0czogdHlwZXMuUG9zdFR5cGVbXTtcbn1cblxuY29uc3QgUG9zdHMgPSAoeyBwb3N0cyA9IFtdIH06IFBvc3RzQXJyYXkpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIHsvKiA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogdHlwZXMuUG9zdFR5cGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0IGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PiAqL31cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogdHlwZXMuUG9zdFR5cGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxQb3N0IGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvW2lkXVwiIGFzPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+VmlldzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb2R5Pntwb3N0LmJvZHl9PC9Cb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zdC5jb21tZW50cyBhcyBBcnJheTx0eXBlcy5Db21tZW50VHlwZT4pLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2VsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmlkfTogPC9zcGFuPiB7ZWwuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=