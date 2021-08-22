"use strict";
(() => {
var exports = {};
exports.id = 1375;
exports.ids = [1375];
exports.modules = {

/***/ 4644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6552);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5161);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5414);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_4__);





 // Initialize the cors middleware

const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  await cors(req, res);
  const {
    email,
    password
  } = req.body;

  try {
    if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_3___default()(email)) {
      return res.status(422).send("Email should be a valid email address");
    }

    const user = await _models_index__WEBPACK_IMPORTED_MODULE_4__.users.findOne({
      where: {
        email: email
      }
    });

    if (!user) {
      return res.status(404).send("User account does not exist");
    }

    if (!user.active) {
      return res.status(404).send("This account is temporarily disabled, please contact the support email");
    }

    const passwordsMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);

    if (passwordsMatch) {
      const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
        userId: user.id
      }, "bjdggfuqgkjsnjbcjhadybd", {
        expiresIn: '7d'
      });
      res.status(200).send(token);
    } else {
      res.status(401).send("Password is not correct");
    }
  } catch (error) {
    // console.error(error)
    res.status(500).send("Error logging in user");
  }
});

/***/ }),

/***/ 6552:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 8121:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ 73:
/***/ ((module) => {

module.exports = require("validator/lib/isEmail");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4206], () => (__webpack_exec__(4644)));
module.exports = __webpack_exports__;

})();