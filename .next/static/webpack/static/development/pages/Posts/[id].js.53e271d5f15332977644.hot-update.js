webpackHotUpdate("static\\development\\pages\\Posts\\[id].js",{

/***/ "./pages/Posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/Posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Post_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Post/Post */ "./components/Post/Post.tsx");
/* harmony import */ var _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/blog/blogSelectors */ "./redux/blog/blogSelectors.ts");
/* harmony import */ var _redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/blog/blogOperations */ "./redux/blog/blogOperations.ts");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../..//components/Loader/Loader */ "./components/Loader/Loader.tsx");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\pages\\Posts\\[id].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PostPage = function PostPage(_ref) {
  _s();

  var postById = _ref.postById,
      getPost = _ref.getPost,
      isLoading = _ref.isLoading;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPost(+id);
  }, [getPost, id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 27
    }
  }), postById && __jsx(_components_Post_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: postById,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 26
    }
  }));
};

_s(PostPage, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = PostPage;

var mapStateToProps = function mapStateToProps(store) {
  return {
    postById: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_4__["getPost"](store),
    isLoading: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_4__["getLoader"](store)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPost: function getPost(id) {
      return dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_5__["getPost"](+id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PostPage));

var _c;

$RefreshReg$(_c, "PostPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Qb3N0cy8udHN4Il0sIm5hbWVzIjpbIlBvc3RQYWdlIiwicG9zdEJ5SWQiLCJnZXRQb3N0IiwiaXNMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiYmxvZ1NlbGVjdG9ycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmxvZ09wZXJhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBaUJBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtFO0FBQUE7O0FBQUEsTUFBL0RDLFFBQStELFFBQS9EQSxRQUErRDtBQUFBLE1BQXJEQyxPQUFxRCxRQUFyREEsT0FBcUQ7QUFBQSxNQUE1Q0MsU0FBNEMsUUFBNUNBLFNBQTRDO0FBQy9FLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEK0UsTUFFdkVDLEVBRnVFLEdBRWhFRixNQUFNLENBQUNHLEtBRnlELENBRXZFRCxFQUZ1RTtBQUkvRUUseURBQVMsQ0FBQyxZQUFNO0FBQ1pOLFdBQU8sQ0FBQyxDQUFDSSxFQUFGLENBQVA7QUFDSCxHQUZRLEVBRU4sQ0FBQ0osT0FBRCxFQUFVSSxFQUFWLENBRk0sQ0FBVDtBQUlBLFNBQ0ksbUVBQ0tILFNBQVMsSUFBSSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbEIsRUFFS0YsUUFBUSxJQUFJLE1BQUMsNkRBQUQ7QUFBTSxRQUFJLEVBQUVBLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZqQixDQURKO0FBTUgsQ0FkRDs7R0FBTUQsUTtVQUNhSyxxRDs7O0tBRGJMLFE7O0FBZ0JOLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQW1DO0FBQ3ZEVCxZQUFRLEVBQUVVLGlFQUFBLENBQXNCRCxLQUF0QixDQUQ2QztBQUV2RFAsYUFBUyxFQUFFUSxtRUFBQSxDQUF3QkQsS0FBeEI7QUFGNEMsR0FBbkM7QUFBQSxDQUF4Qjs7QUFLQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFvQztBQUMzRFgsV0FBTyxFQUFFLGlCQUFDSSxFQUFEO0FBQUEsYUFBc0JPLFFBQVEsQ0FBQ0Msa0VBQUEsQ0FBdUIsQ0FBQ1IsRUFBeEIsQ0FBRCxDQUE5QjtBQUFBO0FBRGtELEdBQXBDO0FBQUEsQ0FBM0I7O0FBSWVTLDBIQUFPLENBQUNOLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDWixRQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxQb3N0c1xcW2lkXS5qcy41M2UyNzFkNWYxNTMzMjk3NzY0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3QvUG9zdCc7XG5pbXBvcnQgKiBhcyBibG9nU2VsZWN0b3JzIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ1NlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBibG9nT3BlcmF0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dPcGVyYXRpb25zJztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ1R5cGVzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5cbmludGVyZmFjZSBNRFRQIHtcbiAgICBnZXRQb3N0OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIE1TVFAge1xuICAgIHBvc3RCeUlkOiB0eXBlcy5Qb3N0VHlwZTtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQb3N0UGFnZVByb3BzIHtcbiAgICBwb3N0QnlJZDogdHlwZXMuUG9zdFR5cGU7XG4gICAgZ2V0UG9zdDogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBQb3N0UGFnZSA9ICh7IHBvc3RCeUlkLCBnZXRQb3N0LCBpc0xvYWRpbmcgfTogUG9zdFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRQb3N0KCtpZCk7XG4gICAgfSwgW2dldFBvc3QsIGlkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGVyIC8+fVxuICAgICAgICAgICAge3Bvc3RCeUlkICYmIDxQb3N0IHBvc3Q9e3Bvc3RCeUlkfSAvPn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZTogdHlwZXMuU3RvcmVUeXBlKTogTVNUUCA9PiAoe1xuICAgIHBvc3RCeUlkOiBibG9nU2VsZWN0b3JzLmdldFBvc3Qoc3RvcmUpLFxuICAgIGlzTG9hZGluZzogYmxvZ1NlbGVjdG9ycy5nZXRMb2FkZXIoc3RvcmUpLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IE1EVFAgPT4gKHtcbiAgICBnZXRQb3N0OiAoaWQ6IG51bWJlcik6IHZvaWQgPT4gZGlzcGF0Y2goYmxvZ09wZXJhdGlvbnMuZ2V0UG9zdCgraWQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQb3N0UGFnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9