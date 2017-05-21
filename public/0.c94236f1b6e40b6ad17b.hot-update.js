webpackHotUpdate(0,{

/***/ "./node_modules/lodash/lodash.js":
false,

/***/ "./src/reducers/user.js":
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: Unexpected extra options [{\"modules\":false}] passed to preset.\n    at /Users/atom/._dev/mingle/node_modules/babel-core/lib/transformation/file/options/option-manager.js:279:17\n    at Array.map (native)\n    at OptionManager.resolvePresets (/Users/atom/._dev/mingle/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)\n    at OptionManager.mergePresets (/Users/atom/._dev/mingle/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)\n    at OptionManager.mergeOptions (/Users/atom/._dev/mingle/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)\n    at OptionManager.init (/Users/atom/._dev/mingle/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)\n    at File.initOptions (/Users/atom/._dev/mingle/node_modules/babel-core/lib/transformation/file/index.js:212:65)\n    at new File (/Users/atom/._dev/mingle/node_modules/babel-core/lib/transformation/file/index.js:135:24)\n    at Pipeline.transform (/Users/atom/._dev/mingle/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\n    at transpile (/Users/atom/._dev/mingle/node_modules/babel-loader/lib/index.js:48:20)\n    at Object.module.exports (/Users/atom/._dev/mingle/node_modules/babel-loader/lib/index.js:163:20)");

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