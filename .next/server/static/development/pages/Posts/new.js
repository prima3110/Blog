module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreatePost/CreatePost.styled.ts":
/*!****************************************************!*\
  !*** ./components/CreatePost/CreatePost.styled.ts ***!
  \****************************************************/
/*! exports provided: Form, Input, Textarea, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
    cursor: pointer;
    font-weight: bold;
    border: 2px solid black;
    background: mintcream;
    padding: 10px;
    margin: 20px 0;
    box-shadow: 10px 10px 10px 0px black;
`;
const Textarea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea`
    cursor: pointer;
    font-weight: bold;
    border: 2px solid black;
    background: lightgoldenrodyellow;
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 10px 10px 10px 0px black;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
    cursor: pointer;
    border: 1px solid black;
    font-weight: bold;
    font-size: 20px;
    margin: 0 auto;
    width: 200px;
    height: 40px;
    color: green;
    box-shadow: 10px 10px 10px 0px gray;
`;

/***/ }),

/***/ "./components/CreatePost/CreatePost.tsx":
/*!**********************************************!*\
  !*** ./components/CreatePost/CreatePost.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/blog/blogOperations */ "./redux/blog/blogOperations.ts");
/* harmony import */ var _CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreatePost.styled */ "./components/CreatePost/CreatePost.styled.ts");
var _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\CreatePost\\CreatePost.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CreatePost = ({
  addPost
}) => {
  const {
    0: input,
    1: setInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: textarea,
    1: setTextarea
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChangeInput = e => {
    setInput(e.target.value);
  };

  const onChangeTextarea = e => {
    setTextarea(e.target.value);
  };

  const reset = () => {
    setInput('');
    setTextarea('');
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (input && textarea) {
      const newPost = {
        title: input,
        body: textarea
      };
      addPost(newPost);
      reset();
      alert('Your post successfully added!');
    }
  };

  return __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter your title here",
    value: input,
    onChange: onChangeInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    rows: "20",
    cols: "20",
    name: "text",
    placeholder: "Enter your body here",
    value: textarea,
    onChange: onChangeTextarea,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Add New Post"));
};

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_2__["createPost"](post))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(CreatePost));

/***/ }),

/***/ "./pages/Posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/Posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreatePost_CreatePost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CreatePost/CreatePost */ "./components/CreatePost/CreatePost.tsx");
var _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\pages\\Posts\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AddPost = () => {
  return __jsx(_components_CreatePost_CreatePost__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AddPost);

/***/ }),

/***/ "./redux/blog/blogActions.ts":
/*!***********************************!*\
  !*** ./redux/blog/blogActions.ts ***!
  \***********************************/
/*! exports provided: getPostsStart, getPostsSuccess, getPostsError, getPostStart, getPostSuccess, getPostError, createPostStart, createPostSuccess, createPostError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsStart", function() { return getPostsStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsSuccess", function() { return getPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsError", function() { return getPostsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostStart", function() { return getPostStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostSuccess", function() { return getPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostError", function() { return getPostError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostStart", function() { return createPostStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostSuccess", function() { return createPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostError", function() { return createPostError; });
/* harmony import */ var _blogTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogTypes */ "./redux/blog/blogTypes.ts");

const getPostsStart = () => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_START"]
});
const getPostsSuccess = posts => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_SUCCESS"],
  payload: {
    posts
  }
});
const getPostsError = error => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_ERROR"],
  payload: {
    error
  }
});
const getPostStart = () => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["GET_POST_START"]
});
const getPostSuccess = post => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["GET_POST_SUCCESS"],
  payload: {
    post
  }
});
const getPostError = error => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["GET_POST_ERROR"],
  payload: {
    error
  }
});
const createPostStart = () => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_START"]
});
const createPostSuccess = post => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_SUCCESS"],
  payload: {
    post
  }
});
const createPostError = error => ({
  type: _blogTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_ERROR"],
  payload: {
    error
  }
});

/***/ }),

/***/ "./redux/blog/blogOperations.ts":
/*!**************************************!*\
  !*** ./redux/blog/blogOperations.ts ***!
  \**************************************/
/*! exports provided: getPosts, getPost, createPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony import */ var _blogActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogActions */ "./redux/blog/blogActions.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./services/api.ts");


const getPosts = () => dispatch => {
  dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["getPostsStart"]());
  _services_api__WEBPACK_IMPORTED_MODULE_1__["getPosts"]().then(res => dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["getPostsSuccess"](res.data))).catch(err => dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["getPostsError"](err)));
};
const getPost = id => dispatch => {
  dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["getPostStart"]());
  _services_api__WEBPACK_IMPORTED_MODULE_1__["getPostById"](id).then(res => dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["getPostSuccess"](res.data))).catch(err => dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["getPostError"](err)));
};
const createPost = post => dispatch => {
  dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["createPostStart"]());
  _services_api__WEBPACK_IMPORTED_MODULE_1__["createPost"](post).then(res => dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["createPostSuccess"](res.data))).catch(err => dispatch(_blogActions__WEBPACK_IMPORTED_MODULE_0__["createPostError"](err)));
};

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

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/*! exports provided: getPosts, getPostById, createPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostById", function() { return getPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'https://simple-blog-api.crew.red/';
const getPosts = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('posts');
const getPostById = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`posts/${id}?_embed=comments`);
const createPost = post => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('posts', post);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/Posts/new.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GoIT\Співбесіда\Тестові завдання\Мені запропонували\DevelopsToday\Blog\Blog\pages\Posts\new.tsx */"./pages/Posts/new.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVQb3N0L0NyZWF0ZVBvc3Quc3R5bGVkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlUG9zdC9DcmVhdGVQb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Qb3N0cy9uZXcudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ0FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYmxvZy9ibG9nT3BlcmF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwiQnV0dG9uIiwiYnV0dG9uIiwiQ3JlYXRlUG9zdCIsImFkZFBvc3QiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwic2V0VGV4dGFyZWEiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VUZXh0YXJlYSIsInJlc2V0Iiwib25TdWJtaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJuZXdQb3N0IiwidGl0bGUiLCJib2R5IiwiYWxlcnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInBvc3QiLCJibG9nT3BlcmF0aW9ucyIsImNvbm5lY3QiLCJBZGRQb3N0IiwiZ2V0UG9zdHNTdGFydCIsInR5cGUiLCJ0eXBlcyIsIkdFVF9QT1NUU19TVEFSVCIsImdldFBvc3RzU3VjY2VzcyIsInBvc3RzIiwicGF5bG9hZCIsImdldFBvc3RzRXJyb3IiLCJlcnJvciIsImdldFBvc3RTdGFydCIsIkdFVF9QT1NUX1NUQVJUIiwiZ2V0UG9zdFN1Y2Nlc3MiLCJnZXRQb3N0RXJyb3IiLCJjcmVhdGVQb3N0U3RhcnQiLCJDUkVBVEVfUE9TVF9TVEFSVCIsImNyZWF0ZVBvc3RTdWNjZXNzIiwiY3JlYXRlUG9zdEVycm9yIiwiZ2V0UG9zdHMiLCJibG9nQWN0aW9ucyIsIkFQSSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJnZXRQb3N0IiwiaWQiLCJjcmVhdGVQb3N0IiwiR0VUX1BPU1RTX1NVQ0NFU1MiLCJHRVRfUE9TVFNfRVJST1IiLCJHRVRfUE9TVF9TVUNDRVNTIiwiR0VUX1BPU1RfRVJST1IiLCJDUkVBVEVfUE9TVF9TVUNDRVNTIiwiQ1JFQVRFX1BPU1RfRVJST1IiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImdldCIsImdldFBvc3RCeUlkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIs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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBtaW50Y3JlYW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAwcHggYmxhY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dGFyZWEgPSBzdHlsZWQudGV4dGFyZWFgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAwcHggYmxhY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDBweCBncmF5O1xuYDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBibG9nT3BlcmF0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dPcGVyYXRpb25zJztcbmltcG9ydCB7IEZvcm0sIFRleHRhcmVhLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnLi9DcmVhdGVQb3N0LnN0eWxlZCc7XG5cbmludGVyZmFjZSBNU1RQIHtcbiAgICBhZGRQb3N0OiAocG9zdCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ3JlYXRlUG9zdCA9ICh7IGFkZFBvc3QgfTogTVNUUCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdGV4dGFyZWEsIHNldFRleHRhcmVhXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZSk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlVGV4dGFyZWEgPSAoZSk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRUZXh0YXJlYShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRJbnB1dCgnJyk7XG4gICAgICAgIHNldFRleHRhcmVhKCcnKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gKGUpOiB2b2lkID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoaW5wdXQgJiYgdGV4dGFyZWEpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGlucHV0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHRleHRhcmVhLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZFBvc3QobmV3UG9zdCk7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgYWxlcnQoJ1lvdXIgcG9zdCBzdWNjZXNzZnVsbHkgYWRkZWQhJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0Rm9ybX0+XG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHRpdGxlIGhlcmVcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgcm93cz1cIjIwXCJcbiAgICAgICAgICAgICAgICBjb2xzPVwiMjBcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgYm9keSBoZXJlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dGFyZWF9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID48L1RleHRhcmVhPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIE5ldyBQb3N0PC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICApO1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKTogTVNUUCA9PiAoe1xuICAgIGFkZFBvc3Q6IChwb3N0KTogdm9pZCA9PiBkaXNwYXRjaChibG9nT3BlcmF0aW9ucy5jcmVhdGVQb3N0KHBvc3QpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ3JlYXRlUG9zdCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENyZWF0ZVBvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DcmVhdGVQb3N0L0NyZWF0ZVBvc3QnO1xuXG5jb25zdCBBZGRQb3N0ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gPENyZWF0ZVBvc3QgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRQb3N0O1xuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9ibG9nVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNTdGFydCA9ICgpOiB0eXBlcy5HZXRQb3N0c1N0YXJ0VHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19TVEFSVCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNTdWNjZXNzID0gKHBvc3RzOiB0eXBlcy5Qb3N0VHlwZVtdKTogdHlwZXMuR2V0UG9zdHNTdWNjZXNzVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19TVUNDRVNTLFxuICAgIHBheWxvYWQ6IHsgcG9zdHMgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNFcnJvciA9IChlcnJvcjoge30pOiB0eXBlcy5HZXRQb3N0c0Vycm9yVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RTdGFydCA9ICgpOiB0eXBlcy5HZXRQb3N0U3RhcnRUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BPU1RfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RTdWNjZXNzID0gKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKTogdHlwZXMuR2V0UG9zdFN1Y2Nlc3NUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BPU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB7IHBvc3QgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdEVycm9yID0gKGVycm9yOiB7fSk6IHR5cGVzLkdldFBvc3RFcnJvclR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVF9FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RTdGFydCA9ICgpOiB0eXBlcy5DcmVhdGVQb3N0U3RhcnRUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuQ1JFQVRFX1BPU1RfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RTdWNjZXNzID0gKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKTogdHlwZXMuQ3JlYXRlUG9zdFN1Y2Nlc3NUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuQ1JFQVRFX1BPU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB7IHBvc3QgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdEVycm9yID0gKGVycm9yOiB7fSk6IHR5cGVzLkNyZWF0ZVBvc3RFcnJvclR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5DUkVBVEVfUE9TVF9FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIGJsb2dBY3Rpb25zIGZyb20gJy4vYmxvZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9ibG9nVHlwZXMnO1xuaW1wb3J0ICogYXMgQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpID0+IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RzU3RhcnQoKSk7XG4gICAgQVBJLmdldFBvc3RzKClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuZ2V0UG9zdHNTdWNjZXNzKHJlcy5kYXRhKSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0c0Vycm9yKGVycikpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gKGlkOiBzdHJpbmcpID0+IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RTdGFydCgpKTtcbiAgICBBUEkuZ2V0UG9zdEJ5SWQoaWQpXG4gICAgICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RTdWNjZXNzKHJlcy5kYXRhKSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0RXJyb3IoZXJyKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSAocG9zdDogdHlwZXMuUG9zdFR5cGUpID0+IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGJsb2dBY3Rpb25zLmNyZWF0ZVBvc3RTdGFydCgpKTtcbiAgICBBUEkuY3JlYXRlUG9zdChwb3N0KVxuICAgICAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5jcmVhdGVQb3N0U3VjY2VzcyhyZXMuZGF0YSkpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuY3JlYXRlUG9zdEVycm9yKGVycikpKTtcbn07XG4iLCJleHBvcnQgY29uc3QgR0VUX1BPU1RTX1NUQVJUID0gJ0dFVF9QT1NUU19TVEFSVCc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RTX1NVQ0NFU1MgPSAnR0VUX1BPU1RTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19FUlJPUiA9ICdHRVRfUE9TVFNfRVJST1InO1xuXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfU1RBUlQgPSAnR0VUX1BPU1RfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX1NVQ0NFU1MgPSAnR0VUX1BPU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RfRVJST1IgPSAnR0VUX1BPU1RfRVJST1InO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfU1RBUlQgPSAnQ1JFQVRFX1BPU1RfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX1NVQ0NFU1MgPSAnQ1JFQVRFX1BPU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfRVJST1IgPSAnQ1JFQVRFX1BPU1RfRVJST1InO1xuXG4vLyBnZW5lcmFsIGludGVyZmFjZXNcblxuZXhwb3J0IGludGVyZmFjZSBDb21tZW50VHlwZSB7XG4gICAgcG9zdElkOiBudW1iZXI7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdFR5cGUge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBib2R5OiBzdHJpbmc7XG4gICAgY29tbWVudHM/OiBDb21tZW50VHlwZVtdIHwgW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmVUeXBlIHtcbiAgICBibG9nOiB7XG4gICAgICAgIHBvc3RzOiBQb3N0VHlwZVtdIHwgW107XG4gICAgICAgIHBvc3Q6IFBvc3RUeXBlIHwgbnVsbDtcbiAgICAgICAgaXNFcnJvcjoge30gfCBudWxsO1xuICAgICAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgfTtcbn1cblxuLy8gYWN0aW9ucyBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzU3RhcnRUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzU3VjY2Vzc1R5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVFNfU1VDQ0VTUztcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHBvc3RzOiBQb3N0VHlwZVtdO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdHNFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVFNfRVJST1I7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBlcnJvcjoge307XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0U3RhcnRUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RfU1RBUlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdFN1Y2Nlc3NUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RfU1VDQ0VTUztcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHBvc3Q6IFBvc3RUeXBlO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdEVycm9yVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX0VSUk9SO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZXJyb3I6IHt9O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlUG9zdFN0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIENSRUFURV9QT1NUX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RTdWNjZXNzVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIENSRUFURV9QT1NUX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0OiBQb3N0VHlwZTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9FUlJPUjtcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIGVycm9yOiB7fTtcbiAgICB9O1xufVxuXG5leHBvcnQgdHlwZSBhY3Rpb25zVHlwZXMgPVxuICAgIHwgR2V0UG9zdHNTdGFydFR5cGVcbiAgICB8IEdldFBvc3RzU3VjY2Vzc1R5cGVcbiAgICB8IEdldFBvc3RzRXJyb3JUeXBlXG4gICAgfCBHZXRQb3N0U3RhcnRUeXBlXG4gICAgfCBHZXRQb3N0U3VjY2Vzc1R5cGVcbiAgICB8IEdldFBvc3RFcnJvclR5cGVcbiAgICB8IENyZWF0ZVBvc3RTdGFydFR5cGVcbiAgICB8IENyZWF0ZVBvc3RTdWNjZXNzVHlwZVxuICAgIHwgQ3JlYXRlUG9zdEVycm9yVHlwZTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvJztcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gKCkgPT4gYXhpb3MuZ2V0KCdwb3N0cycpO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5SWQgPSAoaWQpID0+IGF4aW9zLmdldChgcG9zdHMvJHtpZH0/X2VtYmVkPWNvbW1lbnRzYCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0ID0gKHBvc3QpID0+IGF4aW9zLnBvc3QoJ3Bvc3RzJywgcG9zdCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9