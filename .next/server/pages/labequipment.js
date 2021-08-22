"use strict";
(() => {
var exports = {};
exports.id = 5711;
exports.ids = [5711];
exports.modules = {

/***/ 2186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7251);
/* harmony import */ var _components_Common_SubscribeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4007);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6302);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);


 // import Navbar from '../components/_App/Navbar';


 // import Footer from '../components/_App/Footer';



const images = ['images/lab/lab1.jpg', 'images/lab/lab2.jpg', 'images/lab/lab3.jpg', 'images/lab/lab4.jpg', 'images/lab/lab5.jpg', 'images/lab/lab6.jpg', 'images/lab/lab7.jpg', 'images/lab/lab8.jpg', 'images/lab/lab9.jpg', 'images/lab/lab10.jpg', 'images/lab/lab11.jpg', 'images/lab/lab12.jpg', 'images/lab/lab13.jpg', 'images/lab/lab14.jpg', 'images/lab/lab21.jpg', 'images/lab/lab22.jpg', 'images/lab/lab23.jpg', 'images/lab/lab24.jpg', 'images/lab/lab25.jpg', 'images/lab/lab26.jpg'];

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
  const [isOpenImage, setIsOpenImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      pageTitle: "\u0395\u03BE\u03BF\u03C0\u03BB\u03B9\u03C3\u03BC\u03CC\u03C2 \u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "\u0395\u03BE\u03BF\u03C0\u03BB\u03B9\u03C3\u03BC\u03CC\u03C2 \u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      align: "center",
      children: "\u03A3\u0391\u0395 \u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      align: "justify",
      children: "\u03A4\u03BF \u03B5\u03C1\u03B3\u03B1\u03C3\u03C4\u03B7\u03C1\u03B9\u03B1\u03BA\u03CC \u03BC\u03AC\u03B8\u03B7\u03BC\u03B1\u03C4\u03B1 \u03C4\u03C9\u03BD \u03A3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF\u03C5 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 (\u03A3\u0391\u0395) \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B5\u03BE\u03BF\u03C0\u03BB\u03B9\u03C3\u03BC\u03CC \u03BC\u03B5 \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03BF\u03CD\u03C2 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03AD\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03BA\u03AC\u03B8\u03B5 \u03BF\u03BC\u03AC\u03B4\u03B1 \u03C6\u03BF\u03B9\u03C4\u03B7\u03C4\u03CE\u03BD. \u0393\u03B9\u03B1 \u03C4\u03B7\u03BD \u03B4\u03B9\u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AE \u03C4\u03C9\u03BD \u03C0\u03B5\u03B9\u03C1\u03B1\u03BC\u03AC\u03C4\u03C9\u03BD \u03C7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 \u03C4\u03BF \u03BC\u03B1\u03B8\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03CC \u03C0\u03B1\u03BA\u03AD\u03C4\u03BF Matlab \u2013 Simulink, \u03AD\u03BD\u03B1 \u03B4\u03C5\u03BD\u03B1\u03C4\u03CC \u03B5\u03C1\u03B3\u03B1\u03BB\u03B5\u03AF\u03BF \u03C3\u03C4\u03B7\u03BD \u03B5\u03BA\u03C0\u03B1\u03AF\u03B4\u03B5\u03C5\u03C3\u03B7."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      align: "center",
      children: "\u0392\u03B9\u03BF\u03BC\u03B7\u03C7\u03B1\u03BD\u03B9\u03BA\u03BF\u03AF \u0391\u03C5\u03C4\u03BF\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03BF\u03AF"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      align: "justify",
      children: "\u03A4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03B5\u03BE\u03BF\u03BC\u03BF\u03AF\u03C9\u03C3\u03B7\u03C2 Automation Studio \u03BA\u03B1\u03B9 PLC."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      align: "center",
      children: "\u0391\u03C5\u03C4\u03BF\u03BC\u03B1\u03C4\u03B9\u03C3\u03BC\u03BF\u03AF \u03BC\u03B5 \u03A0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03BF\u03C5\u03C2 \u03B5\u03BB\u03B5\u03B3\u03BA\u03C4\u03AD\u03C2 PLC"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "gallery-area pt-100 pb-70",
      children: [isOpenImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_4___default()), {
        mainSrc: images[photoIndex],
        nextSrc: images[(photoIndex + 1) % images.length],
        prevSrc: images[(photoIndex + images.length - 1) % images.length],
        onCloseRequest: () => setIsOpenImage(false),
        onMovePrevRequest: () => setPhotoIndex((photoIndex + images.length - 1) % images.length),
        onMoveNextRequest: () => setPhotoIndex((photoIndex + 1) % images.length)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(0);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab1.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(1);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab2.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(2);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab3.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(3);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab4.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(4);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab5.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(5);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab6.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(6);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab7.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(7);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab8.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(8);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab9.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(8);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab10.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(8);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab11.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(8);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab12.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(8);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab13.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(8);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab14.jpg",
                    alt: "image"
                  })
                })
              })
            })
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      align: "center",
      children: "\u0395\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03A3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u0391\u03C5\u03C4\u03BF\u03BC\u03AC\u03C4\u03BF\u03C5 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "gallery-area pt-100 pb-70",
      children: [isOpenImage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_4___default()), {
        mainSrc: images[photoIndex],
        nextSrc: images[(photoIndex + 1) % images.length],
        prevSrc: images[(photoIndex + images.length - 1) % images.length],
        onCloseRequest: () => setIsOpenImage(false),
        onMovePrevRequest: () => setPhotoIndex((photoIndex + images.length - 1) % images.length),
        onMoveNextRequest: () => setPhotoIndex((photoIndex + 1) % images.length)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(0);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab21.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(1);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab22.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(2);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab23.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(3);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab24.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(4);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab25.jpg",
                    alt: "image"
                  })
                })
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-4 col-md-6 col-sm-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "single-gallery-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                href: "#popup",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "popup-btn",
                  onClick: e => {
                    e.preventDefault();
                    setIsOpenImage(true);
                    setPhotoIndex(5);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/lab/lab26.jpg",
                    alt: "image"
                  })
                })
              })
            })
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_SubscribeForm__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

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

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6302:
/***/ ((module) => {

module.exports = require("react-image-lightbox");

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198,4007], () => (__webpack_exec__(2186)));
module.exports = __webpack_exports__;

})();