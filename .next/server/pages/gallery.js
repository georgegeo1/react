"use strict";
(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 9960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7251);
/* harmony import */ var _components_Common_SubscribeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4007);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6302);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);


 // import Navbar from '../components/_App/Navbar';


 // import Footer from '../components/_App/Footer';



const images = ['images/courses/courses1.jpg', 'images/courses/courses2.jpg', 'images/courses/courses3.jpg', 'images/courses/courses4.jpg', 'images/courses/courses5.jpg', 'images/courses/courses6.jpg', 'images/courses/courses7.jpg', 'images/courses/courses8.jpg', 'images/courses/courses9.jpg'];

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
  const [isOpenImage, setIsOpenImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      pageTitle: "Gallery",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Gallery"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "gallery-area pt-100 pb-70",
      children: [isOpenImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_4___default()), {
        mainSrc: images[photoIndex],
        nextSrc: images[(photoIndex + 1) % images.length],
        prevSrc: images[(photoIndex + images.length - 1) % images.length],
        onCloseRequest: () => setIsOpenImage(false),
        onMovePrevRequest: () => setPhotoIndex((photoIndex + images.length - 1) % images.length),
        onMoveNextRequest: () => setPhotoIndex((photoIndex + 1) % images.length)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(0);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses1.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(1);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses2.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(2);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses3.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(3);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses4.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(4);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses5.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(5);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses6.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(6);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses7.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(7);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses8.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(8);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/courses/courses9.jpg",
                    alt: "image"
                  })
                })
              })
            })
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_SubscribeForm__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6302:
/***/ ((module) => {

module.exports = require("react-image-lightbox");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198,4007], () => (__webpack_exec__(9960)));
module.exports = __webpack_exports__;

})();