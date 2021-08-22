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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3YxL2NvdXJzZXMvaG9tZXBhZ2UtY291cnNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLGNBQVQsQ0FBd0JDLFVBQXhCLEVBQW9DO0FBQy9DLFNBQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQ0gsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUM3QkwsSUFBQUEsVUFBVSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBWUksTUFBRCxJQUFZO0FBQzdCLFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDekIsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDSDs7QUFDRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNILEtBTFMsQ0FBVjtBQU1ILEdBUEQsQ0FESjtBQVNIOzs7Ozs7Ozs7O0FDYlk7O0FBQ2IsTUFBTTtBQUNGRSxFQUFBQTtBQURFLElBRUZDLG1CQUFPLENBQUMsNEJBQUQsQ0FGWDs7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLENBQUNDLFNBQUQsRUFBWUMsU0FBWixLQUEwQjtBQUN2QyxRQUFNQyxNQUFOLFNBQXFCTixLQUFyQixDQUEyQjtBQUN2QjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFadUI7O0FBYTFCO0FBRURNLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1JDLElBQUFBLEVBQUUsRUFBRTtBQUNBQyxNQUFBQSxJQUFJLEVBQUVKLFNBQVMsQ0FBQ0ssSUFEaEI7QUFFQUMsTUFBQUEsWUFBWSxFQUFFTixTQUFTLENBQUNPLE1BRnhCO0FBR0FDLE1BQUFBLFVBQVUsRUFBRTtBQUhaLEtBREk7QUFNUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hMLE1BQUFBLElBQUksRUFBRUosU0FBUyxDQUFDVTtBQURiLEtBTkM7QUFTUkMsSUFB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QUFBLE9BQU8sRUFBRSxDQUFDO0FBQ054RSxRQUFBQSxLQUFLLEVBQUUrQixnREFERDtBQUNPN0IsUUFBQUEsRUFBRSxFQUFFLE1BRFg7QUFFTnVFLFFBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsRUFBUyxjQUFUO0FBRk4sT0FBRCxFQUdQO0FBQ0V6RSxRQUFBQSxLQUFLLEVBQUVJLDBEQURUO0FBQzBCRixRQUFBQSxFQUFFLEVBQUUsaUJBRDlCO0FBRUV1RSxRQUFBQSxVQUFVLEVBQUUsQ0FBQyxVQUFEO0FBRmQsT0FITztBQUx3QixLQUFmLENBQXRCO0FBY0FqSCxJQUFBQSxHQUFHLENBQUNrSCxJQUFKLENBQVM7QUFBQ2pELE1BQUFBO0FBQUQsS0FBVDtBQUNILEdBaEJELENBZ0JFLE9BQU9rRCxLQUFQLEVBQWM7QUFDWkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSDtBQUVKLENBdkJEOzs7Ozs7Ozs7O0FDakJBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRlbXkvLi9saWIvaW5pdC1taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2VkZW15Ly4vbW9kZWxzL2NvdXJzZS5qcyIsIndlYnBhY2s6Ly9lZGVteS8uL21vZGVscy9lbnJvbGVkX2NvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vZWRlbXkvLi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWRlbXkvLi9tb2RlbHMvdXNlci5qcyIsIndlYnBhY2s6Ly9lZGVteS8uL21vZGVscy92aWRlby5qcyIsIndlYnBhY2s6Ly9lZGVteS8uL3BhZ2VzL2FwaS92MS9jb3Vyc2VzL2hvbWVwYWdlLWNvdXJzZXMuanMiLCJ3ZWJwYWNrOi8vZWRlbXkvZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZWRlbXkvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2VkZW15L2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2VkZW15L2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xyXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxyXG4vL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TWlkZGxld2FyZShtaWRkbGV3YXJlKSB7XHJcbiAgICByZXR1cm4gKHJlcSwgcmVzKSA9PlxyXG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbWlkZGxld2FyZShyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxufSIsIid1c2Ugc3RyaWN0JztcclxuY29uc3Qge1xyXG4gICAgTW9kZWxcclxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xyXG4gICAgY2xhc3MgQ291cnNlIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgZm9yIGRlZmluaW5nIGFzc29jaWF0aW9ucy5cclxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXHJcbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgLy8gc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcclxuICAgICAgICAvLyAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcclxuICAgICAgICAvLyAgICAgQ291cnNlLmJlbG9uZ3NUbyhtb2RlbHMuVXNlciwge1xyXG4gICAgICAgIC8vICAgICAgICAgZm9yZWlnbktleTogJ3VzZXJJZCcsXHJcbiAgICAgICAgLy8gICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIENvdXJzZS5pbml0KHtcclxuICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxyXG4gICAgICAgICAgICBwcmltYXJ5S2V5OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdmVydmlldzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkZMT0FUXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcmVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5CT09MRUFOXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwdWJsaXNoZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2ZpbGVQaG90bzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb3ZlclBob3RvOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvdXJlc2VfcHJldmlld19pbWc6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY291cnNlX3ByZXZpZXdfdmlkZW86IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVyYXRpb246IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHVyYXRpb246IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVzc29uczoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY2Nlc3M6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlcklkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxyXG4gICAgICAgICAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxyXG4gICAgICAgICAgICByZWZlcmVuY2VzOiB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbDogJ1VzZXJzJyxcclxuICAgICAgICAgICAgICAgIGtleTogJ2lkJyxcclxuICAgICAgICAgICAgICAgIGFzOiAndXNlcklkJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHtcclxuICAgICAgICBzZXF1ZWxpemUsXHJcbiAgICAgICAgbW9kZWxOYW1lOiAnQ291cnNlJyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIENvdXJzZTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IHtcclxuICBNb2RlbFxyXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XHJcbiAgY2xhc3MgRW5yb2xlZF9jb3Vyc2VzIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXHJcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXHJcbiAgICAgKiBUaGUgYG1vZGVscy9pbmRleGAgZmlsZSB3aWxsIGNhbGwgdGhpcyBtZXRob2QgYXV0b21hdGljYWxseS5cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcclxuICAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcclxuICAgIH1cclxuICB9O1xyXG4gIEVucm9sZWRfY291cnNlcy5pbml0KHtcclxuICAgIGlkOiB7XHJcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXHJcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcclxuICAgIH0sXHJcbiAgICBwYXltZW50X2VtYWlsOiB7XHJcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgIH0sXHJcbiAgICBjb3N0OiB7XHJcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXHJcbiAgICB9LFxyXG4gICAgY291cnNlSWQ6IHtcclxuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXHJcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXHJcbiAgICAgIHJlZmVyZW5jZXM6IHtcclxuICAgICAgICBtb2RlbDogJ0NvdXJzZXMnLFxyXG4gICAgICAgIGtleTogJ2lkJyxcclxuICAgICAgICBhczogJ2NvdXJzZUlkJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXJJZDoge1xyXG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcclxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcclxuICAgICAgcmVmZXJlbmNlczoge1xyXG4gICAgICAgIG1vZGVsOiAnVXNlcnMnLFxyXG4gICAgICAgIGtleTogJ2lkJyxcclxuICAgICAgICBhczogJ3VzZXJJZCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSwge1xyXG4gICAgc2VxdWVsaXplLFxyXG4gICAgbW9kZWxOYW1lOiAnRW5yb2xlZF9jb3Vyc2VzJyxcclxuICB9KTtcclxuICByZXR1cm4gRW5yb2xlZF9jb3Vyc2VzO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuLy8gbWFpbiBtb2RlbCBmaWxlXHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcclxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanNvbicpW2Vudl07XHJcbmNvbnN0IGRiID0ge307XHJcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IENvdXJzZSBmcm9tICcuL2NvdXJzZSdcclxuaW1wb3J0IFZpZGVvIGZyb20gJy4vdmlkZW8nXHJcbmltcG9ydCBFbnJvbGVkX2NvdXJzZXMgZnJvbSAnLi9lbnJvbGVkX2NvdXJzZXMnXHJcblxyXG5sZXQgc2VxdWVsaXplO1xyXG5pZiAoY29uZmlnLnVzZV9lbnZfdmFyaWFibGUpIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcclxufSBlbHNlIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGNvbmZpZy5kYXRhYmFzZSwgY29uZmlnLnVzZXJuYW1lLCBjb25maWcucGFzc3dvcmQsIGNvbmZpZyk7XHJcbn1cclxuXHJcbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcclxuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xyXG5cclxuZGIudXNlcnMgPSBVc2VyKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxyXG5kYi5jb3Vyc2VzID0gQ291cnNlKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxyXG5kYi52aWRlb3MgPSBWaWRlbyhzZXF1ZWxpemUsIFNlcXVlbGl6ZSlcclxuZGIuZW5yb2xlZF9jb3Vyc2VzID0gRW5yb2xlZF9jb3Vyc2VzKHNlcXVlbGl6ZSwgU2VxdWVsaXplKVxyXG5cclxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgY291cnNlXHJcbmRiLnVzZXJzLmhhc01hbnkoZGIuY291cnNlcywgeyBcclxuICBhczogJ2NvdXJzZXMnLFxyXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnXHJcbn0pXHJcbmRiLmNvdXJzZXMuYmVsb25nc1RvKGRiLnVzZXJzLCB7XHJcbiAgZm9yZWlnbktleTogJ3VzZXJJZCcsXHJcbiAgYXM6ICd1c2VyJ1xyXG59KVxyXG5cclxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggY291cnNlIGFuZCB2aWRlb3NcclxuZGIuY291cnNlcy5oYXNNYW55KGRiLnZpZGVvcywgeyBcclxuICBhczogJ3ZpZGVvcycsXHJcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJ1xyXG59KVxyXG5kYi52aWRlb3MuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcclxuICBmb3JlaWduS2V5OiAnY291cnNlSWQnLFxyXG4gIGFzOiAnY291cnNlJ1xyXG59KVxyXG5cclxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgdmlkZW9zXHJcbmRiLnVzZXJzLmhhc01hbnkoZGIudmlkZW9zLCB7IFxyXG4gIGFzOiAndmlkZW9zJyxcclxuICBmb3JlaWduS2V5OiAndXNlcklkJ1xyXG59KVxyXG5kYi52aWRlb3MuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcclxuICBmb3JlaWduS2V5OiAndXNlcklkJyxcclxuICBhczogJ3VzZXInXHJcbn0pXHJcblxyXG4vLyBoYXNNYW55IHJlbGF0aW9uc2hpcHQgd2l0aCBjb3Vyc2UgYW5kIGVucm9sZWRcclxuZGIuY291cnNlcy5oYXNNYW55KGRiLmVucm9sZWRfY291cnNlcywgeyBcclxuICBhczogJ2Vucm9sZWRfY291cnNlcycsXHJcbiAgZm9yZWlnbktleTogJ2NvdXJzZUlkJ1xyXG59KVxyXG5kYi5lbnJvbGVkX2NvdXJzZXMuYmVsb25nc1RvKGRiLmNvdXJzZXMsIHtcclxuICBmb3JlaWduS2V5OiAnY291cnNlSWQnLFxyXG4gIGFzOiAnY291cnNlJ1xyXG59KVxyXG5cclxuLy8gaGFzTWFueSByZWxhdGlvbnNoaXB0IHdpdGggdXNlciBhbmQgZW5yb2xlZFxyXG5kYi51c2Vycy5oYXNNYW55KGRiLmVucm9sZWRfY291cnNlcywgeyBcclxuICBhczogJ2Vucm9sZWRfY291cnNlcycsXHJcbiAgZm9yZWlnbktleTogJ3VzZXJJZCdcclxufSlcclxuZGIuZW5yb2xlZF9jb3Vyc2VzLmJlbG9uZ3NUbyhkYi51c2Vycywge1xyXG4gIGZvcmVpZ25LZXk6ICd1c2VySWQnLFxyXG4gIGFzOiAndXNlcidcclxufSlcclxuXHJcbi8vIGNvbnNvbGUubG9nKCcjIyMjIyMnLCBkYilcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuY29uc3Qge1xyXG4gICAgTW9kZWxcclxufSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIFNlcXVlbGl6ZSkgPT4ge1xyXG4gICAgY2xhc3MgVXNlciBleHRlbmRzIE1vZGVsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXHJcbiAgICAgICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxyXG4gICAgICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIGRlZmluZSBhc3NvY2lhdGlvbiBoZXJlXHJcbiAgICAgICAgLy8gICAgIFVzZXIuaGFzTWFueShtb2RlbHMuQ291cnNlLCB7XHJcbiAgICAgICAgLy8gICAgICAgICBmb3JlaWduS2V5OiAndXNlcklkJ1xyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgIH07XHJcbiAgICBVc2VyLmluaXQoe1xyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlELFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5VVUlEVjQsXHJcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNFbWFpbFB1YmxpYzoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXNzd29yZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXNpZ25hdGlvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuVEVYVFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWJvdXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlRFWFRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBob25lOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBhbnk6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGFueVVybDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlcmVzdHM6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzc3dvcmRSZXNldFRva2VuOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlEXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXNzd29yZFVwZGF0ZWRBdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWxSZXNldFRva2VuOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5VVUlEXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9maWxlUGhvdG86IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2VuZGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZiX3VybDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0d191cmw6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zdGFfdXJsOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluX3VybDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbENvbmZpcm1lZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1haWxDb25maXJtZWRBdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXNfdGVhY2hlcl9hcHBseToge1xyXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuQk9PTEVBTixcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXNfdGVhY2hlcl9jb25maXJtZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzX3RlYWNoZXJfY29uZmlybWVkX2F0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc190ZWFjaGVyX3JlcV9kZXNjOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5FTlVNLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFsnc3R1ZGVudCcsICdhZG1pbicsICd0ZWFjaGVyJ10sXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ3N0dWRlbnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWdyZWVkVGVybXM6IHtcclxuICAgICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkJPT0xFQU4sXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgc2VxdWVsaXplLFxyXG4gICAgICAgIG1vZGVsTmFtZTogJ1VzZXInLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gVXNlcjtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IHtcclxuICBNb2RlbFxyXG59ID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgU2VxdWVsaXplKSA9PiB7XHJcbiAgY2xhc3MgVmlkZW8gZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICAvKipcclxuICAgICAqIEhlbHBlciBtZXRob2QgZm9yIGRlZmluaW5nIGFzc29jaWF0aW9ucy5cclxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cclxuICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxyXG4gICAgICovXHJcbiAgICAvLyBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xyXG4gICAgLy8gICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxyXG4gICAgLy8gfVxyXG4gIH07XHJcbiAgVmlkZW8uaW5pdCh7XHJcbiAgICBpZDoge1xyXG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUuVVVJRFY0LFxyXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdmlkZW9fdXJsOiB7XHJcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5URVhUXHJcbiAgICB9LFxyXG4gICAgb3JkZXI6IHtcclxuICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcclxuICAgIH0sXHJcbiAgICBuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXHJcbiAgICB9LFxyXG4gICAgY291cnNlSWQ6IHtcclxuICAgICAgdHlwZTogU2VxdWVsaXplLlVVSUQsXHJcbiAgICAgIG9uRGVsZXRlOiAnQ0FTQ0FERScsXHJcbiAgICAgIHJlZmVyZW5jZXM6IHtcclxuICAgICAgICBtb2RlbDogJ0NvdXJzZXMnLFxyXG4gICAgICAgIGtleTogJ2lkJyxcclxuICAgICAgICBhczogJ2NvdXJzZUlkJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXJJZDoge1xyXG4gICAgICB0eXBlOiBTZXF1ZWxpemUuVVVJRCxcclxuICAgICAgb25EZWxldGU6ICdDQVNDQURFJyxcclxuICAgICAgcmVmZXJlbmNlczoge1xyXG4gICAgICAgIG1vZGVsOiAnVXNlcnMnLFxyXG4gICAgICAgIGtleTogJ2lkJyxcclxuICAgICAgICBhczogJ3VzZXJJZCcsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBzZXF1ZWxpemUsXHJcbiAgICBtb2RlbE5hbWU6ICdWaWRlbycsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIFZpZGVvO1xyXG59OyIsImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnXHJcbmltcG9ydCBpbml0TWlkZGxld2FyZSBmcm9tICdAL2xpYi9pbml0LW1pZGRsZXdhcmUnXHJcbmltcG9ydCB7IFxyXG4gICAgY291cnNlcyBhcyBDb3Vyc2UsXHJcbiAgICB1c2VycyBhcyBVc2VyLFxyXG4gICAgZW5yb2xlZF9jb3Vyc2VzIGFzIEVucm9sZWRfY291cnNlc1xyXG59IGZyb20gJ0AvbW9kZWxzL2luZGV4J1xyXG5cclxuLy8gSW5pdGlhbGl6ZSB0aGUgY29ycyBtaWRkbGV3YXJlXHJcbmNvbnN0IGNvcnMgPSBpbml0TWlkZGxld2FyZShcclxuICAgIC8vIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IHRoZSBhdmFpbGFibGUgb3B0aW9ucyBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXHJcbiAgICBDb3JzKHtcclxuICAgICAgICAvLyBPbmx5IGFsbG93IHJlcXVlc3RzIHdpdGggR0VULCBQT1NUIGFuZCBPUFRJT05TXHJcbiAgICAgICAgbWV0aG9kczogWydHRVQnLCAnUE9TVCcsICdPUFRJT05TJywgJ0RFTEVURScsICdQVVQnXSxcclxuICAgIH0pXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgYXdhaXQgY29ycyhyZXEsIHJlcylcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZXMgPSBhd2FpdCBDb3Vyc2UuZmluZEFsbCh7XHJcbiAgICAgICAgICAgIG9yZGVyOiBbXHJcbiAgICAgICAgICAgICAgICBbJ2NyZWF0ZWRBdCcsICdERVNDJ11cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGltaXQ6IDMsXHJcbiAgICAgICAgICAgIGluY2x1ZGU6IFt7XHJcbiAgICAgICAgICAgICAgICBtb2RlbDogVXNlciwgYXM6ICd1c2VyJyxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsnbmFtZScsICdwcm9maWxlUGhvdG8nXVxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICAgIG1vZGVsOiBFbnJvbGVkX2NvdXJzZXMsIGFzOiAnZW5yb2xlZF9jb3Vyc2VzJyxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFsnY291cnNlSWQnXVxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXMuc2VuZCh7Y291cnNlc30pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sIm5hbWVzIjpbImluaXRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJNb2RlbCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiU2VxdWVsaXplIiwiQ291cnNlIiwiaW5pdCIsImlkIiwidHlwZSIsIlVVSUQiLCJkZWZhdWx0VmFsdWUiLCJVVUlEVjQiLCJwcmltYXJ5S2V5IiwidGl0bGUiLCJTVFJJTkciLCJvdmVydmlldyIsIlRFWFQiLCJwcmljZSIsIkZMT0FUIiwiZnJlZSIsIkJPT0xFQU4iLCJwdWJsaXNoZWQiLCJwcm9maWxlUGhvdG8iLCJjb3ZlclBob3RvIiwiY291cmVzZV9wcmV2aWV3X2ltZyIsImNvdXJzZV9wcmV2aWV3X3ZpZGVvIiwiZHVyYXRpb24iLCJsZXNzb25zIiwiYWNjZXNzIiwiY2F0ZWdvcnkiLCJ1c2VySWQiLCJvbkRlbGV0ZSIsInJlZmVyZW5jZXMiLCJtb2RlbCIsImtleSIsImFzIiwibW9kZWxOYW1lIiwiRW5yb2xlZF9jb3Vyc2VzIiwiYXNzb2NpYXRlIiwibW9kZWxzIiwicGF5bWVudF9lbWFpbCIsImNvc3QiLCJJTlRFR0VSIiwiY291cnNlSWQiLCJmcyIsInBhdGgiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJlbnYiLCJjb25maWciLCJfX2Rpcm5hbWUiLCJkYiIsInVzZV9lbnZfdmFyaWFibGUiLCJwcm9jZXNzIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlcnMiLCJjb3Vyc2VzIiwidmlkZW9zIiwiZW5yb2xlZF9jb3Vyc2VzIiwiaGFzTWFueSIsImZvcmVpZ25LZXkiLCJiZWxvbmdzVG8iLCJVc2VyIiwibmFtZSIsImVtYWlsIiwiaXNFbWFpbFB1YmxpYyIsImRlc2lnbmF0aW9uIiwiYWJvdXQiLCJsb2NhdGlvbiIsInBob25lIiwiY29tcGFueSIsImNvbXBhbnlVcmwiLCJpbnRlcmVzdHMiLCJwYXNzd29yZFJlc2V0VG9rZW4iLCJwYXNzd29yZFVwZGF0ZWRBdCIsIkRBVEUiLCJlbWFpbFJlc2V0VG9rZW4iLCJnZW5kZXIiLCJmYl91cmwiLCJ0d191cmwiLCJpbnN0YV91cmwiLCJpbl91cmwiLCJlbWFpbENvbmZpcm1lZCIsImVtYWlsQ29uZmlybWVkQXQiLCJhc190ZWFjaGVyX2FwcGx5IiwiYXNfdGVhY2hlcl9jb25maXJtZWQiLCJhc190ZWFjaGVyX2NvbmZpcm1lZF9hdCIsImFzX3RlYWNoZXJfcmVxX2Rlc2MiLCJyb2xlIiwiRU5VTSIsInZhbHVlcyIsImFjdGl2ZSIsImFncmVlZFRlcm1zIiwiYWxsb3dOdWxsIiwiVmlkZW8iLCJ2aWRlb191cmwiLCJvcmRlciIsImRlc2NyaXB0aW9uIiwiQ29ycyIsImNvcnMiLCJtZXRob2RzIiwiZmluZEFsbCIsImxpbWl0IiwiaW5jbHVkZSIsImF0dHJpYnV0ZXMiLCJzZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==