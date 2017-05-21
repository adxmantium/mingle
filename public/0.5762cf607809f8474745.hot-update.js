webpackHotUpdate(0,{

/***/ "./src/reducers/user.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (12:14)\n\n\u001b[0m \u001b[90m 10 | \u001b[39m\n \u001b[90m 11 | \u001b[39m    \t\u001b[36mcase\u001b[39m \u001b[32m'_USER:LOGIN'\u001b[39m\u001b[33m:\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 12 | \u001b[39m    \t\t\u001b[36mreturn\u001b[39m {\u001b[33m...\u001b[39mstate}\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m    \t\t        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 13 | \u001b[39m\n \u001b[90m 14 | \u001b[39m        \u001b[36mdefault\u001b[39m\u001b[33m:\u001b[39m\n \u001b[90m 15 | \u001b[39m            \u001b[36mreturn\u001b[39m state\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./src/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__("./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware__ = __webpack_require__("./node_modules/redux-promise-middleware/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_user__ = __webpack_require__("./src/reducers/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__reducers_user__);
// /me/src/store.js






// Reducers


//create and combine middleware
// -- dev 
var middleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["a" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_0_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default()(), __WEBPACK_IMPORTED_MODULE_1_redux_logger___default.a);

// -- production
// const middleware = applyMiddleware(thunk, promise());

//combine all reducers
var reducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["b" /* combineReducers */])({
	// me
});

// Create Store
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["c" /* createStore */])(reducers, middleware);

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

})
//# sourceMappingURL=Mingle_bundle.map