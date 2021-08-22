(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 9071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__(9614);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(6533);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/_App/GoTop.js



const GoTop = ({
  scrollStepInPx,
  delayInMs
}) => {
  const [thePosition, setThePosition] = external_react_default().useState(false);
  const timeoutRef = external_react_default().useRef(null);
  external_react_default().useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop,
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "bx bx-chevron-up"
      })
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: renderGoTopIcon()
  });
};

/* harmony default export */ const _App_GoTop = (GoTop);
// EXTERNAL MODULE: ./utils/ActiveLink.js
var ActiveLink = __webpack_require__(5652);
// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(2898);
;// CONCATENATED MODULE: ./components/_App/SearchForm.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SearchForm = () => {
  const [search, setSearch] = external_react_default().useState({
    search: ''
  });

  const handleOnChange = e => {
    const {
      name,
      value
    } = e.target;
    setSearch(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    })); // console.log("dsddsd")
  };

  const handleSearch = e => {
    e.preventDefault();
    router_default().push({
      pathname: '/courses/search',
      query: {
        q: search.search
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    className: "search-box",
    onSubmit: handleSearch,
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "text",
      className: "input-search",
      placeholder: "Search for anything",
      name: "search",
      value: search.search,
      onChange: handleOnChange
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "submit",
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "flaticon-search"
      })
    })]
  });
};

/* harmony default export */ const _App_SearchForm = (SearchForm);
;// CONCATENATED MODULE: ./components/_App/Navbar.js







const Navbar = ({
  user
}) => {
  // console.log(user)
  const [menu, setMenu] = external_react_default().useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  external_react_default().useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });
  const isAdmin = user && user.role === 'admin';
  const isTeacher = user && user.role === 'teacher';
  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "navbar",
      className: "navbar-area",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "card",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/banner-img4.png",
          alt: "image"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "edemy-nav",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-fluid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "navbar navbar-expand-lg navbar-light",
            children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: toggleNavbar,
                className: "navbar-brand",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/logo.png",
                  alt: "logo"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              onClick: toggleNavbar,
              className: classTwo,
              type: "button",
              "data-toggle": "collapse",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar top-bar"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar middle-bar"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar bottom-bar"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classOne,
              id: "navbarSupportedContent",
              children: [/*#__PURE__*/jsx_runtime_.jsx(_App_SearchForm, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "navbar-nav",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "nav-item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/",
                    activeClassName: "active",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      onClick: e => e.preventDefault(),
                      className: "nav-link",
                      children: ["Home ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "bx bx-chevron-down"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "dropdown-menu",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "nav-link",
                          children: "\u0391\u03C1\u03C7\u03B9\u03BA\u03AE \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/announcements",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u0391\u03BD\u03B1\u03BA\u03BF\u03B9\u03BD\u03CE\u03C3\u03B5\u03B9\u03C2"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "nav-item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      onClick: e => e.preventDefault(),
                      className: "nav-link",
                      children: ["\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "bx bx-chevron-down"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "dropdown-menu",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/labinfo",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u0393\u03B5\u03BD\u03B9\u03BA\u03AC"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/labequipment",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u0395\u03BE\u03BF\u03C0\u03BB\u03B9\u03C3\u03BC\u03CC\u03C2 \u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/labprofile",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB \u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/labinstructor",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u039F \u0394\u03B9\u03B4\u03AC\u03C3\u03BA\u03C9\u03BD"
                        })
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "nav-item",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          onClick: e => e.preventDefault(),
                          className: "nav-link",
                          children: ["\u0395\u03BE\u03B5\u03C4\u03AC\u03C3\u03B5\u03B9\u03C2 ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bx-chevron-down"
                          })]
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                        className: "dropdown-menu",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/examschedule",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u03A0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u0395\u03BE\u03B5\u03C4\u03AC\u03C3\u03B5\u03C9\u03BD"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/examsregulation",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 \u0395\u03BE\u03B5\u03C4\u03AC\u03C3\u03B5\u03C9\u03BD"
                            })
                          })
                        })]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "nav-item",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          onClick: e => e.preventDefault(),
                          className: "nav-link",
                          children: ["\u03A7\u03B5\u03B9\u03BC\u03B5\u03C1\u03B9\u03BD\u03CC ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bx-chevron-down"
                          })]
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                        className: "dropdown-menu",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/fallsemester1",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u0391\u03C5\u03C4\u03BF\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03BF\u03AF \u03BC\u03B5 \u03A0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03BF\u03C5\u03C2 \u03B5\u03BB\u03B5\u03B3\u03BA\u03C4\u03AD\u03C2 PLC"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/fallsemester2",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u0395\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03A3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u0391\u03C5\u03C4\u03BF\u03BC\u03AC\u03C4\u03BF\u03C5 \u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C5"
                            })
                          })
                        })]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "nav-item",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          onClick: e => e.preventDefault(),
                          className: "nav-link",
                          children: ["\u0395\u03B1\u03C1\u03B9\u03BD\u03CC ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bx-chevron-down"
                          })]
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                        className: "dropdown-menu",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/springsemester1",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u03A3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1 \u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF\u03C5 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/springsemester2",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u0392\u03B9\u03BF\u03BC\u03B7\u03C7\u03B1\u03BD\u03B9\u03BA\u03BF\u03AF \u0391\u03C5\u03C4\u03BF\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03BF\u03AF"
                            })
                          })
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/labevaluation",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u039A\u03B1\u03BD\u03BF\u03BD\u03B9\u03C3\u03BC\u03CC\u03C2 - \u0391\u03BE\u03B9\u03BF\u03BB\u03CC\u03B3\u03B7\u03C3\u03B7"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/labschedule",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u03A0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u0394\u03B9\u03B4\u03B1\u03C3\u03BA\u03B1\u03BB\u03AF\u03B1\u03C2"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "nav-item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      onClick: e => e.preventDefault(),
                      className: "nav-link",
                      children: ["\u03A0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03AE", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "bx bx-chevron-down"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "dropdown-menu",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "nav-item",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          onClick: e => e.preventDefault(),
                          className: "nav-link",
                          children: ["\u03A0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03AD\u03C2 \u0395\u03C1\u03B3\u03B1\u03C3\u03AF\u03B5\u03C2 ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "bx bx-chevron-down"
                          })]
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                        className: "dropdown-menu",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/subjects",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u03A0\u03C1\u03BF\u03C4\u03B5\u03B9\u03BD\u03CC\u03BC\u03B5\u03BD\u03B1 \u0398\u03AD\u03BC\u03B1\u03C4\u03B1"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/dissertations  ",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u03A4\u03C1\u03AD\u03C7\u03BF\u03C5\u03C3\u03B5\u03C2 \u03A0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03AD\u03C2 (\u03B5\u03BE\u03B1\u03BC\u03AE\u03BD\u03BF\u03C5)"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/projects1  ",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u039A\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03AD\u03C2"
                            })
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                          className: "nav-item",
                          children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                            href: "/projects2  ",
                            activeClassName: "active",
                            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                              onClick: toggleNavbar,
                              className: "nav-link",
                              children: "\u03A0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03AD\u03C2 \u03A0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03C9\u03BD \u0395\u03C4\u03CE\u03BD"
                            })
                          })
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/internship",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u03A0\u03C1\u03B1\u03BA\u03C4\u03B9\u03BA\u03AE \u0386\u03C3\u03BA\u03B7\u03C3\u03B7"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "nav-item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      onClick: e => e.preventDefault(),
                      className: "nav-link",
                      children: ["\u0394\u03B9\u03AC\u03C6\u03BF\u03C1\u03B1", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "bx bx-chevron-down"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "dropdown-menu",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/conferences",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u03A3\u03C5\u03BD\u03AD\u03B4\u03C1\u03B9\u03B1"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/formercolleagues ",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u03A0\u03C1\u03CE\u03B7\u03BD \u03A3\u03C5\u03BD\u03B5\u03C1\u03B3\u03AC\u03C4\u03B5\u03C2"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/visits",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u0394\u03B9\u03B1\u03BB\u03AD\u03BE\u03B5\u03B9\u03C2"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/schooltrips ",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u0395\u03BA\u03C0\u03B1\u03B9\u03B4\u03B5\u03C5\u03C4\u03B9\u03BA\u03AD\u03C2 \u0395\u03BA\u03B4\u03C1\u03BF\u03BC\u03AD\u03C2"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/labexercises",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u03A0\u03B1\u03C1\u03BF\u03C5\u03C3\u03AF\u03B1\u03C3\u03B7 \u0391\u03C3\u03BA\u03AE\u03C3\u03B5\u03C9\u03BD"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/notes",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u03A3\u03B7\u03BC\u03B5\u03B9\u03CE\u03C3\u03B5\u03B9\u03C2"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/blog",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Blog"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/faq",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "FAQs"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/documents",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "\u0388\u03BD\u03C4\u03C5\u03C0\u03B1"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/contact",
                    activeClassName: "active",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      onClick: toggleNavbar,
                      className: "nav-link",
                      children: "\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AF\u03B1"
                    })
                  })
                }), (user && isTeacher || user && isAdmin) && /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/teacher/dashboard",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "nav-link",
                      children: "Teacher Dashboard"
                    })
                  })
                }), user && isAdmin && /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/admin/dashboard",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "nav-link",
                      children: "Dashboard"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "others-option d-flex align-items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "option-item"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "option-item",
                  children: user ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "user-dropdown",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                      href: "/",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        onClick: e => e.preventDefault(),
                        className: "default-btn",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "flaticon-user"
                        }), " ", user.name, " ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/my-courses",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "My Courses"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/my-profile",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "My Profile"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/edit-profile",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "Edit Profile"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/edit-password",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "Edit Password"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "nav-link",
                            onClick: e => {
                              e.preventDefault();
                              (0,auth/* handleLogout */.hY)();
                            },
                            children: "Logout"
                          })
                        })
                      })]
                    })]
                  }) : /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/authentication",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      className: "default-btn",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-user"
                      }), " Login/Register ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
                    })
                  })
                })]
              })]
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const _App_Navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/_App/Footer.js





const Footer = () => {
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: "footer-area",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-footer-widget",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "logo",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/logo2.png",
                  alt: "logo"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF \u0395\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03CE\u03BD \u03A3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF\u03C5 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03A0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03C9\u03BD \u039B\u03BF\u03B3\u03B9\u03BA\u03CE\u03BD \u0395\u03BB\u03B5\u03B3\u03BA\u03C4\u03CE\u03BD "
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                children: "\u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2 \u039A. \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2"
              })
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
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-footer-widget pl-5",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "\u0395\u03BE\u03B5\u03C1\u03B5\u03C5\u03BD\u03AE\u03C3\u03C4\u03B5"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "footer-links-list",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/announcements",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u0391\u03BD\u03B1\u03BA\u03BF\u03B9\u03BD\u03CE\u03C3\u03B5\u03B9\u03C2"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/labprofile",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB \u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/visits",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u0394\u03B9\u03B1\u03BB\u03AD\u03BE\u03B5\u03B9\u03C2"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/blog",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Blog"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/labinstructor",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u039F \u0394\u03B9\u03B4\u03AC\u03C3\u03BA\u03C9\u03BD"
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-footer-widget",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "\u03A0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03AF\u03B5\u03C2"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "footer-links-list",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/contact",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AF\u03B1"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://eudoxus.gr/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u0395\u03CD\u03B4\u03BF\u03BE\u03BF\u03C2"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://www.iee.ihu.gr/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "IEE IHU"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "http://pithia.teithe.gr/unistudent/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "PITHIA"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://moodle.teithe.gr/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Moodle TEITHE"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/documents",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "\u0388\u03BD\u03C4\u03C5\u03C0\u03B1"
                  })
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-3 col-md-6 col-sm-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "single-footer-widget",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              children: "Address"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "footer-contact-info",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "bx bx-map"
                }), "\u0391\u03BB\u03B5\u03BE\u03AC\u03BD\u03B4\u03C1\u03B5\u03B9\u03BF \u03A4.\u0395.\u0399. \u0398\u03B5\u03C3\u03C3\u03B1\u03BB\u03BF\u03BD\u03AF\u03BA\u03B7\u03C2, \u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF \u03943"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "bx bx-phone-call"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "tel:+44587154756",
                  children: "+30 2310 013629, +30 2310 013092"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "bx bx-envelope"
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "mailto:hello@edemy.com",
                  children: "plc.esae.ihu@gmail.com, manavis@el.teithe.gr"
                })]
              })]
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "footer-bottom-area",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "bx bx-copyright"
              }), currentYear, " All Rights Reserved"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-6 col-md-6"
          })]
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "lines",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "line"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "line"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "line"
      })]
    })]
  });
};

/* harmony default export */ const _App_Footer = (Footer);
;// CONCATENATED MODULE: ./components/_App/StudentNavbar.js







const StudentNavbar = ({
  user
}) => {
  // console.log(user)
  const [menu, setMenu] = external_react_default().useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  external_react_default().useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });
  const isAdmin = user && user.role === 'admin';
  const isTeacher = user && user.role === 'teacher';
  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "navbar",
      className: "navbar-area",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "edemy-nav admin-nav",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-fluid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "navbar navbar-expand-lg navbar-light",
            children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: toggleNavbar,
                className: "navbar-brand",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/logo.png",
                  alt: "logo"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              onClick: toggleNavbar,
              className: classTwo,
              type: "button",
              "data-toggle": "collapse",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar top-bar"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar middle-bar"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar bottom-bar"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classOne,
              id: "navbarSupportedContent",
              children: [/*#__PURE__*/jsx_runtime_.jsx(_App_SearchForm, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "navbar-nav",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "nav-item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/",
                    activeClassName: "active",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      onClick: e => e.preventDefault(),
                      className: "nav-link",
                      children: ["Home ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "bx bx-chevron-down"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "dropdown-menu",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "eLearning School"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-2",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Vendor Certification Training"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-3",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Online Training School"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-4",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Distance Learning"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-5",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Language School"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-6",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Modern Schooling"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-7",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Yoga Training"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-8",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Health Coaching"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-9",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Kindergaten"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/courses",
                    activeClassName: "active",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      onClick: toggleNavbar,
                      className: "nav-link",
                      children: "Courses"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/become-a-teacher",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "nav-link",
                      children: "Become A Teacher"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "others-option d-flex align-items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "option-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cart-btn",
                    children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                      href: "/cart",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "flaticon-shopping-cart"
                        }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                          children: "3"
                        })]
                      })
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "option-item",
                  children: user ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "user-dropdown",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                      href: "/",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        onClick: e => e.preventDefault(),
                        className: "default-btn",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "flaticon-user"
                        }), " ", user.name, " ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/my-courses",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "My Courses"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/my-profile",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "My Profile"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/edit-profile",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "Edit Profile"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/edit-password",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "Edit Password"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "nav-link",
                            onClick: e => {
                              e.preventDefault();
                              (0,auth/* handleLogout */.hY)();
                            },
                            children: "Logout"
                          })
                        })
                      })]
                    })]
                  }) : /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/authentication",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      className: "default-btn",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-user"
                      }), " Login/Register ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
                    })
                  })
                })]
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const _App_StudentNavbar = (StudentNavbar);
;// CONCATENATED MODULE: ./components/_App/AdminNavbar.js







const AdminNavbar = ({
  user
}) => {
  // console.log(user)
  const [menu, setMenu] = external_react_default().useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  external_react_default().useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });
  const isAdmin = user && user.role === 'admin';
  const isTeacher = user && user.role === 'teacher';
  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "navbar",
      className: "navbar-area",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "edemy-nav admin-nav",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-fluid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "navbar navbar-expand-lg navbar-light",
            children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: toggleNavbar,
                className: "navbar-brand",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/logo.png",
                  alt: "logo"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              onClick: toggleNavbar,
              className: classTwo,
              type: "button",
              "data-toggle": "collapse",
              "aria-expanded": "false",
              "aria-label": "Toggle navigation",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar top-bar"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar middle-bar"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "icon-bar bottom-bar"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classOne,
              id: "navbarSupportedContent",
              children: [/*#__PURE__*/jsx_runtime_.jsx(_App_SearchForm, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "navbar-nav",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "nav-item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/",
                    activeClassName: "active",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      onClick: e => e.preventDefault(),
                      className: "nav-link",
                      children: ["Home ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "bx bx-chevron-down"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "dropdown-menu",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "eLearning School"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-2",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Vendor Certification Training"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-3",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Online Training School"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-4",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Distance Learning"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-5",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Language School"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-6",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Modern Schooling"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-7",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Yoga Training"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-8",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Health Coaching"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      className: "nav-item",
                      children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                        href: "/index-9",
                        activeClassName: "active",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          onClick: toggleNavbar,
                          className: "nav-link",
                          children: "Kindergaten"
                        })
                      })
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/courses",
                    activeClassName: "active",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      onClick: toggleNavbar,
                      className: "nav-link",
                      children: "Courses"
                    })
                  })
                }), (user && isTeacher || user && isAdmin) && /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/teacher/dashboard",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "nav-link",
                      children: "Teacher Dashboard"
                    })
                  })
                }), user && isAdmin && /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/admin/dashboard",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "nav-link",
                      children: "Dashboard"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "others-option d-flex align-items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "option-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "cart-btn",
                    children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                      href: "/cart",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "flaticon-shopping-cart"
                        }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                          children: "3"
                        })]
                      })
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "option-item",
                  children: user ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "user-dropdown",
                    children: [/*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                      href: "/",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        onClick: e => e.preventDefault(),
                        className: "default-btn",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                          className: "flaticon-user"
                        }), " ", user.name, " ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      className: "dropdown-menu",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/my-courses",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "My Courses"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/my-profile",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "My Profile"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/edit-profile",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "Edit Profile"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/user/edit-password",
                          activeClassName: "active",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            onClick: toggleNavbar,
                            className: "nav-link",
                            children: "Edit Password"
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                          href: "/",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "nav-link",
                            onClick: e => {
                              e.preventDefault();
                              (0,auth/* handleLogout */.hY)();
                            },
                            children: "Logout"
                          })
                        })
                      })]
                    })]
                  }) : /*#__PURE__*/jsx_runtime_.jsx(ActiveLink/* default */.Z, {
                    href: "/authentication",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                      className: "default-btn",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "flaticon-user"
                      }), " Login/Register ", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
                    })
                  })
                })]
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const _App_AdminNavbar = (AdminNavbar);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/_App/Preloader.js






const Preloader = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2866176108" + " " + "preloader",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-2866176108" + " " + "loader",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-2866176108" + " " + "loadingio-spinner-reload",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-2866176108" + " " + "ldio",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-2866176108",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-2866176108"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-2866176108"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-2866176108"
              })]
            })
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2866176108",
      children: [".preloader.jsx-2866176108{top:0;left:0;right:0;bottom:0;z-index:999999999999;position:fixed;background-color:rgba(255,255,255,0.85);}", ".preloader.jsx-2866176108 .loader.jsx-2866176108{top:50%;left:50%;position:absolute;-webkit-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}", ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108{-webkit-animation:ldio 1s infinite linear;-webkit-animation:ldio-jsx-2866176108 1s infinite linear;animation:ldio-jsx-2866176108 1s infinite linear;-webkit-transform-origin:50px 50px;-webkit-transform-origin:50px 50px;-ms-transform-origin:50px 50px;transform-origin:50px 50px;}", ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108{position:absolute;}", ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(1),.preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(2){width:75px;height:75px;border:5px solid;border-radius:50%;border-color:transparent #fe4a55 #fe4a55 #fe4a55;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;-webkit-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:50px 50px;-webkit-transform-origin:50px 50px;-ms-transform-origin:50px 50px;transform-origin:50px 50px;}", ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(1){-webkit-transform:rotate(45deg) translate(12.5px,12.5px);-webkit-transform:rotate(45deg) translate(12.5px,12.5px);-ms-transform:rotate(45deg) translate(12.5px,12.5px);transform:rotate(45deg) translate(12.5px,12.5px);}", ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(2){-webkit-transform:rotate(0deg) translate(12.5px,12.5px);-webkit-transform:rotate(0deg) translate(12.5px,12.5px);-ms-transform:rotate(0deg) translate(12.5px,12.5px);transform:rotate(0deg) translate(12.5px,12.5px);}", ".preloader.jsx-2866176108 .ldio.jsx-2866176108>div.jsx-2866176108 div.jsx-2866176108:nth-child(3){width:0;height:0;border:12px solid;border-color:transparent transparent transparent #fe4a55;-webkit-transform:translate(50px,6.5px);-webkit-transform:translate(50px,6.5px);-ms-transform:translate(50px,6.5px);transform:translate(50px,6.5px);}", ".preloader.jsx-2866176108 .loadingio-spinner-reload.jsx-2866176108{width:100px;height:100px;overflow:hidden;display:inline-block;}", ".preloader.jsx-2866176108 .ldio.jsx-2866176108{width:100%;height:100%;position:relative;-webkit-transform:translateZ(0) scale(1);-webkit-transform:translateZ(0) scale(1);-ms-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1);-webkit-backface-visibility:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:0 0;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;}", "@-webkit-keyframes ldio{0%.jsx-2866176108{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%.jsx-2866176108{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@-webkit-keyframes ldio-jsx-2866176108{0%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes ldio-jsx-2866176108{0%{-webkit-transform:rotate(0);-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]
    })]
  });
};

/* harmony default export */ const _App_Preloader = (Preloader);
;// CONCATENATED MODULE: ./components/_App/Layout.js














const Layout = ({
  children,
  user
}) => {
  const [loader, setLoader] = external_react_default().useState(true);
  external_react_default().useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  router_default().events.on('routeChangeStart', () => {
    setLoader(true);
  });
  router_default().events.on('routeChangeComplete', () => {
    setLoader(false);
  });
  router_default().events.on('routeChangeError', () => {
    setLoader(false);
  });
  const isStudent = user && user.role === 'student';
  const isAdmin = user && user.role === 'admin';
  const isTeacher = user && user.role === 'teacher';
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF \u0395\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03CE\u03BD \u03A3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF\u03C5 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03A0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03C9\u03BD \u039B\u03BF\u03B3\u03B9\u03BA\u03CE\u03BD \u0395\u03BB\u03B5\u03B3\u03BA\u03C4\u03CE\u03BD"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "eDemy - React Next Online Courses & Education Template"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "og:title",
        property: "og:title",
        content: "eDemy - React Next Online Courses & Education Template"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "twitter:card",
        content: "eDemy - React Next Online Courses & Education Template"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "canonical",
        href: "https://edemy-react.envytheme.com/"
      })]
    }), loader && /*#__PURE__*/jsx_runtime_.jsx(_App_Preloader, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {
      position: "top-left",
      reverseOrder: false
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_toast_notifications_.ToastProvider, {
      placement: "bottom-left",
      autoDismissTimeout: 10000,
      autoDismiss: true,
      children: [isStudent ? /*#__PURE__*/jsx_runtime_.jsx(_App_StudentNavbar, {
        user: user
      }) : isAdmin || isTeacher ? /*#__PURE__*/jsx_runtime_.jsx(_App_AdminNavbar, {
        user: user
      }) : /*#__PURE__*/jsx_runtime_.jsx(_App_Navbar, {
        user: user
      }), children, /*#__PURE__*/jsx_runtime_.jsx(_App_GoTop, {
        scrollStepInPx: "100",
        delayInMs: "10.50"
      }), /*#__PURE__*/jsx_runtime_.jsx(_App_Footer, {})]
    })]
  });
};

/* harmony default export */ const _App_Layout = (Layout);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__(5998);
// EXTERNAL MODULE: ./utils/baseUrl.js
var baseUrl = __webpack_require__(4264);
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const MyApp = ({
  Component,
  pageProps
}) => {
  // console.log(pageProps)
  return /*#__PURE__*/jsx_runtime_.jsx(_App_Layout, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  }));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const {
    token
  } = (0,external_nookies_.parseCookies)(ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!token) {
    // if a user not logged in then user can't access those pages
    const isProtectedRoute = ctx.pathname === '/become-a-teacher' || ctx.pathname === '/my-courses' || ctx.pathname === '/teacher/courses';

    if (isProtectedRoute) {
      (0,auth/* redirectUser */.a0)(ctx, '/authentication');
    }
  } else {
    // if a user logged in then user can't access those pages
    const ifLoggedIn = ctx.pathname === '/authentication' || ctx.pathname === '/reset-password';

    if (ifLoggedIn) {
      (0,auth/* redirectUser */.a0)(ctx, '/');
    }

    try {
      const payload = {
        headers: {
          Authorization: token
        }
      };
      const url = `${baseUrl/* default */.Z}/api/v1/auth/account`;
      const response = await external_axios_default().get(url, payload);
      const user = response.data; // console.log(user)
      // If user status disabled then user autometically logged out

      if (!user || !user.active) {
        (0,external_nookies_.destroyCookie)(ctx, "token");
      }

      pageProps.user = user;
    } catch (error) {
      // console.error("Error getting current user", error);
      //invalid token
      // console.log(error)
      (0,external_nookies_.destroyCookie)(ctx, "token");
    }
  } // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time


  return {
    pageProps
  };
};

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jc": () => (/* binding */ handleLogin),
/* harmony export */   "a0": () => (/* binding */ redirectUser),
/* harmony export */   "hY": () => (/* binding */ handleLogout)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const handleLogin = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('token', token);
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push(location);
  }
};
const handleLogout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove('token');
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/');
};

/***/ }),

/***/ 4264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl =  true ? 'https://edemy-react.envytheme.com' : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseUrl);

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 6155:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 5998:
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6533:
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-toast");

/***/ }),

/***/ 9614:
/***/ ((module) => {

"use strict";
module.exports = require("react-toast-notifications");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,5652], () => (__webpack_exec__(9071)));
module.exports = __webpack_exports__;

})();