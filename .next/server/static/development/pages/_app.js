module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store.ts");
var _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MyApp = props => {
  const {
    Component,
    pageProps,
    store
  } = props;
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  });
}; //makeStore function that returns a new store for every request


const makeStore = () => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]; //withRedux wrapper that passes the store to the App Component


/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(makeStore)(MyApp));

/***/ }),

/***/ "./redux/blog/blogReducers.ts":
/*!************************************!*\
  !*** ./redux/blog/blogReducers.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blogTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blogTypes */ "./redux/blog/blogTypes.ts");



const posts = (state = [], action) => {
  switch (action.type) {
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_SUCCESS"]:
      return action.payload.posts;

    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_SUCCESS"]:
      return [...state, action.payload.post];

    default:
      return state;
  }
};

const post = (state = null, action) => {
  switch (action.type) {
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POST_SUCCESS"]:
      return action.payload.post;

    default:
      return state;
  }
};

const isError = (state = null, action) => {
  switch (action.type) {
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_ERROR"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POST_ERROR"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_ERROR"]:
      return action.payload.error;

    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_START"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POST_START"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_START"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_SUCCESS"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POST_SUCCESS"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_SUCCESS"]:
      return null;

    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_START"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POST_START"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_START"]:
      return true;

    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_SUCCESS"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POST_SUCCESS"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_SUCCESS"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_ERROR"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["GET_POST_ERROR"]:
    case _blogTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_ERROR"]:
      return false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  posts,
  post,
  isError,
  isLoading
}));

/***/ }),

/***/ "./redux/blog/blogTypes.ts":
/*!*********************************!*\
  !*** ./redux/blog/blogTypes.ts ***!
  \*********************************/
/*! exports provided: GET_POSTS_START, GET_POSTS_SUCCESS, GET_POSTS_ERROR, GET_POST_START, GET_POST_SUCCESS, GET_POST_ERROR, CREATE_POST_START, CREATE_POST_SUCCESS, CREATE_POST_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_START", function() { return GET_POSTS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_SUCCESS", function() { return GET_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_ERROR", function() { return GET_POSTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_START", function() { return GET_POST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_SUCCESS", function() { return GET_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_ERROR", function() { return GET_POST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_START", function() { return CREATE_POST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_SUCCESS", function() { return CREATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_ERROR", function() { return CREATE_POST_ERROR; });
const GET_POSTS_START = 'GET_POSTS_START';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
const GET_POST_START = 'GET_POST_START';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';
const CREATE_POST_START = 'CREATE_POST_START';
const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
const CREATE_POST_ERROR = 'CREATE_POST_ERROR'; // general interfaces

/***/ }),

/***/ "./redux/rootReducer.ts":
/*!******************************!*\
  !*** ./redux/rootReducer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blog_blogReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog/blogReducers */ "./redux/blog/blogReducers.ts");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  blog: _blog_blogReducers__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./redux/rootReducer.ts");




const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a];
const composeEnhancers = true ? Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)) : undefined;
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_3__["default"], composeEnhancers);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYmxvZy9ibG9nUmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYmxvZy9ibG9nVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJtYWtlU3RvcmUiLCJpbml0aWFsU3RvcmUiLCJ3aXRoUmVkdXgiLCJwb3N0cyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsInBvc3QiLCJpc0Vycm9yIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJjb21iaW5lUmVkdWNlcnMiLCJHRVRfUE9TVFNfU1RBUlQiLCJHRVRfUE9TVFNfU1VDQ0VTUyIsIkdFVF9QT1NUU19FUlJPUiIsIkdFVF9QT1NUX1NUQVJUIiwiR0VUX1BPU1RfU1VDQ0VTUyIsIkdFVF9QT1NUX0VSUk9SIiwiQ1JFQVRFX1BPU1RfU1RBUlQiLCJDUkVBVEVfUE9TVF9TVUNDRVNTIiwiQ1JFQVRFX1BPU1RfRVJST1IiLCJyb290UmVkdWNlciIsImJsb2ciLCJibG9nUmVkdWNlciIsIm1pZGRsZXdhcmUiLCJSZWR1eFRodW5rIiwiY29tcG9zZUVuaGFuY2VycyIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFJQyxLQUFELElBQXFCO0FBQy9CLFFBQU07QUFBRUMsYUFBRjtBQUFhQyxhQUFiO0FBQXdCQztBQUF4QixNQUFrQ0gsS0FBeEM7QUFFQSxTQUFPLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVHLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNILENBSkQsQyxDQU1BOzs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsTUFBTUMsb0RBQXhCLEMsQ0FFQTs7O0FBQ2VDLHdIQUFTLENBQUNG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R0FBRyxDQUFDQyxrREFBRCxDQUFuQjtBQUVBLE1BQU1DLGdCQUFnQixHQUNsQixPQUNNQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixVQUFKLENBQWhCLENBRHpCLEdBRU1JLFNBSFY7QUFLQSxNQUFNL0IsS0FBSyxHQUFHZ0MseURBQVcsQ0FBQ1Isb0RBQUQsRUFBY0ssZ0JBQWQsQ0FBekI7QUFFZTdCLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgaW5pdGlhbFN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHByb3BzOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT57LyogPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPiAqL308L1Byb3ZpZGVyPjtcclxufTtcclxuXHJcbi8vbWFrZVN0b3JlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5ldyBzdG9yZSBmb3IgZXZlcnkgcmVxdWVzdFxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBpbml0aWFsU3RvcmU7XHJcblxyXG4vL3dpdGhSZWR1eCB3cmFwcGVyIHRoYXQgcGFzc2VzIHRoZSBzdG9yZSB0byB0aGUgQXBwIENvbXBvbmVudFxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShNeUFwcCk7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYmxvZ1R5cGVzJztcblxuY29uc3QgcG9zdHMgPSAoc3RhdGUgPSBbXSwgYWN0aW9uOiB0eXBlcy5hY3Rpb25zVHlwZXMpOiB0eXBlcy5Qb3N0VHlwZVtdID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXMuR0VUX1BPU1RTX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQucG9zdHM7XG5cbiAgICAgICAgY2FzZSB0eXBlcy5DUkVBVEVfUE9TVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgYWN0aW9uLnBheWxvYWQucG9zdF07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5jb25zdCBwb3N0ID0gKHN0YXRlID0gbnVsbCwgYWN0aW9uOiB0eXBlcy5hY3Rpb25zVHlwZXMpOiB0eXBlcy5Qb3N0VHlwZSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkdFVF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQucG9zdDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGlzRXJyb3IgPSAoc3RhdGUgPSBudWxsLCBhY3Rpb246IHR5cGVzLmFjdGlvbnNUeXBlcyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkdFVF9QT1NUU19FUlJPUjpcbiAgICAgICAgY2FzZSB0eXBlcy5HRVRfUE9TVF9FUlJPUjpcbiAgICAgICAgY2FzZSB0eXBlcy5DUkVBVEVfUE9TVF9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5lcnJvcjtcblxuICAgICAgICBjYXNlIHR5cGVzLkdFVF9QT1NUU19TVEFSVDpcbiAgICAgICAgY2FzZSB0eXBlcy5HRVRfUE9TVF9TVEFSVDpcbiAgICAgICAgY2FzZSB0eXBlcy5DUkVBVEVfUE9TVF9TVEFSVDpcbiAgICAgICAgY2FzZSB0eXBlcy5HRVRfUE9TVFNfU1VDQ0VTUzpcbiAgICAgICAgY2FzZSB0eXBlcy5HRVRfUE9TVF9TVUNDRVNTOlxuICAgICAgICBjYXNlIHR5cGVzLkNSRUFURV9QT1NUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmNvbnN0IGlzTG9hZGluZyA9IChzdGF0ZSA9IGZhbHNlLCBhY3Rpb246IHR5cGVzLmFjdGlvbnNUeXBlcyk6IGJvb2xlYW4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlcy5HRVRfUE9TVFNfU1RBUlQ6XG4gICAgICAgIGNhc2UgdHlwZXMuR0VUX1BPU1RfU1RBUlQ6XG4gICAgICAgIGNhc2UgdHlwZXMuQ1JFQVRFX1BPU1RfU1RBUlQ6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBjYXNlIHR5cGVzLkdFVF9QT1NUU19TVUNDRVNTOlxuICAgICAgICBjYXNlIHR5cGVzLkdFVF9QT1NUX1NVQ0NFU1M6XG4gICAgICAgIGNhc2UgdHlwZXMuQ1JFQVRFX1BPU1RfU1VDQ0VTUzpcbiAgICAgICAgY2FzZSB0eXBlcy5HRVRfUE9TVFNfRVJST1I6XG4gICAgICAgIGNhc2UgdHlwZXMuR0VUX1BPU1RfRVJST1I6XG4gICAgICAgIGNhc2UgdHlwZXMuQ1JFQVRFX1BPU1RfRVJST1I6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHBvc3RzLFxuICAgIHBvc3QsXG4gICAgaXNFcnJvcixcbiAgICBpc0xvYWRpbmcsXG59KTtcbiIsImV4cG9ydCBjb25zdCBHRVRfUE9TVFNfU1RBUlQgPSAnR0VUX1BPU1RTX1NUQVJUJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFNfU1VDQ0VTUyA9ICdHRVRfUE9TVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RTX0VSUk9SID0gJ0dFVF9QT1NUU19FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9TVEFSVCA9ICdHRVRfUE9TVF9TVEFSVCc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RfU1VDQ0VTUyA9ICdHRVRfUE9TVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9FUlJPUiA9ICdHRVRfUE9TVF9FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9TVEFSVCA9ICdDUkVBVEVfUE9TVF9TVEFSVCc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfU1VDQ0VTUyA9ICdDUkVBVEVfUE9TVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9FUlJPUiA9ICdDUkVBVEVfUE9TVF9FUlJPUic7XG5cbi8vIGdlbmVyYWwgaW50ZXJmYWNlc1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1lbnRUeXBlIHtcbiAgICBwb3N0SWQ6IG51bWJlcjtcbiAgICBib2R5OiBzdHJpbmc7XG4gICAgaWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3N0VHlwZSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGJvZHk6IHN0cmluZztcbiAgICBjb21tZW50cz86IENvbW1lbnRUeXBlW10gfCBbXTtcbn1cblxuLy8gYWN0aW9ucyBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzU3RhcnRUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzU3VjY2Vzc1R5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVFNfU1VDQ0VTUztcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHBvc3RzOiBQb3N0VHlwZVtdO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdHNFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVFNfRVJST1I7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBlcnJvcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0U3RhcnRUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RfU1RBUlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdFN1Y2Nlc3NUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RfU1VDQ0VTUztcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHBvc3Q6IFBvc3RUeXBlO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdEVycm9yVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX0VSUk9SO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZXJyb3I6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlUG9zdFN0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIENSRUFURV9QT1NUX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RTdWNjZXNzVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIENSRUFURV9QT1NUX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0OiBQb3N0VHlwZTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9FUlJPUjtcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIGVycm9yOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICB9O1xufVxuXG5leHBvcnQgdHlwZSBhY3Rpb25zVHlwZXMgPVxuICAgIHwgR2V0UG9zdHNTdGFydFR5cGVcbiAgICB8IEdldFBvc3RzU3VjY2Vzc1R5cGVcbiAgICB8IEdldFBvc3RzRXJyb3JUeXBlXG4gICAgfCBHZXRQb3N0U3RhcnRUeXBlXG4gICAgfCBHZXRQb3N0U3VjY2Vzc1R5cGVcbiAgICB8IEdldFBvc3RFcnJvclR5cGVcbiAgICB8IENyZWF0ZVBvc3RTdGFydFR5cGVcbiAgICB8IENyZWF0ZVBvc3RTdWNjZXNzVHlwZVxuICAgIHwgQ3JlYXRlUG9zdEVycm9yVHlwZTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBibG9nUmVkdWNlciBmcm9tICcuL2Jsb2cvYmxvZ1JlZHVjZXJzJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGJsb2c6IGJsb2dSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IFJlZHV4VGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW1JlZHV4VGh1bmtdO1xuXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuICAgICAgICA/IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuICAgICAgICA6IGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgY29tcG9zZUVuaGFuY2Vycyk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9