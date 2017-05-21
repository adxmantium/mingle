webpackHotUpdate(0,{

/***/ "./src/reducers/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// reducers.js



var init = {};

/* harmony default export */ __webpack_exports__["a"] = (user = function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
    var action = arguments[1];


    switch (action.type) {

        case '_USER:LOGIN':
            return _extends({}, state);

        default:
            return state;

    }
});

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
// /me/src/store.js






// Reducers


//create and combine middleware
// -- dev 
var middleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["a" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_0_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_2_redux_promise_middleware___default()(), __WEBPACK_IMPORTED_MODULE_1_redux_logger___default.a);

// -- production
// const middleware = applyMiddleware(thunk, promise());

//combine all reducers
var reducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["b" /* combineReducers */])({
	_user: __WEBPACK_IMPORTED_MODULE_4__reducers_user__["a" /* default */]
});

// Create Store
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["c" /* createStore */])(reducers, middleware);

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

})
//# sourceMappingURL=Mingle_bundle.map