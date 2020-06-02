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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmitForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter your title here",
    value: input,
    onChange: onChangeInput,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx(_CreatePost_styled__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Add New Post")));
};

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_2__["createPost"](post))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(CreatePost));

/***/ }),

/***/ "./components/Loader/Loader.styled.ts":
/*!********************************************!*\
  !*** ./components/Loader/Loader.styled.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LoaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 101;
    background-color: rgba(255, 107, 8, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`;
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyles);

/***/ }),

/***/ "./components/Loader/Loader.tsx":
/*!**************************************!*\
  !*** ./components/Loader/Loader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.styled */ "./components/Loader/Loader.styled.ts");
var _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\Loader\\Loader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = () => {
  return __jsx(_Loader_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "Puff",
    color: "#00BFFF",
    height: 100,
    width: 100,
    timeout: 3000,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), ";");
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CreatePost_CreatePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CreatePost/CreatePost */ "./components/CreatePost/CreatePost.tsx");
/* harmony import */ var _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/blog/blogSelectors */ "./redux/blog/blogSelectors.ts");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loader/Loader */ "./components/Loader/Loader.tsx");
var _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\pages\\Posts\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AddPost = ({
  isLoading
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 27
    }
  }), __jsx(_components_CreatePost_CreatePost__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 14
    }
  }));
};

const mapStateToProps = store => ({
  isLoading: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_3__["getLoader"](store)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(AddPost));

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

/***/ "./redux/blog/blogSelectors.ts":
/*!*************************************!*\
  !*** ./redux/blog/blogSelectors.ts ***!
  \*************************************/
/*! exports provided: getPosts, getPost, getLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoader", function() { return getLoader; });
const getPosts = store => store.blog.posts;
const getPost = store => store.blog.post;
const getLoader = store => store.blog.isLoading;

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

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DcmVhdGVQb3N0L0NyZWF0ZVBvc3Quc3R5bGVkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlUG9zdC9DcmVhdGVQb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuc3R5bGVkLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9zdHMvbmV3LnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9ibG9nL2Jsb2dBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ09wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYmxvZy9ibG9nU2VsZWN0b3JzLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ1R5cGVzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9ybSIsInN0eWxlZCIsImZvcm0iLCJJbnB1dCIsImlucHV0IiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsIkJ1dHRvbiIsImJ1dHRvbiIsIkNyZWF0ZVBvc3QiLCJhZGRQb3N0Iiwic2V0SW5wdXQiLCJ1c2VTdGF0ZSIsInNldFRleHRhcmVhIiwib25DaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGV4dGFyZWEiLCJyZXNldCIsIm9uU3VibWl0Rm9ybSIsInByZXZlbnREZWZhdWx0IiwibmV3UG9zdCIsInRpdGxlIiwiYm9keSIsImFsZXJ0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJwb3N0IiwiYmxvZ09wZXJhdGlvbnMiLCJjb25uZWN0IiwiTG9hZGVyU3R5bGVzIiwiZGl2IiwiTG9hZGVyIiwiQWRkUG9zdCIsImlzTG9hZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiYmxvZ1NlbGVjdG9ycyIsImdldFBvc3RzU3RhcnQiLCJ0eXBlIiwidHlwZXMiLCJHRVRfUE9TVFNfU1RBUlQiLCJnZXRQb3N0c1N1Y2Nlc3MiLCJwb3N0cyIsInBheWxvYWQiLCJnZXRQb3N0c0Vycm9yIiwiZXJyb3IiLCJnZXRQb3N0U3RhcnQiLCJHRVRfUE9TVF9TVEFSVCIsImdldFBvc3RTdWNjZXNzIiwiZ2V0UG9zdEVycm9yIiwiY3JlYXRlUG9zdFN0YXJ0IiwiQ1JFQVRFX1BPU1RfU1RBUlQiLCJjcmVhdGVQb3N0U3VjY2VzcyIsImNyZWF0ZVBvc3RFcnJvciIsImdldFBvc3RzIiwiYmxvZ0FjdGlvbnMiLCJBUEkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiZ2V0UG9zdCIsImlkIiwiY3JlYXRlUG9zdCIsImJsb2ciLCJnZXRMb2FkZXIiLCJHRVRfUE9TVFNfU1VDQ0VTUyIsIkdFVF9QT1NUU19FUlJPUiIsIkdFVF9QT1NUX1NVQ0NFU1MiLCJHRVRfUE9TVF9FUlJPUiIsIkNSRUFURV9QT1NUX1NVQ0NFU1MiLCJDUkVBVEVfUE9TVF9FUlJPUiIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiZ2V0IiwiZ2V0UG9zdEJ5SWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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QVcsR0FBSWQsRUFBRCxJQUFRVSw0Q0FBSyxDQUFDRyxHQUFOLENBQVcsU0FBUWIsRUFBRyxrQkFBdEIsQ0FBNUI7QUFFQSxNQUFNQyxVQUFVLEdBQUl0QyxJQUFELElBQVUrQyw0Q0FBSyxDQUFDL0MsSUFBTixDQUFXLE9BQVgsRUFBb0JBLElBQXBCLENBQTdCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFBvc3RzXFxuZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZDogbWludGNyZWFtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMHB4IGJsYWNrO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gc3R5bGVkLnRleHRhcmVhYFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMHB4IGJsYWNrO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAwcHggZ3JheTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgYmxvZ09wZXJhdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nT3BlcmF0aW9ucyc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcyc7XG5pbXBvcnQgeyBGb3JtLCBUZXh0YXJlYSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJy4vQ3JlYXRlUG9zdC5zdHlsZWQnO1xuXG5pbnRlcmZhY2UgTVNUUCB7XG4gICAgYWRkUG9zdDogKHBvc3QpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENyZWF0ZVBvc3QgPSAoeyBhZGRQb3N0IH06IE1TVFApOiBKU1guRWxlbWVudCA9PiB7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3RleHRhcmVhLCBzZXRUZXh0YXJlYV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgICAgIHNldElucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25DaGFuZ2VUZXh0YXJlYSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik6IHZvaWQgPT4ge1xuICAgICAgICBzZXRUZXh0YXJlYShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0ID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRJbnB1dCgnJyk7XG4gICAgICAgIHNldFRleHRhcmVhKCcnKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogdm9pZCA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGlucHV0ICYmIHRleHRhcmVhKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQb3N0ID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpbnB1dCxcbiAgICAgICAgICAgICAgICBib2R5OiB0ZXh0YXJlYSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGRQb3N0KG5ld1Bvc3QpO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3VyIHBvc3Qgc3VjY2Vzc2Z1bGx5IGFkZGVkIScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHRpdGxlIGhlcmVcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICByb3dzPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBib2R5IGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dGFyZWF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHRhcmVhfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgID48L1RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBOZXcgUG9zdDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiAoYW55KSA9PiB2b2lkKTogTVNUUCA9PiAoe1xuICAgIGFkZFBvc3Q6IChwb3N0OiB0eXBlcy5Qb3N0VHlwZSk6IHZvaWQgPT4gZGlzcGF0Y2goYmxvZ09wZXJhdGlvbnMuY3JlYXRlUG9zdChwb3N0KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENyZWF0ZVBvc3QpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExvYWRlclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTA3LCA4LCAwLjEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclN0eWxlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XG5pbXBvcnQgTG9hZGVyU3R5bGVzIGZyb20gJy4vTG9hZGVyLnN0eWxlZCc7XG5cbmNvbnN0IExvYWRlciA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRlclN0eWxlcz5cbiAgICAgICAgICAgIDxTcGlubmVyIHR5cGU9XCJQdWZmXCIgY29sb3I9XCIjMDBCRkZGXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IHRpbWVvdXQ9ezMwMDB9IC8+O1xuICAgICAgICA8L0xvYWRlclN0eWxlcz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NyZWF0ZVBvc3QvQ3JlYXRlUG9zdCc7XG5pbXBvcnQgKiBhcyBibG9nU2VsZWN0b3JzIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ1NlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBBZGRQb3N0ID0gKHsgaXNMb2FkaW5nIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIgLz59XG4gICAgICAgICAgICB7PENyZWF0ZVBvc3QgLz59XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RvcmU6IHR5cGVzLlN0b3JlVHlwZSk6IFByb3BzID0+ICh7XG4gICAgaXNMb2FkaW5nOiBibG9nU2VsZWN0b3JzLmdldExvYWRlcihzdG9yZSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFkZFBvc3QpO1xuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9ibG9nVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNTdGFydCA9ICgpOiB0eXBlcy5HZXRQb3N0c1N0YXJ0VHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19TVEFSVCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNTdWNjZXNzID0gKHBvc3RzOiB0eXBlcy5Qb3N0VHlwZVtdKTogdHlwZXMuR2V0UG9zdHNTdWNjZXNzVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19TVUNDRVNTLFxuICAgIHBheWxvYWQ6IHsgcG9zdHMgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNFcnJvciA9IChlcnJvcjoge30pOiB0eXBlcy5HZXRQb3N0c0Vycm9yVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RTdGFydCA9ICgpOiB0eXBlcy5HZXRQb3N0U3RhcnRUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BPU1RfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RTdWNjZXNzID0gKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKTogdHlwZXMuR2V0UG9zdFN1Y2Nlc3NUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BPU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB7IHBvc3QgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdEVycm9yID0gKGVycm9yOiB7fSk6IHR5cGVzLkdldFBvc3RFcnJvclR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVF9FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RTdGFydCA9ICgpOiB0eXBlcy5DcmVhdGVQb3N0U3RhcnRUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuQ1JFQVRFX1BPU1RfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RTdWNjZXNzID0gKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKTogdHlwZXMuQ3JlYXRlUG9zdFN1Y2Nlc3NUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuQ1JFQVRFX1BPU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB7IHBvc3QgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdEVycm9yID0gKGVycm9yOiB7fSk6IHR5cGVzLkNyZWF0ZVBvc3RFcnJvclR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5DUkVBVEVfUE9TVF9FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIGJsb2dBY3Rpb25zIGZyb20gJy4vYmxvZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9ibG9nVHlwZXMnO1xuaW1wb3J0ICogYXMgQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpID0+IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RzU3RhcnQoKSk7XG4gICAgQVBJLmdldFBvc3RzKClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuZ2V0UG9zdHNTdWNjZXNzKHJlcy5kYXRhKSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0c0Vycm9yKGVycikpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gKGlkOiBzdHJpbmcpID0+IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RTdGFydCgpKTtcbiAgICBBUEkuZ2V0UG9zdEJ5SWQoaWQpXG4gICAgICAgIC50aGVuKChyZXMpID0+IGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RTdWNjZXNzKHJlcy5kYXRhKSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0RXJyb3IoZXJyKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSAocG9zdDogdHlwZXMuUG9zdFR5cGUpID0+IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGJsb2dBY3Rpb25zLmNyZWF0ZVBvc3RTdGFydCgpKTtcbiAgICBBUEkuY3JlYXRlUG9zdChwb3N0KVxuICAgICAgICAudGhlbigocmVzKSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5jcmVhdGVQb3N0U3VjY2VzcyhyZXMuZGF0YSkpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuY3JlYXRlUG9zdEVycm9yKGVycikpKTtcbn07XG4iLCJpbXBvcnQgeyBTdG9yZVR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnLi9ibG9nVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoc3RvcmU6IFN0b3JlVHlwZSk6IFBvc3RUeXBlW10gPT4gc3RvcmUuYmxvZy5wb3N0cztcbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gKHN0b3JlOiBTdG9yZVR5cGUpOiBQb3N0VHlwZSA9PiBzdG9yZS5ibG9nLnBvc3Q7XG5leHBvcnQgY29uc3QgZ2V0TG9hZGVyID0gKHN0b3JlOiBTdG9yZVR5cGUpOiBib29sZWFuID0+IHN0b3JlLmJsb2cuaXNMb2FkaW5nO1xuIiwiZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19TVEFSVCA9ICdHRVRfUE9TVFNfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19TVUNDRVNTID0gJ0dFVF9QT1NUU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFNfRVJST1IgPSAnR0VUX1BPU1RTX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX1NUQVJUID0gJ0dFVF9QT1NUX1NUQVJUJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9TVUNDRVNTID0gJ0dFVF9QT1NUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0VSUk9SID0gJ0dFVF9QT1NUX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX1NUQVJUID0gJ0NSRUFURV9QT1NUX1NUQVJUJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9TVUNDRVNTID0gJ0NSRUFURV9QT1NUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX0VSUk9SID0gJ0NSRUFURV9QT1NUX0VSUk9SJztcblxuLy8gZ2VuZXJhbCBpbnRlcmZhY2VzXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWVudFR5cGUge1xuICAgIHBvc3RJZDogbnVtYmVyO1xuICAgIGJvZHk6IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RUeXBlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGNvbW1lbnRzPzogQ29tbWVudFR5cGVbXSB8IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JlVHlwZSB7XG4gICAgYmxvZzoge1xuICAgICAgICBwb3N0czogUG9zdFR5cGVbXSB8IFtdO1xuICAgICAgICBwb3N0OiBQb3N0VHlwZSB8IG51bGw7XG4gICAgICAgIGlzRXJyb3I6IHt9IHwgbnVsbDtcbiAgICAgICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIH07XG59XG5cbi8vIGFjdGlvbnMgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0c1N0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUU19TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0c1N1Y2Nlc3NUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0czogUG9zdFR5cGVbXTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzRXJyb3JUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX0VSUk9SO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZXJyb3I6IHt9O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdFN0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RTdWNjZXNzVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0OiBQb3N0VHlwZTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVF9FUlJPUjtcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIGVycm9yOiB7fTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RTdGFydFR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQb3N0U3VjY2Vzc1R5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9TVUNDRVNTO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgcG9zdDogUG9zdFR5cGU7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQb3N0RXJyb3JUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgQ1JFQVRFX1BPU1RfRVJST1I7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBlcnJvcjoge307XG4gICAgfTtcbn1cblxuZXhwb3J0IHR5cGUgYWN0aW9uc1R5cGVzID1cbiAgICB8IEdldFBvc3RzU3RhcnRUeXBlXG4gICAgfCBHZXRQb3N0c1N1Y2Nlc3NUeXBlXG4gICAgfCBHZXRQb3N0c0Vycm9yVHlwZVxuICAgIHwgR2V0UG9zdFN0YXJ0VHlwZVxuICAgIHwgR2V0UG9zdFN1Y2Nlc3NUeXBlXG4gICAgfCBHZXRQb3N0RXJyb3JUeXBlXG4gICAgfCBDcmVhdGVQb3N0U3RhcnRUeXBlXG4gICAgfCBDcmVhdGVQb3N0U3VjY2Vzc1R5cGVcbiAgICB8IENyZWF0ZVBvc3RFcnJvclR5cGU7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkLyc7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpID0+IGF4aW9zLmdldCgncG9zdHMnKTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeUlkID0gKGlkKSA9PiBheGlvcy5nZXQoYHBvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IChwb3N0KSA9PiBheGlvcy5wb3N0KCdwb3N0cycsIHBvc3QpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==