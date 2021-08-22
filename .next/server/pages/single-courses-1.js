"use strict";
(() => {
var exports = {};
exports.id = 1917;
exports.ids = [1917];
exports.modules = {

/***/ 5670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ single_courses_1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/SingleCourses/PageBanner.js
var PageBanner = __webpack_require__(9790);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/SingleCourses/StaticCoursesDetailsSidebar.js





const ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\SingleCourses\\StaticCoursesDetailsSidebar.js -> " + "react-modal-video"]
  }
});

const StaticCoursesDetailsSidebar = () => {
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []); // Popup Video

  const [isOpen, setIsOpen] = external_react_default().useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
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
          src: "/images/courses/courses1.jpg",
          alt: "image"
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
            }), "$49"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-teacher"
              }), " Instructor"]
            }), "Sarah Taylor"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-time"
              }), " Duration"]
            }), "7 weeks"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-distance-learning"
              }), " ", "Lessons"]
            }), "25"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "flaticon-web"
              }), " Enrolled"]
            }), "255 students"]
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
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "btn-box",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "#",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "default-btn",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "flaticon-shopping-cart"
            }), " Add to Cart ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "#",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "default-btn",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "flaticon-tag"
            }), " Buy Now", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
          })
        })]
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

/* harmony default export */ const SingleCourses_StaticCoursesDetailsSidebar = (StaticCoursesDetailsSidebar);
// EXTERNAL MODULE: ./components/Courses/YouMightLikeTheCourses.js
var YouMightLikeTheCourses = __webpack_require__(4834);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(7659);
;// CONCATENATED MODULE: ./pages/single-courses-1.js







(0,external_react_tabs_.resetIdCounter)();

const SingleCourses = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageBanner/* default */.Z, {
      pageTitle: "Python for Finance: Investment Fundamentals & Data Analytics",
      homePageUrl: "/",
      homePageText: "Home",
      innerPageUrl: "/courses-1",
      innerPageText: "Courses",
      activePageText: "Python for Finance: Investment Fundamentals & Data Analytics"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "courses-details-area pb-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "courses-details-image",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/courses/course-details.jpg",
          alt: "image"
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
                      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "Certification"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "Who this course is for"
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_tabs_.TabPanel, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "courses-curriculum",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "Python Introduction"
                    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "Python Introduction"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "questions",
                              children: "5 questions"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "01 Hour"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status",
                              children: "Preview"
                            })]
                          })]
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "Stepping into the World of Python"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "NumPy Introduction"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "15 Min"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status locked",
                              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                className: "flaticon-password"
                              })
                            })]
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "NumPy Getting Started"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "30 Min"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status locked",
                              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                className: "flaticon-password"
                              })
                            })]
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "NumPy Creating Arrays"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "45 Min"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status locked",
                              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                className: "flaticon-password"
                              })
                            })]
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "NumPy Array Indexing"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "questions",
                              children: "4 questions"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "1 Hour"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status locked",
                              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                className: "flaticon-password"
                              })
                            })]
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "NumPy Array Slicing"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "1.5 Hour"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status locked",
                              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                className: "flaticon-password"
                              })
                            })]
                          })]
                        })
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                      children: "Python MySQL"
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "Python MySQL"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "01 Hour"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status locked",
                              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                className: "flaticon-password"
                              })
                            })]
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "Python MySQL Create Database"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "questions",
                              children: "3 questions"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "1.1 Hour"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status locked",
                              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                className: "flaticon-password"
                              })
                            })]
                          })]
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          href: "#",
                          className: "d-flex justify-content-between align-items-center",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "courses-name",
                            children: "Python MySQL Create Table"
                          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "courses-meta",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "duration",
                              children: "1.5 Hour"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "status locked",
                              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                                className: "flaticon-password"
                              })
                            })]
                          })]
                        })
                      })]
                    })]
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
                              src: "/images/advisor/advisor2.jpg",
                              alt: "image"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "col-lg-8 col-md-8",
                          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                            className: "advisor-content",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                              children: "Sarah Taylor"
                            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                              className: "sub-title",
                              children: "Agile Project Expert"
                            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            children: /*#__PURE__*/jsx_runtime_.jsx(SingleCourses_StaticCoursesDetailsSidebar, {})
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(YouMightLikeTheCourses/* default */.Z, {})]
  });
};

/* harmony default export */ const single_courses_1 = (SingleCourses);

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

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,9864,9790], () => (__webpack_exec__(5670)));
module.exports = __webpack_exports__;

})();