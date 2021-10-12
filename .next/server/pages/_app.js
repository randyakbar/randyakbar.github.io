"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Saham Syariah Bisa"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charset: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Randy Kurnia Akbar"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "author",
        content: "Randy"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        rel: "stylesheet",
        integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        crossorigin: "anonymous"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://use.fontawesome.com/releases/v5.15.3/js/all.js",
        crossorigin: "anonymous"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700",
        rel: "stylesheet",
        type: "text/css"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic",
        rel: "stylesheet",
        type: "text/css"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
        crossorigin: "anonymous"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(267));
module.exports = __webpack_exports__;

})();