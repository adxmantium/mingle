webpackHotUpdate(0,{

/***/ "./node_modules/lodash/lodash.js":
false,

/***/ "./src/reducers/user.js":
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (7:45)\n\n\u001b[0m \u001b[90m  5 | \u001b[39mlet init \u001b[33m=\u001b[39m {}\u001b[33m;\u001b[39m\n \u001b[90m  6 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m user \u001b[33m=\u001b[39m (state \u001b[33m=\u001b[39m init\u001b[33m,\u001b[39m action) {\n \u001b[90m    | \u001b[39m                                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  8 | \u001b[39m\n \u001b[90m  9 | \u001b[39m    \u001b[36mswitch\u001b[39m(action\u001b[33m.\u001b[39mtype) {\n \u001b[90m 10 | \u001b[39m\u001b[0m\n");

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