"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 50:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);






var Login = function (props) {
  var loginAppearence;
  props.userLogIn ? loginAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Nie masz konta? Zarejestruj si\u0119!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Nie masz konta? Zarejestruj si\u0119!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Nie masz konta? Zarejestruj si\u0119!")) : loginAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: function handleSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      display: "block",
      position: "relative",
      width: "400px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "amount",
    value: "Wpisz kwotę kredytu"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      display: "block",
      position: "relative",
      width: "400px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    name: "amount",
    value: "Wpisz kwotę kredytu"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "Has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnOblicz",
    onClick: function handleClick(e) {
      e.preventDefault();
      props.setUserLogIn(true);
    }
  }, "Zaloguj"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Nie masz konta? Zarejestruj si\u0119!"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeLeftPhoto"
  }), loginAppearence);
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _Home_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
var Application = function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    logged = _useState2[0],
    setLogged = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIi: setLogged
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  })))));
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Application, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6c5962fe1e269c9ef156"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsQ0FBQ3NDLDZEQUFlO01BQUM1QixTQUFTLEVBQUVzQztJQUFPO0VBQUcsRUFBRSxlQUNoRWhELDBEQUFBLENBQUNpQyxtREFBSztJQUFDaUIsSUFBSSxFQUFDLE1BQU07SUFBQ0MsT0FBTyxlQUFFbkQsMERBQUEsQ0FBQ3NDLDZEQUFlO01BQUM1QixTQUFTLEVBQUVzQztJQUFPO0VBQUcsRUFBRSxlQUNwRWhELDBEQUFBLENBQUNpQyxtREFBSztJQUFDaUIsSUFBSSxFQUFDLFNBQVM7SUFBQ0MsT0FBTyxlQUFFbkQsMERBQUEsQ0FBQ3NDLDZEQUFlO01BQUM1QixTQUFTLEVBQUVzQztJQUFPO0VBQUcsRUFBRSxlQUN2RWhELDBEQUFBLENBQUNpQyxtREFBSztJQUFDaUIsSUFBSSxFQUFDLE1BQU07SUFBQ0MsT0FBTyxlQUFFbkQsMERBQUEsQ0FBQ3NDLDZEQUFlO01BQUM1QixTQUFTLEVBQUVzQztJQUFPO0VBQUcsRUFBRSxDQUNoRSxDQUNKLENBQ0gsQ0FDQTtBQUVyQixDQUFDO0FBR0RMLElBQUksQ0FBQ1UsTUFBTSxlQUNQckQsMERBQUEsQ0FBQzRDLFdBQVcsT0FBRSxDQUNqQjs7Ozs7Ozs7VUNyQ0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xvZ2luL2xvZ2luLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGYU1vbmV5QmlsbEFsdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0dpUmVjZWl2ZU1vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7VGJQaWdNb25leX0gZnJvbSBcInJlYWN0LWljb25zL3RiXCI7XG5pbXBvcnQge0JzQmFua30gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpY29uc1N0eWxlID0ge3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIn07XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHJvcHMuc2V0VXNlckxvZ0luKHRydWUpO1xuXG4gICAgfVxuXG4gICAgbGV0IGxvZ2luQXBwZWFyZW5jZTtcbiAgICBwcm9wcy51c2VyTG9nSW4gPyBsb2dpbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVIZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgPGgxPldpdGFqPC9oMT5cblxuICAgICAgICA8TGluayB0bz1cIi9cIj5OaWUgbWFzeiBrb250YT8gWmFyZWplc3RydWogc2nEmSE8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPk5pZSBtYXN6IGtvbnRhPyBaYXJlamVzdHJ1aiBzacSZITwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+TmllIG1hc3oga29udGE/IFphcmVqZXN0cnVqIHNpxJkhPC9MaW5rPlxuICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgIGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICA8aDE+V2l0YWo8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e1wiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Mb2dpbjwvc3Bhbj48L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17XCJwYXNzd29yZFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17XCJXcGlzeiBrd290xJkga3JlZHl0dVwifS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pkhhc8WCbzwvc3Bhbj48L2xhYmVsPlxuXG5cblxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvclwiPjxidXR0b24gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+WmFsb2d1ajwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5OaWUgbWFzeiBrb250YT8gWmFyZWplc3RydWogc2nEmSE8L0xpbms+XG4gICAgPC9kaXY+O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtsb2dpbkFwcGVhcmVuY2V9XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTGluaywgTmF2TGluaywgT3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dC9sYXlvdXRcIjtcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL0hvbWUvd2VsY29tZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luL2xvZ2luXCI7XG5pbXBvcnQgTWFpbkFwcGxpY2F0aW9uIGZyb20gXCIuL01haW4vbWFpbkFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSBcIi4vSG9tZS9pbmZvcm1hdGlvblwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5jb25zdCBBcHBsaWNhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJaT17c2V0TG9nZ2VkfS8+fT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9JycgZWxlbWVudD17PFdlbGNvbWUgdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2luZm8nIGVsZW1lbnQ9ezxJbmZvcm1hdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9naW4nIGVsZW1lbnQ9ezxMb2dpbiB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0luPXtzZXRMb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2NhbGN1bGF0b3InPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9JycgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvYW4nIGVsZW1lbnQ9ezxNYWluQXBwbGljYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdkZXBvc2l0JyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nYm9uZCcgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgIClcbn1cblxuXG5yb290LnJlbmRlcihcbiAgICA8QXBwbGljYXRpb24vPlxuKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI2YzU5NjJmZTFlMjY5YzllZjE1NlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1vbmV5QmlsbEFsdCIsIkdpUmVjZWl2ZU1vbmV5IiwiVGJQaWdNb25leSIsIkJzQmFuayIsIkxpbmsiLCJMb2dpbiIsInByb3BzIiwibG9naW5BcHBlYXJlbmNlIiwidXNlckxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayIsInNldFVzZXJMb2dJbiIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJIYXNoUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZMaW5rIiwiT3V0bGV0IiwiTGF5b3V0IiwiV2VsY29tZSIsIk1haW5BcHBsaWNhdGlvbiIsIkluZm9ybWF0aW9uIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHBsaWNhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2dlZCIsInNldExvZ2dlZCIsInBhdGgiLCJlbGVtZW50Iiwic2V0VXNlckxvZ0lpIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==