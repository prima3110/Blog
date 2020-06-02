webpackHotUpdate("static\\development\\pages\\Posts\\new.js",{

/***/ "./components/CreatePost/CreatePost.tsx":
/*!**********************************************!*\
  !*** ./components/CreatePost/CreatePost.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/blog/blogOperations */ "./redux/blog/blogOperations.ts");
/* harmony import */ var _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/blog/blogSelectors */ "./redux/blog/blogSelectors.ts");
/* harmony import */ var _CreatePost_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreatePost.styled */ "./components/CreatePost/CreatePost.styled.ts");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\CreatePost\\CreatePost.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CreatePost = function CreatePost(_ref) {
  _s();

  var addPost = _ref.addPost,
      isLoading = _ref.isLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      input = _useState[0],
      setInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      textarea = _useState2[0],
      setTextarea = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    setInput(e.target.value);
  };

  var onChangeTextarea = function onChangeTextarea(e) {
    setTextarea(e.target.value);
  };

  var reset = function reset() {
    setInput('');
    setTextarea('');
  };

  var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();

    if (input && textarea) {
      var newPost = {
        title: input,
        body: textarea
      };
      addPost(newPost);
      reset();
      alert('Your post successfully added!');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading && __jsx(Loader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 27
    }
  }), __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "Enter your title here",
    value: input,
    onChange: onChangeInput,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_4__["Textarea"], {
    rows: "20",
    cols: "20",
    name: "text",
    placeholder: "Enter your body here",
    value: textarea,
    onChange: onChangeTextarea,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Add New Post")));
};

_s(CreatePost, "0OWL0rTe7rhz3CwJOA/mqoFibgI=");

_c = CreatePost;

var mapStateToProps = function mapStateToProps(store) {
  return {
    isLoading: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_3__["getLoader"](store)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addPost: function addPost(post) {
      return dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_2__["createPost"](post));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CreatePost));

var _c;

$RefreshReg$(_c, "CreatePost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZVBvc3QvQ3JlYXRlUG9zdC50c3giXSwibmFtZXMiOlsiQ3JlYXRlUG9zdCIsImFkZFBvc3QiLCJpc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJ0ZXh0YXJlYSIsInNldFRleHRhcmVhIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGV4dGFyZWEiLCJyZXNldCIsIm9uU3VibWl0Rm9ybSIsInByZXZlbnREZWZhdWx0IiwibmV3UG9zdCIsInRpdGxlIiwiYm9keSIsImFsZXJ0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJibG9nU2VsZWN0b3JzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwb3N0IiwiYmxvZ09wZXJhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUErQztBQUFBOztBQUFBLE1BQTVDQyxPQUE0QyxRQUE1Q0EsT0FBNEM7QUFBQSxNQUFuQ0MsU0FBbUMsUUFBbkNBLFNBQW1DOztBQUFBLGtCQUNwQ0Msc0RBQVEsQ0FBQyxFQUFELENBRDRCO0FBQUEsTUFDdkRDLEtBRHVEO0FBQUEsTUFDaERDLFFBRGdEOztBQUFBLG1CQUU5QkYsc0RBQVEsQ0FBQyxFQUFELENBRnNCO0FBQUEsTUFFdkRHLFFBRnVEO0FBQUEsTUFFN0NDLFdBRjZDOztBQUk5RCxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBYTtBQUMvQkosWUFBUSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFSO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNILENBQUQsRUFBYTtBQUNsQ0YsZUFBVyxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFZO0FBQ3RCUixZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FFLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNMLENBQUQsRUFBYTtBQUM5QkEsS0FBQyxDQUFDTSxjQUFGOztBQUNBLFFBQUlYLEtBQUssSUFBSUUsUUFBYixFQUF1QjtBQUNuQixVQUFNVSxPQUFPLEdBQUc7QUFDWkMsYUFBSyxFQUFFYixLQURLO0FBRVpjLFlBQUksRUFBRVo7QUFGTSxPQUFoQjtBQUlBTCxhQUFPLENBQUNlLE9BQUQsQ0FBUDtBQUNBSCxXQUFLO0FBQ0xNLFdBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0g7QUFDSixHQVhEOztBQWFBLFNBQ0ksbUVBQ0tqQixTQUFTLElBQUksTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEbEIsRUFFSSxNQUFDLHVEQUFEO0FBQU0sWUFBUSxFQUFFWSxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFPLGVBQVcsRUFBQyx1QkFBbkI7QUFBMkMsU0FBSyxFQUFFVixLQUFsRDtBQUF5RCxZQUFRLEVBQUVJLGFBQW5FO0FBQWtGLFlBQVEsTUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQywyREFBRDtBQUNJLFFBQUksRUFBQyxJQURUO0FBRUksUUFBSSxFQUFDLElBRlQ7QUFHSSxRQUFJLEVBQUMsTUFIVDtBQUlJLGVBQVcsRUFBQyxzQkFKaEI7QUFLSSxTQUFLLEVBQUVGLFFBTFg7QUFNSSxZQUFRLEVBQUVNLGdCQU5kO0FBT0ksWUFBUSxNQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVdJLE1BQUMseURBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhKLENBRkosQ0FESjtBQWtCSCxDQWhERDs7R0FBTVosVTs7S0FBQUEsVTs7QUFrRE4sSUFBTW9CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDaENuQixhQUFTLEVBQUVvQixtRUFBQSxDQUF3QkQsS0FBeEI7QUFEcUIsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQXFCO0FBQzVDdkIsV0FBTyxFQUFFLGlCQUFDd0IsSUFBRDtBQUFBLGFBQWdCRCxRQUFRLENBQUNFLHFFQUFBLENBQTBCRCxJQUExQixDQUFELENBQXhCO0FBQUE7QUFEbUMsR0FBckI7QUFBQSxDQUEzQjs7QUFJZUUsMEhBQU8sQ0FBQ1AsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkN2QixVQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxQb3N0c1xcbmV3LmpzLjNlYTYxYzY0NzU3ZDk4ZGUxODM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYmxvZ09wZXJhdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nT3BlcmF0aW9ucyc7XG5pbXBvcnQgKiBhcyBibG9nU2VsZWN0b3JzIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ1NlbGVjdG9ycyc7XG5pbXBvcnQgeyBGb3JtLCBUZXh0YXJlYSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJy4vQ3JlYXRlUG9zdC5zdHlsZWQnO1xuXG5pbnRlcmZhY2UgTVNUUCB7XG4gICAgYWRkUG9zdDogKHBvc3QpID0+IHZvaWQ7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBDcmVhdGVQb3N0ID0gKHsgYWRkUG9zdCwgaXNMb2FkaW5nIH06IE1TVFApOiBKU1guRWxlbWVudCA9PiB7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3RleHRhcmVhLCBzZXRUZXh0YXJlYV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gKGUpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNoYW5nZVRleHRhcmVhID0gKGUpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0VGV4dGFyZWEoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0SW5wdXQoJycpO1xuICAgICAgICBzZXRUZXh0YXJlYSgnJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IChlKTogdm9pZCA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGlucHV0ICYmIHRleHRhcmVhKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQb3N0ID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpbnB1dCxcbiAgICAgICAgICAgICAgICBib2R5OiB0ZXh0YXJlYSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGRQb3N0KG5ld1Bvc3QpO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3VyIHBvc3Qgc3VjY2Vzc2Z1bGx5IGFkZGVkIScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIgLz59XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHRpdGxlIGhlcmVcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICByb3dzPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBib2R5IGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHRhcmVhfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgID48L1RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBOZXcgUG9zdDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlKSA9PiAoe1xuICAgIGlzTG9hZGluZzogYmxvZ1NlbGVjdG9ycy5nZXRMb2FkZXIoc3RvcmUpLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk6IE1TVFAgPT4gKHtcbiAgICBhZGRQb3N0OiAocG9zdCk6IHZvaWQgPT4gZGlzcGF0Y2goYmxvZ09wZXJhdGlvbnMuY3JlYXRlUG9zdChwb3N0KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ3JlYXRlUG9zdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9