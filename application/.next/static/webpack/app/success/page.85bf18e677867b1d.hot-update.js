"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/success/page",{

/***/ "(app-pages-browser)/./app/success/page.js":
/*!*****************************!*\
  !*** ./app/success/page.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Success; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_store_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/store/Store */ \"(app-pages-browser)/./app/store/Store.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Success() {\n    _s();\n    const [order, setOrder] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_app_store_Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"].order);\n    function checkOrder() {\n        if (order) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                    children: \"Order Placed Successfully\"\n                }, void 0, false, {\n                    fileName: \"/app/app/success/page.js\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Text, {\n            children: \"No Orders Available\"\n        }, void 0, false, {\n            fileName: \"/app/app/success/page.js\",\n            lineNumber: 19,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        className: \"order-container\",\n        direction: \"column\",\n        children: checkOrder()\n    }, void 0, false, {\n        fileName: \"/app/app/success/page.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Success, \"KRgeIe2bC2vlDdDM6KjfqffKM38=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom\n    ];\n});\n_c = Success;\nvar _c;\n$RefreshReg$(_c, \"Success\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zdWNjZXNzL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzQztBQUNOO0FBQ1k7QUFFN0IsU0FBU0k7O0lBRXBCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCw4Q0FBT0EsQ0FBQ0Qsd0RBQUtBLENBQUNLLEtBQUs7SUFFN0MsU0FBU0U7UUFDTCxJQUFHRixPQUFPO1lBQ04scUJBQ0k7MEJBQ0ksNEVBQUNGLGtEQUFJQTs4QkFBQzs7Ozs7OztRQUdsQjtRQUVBLHFCQUFPLDhEQUFDQSxrREFBSUE7c0JBQUM7Ozs7OztJQUNqQjtJQUVBLHFCQUNJLDhEQUFDRCxrREFBSUE7UUFBQ00sV0FBVztRQUFtQkMsV0FBVztrQkFDekNGOzs7Ozs7QUFHZDtHQXJCd0JIOztRQUVNSCwwQ0FBT0E7OztLQUZiRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc3VjY2Vzcy9wYWdlLmpzPzhkODAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgc3RvcmUgZnJvbSBcIkAvYXBwL3N0b3JlL1N0b3JlXCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSAnam90YWknO1xuaW1wb3J0IHtGbGV4LCBUZXh0fSBmcm9tIFwiQHJhZGl4LXVpL3RoZW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWNjZXNzKCkge1xuXG4gICAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VBdG9tKHN0b3JlLm9yZGVyKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrT3JkZXIoKSB7XG4gICAgICAgIGlmKG9yZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Pk9yZGVyIFBsYWNlZCBTdWNjZXNzZnVsbHk8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gPFRleHQ+Tm8gT3JkZXJzIEF2YWlsYWJsZTwvVGV4dD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxleCBjbGFzc05hbWU9eydvcmRlci1jb250YWluZXInfSBkaXJlY3Rpb249eydjb2x1bW4nfT5cbiAgICAgICAgICAgIHsgY2hlY2tPcmRlcigpIH1cbiAgICAgICAgPC9GbGV4PlxuICAgIClcbn0iXSwibmFtZXMiOlsic3RvcmUiLCJ1c2VBdG9tIiwiRmxleCIsIlRleHQiLCJTdWNjZXNzIiwib3JkZXIiLCJzZXRPcmRlciIsImNoZWNrT3JkZXIiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/success/page.js\n"));

/***/ })

});