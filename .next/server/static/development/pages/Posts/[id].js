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
  getPost: id => dispatch(_redux_blog_blogOperations__WEBPACK_IMPORTED_MODULE_5__["getPost"](+id))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLnN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC9Qb3N0LnN0eWxlZC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9zdHMvLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9ibG9nL2Jsb2dBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ09wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYmxvZy9ibG9nU2VsZWN0b3JzLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2Jsb2cvYmxvZ1R5cGVzLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJMb2FkZXJTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJMb2FkZXIiLCJQb3N0QmxvY2siLCJsaSIsIlRpdGxlIiwicCIsIkJvZHkiLCJQb3N0IiwicG9zdCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwibGVuZ3RoIiwibWFwIiwiZWwiLCJpZCIsIlBvc3RQYWdlIiwicG9zdEJ5SWQiLCJnZXRQb3N0IiwiaXNMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImJsb2dTZWxlY3RvcnMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJsb2dPcGVyYXRpb25zIiwiY29ubmVjdCIsImdldFBvc3RzU3RhcnQiLCJ0eXBlIiwidHlwZXMiLCJHRVRfUE9TVFNfU1RBUlQiLCJnZXRQb3N0c1N1Y2Nlc3MiLCJwb3N0cyIsInBheWxvYWQiLCJnZXRQb3N0c0Vycm9yIiwiZXJyb3IiLCJnZXRQb3N0U3RhcnQiLCJHRVRfUE9TVF9TVEFSVCIsImdldFBvc3RTdWNjZXNzIiwiZ2V0UG9zdEVycm9yIiwiY3JlYXRlUG9zdFN0YXJ0IiwiQ1JFQVRFX1BPU1RfU1RBUlQiLCJjcmVhdGVQb3N0U3VjY2VzcyIsImNyZWF0ZVBvc3RFcnJvciIsImdldFBvc3RzIiwiYmxvZ0FjdGlvbnMiLCJBUEkiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY3JlYXRlUG9zdCIsImJsb2ciLCJnZXRMb2FkZXIiLCJHRVRfUE9TVFNfU1VDQ0VTUyIsIkdFVF9QT1NUU19FUlJPUiIsIkdFVF9QT1NUX1NVQ0NFU1MiLCJHRVRfUE9TVF9FUlJPUiIsIkNSRUFURV9QT1NUX1NVQ0NFU1MiLCJDUkVBVEVfUE9TVF9FUlJPUiIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiZ2V0IiwiZ2V0UG9zdEJ5SWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1lLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNeUIsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1uQixjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTW9CLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxNQUFNakIsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTWtCLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQixDLENBRVAscUI7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF5QixtQ0FBekI7QUFFTyxNQUFNbkIsUUFBUSxHQUFHLE1BQW1CaUIsNENBQUssQ0FBQ0csR0FBTixDQUFVLE9BQVYsQ0FBcEM7QUFFQSxNQUFNQyxXQUFXLEdBQUl0RCxFQUFELElBQTZCa0QsNENBQUssQ0FBQ0csR0FBTixDQUFXLFNBQVFyRCxFQUFHLGtCQUF0QixDQUFqRDtBQUVBLE1BQU15QyxVQUFVLEdBQUloRCxJQUFELElBQXVDeUQsNENBQUssQ0FBQ3pELElBQU4sQ0FBVyxPQUFYLEVBQW9CQSxJQUFwQixDQUExRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxQb3N0c1xcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBMb2FkZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEwNywgOCwgMC4xKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJTdHlsZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xuaW1wb3J0IExvYWRlclN0eWxlcyBmcm9tICcuL0xvYWRlci5zdHlsZWQnO1xuXG5jb25zdCBMb2FkZXIgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkZXJTdHlsZXM+XG4gICAgICAgICAgICA8U3Bpbm5lciB0eXBlPVwiUHVmZlwiIGNvbG9yPVwiIzAwQkZGRlwiIGhlaWdodD17MTAwfSB3aWR0aD17MTAwfSB0aW1lb3V0PXszMDAwfSAvPjtcbiAgICAgICAgPC9Mb2FkZXJTdHlsZXM+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgUG9zdEJsb2NrID0gc3R5bGVkLmxpYFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgICBtYXJnaW46IDMwcHggYXV0bztcbiAgICBwYWRkaW5nOiAzNXB4IDI1cHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCAwcHggYmxhY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQucGBcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBCb2R5ID0gc3R5bGVkLnBgXG4gICAgY29sb3I6IG5hdnk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQb3N0QmxvY2ssIFRpdGxlLCBCb2R5IH0gZnJvbSAnLi9Qb3N0LnN0eWxlZCc7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi9yZWR1eC9ibG9nL2Jsb2dUeXBlcyc7XG5cbmludGVyZmFjZSBQcm9wc1Bvc3Qge1xuICAgIHBvc3Q6IHR5cGVzLlBvc3RUeXBlO1xufVxuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9OiBQcm9wc1Bvc3QpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxQb3N0QmxvY2s+XG4gICAgICAgICAgICAgICAgPFRpdGxlPntwb3N0LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPEJvZHk+e3Bvc3QuYm9keX08L0JvZHk+XG4gICAgICAgICAgICAgICAge3Bvc3QuY29tbWVudHMgJiYgcG9zdC5jb21tZW50cy5sZW5ndGggPiAwICYmIDxoMz5Db21tZW50czogPC9oMz59XG4gICAgICAgICAgICAgICAge3Bvc3QuY29tbWVudHMgJiYgcG9zdC5jb21tZW50cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICAocG9zdC5jb21tZW50cyBhcyBBcnJheTx0eXBlcy5Db21tZW50VHlwZT4pLm1hcCgoZWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17ZWwuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5pZH06IDwvc3Bhbj4ge2VsLmJvZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGgzPk5vIGNvbW1lbnRzIGZvciB0aGlzIHBvc3Q8L2gzPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1Bvc3RCbG9jaz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdC9Qb3N0JztcbmltcG9ydCAqIGFzIGJsb2dTZWxlY3RvcnMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nU2VsZWN0b3JzJztcbmltcG9ydCAqIGFzIGJsb2dPcGVyYXRpb25zIGZyb20gJy4uLy4uL3JlZHV4L2Jsb2cvYmxvZ09wZXJhdGlvbnMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vLi4vcmVkdXgvYmxvZy9ibG9nVHlwZXMnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyJztcblxuaW50ZXJmYWNlIE1EVFAge1xuICAgIGdldFBvc3Q6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTVNUUCB7XG4gICAgcG9zdEJ5SWQ6IHR5cGVzLlBvc3RUeXBlO1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFBvc3RQYWdlUHJvcHMge1xuICAgIHBvc3RCeUlkOiB0eXBlcy5Qb3N0VHlwZTtcbiAgICBnZXRQb3N0OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG59XG5cbmNvbnN0IFBvc3RQYWdlID0gKHsgcG9zdEJ5SWQsIGdldFBvc3QsIGlzTG9hZGluZyB9OiBQb3N0UGFnZVByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFBvc3QoK2lkKTtcbiAgICB9LCBbZ2V0UG9zdCwgaWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIgLz59XG4gICAgICAgICAgICB7cG9zdEJ5SWQgJiYgPFBvc3QgcG9zdD17cG9zdEJ5SWR9IC8+fVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0b3JlOiB0eXBlcy5TdG9yZVR5cGUpOiBNU1RQID0+ICh7XG4gICAgcG9zdEJ5SWQ6IGJsb2dTZWxlY3RvcnMuZ2V0UG9zdChzdG9yZSksXG4gICAgaXNMb2FkaW5nOiBibG9nU2VsZWN0b3JzLmdldExvYWRlcihzdG9yZSksXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiAoYW55KSA9PiB2b2lkKTogTURUUCA9PiAoe1xuICAgIGdldFBvc3Q6IChpZDogbnVtYmVyKTogdm9pZCA9PiBkaXNwYXRjaChibG9nT3BlcmF0aW9ucy5nZXRQb3N0KCtpZCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBvc3RQYWdlKTtcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYmxvZ1R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzU3RhcnQgPSAoKTogdHlwZXMuR2V0UG9zdHNTdGFydFR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVFNfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzU3VjY2VzcyA9IChwb3N0czogdHlwZXMuUG9zdFR5cGVbXSk6IHR5cGVzLkdldFBvc3RzU3VjY2Vzc1R5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVFNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkOiB7IHBvc3RzIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzRXJyb3IgPSAoZXJyb3I6IHt9KTogdHlwZXMuR2V0UG9zdHNFcnJvclR5cGUgPT4gKHtcbiAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVFNfRVJST1IsXG4gICAgcGF5bG9hZDogeyBlcnJvciB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0U3RhcnQgPSAoKTogdHlwZXMuR2V0UG9zdFN0YXJ0VHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUX1NUQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0U3VjY2VzcyA9IChwb3N0OiB0eXBlcy5Qb3N0VHlwZSk6IHR5cGVzLkdldFBvc3RTdWNjZXNzVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkdFVF9QT1NUX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogeyBwb3N0IH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RFcnJvciA9IChlcnJvcjoge30pOiB0eXBlcy5HZXRQb3N0RXJyb3JUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuR0VUX1BPU1RfRVJST1IsXG4gICAgcGF5bG9hZDogeyBlcnJvciB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0U3RhcnQgPSAoKTogdHlwZXMuQ3JlYXRlUG9zdFN0YXJ0VHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkNSRUFURV9QT1NUX1NUQVJULFxufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0U3VjY2VzcyA9IChwb3N0OiB0eXBlcy5Qb3N0VHlwZSk6IHR5cGVzLkNyZWF0ZVBvc3RTdWNjZXNzVHlwZSA9PiAoe1xuICAgIHR5cGU6IHR5cGVzLkNSRUFURV9QT1NUX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogeyBwb3N0IH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3RFcnJvciA9IChlcnJvcjoge30pOiB0eXBlcy5DcmVhdGVQb3N0RXJyb3JUeXBlID0+ICh7XG4gICAgdHlwZTogdHlwZXMuQ1JFQVRFX1BPU1RfRVJST1IsXG4gICAgcGF5bG9hZDogeyBlcnJvciB9LFxufSk7XG4iLCJpbXBvcnQgKiBhcyBibG9nQWN0aW9ucyBmcm9tICcuL2Jsb2dBY3Rpb25zJztcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYmxvZ1R5cGVzJztcbmltcG9ydCAqIGFzIEFQSSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoKSA9PiAoZGlzcGF0Y2g6IChhbnkpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0c1N0YXJ0KCkpO1xuICAgIEFQSS5nZXRQb3N0cygpXG4gICAgICAgIC50aGVuKChyZXM6IHsgZGF0YTogdHlwZXMuUG9zdFR5cGVbXSB9KSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0c1N1Y2Nlc3MocmVzLmRhdGEpKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGRpc3BhdGNoKGJsb2dBY3Rpb25zLmdldFBvc3RzRXJyb3IoZXJyKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3QgPSAoaWQ6IG51bWJlcikgPT4gKGRpc3BhdGNoOiAoYW55KSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gICAgZGlzcGF0Y2goYmxvZ0FjdGlvbnMuZ2V0UG9zdFN0YXJ0KCkpO1xuICAgIEFQSS5nZXRQb3N0QnlJZChpZClcbiAgICAgICAgLnRoZW4oKHJlczogeyBkYXRhOiB0eXBlcy5Qb3N0VHlwZSB9KSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5nZXRQb3N0U3VjY2VzcyhyZXMuZGF0YSkpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuZ2V0UG9zdEVycm9yKGVycikpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0ID0gKHBvc3Q6IHR5cGVzLlBvc3RUeXBlKSA9PiAoZGlzcGF0Y2g6IChhbnkpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgICBkaXNwYXRjaChibG9nQWN0aW9ucy5jcmVhdGVQb3N0U3RhcnQoKSk7XG4gICAgQVBJLmNyZWF0ZVBvc3QocG9zdClcbiAgICAgICAgLnRoZW4oKHJlczogeyBkYXRhOiB0eXBlcy5Qb3N0VHlwZSB9KSA9PiBkaXNwYXRjaChibG9nQWN0aW9ucy5jcmVhdGVQb3N0U3VjY2VzcyhyZXMuZGF0YSkpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gZGlzcGF0Y2goYmxvZ0FjdGlvbnMuY3JlYXRlUG9zdEVycm9yKGVycikpKTtcbn07XG4iLCJpbXBvcnQgeyBTdG9yZVR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnLi9ibG9nVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoc3RvcmU6IFN0b3JlVHlwZSk6IFBvc3RUeXBlW10gPT4gc3RvcmUuYmxvZy5wb3N0cztcbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gKHN0b3JlOiBTdG9yZVR5cGUpOiBQb3N0VHlwZSA9PiBzdG9yZS5ibG9nLnBvc3Q7XG5leHBvcnQgY29uc3QgZ2V0TG9hZGVyID0gKHN0b3JlOiBTdG9yZVR5cGUpOiBib29sZWFuID0+IHN0b3JlLmJsb2cuaXNMb2FkaW5nO1xuIiwiZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19TVEFSVCA9ICdHRVRfUE9TVFNfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUU19TVUNDRVNTID0gJ0dFVF9QT1NUU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVFNfRVJST1IgPSAnR0VUX1BPU1RTX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX1NUQVJUID0gJ0dFVF9QT1NUX1NUQVJUJztcbmV4cG9ydCBjb25zdCBHRVRfUE9TVF9TVUNDRVNTID0gJ0dFVF9QT1NUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NUX0VSUk9SID0gJ0dFVF9QT1NUX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX1NUQVJUID0gJ0NSRUFURV9QT1NUX1NUQVJUJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TVF9TVUNDRVNTID0gJ0NSRUFURV9QT1NUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NUX0VSUk9SID0gJ0NSRUFURV9QT1NUX0VSUk9SJztcblxuLy8gZ2VuZXJhbCBpbnRlcmZhY2VzXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWVudFR5cGUge1xuICAgIHBvc3RJZDogbnVtYmVyO1xuICAgIGJvZHk6IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RUeXBlIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYm9keTogc3RyaW5nO1xuICAgIGNvbW1lbnRzPzogQ29tbWVudFR5cGVbXSB8IFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JlVHlwZSB7XG4gICAgYmxvZzoge1xuICAgICAgICBwb3N0czogUG9zdFR5cGVbXSB8IFtdO1xuICAgICAgICBwb3N0OiBQb3N0VHlwZSB8IG51bGw7XG4gICAgICAgIGlzRXJyb3I6IHt9IHwgbnVsbDtcbiAgICAgICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIH07XG59XG5cbi8vIGFjdGlvbnMgaW50ZXJmYWNlc1xuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0c1N0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUU19TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRQb3N0c1N1Y2Nlc3NUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0czogUG9zdFR5cGVbXTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RzRXJyb3JUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgR0VUX1BPU1RTX0VSUk9SO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZXJyb3I6IHt9O1xuICAgIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zdFN0YXJ0VHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX1NUQVJUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RTdWNjZXNzVHlwZSB7XG4gICAgdHlwZTogdHlwZW9mIEdFVF9QT1NUX1NVQ0NFU1M7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBwb3N0OiBQb3N0VHlwZTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3RFcnJvclR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBHRVRfUE9TVF9FUlJPUjtcbiAgICBwYXlsb2FkOiB7XG4gICAgICAgIGVycm9yOiB7fTtcbiAgICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVBvc3RTdGFydFR5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQb3N0U3VjY2Vzc1R5cGUge1xuICAgIHR5cGU6IHR5cGVvZiBDUkVBVEVfUE9TVF9TVUNDRVNTO1xuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgcG9zdDogUG9zdFR5cGU7XG4gICAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVQb3N0RXJyb3JUeXBlIHtcbiAgICB0eXBlOiB0eXBlb2YgQ1JFQVRFX1BPU1RfRVJST1I7XG4gICAgcGF5bG9hZDoge1xuICAgICAgICBlcnJvcjoge307XG4gICAgfTtcbn1cblxuZXhwb3J0IHR5cGUgYWN0aW9uc1R5cGVzID1cbiAgICB8IEdldFBvc3RzU3RhcnRUeXBlXG4gICAgfCBHZXRQb3N0c1N1Y2Nlc3NUeXBlXG4gICAgfCBHZXRQb3N0c0Vycm9yVHlwZVxuICAgIHwgR2V0UG9zdFN0YXJ0VHlwZVxuICAgIHwgR2V0UG9zdFN1Y2Nlc3NUeXBlXG4gICAgfCBHZXRQb3N0RXJyb3JUeXBlXG4gICAgfCBDcmVhdGVQb3N0U3RhcnRUeXBlXG4gICAgfCBDcmVhdGVQb3N0U3VjY2Vzc1R5cGVcbiAgICB8IENyZWF0ZVBvc3RFcnJvclR5cGU7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vcmVkdXgvYmxvZy9ibG9nVHlwZXMnO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkLyc7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpOiBQcm9taXNlPHt9PiA9PiBheGlvcy5nZXQoJ3Bvc3RzJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0QnlJZCA9IChpZDogbnVtYmVyKTogUHJvbWlzZTx7fT4gPT4gYXhpb3MuZ2V0KGBwb3N0cy8ke2lkfT9fZW1iZWQ9Y29tbWVudHNgKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBvc3QgPSAocG9zdDogdHlwZXMuUG9zdFR5cGUpOiBQcm9taXNlPHt9PiA9PiBheGlvcy5wb3N0KCdwb3N0cycsIHBvc3QpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==