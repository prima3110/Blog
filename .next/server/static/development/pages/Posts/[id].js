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
    getPost(+id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLnN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC9Qb3N0LnN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9zdHMvLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9ibG9nL2Jsb2dBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ09wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYmxvZy9ibG9nU2VsZWN0b3JzLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ1R5cGVzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJMb2FkZXJTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJMb2FkZXIiLCJQb3N0QmxvY2siLCJsaSIsIlRpdGxlIiwicCIsIkJvZHkiLCJQb3N0IiwicG9zdCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwibGVuZ3RoIiwibWFwIiwiZWwiLCJpZCIsIlBvc3RQYWdlIiwicG9zdEJ5SWQiLCJnZXRQb3N0IiwiaXNMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImJsb2dTZWxlY3RvcnMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJsb2dPcGVyYXRpb25zIiwiY29ubmVjdCIsImdldFBvc3RzU3RhcnQiLCJ0eXBlIiwidHlwZXMiLCJHRVRfUE9TVFNfU1RBUlQiLCJnZXRQb3N0c1N1Y2Nlc3MiLCJwb3N0cyIsInBheWxvYWQiLCJnZXRQb3N0c0Vycm9yIiwiZXJyb3IiLCJnZXRQb3N0U3RhcnQiLCJHRVRfUE9TVF9TVEFSVCIsImdldFBvc3RTdWNjZXNzIiwiZ2V0UG9zdEVycm9yIiwiY3JlYXRlUG9zdFN0YXJ0IiwiQ1JFQVRFX1BPU1RfU1RBUlQiLCJjcmVhdGVQb3N0U3VjY2VzcyIsImNyZWF0ZVBvc3RFcnJvciIsImdldFBvc3RzIiwiYmxvZ0FjdGlvbnMiLCJBUEkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY3JlYXRlUG9zdCIsImJsb2ciLCJnZXRMb2FkZXIiLCJHRVRfUE9TVFNfU1VDQ0VTUyIsIkdFVF9QT1NUU19FUlJPUiIsIkdFVF9QT1NUX1NVQ0NFU1MiLCJHRVRfUE9TVF9FUlJPUiIsIkNSRUFURV9QT1NUX1NVQ0NFU1MiLCJDUkVBVEVfUE9TVF9FUlJPUiIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiZ2V0IiwiZ2V0UG9zdEJ5SWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNZSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTXlCLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNbkIsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1vQixnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTWpCLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1rQixtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUIsQyxDQUVQLHFCOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBeUIsbUNBQXpCO0FBRU8sTUFBTW5CLFFBQVEsR0FBRyxNQUFtQmlCLDRDQUFLLENBQUNHLEdBQU4sQ0FBVSxPQUFWLENBQXBDO0FBRUEsTUFBTUMsV0FBVyxHQUFJdEQsRUFBRCxJQUE2QmtELDRDQUFLLENBQUNHLEdBQU4sQ0FBVyxTQUFRckQsRUFBRyxrQkFBdEIsQ0FBakQ7QUFFQSxNQUFNeUMsVUFBVSxHQUFJaEQsSUFBRCxJQUF1Q3lELDRDQUFLLENBQUN6RCxJQUFOLENBQVcsT0FBWCxFQUFvQkEsSUFBcEIsQ0FBMUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcUG9zdHNcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTG9hZGVyU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogMTAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMDcsIDgsIDAuMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyU3R5bGVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LWxvYWRlci1zcGlubmVyJztcbmltcG9ydCBMb2FkZXJTdHlsZXMgZnJvbSAnLi9Mb2FkZXIuc3R5bGVkJztcblxuY29uc3QgTG9hZGVyID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGVyU3R5bGVzPlxuICAgICAgICAgICAgPFNwaW5uZXIgdHlwZT1cIlB1ZmZcIiBjb2xvcj1cIiMwMEJGRkZcIiBoZWlnaHQ9ezEwMH0gd2lkdGg9ezEwMH0gdGltZW91dD17MzAwMH0gLz47XG4gICAgICAgIDwvTG9hZGVyU3R5bGVzPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFBvc3RCbG9jayA9IHN0eWxlZC5saWBcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgcGFkZGluZzogMzVweCAyNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggMHB4IGJsYWNrO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnBgXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5wYFxuICAgIGNvbG9yOiBuYXZ5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG9zdEJsb2NrLCBUaXRsZSwgQm9keSB9IGZyb20gJy4vUG9zdC5zdHlsZWQnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nVHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHNQb3N0IHtcbiAgICBwb3N0OiB0eXBlcy5Qb3N0VHlwZTtcbn1cblxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfTogUHJvcHNQb3N0KTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UG9zdEJsb2NrPlxuICAgICAgICAgICAgICAgIDxUaXRsZT57cG9zdC50aXRsZX08L1RpdGxlPlxuICAgICAgICAgICAgICAgIDxCb2R5Pntwb3N0LmJvZHl9PC9Cb2R5PlxuICAgICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRzICYmIHBvc3QuY29tbWVudHMubGVuZ3RoID4gMCAmJiA8aDM+Q29tbWVudHM6IDwvaDM+fVxuICAgICAgICAgICAgICAgIHtwb3N0LmNvbW1lbnRzICYmIHBvc3QuY29tbWVudHMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgKHBvc3QuY29tbWVudHMgYXMgQXJyYXk8dHlwZXMuQ29tbWVudFR5cGU+KS5tYXAoKGVsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2VsLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuaWR9OiA8L3NwYW4+IHtlbC5ib2R5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxoMz5ObyBjb21tZW50cyBmb3IgdGhpcyBwb3N0PC9oMz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Qb3N0QmxvY2s+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3QvUG9zdCc7XG5pbXBvcnQgKiBhcyBibG9nU2VsZWN0b3JzIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ1NlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBibG9nT3BlcmF0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dPcGVyYXRpb25zJztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ1R5cGVzJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5cbmludGVyZmFjZSBNRFRQIHtcbiAgICBnZXRQb3N0OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIE1TVFAge1xuICAgIHBvc3RCeUlkOiB0eXBlcy5Qb3N0VHlwZTtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBQb3N0UGFnZVByb3BzIHtcbiAgICBwb3N0QnlJZDogdHlwZXMuUG9zdFR5cGU7XG4gICAgZ2V0UG9zdDogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5jb25zdCBQb3N0UGFnZSA9ICh7IHBvc3RCeUlkLCBnZXRQb3N0LCBpc0xvYWRpbmcgfTogUG9zdFBhZ2VQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRQb3N0KCtpZCk7XG4gICAgfSwgW2dldFBvc3QsIGlkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGVyIC8+fVxuICAgICAgICAgICAge3Bvc3RCeUlkICYmIDxQb3N0IHBvc3Q9e3Bvc3RCeUlkfSAvPn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdG9yZTogdHlwZXMuU3RvcmVUeXBlKTogTVNUUCA9PiAoe1xuICAgIHBvc3RCeUlkOiBibG9nU2VsZWN0b3JzLmdldFBvc3Qoc3RvcmUpLFxuICAgIGlzTG9hZGluZzogYmxvZ1NlbGVjdG9ycy5nZXRMb2FkZXIoc3RvcmUpLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogKGFueSkgPT4gdm9pZCk6IE1EVFAgPT4gKHtcbiAgICBnZXRQb3N0OiAoaWQ6IG51bWJlcik6IHZvaWQgPT4gZGlzcGF0Y2goYmxvZ09wZXJhdGlvbnMuZ2V0UG9zdChpZCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBvc3RQYWdlKTtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYmxvZ1R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzU3RhcnQgPSAoKTogdHlwZXMuR2V0UG9zdHNTdGFydFR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVFNfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzU3VjY2VzcyA9IChwb3N0czogdHlwZXMuUG9zdFR5cGVbXSk6IHR5cGVzLkdldFBvc3RzU3VjY2Vzc1R5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVFNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB7IHBvc3RzIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzRXJyb3IgPSAoZXJyb3I6IHt9KTogdHlwZXMuR2V0UG9zdHNFcnJvclR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVFNfRVJST1IsXG4gICAgcGF5bG9hZDogeyBlcnJvciB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0U3RhcnQgPSAoKTogdHlwZXMuR2V0UG9zdFN0YXJ0VHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUX1NUQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0U3VjY2VzcyA9IChwb3N0OiB0eXBlcy5Qb3N0VHlwZSk6IHR5cGVzLkdldFBvc3RTdWNjZXNzVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogeyBwb3N0IH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RFcnJvciA9IChlcnJvcjoge30pOiB0eXBlcy5HZXRQb3N0RXJyb3JUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BPU1RfRVJST1IsXG4gICAgcGF5bG9hZDogeyBlcnJvciB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0U3RhcnQgPSAoKTogdHlwZXMuQ3JlYXRlUG9zdFN0YXJ0VHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkNSRUFURV9QT1NUX1NUQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0U3VjY2VzcyA9IChwb3N0OiB0eXBlcy5Qb3N0VHlwZSk6IHR5cGVzLkNyZWF0ZVBvc3RTdWNjZXNzVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkNSRUFURV9QT1NUX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogeyBwb3N0IH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RFcnJvciA9IChlcnJvcjoge30pOiB0eXBlcy5DcmVhdGVQb3N0RXJyb3JUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuQ1JFQVRFX1BPU1RfRVJST1IsXG4gICAgcGF5bG9hZDogeyBlcnJvciB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBibG9nQWN0aW9ucyBmcm9tICcuL2Jsb2dBY3Rpb25zJztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYmxvZ1R5cGVzJztcbmltcG9ydCAqIGFzIEFQSSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoKSA9PiAoZGlzcGF0Y2g6IChhbnkpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0c1N0YXJ0KCkpO1xuICAgIEFQSS5nZXRQb3N0cygpXG4gICAgICAgIC50aGVuKChyZXM6IHsgZGF0YTogdHlwZXMuUG9zdFR5cGVbXSB9KSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0c1N1Y2Nlc3MocmVzLmRhdGEpKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RzRXJyb3IoZXJyKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3QgPSAoaWQ6IG51bWJlcikgPT4gKGRpc3BhdGNoOiAoYW55KSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gICAgZGlzcGF0Y2goYmxvZ0FjdGlvbnMuZ2V0UG9zdFN0YXJ0KCkpO1xuICAgIEFQSS5nZXRQb3N0QnlJZChpZClcbiAgICAgICAgLnRoZW4oKHJlczogeyBkYXRhOiB0eXBlcy5Qb3N0VHlwZSB9KSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0U3VjY2VzcyhyZXMuZGF0YSkpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuZ2V0UG9zdEVycm9yKGVycikpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0ID0gKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKSA9PiAoZGlzcGF0Y2g6IChhbnkpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaChibG9nQWN0aW9ucy5jcmVhdGVQb3N0U3RhcnQoKSk7XG4gICAgQVBJLmNyZWF0ZVBvc3QocG9zdClcbiAgICAgICAgLnRoZW4oKHJlczogeyBkYXRhOiB0eXBlcy5Qb3N0VHlwZSB9KSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5jcmVhdGVQb3N0U3VjY2VzcyhyZXMuZGF0YSkpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuY3JlYXRlUG9zdEVycm9yKGVycikpKTtcbn07XG4iLCJpbXBvcnQgeyBTdG9yZVR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnLi9ibG9nVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoc3RvcmU6IFN0b3JlVHlwZSk6IFBvc3RUeXBlW10gPT4gc3RvcmUuYmxvZy5wb3N0cztcbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gKHN0b3JlOiBTdG9yZVR5cGUpOiBQb3N0VHlwZSA9PiBzdG9yZS5ibG9nLnBvc3Q7XG5leHBvcnQgY29uc3QgZ2V0TG9hZGVyID0gKHN0b3JlOiBTdG9yZVR5cGUpOiBib29sZWFuID0+IHN0b3JlLmJsb2cuaXNMb2FkaW5nO1xuIiwiZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19TVEFSVCA9ICdHRVRfUE9TVFNfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19TVUNDRVNTID0gJ0dFVF9QT1NUU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFNfRVJST1IgPSAnR0VUX1BPU1RTX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX1NUQVJUID0gJ0dFVF9QT1NUX1NUQVJUJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9TVUNDRVNTID0gJ0dFVF9QT1NUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0VSUk9SID0gJ0dFVF9QT1NUX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX1NUQVJUID0gJ0NSRUFURV9QT1NUX1NUQVJUJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9TVUNDRVNTID0gJ0NSRUFURV9QT1NUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX0VSUk9SID0gJ0NSRUFURV9QT1NUX0VSUk9SJztcblxuLy8gZ2VuZXJhbCBpbnRlcmZhY2VzXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWVudFR5cGUge1xuICAgIHBvc3RJZDogbnVtYmVyO1xuICAgIGJvZHk6IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RUeXBlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGNvbW1lbnRzPzogQ29tbWVudFR5cGVbXSB8IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JlVHlwZSB7XG4gICAgYmxvZzoge1xuICAgICAgICBwb3N0czogUG9zdFR5cGVbXSB8IFtdO1xuICAgICAgICBwb3N0OiBQb3N0VHlwZSB8IG51bGw7XG4gICAgICAgIGlzRXJyb3I6IHt9IHwgbnVsbDtcbiAgICAgICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIH07XG59XG5cbi8vIGFjdGlvbnMgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0c1N0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUU19TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0c1N1Y2Nlc3NUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0czogUG9zdFR5cGVbXTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzRXJyb3JUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX0VSUk9SO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZXJyb3I6IHt9O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdFN0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RTdWNjZXNzVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0OiBQb3N0VHlwZTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVF9FUlJPUjtcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIGVycm9yOiB7fTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RTdGFydFR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQb3N0U3VjY2Vzc1R5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9TVUNDRVNTO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgcG9zdDogUG9zdFR5cGU7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQb3N0RXJyb3JUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgQ1JFQVRFX1BPU1RfRVJST1I7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBlcnJvcjoge307XG4gICAgfTtcbn1cblxuZXhwb3J0IHR5cGUgYWN0aW9uc1R5cGVzID1cbiAgICB8IEdldFBvc3RzU3RhcnRUeXBlXG4gICAgfCBHZXRQb3N0c1N1Y2Nlc3NUeXBlXG4gICAgfCBHZXRQb3N0c0Vycm9yVHlwZVxuICAgIHwgR2V0UG9zdFN0YXJ0VHlwZVxuICAgIHwgR2V0UG9zdFN1Y2Nlc3NUeXBlXG4gICAgfCBHZXRQb3N0RXJyb3JUeXBlXG4gICAgfCBDcmVhdGVQb3N0U3RhcnRUeXBlXG4gICAgfCBDcmVhdGVQb3N0U3VjY2Vzc1R5cGVcbiAgICB8IENyZWF0ZVBvc3RFcnJvclR5cGU7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vcmVkdXgvYmxvZy9ibG9nVHlwZXMnO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkLyc7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpOiBQcm9taXNlPHt9PiA9PiBheGlvcy5nZXQoJ3Bvc3RzJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0QnlJZCA9IChpZDogbnVtYmVyKTogUHJvbWlzZTx7fT4gPT4gYXhpb3MuZ2V0KGBwb3N0cy8ke2lkfT9fZW1iZWQ9Y29tbWVudHNgKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSAocG9zdDogdHlwZXMuUG9zdFR5cGUpOiBQcm9taXNlPHt9PiA9PiBheGlvcy5wb3N0KCdwb3N0cycsIHBvc3QpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==