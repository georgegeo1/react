"use strict";
(() => {
var exports = {};
exports.id = 6623;
exports.ids = [6623];
exports.modules = {

/***/ 9416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about_2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(7251);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/About/AboutUsContentTwo.js





const ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\About\\AboutUsContentTwo.js -> " + "react-modal-video"]
  }
});

const AboutUsContentTwo = () => {
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []); // Popup Video

  const [isOpen, setIsOpen] = external_react_default().useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "about-area-two ptb-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-5 col-md-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "about-content-box",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "sub-title",
                children: "Distance Learning"
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: "Build Your Project Management Skills Online, Anytime"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Want to learn and earn PDUs or CEUs on your schedule \u2014 anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses."
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  children: "Grow your knowledge and your opportunities with thought leadership, training and tools."
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-7 col-md-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "about-video-box",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "image",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/about-img5.jpg",
                  alt: "image"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#play-video",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  onClick: e => {
                    e.preventDefault();
                    openModal();
                  },
                  className: "video-btn popup-youtube",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-play"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "shape10",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/shape9.png",
                  alt: "image"
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shape3",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/shape3.png",
          alt: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shape4",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/shape4.png",
          alt: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shape2",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/shape2.png",
          alt: "image"
        })
      }), display ? /*#__PURE__*/jsx_runtime_.jsx(ModalVideo, {
        channel: "youtube",
        isOpen: !isOpen,
        videoId: "bk7McNUjWgw",
        onClose: () => setIsOpen(!isOpen)
      }) : ""]
    })
  });
};

/* harmony default export */ const About_AboutUsContentTwo = (AboutUsContentTwo);
// EXTERNAL MODULE: ./components/Common/FunFacts.js
var FunFacts = __webpack_require__(9841);
// EXTERNAL MODULE: ./components/Common/Testimonials.js
var Testimonials = __webpack_require__(4941);
// EXTERNAL MODULE: ./components/Common/CourseAdvisor.js
var CourseAdvisor = __webpack_require__(5959);
// EXTERNAL MODULE: ./components/Common/Partner.js
var Partner = __webpack_require__(1701);
;// CONCATENATED MODULE: ./pages/about-2.js


 // import Navbar from '../components/_App/Navbar';






 // import Footer from '../components/_App/Footer';

const About2 = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageBanner/* default */.Z, {
      pageTitle: "About Us",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "About Us"
    }), /*#__PURE__*/jsx_runtime_.jsx(About_AboutUsContentTwo, {}), /*#__PURE__*/jsx_runtime_.jsx(FunFacts/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Testimonials/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(CourseAdvisor/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Partner/* default */.Z, {})]
  });
};

/* harmony default export */ const about_2 = (About2);

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

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6616:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 2963:
/***/ ((module) => {

module.exports = require("react-owl-carousel3");

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198,1701,5959,1700], () => (__webpack_exec__(9416)));
module.exports = __webpack_exports__;

})();