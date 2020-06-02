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
/* harmony import */ var _Post_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.styled */ "./components/Post/Post.styled.ts");
/* harmony import */ var _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/blog/blogSelectors */ "./redux/blog/blogSelectors.ts");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Loader/Loader */ "./components/Loader/Loader.tsx");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\Post\\Post.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Post = function Post(_ref) {
  var post = _ref.post,
      isLoading = _ref.isLoading;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 27
    }
  }), __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["PostBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, post.title), __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["Body"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, post.body), post.comments && post.comments.length > 0 && __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 67
    }
  }, "Comments: "), post.comments && post.comments.length > 0 ? post.comments.map(function (el) {
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
  }) : __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "No comments for this post")));
};

_c = Post;

var mapStateToProps = function mapStateToProps(store) {
  return {
    isLoading: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_2__["getLoader"](store)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mapStateToProps)(Post));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvUG9zdC50c3giXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJpc0xvYWRpbmciLCJ0aXRsZSIsImJvZHkiLCJjb21tZW50cyIsImxlbmd0aCIsIm1hcCIsImVsIiwiaWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImJsb2dTZWxlY3RvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlEO0FBQUEsTUFBOUNDLElBQThDLFFBQTlDQSxJQUE4QztBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFDMUQsU0FDSSxtRUFDS0EsU0FBUyxJQUFJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURsQixFQUdRLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRCxJQUFJLENBQUNFLEtBQWIsQ0FESixFQUVJLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRixJQUFJLENBQUNHLElBQVosQ0FGSixFQUdLSCxJQUFJLENBQUNJLFFBQUwsSUFBaUJKLElBQUksQ0FBQ0ksUUFBTCxDQUFjQyxNQUFkLEdBQXVCLENBQXhDLElBQTZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSGxELEVBSUtMLElBQUksQ0FBQ0ksUUFBTCxJQUFpQkosSUFBSSxDQUFDSSxRQUFMLENBQWNDLE1BQWQsR0FBdUIsQ0FBeEMsR0FDSUwsSUFBSSxDQUFDSSxRQUFOLENBQTRDRSxHQUE1QyxDQUFnRCxVQUFDQyxFQUFEO0FBQUEsV0FDNUM7QUFBRyxTQUFHLEVBQUVBLEVBQUUsQ0FBQ0MsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPRCxFQUFFLENBQUNDLEVBQVYsT0FESixPQUM0QkQsRUFBRSxDQUFDSixJQUQvQixDQUQ0QztBQUFBLEdBQWhELENBREgsR0FPRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVhSLENBSFIsQ0FESjtBQXFCSCxDQXRCRDs7S0FBTUosSTs7QUF3Qk4sSUFBTVUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNoQ1QsYUFBUyxFQUFFVSxtRUFBQSxDQUF3QkQsS0FBeEI7QUFEcUIsR0FBWjtBQUFBLENBQXhCOztBQUllRSxzRUFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJWLElBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFBvc3RzXFxbaWRdLmpzLjAwMDRjMmJmYzA3MDZlYjIxYzhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQb3N0QmxvY2ssIFRpdGxlLCBCb2R5IH0gZnJvbSAnLi9Qb3N0LnN0eWxlZCc7XG5pbXBvcnQgKiBhcyBibG9nU2VsZWN0b3JzIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ1NlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5cbmludGVyZmFjZSBQcm9wc1Bvc3Qge1xuICAgIHBvc3Q6IHR5cGVzLlBvc3RUeXBlO1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgUG9zdCA9ICh7IHBvc3QsIGlzTG9hZGluZyB9OiBQcm9wc1Bvc3QpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlciAvPn1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICA8UG9zdEJsb2NrPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+e3Bvc3QudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPEJvZHk+e3Bvc3QuYm9keX08L0JvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRzICYmIHBvc3QuY29tbWVudHMubGVuZ3RoID4gMCAmJiA8aDM+Q29tbWVudHM6IDwvaDM+fVxuICAgICAgICAgICAgICAgICAgICB7cG9zdC5jb21tZW50cyAmJiBwb3N0LmNvbW1lbnRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAocG9zdC5jb21tZW50cyBhcyBBcnJheTx0eXBlcy5Db21tZW50VHlwZT4pLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2VsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmlkfTogPC9zcGFuPiB7ZWwuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk5vIGNvbW1lbnRzIGZvciB0aGlzIHBvc3Q8L2gzPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvUG9zdEJsb2NrPlxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xuICAgIGlzTG9hZGluZzogYmxvZ1NlbGVjdG9ycy5nZXRMb2FkZXIoc3RvcmUpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQb3N0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=