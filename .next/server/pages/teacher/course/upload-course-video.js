"use strict";
(() => {
var exports = {};
exports.id = 4927;
exports.ids = [4927];
exports.modules = {

/***/ 3501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5998);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6099);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4264);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3800);
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7251);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5652);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const INIT_VIDEO = {
  video_url: '',
  order: 0,
  name: '',
  description: '',
  courseId: ''
};

const UploadCourseVideo = ({
  courses
}) => {
  // console.log(courses)
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();
  const [video, setVideo] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(INIT_VIDEO);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    const {
      order,
      video_url,
      name
    } = video;
    const isVideo = Object.values({
      video_url,
      name,
      order
    }).every(el => Boolean(el));
    isVideo ? setDisabled(false) : setDisabled(true);
  }, [video]);

  const handleVideoUpload = async () => {
    // console.log(post.file_url)
    const data = new FormData();
    data.append('file', video.video_url);
    data.append('upload_preset', 'vikingsvideo');
    data.append('cloud_name', 'dev-empty');
    const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://api.cloudinary.com/v1_1/dwho2bgom", data);
    const mediaUrl = response.data.url;
    return mediaUrl;
  };

  const handleChange = e => {
    // console.log(d.value)
    const {
      name,
      value,
      files
    } = e.target;

    if (name === 'video_url') {
      const videoSize = files[0].size / 1024 / 1024;

      if (videoSize > 20) {
        addToast('The video size greater than 20 MB. Make sure less than 20 MB.', {
          appearance: 'error'
        });
        e.target.value = null;
        return;
      }

      setVideo(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        video_url: files[0]
      }));
    } else {
      setVideo(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [name]: value
      }));
    } // console.log(video);

  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      let videoUrl = '';

      if (video.video_url) {
        const videoUpload = await handleVideoUpload();
        videoUrl = videoUpload.replace(/^http:\/\//i, 'https://');
      } // console.log(videoUrl)


      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z}/api/v1/courses/course/video-upload`;
      const {
        order,
        name,
        description,
        courseId
      } = video;
      const payload = {
        order,
        name,
        description,
        courseId,
        videoUrl
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, payload, {
        headers: {
          Authorization: token
        }
      });
      console.log(response.data);
      setLoading(false);
      react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().success(response.data);
      setVideo(INIT_VIDEO);
    } catch (err) {
      (0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(err, setError);
      react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().error(error);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      pageTitle: "Upload Course Video",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Upload Course Video"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ptb-100",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [courses.length == 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Alert, {
          color: "danger",
          className: "text-center",
          children: ["You have to create course first here ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            href: "/teacher/course/create",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: "Create Course"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-md-4 col-lg-4",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "td-sidebar",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    href: "/teacher/courses",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "My Courses"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    href: "/teacher/course/create",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "Create A Course"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    href: "/teacher/courses/course-edit",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "Edit My Course"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    href: "/teacher/course/upload-course-video",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "Upload Course Video"
                    })
                  })
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-md-8 col-lg-8",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "border-box",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                  className: "loading-spinner",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-table",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "d-table-cell",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
                        color: "danger"
                      }), " Vide uploading..."]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Select Course"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    onChange: handleChange,
                    name: "courseId",
                    className: "form-control",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                      children: "Select Course"
                    }), courses.map(course => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                      value: course.id,
                      children: course.title
                    }, course.id))]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Video Order (1 or 2...)"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "number",
                    placeholder: "Order Number",
                    className: "form-control",
                    name: "order",
                    value: video.order,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Name"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "Enter course title",
                    className: "form-control",
                    name: "name",
                    value: video.name,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Deescription"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "Enter course title",
                    className: "form-control",
                    name: "description",
                    value: video.description,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Video"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "file",
                    name: "video_url",
                    accept: "video/*",
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                  className: "default-btn",
                  disabled: disabled || loading,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "flaticon-right-chevron"
                  }), "Upload"]
                })]
              })
            })
          })]
        })]
      })
    })]
  });
};

UploadCourseVideo.getInitialProps = async ctx => {
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);

  if (!token) {
    return {
      courses: []
    };
  }

  const payload = {
    headers: {
      Authorization: token
    }
  };
  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z}/api/v1/courses/my-courses`;
  const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(url, payload); // console.log(response.data)

  return response.data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadCourseVideo);

/***/ }),

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? 'https://edemy-react.envytheme.com' : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ }),

/***/ 3800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const catchErrors = (error, displayError) => {
  let errorMsg;

  if (error.response) {
    errorMsg = error.response.data; // console.error("Error response", errorMsg.description);
    // for image upload

    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    // Request made but no response recieved
    errorMsg = error.request; // console.error("Error request", errorMsg);
  } else {// console.error("Error message", errorMsg);
    }

  displayError(errorMsg);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catchErrors);

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

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5998:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6533:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6099:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198,5652], () => (__webpack_exec__(3501)));
module.exports = __webpack_exports__;

})();