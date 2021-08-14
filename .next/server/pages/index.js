(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 83:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dom_Instructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(705);



 // Step 5 - delete Instructions components

 // Step 2 - update Box components

const Box = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 925).then(__webpack_require__.bind(__webpack_require__, 925)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(925)],
    modules: ["index.jsx -> " + '@/components/canvas/Box']
  }
});

const Page = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Box, {
      r3f: true,
      route: "/box"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dom_Instructions__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {})]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Page);
async function getStaticProps() {
  return {
    props: {
      title: 'Index'
    }
  };
}

/***/ }),

/***/ 481:
/***/ (function(module) {

"use strict";
module.exports = require("@react-three/fiber");;

/***/ }),

/***/ 639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 666:
/***/ (function(module) {

"use strict";
module.exports = require("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [705], function() { return __webpack_exec__(83); });
module.exports = __webpack_exports__;

})();