"use strict";
(() => {
var exports = {};
exports.id = 5013;
exports.ids = [5013];
exports.modules = {

/***/ 5238:
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
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9614);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4264);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3800);
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7251);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5652);













const pendingRequests = ({
  pendingRequests
}) => {
  // console.log(pendingRequests)
  const {
    addToast
  } = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.useToasts)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const approveReq = async id => {
    try {
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z}/api/v1/apply/approve-requests`;
      const payload = {
        userId: id
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, payload); // console.log(response.data)

      addToast(response.data, {
        appearance: 'success'
      });
      router.push('/admin/pending-requests');
    } catch (error) {
      (0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(error, setError);
    }
  };

  const declineReq = async id => {
    try {
      const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z}/api/v1/apply/decline-requests`;
      const payload = {
        userId: id
      };
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().post(url, payload); // console.log(response.data)

      addToast(response.data, {
        appearance: 'success'
      });
      router.push('/admin/pending-requests');
    } catch (error) {
      (0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(error, setError);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
      pageTitle: "Admin Dashboard",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Admin Dashboard"
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
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    href: "/admin/pending-requests",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "Pending Requests"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    href: "#",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "Dumy Text"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    href: "#",
                    activeClassName: "active",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: "Dumy Text"
                    })
                  })
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-md-8 col-lg-8",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "table-responsive",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "table vertical-align-top",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                      scope: "col",
                      children: "#"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                      scope: "col",
                      children: "Intructor"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                      scope: "col",
                      className: "text-right",
                      children: "Action"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                  children: pendingRequests.length ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: pendingRequests.map(request => {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                          scope: "row",
                          children: "1"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                          children: request.name
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                          className: "text-right",
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: e => {
                              window.confirm("Are you sure?") && approveReq(request.id);
                            },
                            className: "btn btn-success mr-05",
                            children: "Approve"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: e => {
                              window.confirm("Are you sure?") && declineReq(request.id);
                            },
                            className: "btn btn-danger",
                            children: "Decline"
                          })]
                        })]
                      }, request.id);
                    })
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                    className: "text-center",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                      colSpan: "3",
                      children: "No Pending Requests!"
                    })
                  })
                })]
              })
            })
          })]
        })
      })
    })]
  });
};

pendingRequests.getInitialProps = async ctx => {
  // console.log(id)
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);

  if (!token) {
    redirectUser(ctx, '/authentication');
  }

  const url = `${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z}/api/v1/apply/pending-requests`;
  const payload = {
    headers: {
      Authorization: token
    }
  };
  const response = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(url, payload); // console.log(response.data)

  return response.data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pendingRequests);

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

/***/ 9614:
/***/ ((module) => {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198,5652], () => (__webpack_exec__(5238)));
module.exports = __webpack_exports__;

})();