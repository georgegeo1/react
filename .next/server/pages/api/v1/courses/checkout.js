"use strict";
(() => {
var exports = {};
exports.id = 7623;
exports.ids = [7623];
exports.modules = {

/***/ 7483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ checkout)
});

;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9722);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(479);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);
// EXTERNAL MODULE: ./lib/init-middleware.js
var init_middleware = __webpack_require__(5161);
// EXTERNAL MODULE: ./models/index.js
var models = __webpack_require__(5414);
;// CONCATENATED MODULE: ./pages/api/v1/courses/checkout.js






const stripe = external_stripe_default()("sk_test_51JNGIpDjTbVyjR6CTHGZqQv0VYRJt9SjdNlz5JulX9k9liqQhkxg67Novx4bjerkn4EhXPcWPmMatE7hz1RdSwHp00VckGngnQ"); // Initialize the cors middleware

const cors = (0,init_middleware/* default */.Z)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
external_cors_default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ const checkout = (async (req, res) => {
  await cors(req, res);

  if (!("authorization" in req.headers)) {
    return res.status(401).json({
      message: "No autorization token"
    });
  }

  const {
    paymentData
  } = req.body; // console.log(req.body)

  try {
    const {
      userId
    } = external_jsonwebtoken_default().verify(req.headers.authorization, "bjdggfuqgkjsnjbcjhadybd");
    const prevCustomer = await stripe.customers.list({
      email: paymentData.email,
      limit: 1
    });
    const isExistingCustomer = prevCustomer.data.length > 0;
    let newCustomer;

    if (!isExistingCustomer) {
      newCustomer = await stripe.customers.create({
        email: paymentData.email,
        source: paymentData.id
      });
    }

    const customer = isExistingCustomer && prevCustomer.data[0].id || newCustomer.id;
    await stripe.charges.create({
      currency: "usd",
      amount: paymentData.stripeTotal,
      receipt_email: paymentData.email,
      customer,
      description: `Checkout | ${paymentData.email} | ${paymentData.id} | CourseID ${paymentData.courseId}`
    }, {
      idempotencyKey: (0,external_uuid_.v4)()
    });
    await models.enroled_courses.create({
      payment_email: paymentData.email,
      cost: paymentData.stripeTotal,
      userId: userId,
      courseId: paymentData.courseId
    });
    res.send("Checkout successful!");
  } catch (error) {
    console.error(error);
    res.send("Error proccessing charge");
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

/***/ }),

/***/ 1231:
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4206], () => (__webpack_exec__(7483)));
module.exports = __webpack_exports__;

})();