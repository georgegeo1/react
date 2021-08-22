"use strict";
(() => {
var exports = {};
exports.id = 7057;
exports.ids = [7057];
exports.modules = {

/***/ 9559:
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
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6533);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4264);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3800);
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7251);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5652);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const INIT_COURSE = {
  title: '',
  overview: '',
  price: 0.00,
  profilePhoto: '',
  published: true,
  coverPhoto: '',
  course_preview_img: '',
  course_preview_video: '',
  duration: '',
  lessons: '',
  category: ''
};

const Create = () => {
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const [course, setCourse] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(INIT_COURSE);
  const [profilePreview, setProfilePreview] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [coverPhotoPreview, setCoverPhotoPreview] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [coursePreviewImg, setCoursePreviewImg] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [imageUploading, setImageUploading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    const isCourse = Object.values(course).every(el => Boolean(el));
    isCourse ? setDisabled(false) : setDisabled(true);
  }, [course]);

  const handleChange = e => {
    // console.log(d.value)
    const {
      name,
      value,
      files
    } = e.target;

    if (name === 'profilePhoto') {
      const profilePhotoSize = files[0].size / 1024 / 1024;

      if (profilePhotoSize > 2) {
        addToast('The profile photo size greater than 2 MB. Make sure less than 2 MB.', {
          appearance: 'error'
        });
        e.target.value = null;
        return;
      }

      setCourse(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        profilePhoto: files[0]
      }));
      setProfilePreview(window.URL.createObjectURL(files[0]));
    } else if (name === 'coverPhoto') {
      const coverPhotoSize = files[0].size / 1024 / 1024;

      if (coverPhotoSize > 2) {
        addToast('The cover photo size greater than 2 MB. Make sure less than 2 MB.', {
          appearance: 'error'
        });
        e.target.value = null;
        return;
      }

      setCourse(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        coverPhoto: files[0]
      }));
      setCoverPhotoPreview(window.URL.createObjectURL(files[0]));
    } else if (name === 'course_preview_img') {
      const course_preview_img = files[0].size / 1024 / 1024;

      if (course_preview_img > 2) {
        addToast('The course preview omage size greater than 2 MB. Make sure less than 2 MB.', {
          appearance: 'error'
        });
        e.target.value = null;
        return;
      }

      setCourse(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        course_preview_img: files[0]
      }));
      setCoursePreviewImg(window.URL.createObjectURL(files[0]));
    } else {
      setCourse(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        [name]: value
      }));
    } // console.log(course);

  };

  const handleProfilePhotoUpload = async () => {
    setImageUploading(true); // console.log(post.file_url)

    const data = new FormData();
    data.append('file', course.profilePhoto);
    data.append('upload_preset', 'vikings');
    data.append('cloud_name', 'dev-empty');
    let response;

    if (course.profilePhoto) {
      response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://api.cloudinary.com/v1_1/dwho2bgom", data);
    }

    const profilePhotoUrl = response.data.url;
    return profilePhotoUrl;
  };

  const handlecoverPhotoUpload = async () => {
    setImageUploading(true); // console.log(post.file_url)

    const data = new FormData();
    data.append('file', course.coverPhoto);
    data.append('upload_preset', 'vikings');
    data.append('cloud_name', 'dev-empty');
    let response;

    if (course.coverPhoto) {
      response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://api.cloudinary.com/v1_1/dwho2bgom", data);
    }

    const cover_photo_url = response.data.url;
    return cover_photo_url;
  };

  const handlePreviewPhotoUpload = async () => {
    setImageUploading(true); // console.log(post.file_url)

    const data = new FormData();
    data.append('file', course.course_preview_img);
    data.append('upload_preset', 'vikings');
    data.append('cloud_name', 'dev-empty');
    let response;

    if (course.course_preview_img) {
      response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("https://api.cloudinary.com/v1_1/dwho2bgom", data);
    }

    const preview_photo_response_url = response.data.url;
    setImageUploading(false);
    setLoading(true);
    return preview_photo_response_url;
  };

  const handleCourseSubmit = async e => {
    e.preventDefault();

    try {
      let profile = '';
      let cover = '';
      let preview = '';

      if (course.profilePhoto && course.coverPhoto && course.course_preview_img) {
        profile = await handleProfilePhotoUpload();
        cover = await handlecoverPhotoUpload();
        preview = await handlePreviewPhotoUpload();
        profile = profile.replace(/^http:\/\//i, 'https://');
        cover = cover.replace(/^http:\/\//i, 'https://');
        preview = preview.replace(/^http:\/\//i, 'https://');
      }

      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z}/api/v1/courses/course/new`;
      const {
        title,
        overview,
        price,
        published,
        duration,
        lessons,
        category,
        course_preview_video
      } = course;
      const payload = {
        title,
        overview,
        price,
        published,
        duration,
        lessons,
        category,
        profile,
        cover,
        preview,
        course_preview_video
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, payload, {
        headers: {
          Authorization: token
        }
      }); // console.log(response.data)

      setLoading(false);
      setCourse(INIT_COURSE);
      setProfilePreview('');
      setCoverPhotoPreview('');
      setCoursePreviewImg('');
      react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().success(response.data);
      router.replace('/teacher/course/upload-course-video');
    } catch (err) {
      (0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(err, setError);
      react_hot_toast__WEBPACK_IMPORTED_MODULE_5___default().error(error);
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
      pageTitle: "Teacher Course Create",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Teacher Course Create"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ptb-100",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-md-4 col-lg-4",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "td-sidebar",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                    href: "/teacher/courses",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "My Courses"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                    href: "/teacher/course/create",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "Create A Course"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                    href: "/teacher/courses/course-edit",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "Edit My Course"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
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
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "border-box",
              children: [imageUploading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "loading-spinner",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "d-table",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-table-cell",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
                      color: "primary"
                    }), " Image Uploading...."]
                  })
                })
              }), loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "loading-spinner",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "d-table",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "d-table-cell",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
                      color: "success"
                    }), " Wait...."]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleCourseSubmit,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Course Title"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "Enter course title",
                    className: "form-control",
                    name: "title",
                    value: course.title,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Course Overview"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    type: "text",
                    placeholder: "Enter course overview",
                    className: "form-control",
                    name: "overview",
                    rows: "10",
                    value: course.overview,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Course Price"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "number",
                    placeholder: "Enter course price",
                    className: "form-control",
                    name: "price",
                    value: course.price,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Course Lessons"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "30 Lessons",
                    className: "form-control",
                    name: "lessons",
                    value: course.lessons,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Course Duration (Whole numbers of hours & minutes)"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "10 hours 30 minutes",
                    className: "form-control",
                    name: "duration",
                    value: course.duration,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Categories"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "React, Ruby, Rails",
                    className: "form-control",
                    name: "category",
                    value: course.category,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    children: ["Course Profile (", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                      children: "Image less than 2 MB & size 750x500"
                    }), ")"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "file",
                    name: "profilePhoto",
                    accept: "image/*",
                    onChange: handleChange
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: profilePreview,
                    className: "mxw-200 mt-20"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    children: ["Course Cover Photo (", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                      children: "Image less than 2 MB & size 1920x500"
                    }), ")"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "file",
                    name: "coverPhoto",
                    accept: "image/*",
                    onChange: handleChange
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: coverPhotoPreview,
                    className: "mxw-200 mt-20"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Course Preview Video URL"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
                    className: "form-control",
                    name: "course_preview_video",
                    value: course.course_preview_video,
                    onChange: handleChange
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    children: ["Course Preview Image (", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                      children: "Image less than 2 MB & size 750x500"
                    }), ")"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "file",
                    name: "course_preview_img",
                    accept: "image/*",
                    onChange: handleChange
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: coursePreviewImg,
                    className: "mxw-200 mt-20"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                  className: "default-btn",
                  disabled: imageUploading || disabled || loading,
                  type: "submit",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "flaticon-right-chevron"
                  }), "Create", imageUploading || loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
                    color: "success"
                  }) : '', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})]
                })]
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198,5652], () => (__webpack_exec__(9559)));
module.exports = __webpack_exports__;

})();