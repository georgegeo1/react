"use strict";
(() => {
var exports = {};
exports.id = 5496;
exports.ids = [5496];
exports.modules = {

/***/ 3690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ announcements)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/eLearningSchool/MainBanner.js





const MainBanner = ({
  courses
}) => {
  // console.log(courses)
  return /*#__PURE__*/_jsx("div", {
    className: "main-banner",
    children: /*#__PURE__*/_jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/_jsxs("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsxs("div", {
            className: "main-banner-content",
            children: [/*#__PURE__*/_jsx("h1", {
              children: "The World\u2019s Leading Distance Learning Provider"
            }), /*#__PURE__*/_jsx("p", {
              children: "Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The eDemy can offer you to enjoy the beauty of eLearning!"
            }), /*#__PURE__*/_jsx(Link, {
              href: "/profile-authentication",
              children: /*#__PURE__*/_jsxs("a", {
                className: "default-btn",
                children: [/*#__PURE__*/_jsx("i", {
                  className: "flaticon-user"
                }), " Join For Free ", /*#__PURE__*/_jsx("span", {})]
              })
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsxs("div", {
            className: "main-banner-courses-list",
            children: [/*#__PURE__*/_jsx("div", {
              className: "row",
              children: courses.map(course => /*#__PURE__*/_jsx("div", {
                className: "col-lg-6 col-md-6",
                children: /*#__PURE__*/_jsxs("div", {
                  className: "single-courses-box",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "courses-image",
                    children: [/*#__PURE__*/_jsx(Link, {
                      href: "/courses/[id]",
                      as: `/courses/${course.id}`,
                      children: /*#__PURE__*/_jsx("a", {
                        className: "d-block image",
                        children: /*#__PURE__*/_jsx("img", {
                          src: course.profilePhoto,
                          alt: course.title
                        })
                      })
                    }), /*#__PURE__*/_jsx(Link, {
                      href: "#",
                      children: /*#__PURE__*/_jsx("a", {
                        className: "fav",
                        children: /*#__PURE__*/_jsx("i", {
                          className: "flaticon-heart"
                        })
                      })
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "price shadow",
                      children: ["$", course.price]
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "courses-content",
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "course-author d-flex align-items-center",
                      children: [/*#__PURE__*/_jsx("img", {
                        src: `${course.user.profilePhoto ? course.user.profilePhoto : "/images/user1.jpg"}`,
                        className: "rounded-circle",
                        alt: course.user.name
                      }), /*#__PURE__*/_jsx("span", {
                        children: course.user.name
                      })]
                    }), /*#__PURE__*/_jsx("h3", {
                      children: /*#__PURE__*/_jsx(Link, {
                        href: "/courses/[id]",
                        as: `/courses/${course.id}`,
                        children: /*#__PURE__*/_jsx("a", {
                          children: course.title
                        })
                      })
                    }), /*#__PURE__*/_jsx("p", {
                      children: course.overview.slice(0, 100)
                    }), /*#__PURE__*/_jsxs("ul", {
                      className: "courses-box-footer d-flex justify-content-between align-items-center",
                      children: [/*#__PURE__*/_jsxs("li", {
                        children: [/*#__PURE__*/_jsx("i", {
                          className: "flaticon-agenda"
                        }), " ", parseInt(course.lessons), " Lessons"]
                      }), /*#__PURE__*/_jsxs("li", {
                        children: [/*#__PURE__*/_jsx("i", {
                          className: "flaticon-people"
                        }), " ", course.enroled_courses.length, " Students"]
                      })]
                    })]
                  })]
                })
              }, course.id))
            }), /*#__PURE__*/_jsx("div", {
              className: "banner-shape1",
              children: /*#__PURE__*/_jsx("img", {
                src: "/images/banner-shape1.png",
                alt: "image"
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "banner-shape2",
              children: /*#__PURE__*/_jsx("img", {
                src: "/images/banner-shape2.png",
                alt: "image"
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "banner-shape3",
              children: /*#__PURE__*/_jsx("img", {
                src: "/images/banner-shape3.png",
                alt: "image"
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const eLearningSchool_MainBanner = ((/* unused pure expression or super */ null && (MainBanner)));
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/eLearningSchool/Partner.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2963, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2963)],
    modules: ["..\\components\\eLearningSchool\\Partner.js -> " + 'react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  margin: 60,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
  responsive: {
    0: {
      items: 3,
      margin: 20
    },
    600: {
      items: 3
    },
    768: {
      items: 4,
      margin: 30
    },
    1000: {
      items: 6
    }
  }
};

const Partner = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/_jsx("div", {
    className: "partner-area pt-100 pb-70 border-bottom",
    children: /*#__PURE__*/_jsx("div", {
      className: "container",
      children: display ? /*#__PURE__*/_jsxs(OwlCarousel, _objectSpread(_objectSpread({
        className: "partner-slides owl-carousel owl-theme"
      }, options), {}, {
        children: [/*#__PURE__*/_jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/_jsx("img", {
            src: "/images/partner/partner1.png",
            alt: "image"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/_jsx("img", {
            src: "/images/partner/partner2.png",
            alt: "image"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/_jsx("img", {
            src: "/images/partner/partner3.png",
            alt: "image"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/_jsx("img", {
            src: "/images/partner/partner4.png",
            alt: "image"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/_jsx("img", {
            src: "/images/partner/partner5.png",
            alt: "image"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/_jsx("img", {
            src: "/images/partner/partner6.png",
            alt: "image"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/_jsx("img", {
            src: "/images/partner/partner4.png",
            alt: "image"
          })
        })]
      })) : ''
    })
  });
};

/* harmony default export */ const eLearningSchool_Partner = ((/* unused pure expression or super */ null && (Partner)));
;// CONCATENATED MODULE: ./components/eLearningSchool/Features.js





const Features = () => {
  return /*#__PURE__*/_jsx("div", {
    className: "features-area pt-100 pb-70",
    children: /*#__PURE__*/_jsxs("div", {
      className: "container",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "section-title",
        children: [/*#__PURE__*/_jsx("span", {
          className: "sub-title",
          children: "Education for everyone"
        }), /*#__PURE__*/_jsx("h2", {
          children: "Affordable Online Courses and Learning Opportunities\u200B"
        }), /*#__PURE__*/_jsx("p", {
          children: "Finding your own space and utilize better learning options can result in faster than the traditional ways. Enjoy the beauty of eLearning!"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "row",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-sm-6 col-md-6",
          children: /*#__PURE__*/_jsxs("div", {
            className: "single-features-box",
            children: [/*#__PURE__*/_jsx("div", {
              className: "icon",
              children: /*#__PURE__*/_jsx("i", {
                className: "flaticon-brain-process"
              })
            }), /*#__PURE__*/_jsx("h3", {
              children: "Learn the Latest Top Skills"
            }), /*#__PURE__*/_jsx("p", {
              children: "Learning top skills can bring an extra-ordinary outcome in a career."
            }), /*#__PURE__*/_jsx(Link, {
              href: "/profile-authentication",
              children: /*#__PURE__*/_jsx("a", {
                className: "link-btn",
                children: "Start Now!"
              })
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-sm-6 col-md-6",
          children: /*#__PURE__*/_jsxs("div", {
            className: "single-features-box",
            children: [/*#__PURE__*/_jsx("div", {
              className: "icon",
              children: /*#__PURE__*/_jsx("i", {
                className: "flaticon-computer"
              })
            }), /*#__PURE__*/_jsx("h3", {
              children: "Learn in Your Own Pace"
            }), /*#__PURE__*/_jsx("p", {
              children: "Everyone prefers to enjoy learning at their own pace & that gives a great result."
            }), /*#__PURE__*/_jsx(Link, {
              href: "/profile-authentication",
              children: /*#__PURE__*/_jsx("a", {
                className: "link-btn",
                children: "Start Now!"
              })
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-sm-6 col-md-6",
          children: /*#__PURE__*/_jsxs("div", {
            className: "single-features-box",
            children: [/*#__PURE__*/_jsx("div", {
              className: "icon",
              children: /*#__PURE__*/_jsx("i", {
                className: "flaticon-shield-1"
              })
            }), /*#__PURE__*/_jsx("h3", {
              children: "Learn From Industry Experts"
            }), /*#__PURE__*/_jsx("p", {
              children: "Experienced teachers can assist in learning faster with their best approaches!"
            }), /*#__PURE__*/_jsx(Link, {
              href: "/profile-authentication",
              children: /*#__PURE__*/_jsx("a", {
                className: "link-btn",
                children: "Start Now!"
              })
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-3 col-sm-6 col-md-6",
          children: /*#__PURE__*/_jsxs("div", {
            className: "single-features-box",
            children: [/*#__PURE__*/_jsx("div", {
              className: "icon",
              children: /*#__PURE__*/_jsx("i", {
                className: "flaticon-world"
              })
            }), /*#__PURE__*/_jsx("h3", {
              children: "Enjoy Learning From Anywhere"
            }), /*#__PURE__*/_jsx("p", {
              children: "We are delighted to give you options to enjoy learning from anywhere in the world."
            }), /*#__PURE__*/_jsx(Link, {
              href: "/profile-authentication",
              children: /*#__PURE__*/_jsx("a", {
                className: "link-btn",
                children: "Start Now!"
              })
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const eLearningSchool_Features = ((/* unused pure expression or super */ null && (Features)));
;// CONCATENATED MODULE: ./components/eLearningSchool/AboutUs.js





const AboutUs = () => {
  return /*#__PURE__*/_jsxs("div", {
    className: "about-area bg-fef8ef ptb-100",
    children: [/*#__PURE__*/_jsx("div", {
      className: "container",
      children: /*#__PURE__*/_jsxs("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsx("div", {
            className: "about-image",
            children: /*#__PURE__*/_jsxs("div", {
              className: "row",
              children: [/*#__PURE__*/_jsx("div", {
                className: "col-lg-6 col-sm-6 col-md-6 col-6",
                children: /*#__PURE__*/_jsx("div", {
                  className: "image",
                  children: /*#__PURE__*/_jsx("img", {
                    src: "/images/about-img1.png",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "col-lg-6 col-sm-6 col-md-6 col-6",
                children: /*#__PURE__*/_jsx("div", {
                  className: "image",
                  children: /*#__PURE__*/_jsx("img", {
                    src: "/images/about-img2.png",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "col-lg-6 col-sm-6 col-md-6 col-6",
                children: /*#__PURE__*/_jsx("div", {
                  className: "image",
                  children: /*#__PURE__*/_jsx("img", {
                    src: "/images/about-img3.png",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "col-lg-6 col-sm-6 col-md-6 col-6",
                children: /*#__PURE__*/_jsx("div", {
                  className: "image",
                  children: /*#__PURE__*/_jsx("img", {
                    src: "/images/about-img4.png",
                    alt: "image"
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsxs("div", {
            className: "about-content",
            children: [/*#__PURE__*/_jsx("span", {
              className: "sub-title",
              children: "Online learning"
            }), /*#__PURE__*/_jsx("h2", {
              children: "Develop Your Skills, Learn Something New, and Grow Your Skills From Anywhere in the World!"
            }), /*#__PURE__*/_jsx("p", {
              children: "We understand better that online-based learning can make a significant change to reach students from all over the world! Giving options to learn better always can offer the best outcomes!"
            }), /*#__PURE__*/_jsxs("ul", {
              className: "features-list",
              children: [/*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsxs("span", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "flaticon-experience"
                  }), " Expert Trainers"]
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsxs("span", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "flaticon-time-left"
                  }), " Lifetime Acces"]
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsxs("span", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "flaticon-tutorials"
                  }), " Remote Learning"]
                })
              }), /*#__PURE__*/_jsx("li", {
                children: /*#__PURE__*/_jsxs("span", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "flaticon-self-growth"
                  }), " Self Development"]
                })
              })]
            }), /*#__PURE__*/_jsx(Link, {
              href: "/courses-1",
              children: /*#__PURE__*/_jsxs("a", {
                className: "default-btn",
                children: [/*#__PURE__*/_jsx("i", {
                  className: "flaticon-user"
                }), " View All Courses ", /*#__PURE__*/_jsx("span", {})]
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape1",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape1.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape2",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape2.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape3",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape3.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape4",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape4.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const eLearningSchool_AboutUs = ((/* unused pure expression or super */ null && (AboutUs)));
;// CONCATENATED MODULE: ./components/eLearningSchool/PopularCourses.js





const PopularCourses = ({
  courses
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: "courses-area ptb-100",
    children: /*#__PURE__*/_jsxs("div", {
      className: "container",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "section-title",
        children: [/*#__PURE__*/_jsx("span", {
          className: "sub-title",
          children: "Learn At Your Own Pace"
        }), /*#__PURE__*/_jsx("h2", {
          children: "eDemy Popular Courses"
        }), /*#__PURE__*/_jsx("p", {
          children: "Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "row",
        children: [courses ? courses.map(course => /*#__PURE__*/_jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/_jsxs("div", {
            className: "single-courses-box",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "courses-image",
              children: [/*#__PURE__*/_jsx(Link, {
                href: "/courses/[id]",
                as: `/courses/${course.id}`,
                children: /*#__PURE__*/_jsx("a", {
                  className: "d-block image",
                  children: /*#__PURE__*/_jsx("img", {
                    src: course.profilePhoto,
                    alt: course.title
                  })
                })
              }), /*#__PURE__*/_jsx(Link, {
                href: "#",
                children: /*#__PURE__*/_jsx("a", {
                  className: "fav",
                  children: /*#__PURE__*/_jsx("i", {
                    className: "flaticon-heart"
                  })
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "price shadow",
                children: ["$", course.price]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "courses-content",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "course-author d-flex align-items-center",
                children: [/*#__PURE__*/_jsx("img", {
                  src: `${course.user.profilePhoto ? course.user.profilePhoto : "/images/user1.jpg"}`,
                  className: "rounded-circle",
                  alt: course.user.name
                }), /*#__PURE__*/_jsx("span", {
                  children: course.user.name
                })]
              }), /*#__PURE__*/_jsx("h3", {
                children: /*#__PURE__*/_jsx(Link, {
                  href: "/courses/[id]",
                  as: `/courses/${course.id}`,
                  children: /*#__PURE__*/_jsx("a", {
                    children: course.title
                  })
                })
              }), /*#__PURE__*/_jsx("p", {
                children: course.overview.slice(0, 100)
              }), /*#__PURE__*/_jsxs("ul", {
                className: "courses-box-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/_jsxs("li", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "flaticon-agenda"
                  }), " ", parseInt(course.lessons), " Lessons"]
                }), /*#__PURE__*/_jsxs("li", {
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "flaticon-people"
                  }), " ", course.enroled_courses.length, " Students"]
                })]
              })]
            })]
          })
        }, course.id)) : /*#__PURE__*/_jsx("h2", {
          children: "Empty"
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-12 col-md-12",
          children: /*#__PURE__*/_jsx("div", {
            className: "courses-info",
            children: /*#__PURE__*/_jsxs("p", {
              children: ["Enjoy the top notch learning methods and achieve next level skills! You are the creator of your own career & we will guide you through that. ", /*#__PURE__*/_jsx(Link, {
                href: "/profile-authentication",
                children: /*#__PURE__*/_jsx("a", {
                  children: "Register Free Now!"
                })
              }), "."]
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const eLearningSchool_PopularCourses = ((/* unused pure expression or super */ null && (PopularCourses)));
;// CONCATENATED MODULE: ./components/eLearningSchool/FunFacts.js




const FunFacts_FunFacts = () => {
  return /*#__PURE__*/_jsx("div", {
    className: "funfacts-list",
    children: /*#__PURE__*/_jsxs("div", {
      className: "row",
      children: [/*#__PURE__*/_jsx("div", {
        className: "col-lg-6 col-md-6 col-sm-6",
        children: /*#__PURE__*/_jsxs("div", {
          className: "single-funfacts-box",
          children: [/*#__PURE__*/_jsx("h3", {
            children: "1,926"
          }), /*#__PURE__*/_jsx("p", {
            children: "Finished Sessions"
          })]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "col-lg-6 col-md-6 col-sm-6",
        children: /*#__PURE__*/_jsxs("div", {
          className: "single-funfacts-box",
          children: [/*#__PURE__*/_jsx("h3", {
            children: "3,279"
          }), /*#__PURE__*/_jsx("p", {
            children: "Enrolled Learners"
          })]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "col-lg-6 col-md-6 col-sm-6",
        children: /*#__PURE__*/_jsxs("div", {
          className: "single-funfacts-box",
          children: [/*#__PURE__*/_jsx("h3", {
            children: "250"
          }), /*#__PURE__*/_jsx("p", {
            children: "Online Instructors"
          })]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "col-lg-6 col-md-6 col-sm-6",
        children: /*#__PURE__*/_jsxs("div", {
          className: "single-funfacts-box",
          children: [/*#__PURE__*/_jsx("h3", {
            children: "100%"
          }), /*#__PURE__*/_jsx("p", {
            children: "Satisfaction Rate"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const eLearningSchool_FunFacts = ((/* unused pure expression or super */ null && (FunFacts_FunFacts)));
;// CONCATENATED MODULE: ./components/eLearningSchool/IntoVideo.js





const ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\eLearningSchool\\IntoVideo.js -> " + "react-modal-video"]
  }
});

const IntoVideo_IntoVideo = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []); // Popup Video

  const [isOpen, setIsOpen] = React.useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/_jsxs(React.Fragment, {
    children: [/*#__PURE__*/_jsxs("div", {
      className: "video-box",
      children: [/*#__PURE__*/_jsx("div", {
        className: "image",
        children: /*#__PURE__*/_jsx("img", {
          src: "/images/video-img1.jpg",
          className: "shadow",
          alt: "image"
        })
      }), /*#__PURE__*/_jsx(Link, {
        href: "#play-video",
        children: /*#__PURE__*/_jsx("a", {
          onClick: e => {
            e.preventDefault();
            openModal();
          },
          className: "video-btn popup-youtube",
          children: /*#__PURE__*/_jsx("i", {
            className: "flaticon-play"
          })
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "shape10",
        children: /*#__PURE__*/_jsx("img", {
          src: "/images/shape9.png",
          alt: "image"
        })
      })]
    }), display ? /*#__PURE__*/_jsx(ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "bk7McNUjWgw",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const eLearningSchool_IntoVideo = ((/* unused pure expression or super */ null && (IntoVideo_IntoVideo)));
;// CONCATENATED MODULE: ./components/eLearningSchool/FeedbackSliderWithFunFacts.js



function FeedbackSliderWithFunFacts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FeedbackSliderWithFunFacts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FeedbackSliderWithFunFacts_ownKeys(Object(source), true).forEach(function (key) { FeedbackSliderWithFunFacts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FeedbackSliderWithFunFacts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FeedbackSliderWithFunFacts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const FeedbackSliderWithFunFacts_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2963, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2963)],
    modules: ["..\\components\\eLearningSchool\\FeedbackSliderWithFunFacts.js -> " + 'react-owl-carousel3']
  }
});
const FeedbackSliderWithFunFacts_options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: 'fadeOut',
  items: 1,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
};

const FeedbackSliderWithFunFacts = () => {
  const [display, setDisplay] = React.useState(false);
  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    className: "funfacts-and-feedback-area ptb-100",
    children: [/*#__PURE__*/_jsx("div", {
      className: "container",
      children: /*#__PURE__*/_jsxs("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsxs("div", {
            className: "feedback-content",
            children: [/*#__PURE__*/_jsx("span", {
              className: "sub-title",
              children: "Distance learning"
            }), /*#__PURE__*/_jsx("h2", {
              children: "Flexible Study at Your Own Pace, According to Your Own Needs"
            }), /*#__PURE__*/_jsx("p", {
              children: "With the eDemy, you can study whenever and wherever you choose. We have students in over 175 countries and a global reputation as a pioneer in the field of flexible learning. Our teaching also means, if you travel often or need to relocate, you can continue to study wherever you go."
            }), display ? /*#__PURE__*/_jsxs(FeedbackSliderWithFunFacts_OwlCarousel, FeedbackSliderWithFunFacts_objectSpread(FeedbackSliderWithFunFacts_objectSpread({
              className: "feedback-slides owl-carousel owl-theme"
            }, FeedbackSliderWithFunFacts_options), {}, {
              children: [/*#__PURE__*/_jsxs("div", {
                className: "single-feedback-item",
                children: [/*#__PURE__*/_jsx("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                }), /*#__PURE__*/_jsxs("div", {
                  className: "client-info d-flex align-items-center",
                  children: [/*#__PURE__*/_jsx("img", {
                    src: "/images/user1.jpg",
                    className: "rounded-circle",
                    alt: "image"
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "title",
                    children: [/*#__PURE__*/_jsx("h3", {
                      children: "John Smith"
                    }), /*#__PURE__*/_jsx("span", {
                      children: "Python Developer"
                    })]
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "single-feedback-item",
                children: [/*#__PURE__*/_jsx("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                }), /*#__PURE__*/_jsxs("div", {
                  className: "client-info d-flex align-items-center",
                  children: [/*#__PURE__*/_jsx("img", {
                    src: "/images/user2.jpg",
                    className: "rounded-circle",
                    alt: "image"
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "title",
                    children: [/*#__PURE__*/_jsx("h3", {
                      children: "Sarah Taylor"
                    }), /*#__PURE__*/_jsx("span", {
                      children: "PHP Developer"
                    })]
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "single-feedback-item",
                children: [/*#__PURE__*/_jsx("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                }), /*#__PURE__*/_jsxs("div", {
                  className: "client-info d-flex align-items-center",
                  children: [/*#__PURE__*/_jsx("img", {
                    src: "/images/user1.jpg",
                    className: "rounded-circle",
                    alt: "image"
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "title",
                    children: [/*#__PURE__*/_jsx("h3", {
                      children: "David Warner"
                    }), /*#__PURE__*/_jsx("span", {
                      children: "QA Developer"
                    })]
                  })]
                })]
              })]
            })) : '', /*#__PURE__*/_jsx("div", {
              className: "feedback-info",
              children: /*#__PURE__*/_jsxs("p", {
                children: ["Not a member yet?\u200B ", /*#__PURE__*/_jsx(Link, {
                  href: "/profile-authentication",
                  children: /*#__PURE__*/_jsx("a", {
                    children: "Register Now"
                  })
                })]
              })
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsx(FunFacts, {})
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-12 col-md-12",
          children: /*#__PURE__*/_jsx(IntoVideo, {})
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape2",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape2.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape3",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape3.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape4",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape4.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape9",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape8.svg",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const eLearningSchool_FeedbackSliderWithFunFacts = ((/* unused pure expression or super */ null && (FeedbackSliderWithFunFacts)));
;// CONCATENATED MODULE: ./components/eLearningSchool/GetInstantCourses.js





const GetInstantCourses = () => {
  return /*#__PURE__*/_jsx("div", {
    className: "get-instant-courses-area",
    children: /*#__PURE__*/_jsx("div", {
      className: "container",
      children: /*#__PURE__*/_jsxs("div", {
        className: "get-instant-courses-inner-area",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/_jsx("div", {
            className: "col-lg-8 col-md-12",
            children: /*#__PURE__*/_jsxs("div", {
              className: "get-instant-courses-content",
              children: [/*#__PURE__*/_jsx("span", {
                className: "sub-title",
                children: "Get Instant Access to The Free"
              }), /*#__PURE__*/_jsx("h2", {
                children: "Self Development Course"
              }), /*#__PURE__*/_jsx("p", {
                children: "eDemy Self Development Course can assist you in bringing the significant changes in personal understanding and reshaping the confidence to achieve the best from your career! We trust that learning should be enjoyable, and only that can make substantial changes to someone!"
              }), /*#__PURE__*/_jsx(Link, {
                href: "/profile-authentication",
                children: /*#__PURE__*/_jsxs("a", {
                  className: "default-btn",
                  children: [/*#__PURE__*/_jsx("i", {
                    className: "flaticon-user"
                  }), " Start For Free ", /*#__PURE__*/_jsx("span", {})]
                })
              })]
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "col-lg-4 col-md-12",
            children: /*#__PURE__*/_jsxs("div", {
              className: "get-instant-courses-image",
              children: [/*#__PURE__*/_jsx("img", {
                src: "/images/man.jpg",
                alt: "image"
              }), /*#__PURE__*/_jsx("div", {
                className: "shape7",
                children: /*#__PURE__*/_jsx("img", {
                  src: "/images/shape4.png",
                  alt: "image"
                })
              }), /*#__PURE__*/_jsx("div", {
                className: "shape6",
                children: /*#__PURE__*/_jsx("img", {
                  src: "/images/shape6.png",
                  alt: "image"
                })
              })]
            })
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "shape5",
          children: /*#__PURE__*/_jsx("img", {
            src: "/images/shape5.png",
            alt: "image"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const eLearningSchool_GetInstantCourses = ((/* unused pure expression or super */ null && (GetInstantCourses)));
// EXTERNAL MODULE: ./components/Common/LatestNews.js
var LatestNews = __webpack_require__(4548);
;// CONCATENATED MODULE: ./components/eLearningSchool/ViewAllCourses.js





const ViewAllCourses = () => {
  return /*#__PURE__*/_jsxs("div", {
    className: "view-all-courses-area bg-fef8ef",
    children: [/*#__PURE__*/_jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/_jsxs("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsxs("div", {
            className: "view-all-courses-content",
            children: [/*#__PURE__*/_jsx("span", {
              className: "sub-title",
              children: "Distance learning"
            }), /*#__PURE__*/_jsx("h2", {
              children: "Feel Like You Are Attending Your classNamees Physically!"
            }), /*#__PURE__*/_jsx("p", {
              children: "eDemy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classNamees virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills."
            }), /*#__PURE__*/_jsx(Link, {
              href: "/courses-1",
              children: /*#__PURE__*/_jsxs("a", {
                className: "default-btn",
                children: [/*#__PURE__*/_jsx("i", {
                  className: "flaticon-agenda"
                }), " View Courses ", /*#__PURE__*/_jsx("span", {})]
              })
            })]
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/_jsx("div", {
            className: "view-all-courses-image",
            children: /*#__PURE__*/_jsx("img", {
              src: "/images/man-with-laptop.png",
              alt: "image"
            })
          })
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape1",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape1.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape9",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape8.svg",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const eLearningSchool_ViewAllCourses = ((/* unused pure expression or super */ null && (ViewAllCourses)));
;// CONCATENATED MODULE: ./components/eLearningSchool/AffordableCertification.js





const AffordableCertification = () => {
  return /*#__PURE__*/_jsxs("div", {
    className: "premium-access-area ptb-100",
    children: [/*#__PURE__*/_jsx("div", {
      className: "container",
      children: /*#__PURE__*/_jsxs("div", {
        className: "premium-access-content",
        children: [/*#__PURE__*/_jsx("span", {
          className: "sub-title",
          children: "Affordable Certification"
        }), /*#__PURE__*/_jsx("h2", {
          children: "Get Your Quality Skills Certificate Through Online Exam"
        }), /*#__PURE__*/_jsx("p", {
          children: "Students friendly pricing for the certificate programs helps individuals to get their skill certificate easier than ever!"
        }), /*#__PURE__*/_jsx(Link, {
          href: "/membership-levels",
          children: /*#__PURE__*/_jsxs("a", {
            className: "default-btn",
            children: [/*#__PURE__*/_jsx("i", {
              className: "flaticon-user"
            }), " Get Started Now ", /*#__PURE__*/_jsx("span", {})]
          })
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape3",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape3.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape4",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape4.png",
        alt: "image"
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "shape8",
      children: /*#__PURE__*/_jsx("img", {
        src: "/images/shape7.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const eLearningSchool_AffordableCertification = ((/* unused pure expression or super */ null && (AffordableCertification)));
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4264);
;// CONCATENATED MODULE: ./pages/announcements.js















const Index = ({
  courses
}) => {
  // console.log(courses)
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(LatestNews/* default */.Z, {})
  });
};

Index.getInitialProps = async () => {
  const url = `${baseUrl/* default */.Z}/api/v1/courses/homepage-courses`;
  const response = await external_axios_default().get(url); // console.log(response)

  return response.data;
};

/* harmony default export */ const announcements = (Index);

/***/ }),

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? 'https://edemy-react.envytheme.com' : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 2963:
/***/ ((module) => {

module.exports = require("react-owl-carousel3");

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1129], () => (__webpack_exec__(3690)));
module.exports = __webpack_exports__;

})();