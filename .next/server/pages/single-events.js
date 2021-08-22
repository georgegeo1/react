"use strict";
(() => {
var exports = {};
exports.id = 6625;
exports.ids = [6625];
exports.modules = {

/***/ 3594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ single_events)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(7251);
;// CONCATENATED MODULE: ./components/SingleEvents/EventsTimer.js




const EventsTimer = () => {
  const [days, setDays] = external_react_default().useState('');
  const [hours, setHours] = external_react_default().useState('');
  const [minutes, setMinutes] = external_react_default().useState('');
  const [seconds, setSeconds] = external_react_default().useState('');
  external_react_default().useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2022 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);

    if (hours < "10") {
      hours = "0" + hours;
    }

    if (minutes < "10") {
      minutes = "0" + minutes;
    }

    if (seconds < "10") {
      seconds = "0" + seconds;
    }

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "timer",
    className: "flex-wrap d-flex justify-content-center",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "days",
      className: "align-items-center flex-column d-flex justify-content-center",
      children: [days, " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Days"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "hours",
      className: "align-items-center flex-column d-flex justify-content-center",
      children: [hours, " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Hours"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "minutes",
      className: "align-items-center flex-column d-flex justify-content-center",
      children: [minutes, " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Minutes"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "seconds",
      className: "align-items-center flex-column d-flex justify-content-center",
      children: [seconds, " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "Seconds"
      })]
    })]
  });
};

/* harmony default export */ const SingleEvents_EventsTimer = (EventsTimer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/SingleEvents/EventsSidebar.js





const EventsSidebar = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "events-details-info",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "info",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "price",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "d-flex justify-content-between align-items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Cost"
          }), "$149"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "d-flex justify-content-between align-items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Total Slot"
          }), "1500"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "d-flex justify-content-between align-items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Booked Slot"
          }), "350"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "d-flex justify-content-between align-items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Pay With"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "payment-method",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/payment/payment1.png",
              className: "shadow",
              alt: "image"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/payment/payment2.png",
              className: "shadow",
              alt: "image"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/payment/payment3.png",
              className: "shadow",
              alt: "image"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/payment/payment4.png",
              className: "shadow",
              alt: "image"
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "btn-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "#",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "default-btn",
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "flaticon-user"
          }), " Book Now ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["You must ", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "login"
          })
        }), " before register event."]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "events-share",
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
  });
};

/* harmony default export */ const SingleEvents_EventsSidebar = (EventsSidebar);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/SingleEvents/EventParticipants.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2963, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2963)],
    modules: ["..\\components\\SingleEvents\\EventParticipants.js -> " + 'react-owl-carousel3']
  }
});
const options = {
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
      items: 2
    },
    992: {
      items: 3
    }
  }
};

const EventParticipants = () => {
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "advisor-area bg-f9f9f9 ptb-100",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "section-title",
        children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "Event Participants"
        })
      }), display ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(OwlCarousel, _objectSpread(_objectSpread({
        className: "advisor-slides-two owl-carousel owl-theme"
      }, options), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "single-advisor-item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "advisor-image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/advisor/advisor4.jpg",
              alt: "image"
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
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "advisor-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "James Andy"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Project Management Expert"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "single-advisor-item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "advisor-image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/advisor/advisor5.jpg",
              alt: "image"
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
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "advisor-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Jassica Hische"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "Illustrator Expert"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "single-advisor-item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "advisor-image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/advisor/advisor6.jpg",
              alt: "image"
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
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "advisor-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Alister Cock"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "QA Project Expert"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "single-advisor-item",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "advisor-image",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/advisor/advisor7.jpg",
              alt: "image"
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
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "advisor-content",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "#",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Lina Ninja"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "QA Project Expert"
            })]
          })]
        })]
      })) : '']
    })
  });
};

/* harmony default export */ const SingleEvents_EventParticipants = (EventParticipants);
;// CONCATENATED MODULE: ./pages/single-events.js


 // import Navbar from '../components/_App/Navbar';

 // import Footer from '../components/_App/Footer';





const SingleEvents = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageBanner/* default */.Z, {
      pageTitle: "Global Conference on Business Management and Economics",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "Global Conference on Business Management and Economics"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "events-details-area pb-100",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "events-details-image",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/events/events-details.jpg",
          alt: "image"
        }), /*#__PURE__*/jsx_runtime_.jsx(SingleEvents_EventsTimer, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-8 col-md-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "events-details-header",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "bx bx-calendar"
                  }), "Wed, 20 May, 2020"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "bx bx-map"
                  }), "Wed, 20 May, 2020"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "bx bx-time"
                  }), "Wed, 20 May, 2020"]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "events-details-location",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                id: "map",
                children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105913.76628212207!2d-117.46956773183814!3d33.946138126927174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dca6df7ff47dbb%3A0xf7a1d705135e0ae8!2sRiverside%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1592581354634!5m2!1sen!2sbd"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "events-details-desc",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "About The Event"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "Where the event?"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
              }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                children: "Who this event is for?"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx(SingleEvents_EventsSidebar, {})
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(SingleEvents_EventParticipants, {})]
  });
};

/* harmony default export */ const single_events = (SingleEvents);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198], () => (__webpack_exec__(3594)));
module.exports = __webpack_exports__;

})();