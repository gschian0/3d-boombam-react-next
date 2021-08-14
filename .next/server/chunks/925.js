exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 925:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(481);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);







const BoxComponent = ({
  route,
  r3f
}) => {
  const router = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(s => s.router); // This reference will give us direct access to the THREE.Mesh object

  const mesh = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // Set up state for the hovered and active state

  const {
    0: hovered,
    1: setHover
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // Subscribe this component to the render-loop, rotate the mesh every frame

  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)((state, delta) => mesh.current ? mesh.current.rotation.y = mesh.current.rotation.x += 0.01 : null); // Return the view, these are regular Threejs elements expressed in JSX

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
      ref: mesh,
      onClick: () => router.push(route),
      onPointerOver: () => setHover(true),
      onPointerOut: () => setHover(false),
      scale: hovered ? 1.1 : 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("boxBufferGeometry", {
        args: [1, 1, 1]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshPhysicalMaterial", {
        color: route === '/' ? 'orange' : 'hotpink'
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("directionalLight", {
      position: [5, 5, 5]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ambientLight", {})]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BoxComponent);

/***/ }),

/***/ 386:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(666);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);

const useStore = zustand__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  return {
    router: null,
    dom: null
  };
});
/* harmony default export */ __webpack_exports__["Z"] = (useStore);

/***/ })

};
;