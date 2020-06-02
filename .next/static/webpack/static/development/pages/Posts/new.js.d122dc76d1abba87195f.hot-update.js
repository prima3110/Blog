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
/* harmony import */ var _CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreatePost.styled */ "./components/CreatePost/CreatePost.styled.ts");
var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\CreatePost\\CreatePost.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var CreatePost = function CreatePost(_ref) {
  _s();

  var addPost = _ref.addPost;

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmitForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter your title here",
    value: input,
    onChange: onChangeInput,
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
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
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Add New Post")));
};

_s(CreatePost, "0OWL0rTe7rhz3CwJOA/mqoFibgI=");

_c = CreatePost;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addPost: function addPost(post) {
      return dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_2__["createPost"](post));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(CreatePost));

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

/***/ }),

/***/ "./components/Loader/Loader.styled.ts":
false,

/***/ "./components/Loader/Loader.tsx":
false,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZVBvc3QvQ3JlYXRlUG9zdC50c3giXSwibmFtZXMiOlsiQ3JlYXRlUG9zdCIsImFkZFBvc3QiLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJ0ZXh0YXJlYSIsInNldFRleHRhcmVhIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGV4dGFyZWEiLCJyZXNldCIsIm9uU3VibWl0Rm9ybSIsInByZXZlbnREZWZhdWx0IiwibmV3UG9zdCIsInRpdGxlIiwiYm9keSIsImFsZXJ0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwb3N0IiwiYmxvZ09wZXJhdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQztBQUFBOztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7O0FBQUEsa0JBQ3pCQyxzREFBUSxDQUFDLEVBQUQsQ0FEaUI7QUFBQSxNQUM1Q0MsS0FENEM7QUFBQSxNQUNyQ0MsUUFEcUM7O0FBQUEsbUJBRW5CRixzREFBUSxDQUFDLEVBQUQsQ0FGVztBQUFBLE1BRTVDRyxRQUY0QztBQUFBLE1BRWxDQyxXQUZrQzs7QUFJbkQsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQWE7QUFDL0JKLFlBQVEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBUjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDSCxDQUFELEVBQWE7QUFDbENGLGVBQVcsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBWTtBQUN0QlIsWUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRSxlQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0gsR0FIRDs7QUFLQSxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxDQUFELEVBQWE7QUFDOUJBLEtBQUMsQ0FBQ00sY0FBRjs7QUFDQSxRQUFJWCxLQUFLLElBQUlFLFFBQWIsRUFBdUI7QUFDbkIsVUFBTVUsT0FBTyxHQUFHO0FBQ1pDLGFBQUssRUFBRWIsS0FESztBQUVaYyxZQUFJLEVBQUVaO0FBRk0sT0FBaEI7QUFJQUosYUFBTyxDQUFDYyxPQUFELENBQVA7QUFDQUgsV0FBSztBQUNMTSxXQUFLLENBQUMsK0JBQUQsQ0FBTDtBQUNIO0FBQ0osR0FYRDs7QUFhQSxTQUNJLG1FQUNJLE1BQUMsdURBQUQ7QUFBTSxZQUFRLEVBQUVMLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQU8sZUFBVyxFQUFDLHVCQUFuQjtBQUEyQyxTQUFLLEVBQUVWLEtBQWxEO0FBQXlELFlBQVEsRUFBRUksYUFBbkU7QUFBa0YsWUFBUSxNQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLDJEQUFEO0FBQ0ksUUFBSSxFQUFDLElBRFQ7QUFFSSxRQUFJLEVBQUMsSUFGVDtBQUdJLFFBQUksRUFBQyxNQUhUO0FBSUksZUFBVyxFQUFDLHNCQUpoQjtBQUtJLFNBQUssRUFBRUYsUUFMWDtBQU1JLFlBQVEsRUFBRU0sZ0JBTmQ7QUFPSSxZQUFRLE1BUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBV0ksTUFBQyx5REFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEosQ0FESixDQURKO0FBaUJILENBL0NEOztHQUFNWCxVOztLQUFBQSxVOztBQWlETixJQUFNbUIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBcUI7QUFDNUNuQixXQUFPLEVBQUUsaUJBQUNvQixJQUFEO0FBQUEsYUFBZ0JELFFBQVEsQ0FBQ0UscUVBQUEsQ0FBMEJELElBQTFCLENBQUQsQ0FBeEI7QUFBQTtBQURtQyxHQUFyQjtBQUFBLENBQTNCOztBQUllRSwwSEFBTyxDQUFDLElBQUQsRUFBT0osa0JBQVAsQ0FBUCxDQUFrQ25CLFVBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFBvc3RzXFxuZXcuanMuZDEyMmRjNzZkMWFiYmE4NzE5NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBibG9nT3BlcmF0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dPcGVyYXRpb25zJztcbmltcG9ydCB7IEZvcm0sIFRleHRhcmVhLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnLi9DcmVhdGVQb3N0LnN0eWxlZCc7XG5cbmludGVyZmFjZSBNU1RQIHtcbiAgICBhZGRQb3N0PzogKHBvc3QpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENyZWF0ZVBvc3QgPSAoeyBhZGRQb3N0IH06IE1TVFApOiBKU1guRWxlbWVudCA9PiB7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3RleHRhcmVhLCBzZXRUZXh0YXJlYV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gKGUpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNoYW5nZVRleHRhcmVhID0gKGUpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0VGV4dGFyZWEoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0SW5wdXQoJycpO1xuICAgICAgICBzZXRUZXh0YXJlYSgnJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IChlKTogdm9pZCA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGlucHV0ICYmIHRleHRhcmVhKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQb3N0ID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpbnB1dCxcbiAgICAgICAgICAgICAgICBib2R5OiB0ZXh0YXJlYSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGRQb3N0KG5ld1Bvc3QpO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3VyIHBvc3Qgc3VjY2Vzc2Z1bGx5IGFkZGVkIScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHRpdGxlIGhlcmVcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICByb3dzPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBib2R5IGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHRhcmVhfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgID48L1RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBOZXcgUG9zdDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKTogTVNUUCA9PiAoe1xuICAgIGFkZFBvc3Q6IChwb3N0KTogdm9pZCA9PiBkaXNwYXRjaChibG9nT3BlcmF0aW9ucy5jcmVhdGVQb3N0KHBvc3QpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ3JlYXRlUG9zdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9