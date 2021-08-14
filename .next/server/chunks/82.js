exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 82:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(481);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(833);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(667);
/* harmony import */ var _react_three_a11y__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_a11y__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(386);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);








const LControl = () => {
  const dom = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(state => state.dom);
  const control = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (control) {
      dom.current.style['touch-action'] = 'none';
    }
  }, [dom, control]); // @ts-ignore

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.OrbitControls, {
    ref: control,
    domElement: dom.current
  });
};

const LCanvas = ({
  children
}) => {
  const dom = (0,_helpers_store__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(state => state.dom);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
    mode: "concurrent",
    style: {
      position: 'absolute',
      top: 0
    },
    onCreated: state => state.events.connect(dom.current),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LControl, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yUserPreferences, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Preload, {
        all: true
      }), children]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LCanvas);

/***/ })

};
;