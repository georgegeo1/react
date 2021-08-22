"use strict";
(() => {
var exports = {};
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 2959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ authentication)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(7251);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__(3800);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4264);
// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(2898);
;// CONCATENATED MODULE: ./components/Authentication/LoginForm.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const INITIAL_USER = {
  email: '',
  password: ''
};

const LoginForm = () => {
  const [user, setUser] = external_react_default().useState(INITIAL_USER);
  const [disabled, setDisabled] = external_react_default().useState(true);
  const [loading, setLoading] = external_react_default().useState(false);
  const [error, setError] = external_react_default().useState('');

  const onDismiss = () => setError(false);

  external_react_default().useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUser(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      const url = `${baseUrl/* default */.Z}/api/v1/auth/signin`;

      const payload = _objectSpread({}, user);

      const response = await external_axios_default().post(url, payload);
      (0,auth/* handleLogin */.jc)(response.data);
    } catch (error) {
      (0,catchErrors/* default */.Z)(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "login-form",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Login"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Alert, {
      color: "danger",
      isOpen: error ? true : false,
      toggle: onDismiss,
      children: error
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Email"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "form-control",
          placeholder: "Email",
          name: "email",
          type: "email",
          value: user.email,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Password"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "form-control",
          placeholder: "Password",
          name: "password",
          type: "password",
          value: user.password,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 col-md-6 col-sm-6 remember-me-wrap",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "checkbox",
              id: "test2"
            }), /*#__PURE__*/jsx_runtime_.jsx("label", {
              htmlFor: "test2",
              children: "Remember me"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/reset-password",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "lost-your-password",
              children: "Lost your password?"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        type: "submit",
        disabled: disabled,
        children: ["Log In", loading ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Spinner, {
          color: "success"
        }) : '']
      })]
    })]
  });
};

/* harmony default export */ const Authentication_LoginForm = (LoginForm);
;// CONCATENATED MODULE: ./components/Authentication/RegisterForm.js



function RegisterForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function RegisterForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { RegisterForm_ownKeys(Object(source), true).forEach(function (key) { RegisterForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { RegisterForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RegisterForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const RegisterForm_INITIAL_USER = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const RegisterForm = () => {
  const [user, setUser] = external_react_default().useState(RegisterForm_INITIAL_USER);
  const [disabled, setDisabled] = external_react_default().useState(true);
  const [loading, setLoading] = external_react_default().useState(false);
  const [error, setError] = external_react_default().useState('');

  const onDismiss = () => setError(false);

  external_react_default().useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUser(prevState => RegisterForm_objectSpread(RegisterForm_objectSpread({}, prevState), {}, {
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault(); // console.log(user)

    try {
      setLoading(true);
      setError('');
      const url = `${baseUrl/* default */.Z}/api/v1/auth/signup`;

      const payload = RegisterForm_objectSpread({}, user);

      const response = await external_axios_default().post(url, payload);
      (0,auth/* handleLogin */.jc)(response.data); // console.log(response.data)
    } catch (error) {
      (0,catchErrors/* default */.Z)(error, setError);
    } finally {
      setLoading(false);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "register-form",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Register"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Alert, {
      color: "danger",
      isOpen: error ? true : false,
      toggle: onDismiss,
      children: error
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Name"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          className: "form-control",
          placeholder: "Full Name",
          name: "name",
          value: user.name,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Email"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "form-control",
          placeholder: "Email",
          name: "email",
          type: "email",
          value: user.email,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Password"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          className: "form-control",
          placeholder: "Password",
          name: "password",
          value: user.password,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "form-group",
        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
          children: "Confirm Password"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          className: "form-control",
          placeholder: "Confirm Password",
          name: "confirmPassword",
          value: user.confirmPassword,
          onChange: handleChange
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "description",
        children: "The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! \" ? $ % ^ & )"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        type: "submit",
        disabled: disabled,
        children: ["Register", loading ? /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Spinner, {
          color: "success"
        }) : '']
      })]
    })]
  });
};

/* harmony default export */ const Authentication_RegisterForm = (RegisterForm);
;// CONCATENATED MODULE: ./pages/authentication.js







const Authentication = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageBanner/* default */.Z, {
      pageTitle: "Authentication",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Authentication"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "profile-authentication-area ptb-100",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx(Authentication_LoginForm, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx(Authentication_RegisterForm, {})
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const authentication = (Authentication);

/***/ }),

/***/ 2898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jc": () => (/* binding */ handleLogin),
/* harmony export */   "a0": () => (/* binding */ redirectUser),
/* harmony export */   "hY": () => (/* binding */ handleLogout)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const handleLogin = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('token', token);
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push(location);
  }
};
const handleLogout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove('token');
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
};

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

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

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

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198], () => (__webpack_exec__(2959)));
module.exports = __webpack_exports__;

})();