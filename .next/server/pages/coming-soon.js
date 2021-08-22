(() => {
var exports = {};
exports.id = 9169;
exports.ids = [9169];
exports.modules = {

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);





const ComingSoon = () => {
  const [days, setDays] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [hours, setHours] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [minutes, setMinutes] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  const [seconds, setSeconds] = react__WEBPACK_IMPORTED_MODULE_1___default().useState('');
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2022 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < "10") {
      hours = "0" + hours;
    }

    if (minutes < "10") {
      minutes = "0" + minutes;
    }

    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "coming-soon-area",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "d-table",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "d-table-cell",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "coming-soon-content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: "/",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              className: "logo",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "/images/logo.png",
                alt: "image"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            children: "We Are Launching Soon"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            id: "timer",
            className: "flex-wrap d-flex justify-content-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              id: "days",
              className: "align-items-center flex-column d-flex justify-content-center",
              children: [days, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Days"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              id: "hours",
              className: "align-items-center flex-column d-flex justify-content-center",
              children: [hours, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Hours"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              id: "minutes",
              className: "align-items-center flex-column d-flex justify-content-center",
              children: [minutes, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Minutes"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              id: "seconds",
              className: "align-items-center flex-column d-flex justify-content-center",
              children: [seconds, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Seconds"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "newsletter-form",
            "data-toggle": "validator",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "email",
                className: "input-newsletter",
                placeholder: "Enter your email",
                name: "EMAIL",
                required: true
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "label-title",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  className: "bx bx-envelope"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
              type: "submit",
              className: "default-btn",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "flaticon-user"
              }), " Subscribe ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              children: "If you would like to be notified when your app is live, Please subscribe to our mailing list."
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComingSoon);

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664], () => (__webpack_exec__(3905)));
module.exports = __webpack_exports__;

})();