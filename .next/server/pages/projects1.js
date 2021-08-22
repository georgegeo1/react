"use strict";
(() => {
var exports = {};
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 3175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects1)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(7251);
// EXTERNAL MODULE: ./components/SuccessStory/SuccessfulStudents.js
var SuccessfulStudents = __webpack_require__(1552);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/video1.js





const ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\video1.js -> " + "react-modal-video"]
  }
});

const Video1 = () => {
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []); // Popup Video

  const [isOpen, setIsOpen] = external_react_default().useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "success-story-area pb-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "video-box mt-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/video1.png",
              className: "shadow",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "zlwyh2OTcQk",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const video1 = (Video1);
;// CONCATENATED MODULE: ./components/video2.js





const video2_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\video2.js -> " + "react-modal-video"]
  }
});

const Video2 = () => {
  const [display, setDisplay] = external_react_default().useState(false);
  external_react_default().useEffect(() => {
    setDisplay(true);
  }, []); // Popup Video

  const [isOpen, setIsOpen] = external_react_default().useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "success-story-area pb-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "video-box mt-0",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "image",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/images/video2.png",
              className: "shadow",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(video2_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "JKl-5jottek",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const video2 = (Video2);
;// CONCATENATED MODULE: ./pages/projects1.js


 // import Navbar from '../components/_App/Navbar';


 // import Footer from '../components/_App/Footer';





const project1 = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageBanner/* default */.Z, {
      pageTitle: "\u039A\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03AD\u03C2",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "\u039A\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03AD\u03C2"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u03A0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03AE \u0395\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1: \u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF\u03C2 \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C0\u03BB\u03C5\u03BD\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5 \u03B1\u03C5\u03C4\u03BF\u03BA\u03B9\u03BD\u03AE\u03C4\u03C9\u03BD \u03BA\u03B1\u03B9 \u03C0\u03C1\u03BF\u03C3\u03BF\u03BC\u03BF\u03AF\u03C9\u03C3\u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1\u03C2 \u03C4\u03BF\u03C5 \u03BC\u03B5 P.L.C."
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2018"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AE\u03C2: \u0393\u03B9\u03CC\u03B3\u03BA\u03B1\u03C2 \u039A\u03C9\u03BD\u03C3\u03C4\u03B1\u03BD\u03C4\u03AF\u03BD\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u039A. \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(video1, {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: " \u0397 \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03AE \u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03B5\u03BA\u03C0\u03BF\u03BD\u03AE\u03B8\u03B7\u03BA\u03B5 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u0393\u03B9\u03CC\u03B3\u03BA\u03B1 \u039A\u03C9\u03BD\u03C3\u03C4\u03B1\u03BD\u03C4\u03AF\u03BD\u03BF \u03C4\u03BF \u03AD\u03C4\u03BF\u03C2 2018 \u03BA\u03B1\u03B9 \u03BC\u03B5 \u03B5\u03C0\u03B9\u03B2\u03AD\u03C0\u03BF\u03BD\u03C4\u03B1 \u03BA\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE \u03C4\u03BF\u03BD \u03BA. \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF \u039A. \u039C\u03B1\u03BD\u03AC\u03B2\u03B7."
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u0395\u03C0\u03AF\u03BB\u03B5\u03C7\u03C4\u03B7\u03BA\u03B5 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u0395\u03C0\u03B9\u03C4\u03C1\u03BF\u03C0\u03AE \u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE\u03C2 \u03C4\u03C9\u03BD \u0392\u03AD\u03BB\u03C4\u03B9\u03C3\u03C4\u03C9\u03BD \u03A0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03CE\u03BD \u0395\u03C1\u03B3\u03B1\u03C3\u03B9\u03CE\u03BD \u03BC\u03B5 \u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC, \u03C4\u03B7\u03BD \u03C0\u03C1\u03C9\u03C4\u03BF\u03C4\u03C5\u03C0\u03AF\u03B1, \u03C4\u03B7\u03BD \u03C0\u03BF\u03BB\u03C5\u03C0\u03BB\u03BF\u03BA\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C4\u03BF\u03C5 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5, \u03C4\u03B7\u03BD \u03BA\u03B1\u03B9\u03BD\u03BF\u03C4\u03BF\u03BC\u03AF\u03B1, \u03C4\u03B7 \u03BC\u03B5\u03B8\u03BF\u03B4\u03BF\u03BB\u03BF\u03B3\u03AF\u03B1/\u03C5\u03BB\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7, \u03C4\u03B7\u03BD \u03C0\u03BF\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1 \u03C4\u03BF\u03C5 \u03B3\u03C1\u03B1\u03C0\u03C4\u03BF\u03CD \u03BA\u03B5\u03B9\u03BC\u03AD\u03BD\u03BF\u03C5 \u03BA\u03B1\u03B9 \u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03BF\u03C5\u03C3\u03AF\u03B1\u03C3\u03B7, \u03BF\u03BC\u03CC\u03C6\u03C9\u03BD\u03B1, \u03C9\u03C2 \u03BC\u03B9\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B9\u03C2 4 \u03BA\u03B1\u03BB\u03CD\u03C4\u03B5\u03C1\u03B5\u03C2 \u03C0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03AD\u03C2 \u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B5\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD 4\u03B7 \u03B5\u03BA\u03B4\u03AE\u03BB\u03C9\u03C3\u03B7 \u03C0\u03B1\u03C1\u03BF\u03C5\u03C3\u03AF\u03B1\u03C3\u03B7\u03C2 \u03B2\u03AD\u03BB\u03C4\u03B9\u03C3\u03C4\u03C9\u03BD \u03C0\u03C4\u03C5\u03C7\u03B9\u03B1\u03BA\u03CE\u03BD \u03B5\u03C1\u03B3\u03B1\u03C3\u03B9\u03CE\u03BD (2018)."
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u0391\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03B7\u03BD \u03BA\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE \u03BA\u03B1\u03B9 \u03C5\u03BB\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03B5\u03BD\u03CC\u03C2 \u03C0\u03BB\u03C5\u03BD\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5 \u03B1\u03C5\u03C4\u03BF\u03BA\u03B9\u03BD\u03AE\u03C4\u03C9\u03BD \u03C3\u03C4\u03BF \u03BF\u03C0\u03AF\u03BF \u03B7 \u03BC\u03B5\u03C4\u03B1\u03BA\u03AF\u03BD\u03B7\u03C3\u03B7 \u03C4\u03C9\u03BD \u03B1\u03C5\u03C4\u03BF\u03BA\u03B9\u03BD\u03AE\u03C4\u03C9\u03BD \u03C3\u03C4\u03B1 \u03B4\u03B9\u03AC\u03C6\u03BF\u03C1\u03B1 \u03C3\u03C4\u03AC\u03B4\u03B9\u03B1 \u03C4\u03B7\u03C2 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1\u03C2 \u03C0\u03BB\u03C5\u03C3\u03AF\u03BC\u03B1\u03C4\u03BF\u03C2 \u03B3\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B1 \u03BC\u03AD\u03C3\u03C9 \u03C4\u03B7\u03C2 \u03BA\u03AF\u03BD\u03B7\u03C3\u03B7\u03C2 \u03B5\u03BD\u03CC\u03C2 \u03B9\u03BC\u03AC\u03BD\u03C4\u03B1 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2. \u039F \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C4\u03B7\u03C2 \u03BA\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 \u03BC\u03AD\u03C3\u03C9 \u03B5\u03BD\u03CC\u03C2 P.L.C. \u03C4\u03B7\u03C2 \u03B5\u03C4\u03B1\u03B9\u03C1\u03B5\u03AF\u03B1\u03C2 SIEMENS \u03BC\u03B5 C.P.U. 226."
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("u", {
        children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
          align: "center",
          children: "\u03A0\u03B5\u03C1\u03B9\u03BB\u03B7\u03C0\u03C4\u03B9\u03BA\u03AE \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03C4\u03B7\u03C2 \u03BA\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u0391\u03C1\u03C7\u03B9\u03BA\u03AC, \u03C3\u03C4\u03B7\u03BD \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF \u03C4\u03BF\u03C5 \u03C0\u03BB\u03C5\u03BD\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B5\u03BD\u03B1 \u03C6\u03B1\u03BD\u03AC\u03C1\u03B9 LED, \u03CC\u03C0\u03BF\u03C5 \u03B3\u03AF\u03BD\u03B5\u03C4\u03B1\u03B9 \u03C0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF \u03AE \u03BA\u03CC\u03BA\u03BA\u03B9\u03BD\u03BF, \u03B1\u03BD\u03AC\u03BB\u03BF\u03B3\u03B1 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03CD\u03C0\u03B1\u03C1\u03BE\u03B7 \u03AE \u03CC\u03C7\u03B9 \u03B1\u03C5\u03C4\u03BF\u03BA\u03B9\u03BD\u03AE\u03C4\u03BF\u03C5. \u039C\u03CC\u03BB\u03B9\u03C2 \u03B1\u03BD\u03AC\u03C8\u03B5\u03B9 \u03C0\u03C1\u03AC\u03C3\u03B9\u03BD\u03BF, \u03C4\u03BF \u03B1\u03C5\u03C4\u03BF\u03BA\u03AF\u03BD\u03B7\u03C4\u03BF \u03B5\u03B9\u03C3\u03AD\u03C1\u03C7\u03B5\u03C4\u03B1\u03B9 \u03C3\u03C4\u03BF \u03C4\u03BF\u03CD\u03BD\u03B5\u03BB \u03C4\u03BF\u03C5 \u03C0\u03BB\u03C5\u03BD\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5, \u03CC\u03C0\u03BF\u03C5 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC\u03B5\u03B9 \u03C4\u03B7 \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03C4\u03BF\u03C5 \u03BF \u03B9\u03BC\u03AC\u03BD\u03C4\u03B1\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF \u03BC\u03B5\u03C4\u03B1\u03BA\u03B9\u03BD\u03AE\u03C3\u03B5\u03B9 \u03C3\u03C4\u03B1 \u03B4\u03B9\u03AC\u03C6\u03BF\u03C1\u03B1 \u03C3\u03C4\u03AC\u03B4\u03B9\u03B1 \u03C4\u03B7\u03C2 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1\u03C2 \u03C0\u03BB\u03C5\u03C3\u03AF\u03BC\u03B1\u03C4\u03BF\u03C2."
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u03A0\u03C1\u03CE\u03C4\u03BF \u03C3\u03C4\u03AC\u03B4\u03B9\u03BF \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 \u03C1\u03AF\u03C8\u03B7 \u03BD\u03B5\u03C1\u03BF\u03CD \u03B3\u03B9\u03B1 \u03BA\u03AC\u03C0\u03BF\u03B9\u03BF \u03C7\u03C1\u03BF\u03BD\u03B9\u03BA\u03CC \u03B4\u03B9\u03AC\u03C3\u03C4\u03B7\u03BC\u03B1. \u03A4\u03BF \u03B5\u03C0\u03CC\u03BC\u03B5\u03BD\u03BF \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 \u03C1\u03AF\u03C8\u03B7 \u03C3\u03B1\u03C0\u03BF\u03C5\u03BD\u03B9\u03BF\u03CD. \u03A3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03B4\u03B9\u03AD\u03C1\u03C7\u03B5\u03C4\u03B1\u03B9 \u03B1\u03C0\u03CC \u03C4\u03B9\u03C2 \u03C0\u03B5\u03C1\u03B9\u03C3\u03C4\u03C1\u03BF\u03C6\u03B9\u03BA\u03AD\u03C2 \u03B2\u03BF\u03CD\u03C1\u03C4\u03C3\u03B5\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u03BA\u03B1\u03B8\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC \u03C4\u03BF\u03C5 \u03B1\u03C5\u03C4\u03BF\u03BA\u03B9\u03BD\u03AE\u03C4\u03BF\u03C5. \u039C\u03B5\u03C4\u03AC \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B7 \u03C1\u03AF\u03C8\u03B7 \u03BD\u03B5\u03C1\u03BF\u03CD \u03B3\u03B9\u03B1 \u03B4\u03B5\u03CD\u03C4\u03B5\u03C1\u03B7 \u03C6\u03BF\u03C1\u03AC \u03B3\u03B9\u03B1 \u03C4\u03BF \u03BE\u03AD\u03C0\u03BB\u03C5\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03B1\u03C5\u03C4\u03BF\u03BA\u03B9\u03BD\u03AE\u03C4\u03BF\u03C5. \u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF \u03C3\u03C4\u03AC\u03B4\u03B9\u03BF \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1 \u03C4\u03BF\u03C5 \u03C3\u03C4\u03B5\u03B3\u03BD\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03B1\u03C0\u03CC \u03C4\u03BF\u03C5\u03C2 \u03B1\u03BD\u03B5\u03BC\u03B9\u03C3\u03C4\u03AE\u03C1\u03B5\u03C2."
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u0395\u03BA\u03C4\u03CC\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u03BA\u03B1\u03BD\u03BF\u03BD\u03B9\u03BA\u03AE \u03BB\u03B5\u03B9\u03C4\u03BF\u03C5\u03C1\u03B3\u03AF\u03B1 \u03C4\u03B7\u03C2 \u03BA\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03BB\u03C5\u03BD\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5, \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B5\u03C0\u03AF\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03B7 \u03C0\u03B5\u03C1\u03AF\u03C0\u03C4\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03B2\u03BB\u03AC\u03B2\u03B7\u03C2, \u03CC\u03C0\u03BF\u03C5 \u03B1\u03BD \u03C0\u03B1\u03C1\u03BF\u03C5\u03C3\u03B9\u03B1\u03C3\u03C4\u03B5\u03AF \u03BA\u03AC\u03C0\u03BF\u03B9\u03B1 \u03B2\u03BB\u03AC\u03B2\u03B7 \u03C3\u03B5 \u03BF\u03C0\u03BF\u03B9\u03BF\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C3\u03C4\u03AC\u03B4\u03B9\u03BF \u03C4\u03B7\u03C2 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1\u03C2 \u03C0\u03BB\u03C5\u03C3\u03B9\u03BC\u03AC\u03C4\u03BF\u03C2, \u03B1\u03C5\u03C4\u03AE \u03C3\u03C4\u03B1\u03BC\u03B1\u03C4\u03AC\u03B5\u03B9 \u03BA\u03B1\u03B9 \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03B4\u03C5\u03BD\u03B1\u03C4\u03CC\u03C4\u03B7\u03C4\u03B1 \u03B5\u03BE\u03CC\u03B4\u03BF\u03C5 \u03C4\u03BF\u03C5 \u03B1\u03C5\u03C4\u03BF\u03BA\u03B9\u03BD\u03AE\u03C4\u03BF\u03C5 \u03B1\u03C0\u03BF \u03C4\u03BF \u03C4\u03BF\u03CD\u03BD\u03B5\u03BB \u03C4\u03BF\u03C5 \u03C0\u03BB\u03C5\u03BD\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5 \u03BC\u03B5 \u03B1\u03C3\u03C6\u03AC\u03BB\u03B5\u03B9\u03B1 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BD\u03B1 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03BF\u03C0\u03BF\u03B9\u03B7\u03B8\u03B5\u03AF \u03BA\u03B1\u03BC\u03B9\u03AC \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1 \u03B1\u03C0\u03CC \u03B5\u03BA\u03B5\u03AF \u03C0\u03BF\u03C5 \u03C0\u03B1\u03C1\u03BF\u03C5\u03C3\u03B9\u03AC\u03C3\u03C4\u03B7\u03BA\u03B5 \u03B7 \u03B2\u03BB\u03AC\u03B2\u03B7 \u03BA\u03B1\u03B9 \u03AD\u03C0\u03B5\u03B9\u03C4\u03B1."
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0392\u03AC\u03C3\u03B7 \u03B4\u03C1\u03AC\u03C0\u03B1\u03BD\u03BF\u03C5 \u03B5\u03BB\u03B5\u03B3\u03C7\u03CC\u03BC\u03B5\u03BD\u03B7 \u03BC\u03B5 PLC"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2003"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AE\u03C2: \u03A6\u03BF\u03C5\u03BA\u03B1\u03C1\u03AF\u03B4\u03B7\u03C2 \u039C\u03AC\u03C1\u03B9\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img1.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C0\u03BD\u03B5\u03C5\u03BC\u03B1\u03C4\u03B9\u03BA\u03CE\u03BD \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03C9\u03BD"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2011"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AE\u03C2: \u0393\u03B9\u03B1\u03C4\u03C3\u03CC\u03B3\u03BB\u03BF\u03C5 \u039A\u03C9\u03BD\u03C3\u03C4\u03B1\u03BD\u03C4\u03AF\u03BD\u03BF\u03C2, \u0396\u03B1\u03BF\u03CD\u03C1\u03B7\u03C2 \u0394\u03B7\u03BC\u03AE\u03C4\u03C1\u03B7\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img2.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03AE\u03C2 \u03C0\u03AF\u03B5\u03C3\u03B7\u03C2 \u03B4\u03B9\u03BA\u03C4\u03CD\u03BF\u03C5 \u03C5\u03B4\u03C1\u03BF\u03B4\u03CC\u03C4\u03B7\u03C3\u03B7\u03C2 \u03B5\u03BD\u03CC\u03C2 \u03BF\u03B9\u03BA\u03B9\u03C3\u03BC\u03BF\u03CD"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2011"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AE\u03C2: \u03A0\u03C1\u03BF\u03B4\u03B1\u03BD\u03AC\u03C2 \u03A6\u03CE\u03C4\u03B9\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img3.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u03A0\u03AF\u03BD\u03B1\u03BA\u03B1\u03C2 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u03BA\u03B1\u03B9 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03C9\u03BD \u03BC\u03B5 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C4\u03BF\u03C5 LOGO-Siemens"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C5 \u03A0\u03BF\u03CD\u03BB\u03B9\u03BF\u03C5, \u039D\u03B9\u03BA\u03BF\u03BB\u03AC\u03BF\u03C5- \u039D\u03B5\u03BF\u03BA\u03BB\u03AE \u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03BF\u03CD\u03B4\u03B7"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img5.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img6.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u03A1\u03BF\u03BC\u03C0\u03BF\u03C4\u03B9\u03BA\u03CC\u03C2 \u03B2\u03C1\u03B1\u03C7\u03AF\u03BF\u03BD\u03B1\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img7.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03BC\u03B5 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03C0\u03BD\u03B5\u03C5\u03BC\u03B1\u03C4\u03B9\u03BA\u03CE\u03BD \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03C9\u03BD"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2011"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u0393\u03B9\u03B1\u03C4\u03C3\u03CC\u03B3\u03BB\u03BF\u03C5 \u039A\u03C9\u03BD/\u03BD\u03BF\u03C2, \u0396\u03B1\u03BF\u03CD\u03C1\u03B7\u03C2 \u0394\u03B7\u03BC\u03AE\u03C4\u03C1\u03B7\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u039A. \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(video2, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0391\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03BF \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B4\u03B9\u03AC\u03C4\u03C1\u03B7\u03C3\u03B7\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2012"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u03A0\u03B1\u03BB\u03B7\u03BF\u03B3\u03B9\u03AC\u03BD\u03BD\u03B7\u03C2 \u039A\u03C9\u03BD\u03C3\u03C4\u03B1\u03BD\u03C4\u03AF\u03BD\u03BF\u03C2, \u03A3\u03B1\u03BD\u03C3\u03B1\u03C1\u03AF\u03B4\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img8.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img9.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C3\u03C4\u03AC\u03B8\u03BC\u03B7\u03C2 \u03C5\u03B3\u03C1\u03CE\u03BD"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img10.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u03A3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03C3\u03C5\u03BB\u03BB\u03BF\u03B3\u03AE\u03C2 \u03B1\u03BD\u03B1\u03BA\u03C5\u03BA\u03BB\u03CE\u03C3\u03B9\u03BC\u03C9\u03BD \u03C5\u03BB\u03B9\u03BA\u03CE\u03BD \u03C3\u03B5 \u03BF\u03B9\u03BA\u03B9\u03C3\u03BC\u03CC, \u03BC\u03AD\u03C3\u03C9 GSM \u03BA\u03B1\u03B9 \u03C7\u03C1\u03AE\u03C3\u03B7 \u03B3\u03B5\u03C9\u03B3\u03C1\u03B1\u03C6\u03B9\u03BA\u03CE\u03BD \u03C3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03B9\u03CE\u03BD"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2010"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u03A7\u03B1\u03C4\u03B6\u03B7\u03B4\u03B7\u03BC\u03B7\u03C4\u03AF\u03BF\u03C5 \u0394\u03B7\u03BC\u03AE\u03C4\u03C1\u03B9\u03BF\u03C2, \u039D\u03C4\u03B9\u03BF\u03CD\u03B4\u03B7\u03C2 \u0395\u03C5\u03C3\u03C4\u03AC\u03B8\u03B9\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img11.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0391\u03BD\u03B5\u03BB\u03BA\u03C5\u03C3\u03C4\u03AE\u03C1\u03B1\u03C2 \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BC\u03B1\u03B3\u03BD\u03AE\u03C4\u03B7 \u03BC\u03B5 \u03C7\u03C1\u03AE\u03C3\u03B7 PLC"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2010"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u0393\u03B5\u03C9\u03C1\u03B3\u03B1\u03C4\u03B6\u03B9\u03AC\u03C2 \u0393. \u039A\u03C9\u03BD\u03C3\u03C4\u03B1\u03BD\u03C4\u03AF\u03BD\u03BF\u03C2, \u039A\u03B1\u03B4\u03C1\u03AD\u03C6\u03B7\u03C2 \u03A7. \u039A\u03C9\u03BD\u03C3\u03C4\u03B1\u03BD\u03C4\u03AF\u03BD\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img12.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03BA\u03B1\u03B9 \u03BA\u03B1\u03C4\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03B1\u03C5\u03C4\u03CC\u03BC\u03B1\u03C4\u03B7\u03C2 \u03B2\u03B1\u03C6\u03AE\u03C2, \u03B5\u03BB\u03B5\u03B3\u03C7\u03CC\u03BC\u03B5\u03BD\u03BF \u03B1\u03C0\u03CC \u03C0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03BF \u03BB\u03BF\u03B3\u03B9\u03BA\u03CC \u03B5\u03BB\u03B5\u03B3\u03BA\u03C4\u03AE"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2010"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u039D\u03B9\u03BA\u03CC\u03BB\u03B1\u03BF\u03C2 \u039B\u03B1\u03BC\u03C0\u03C1\u03AC\u03BA\u03B7\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img13.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u03A0\u03C1\u03BF\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1\u03C4\u03B9\u03B6\u03CC\u03BC\u03B5\u03BD\u03BF \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03BA\u03B1\u03B9 \u03B2\u03B1\u03C6\u03AE\u03C2 \u03B1\u03BD\u03C4\u03B9\u03BA\u03B5\u03B9\u03BC\u03AD\u03BD\u03C9\u03BD \u03BC\u03AD\u03C3\u03C9 PLC"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0388\u03C4\u03BF\u03C2: 2011"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u0391\u03C5\u03B3\u03B5\u03C1\u03B9\u03BD\u03AC\u03BA\u03B7\u03C2 \u0391\u03C0\u03CC\u03C3\u03C4\u03BF\u03BB\u03BF\u03C2, \u039A\u03CC\u03C0\u03B1\u03BD\u03BF\u03C2 \u0399\u03C9\u03AC\u03BD\u03BD\u03B7\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img14.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03B1\u03BD\u03B5\u03BB\u03BA\u03C5\u03C3\u03C4\u03AE\u03C1\u03B1 \u03BC\u03B5 P.L.C. \u03BA\u03B1\u03B9 \u03BC\u03B5 \u03BC\u03B9\u03BA\u03C1\u03BF\u03B5\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u03A3\u03B9\u03B4\u03AD\u03C1\u03B7\u03C2 \u0394\u03B7\u03BC\u03AE\u03C4\u03C1\u03B9\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img16.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03B1\u03BD\u03B5\u03BB\u03BA\u03C5\u03C3\u03C4\u03AE\u03C1\u03B1 \u03BC\u03B5 P.L.C. \u03BA\u03B1\u03B9 \u03BC\u03B5 \u03BC\u03B9\u03BA\u03C1\u03BF\u03B5\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u03A3\u03B9\u03B4\u03AD\u03C1\u03B7\u03C2 \u0394\u03B7\u03BC\u03AE\u03C4\u03C1\u03B9\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img16.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u03A3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03C0\u03C1\u03BF\u03CE\u03B8\u03B7\u03C3\u03B7\u03C2 \u03B4\u03BF\u03C7\u03AF\u03C9\u03BD \u03BA\u03B1\u03B9 \u03C4\u03B1\u03BE\u03B9\u03BD\u03CC\u03BC\u03B7\u03C3\u03B7\u03C2 \u03B1\u03C5\u03C4\u03CE\u03BD"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u03A7\u03B1\u03C1\u03B1\u03BB\u03B1\u03BC\u03C0\u03AF\u03B4\u03B7\u03C2 \u0391\u03BD\u03B1\u03C3\u03C4\u03AC\u03C3\u03B9\u03BF\u03C2-\u0391\u03BD\u03AD\u03C3\u03C4\u03B7\u03C2, \u03A0\u03B1\u03BD\u03B1\u03B3\u03B9\u03C9\u03C4\u03AF\u03B4\u03B7\u03C2 \u0399\u03BF\u03C1\u03B4\u03AC\u03BD\u03B7\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img17.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img18.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u03C4\u03B1\u03B9\u03BD\u03B9\u03BF\u03B4\u03C1\u03CC\u03BC\u03C9\u03BD"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img19.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u03A4\u03C1\u03BF\u03C6\u03BF\u03B4\u03BF\u03C3\u03AF\u03B1 \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03CE\u03BD \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03CE\u03BD \u03BC\u03B5 \u03C5\u03B4\u03C1\u03BF\u03B3\u03CC\u03BD\u03BF"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u03A6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AD\u03C2: \u03A0\u03AC\u03BA\u03B1 \u0399\u03C9\u03AC\u03BD\u03BD\u03B7, \u03A4\u03B5\u03C1\u03C0\u03B5\u03B6\u03AF\u03B4\u03B7 \u0394\u03B9\u03BF\u03B3\u03AD\u03BD\u03B7"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "\u0395\u03B9\u03C3\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2: \u039C\u03B1\u03BD\u03AC\u03B2\u03B7\u03C2 \u03A7\u03C1\u03AE\u03C3\u03C4\u03BF\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img20.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img21.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
  });
};

/* harmony default export */ const projects1 = (project1);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198,1552], () => (__webpack_exec__(3175)));
module.exports = __webpack_exports__;

})();