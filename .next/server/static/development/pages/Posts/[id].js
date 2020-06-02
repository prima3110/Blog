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

/***/ "./components/Post/Post.styled.ts":
/*!****************************************!*\
  !*** ./components/Post/Post.styled.ts ***!
  \****************************************/
/*! exports provided: PostBlock, Title, Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBlock", function() { return PostBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PostBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li`
    list-style: none;
    background-color: #3e8e41;
    margin: 30px auto;
    padding: 35px 25px;
    width: 50%;
    height: 400px;
    overflow-y: scroll;
    box-shadow: 10px 10px 10px 0px black;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
    color: black;
    font-size: 30px;
    font-weight: bold;
    margin: 0 auto;
    text-align: center;
`;
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
    color: navy;
    font-size: 20px;
`;

/***/ }),

/***/ "./components/Post/Post.tsx":
/*!**********************************!*\
  !*** ./components/Post/Post.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post.styled */ "./components/Post/Post.styled.ts");
var _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\components\\Post\\Post.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Post = ({
  post
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["PostBlock"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, post.title), __jsx(_Post_styled__WEBPACK_IMPORTED_MODULE_1__["Body"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, post.body), post.comments && post.comments.length > 0 && __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 63
    }
  }, "Comments: "), post.comments && post.comments.length > 0 ? post.comments.map(el => __jsx("p", {
    key: el.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, el.id, ": "), " ", el.body)) : __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "No comments for this post")));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./pages/Posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/Posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Post_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Post/Post */ "./components/Post/Post.tsx");
/* harmony import */ var _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/blog/blogSelectors */ "./redux/blog/blogSelectors.ts");
/* harmony import */ var _redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/blog/blogOperations */ "./redux/blog/blogOperations.ts");
/* harmony import */ var _components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../..//components/Loader/Loader */ "./components/Loader/Loader.tsx");
var _jsxFileName = "D:\\GoIT\\\u0421\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430\\\u0422\u0435\u0441\u0442\u043E\u0432\u0456 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F\\\u041C\u0435\u043D\u0456 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u043B\u0438\\DevelopsToday\\Blog\\Blog\\pages\\Posts\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const PostPage = ({
  postById,
  getPost,
  isLoading
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    id
  } = router.query;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPost(id);
  }, [getPost, id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading && __jsx(_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 27
    }
  }), postById && __jsx(_components_Post_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: postById,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 26
    }
  }));
};

const mapStateToProps = store => ({
  postById: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_4__["getPost"](store),
  isLoading: _redux_blog_blogSelectors__WEBPACK_IMPORTED_MODULE_4__["getLoader"](store)
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_5__["getPost"](id))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PostPage));

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
/*!************************************!*\
  !*** multi ./pages/Posts/[id].tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GoIT\Співбесіда\Тестові завдання\Мені запропонували\DevelopsToday\Blog\Blog\pages\Posts\[id].tsx */"./pages/Posts/[id].tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLnN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC9Qb3N0LnN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9zdHMvLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9ibG9nL2Jsb2dBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ09wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYmxvZy9ibG9nU2VsZWN0b3JzLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ1R5cGVzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJMb2FkZXJTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJMb2FkZXIiLCJQb3N0QmxvY2siLCJsaSIsIlRpdGxlIiwicCIsIkJvZHkiLCJQb3N0IiwicG9zdCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwibGVuZ3RoIiwibWFwIiwiZWwiLCJpZCIsIlBvc3RQYWdlIiwicG9zdEJ5SWQiLCJnZXRQb3N0IiwiaXNMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImJsb2dTZWxlY3RvcnMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJsb2dPcGVyYXRpb25zIiwiY29ubmVjdCIsImdldFBvc3RzU3RhcnQiLCJ0eXBlIiwidHlwZXMiLCJHRVRfUE9TVFNfU1RBUlQiLCJnZXRQb3N0c1N1Y2Nlc3MiLCJwb3N0cyIsInBheWxvYWQiLCJnZXRQb3N0c0Vycm9yIiwiZXJyb3IiLCJnZXRQb3N0U3RhcnQiLCJHRVRfUE9TVF9TVEFSVCIsImdldFBvc3RTdWNjZXNzIiwiZ2V0UG9zdEVycm9yIiwiY3JlYXRlUG9zdFN0YXJ0IiwiQ1JFQVRFX1BPU1RfU1RBUlQiLCJjcmVhdGVQb3N0U3VjY2VzcyIsImNyZWF0ZVBvc3RFcnJvciIsImdldFBvc3RzIiwiYmxvZ0FjdGlvbnMiLCJBUEkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY3JlYXRlUG9zdCIsImJsb2ciLCJnZXRMb2FkZXIiLCJHRVRfUE9TVFNfU1VDQ0VTUyIsIkdFVF9QT1NUU19FUlJPUiIsIkdFVF9QT1NUX1NVQ0NFU1MiLCJHRVRfUE9TVF9FUlJPUiIsIkNSRUFURV9QT1NUX1NVQ0NFU1MiLCJDUkVBVEVfUE9TVF9FUlJPUiIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiZ2V0IiwiZ2V0UG9zdEJ5SWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTWUsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU15QixpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTW5CLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNb0IsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU1qQixpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNa0IsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCLEMsQ0FFUCxxQjs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCLG1DQUF6QjtBQUVPLE1BQU1uQixRQUFRLEdBQUcsTUFBbUJpQiw0Q0FBSyxDQUFDRyxHQUFOLENBQVUsT0FBVixDQUFwQztBQUVBLE1BQU1DLFdBQVcsR0FBSXRELEVBQUQsSUFBNkJrRCw0Q0FBSyxDQUFDRyxHQUFOLENBQVcsU0FBUXJELEVBQUcsa0JBQXRCLENBQWpEO0FBRUEsTUFBTXlDLFVBQVUsR0FBSWhELElBQUQsSUFBdUN5RCw0Q0FBSyxDQUFDekQsSUFBTixDQUFXLE9BQVgsRUFBb0JBLElBQXBCLENBQTFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFAsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXFBvc3RzXFxbaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExvYWRlclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTA3LCA4LCAwLjEpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlclN0eWxlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcic7XG5pbXBvcnQgTG9hZGVyU3R5bGVzIGZyb20gJy4vTG9hZGVyLnN0eWxlZCc7XG5cbmNvbnN0IExvYWRlciA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRlclN0eWxlcz5cbiAgICAgICAgICAgIDxTcGlubmVyIHR5cGU9XCJQdWZmXCIgY29sb3I9XCIjMDBCRkZGXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IHRpbWVvdXQ9ezMwMDB9IC8+O1xuICAgICAgICA8L0xvYWRlclN0eWxlcz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBQb3N0QmxvY2sgPSBzdHlsZWQubGlgXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDM1cHggMjVweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IDBweCBibGFjaztcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5wYFxuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJvZHkgPSBzdHlsZWQucGBcbiAgICBjb2xvcjogbmF2eTtcbiAgICBmb250LXNpemU6IDIwcHg7XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvc3RCbG9jaywgVGl0bGUsIEJvZHkgfSBmcm9tICcuL1Bvc3Quc3R5bGVkJztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ1R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzUG9zdCB7XG4gICAgcG9zdDogdHlwZXMuUG9zdFR5cGU7XG59XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH06IFByb3BzUG9zdCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFBvc3RCbG9jaz5cbiAgICAgICAgICAgICAgICA8VGl0bGU+e3Bvc3QudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8Qm9keT57cG9zdC5ib2R5fTwvQm9keT5cbiAgICAgICAgICAgICAgICB7cG9zdC5jb21tZW50cyAmJiBwb3N0LmNvbW1lbnRzLmxlbmd0aCA+IDAgJiYgPGgzPkNvbW1lbnRzOiA8L2gzPn1cbiAgICAgICAgICAgICAgICB7cG9zdC5jb21tZW50cyAmJiBwb3N0LmNvbW1lbnRzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIChwb3N0LmNvbW1lbnRzIGFzIEFycmF5PHR5cGVzLkNvbW1lbnRUeXBlPikubWFwKChlbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtlbC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmlkfTogPC9zcGFuPiB7ZWwuYm9keX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aDM+Tm8gY29tbWVudHMgZm9yIHRoaXMgcG9zdDwvaDM+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUG9zdEJsb2NrPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0L1Bvc3QnO1xuaW1wb3J0ICogYXMgYmxvZ1NlbGVjdG9ycyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dTZWxlY3RvcnMnO1xuaW1wb3J0ICogYXMgYmxvZ09wZXJhdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nT3BlcmF0aW9ucyc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXInO1xuXG5pbnRlcmZhY2UgTURUUCB7XG4gICAgZ2V0UG9zdDogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBNU1RQIHtcbiAgICBwb3N0QnlJZDogdHlwZXMuUG9zdFR5cGU7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUG9zdFBhZ2VQcm9wcyB7XG4gICAgcG9zdEJ5SWQ6IHR5cGVzLlBvc3RUeXBlO1xuICAgIGdldFBvc3Q6IChpZDogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBQb3N0UGFnZSA9ICh7IHBvc3RCeUlkLCBnZXRQb3N0LCBpc0xvYWRpbmcgfTogUG9zdFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRQb3N0KGlkKTtcbiAgICB9LCBbZ2V0UG9zdCwgaWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIgLz59XG4gICAgICAgICAgICB7cG9zdEJ5SWQgJiYgPFBvc3QgcG9zdD17cG9zdEJ5SWR9IC8+fVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlOiB0eXBlcy5TdG9yZVR5cGUpOiBNU1RQID0+ICh7XG4gICAgcG9zdEJ5SWQ6IGJsb2dTZWxlY3RvcnMuZ2V0UG9zdChzdG9yZSksXG4gICAgaXNMb2FkaW5nOiBibG9nU2VsZWN0b3JzLmdldExvYWRlcihzdG9yZSksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiAoYW55KSA9PiB2b2lkKTogTURUUCA9PiAoe1xuICAgIGdldFBvc3Q6IChpZDogc3RyaW5nKTogdm9pZCA9PiBkaXNwYXRjaChibG9nT3BlcmF0aW9ucy5nZXRQb3N0KGlkKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUG9zdFBhZ2UpO1xuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9ibG9nVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNTdGFydCA9ICgpOiB0eXBlcy5HZXRQb3N0c1N0YXJ0VHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19TVEFSVCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNTdWNjZXNzID0gKHBvc3RzOiB0eXBlcy5Qb3N0VHlwZVtdKTogdHlwZXMuR2V0UG9zdHNTdWNjZXNzVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19TVUNDRVNTLFxuICAgIHBheWxvYWQ6IHsgcG9zdHMgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHNFcnJvciA9IChlcnJvcjoge30pOiB0eXBlcy5HZXRQb3N0c0Vycm9yVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUU19FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RTdGFydCA9ICgpOiB0eXBlcy5HZXRQb3N0U3RhcnRUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BPU1RfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RTdWNjZXNzID0gKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKTogdHlwZXMuR2V0UG9zdFN1Y2Nlc3NUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BPU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB7IHBvc3QgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdEVycm9yID0gKGVycm9yOiB7fSk6IHR5cGVzLkdldFBvc3RFcnJvclR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVF9FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RTdGFydCA9ICgpOiB0eXBlcy5DcmVhdGVQb3N0U3RhcnRUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuQ1JFQVRFX1BPU1RfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RTdWNjZXNzID0gKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKTogdHlwZXMuQ3JlYXRlUG9zdFN1Y2Nlc3NUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuQ1JFQVRFX1BPU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB7IHBvc3QgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdEVycm9yID0gKGVycm9yOiB7fSk6IHR5cGVzLkNyZWF0ZVBvc3RFcnJvclR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5DUkVBVEVfUE9TVF9FUlJPUixcbiAgICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcbiIsImltcG9ydCAqIGFzIGJsb2dBY3Rpb25zIGZyb20gJy4vYmxvZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9ibG9nVHlwZXMnO1xuaW1wb3J0ICogYXMgQVBJIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpID0+IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RzU3RhcnQoKSk7XG4gICAgQVBJLmdldFBvc3RzKClcbiAgICAgICAgLnRoZW4oKHJlczogeyBkYXRhOiB0eXBlcy5Qb3N0VHlwZVtdIH0pID0+IGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RzU3VjY2VzcyhyZXMuZGF0YSkpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuZ2V0UG9zdHNFcnJvcihlcnIpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdCA9IChpZDogbnVtYmVyKSA9PiAoZGlzcGF0Y2g6IChhbnkpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0U3RhcnQoKSk7XG4gICAgQVBJLmdldFBvc3RCeUlkKGlkKVxuICAgICAgICAudGhlbigocmVzOiB7IGRhdGE6IHR5cGVzLlBvc3RUeXBlIH0pID0+IGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RTdWNjZXNzKHJlcy5kYXRhKSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0RXJyb3IoZXJyKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSAocG9zdDogdHlwZXMuUG9zdFR5cGUpID0+IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuICAgIGRpc3BhdGNoKGJsb2dBY3Rpb25zLmNyZWF0ZVBvc3RTdGFydCgpKTtcbiAgICBBUEkuY3JlYXRlUG9zdChwb3N0KVxuICAgICAgICAudGhlbigocmVzOiB7IGRhdGE6IHR5cGVzLlBvc3RUeXBlIH0pID0+IGRpc3BhdGNoKGJsb2dBY3Rpb25zLmNyZWF0ZVBvc3RTdWNjZXNzKHJlcy5kYXRhKSkpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5jcmVhdGVQb3N0RXJyb3IoZXJyKSkpO1xufTtcbiIsImltcG9ydCB7IFN0b3JlVHlwZSwgUG9zdFR5cGUgfSBmcm9tICcuL2Jsb2dUeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IChzdG9yZTogU3RvcmVUeXBlKTogUG9zdFR5cGVbXSA9PiBzdG9yZS5ibG9nLnBvc3RzO1xuZXhwb3J0IGNvbnN0IGdldFBvc3QgPSAoc3RvcmU6IFN0b3JlVHlwZSk6IFBvc3RUeXBlID0+IHN0b3JlLmJsb2cucG9zdDtcbmV4cG9ydCBjb25zdCBnZXRMb2FkZXIgPSAoc3RvcmU6IFN0b3JlVHlwZSk6IGJvb2xlYW4gPT4gc3RvcmUuYmxvZy5pc0xvYWRpbmc7XG4iLCJleHBvcnQgY29uc3QgR0VUX1BPU1RTX1NUQVJUID0gJ0dFVF9QT1NUU19TVEFSVCc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RTX1NVQ0NFU1MgPSAnR0VUX1BPU1RTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19FUlJPUiA9ICdHRVRfUE9TVFNfRVJST1InO1xuXG5leHBvcnQgY29uc3QgR0VUX1BPU1RfU1RBUlQgPSAnR0VUX1BPU1RfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX1NVQ0NFU1MgPSAnR0VUX1BPU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RfRVJST1IgPSAnR0VUX1BPU1RfRVJST1InO1xuXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfU1RBUlQgPSAnQ1JFQVRFX1BPU1RfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX1NVQ0NFU1MgPSAnQ1JFQVRFX1BPU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1RfRVJST1IgPSAnQ1JFQVRFX1BPU1RfRVJST1InO1xuXG4vLyBnZW5lcmFsIGludGVyZmFjZXNcblxuZXhwb3J0IGludGVyZmFjZSBDb21tZW50VHlwZSB7XG4gICAgcG9zdElkOiBudW1iZXI7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdFR5cGUge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBib2R5OiBzdHJpbmc7XG4gICAgY29tbWVudHM/OiBDb21tZW50VHlwZVtdIHwgW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmVUeXBlIHtcbiAgICBibG9nOiB7XG4gICAgICAgIHBvc3RzOiBQb3N0VHlwZVtdIHwgW107XG4gICAgICAgIHBvc3Q6IFBvc3RUeXBlIHwgbnVsbDtcbiAgICAgICAgaXNFcnJvcjoge30gfCBudWxsO1xuICAgICAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgfTtcbn1cblxuLy8gYWN0aW9ucyBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzU3RhcnRUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzU3VjY2Vzc1R5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVFNfU1VDQ0VTUztcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHBvc3RzOiBQb3N0VHlwZVtdO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdHNFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVFNfRVJST1I7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBlcnJvcjoge307XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0U3RhcnRUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RfU1RBUlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdFN1Y2Nlc3NUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RfU1VDQ0VTUztcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIHBvc3Q6IFBvc3RUeXBlO1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdEVycm9yVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX0VSUk9SO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZXJyb3I6IHt9O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlUG9zdFN0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIENSRUFURV9QT1NUX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RTdWNjZXNzVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIENSRUFURV9QT1NUX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0OiBQb3N0VHlwZTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9FUlJPUjtcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIGVycm9yOiB7fTtcbiAgICB9O1xufVxuXG5leHBvcnQgdHlwZSBhY3Rpb25zVHlwZXMgPVxuICAgIHwgR2V0UG9zdHNTdGFydFR5cGVcbiAgICB8IEdldFBvc3RzU3VjY2Vzc1R5cGVcbiAgICB8IEdldFBvc3RzRXJyb3JUeXBlXG4gICAgfCBHZXRQb3N0U3RhcnRUeXBlXG4gICAgfCBHZXRQb3N0U3VjY2Vzc1R5cGVcbiAgICB8IEdldFBvc3RFcnJvclR5cGVcbiAgICB8IENyZWF0ZVBvc3RTdGFydFR5cGVcbiAgICB8IENyZWF0ZVBvc3RTdWNjZXNzVHlwZVxuICAgIHwgQ3JlYXRlUG9zdEVycm9yVHlwZTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcyc7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvJztcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gKCk6IFByb21pc2U8e30+ID0+IGF4aW9zLmdldCgncG9zdHMnKTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RCeUlkID0gKGlkOiBudW1iZXIpOiBQcm9taXNlPHt9PiA9PiBheGlvcy5nZXQoYHBvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IChwb3N0OiB0eXBlcy5Qb3N0VHlwZSk6IFByb21pc2U8e30+ID0+IGF4aW9zLnBvc3QoJ3Bvc3RzJywgcG9zdCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9