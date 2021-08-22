"use strict";
(() => {
var exports = {};
exports.id = 6777;
exports.ids = [6777];
exports.modules = {

/***/ 4060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8121);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5161);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5414);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models__WEBPACK_IMPORTED_MODULE_2__);



 // Initialize the cors middleware

const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  await cors(req, res);

  if (!("authorization" in req.headers)) {
    return res.status(401).json({
      message: "No autorization token"
    });
  }

  try {
    const pendingRequests = await _models__WEBPACK_IMPORTED_MODULE_2__.users.findAll({
      where: {
        [sequelize__WEBPACK_IMPORTED_MODULE_1__.Op.and]: [{
          as_teacher_apply: true
        }, {
          as_teacher_confirmed: null
        }]
      }
    }); // console.log(pendingRequests)

    res.send({
      pendingRequests: pendingRequests
    });
  } catch (error) {
    console.log(error);
    res.send("Error! Try again");
  }
});

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 8121:
/***/ ((module) => {

module.exports = require("sequelize");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4206], () => (__webpack_exec__(4060)));
module.exports = __webpack_exports__;

})();