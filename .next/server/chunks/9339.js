"use strict";
exports.id = 9339;
exports.ids = [9339];
exports.modules = {

/***/ 9339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);





const ModalVideo = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\SuccessStory\\IntroVideo.js -> " + "react-modal-video"]
  }
});

const IntroVideo = () => {
  const [display, setDisplay] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    setDisplay(true);
  }, []); // Popup Video

  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "success-story-area pb-100",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "video-box mt-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "image",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "/images/success-story.jpg",
              className: "shadow",
              alt: "image"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: "#play-video",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              onClick: e => {
                e.preventDefault();
                openModal();
              },
              className: "video-btn popup-youtube",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: "flaticon-play"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "shape10",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "/images/shape9.png",
              alt: "image"
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "shape2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: "/images/shape2.png",
          alt: "image"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "shape3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: "/images/shape3.png",
          alt: "image"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "shape4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: "/images/shape4.png",
          alt: "image"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "shape9",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: "/images/shape8.svg",
          alt: "image"
        })
      })]
    }), display ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "bk7McNUjWgw",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroVideo);

/***/ })

};
;