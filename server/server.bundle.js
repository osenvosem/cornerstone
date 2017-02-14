/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function () {};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SSR___ = __webpack_require__(17);



/* harmony default export */ __webpack_exports__["a"] = function () {
  const app = this;

  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(app.get('mongodb'));
  __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Promise = global.Promise;

  app.configure(__WEBPACK_IMPORTED_MODULE_1__SSR___["a" /* default */]); // always must be last one
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("feathers");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("feathers-configuration");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("feathers-hooks");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("feathers-rest");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("feathers-socketio");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Main___ = __webpack_require__(16);
/* harmony export (immutable) */ __webpack_exports__["a"] = Root;




function Root() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__modules_Main___["a" /* default */], null);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Home;


function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Home is here!'
  );
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;




function Menu({ items }) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    { className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.menu },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      null,
      items.map(item => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: item.path },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
          { to: item.path },
          item.label
        )
      ))
    )
  );
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Menu___ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home__ = __webpack_require__(14);
/* harmony export (immutable) */ __webpack_exports__["a"] = Main;





const menuItems = [{ path: '/', label: 'Home' }, { path: '/one', label: 'One' }, { path: '/two', label: 'Two' }, { path: '/missed', label: 'Missed' }];

function Main() {
  const cond = false;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'header',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Menu___["a" /* default */], { items: menuItems })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'main',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__Home__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/one', component: One }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/two', component: Two }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { render: () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            '404 Not Found'
          ) })
      )
    )
  );
}

const One = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'h2',
  null,
  'One here'
);

const Two = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'h2',
  null,
  'Two here '
);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_Root_jsx__ = __webpack_require__(13);





/* harmony default export */ __webpack_exports__["a"] = function () {
  const app = this;

  const renderLayout = (html, state = {}) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>My lovely app</title>
      </head>
      <body>
        <div id="root"><div>${html}</div></div>

        <script>window.__INITIAL_STATE__ = ${JSON.stringify(state)}</script>
        <script src="/assets/manifest.bundle.js"></script>
        <script src="/assets/vendor.bundle.js"></script>
        <script src="/assets/main.bundle.js"></script>
      </body>
      </html>
    `;
  };

  app.use('*', (req, res) => {
    const context = {};
    const renderedLayout = renderLayout(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["StaticRouter"],
      { location: req.url, context: context },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__app_Root_jsx__["a" /* default */], null)
    )), {});

    if (context.url) {
      return res.redirect(302, context.url);
    } else {
      return res.send(renderedLayout);
    }
  });
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
	"menu": "Menu__menu--3WhW2",
	"menu": "Menu__menu--3WhW2"
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_feathers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_feathers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_feathers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_compression__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_feathers_configuration__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_feathers_configuration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_feathers_configuration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_feathers_hooks__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_feathers_hooks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_feathers_hooks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_feathers_rest__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_feathers_rest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_feathers_rest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_feathers_socketio__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_feathers_socketio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_feathers_socketio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__middleware__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services__ = __webpack_require__(3);












const app = __WEBPACK_IMPORTED_MODULE_1_feathers___default()();

app.configure(__WEBPACK_IMPORTED_MODULE_4_feathers_configuration___default()(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, '..')));

app.use(__WEBPACK_IMPORTED_MODULE_3_compression___default()()).use(__WEBPACK_IMPORTED_MODULE_2_serve_favicon___default()(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(app.get('public'), 'favicon.ico'))).use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.json(), __WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.urlencoded({ extended: true })).use('/assets/', __WEBPACK_IMPORTED_MODULE_1_feathers___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(app.get('public'), 'assets'))).configure(__WEBPACK_IMPORTED_MODULE_5_feathers_hooks___default()()).configure(__WEBPACK_IMPORTED_MODULE_6_feathers_rest___default()()).configure(__WEBPACK_IMPORTED_MODULE_8_feathers_socketio___default()()).configure(__WEBPACK_IMPORTED_MODULE_9__middleware__["a" /* default */]).configure(__WEBPACK_IMPORTED_MODULE_10__services__["a" /* default */]);

app.listen(3000);

/* harmony default export */ __webpack_exports__["default"] = app;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ })
/******/ ]);
//# sourceMappingURL=server.bundle.js.map