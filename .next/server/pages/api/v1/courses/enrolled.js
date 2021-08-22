"use strict";
(() => {
var exports = {};
exports.id = 9785;
exports.ids = [9785];
exports.modules = {

/***/ 8652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5161);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5414);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_2__);



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
    const {
      userId
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(req.headers.authorization, "bjdggfuqgkjsnjbcjhadybd");
    const enrolled = await _models_index__WEBPACK_IMPORTED_MODULE_2__.enroled_courses.findAll({
      order: [['createdAt', 'DESC']],
      where: {
        userId: userId
      },
      include: [{
        model: _models_index__WEBPACK_IMPORTED_MODULE_2__.users,
        as: 'user',
        attributes: ['id', 'name', 'profilePhoto']
      }, {
        model: _models_index__WEBPACK_IMPORTED_MODULE_2__.courses,
        as: 'course' // separate: true,
        // include: [{
        //     model: Enroled_courses, as: 'enroled_courses',
        //     attributes: ['id']
        // }]

      }]
    });
    res.send({
      enrolled
    });
  } catch (error) {
    console.log(error);
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4206], () => (__webpack_exec__(8652)));
module.exports = __webpack_exports__;

})();