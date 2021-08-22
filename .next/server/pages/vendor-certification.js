"use strict";
(() => {
var exports = {};
exports.id = 3338;
exports.ids = [3338];
exports.modules = {

/***/ 4929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ vendor_certification)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/MainBanner.js





const MainBanner = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "banner-section",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 col-md-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "banner-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "Project Management Certification Training "
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse."
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/profile-authentication",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "default-btn",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "flaticon-user"
                }), " Join For Free ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-7 col-md-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "banner-image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/banner-img1.png",
              alt: "image"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "banner-shape4",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/banner-shape4.png",
                alt: "image"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "banner-shape5",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/banner-shape5.png",
                alt: "image"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "banner-shape6",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/banner-shape6.png",
                alt: "image"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "banner-shape7",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/banner-shape7.png",
                alt: "image"
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const VendorCertificationTraining_MainBanner = (MainBanner);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/Partner.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2963, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2963)],
    modules: ["..\\components\\VendorCertificationTraining\\Partner.js -> " + 'react-owl-carousel3']
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
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "partner-area ptb-70",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: display ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(OwlCarousel, _objectSpread(_objectSpread({
        className: "partner-slides owl-carousel owl-theme"
      }, options), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/partner/partner1.png",
            alt: "image"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/partner/partner2.png",
            alt: "image"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/partner/partner3.png",
            alt: "image"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/partner/partner4.png",
            alt: "image"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/partner/partner5.png",
            alt: "image"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/partner/partner6.png",
            alt: "image"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-partner-item",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/partner/partner4.png",
            alt: "image"
          })
        })]
      })) : ''
    })
  });
};

/* harmony default export */ const VendorCertificationTraining_Partner = (Partner);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/SloganArea.js




const SloganArea = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "slogan-area mtb-100 bg-fffaf3 ptb-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-5 col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "slogan-image",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/man2.jpg",
              alt: "image"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-7 col-md-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "slogan-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "Our project management training equips learners with the knowledge and discipline required to effectively plan, manage, execute, and control projects regardless of industry. You'll learn all about the most popular project management methodologies that help organizations deliver successful projects."
            }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "William James"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "sub-title",
              children: "CEO at eDemy"
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "divider2"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "divider3"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape2",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape2.png",
        alt: "image"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape3",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape3.png",
        alt: "image"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape4",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape4.png",
        alt: "image"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape9",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape8.svg",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const VendorCertificationTraining_SloganArea = (SloganArea);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/PopularCourses.js





const PopularCourses = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "courses-area pt-100 pb-70",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "section-title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sub-title",
          children: "Go at your own pace"
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Popular Project Management Courses"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-courses-box without-boxshadow",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-image",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/single-courses-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "d-block image",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/courses/courses9.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "fav",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-heart"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "price shadow",
                children: "$39"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-content",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "course-author d-flex align-items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/user1.jpg",
                  className: "rounded-circle",
                  alt: "image"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Alex Morgan"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/single-courses-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "PRINCE2\xAE Practitioner Certification Training"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "courses-box-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-agenda"
                  }), " 15 Lessons"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-people"
                  }), " 145 Students"]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-courses-box without-boxshadow active",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-image",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/single-courses-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "d-block image",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/courses/courses10.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "fav",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-heart"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "price shadow",
                children: "$49"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-content",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "course-author d-flex align-items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/user2.jpg",
                  className: "rounded-circle",
                  alt: "image"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Sarah Taylor"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/single-courses-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "PMI-RMP\xAE Certification Training"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "courses-box-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-agenda"
                  }), " 20 Lessons"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-people"
                  }), " 100 Students"]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-courses-box without-boxshadow",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-image",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/single-courses-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "d-block image",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/courses/courses11.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "fav",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-heart"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "price shadow",
                children: "$59"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-content",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "course-author d-flex align-items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/user3.jpg",
                  className: "rounded-circle",
                  alt: "image"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "David Warner"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/single-courses-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "PRINCE2\xAE Foundation Certification Training"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "courses-box-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-agenda"
                  }), " 20 Lessons"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-people"
                  }), " 150 Students"]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-12 col-md-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "courses-info",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/courses-2",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "default-btn",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "flaticon-user"
                }), " View All Courses ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Get into details now?\u200B ", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/courses-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "PM Master\u2019s Program"
                })
              })]
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const VendorCertificationTraining_PopularCourses = (PopularCourses);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/AboutArea.js





const ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\VendorCertificationTraining\\AboutArea.js -> " + "react-modal-video"]
  }
});

const AboutArea = () => {
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []); // Popup Video

  const [isOpen, setIsOpen] = external_react_default().useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "about-area-two bg-fffaf3 pt-70 pb-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-5 col-md-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "about-content-box",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "sub-title",
                children: "Distance Learning"
              }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: "Build Your Project Management Skills Online, Anytime"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Want to learn and earn PDUs or CEUs on your schedule \u2014 anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses."
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  children: "Grow your knowledge and your opportunities with thought leadership, training and tools."
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/contact",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "link-btn",
                  children: "Explore Learning"
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-7 col-md-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "about-video-box",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "image",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/about-img5.jpg",
                  alt: "image"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#play-video",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  onClick: e => {
                    e.preventDefault();
                    openModal();
                  },
                  className: "video-btn popup-youtube",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-play"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "shape10",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/shape9.png",
                  alt: "image"
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "divider"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shape3",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/shape3.png",
          alt: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shape4",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/shape4.png",
          alt: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "shape2",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/shape2.png",
          alt: "image"
        })
      }), display ? /*#__PURE__*/jsx_runtime_.jsx(ModalVideo, {
        channel: "youtube",
        isOpen: !isOpen,
        videoId: "bk7McNUjWgw",
        onClose: () => setIsOpen(!isOpen)
      }) : ""]
    })
  });
};

/* harmony default export */ const VendorCertificationTraining_AboutArea = (AboutArea);
// EXTERNAL MODULE: ./components/Common/FunFacts.js
var FunFacts = __webpack_require__(9841);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/PopularCoursesTwo.js





const PopularCoursesTwo = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "courses-area pt-100 pb-70",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "section-title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sub-title",
          children: "Go at your own pace"
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Project Management Master's Program"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-courses-box bg-color",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-image",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/single-courses-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "d-block image",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/courses/courses6.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "fav",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-heart"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "price shadow",
                children: "$39"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/single-courses-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "PMP\xAE Plus"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "courses-box-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-agenda"
                  }), " 15 Lessons"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-people"
                  }), " 145 Students"]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-courses-box bg-color",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-image",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/single-courses-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "d-block image",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/courses/courses7.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "fav",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-heart"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "price shadow",
                children: "$49"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/single-courses-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "PMP\xAE Renewal Pack"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "courses-box-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-agenda"
                  }), " 20 Lessons"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-people"
                  }), " 100 Students"]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-courses-box bg-color",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-image",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/single-courses-2",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "d-block image",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/images/courses/courses8.jpg",
                    alt: "image"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "fav",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-heart"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "price shadow",
                children: "$59"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "courses-content",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/single-courses-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Digital Project Manager"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "courses-box-footer d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-agenda"
                  }), " 20 Lessons"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "flaticon-people"
                  }), " 150 Students"]
                })]
              })]
            })]
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape16",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape15.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const VendorCertificationTraining_PopularCoursesTwo = (PopularCoursesTwo);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/CourseAdvisor.js



function CourseAdvisor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CourseAdvisor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CourseAdvisor_ownKeys(Object(source), true).forEach(function (key) { CourseAdvisor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CourseAdvisor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CourseAdvisor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CourseAdvisor_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2963, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2963)],
    modules: ["..\\components\\VendorCertificationTraining\\CourseAdvisor.js -> " + 'react-owl-carousel3']
  }
});
const CourseAdvisor_options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 1
    },
    992: {
      items: 2
    }
  }
};

const CourseAdvisor = () => {
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "advisor-area bg-f9f9f9 pt-100",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "section-title",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sub-title",
          children: "Instructor"
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Course Advisor"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        })]
      }), display ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(CourseAdvisor_OwlCarousel, CourseAdvisor_objectSpread(CourseAdvisor_objectSpread({
        className: "advisor-slides owl-carousel owl-theme"
      }, CourseAdvisor_options), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-advisor-box",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row align-items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-4 col-md-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "advisor-image",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/advisor/advisor1.jpg",
                  alt: "image"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-8 col-md-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "advisor-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "profile.html",
                    children: "William James"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "sub-title",
                  children: "Project Management Expert"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua."
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
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
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
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "profile.html",
                    children: "Sarah Taylor"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "sub-title",
                  children: "Agile Project Expert"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua."
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
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "single-advisor-box",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row align-items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-4 col-md-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "advisor-image",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/advisor/advisor3.jpg",
                  alt: "image"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-8 col-md-8",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "advisor-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "profile.html",
                    children: "James Andy"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "sub-title",
                  children: "QA Project Expert"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol aliqua."
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
        })]
      })) : '']
    })
  });
};

/* harmony default export */ const VendorCertificationTraining_CourseAdvisor = (CourseAdvisor);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/PremiumAccess.js





const PremiumAccess = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "premium-access-area bg-f9f9f9 ptb-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "premium-access-content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sub-title",
          children: "Go at your own pace"
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Give their limitless potential unlimited access"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/membership-levels",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "default-btn",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "flaticon-user"
            }), " Give Premium Access ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape3",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape3.png",
        alt: "image"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape4",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape4.png",
        alt: "image"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape8",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape7.png",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const VendorCertificationTraining_PremiumAccess = (PremiumAccess);
// EXTERNAL MODULE: ./components/Common/Testimonials.js
var Testimonials = __webpack_require__(4941);
;// CONCATENATED MODULE: ./components/VendorCertificationTraining/ViewAllCourses.js





const ViewAllCourses = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "view-all-courses-area-two ptb-70 bg-fef8ef",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "view-all-courses-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "sub-title",
              children: "Distance learning"
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: "Get ahead with Learning Paths. Stay Sharp."
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: "With The Open University you can study whenever and wherever you choose. We have students in over 128 countries, and a global reputation as a pioneer in the field of flexible learning. Our flexible teaching also means, if you travel often or need to relocate, you can continue to study wherever you go."
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/courses-2",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "default-btn",
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "flaticon-agenda"
                }), " View All Courses ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-6 col-md-12",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "view-all-courses-image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/woman-with-book.png",
              alt: "image"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "shape11",
              "data-speed": "0.06",
              "data-revert": "true",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/shape10.png",
                alt: "image"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "shape12",
              "data-speed": "0.06",
              "data-revert": "true",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/images/shape11.png",
                alt: "image"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape1",
      "data-speed": "0.06",
      "data-revert": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape1.png",
        alt: "image"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "shape9",
      "data-speed": "0.06",
      "data-revert": "true",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/shape8.svg",
        alt: "image"
      })
    })]
  });
};

/* harmony default export */ const VendorCertificationTraining_ViewAllCourses = (ViewAllCourses);
// EXTERNAL MODULE: ./components/Common/LatestNews.js
var LatestNews = __webpack_require__(4548);
// EXTERNAL MODULE: ./components/Common/SubscribeForm.js
var SubscribeForm = __webpack_require__(4007);
;// CONCATENATED MODULE: ./pages/vendor-certification.js


 // import Navbar from '../components/_App/Navbar';













 // import Footer from '../components/_App/Footer';

const Index2 = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_MainBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_Partner, {}), /*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_SloganArea, {}), /*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_PopularCourses, {}), /*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_AboutArea, {}), /*#__PURE__*/jsx_runtime_.jsx(FunFacts/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_PopularCoursesTwo, {}), /*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_CourseAdvisor, {}), /*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_PremiumAccess, {}), /*#__PURE__*/jsx_runtime_.jsx(Testimonials/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(VendorCertificationTraining_ViewAllCourses, {}), /*#__PURE__*/jsx_runtime_.jsx(LatestNews/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(SubscribeForm/* default */.Z, {})]
  });
};

/* harmony default export */ const vendor_certification = (Index2);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4007,1700,1129], () => (__webpack_exec__(4929)));
module.exports = __webpack_exports__;

})();