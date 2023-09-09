/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbIiJdLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qc3guanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index.js */ \"./store/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.jsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_layout__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/demo */ \"./store/demo.js\");\n/* harmony import */ var _public_sass_style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/sass/style.scss */ \"./public/sass/style.scss\");\n/* harmony import */ var _public_sass_style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_sass_style_scss__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/home/oem/arabdeal/arabdeal/pages/_app.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const store = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (store.getState().demo.current !== 36) {\n      store.dispatch(_store_demo__WEBPACK_IMPORTED_MODULE_6__.actions.refreshStore(36));\n    }\n  }, []);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: store,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__.PersistGate, {\n    persistor: store.__persistor,\n    loading: __jsx(\"div\", {\n      className: \"loading-overlay\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 26\n      }\n    }, __jsx(\"div\", {\n      className: \"bounce-loader\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }\n    }, __jsx(\"div\", {\n      className: \"bounce1\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 25\n      }\n    }), __jsx(\"div\", {\n      className: \"bounce2\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 25\n      }\n    }), __jsx(\"div\", {\n      className: \"bounce3\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 25\n      }\n    }))),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx((react_helmet__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"UTF-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }), __jsx(\"meta\", {\n    \"http-equiv\": \"X-UA-Compatible\",\n    content: \"IE=edge\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 21\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 21\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 21\n    }\n  }, \"Porto - React eCommerce Template\"), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"React Template\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 21\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Porto - React eCommerce Template\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 21\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"SW-THEMES\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  })), __jsx((_components_layout__WEBPACK_IMPORTED_MODULE_5___default()), {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 17\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 21\n    }\n  })))));\n};\n\nApp.getInitialProps = async ({\n  Component,\n  ctx\n}) => {\n  let pageProps = {};\n\n  if (Component.getInitialProps) {\n    pageProps = await Component.getInitialProps(ctx);\n  }\n\n  return {\n    pageProps\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_index_js__WEBPACK_IMPORTED_MODULE_4__.wrapper.withRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0by1yZWFjdC8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwiZ2V0U3RhdGUiLCJkZW1vIiwiY3VycmVudCIsImRpc3BhdGNoIiwiRGVtb0FjdGlvbiIsIl9fcGVyc2lzdG9yIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwid3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUN0QyxRQUFNQyxLQUFLLEdBQUdDLHFEQUFRLEVBQXRCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlGLEtBQUssQ0FBQ0csUUFBTixHQUFpQkMsSUFBakIsQ0FBc0JDLE9BQXRCLEtBQWtDLEVBQXRDLEVBQTBDO0FBQ3RDTCxXQUFLLENBQUNNLFFBQU4sQ0FBZUMsNkRBQUEsQ0FBd0IsRUFBeEIsQ0FBZjtBQUNIO0FBQ0osR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BLFNBQ0ksTUFBQyxpREFBRDtBQUFVLFNBQUssRUFBRVAsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0VBQUQ7QUFDSSxhQUFTLEVBQUVBLEtBQUssQ0FBQ1EsV0FEckI7QUFFSSxXQUFPLEVBQUU7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNMO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixDQURLLENBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTSxrQkFBVyxpQkFBakI7QUFBbUMsV0FBTyxFQUFDLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVEQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUxKLEVBT0k7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsZ0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLGtDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFTSTtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLFdBQU8sRUFBQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FUSixFQXFCSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQsZUFBZVQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FyQkosQ0FESixDQURKO0FBNkJILENBdENEOztBQXdDQUYsR0FBRyxDQUFDWSxlQUFKLEdBQXNCLE9BQU87QUFBRVgsV0FBRjtBQUFhWTtBQUFiLENBQVAsS0FBOEI7QUFDaEQsTUFBSVgsU0FBUyxHQUFHLEVBQWhCOztBQUNBLE1BQUlELFNBQVMsQ0FBQ1csZUFBZCxFQUErQjtBQUMzQlYsYUFBUyxHQUFHLE1BQU1ELFNBQVMsQ0FBQ1csZUFBVixDQUEwQkMsR0FBMUIsQ0FBbEI7QUFDSDs7QUFDRCxTQUFPO0FBQUVYO0FBQUYsR0FBUDtBQUNILENBTkQ7O0FBUUEsK0RBQWVZLDhEQUFBLENBQWtCZCxHQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZVN0b3JlIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4LmpzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBEZW1vQWN0aW9uIH0gZnJvbSBcIi4uL3N0b3JlL2RlbW9cIjtcclxuXHJcbmltcG9ydCBcIi4uL3B1YmxpYy9zYXNzL3N0eWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzdG9yZS5nZXRTdGF0ZSgpLmRlbW8uY3VycmVudCAhPT0gMzYpIHtcclxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goRGVtb0FjdGlvbi5yZWZyZXNoU3RvcmUoMzYpKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8UGVyc2lzdEdhdGVcclxuICAgICAgICAgICAgICAgIHBlcnNpc3Rvcj17c3RvcmUuX19wZXJzaXN0b3J9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXs8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlLWxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fT5cclxuICAgICAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5Qb3J0byAtIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJSZWFjdCBUZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBvcnRvIC0gUmVhY3QgZUNvbW1lcmNlIFRlbXBsYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlNXLVRIRU1FU1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlbG1ldD5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICAgIDwvUHJvdmlkZXIgPlxyXG4gICAgKVxyXG59O1xyXG5cclxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IENvbXBvbmVudCwgY3R4IH0pID0+IHtcclxuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/demo.js":
/*!***********************!*\
  !*** ./store/demo.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"actionTypes\": function() { return /* binding */ actionTypes; },\n/* harmony export */   \"actions\": function() { return /* binding */ actions; }\n/* harmony export */ });\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst actionTypes = {\n  RefreshStore: \"REFRESH_STORE\"\n};\nlet initialState = {\n  current: 0\n};\n\nconst demoReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case actionTypes.RefreshStore:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        current: action.payload.current\n      });\n\n    default:\n      return state;\n  }\n};\n\nconst actions = {\n  refreshStore: current => ({\n    type: actionTypes.RefreshStore,\n    payload: {\n      current\n    }\n  })\n};\nconst persistConfig = {\n  keyPrefix: \"porto-\",\n  key: \"demo\",\n  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, demoReducer));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0by1yZWFjdC8uL3N0b3JlL2RlbW8uanM/OWIxYSJdLCJuYW1lcyI6WyJhY3Rpb25UeXBlcyIsIlJlZnJlc2hTdG9yZSIsImluaXRpYWxTdGF0ZSIsImN1cnJlbnQiLCJkZW1vUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVmcmVzaFN0b3JlIiwicGVyc2lzdENvbmZpZyIsImtleVByZWZpeCIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBRztBQUN2QkMsY0FBWSxFQUFFO0FBRFMsQ0FBcEI7QUFJUCxJQUFJQyxZQUFZLEdBQUc7QUFDZkMsU0FBTyxFQUFFO0FBRE0sQ0FBbkI7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLENBQUVDLEtBQUssR0FBR0gsWUFBVixFQUF3QkksTUFBeEIsS0FBb0M7QUFDcEQsVUFBU0EsTUFBTSxDQUFDQyxJQUFoQjtBQUNJLFNBQUtQLFdBQVcsQ0FBQ0MsWUFBakI7QUFDSSw2Q0FDT0ksS0FEUDtBQUVJRixlQUFPLEVBQUVHLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlTDtBQUY1Qjs7QUFLSjtBQUNJLGFBQU9FLEtBQVA7QUFSUjtBQVVILENBWEQ7O0FBYU8sTUFBTUksT0FBTyxHQUFHO0FBQ25CQyxjQUFZLEVBQUlQLE9BQUYsS0FBaUI7QUFBRUksUUFBSSxFQUFFUCxXQUFXLENBQUNDLFlBQXBCO0FBQWtDTyxXQUFPLEVBQUU7QUFBRUw7QUFBRjtBQUEzQyxHQUFqQjtBQURLLENBQWhCO0FBSVAsTUFBTVEsYUFBYSxHQUFHO0FBQ2xCQyxXQUFTLEVBQUUsUUFETztBQUVsQkMsS0FBRyxFQUFFLE1BRmE7QUFHbEJDLFNBQU9BO0FBSFcsQ0FBdEI7QUFNQSwrREFBZUMsNkRBQWMsQ0FBRUosYUFBRixFQUFpQlAsV0FBakIsQ0FBN0IiLCJmaWxlIjoiLi9zdG9yZS9kZW1vLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcclxuICAgIFJlZnJlc2hTdG9yZTogXCJSRUZSRVNIX1NUT1JFXCJcclxufTtcclxuXHJcbmxldCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50OiAwXHJcbn07XHJcblxyXG5jb25zdCBkZW1vUmVkdWNlciA9ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlICkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuUmVmcmVzaFN0b3JlOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIHJlZnJlc2hTdG9yZTogKCBjdXJyZW50ICkgPT4gKCB7IHR5cGU6IGFjdGlvblR5cGVzLlJlZnJlc2hTdG9yZSwgcGF5bG9hZDogeyBjdXJyZW50IH0gfSApXHJcbn07XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5UHJlZml4OiBcInBvcnRvLVwiLFxyXG4gICAga2V5OiBcImRlbW9cIixcclxuICAgIHN0b3JhZ2VcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIoIHBlcnNpc3RDb25maWcsIGRlbW9SZWR1Y2VyICk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/demo.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeStore\": function() { return /* binding */ makeStore; },\n/* harmony export */   \"wrapper\": function() { return /* binding */ wrapper; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root-saga */ \"./store/root-saga.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart */ \"./store/cart.js\");\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist */ \"./store/wishlist.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal */ \"./store/modal.js\");\n/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo */ \"./store/demo.js\");\n\n\n\n\n // Import Custom Component\n\n\n\n\n\nconst sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();\nconst rootReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  cartlist: _cart__WEBPACK_IMPORTED_MODULE_5__.default,\n  wishlist: _wishlist__WEBPACK_IMPORTED_MODULE_6__.default,\n  modal: _modal__WEBPACK_IMPORTED_MODULE_7__.default,\n  demo: _demo__WEBPACK_IMPORTED_MODULE_8__.default\n});\nconst makeStore = context => {\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducers, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(sagaMiddleware));\n  store.sagaTask = sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_3__.default);\n  store.__persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(store);\n  return store;\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n  debug: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0by1yZWFjdC8uL3N0b3JlL2luZGV4LmpzPzkxMDEiXSwibmFtZXMiOlsic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInJvb3RSZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsImNhcnRsaXN0IiwiY2FydFJlZHVjZXIiLCJ3aXNobGlzdCIsIndpc2hsaXN0UmVkdWNlciIsIm1vZGFsIiwibW9kYWxSZWR1Y2VyIiwiZGVtbyIsImRlbW9SZWR1Y2VyIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJzYWdhVGFzayIsInJ1biIsInJvb3RTYWdhIiwiX19wZXJzaXN0b3IiLCJwZXJzaXN0U3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLHNEQUFlLENBQUM7QUFDakNDLFVBQVEsRUFBRUMsMENBRHVCO0FBRWpDQyxVQUFRLEVBQUVDLDhDQUZ1QjtBQUdqQ0MsT0FBSyxFQUFFQywyQ0FIMEI7QUFJakNDLE1BQUksRUFBRUMsMENBQVdBO0FBSmdCLENBQUQsQ0FBcEM7QUFPTyxNQUFNQyxTQUFTLEdBQUlDLE9BQUQsSUFBYTtBQUNsQyxRQUFNQyxLQUFLLEdBQUdDLGtEQUFXLENBQ3JCYixZQURxQixFQUVyQmMsc0RBQWUsQ0FBQ2hCLGNBQUQsQ0FGTSxDQUF6QjtBQUlBYyxPQUFLLENBQUNHLFFBQU4sR0FBaUJqQixjQUFjLENBQUNrQixHQUFmLENBQW1CQywrQ0FBbkIsQ0FBakI7QUFDQUwsT0FBSyxDQUFDTSxXQUFOLEdBQW9CQywyREFBWSxDQUFDUCxLQUFELENBQWhDO0FBQ0EsU0FBT0EsS0FBUDtBQUNILENBUk07QUFVQSxNQUFNUSxPQUFPLEdBQUdDLGlFQUFhLENBQUNYLFNBQUQsRUFBWTtBQUFFWSxPQUFLLEVBQUU7QUFBVCxDQUFaLENBQTdCIiwiZmlsZSI6Ii4vc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vcm9vdC1zYWdhJ1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5cclxuLy8gSW1wb3J0IEN1c3RvbSBDb21wb25lbnRcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnRcIjtcclxuaW1wb3J0IHdpc2hsaXN0UmVkdWNlciBmcm9tIFwiLi93aXNobGlzdFwiO1xyXG5pbXBvcnQgbW9kYWxSZWR1Y2VyIGZyb20gXCIuL21vZGFsXCI7XHJcbmltcG9ydCBkZW1vUmVkdWNlciBmcm9tIFwiLi9kZW1vXCI7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjYXJ0bGlzdDogY2FydFJlZHVjZXIsXHJcbiAgICB3aXNobGlzdDogd2lzaGxpc3RSZWR1Y2VyLFxyXG4gICAgbW9kYWw6IG1vZGFsUmVkdWNlcixcclxuICAgIGRlbW86IGRlbW9SZWR1Y2VyXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VycyxcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKTtcclxuXHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICBzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IGZhbHNlIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./store/root-saga.js":
/*!****************************!*\
  !*** ./store/root-saga.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ rootSaga; }\n/* harmony export */ });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart */ \"./store/cart.js\");\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist */ \"./store/wishlist.js\");\n\n\n // notice how we now only export the rootSaga\n// single entry point to start all Sagas at once\n\nfunction* rootSaga() {\n  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.all)([(0,_cart__WEBPACK_IMPORTED_MODULE_1__.cartSaga)(), (0,_wishlist__WEBPACK_IMPORTED_MODULE_2__.wishlistSaga)()]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0by1yZWFjdC8uL3N0b3JlL3Jvb3Qtc2FnYS5qcz84NGQyIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiY2FydFNhZ2EiLCJ3aXNobGlzdFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ2UsVUFBVUEsUUFBVixHQUFzQjtBQUNqQyxRQUFNQyx1REFBRyxDQUFFLENBQ1BDLCtDQUFRLEVBREQsRUFFUEMsdURBQVksRUFGTCxDQUFGLENBQVQ7QUFJSCIsImZpbGUiOiIuL3N0b3JlL3Jvb3Qtc2FnYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IHsgY2FydFNhZ2EgfSBmcm9tICcuL2NhcnQnO1xyXG5pbXBvcnQgeyB3aXNobGlzdFNhZ2EgfSBmcm9tICcuL3dpc2hsaXN0JztcclxuLy8gbm90aWNlIGhvdyB3ZSBub3cgb25seSBleHBvcnQgdGhlIHJvb3RTYWdhXHJcbi8vIHNpbmdsZSBlbnRyeSBwb2ludCB0byBzdGFydCBhbGwgU2FnYXMgYXQgb25jZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EgKCkge1xyXG4gICAgeWllbGQgYWxsKCBbXHJcbiAgICAgICAgY2FydFNhZ2EoKSxcclxuICAgICAgICB3aXNobGlzdFNhZ2EoKVxyXG4gICAgXSApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/root-saga.js\n");

/***/ }),

/***/ "./public/sass/style.scss":
/*!********************************!*\
  !*** ./public/sass/style.scss ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/integration/react");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","store_cart_js-store_modal_js-store_wishlist_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();