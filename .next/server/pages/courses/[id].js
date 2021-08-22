"use strict";
(() => {
var exports = {};
exports.id = 5893;
exports.ids = [5893];
exports.modules = {

/***/ 3194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/SingleCourses/PageBanner.js
var PageBanner = __webpack_require__(9790);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: external "react-stripe-checkout"
const external_react_stripe_checkout_namespaceObject = require("react-stripe-checkout");
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_namespaceObject);
;// CONCATENATED MODULE: ./components/CheckoutButton/CheckoutBtn.js





const CheckoutBtn = ({
  handleCheckout,
  image,
  name,
  price
}) => {
  const stripeTotal = Number((price * 100).toFixed(2)); // console.log(stripeTotal)

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_stripe_checkout_default()), {
      name: name,
      amount: stripeTotal,
      image: image,
      currency: "USD",
      stripeKey: "pk_test_51JNGIpDjTbVyjR6CjYLmsTeXnjWzppSy9ycXLtU4opZvstelghQcQfunkp6af4icgmkzWyo5B1kQakhnjCpqDBIA003xWWjU6C",
      token: handleCheckout,
      triggerEvent: "onClick",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "default-btn",
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "flaticon-tag"
        }), " Buy Now ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
      })
    })
  });
};

/* harmony default export */ const CheckoutButton_CheckoutBtn = (CheckoutBtn);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4264);
// EXTERNAL MODULE: ./utils/catchErrors.js
var catchErrors = __webpack_require__(3800);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/SingleCourses/CoursesDetailsSidebar.js





const ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\SingleCourses\\CoursesDetailsSidebar.js -> " + "react-modal-video"]
  }
});








const CoursesDetailsSidebar = ({
  id,
  price,
  user,
  profilePhoto,
  lessons,
  duration,
  title,
  course_preview_video,
  loggedInUser
}) => {
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []); // console.log(loggedInUser)

  const {
    enroled_courses
  } = loggedInUser ? loggedInUser : "";
  const router = (0,router_.useRouter)(); // Popup Video

  const [enrolled, setEnrolled] = external_react_default().useState(0);
  const [isOpen, setIsOpen] = external_react_default().useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  external_react_default().useEffect(() => {
    const countEnrolled = async () => {
      const url = `${baseUrl/* default */.Z}/api/v1/courses/enrolled/${id}`;
      const response = await external_axios_default().get(url);
      setEnrolled(response.data);
    }; // setEnrolled(response.data.enrolled)


    countEnrolled();
  }, []);

  const checkBoughtAlready = () => {
    return enroled_courses.filter(function (val) {
      return val.courseId === id;
    }).length > 0;
  }; // console.log(checkBoughtAlready())


  const youtube_parser = url => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  const handleCheckout = async paymentData => {
    try {
      const token = external_js_cookie_default().get("token");
      const stripeTotal = Number((price * 100).toFixed(2));
      paymentData["courseId"] = id;
      paymentData["stripeTotal"] = stripeTotal;
      const url = `${baseUrl/* default */.Z}/api/v1/courses/checkout`;
      const payload = {
        paymentData
      };
      const headers = {
        headers: {
          Authorization: token
        }
      };
      const response = await external_axios_default().post(url, payload, headers);
      external_react_hot_toast_default().success(response.data);
    } catch (error) {
      (0,catchErrors/* default */.Z)(error, window.alert);
      console.log(error.message);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [display ? /*#__PURE__*/jsx_runtime_.jsx(ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "bk7McNUjWgw",
      onClose: () => setIsOpen(!isOpen)
    }) : "", /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "courses-details-info",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "image",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: profilePhoto,
          alt: title
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: e => {
            e.preventDefault();
            openModal();
          },
          className: "link-btn popup-youtube"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "flaticon-play"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Course Preview"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "price",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-tag"
              }), " Price"]
            }), "$", price]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-teacher"
              }), " Instructor"]
            }), user.name]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-time"
              }), " Duration"]
            }), duration]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-distance-learning"
              }), " ", "Lessons"]
            }), parseInt(lessons)]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-web"
              }), " Enrolled"]
            }), enrolled, " students"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-lock"
              }), " Access"]
            }), "Lifetime"]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "btn-box",
        children: loggedInUser ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: checkBoughtAlready() ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            className: "default-btn",
            disabled: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "flaticon-tag"
            }), " Enrolled", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
          }) : /*#__PURE__*/jsx_runtime_.jsx(CheckoutButton_CheckoutBtn, {
            handleCheckout: handleCheckout,
            image: profilePhoto,
            name: title,
            price: price
          })
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: "default-btn",
          onClick: () => {
            router.push("/authentication");
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "flaticon-tag"
          }), " Login To Buy", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "courses-share",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "share-info",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: ["Share This Course ", /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "flaticon-share"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "social-link",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "d-block",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "bx bxl-facebook"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "d-block",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "bx bxl-twitter"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "d-block",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "bx bxl-instagram"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "#",
                className: "d-block",
                target: "_blank",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "bx bxl-linkedin"
                })
              })
            })]
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const SingleCourses_CoursesDetailsSidebar = (CoursesDetailsSidebar);
// EXTERNAL MODULE: ./components/Courses/YouMightLikeTheCourses.js
var YouMightLikeTheCourses = __webpack_require__(4834);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(7659);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Courses/CoursesCurriculum.js





const CoursesCurriculum = ({
  videos
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "courses-curriculum",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Course Videos"
    }), videos ? /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: videos.map(video => /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/courses",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "d-flex justify-content-between align-items-center",
            onClick: e => e.preventDefault(),
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "courses-name",
              children: video.name
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "courses-meta",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "status locked",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "flaticon-password"
                })
              })
            })]
          })
        })
      }, video.id))
    }) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "No Videos"
    })]
  });
};

/* harmony default export */ const Courses_CoursesCurriculum = (CoursesCurriculum);
;// CONCATENATED MODULE: ./pages/courses/[id].js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






(0,external_react_tabs_.resetIdCounter)();




const Details = ({
  course,
  user
}) => {
  // console.log(course)
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageBanner/* default */.Z, {
      pageTitle: course.title,
      homePageUrl: "/",
      homePageText: "Home",
      innerPageUrl: "/courses-1",
      innerPageText: "Courses",
      activePageText: course.title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "courses-details-area pb-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "courses-details-image",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: course.coverPhoto,
          alt: course.title
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-8 col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "courses-details-desc",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_tabs_.Tabs, {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_tabs_.TabList, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_.Tab, {
                    children: "Overview"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_.Tab, {
                    children: "Curriculum"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_.Tab, {
                    children: "Instructor"
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_.Tab, {
                    children: "Reviews"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "courses-overview",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "Course Description"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: course.overview
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                  children: /*#__PURE__*/jsx_runtime_.jsx(Courses_CoursesCurriculum, {
                    videos: course.videos
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "courses-instructor",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "single-advisor-box",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "col-lg-4 col-md-4",
                          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "advisor-image",
                            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                              src: `${course.user.profilePhoto ? course.user.profilePhoto : "/images/advisor/advisor2.jpg"}`,
                              alt: course.user.name
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "col-lg-8 col-md-8",
                          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "advisor-content",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                              children: course.user.name
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "sub-title",
                              children: course.user.designation || "Empty"
                            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                              children: course.user.about || "Empty"
                            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                              className: "social-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  href: course.user.fb_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                    className: "bx bxl-facebook"
                                  })
                                })
                              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  href: course.user.tw_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                    className: "bx bxl-twitter"
                                  })
                                })
                              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  href: course.user.insta_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                    className: "bx bxl-instagram"
                                  })
                                })
                              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                                  href: course.user.in_url || '#',
                                  className: "d-block",
                                  target: "_blank",
                                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                    className: "bx bxl-linkedin"
                                  })
                                })
                              })]
                            })]
                          })
                        })]
                      })
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_tabs_.TabPanel, {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "courses-reviews",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "Course Rating"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "rating",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "bx bxs-star checked"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "bx bxs-star checked"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "bx bxs-star checked"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "bx bxs-star checked"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "bx bxs-star"
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "rating-count",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: "4.1 average based on 4 reviews."
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "row",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "5 star"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "middle",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "bar-5"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side right",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "02"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "4 star"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "middle",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "bar-4"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side right",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "03"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "3 star"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "middle",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "bar-3"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side right",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "04"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "2 star"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "middle",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "bar-2"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side right",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "05"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "1 star"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "middle",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "bar-container",
                          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "bar-1"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "side right",
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: "00"
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "courses-review-comments",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "3 Reviews"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: "/images/user1.jpg",
                        alt: "image"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "d-inline-block",
                          children: "James Anderson"
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "d-block sub-comment",
                        children: "Excellent"
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in."
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: "/images/user2.jpg",
                        alt: "image"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "d-inline-block",
                          children: "Sarah Taylor"
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "d-block sub-comment",
                        children: "Video Quality!"
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Was really easy to implement and they quickly answer my additional questions!"
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: "/images/user3.jpg",
                        alt: "image"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "d-inline-block",
                          children: "David Warner"
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "d-block sub-comment",
                        children: "Perfect Coding!"
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "user-review",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: "/images/user4.jpg",
                        alt: "image"
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "review-rating",
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "review-stars",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star checked"
                          }), /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bxs-star"
                          })]
                        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "d-inline-block",
                          children: "King Kong"
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "d-block sub-comment",
                        children: "Perfect Video!"
                      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: "Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support."
                      })]
                    })]
                  })]
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx(SingleCourses_CoursesDetailsSidebar, _objectSpread(_objectSpread({}, course), {}, {
              loggedInUser: user
            }))
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(YouMightLikeTheCourses/* default */.Z, {})]
  });
};

Details.getInitialProps = async ctx => {
  const {
    id
  } = ctx.query;
  const url = `${baseUrl/* default */.Z}/api/v1/courses/course/${id}`;
  const response = await external_axios_default().get(url); // console.log(response)

  return response.data;
};

/* harmony default export */ const _id_ = (Details);

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

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6533:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 6616:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 7659:
/***/ ((module) => {

module.exports = require("react-tabs");

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,9864,9790], () => (__webpack_exec__(3194)));
module.exports = __webpack_exports__;

})();