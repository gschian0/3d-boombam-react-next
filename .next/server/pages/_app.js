(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

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

/***/ }),

/***/ 394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: ./src/helpers/store.js
var store = __webpack_require__(386);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/config.jsx




const titleDefault = 'React Three Next Starter';
const url = 'https://react-three-next.vercel.app/';
const description = 'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS';
const author = 'Author';

const Header = ({
  title = titleDefault
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "language",
        content: "english"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "content-type",
        content: "text/html"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "author",
        content: author
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "designer",
        content: author
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "publisher",
        content: author
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: description
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "robots",
        content: "index,follow"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "distribution",
        content: "web"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:title",
        content: title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:type",
        content: "site"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:url",
        content: url
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:image",
        content: '/icons/share.png'
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:site_name",
        content: title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:description",
        content: description
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/icons/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "16x16",
        href: "/icons/favicon-16x16.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "32x32",
        href: "/icons/favicon-32x32.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-touch-icon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "mask-icon",
        color: "#000000",
        href: "/icons/safari-pinned-tab.svg"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-startup-image",
        href: "/startup.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, minimum-scale=1, initial-scale=1.0"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#000"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/icons/favicon.ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "summary"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:site",
        content: "@onirenaud"
      })]
    })
  });
};

/* harmony default export */ var config = (Header);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./src/components/layout/dom.jsx




const Dom = ({
  children
}) => {
  const ref = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    store/* default.setState */.Z.setState({
      dom: ref
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom",
    ref: ref,
    children: children
  });
};

/* harmony default export */ var layout_dom = (Dom);
;// CONCATENATED MODULE: ./src/pages/_app.jsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








let LCanvas = null;

if (true) {
  LCanvas = dynamic_default()(() => __webpack_require__.e(/* import() */ 82).then(__webpack_require__.bind(__webpack_require__, 82)), {
    ssr: false,
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(82)],
      modules: ["_app.jsx -> " + '@/components/layout/canvas']
    }
  });
} else {}

function Layout({
  dom
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: dom && /*#__PURE__*/jsx_runtime_.jsx(layout_dom, {
      children: dom
    })
  });
}

const ForwardPropsToR3fComponent = ({
  comp,
  pageProps
}) => {
  let r3fArr = [];
  let compArr = [];

  try {
    external_react_.Children.forEach(comp(pageProps).props.children, child => {
      if (child !== null && child !== void 0 && child.props && child.props.r3f) {
        r3fArr.push(child);
      } else {
        compArr.push(child);
      }
    });
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [compArr && /*#__PURE__*/jsx_runtime_.jsx(Layout, {
        dom: compArr
      }), r3fArr && /*#__PURE__*/jsx_runtime_.jsx(LCanvas, {
        children: r3fArr
      })]
    });
  } catch (error) {
    // fallback security for SSG
    // @ts-ignore
    return /*#__PURE__*/jsx_runtime_.jsx("comp", _objectSpread({}, pageProps));
  }
};

function App({
  Component,
  pageProps = {
    title: 'index'
  }
}) {
  const router = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    store/* default.setState */.Z.setState({
      router
    });
  }, [router]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(config, {
      title: pageProps.title
    }), /*#__PURE__*/jsx_runtime_.jsx(ForwardPropsToR3fComponent, {
      comp: Component,
      pageProps: pageProps
    })]
  });
}

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 667:
/***/ (function(module) {

"use strict";
module.exports = require("@react-three/a11y");;

/***/ }),

/***/ 833:
/***/ (function(module) {

"use strict";
module.exports = require("@react-three/drei");;

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
var __webpack_exports__ = (__webpack_exec__(394));
module.exports = __webpack_exports__;

})();