"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Index/Slider.js":
/*!************************************!*\
  !*** ./components/Index/Slider.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_pc_Downloads_react_edemy_edemy_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_pc_Downloads_react_edemy_edemy_react_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\pc\\Downloads\\react\\edemy\\edemy-react-next\\components\\Index\\Slider.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_pc_Downloads_react_edemy_edemy_react_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "node_modules_react-owl-carousel3_lib_OwlCarousel_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js", 23));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js")];
    },
    modules: ["..\\components\\Index\\Slider.js -> " + 'react-owl-carousel3']
  }
});
_c2 = OwlCarousel;
var options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: 'fadeOut',
  items: 1,
  navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
};
var slideImages = ['images/im1.jpg', 'images/im2.jpg', 'images/im3.jpg', 'images/im4.jpg', 'images/im5.jpg', 'images/im6.jpg', 'images/im7.jpg'];

var Slider = function Slider() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false),
      _React$useState2 = (0,C_Users_pc_Downloads_react_edemy_edemy_react_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      display = _React$useState2[0],
      setDisplay = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {
    setDisplay(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "testimonials-area ptb-100",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "section-title",
        children: display ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(OwlCarousel, _objectSpread(_objectSpread({
          className: "testimonials-slides-two owl-carousel owl-theme"
        }, options), {}, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "testimonials-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "col-lg-4 col-md-12 text-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: "/images/im1.jpg",
                alt: "image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "testimonials-item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "col-lg-8 col-md-12"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "col-lg-4 col-md-12 text-center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/im2.jpg",
                  alt: "image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, _this)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 29
        }, _this) : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};

_s(Slider, "g2K6r6HcuMEqWpP7ljjxABYqlrc=");

_c3 = Slider;
/* harmony default export */ __webpack_exports__["default"] = (Slider);

var _c, _c2, _c3;

$RefreshReg$(_c, "OwlCarousel$dynamic");
$RefreshReg$(_c2, "OwlCarousel");
$RefreshReg$(_c3, "Slider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDE5MGQ0ZTE5NDk4NmM2MzQ3YzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1FLFdBQVcsR0FBR0QsbURBQU87QUFBQSxTQUFDLDBPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsa0ZBQVI7QUFBQTtBQUFBLHVEQUFRLHFCQUFSO0FBQUE7QUFBQSxFQUEzQjtNQUFNQztBQUVOLElBQU1DLE9BQU8sR0FBRztBQUNaQyxFQUFBQSxJQUFJLEVBQUUsSUFETTtBQUVaQyxFQUFBQSxHQUFHLEVBQUUsSUFGTztBQUdaQyxFQUFBQSxJQUFJLEVBQUUsS0FITTtBQUlaQyxFQUFBQSxrQkFBa0IsRUFBRSxJQUpSO0FBS1pDLEVBQUFBLFFBQVEsRUFBRSxJQUxFO0FBTVpDLEVBQUFBLFVBQVUsRUFBRSxTQU5BO0FBT1pDLEVBQUFBLEtBQUssRUFBRSxDQVBLO0FBUVpDLEVBQUFBLE9BQU8sRUFBRSxDQUNMLG9DQURLLEVBRUwscUNBRks7QUFSRyxDQUFoQjtBQWNBLElBQU1DLFdBQVcsR0FBRyxDQUNoQixnQkFEZ0IsRUFFaEIsZ0JBRmdCLEVBR2hCLGdCQUhnQixFQUloQixnQkFKZ0IsRUFLaEIsZ0JBTGdCLEVBTWhCLGdCQU5nQixFQU9oQixnQkFQZ0IsQ0FBcEI7O0FBVUUsSUFBTUMsTUFBTSxHQUFFLFNBQVJBLE1BQVEsR0FBTTtBQUFBOztBQUFBLHdCQUNZYixxREFBQSxDQUFlLEtBQWYsQ0FEWjtBQUFBO0FBQUEsTUFDWGUsT0FEVztBQUFBLE1BQ0ZDLFVBREU7O0FBR2xCaEIsRUFBQUEsc0RBQUEsQ0FBZ0IsWUFBTTtBQUNsQmdCLElBQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFDSCxHQUZELEVBRUcsRUFGSDtBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsa0JBQ0VELE9BQU8sZ0JBQUcsOERBQUMsV0FBRDtBQUNSLG1CQUFTLEVBQUM7QUFERixXQUVKWixPQUZJO0FBQUEsa0NBSVI7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsbUNBRVE7QUFBSyx1QkFBUyxFQUFDLGdDQUFmO0FBQUEscUNBQ0k7QUFBSyxtQkFBRyxFQUFDLGlCQUFUO0FBQTJCLG1CQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpRLGVBWVI7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLHdCQUFmO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUdJO0FBQUsseUJBQVMsRUFBQyxnQ0FBZjtBQUFBLHVDQUNJO0FBQUsscUJBQUcsRUFBQyxpQkFBVDtBQUEyQixxQkFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFILEdBd0JRO0FBekJqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlDSCxDQXhDQzs7R0FBTVU7O01BQUFBO0FBMENSLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5kZXgvU2xpZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoJ3JlYWN0LW93bC1jYXJvdXNlbDMnKSlcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBhdXRvcGxheUhvdmVyUGF1c2U6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxuICAgIGl0ZW1zOiAxLFxuICAgIG5hdlRleHQ6IFtcbiAgICAgICAgXCI8aSBjbGFzcz0nYnggYngtY2hldnJvbi1sZWZ0Jz48L2k+XCIsXG4gICAgICAgIFwiPGkgY2xhc3M9J2J4IGJ4LWNoZXZyb24tcmlnaHQnPjwvaT5cIlxuICAgIF0sXG59O1xuXG5jb25zdCBzbGlkZUltYWdlcyA9IFtcbiAgICAnaW1hZ2VzL2ltMS5qcGcnLFxuICAgICdpbWFnZXMvaW0yLmpwZycsXG4gICAgJ2ltYWdlcy9pbTMuanBnJyxcbiAgICAnaW1hZ2VzL2ltNC5qcGcnLFxuICAgICdpbWFnZXMvaW01LmpwZycsXG4gICAgJ2ltYWdlcy9pbTYuanBnJyxcbiAgICAnaW1hZ2VzL2ltNy5qcGcnLFxuICBdO1xuXG4gIGNvbnN0IFNsaWRlcj0gKCkgPT4ge1xuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldERpc3BsYXkodHJ1ZSk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFscy1hcmVhIHB0Yi0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgeyBkaXNwbGF5ID8gPE93bENhcm91c2VsIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbHMtc2xpZGVzLXR3byBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgey4uLm9wdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltMS5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltMi5qcGdcIiBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICAgICAgPC9Pd2xDYXJvdXNlbD4gOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJkeW5hbWljIiwiT3dsQ2Fyb3VzZWwiLCJvcHRpb25zIiwibG9vcCIsIm5hdiIsImRvdHMiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhdXRvcGxheSIsImFuaW1hdGVPdXQiLCJpdGVtcyIsIm5hdlRleHQiLCJzbGlkZUltYWdlcyIsIlNsaWRlciIsInVzZVN0YXRlIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ1c2VFZmZlY3QiXSwic291cmNlUm9vdCI6IiJ9