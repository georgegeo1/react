"use strict";
(() => {
var exports = {};
exports.id = 7544;
exports.ids = [7544];
exports.modules = {

/***/ 2247:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5998);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4264);









const SingleCourses = ({
  videos
}) => {
  const [videoId, setVideoId] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(videos.length ? videos[0].video_url : '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      pageTitle: videos.length ? videos[0].course.title : 'No Videos',
      homePageUrl: "/my-courses",
      homePageText: "My Courses",
      activePageText: videos.length ? videos[0].course.title : 'No Videos'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ptb-100",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "course-video-list",
              children: videos.length ? videos.map(video => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: "/my-courses/[videos]/[id]",
                  as: `/my-courses/${video.course.id}/${video.id}`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    onClick: e => {
                      e.preventDefault();
                      setVideoId(video.video_url);
                    },
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                      src: video.course.profilePhoto,
                      alt: video.course.title
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                      children: video.name
                    })]
                  })
                })
              }, video.id)) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: "No Videos"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-9",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "course-video-iframe",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
                controls: true,
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                  src: videoId,
                  type: "video/mp4"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                  src: "/images/courses/courses5.jpg",
                  type: "video/ogg"
                })]
              }, videoId)
            })
          })]
        })
      })
    })]
  });
};

SingleCourses.getInitialProps = async ctx => {
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(ctx);

  if (!token) {
    return {
      videos: []
    };
  }

  const {
    id
  } = ctx.query; // console.log(id)

  const payload = {
    headers: {
      Authorization: token
    },
    params: {
      courseId: id
    }
  };
  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z}/api/v1/courses/enrolled/videos`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(url, payload); // console.log(response.data)

  return response.data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleCourses);

/***/ }),

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? 'https://edemy-react.envytheme.com' : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 5998:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198], () => (__webpack_exec__(2247)));
module.exports = __webpack_exports__;

})();