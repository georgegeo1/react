"use strict";
(() => {
var exports = {};
exports.id = 1657;
exports.ids = [1657];
exports.modules = {

/***/ 8198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6552);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1231);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4257);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5161);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5414);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_6__);







 // import { confirmEmailAddress } from '../../../../email-templates/confirm-email'
// Initialize the cors middleware

const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  await cors(req, res);
  const confirmToken = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)(); // Recieved params from request

  let {
    name,
    email,
    password,
    confirmPassword
  } = req.body;

  try {
    if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5___default()(name, {
      min: 3
    })) {
      return res.status(422).send("The name should be a minimum of Three characters long");
    } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_4___default()(email)) {
      return res.status(422).send("Email should be a valid email address");
    } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_5___default()(password, {
      min: 6
    })) {
      return res.status(422).send("Password should be minimum of Six characters long");
    } else if (password != confirmPassword) {
      return res.status(422).send("Password doesn't match");
    } // Check if user with that email if already exists


    const user = await _models_index__WEBPACK_IMPORTED_MODULE_6__.users.findOne({
      where: {
        email: email
      }
    });

    if (user) {
      return res.status(422).send(`User already exist with email ${email}`);
    } // Encrypt password with bcrypt


    const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);
    const newUser = await _models_index__WEBPACK_IMPORTED_MODULE_6__.users.create({
      name,
      email,
      password: passwordHash,
      emailResetToken: confirmToken
    });
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({
      userId: newUser.id
    }, "bjdggfuqgkjsnjbcjhadybd", {
      expiresIn: '7d'
    }); // confirmEmailAddress(newUser)

    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in account signup. Please try again.");
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

/***/ 1231:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 73:
/***/ ((module) => {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ 4257:
/***/ ((module) => {

module.exports = require("validator/lib/isLength");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4206], () => (__webpack_exec__(8198)));
module.exports = __webpack_exports__;

})();