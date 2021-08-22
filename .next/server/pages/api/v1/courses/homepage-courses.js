"use strict";
(() => {
var exports = {};
exports.id = "pages/api/v1/courses/homepage-courses";
exports.ids = ["pages/api/v1/courses/homepage-courses"];
exports.modules = {

/***/ "./lib/init-middleware.js":
/*!********************************!*\
  !*** ./lib/init-middleware.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initMiddleware)
/* harmony export */ });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
//
function initMiddleware(middleware) {
  return (req, res) => new Promise((resolve, reject) => {
    middleware(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./models/course.js":
/*!**************************!*\
  !*** ./models/course.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //     // define association here
    //     Course.belongsTo(models.User, {
    //         foreignKey: 'userId',
    //         onDelete: 'CASCADE'
    //     });
    // }
  }

  ;
  Course.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    overview: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.FLOAT
    },
    free: {
      type: Sequelize.BOOLEAN
    },
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    profilePhoto: {
      type: Sequelize.STRING
    },
    coverPhoto: {
      type: Sequelize.STRING
    },
    courese_preview_img: {
      type: Sequelize.STRING
    },
    course_preview_video: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    duration: {
      type: Sequelize.STRING
    },
    lessons: {
      type: Sequelize.STRING
    },
    access: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Course'
  });
  return Course;
};

/***/ }),

/***/ "./models/enroled_courses.js":
/*!***********************************!*\
  !*** ./models/enroled_courses.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Enroled_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {// define association here
    }

  }

  ;
  Enroled_courses.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    payment_email: {
      type: Sequelize.STRING
    },
    cost: {
      type: Sequelize.INTEGER
    },
    courseId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Courses',
        key: 'id',
        as: 'courseId'
      }
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Enroled_courses'
  });
  return Enroled_courses;
};

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

 // main model file

var _user = _interopRequireDefault(__webpack_require__(/*! ./user */ "./models/user.js"));

var _course = _interopRequireDefault(__webpack_require__(/*! ./course */ "./models/course.js"));

var _video = _interopRequireDefault(__webpack_require__(/*! ./video */ "./models/video.js"));

var _enroled_courses = _interopRequireDefault(__webpack_require__(/*! ./enroled_courses */ "./models/enroled_courses.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

const basename = path.basename(__filename);
const env = "development" || 0;

const config = __webpack_require__(/*! ./config/config.json */ "./config/config.json")[env];

const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = (0, _user.default)(sequelize, Sequelize);
db.courses = (0, _course.default)(sequelize, Sequelize);
db.videos = (0, _video.default)(sequelize, Sequelize);
db.enroled_courses = (0, _enroled_courses.default)(sequelize, Sequelize); // hasMany relationshipt with user and course

db.users.hasMany(db.courses, {
  as: 'courses',
  foreignKey: 'userId'
});
db.courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
}); // hasMany relationshipt with course and videos

db.courses.hasMany(db.videos, {
  as: 'videos',
  foreignKey: 'courseId'
});
db.videos.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
}); // hasMany relationshipt with user and videos

db.users.hasMany(db.videos, {
  as: 'videos',
  foreignKey: 'userId'
});
db.videos.belongsTo(db.courses, {
  foreignKey: 'userId',
  as: 'user'
}); // hasMany relationshipt with course and enroled

db.courses.hasMany(db.enroled_courses, {
  as: 'enroled_courses',
  foreignKey: 'courseId'
});
db.enroled_courses.belongsTo(db.courses, {
  foreignKey: 'courseId',
  as: 'course'
}); // hasMany relationshipt with user and enroled

db.users.hasMany(db.enroled_courses, {
  as: 'enroled_courses',
  foreignKey: 'userId'
});
db.enroled_courses.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'user'
}); // console.log('######', db)

module.exports = db;

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //     // define association here
    //     User.hasMany(models.Course, {
    //         foreignKey: 'userId'
    //     })
    // }
  }

  ;
  User.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    isEmailPublic: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    password: {
      type: Sequelize.STRING
    },
    designation: {
      type: Sequelize.TEXT
    },
    about: {
      type: Sequelize.TEXT
    },
    location: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    company: {
      type: Sequelize.STRING
    },
    companyUrl: {
      type: Sequelize.STRING
    },
    interests: {
      type: Sequelize.STRING
    },
    passwordResetToken: {
      type: Sequelize.UUID
    },
    passwordUpdatedAt: {
      type: Sequelize.DATE
    },
    emailResetToken: {
      type: Sequelize.UUID
    },
    profilePhoto: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    fb_url: {
      type: Sequelize.STRING
    },
    tw_url: {
      type: Sequelize.STRING
    },
    insta_url: {
      type: Sequelize.STRING
    },
    in_url: {
      type: Sequelize.STRING
    },
    emailConfirmed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    emailConfirmedAt: {
      type: Sequelize.DATE
    },
    as_teacher_apply: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    as_teacher_confirmed: {
      type: Sequelize.BOOLEAN
    },
    as_teacher_confirmed_at: {
      type: Sequelize.DATE
    },
    as_teacher_req_desc: {
      type: Sequelize.TEXT
    },
    role: {
      type: Sequelize.ENUM,
      values: ['student', 'admin', 'teacher'],
      defaultValue: 'student'
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    agreedTerms: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};

/***/ }),

/***/ "./models/video.js":
/*!*************************!*\
  !*** ./models/video.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



const {
  Model
} = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = (sequelize, Sequelize) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }

  ;
  Video.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    video_url: {
      type: Sequelize.TEXT
    },
    order: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    courseId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Courses',
        key: 'id',
        as: 'courseId'
      }
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    }
  }, {
    sequelize,
    modelName: 'Video'
  });
  return Video;
};

/***/ }),

/***/ "./pages/api/v1/courses/homepage-courses.js":
/*!**************************************************!*\
  !*** ./pages/api/v1/courses/homepage-courses.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/init-middleware */ "./lib/init-middleware.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/index */ "./models/index.js");
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_index__WEBPACK_IMPORTED_MODULE_2__);


 // Initialize the cors middleware

const cors = (0,_lib_init_middleware__WEBPACK_IMPORTED_MODULE_1__.default)( // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
cors__WEBPACK_IMPORTED_MODULE_0___default()({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT']
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  await cors(req, res);

  try {
    const courses = await _models_index__WEBPACK_IMPORTED_MODULE_2__.courses.findAll({
      order: [['createdAt', 'DESC']],
      limit: 3,
      include: [{
        model: _models_index__WEBPACK_IMPORTED_MODULE_2__.users,
        as: 'user',
        attributes: ['name', 'profilePhoto']
      }, {
        model: _models_index__WEBPACK_IMPORTED_MODULE_2__.enroled_courses,
        as: 'enroled_courses',
        attributes: ['courseId']
      }]
    });
    res.send({
      courses
    });
  } catch (error) {
    console.log(error);
  }
});

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"development":{"username":"postgres","password":"123456","database":"edemy_app_development","host":"127.0.0.1","dialect":"postgres"},"test":{"username":"postgres","password":"123456","database":"edemy_database_test","host":"127.0.0.1","dialect":"postgres"},"production":{"username":"username","password":"pass&word","database":"edemy_database_production","host":"127.0.0.1","dialect":"postgres"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/v1/courses/homepage-courses.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3YxL2NvdXJzZXMvaG9tZXBhZ2UtY291cnNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLGNBQVQsQ0FBd0JDLFVBQXhCLEVBQW9DO0FBQy9DLFNBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQ0gsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUM3QkwsSUFBQUEsVUFBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBWUksTUFBRCxJQUFZO0FBQzdCLFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDekIsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDSDs7QUFDRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNILEtBTFMsQ0FBVjtBQU1ILEdBUEQsQ0FESjtBQVNIOzs7Ozs7Ozs7O0FDYlk7O0FBQ2IsTUFBTTtBQUNGRSxFQUFBQTtBQURFLElBRUZDLG1CQUFPLENBQUMsNEJBQUQsQ0FGWDs7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUNDLFNBQUQsRUFBWUMsU0FBWixLQUEwQjtBQUN2QyxRQUFNQyxNQUFOLFNBQXFCTixLQUFyQixDQUEyQjtBQUN2QjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFadUI7O0FBYTFCO0FBRURNLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLElBQUFBLEVBQUUsRUFBRTtBQUNBQyxNQUFBQSxJQUFJLEVBQUVKLFNBQVMsQ0FBQ0ssSUFEaEI7QUFFQUMsTUFBQUEsWUFBWSxFQUFFTixTQUFTLENBQUNPLE1BRnhCO0FBR0FDLE1BQUFBLFVBQVUsRUFBRTtBQUhaLEtBREk7QUFNUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hMLE1BQUFBLElBQUksRUFBRUosU0FBUyxDQUFDVTtBQURiLEtBTkM7QUFTUkMsSUFB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QUFBLE9BQU8sRUFBRSxDQUFDO0FBQ054RSxRQUFBQSxLQUFLLEVBQUUrQixnREFERDtBQUNPN0IsUUFBQUEsRUFBRSxFQUFFLE1BRFg7QUFFTnVFLFFBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsRUFBUyxjQUFUO0FBRk4sT0FBRCxFQUdQO0FBQ0V6RSxRQUFBQSxLQUFLLEVBQUVJLDBEQURUO0FBQzBCRixRQUFBQSxFQUFFLEVBQUUsaUJBRDlCO0FBRUV1RSxRQUFBQSxVQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRmQsT0FITztBQUx3QixLQUFmLENBQXRCO0FBY0FqSCxJQUFBQSxHQUFHLENBQUNrSCxJQUFKLENBQVM7QUFBQ2pELE1BQUFBO0FBQUQsS0FBVDtBQUNILEdBaEJELENBZ0JFLE9BQU9rRCxLQUFQLEVBQWM7QUFDWkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSDtBQUVKLENBdkJEOzs7Ozs7Ozs7O0FDakJBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRlbXkvZWRlbXkvLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2VkZW15L2VkZW15Ly4vbW9kZWxzL2NvdXJzZS5qcyIsIndlYnBhY2s6Ly9lZGVteS9lZGVteS8uL21vZGVscy9lbnJvbGVkX2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vZWRlbXkvZWRlbXkvLi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWRlbXkvZWRlbXkvLi9tb2RlbHMvdXNlci5qcyIsIndlYnBhY2s6Ly9lZGVteS9lZGVteS8uL21vZGVscy92aWRlby5qcyIsIndlYnBhY2s6Ly9lZGVteS9lZGVteS8uL3BhZ2VzL2FwaS92MS9jb3Vyc2VzL2hvbWVwYWdlLWNvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vZWRlbXkvZWRlbXkvZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZWRlbXkvZWRlbXkvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2VkZW15L2VkZW15L2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2VkZW15L2VkZW15L2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcbi8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XG4gICAgcmV0dXJuIChyZXEsIHJlcykgPT5cbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbn0iLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gICAgTW9kZWxcbn0gPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgY2xhc3MgQ291cnNlIGV4dGVuZHMgTW9kZWwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXG4gICAgICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcbiAgICAgICAgLy8gICAgIC8vIGRlZmluZSBhc3NvY2lhdGlvbiBoZXJlXG4gICAgICAgIC8vICAgICBDb3Vyc2UuYmVsb25nc1RvKG1vZGVscy5Vc2VyLCB7XG4gICAgICAgIC8vICAgICAgICAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gICAgICAgIC8vICAgICAgICAgb25EZWxldGU6ICdDQVNDQURFJ1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICB9O1xuICAgIFxuICAgIENvdXJzZS5pbml0KHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxuICAgICAgICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBvdmVydmlldzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5GTE9BVFxuICAgICAgICB9LFxuICAgICAgICBmcmVlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTlxuICAgICAgICB9LFxuICAgICAgICBwdWJsaXNoZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBwcm9maWxlUGhvdG86IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgY292ZXJQaG90bzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb3VyZXNlX3ByZXZpZXdfaW1nOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvdXJzZV9wcmV2aWV3X3ZpZGVvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGxlc3NvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJJZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgICAgIG1vZGVsOiAnVXNlcnMnLFxuICAgICAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgICAgICBhczogJ3VzZXJJZCcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIHNlcXVlbGl6ZSxcbiAgICAgICAgbW9kZWxOYW1lOiAnQ291cnNlJyxcbiAgICB9KTtcbiAgICByZXR1cm4gQ291cnNlO1xufTsiLCIndXNlIHN0cmljdCc7XG5jb25zdCB7XG4gIE1vZGVsXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xuICBjbGFzcyBFbnJvbGVkX2NvdXJzZXMgZXh0ZW5kcyBNb2RlbCB7XG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgKiBUaGUgYG1vZGVscy9pbmRleGAgZmlsZSB3aWxsIGNhbGwgdGhpcyBtZXRob2QgYXV0b21hdGljYWxseS5cbiAgICAgKi9cbiAgICBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICB9XG4gIH07XG4gIEVucm9sZWRfY291cnNlcy5pbml0KHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBwYXltZW50X2VtYWlsOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgfSxcbiAgICBjb3N0OiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgIH0sXG4gICAgY291cnNlSWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdDb3Vyc2VzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ2NvdXJzZUlkJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXJJZDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogJ1VzZXJzJyxcbiAgICAgICAga2V5OiAnaWQnLFxuICAgICAgICBhczogJ3VzZXJJZCcsXG4gICAgICB9XG4gICAgfSxcbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICBtb2RlbE5hbWU6ICdFbnJvbGVkX2NvdXJzZXMnLFxuICB9KTtcbiAgcmV0dXJuIEVucm9sZWRfY291cnNlcztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gbWFpbiBtb2RlbCBmaWxlXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanNvbicpW2Vudl07XG5jb25zdCBkYiA9IHt9O1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IENvdXJzZSBmcm9tICcuL2NvdXJzZSdcbmltcG9ydCBWaWRlbyBmcm9tICcuL3ZpZGVvJ1xuaW1wb3J0IEVucm9sZWRfY291cnNlcyBmcm9tICcuL2Vucm9sZWRfY291cnNlcydcblxubGV0IHNlcXVlbGl6ZTtcbmlmIChjb25maWcudXNlX2Vudl92YXJpYWJsZSkge1xuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcbn0gZWxzZSB7XG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKTtcbn1cblxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuXG5kYi51c2VycyA9IFVzZXIoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5kYi5jb3Vyc2VzID0gQ291cnNlKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxuZGIudmlkZW9zID0gVmlkZW8oc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5kYi5lbnJvbGVkX2NvdXJzZXMgPSBFbnJvbGVkX2NvdXJzZXMoc2VxdWVsaXplLCBTZXF1ZWxpemUpXG5cbi8vIGhhc01hbnkgcmVsYXRpb25zaGlwdCB3aXRoIHVzZXIgYW5kIGNvdXJzZVxuZGIudXNlcnMuaGFzTWFueShkYi5jb3Vyc2VzLCB7IFxuICBhczogJ2NvdXJzZXMnLFxuICBmb3JlaWduS2V5OiAndXNlcklkJ1xufSlcbmRiLmNvdXJzZXMuYmVsb25nc1RvKGRiLnVzZXJzLCB7XG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxuICBhczogJ3VzZXInXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCBjb3Vyc2UgYW5kIHZpZGVvc1xuZGIuY291cnNlcy5oYXNNYW55KGRiLnZpZGVvcywgeyBcbiAgYXM6ICd2aWRlb3MnLFxuICBmb3JlaWduS2V5OiAnY291cnNlSWQnXG59KVxuZGIudmlkZW9zLmJlbG9uZ3NUbyhkYi5jb3Vyc2VzLCB7XG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCcsXG4gIGFzOiAnY291cnNlJ1xufSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgdmlkZW9zXG5kYi51c2Vycy5oYXNNYW55KGRiLnZpZGVvcywgeyBcbiAgYXM6ICd2aWRlb3MnLFxuICBmb3JlaWduS2V5OiAndXNlcklkJ1xufSlcbmRiLnZpZGVvcy5iZWxvbmdzVG8oZGIuY291cnNlcywge1xuICBmb3JlaWduS2V5OiAndXNlcklkJyxcbiAgYXM6ICd1c2VyJ1xufSlcblxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggY291cnNlIGFuZCBlbnJvbGVkXG5kYi5jb3Vyc2VzLmhhc01hbnkoZGIuZW5yb2xlZF9jb3Vyc2VzLCB7IFxuICBhczogJ2Vucm9sZWRfY291cnNlcycsXG4gIGZvcmVpZ25LZXk6ICdjb3Vyc2VJZCdcbn0pXG5kYi5lbnJvbGVkX2NvdXJzZXMuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJyxcbiAgYXM6ICdjb3Vyc2UnXG59KVxuXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCB1c2VyIGFuZCBlbnJvbGVkXG5kYi51c2Vycy5oYXNNYW55KGRiLmVucm9sZWRfY291cnNlcywgeyBcbiAgYXM6ICdlbnJvbGVkX2NvdXJzZXMnLFxuICBmb3JlaWduS2V5OiAndXNlcklkJ1xufSlcbmRiLmVucm9sZWRfY291cnNlcy5iZWxvbmdzVG8oZGIudXNlcnMsIHtcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXG4gIGFzOiAndXNlcidcbn0pXG5cbi8vIGNvbnNvbGUubG9nKCcjIyMjIyMnLCBkYilcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IHtcbiAgICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgICBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXG4gICAgICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcbiAgICAgICAgLy8gICAgIC8vIGRlZmluZSBhc3NvY2lhdGlvbiBoZXJlXG4gICAgICAgIC8vICAgICBVc2VyLmhhc01hbnkobW9kZWxzLkNvdXJzZSwge1xuICAgICAgICAvLyAgICAgICAgIGZvcmVpZ25LZXk6ICd1c2VySWQnXG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9XG4gICAgfTtcbiAgICBVc2VyLmluaXQoe1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaXNFbWFpbFB1YmxpYzoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZGVzaWduYXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXG4gICAgICAgIH0sXG4gICAgICAgIGFib3V0OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBwaG9uZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBjb21wYW55OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhbnlVcmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJlc3RzOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkUmVzZXRUb2tlbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSURcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmRVcGRhdGVkQXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICAgIH0sXG4gICAgICAgIGVtYWlsUmVzZXRUb2tlbjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlVVSURcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZmlsZVBob3RvOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGdlbmRlcjoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBmYl91cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgdHdfdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGluc3RhX3VybDoge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgICB9LFxuICAgICAgICBpbl91cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWxDb25maXJtZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBlbWFpbENvbmZpcm1lZEF0OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX2FwcGx5OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgYXNfdGVhY2hlcl9jb25maXJtZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOXG4gICAgICAgIH0sXG4gICAgICAgIGFzX3RlYWNoZXJfY29uZmlybWVkX2F0OiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxuICAgICAgICB9LFxuICAgICAgICBhc190ZWFjaGVyX3JlcV9kZXNjOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxuICAgICAgICB9LFxuICAgICAgICByb2xlOiB7XG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuRU5VTSxcbiAgICAgICAgICAgIHZhbHVlczogWydzdHVkZW50JywgJ2FkbWluJywgJ3RlYWNoZXInXSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ3N0dWRlbnQnXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYWdyZWVkVGVybXM6IHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgc2VxdWVsaXplLFxuICAgICAgICBtb2RlbE5hbWU6ICdVc2VyJyxcbiAgICB9KTtcbiAgICByZXR1cm4gVXNlcjtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuY29uc3Qge1xuICBNb2RlbFxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBTZXF1ZWxpemUpID0+IHtcbiAgY2xhc3MgVmlkZW8gZXh0ZW5kcyBNb2RlbCB7XG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgKiBUaGUgYG1vZGVscy9pbmRleGAgZmlsZSB3aWxsIGNhbGwgdGhpcyBtZXRob2QgYXV0b21hdGljYWxseS5cbiAgICAgKi9cbiAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgIC8vICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAvLyB9XG4gIH07XG4gIFZpZGVvLmluaXQoe1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLlVVSURWNCxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIHZpZGVvX3VybDoge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcbiAgICB9LFxuICAgIG9yZGVyOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICB9LFxuICAgIGNvdXJzZUlkOiB7XG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiAnQ291cnNlcycsXG4gICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgYXM6ICdjb3Vyc2VJZCcsXG4gICAgICB9XG4gICAgfSxcbiAgICB1c2VySWQ6IHtcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6ICdVc2VycycsXG4gICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgYXM6ICd1c2VySWQnLFxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICBtb2RlbE5hbWU6ICdWaWRlbycsXG4gIH0pO1xuICByZXR1cm4gVmlkZW87XG59OyIsImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgaW5pdE1pZGRsZXdhcmUgZnJvbSAnQC9saWIvaW5pdC1taWRkbGV3YXJlJ1xuaW1wb3J0IHsgXG4gICAgY291cnNlcyBhcyBDb3Vyc2UsXG4gICAgdXNlcnMgYXMgVXNlcixcbiAgICBlbnJvbGVkX2NvdXJzZXMgYXMgRW5yb2xlZF9jb3Vyc2VzXG59IGZyb20gJ0AvbW9kZWxzL2luZGV4J1xuXG4vLyBJbml0aWFsaXplIHRoZSBjb3JzIG1pZGRsZXdhcmVcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcbiAgICAvLyBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0aGUgYXZhaWxhYmxlIG9wdGlvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2V4cHJlc3Nqcy9jb3JzI2NvbmZpZ3VyYXRpb24tb3B0aW9uc1xuICAgIENvcnMoe1xuICAgICAgICAvLyBPbmx5IGFsbG93IHJlcXVlc3RzIHdpdGggR0VULCBQT1NUIGFuZCBPUFRJT05TXG4gICAgICAgIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnT1BUSU9OUycsICdERUxFVEUnLCAnUFVUJ10sXG4gICAgfSlcbilcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBDb3Vyc2UuZmluZEFsbCh7XG4gICAgICAgICAgICBvcmRlcjogW1xuICAgICAgICAgICAgICAgIFsnY3JlYXRlZEF0JywgJ0RFU0MnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxpbWl0OiAzLFxuICAgICAgICAgICAgaW5jbHVkZTogW3tcbiAgICAgICAgICAgICAgICBtb2RlbDogVXNlciwgYXM6ICd1c2VyJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ25hbWUnLCAncHJvZmlsZVBob3RvJ11cbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIG1vZGVsOiBFbnJvbGVkX2NvdXJzZXMsIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbJ2NvdXJzZUlkJ11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICB9KVxuXG4gICAgICAgIHJlcy5zZW5kKHtjb3Vyc2VzfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG5cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJuYW1lcyI6WyJpbml0TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiTW9kZWwiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIlNlcXVlbGl6ZSIsIkNvdXJzZSIsImluaXQiLCJpZCIsInR5cGUiLCJVVUlEIiwiZGVmYXVsdFZhbHVlIiwiVVVJRFY0IiwicHJpbWFyeUtleSIsInRpdGxlIiwiU1RSSU5HIiwib3ZlcnZpZXciLCJURVhUIiwicHJpY2UiLCJGTE9BVCIsImZyZWUiLCJCT09MRUFOIiwicHVibGlzaGVkIiwicHJvZmlsZVBob3RvIiwiY292ZXJQaG90byIsImNvdXJlc2VfcHJldmlld19pbWciLCJjb3Vyc2VfcHJldmlld192aWRlbyIsImR1cmF0aW9uIiwibGVzc29ucyIsImFjY2VzcyIsImNhdGVnb3J5IiwidXNlcklkIiwib25EZWxldGUiLCJyZWZlcmVuY2VzIiwibW9kZWwiLCJrZXkiLCJhcyIsIm1vZGVsTmFtZSIsIkVucm9sZWRfY291cnNlcyIsImFzc29jaWF0ZSIsIm1vZGVscyIsInBheW1lbnRfZW1haWwiLCJjb3N0IiwiSU5URUdFUiIsImNvdXJzZUlkIiwiZnMiLCJwYXRoIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiZW52IiwiY29uZmlnIiwiX19kaXJuYW1lIiwiZGIiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicHJvY2VzcyIsImRhdGFiYXNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJzIiwiY291cnNlcyIsInZpZGVvcyIsImVucm9sZWRfY291cnNlcyIsImhhc01hbnkiLCJmb3JlaWduS2V5IiwiYmVsb25nc1RvIiwiVXNlciIsIm5hbWUiLCJlbWFpbCIsImlzRW1haWxQdWJsaWMiLCJkZXNpZ25hdGlvbiIsImFib3V0IiwibG9jYXRpb24iLCJwaG9uZSIsImNvbXBhbnkiLCJjb21wYW55VXJsIiwiaW50ZXJlc3RzIiwicGFzc3dvcmRSZXNldFRva2VuIiwicGFzc3dvcmRVcGRhdGVkQXQiLCJEQVRFIiwiZW1haWxSZXNldFRva2VuIiwiZ2VuZGVyIiwiZmJfdXJsIiwidHdfdXJsIiwiaW5zdGFfdXJsIiwiaW5fdXJsIiwiZW1haWxDb25maXJtZWQiLCJlbWFpbENvbmZpcm1lZEF0IiwiYXNfdGVhY2hlcl9hcHBseSIsImFzX3RlYWNoZXJfY29uZmlybWVkIiwiYXNfdGVhY2hlcl9jb25maXJtZWRfYXQiLCJhc190ZWFjaGVyX3JlcV9kZXNjIiwicm9sZSIsIkVOVU0iLCJ2YWx1ZXMiLCJhY3RpdmUiLCJhZ3JlZWRUZXJtcyIsImFsbG93TnVsbCIsIlZpZGVvIiwidmlkZW9fdXJsIiwib3JkZXIiLCJkZXNjcmlwdGlvbiIsIkNvcnMiLCJjb3JzIiwibWV0aG9kcyIsImZpbmRBbGwiLCJsaW1pdCIsImluY2x1ZGUiLCJhdHRyaWJ1dGVzIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=