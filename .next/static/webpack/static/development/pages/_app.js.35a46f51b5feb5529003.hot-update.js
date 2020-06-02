webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.ts");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./components/Navigation/Navigation.tsx");


var _this = undefined,
    _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var MyApp = function MyApp(props) {
  var Component = props.Component,
      pageProps = props.pageProps;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  })));
}; //makeStore function that returns a new store for every request


_c = MyApp;

var makeStore = function makeStore() {
  return _redux_store__WEBPACK_IMPORTED_MODULE_4__["default"];
}; //withRedux wrapper that passes the store to the App Component


/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["default"])(makeStore)(MyApp)); // import App from 'next/app';
// import { Provider } from 'react-redux';
// import React from 'react';
// import withRedux from 'next-redux-wrapper';
// import store from '../redux/store';
// // console.log(store);
// class MyApp extends App {
//     static async getInitialProps({ Component, ctx }) {
//         const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//         return { pageProps: pageProps };
//     }
//     render(): JSX.Element {
//         const { Component, pageProps } = this.props as any;
//         // console.log(this.props);
//         return (
//             <Provider store={store}>
//                 <Component {...pageProps} />
//             </Provider>
//         );
//     }
// }
// const makeStore = () => store;
// export default withRedux(makeStore)(MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJtYWtlU3RvcmUiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFxQjtBQUFBLE1BQ3ZCQyxTQUR1QixHQUNFRCxLQURGLENBQ3ZCQyxTQUR1QjtBQUFBLE1BQ1pDLFNBRFksR0FDRUYsS0FERixDQUNaRSxTQURZO0FBRS9CLFNBQ0ksTUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRUMsb0RBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsU0FBRCx5RkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkosQ0FESjtBQU1ILENBUkQsQyxDQVVBOzs7S0FWTUgsSzs7QUFXTixJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELG9EQUFOO0FBQUEsQ0FBbEIsQyxDQUVBOzs7QUFDZUUsaUlBQVMsQ0FBQ0QsU0FBRCxDQUFULENBQXFCTCxLQUFyQixDQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjM1YTQ2ZjUxYjVmZWI1NTI5MDAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xuXG5jb25zdCBNeUFwcCA9IChwcm9wczogYW55KTogYW55ID0+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbi8vbWFrZVN0b3JlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldyBzdG9yZSBmb3IgZXZlcnkgcmVxdWVzdFxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XG5cbi8vd2l0aFJlZHV4IHdyYXBwZXIgdGhhdCBwYXNzZXMgdGhlIHN0b3JlIHRvIHRoZSBBcHAgQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShNeUFwcCk7XG5cbi8vIGltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuLy8gaW1wb3J0IHN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJztcbi8vIC8vIGNvbnNvbGUubG9nKHN0b3JlKTtcbi8vIGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbi8vICAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xuLy8gICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge307XG5cbi8vICAgICAgICAgcmV0dXJuIHsgcGFnZVByb3BzOiBwYWdlUHJvcHMgfTtcbi8vICAgICB9XG5cbi8vICAgICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuLy8gICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzIGFzIGFueTtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4vLyAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbi8vICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4vLyAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxuLy8gICAgICAgICApO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=