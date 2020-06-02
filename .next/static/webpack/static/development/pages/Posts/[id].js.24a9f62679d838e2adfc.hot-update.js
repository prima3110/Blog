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
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\pages\\Posts\\[id].tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var PostPage = function PostPage(_ref) {
  _s();

  var postById = _ref.postById,
      getPost = _ref.getPost;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPost(id);
  }, [getPost, id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, postById && __jsx(_components_Post_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: postById,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 27
    }
  }));
};

_s(PostPage, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = PostPage;

var mapStateToProps = function mapStateToProps(store) {
  return {
    postById: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_4__["getPost"](store)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPost: function getPost(id) {
      return dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_5__["getPost"](id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Qb3N0cy8udHN4Il0sIm5hbWVzIjpbIlBvc3RQYWdlIiwicG9zdEJ5SWQiLCJnZXRQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiYmxvZ1NlbGVjdG9ycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmxvZ09wZXJhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZ0JBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXVEO0FBQUE7O0FBQUEsTUFBcERDLFFBQW9ELFFBQXBEQSxRQUFvRDtBQUFBLE1BQTFDQyxPQUEwQyxRQUExQ0EsT0FBMEM7QUFDcEUsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURvRSxNQUU1REMsRUFGNEQsR0FFckRGLE1BQU0sQ0FBQ0csS0FGOEMsQ0FFNURELEVBRjREO0FBSXBFRSx5REFBUyxDQUFDLFlBQU07QUFDWkwsV0FBTyxDQUFDRyxFQUFELENBQVA7QUFDSCxHQUZRLEVBRU4sQ0FBQ0gsT0FBRCxFQUFVRyxFQUFWLENBRk0sQ0FBVDtBQUlBLFNBQU8sbUVBQUdKLFFBQVEsSUFBSSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxFQUFFQSxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBZixDQUFQO0FBQ0gsQ0FURDs7R0FBTUQsUTtVQUNhSSxxRDs7O0tBRGJKLFE7O0FBV04sSUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBbUM7QUFDdkRSLFlBQVEsRUFBRVMsaUVBQUEsQ0FBc0JELEtBQXRCO0FBRDZDLEdBQW5DO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBb0M7QUFDM0RWLFdBQU8sRUFBRSxpQkFBQ0csRUFBRDtBQUFBLGFBQXNCTyxRQUFRLENBQUNDLGtFQUFBLENBQXVCUixFQUF2QixDQUFELENBQTlCO0FBQUE7QUFEa0QsR0FBcEM7QUFBQSxDQUEzQjs7QUFJZVMsMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNYLFFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFBvc3RzXFxbaWRdLmpzLjI0YTlmNjI2NzlkODM4ZTJhZGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdC9Qb3N0JztcbmltcG9ydCAqIGFzIGJsb2dTZWxlY3RvcnMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nU2VsZWN0b3JzJztcbmltcG9ydCAqIGFzIGJsb2dPcGVyYXRpb25zIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ09wZXJhdGlvbnMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nVHlwZXMnO1xuXG5pbnRlcmZhY2UgTURUUCB7XG4gICAgZ2V0UG9zdDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBNU1RQIHtcbiAgICBwb3N0QnlJZDogdHlwZXMuUG9zdFR5cGU7XG59XG5cbmludGVyZmFjZSBQb3N0UGFnZVByb3BzIHtcbiAgICBwb3N0QnlJZDogdHlwZXMuUG9zdFR5cGU7XG4gICAgZ2V0UG9zdDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFBvc3RQYWdlID0gKHsgcG9zdEJ5SWQsIGdldFBvc3QgfTogUG9zdFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRQb3N0KGlkKTtcbiAgICB9LCBbZ2V0UG9zdCwgaWRdKTtcblxuICAgIHJldHVybiA8Pntwb3N0QnlJZCAmJiA8UG9zdCBwb3N0PXtwb3N0QnlJZH0gLz59PC8+O1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlOiB0eXBlcy5TdG9yZVR5cGUpOiBNU1RQID0+ICh7XG4gICAgcG9zdEJ5SWQ6IGJsb2dTZWxlY3RvcnMuZ2V0UG9zdChzdG9yZSksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiAoYW55KSA9PiB2b2lkKTogTURUUCA9PiAoe1xuICAgIGdldFBvc3Q6IChpZDogc3RyaW5nKTogdm9pZCA9PiBkaXNwYXRjaChibG9nT3BlcmF0aW9ucy5nZXRQb3N0KGlkKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUG9zdFBhZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==