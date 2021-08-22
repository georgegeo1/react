"use strict";
(() => {
var exports = {};
exports.id = 1821;
exports.ids = [1821];
exports.modules = {

/***/ 8087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ labexercises)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Common/PageBanner.js
var PageBanner = __webpack_require__(7251);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/Video3.js





const ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video3.js -> " + "react-modal-video"]
  }
});

const Video3 = () => {
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
              src: "/images/img01.png",
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
      videoId: "JhG4J6qhxZ80",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video3 = (Video3);
;// CONCATENATED MODULE: ./components/Video4.js





const Video4_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video4.js -> " + "react-modal-video"]
  }
});

const Video4 = () => {
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
              src: "/images/img02.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video4_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "7f8bzoTxwMc",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video4 = (Video4);
;// CONCATENATED MODULE: ./components/Video5.js





const Video5_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video5.js -> " + "react-modal-video"]
  }
});

const Video5 = () => {
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
              src: "/images/img03.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video5_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "ca1qsOEGkOo",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video5 = (Video5);
;// CONCATENATED MODULE: ./components/Video6.js





const Video6_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video6.js -> " + "react-modal-video"]
  }
});

const Video6 = () => {
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
              src: "/images/img004.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video6_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "FMwpibsPBlY",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video6 = (Video6);
;// CONCATENATED MODULE: ./components/Video7.js





const Video7_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video7.js -> " + "react-modal-video"]
  }
});

const Video7 = () => {
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
              src: "/images/img05.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video7_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "gHoFKGWz-bI",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video7 = (Video7);
;// CONCATENATED MODULE: ./components/Video8.js





const Video8_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video8.js -> " + "react-modal-video"]
  }
});

const Video8 = () => {
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
              src: "/images/img06.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video8_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "Znoi77Klln4",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video8 = (Video8);
;// CONCATENATED MODULE: ./components/Video9.js





const Video9_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video9.js -> " + "react-modal-video"]
  }
});

const Video9 = () => {
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
              src: "/images/img07.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video9_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "sghIfEefycI",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video9 = (Video9);
;// CONCATENATED MODULE: ./components/Video10.js





const Video10_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video10.js -> " + "react-modal-video"]
  }
});

const Video10 = () => {
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
              src: "/images/img10.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video10_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "hB5VfM_FgVM",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video10 = (Video10);
;// CONCATENATED MODULE: ./components/Video11.js





const Video11_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video11.js -> " + "react-modal-video"]
  }
});

const Video11 = () => {
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
              src: "/images/img09.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video11_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "s9uMyShzLcQM",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video11 = (Video11);
;// CONCATENATED MODULE: ./components/Video12.js





const Video12_ModalVideo = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6616, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6616)],
    modules: ["..\\components\\Video12.js -> " + "react-modal-video"]
  }
});

const Video12 = () => {
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
              src: "/images/img010.png",
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
    }), display ? /*#__PURE__*/jsx_runtime_.jsx(Video12_ModalVideo, {
      channel: "youtube",
      isOpen: !isOpen,
      videoId: "Typ1NjAk7IU",
      onClose: () => setIsOpen(!isOpen)
    }) : ""]
  });
};

/* harmony default export */ const components_Video12 = (Video12);
;// CONCATENATED MODULE: ./pages/labexercises.js


 // import Navbar from '../components/_App/Navbar';

 // import Footer from '../components/_App/Footer';













const s = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageBanner/* default */.Z, {
      pageTitle: "\u0395\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03A3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u0391\u03C5\u03C4\u03BF\u03BC\u03AC\u03C4\u03BF\u03C5 \u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C5 (\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE\u03C2)",
      homePageUrl: "/",
      homePageText: "Home",
      activePageText: "\u0395\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2 \u03A3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u0391\u03C5\u03C4\u03BF\u03BC\u03AC\u03C4\u03BF\u03C5 \u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C5 (\u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE\u03C2)"
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "\u03A0\u03B1\u03C1\u03BF\u03C5\u03C3\u03AF\u03B1\u03C3\u03B7 \u0391\u03C3\u03BA\u03AE\u03C3\u03B5\u03C9\u03BD"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 1: \u03A3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img81.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u03A3\u03BA\u03BF\u03C0\u03CC\u03C2 \u03C4\u03B7\u03C2 \u03C0\u03B1\u03C1\u03BF\u03CD\u03C3\u03B7\u03C2 \u03C0\u03B5\u03B9\u03C1\u03B1\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE\u03C2 \u03AC\u03C3\u03BA\u03B7\u03C3\u03B7\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B7 \u03BC\u03B5\u03BB\u03AD\u03C4\u03B7 \u03C4\u03BF\u03C5 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1\u03C2 \u03C3\u03B5 \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03BA\u03B9\u03BD\u03B7\u03C4\u03AE\u03C1\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03BF\u03CD\u03C2 \u03C1\u03B5\u03CD\u03BC\u03B1\u03C4\u03BF\u03C2. \u0398\u03B1 \u03BC\u03B5\u03BB\u03B5\u03C4\u03B7\u03B8\u03B5\u03AF \u03C4\u03BF \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03BA\u03B9\u03BD\u03B7\u03C4\u03AE\u03C1\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03BF\u03CD\u03C2 \u03C1\u03B5\u03CD\u03BC\u03B1\u03C4\u03BF\u03C2 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03B1\u03BD\u03B1\u03C4\u03C1\u03BF\u03C6\u03BF\u03B4\u03CC\u03C4\u03B7\u03C3\u03B7 \u03B4\u03B7\u03BB\u03B1\u03B4\u03AE \u03AD\u03BD\u03B1 \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B1\u03BD\u03BF\u03B9\u03C7\u03C4\u03BF\u03CD \u03B2\u03C1\u03CC\u03B3\u03C7\u03BF\u03C5. \u0391\u03BD\u03C4\u03B9\u03BA\u03B5\u03B9\u03BC\u03B5\u03BD\u03B9\u03BA\u03CC\u03C2 \u03C3\u03C4\u03CC\u03C7\u03BF\u03C2 \u03C4\u03B7\u03C2 \u03AC\u03C3\u03BA\u03B7\u03C3\u03B7\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BF \u03C0\u03C1\u03BF\u03C3\u03B4\u03B9\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C4\u03B7\u03C2 \u03C4\u03B1\u03C7\u03CD\u03C4\u03B7\u03C4\u03B1\u03C2 \u03C4\u03BF\u03C5 \u03BA\u03B9\u03BD\u03B7\u03C4\u03AE\u03C1\u03B1 \u03C4\u03CC\u03C3\u03BF \u03BA\u03B1\u03C4\u03AC \u03C4\u03B7\u03BD \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03BA\u03AC\u03C0\u03BF\u03B9\u03BF\u03C5 \u03C6\u03BF\u03C1\u03C4\u03AF\u03BF\u03C5 \u03C3\u03C4\u03BF\u03BD \u03AC\u03BE\u03BF\u03BD\u03B1 \u03C4\u03BF\u03C5 \u03BA\u03B9\u03BD\u03B7\u03C4\u03AE\u03C1\u03B1 \u03CC\u03C3\u03BF \u03BA\u03B1\u03B9 \u03CC\u03C4\u03B1\u03BD \u03C3\u03B5 \u03B1\u03C5\u03C4\u03CC\u03BD \u03B4\u03B5\u03BD \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03B6\u03B5\u03C4\u03B1\u03B9 \u03BA\u03B1\u03BD\u03AD\u03BD\u03B1 \u03C6\u03BF\u03C1\u03C4\u03AF\u03BF. \u0398\u03B1 \u03B5\u03BE\u03B1\u03C7\u03B8\u03BF\u03CD\u03BD \u03C3\u03C5\u03BD\u03B5\u03C0\u03CE\u03C2 \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03AC\u03C3\u03BC\u03B1\u03C4\u03B1 \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC \u03C4\u03BF\u03C5 \u03BA\u03B9\u03BD\u03B7\u03C4\u03AE\u03C1\u03B1 \u03C3\u03B1\u03BD \u03B1\u03BD\u03BF\u03B9\u03C7\u03C4\u03CC \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03B1\u03BD\u03B1\u03B6\u03B7\u03C4\u03B7\u03B8\u03B5\u03AF \u03B7 \u03C3\u03C7\u03AD\u03C3\u03B7 \u03BC\u03B5\u03C4\u03B1\u03BE\u03CD \u03C4\u03C9\u03BD \u03C3\u03C4\u03C1\u03BF\u03C6\u03CE\u03BD \u03C4\u03BF\u03C5 \u03AC\u03BE\u03BF\u03BD\u03B1 \u03C4\u03BF\u03C5 \u03BA\u03B9\u03BD\u03B7\u03C4\u03AE\u03C1\u03B1 \u03BA\u03B1\u03B9 \u03C4\u03B7\u03C2 \u03C4\u03AC\u03C3\u03B7\u03C2 \u03C4\u03B7\u03C2 \u03C4\u03B1\u03C7\u03BF\u03B3\u03B5\u03BD\u03BD\u03BD\u03AE\u03C4\u03C1\u03B9\u03B1\u03C2."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video3, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 2: \u03A3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C3\u03C6\u03B1\u03AF\u03C1\u03B1\u03C2 \u03C3\u03B5 \u03B4\u03BF\u03BA\u03CC"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img82.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u03A3\u03BA\u03BF\u03C0\u03CC\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03B5\u03B9\u03C1\u03AC\u03BC\u03B1\u03C4\u03BF\u03C2 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03BD\u03B1 \u03B5\u03BB\u03B5\u03B3\u03C7\u03B8\u03B5\u03AF \u03B7 \u03C3\u03C6\u03B1\u03AF\u03C1\u03B1 \u03C3\u03C4\u03BF \u03B4\u03BF\u03BA\u03CC \u03BC\u03B5 \u03B4\u03B9\u03AC\u03C6\u03BF\u03C1\u03BF\u03C5\u03C2 \u03C4\u03C1\u03CC\u03C0\u03BF\u03C5\u03C2: (P),(PI),(PID)."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video4, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 3: \u0388\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2 \u03B4\u03C1\u03BF\u03BC\u03AD\u03B1 \u03C3\u03B5 \u03AC\u03BE\u03BF\u03BD\u03B1 \u03BC\u03B5 \u03C7\u03C1\u03AE\u03C3\u03B7 P.L.C."
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img83.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u03A3\u03C4\u03B7\u03BD \u03C0\u03B1\u03C1\u03BF\u03CD\u03C3\u03B1 \u03B5\u03C1\u03B3\u03B1\u03C3\u03C4\u03B7\u03C1\u03B9\u03B1\u03BA\u03AE \u03AC\u03C3\u03BA\u03B7\u03C3\u03B7 \u03B8\u03B1 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03BF\u03C0\u03BF\u03B9\u03B7\u03B8\u03B5\u03AF \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 \u03C4\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2 \u03B5\u03BD\u03CC\u03C2 \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03B9\u03BA\u03BF\u03CD \u03B4\u03C1\u03BF\u03BC\u03AD\u03B1, \u03C0\u03BF\u03C5 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B4\u03CE\u03C3\u03B5\u03B9 \u03B8\u03B5\u03BC\u03B5\u03BB\u03B9\u03CE\u03B4\u03B7 \u03B5\u03C6\u03CC\u03B4\u03B9\u03B1 \u03BA\u03B1\u03B9 \u03B3\u03BD\u03CE\u03C3\u03B5\u03B9\u03C2 \u03C3\u03C4\u03BF \u03C6\u03BF\u03B9\u03C4\u03B7\u03C4\u03AE \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03AC \u03BC\u03B5 \u03C4\u03BF PLC (Programmable Logic Controllers) \u03C3\u03C4\u03B9\u03C2 \u03C3\u03B7\u03BC\u03B5\u03C1\u03B9\u03BD\u03AD\u03C2 \u03B2\u03B9\u03BF\u03BC\u03B7\u03C7\u03B1\u03BD\u03B9\u03BA\u03AD\u03C2 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AD\u03C2."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video5, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 4: \u03A3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C3\u03C4\u03AC\u03B8\u03BC\u03B7\u03C2 \u03C5\u03B3\u03C1\u03CE\u03BD (\u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 1\u03B7\u03C2 \u03C4\u03AC\u03BE\u03B7\u03C2)"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img833.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u039F \u03C3\u03C0\u03BF\u03C5\u03B4\u03B1\u03C3\u03C4\u03AE\u03C2 \u03B8\u03B1 \u03B5\u03BE\u03BF\u03B9\u03BA\u03B5\u03B9\u03C9\u03B8\u03B5\u03AF \u03BC\u03B5 \u03C4\u03B1 \u03A3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1 1\u03B7\u03C2 \u03C4\u03AC\u03BE\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03B1\u03C0\u03BF\u03BA\u03C4\u03AE\u03C3\u03B5\u03B9 \u03B2\u03B1\u03C3\u03B9\u03BA\u03AD\u03C2 \u03B3\u03BD\u03CE\u03C3\u03B5\u03B9\u03C2 \u03C0\u03AC\u03BD\u03C9 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AC \u03BA\u03B1\u03B9 \u03C4\u03B7 \u03C7\u03C1\u03BF\u03BD\u03B9\u03BA\u03AE \u03B1\u03C0\u03CC\u03BA\u03C1\u03B9\u03C3\u03B7 \u03B5\u03BD\u03CC\u03C2 \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03B1\u03BD\u03AC\u03BB\u03BF\u03B3\u03B1 \u03BC\u03B5 \u03C4\u03B7\u03BD \u03B5\u03AF\u03C3\u03BF\u03B4\u03CC \u03C4\u03BF\u03C5."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video6, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 5: \u0395\u03C0\u03AF\u03BB\u03C5\u03C3\u03B7 \u03B4\u03B9\u03B1\u03C6\u03BF\u03C1\u03B9\u03BA\u03CE\u03BD \u03B5\u03BE\u03B9\u03C3\u03CE\u03C3\u03B5\u03C9\u03BD \u03BA\u03B1\u03B9 \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03AE \u03C3\u03C4\u03BF\u03BD \u03B1\u03BD\u03B1\u03BB\u03BF\u03B3\u03B9\u03BA\u03CC \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03AE"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u03A3\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7\u03BD \u03AC\u03C3\u03BA\u03B7\u03C3\u03B7 \u03B8\u03B1 \u03B4\u03BF\u03CD\u03BC\u03B5 \u03C0\u03C9\u03C2 \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BC\u03B5 \u03BD\u03B1 \u03B5\u03C6\u03B1\u03C1\u03BC\u03CC\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C3\u03C4\u03B7\u03BD \u03C0\u03C1\u03AC\u03BE\u03B7 \u03C4\u03B9\u03C2 \u03B4\u03B9\u03B1\u03C6\u03BF\u03C1\u03B9\u03BA\u03AD\u03C2 \u03BC\u03B1\u03C2 \u03B5\u03BE\u03B9\u03C3\u03CE\u03C3\u03B5\u03B9\u03C2 \u03C0\u03AC\u03BD\u03C9 \u03C3\u03C4\u03BF\u03BD \u03B1\u03BD\u03B1\u03BB\u03BF\u03B3\u03B9\u03BA\u03CC \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03AE."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video7, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 6: \u03A3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C1\u03BF\u03AE\u03C2 2 \u03C5\u03B3\u03C1\u03CE\u03BD (\u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 2\u03B7\u03C2 \u03C4\u03AC\u03BE\u03B7\u03C2)"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img85.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u039F \u03C3\u03C0\u03BF\u03C5\u03B4\u03B1\u03C3\u03C4\u03AE\u03C2 \u03B8\u03B1 \u03BC\u03B5\u03BB\u03B5\u03C4\u03AE\u03C3\u03B5\u03B9 \u03AD\u03BD\u03B1 \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C1\u03BF\u03AE\u03C2 2 \u03C5\u03B3\u03C1\u03CE\u03BD, \u03C3\u03B5 \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03B5\u03BE\u03BF\u03BC\u03BF\u03AF\u03C9\u03C3\u03B7\u03C2 \u03C3\u03C4\u03BF\u03BD \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03AE. \u03A4\u03BF \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B5\u03CD\u03C4\u03B5\u03C1\u03B7\u03C2 \u03C4\u03AC\u03BE\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03B8\u03B1 \u03C4\u03BF\u03BD \u03B2\u03BF\u03B7\u03B8\u03AE\u03C3\u03B5\u03B9 \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03BD\u03BF\u03AE\u03C3\u03B5\u03B9 \u03C4\u03B1 \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1 \u03B1\u03C5\u03C4\u03AC \u03BA\u03B1\u03B9 \u03BD\u03B1 \u03B4\u03B9\u03B1\u03C0\u03B9\u03C3\u03C4\u03CE\u03C3\u03B5\u03B9 \u03C4\u03B9\u03C2 \u03B4\u03B9\u03B1\u03C6\u03BF\u03C1\u03AD\u03C2 \u03BC\u03B5 \u03C4\u03B1 \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03B1 1\u03B7\u03C2 \u03C4\u03AC\u03BE\u03B7\u03C2."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video8, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 7: \u0395\u03C0\u03AF\u03BB\u03C5\u03C3\u03B7 \u03B4\u03B9\u03B1\u03C6\u03BF\u03C1\u03B9\u03BA\u03CE\u03BD \u03B5\u03BE\u03B9\u03C3\u03CE\u03C3\u03B5\u03C9\u03BD \u03BA\u03B1\u03B9 \u03B5\u03BE\u03BF\u03BC\u03BF\u03AF\u03C9\u03C3\u03B7 \u03BC\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C4\u03BF\u03C5 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03C4\u03AE"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/images/img85.jpg",
        alt: "image",
        align: "center",
        width: "800",
        height: "600"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u039F \u03C3\u03C0\u03BF\u03C5\u03B4\u03B1\u03C3\u03C4\u03AE\u03C2 \u03B8\u03B1 \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C3\u03C5\u03B3\u03BA\u03C1\u03AF\u03BD\u03B5\u03B9 \u03C4\u03B1 \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03C0\u03BF\u03C5 \u03C0\u03AE\u03C1\u03B5 \u03C3\u03C4\u03B7\u03BD \u03AC\u03C3\u03BA\u03B7\u03C3\u03B7 #5 \u03BC\u03B5 \u03C4\u03B1 \u03B1\u03C0\u03BF\u03C4\u03B5\u03BB\u03AD\u03C3\u03BC\u03B1\u03C4\u03B1 \u03C0\u03BF\u03C5 \u03C0\u03AE\u03C1\u03B5 \u03B1\u03C0\u03CC \u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03B5\u03BE\u03BF\u03BC\u03BF\u03AF\u03C9\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9 \u03BD\u03B1 \u03BA\u03B1\u03C4\u03B1\u03B3\u03C1\u03AC\u03C8\u03B5\u03B9 \u03C4\u03B9\u03C2 \u03C0\u03B1\u03C1\u03B1\u03C4\u03B7\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2 \u03C4\u03BF\u03C5."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video9, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 8: \u0395\u03BE\u03BF\u03BC\u03BF\u03AF\u03C9\u03C3\u03B7 \u03BA\u03B1\u03B9 \u03B5\u03C0\u03AF\u03BB\u03C5\u03C3\u03B7 \u03C3\u03C5\u03BD\u03B1\u03C1\u03C4\u03AE\u03C3\u03B5\u03C9\u03BD \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 1\u03B7\u03C2 \u03BA\u03B1\u03B9 2\u03B7\u03C2 \u03C4\u03AC\u03BE\u03B7\u03C2"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u0397 \u03BC\u03B5\u03BB\u03AD\u03C4\u03B7 \u03C4\u03B7\u03C2 \u03C3\u03C5\u03BD\u03AC\u03C1\u03C4\u03B7\u03C3\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 , \u03C4\u03B7\u03C2 \u03B5\u03C5\u03C3\u03C4\u03AC\u03B8\u03B5\u03B9\u03B1\u03C2 \u03C3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD, \u03C4\u03C9\u03BD \u03BA\u03C1\u03B9\u03C4\u03B7\u03C1\u03AF\u03C9\u03BD Niquist \u03BA\u03B1\u03B9 \u03C4\u03C9\u03BD \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03BC\u03BC\u03AC\u03C4\u03C9\u03BD Bode Gain and Phase."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video10, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 9: \u0392\u03B9\u03BF\u03BB\u03BF\u03B3\u03B9\u03BA\u03CC \u03C3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u039A\u03B1\u03C4\u03B1\u03BD\u03CC\u03B7\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03B1\u03BD\u03B8\u03C1\u03CE\u03C0\u03B9\u03BD\u03BF\u03C5 \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5, \u03C4\u03B7\u03C2 \u03C3\u03C5\u03BD\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1\u03C2 \u03C3\u03C5\u03C3\u03C4\u03B7\u03BC\u03AC\u03C4\u03C9\u03BD \u03BA\u03B1\u03B9 \u03BC\u03B1\u03B8\u03B7\u03BC\u03B1\u03C4\u03B9\u03BA\u03CE\u03BD \u03B5\u03C6\u03B1\u03C1\u03BC\u03BF\u03B3\u03CE\u03BD \u03C0\u03AC\u03BD\u03C9 \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AC."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video11, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      class: "card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0386\u03C3\u03BA\u03B7\u03C3\u03B7 10: \u03A3\u03CD\u03C3\u03C4\u03B7\u03BC\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 3 \u03B4\u03B5\u03BE\u03B1\u03BC\u03B5\u03BD\u03CE\u03BD"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        align: "justify",
        children: "\u03A3\u03C4\u03B7\u03BD \u03C0\u03B5\u03B9\u03C1\u03B1\u03BC\u03B1\u03C4\u03B9\u03BA\u03AE \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1 \u03B8\u03B1 \u03BC\u03B5\u03BB\u03B5\u03C4\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03BF\u03C5\u03C2 \u03C4\u03C1\u03CC\u03C0\u03BF\u03C5\u03C2 \u03BC\u03B5 \u03C4\u03BF\u03C5\u03C2 \u03BF\u03C0\u03BF\u03AF\u03BF\u03C5\u03C2 \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BC\u03B5 \u03BD\u03B1 \u03B5\u03BB\u03AD\u03B3\u03BE\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B7\u03BD \u03B1\u03C0\u03CC\u03BA\u03C1\u03B9\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03C4\u03C1\u03B9\u03CE\u03BD \u03B4\u03B5\u03BE\u03B1\u03BC\u03B5\u03BD\u03CE\u03BD. \u0391\u03C1\u03C7\u03B9\u03BA\u03AC \u03B8\u03B1 \u03BC\u03B5\u03BB\u03B5\u03C4\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B7\u03BD \u03C3\u03C5\u03BC\u03C0\u03B5\u03C1\u03B9\u03C6\u03BF\u03C1\u03AC \u03C4\u03BF\u03C5 \u03C3\u03C5\u03C3\u03C4\u03AE\u03BC\u03B1\u03C4\u03BF\u03C2 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF P\u0399 (\u0391\u03BD\u03B1\u03BB\u03BF\u03B3\u03B9\u03BA\u03CC (Proportional) \u2013 \u039F\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03C4\u03B9\u03BA\u03CC (Integral) \u03C4\u03C1\u03CC\u03C0\u03BF \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5) \u03BA\u03B1\u03B9 \u03C3\u03C4\u03B7\u03BD \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1 \u03B8\u03B1 \u03C5\u03BB\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03BF\u03C5\u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03BA\u03BB\u03B5\u03B9\u03C3\u03C4\u03CC \u03B2\u03C1\u03CC\u03C7\u03BF \u03CC\u03C0\u03BF\u03C5 \u03B8\u03B1 \u03C0\u03C1\u03B1\u03B3\u03BC\u03B1\u03C4\u03BF\u03C0\u03BF\u03B9\u03B5\u03AF\u03C4\u03B1\u03B9 \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF\u03C2 P\u0399."
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Video12, {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
  });
};

/* harmony default export */ const labexercises = (s);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,4198], () => (__webpack_exec__(8087)));
module.exports = __webpack_exports__;

})();