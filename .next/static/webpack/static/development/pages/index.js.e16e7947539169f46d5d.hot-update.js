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
      __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/posts/[id]",
        as: "/posts/".concat(post.id),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 29
        }
      }, __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["PostBlock"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 33
        }
      }, __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 37
        }
      }, post.title), __jsx(_PostsList_styled__WEBPACK_IMPORTED_MODULE_2__["Body"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 37
        }
      }, post.body), post.comments && post.comments.map(function (el) {
        return __jsx("p", {
          key: el.id,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 45
          }
        }, __jsx("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 49
          }
        }, el.id, ": "), " ", el.body);
      }))))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RzTGlzdC9Qb3N0c0xpc3QudHN4Il0sIm5hbWVzIjpbIlBvc3RzIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFNQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE2QztBQUFBLHdCQUExQ0MsS0FBMEM7QUFBQSxNQUExQ0EsS0FBMEMsMkJBQWxDLEVBQWtDO0FBQ3ZELFNBQ0ksbUVBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNQO0FBQ0EseUVBQ0ksTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLFVBQUUsbUJBQVlBLElBQUksQ0FBQ0MsRUFBakIsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFRRCxJQUFJLENBQUNFLEtBQWIsQ0FESixFQUVJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFPRixJQUFJLENBQUNHLElBQVosQ0FGSixFQUlLSCxJQUFJLENBQUNJLFFBQUwsSUFDSUosSUFBSSxDQUFDSSxRQUFOLENBQTRDTCxHQUE1QyxDQUFnRCxVQUFDTSxFQUFEO0FBQUEsZUFDNUM7QUFBRyxhQUFHLEVBQUVBLEVBQUUsQ0FBQ0osRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPSSxFQUFFLENBQUNKLEVBQVYsT0FESixPQUM0QkksRUFBRSxDQUFDRixJQUQvQixDQUQ0QztBQUFBLE9BQWhELENBTFIsQ0FESixDQURKO0FBRk87QUFBQSxHQUFWLENBREwsQ0FOSixDQURKLENBREo7QUErQkgsQ0FoQ0Q7O0tBQU1OLEs7QUFrQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lMTZlNzk0NzUzOTE2OWY0NmQ1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi9Qb3N0L1Bvc3QnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nVHlwZXMnO1xuaW1wb3J0IHsgV3JhcHBlciwgTGlzdCwgUG9zdEJsb2NrLCBUaXRsZSwgQm9keSB9IGZyb20gJy4vUG9zdHNMaXN0LnN0eWxlZCc7XG5cbmludGVyZmFjZSBQb3N0c0FycmF5IHtcbiAgICBwb3N0czogdHlwZXMuUG9zdFR5cGVbXTtcbn1cblxuY29uc3QgUG9zdHMgPSAoeyBwb3N0cyA9IFtdIH06IFBvc3RzQXJyYXkpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIHsvKiA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogdHlwZXMuUG9zdFR5cGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0IGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9MaXN0PiAqL31cbiAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogdHlwZXMuUG9zdFR5cGUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxQb3N0IGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9baWRdXCIgYXM9e2AvcG9zdHMvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9keT57cG9zdC5ib2R5fTwvQm9keT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY29tbWVudHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocG9zdC5jb21tZW50cyBhcyBBcnJheTx0eXBlcy5Db21tZW50VHlwZT4pLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtlbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuaWR9OiA8L3NwYW4+IHtlbC5ib2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9zdEJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=