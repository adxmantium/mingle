webpackHotUpdate(0,{

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
throw new Error("Cannot find module \"./reducers/user\"");
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