"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 50:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Login = function (props) {
  var API = "http://localhost:3005";
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz Login..."),
    _useState2 = _slicedToArray(_useState, 2),
    login = _useState2[0],
    setLogin = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz hasło..."),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  console.log(props.data);
  var gettingData = function () {
    fetch("".concat(API, "/").concat(login)).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      return props.changingData(data);
    })["catch"](function (reject) {
      return console.log(reject);
    });
  };
  var loginAppearence;
  props.userLogIn ? loginAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "loginHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Wybierz kalkulator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calculatorChoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator",
    onClick: gettingData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Kredyt"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/loan",
    onClick: gettingData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Po\u017Cyczka"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/deposit",
    onClick: gettingData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn",
    onClick: gettingData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbPigMoney, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Lokata"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/bond"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaMoneyBillAlt, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Obligacje"))))) : loginAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "loginHero contrastColor"
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
    name: "login",
    value: login,
    onFocus: function handleLoginFocus(e) {
      e.target.value === "Wpisz Login..." && setLogin("");
    },
    onBlur: function handleLoginBlur(e) {
      e.target.value === "" && setLogin("Wpisz Login...");
    },
    onChange: function handleChangeLogin(e) {
      setLogin(e.target.value);
    }
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
    type: password === "Wpisz hasło..." ? "text" : "password",
    name: "password",
    value: password,
    onFocus: function handlePasswordFocus(e) {
      e.target.value === "Wpisz hasło..." && setPassword("");
    },
    onBlur: function handlePasswordBlur(e) {
      e.target.value === "" && setPassword("Wpisz hasło...");
    },
    onChange: function handleChangePassword(e) {
      setPassword(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "Has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "loginBtnLog",
    onClick: function handleClick(e) {
      e.preventDefault();
      fetch("".concat(API, "/users/").concat(login)).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        return data.password === password ? props.setUserLogIn(true) : props.setUserLogIn(false);
      })["catch"](function (reject) {
        return console.log(reject);
      });
    }
  }, "Zaloguj"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "loginRegistrationLink",
    to: "/registration"
  }, "Nie masz konta? Zarejestruj si\u0119!")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "loginLeftPhoto"
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _Home_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);
/* harmony import */ var _Registration_registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55);
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    usersCalculations = _useState4[0],
    setUsersCalculations = _useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIi: setLogged
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      data: usersCalculations,
      changingData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "registration",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Registration_registration__WEBPACK_IMPORTED_MODULE_7__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
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
/******/ 	__webpack_require__.h = function() { return "5acb81a09f82745e6a0c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQUFBLENBQUNnRSxtREFBSztJQUFDaUIsSUFBSSxFQUFDLEVBQUU7SUFBQ0MsT0FBTyxlQUFFbEYsMERBQUEsQ0FBQ3FFLDZEQUFlO01BQUN0QyxTQUFTLEVBQUU4QztJQUFPO0VBQUcsRUFBRSxlQUNoRTdFLDBEQUFBLENBQUNnRSxtREFBSztJQUFDaUIsSUFBSSxFQUFDLE1BQU07SUFBQ0MsT0FBTyxlQUFFbEYsMERBQUEsQ0FBQ3FFLDZEQUFlO01BQUN0QyxTQUFTLEVBQUU4QztJQUFPO0VBQUcsRUFBRSxlQUNwRTdFLDBEQUFBLENBQUNnRSxtREFBSztJQUFDaUIsSUFBSSxFQUFDLFNBQVM7SUFBQ0MsT0FBTyxlQUFFbEYsMERBQUEsQ0FBQ3FFLDZEQUFlO01BQUN0QyxTQUFTLEVBQUU4QztJQUFPO0VBQUcsRUFBRSxlQUN2RTdFLDBEQUFBLENBQUNnRSxtREFBSztJQUFDaUIsSUFBSSxFQUFDLE1BQU07SUFBQ0MsT0FBTyxlQUFFbEYsMERBQUEsQ0FBQ3FFLDZEQUFlO01BQUN0QyxTQUFTLEVBQUU4QztJQUFPO0VBQUcsRUFBRSxDQUNoRSxDQUNKLENBQ0gsQ0FDQTtBQUVyQixDQUFDO0FBR0RGLElBQUksQ0FBQ1MsTUFBTSxlQUNQcEYsMERBQUEsQ0FBQzRFLFdBQVcsT0FBRSxDQUNqQjs7Ozs7Ozs7VUN4Q0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xvZ2luL2xvZ2luLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGYU1vbmV5QmlsbEFsdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0dpUmVjZWl2ZU1vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7VGJQaWdNb25leX0gZnJvbSBcInJlYWN0LWljb25zL3RiXCI7XG5pbXBvcnQge0JzQmFua30gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShcIldwaXN6IExvZ2luLi4uXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJXcGlzeiBoYXPFgm8uLi5cIik7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcbiAgICBjb25zdCBnZXR0aW5nRGF0YSA9ICgpID0+IHtcbiAgICAgICAgZmV0Y2goYCR7QVBJfS8ke2xvZ2lufWApLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSkudGhlbihkYXRhID0+IHByb3BzLmNoYW5naW5nRGF0YShkYXRhKSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTG9naW5Gb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IExvZ2luLi4uXCIgJiYgc2V0TG9naW4oXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGhhc8WCby4uLlwiICYmIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldExvZ2luKFwiV3Bpc3ogTG9naW4uLi5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGFzc3dvcmQoXCJXcGlzeiBoYXPFgm8uLi5cIik7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUxvZ2luID0gKGUpID0+IHtcbiAgICAgICAgc2V0TG9naW4oZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmZXRjaChgJHtBUEl9L3VzZXJzLyR7bG9naW59YCkudGhlbihyZXNwID0+IHJlc3AuanNvbigpKS50aGVuKGRhdGEgPT4gZGF0YS5wYXNzd29yZCA9PT0gcGFzc3dvcmQgPyBwcm9wcy5zZXRVc2VyTG9nSW4odHJ1ZSkgOiBwcm9wcy5zZXRVc2VyTG9nSW4oZmFsc2UpKS5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSk7XG5cbiAgICB9XG5cbiAgICBsZXQgbG9naW5BcHBlYXJlbmNlO1xuICAgIHByb3BzLnVzZXJMb2dJbiA/IGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwibG9naW5IZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgPGgxPld5Ymllcnoga2Fsa3VsYXRvcjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGN1bGF0b3JDaG9pY2VcIn0+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3JcIiBvbkNsaWNrPXtnZXR0aW5nRGF0YX0gPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxCc0JhbmsvPjxzcGFuPktyZWR5dDwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3IvbG9hblwiIG9uQ2xpY2s9e2dldHRpbmdEYXRhfSA+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEdpUmVjZWl2ZU1vbmV5Lz48c3Bhbj5Qb8W8eWN6a2E8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2RlcG9zaXRcIiBvbkNsaWNrPXtnZXR0aW5nRGF0YX0gPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9IG9uQ2xpY2s9e2dldHRpbmdEYXRhfT48VGJQaWdNb25leS8+PHNwYW4+TG9rYXRhPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9ib25kXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEZhTW9uZXlCaWxsQWx0Lz48c3Bhbj5PYmxpZ2FjamU8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICBsb2dpbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XaXRhajwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImxvZ2luXCJ9IHZhbHVlPXtsb2dpbn0gb25Gb2N1cz17aGFuZGxlTG9naW5Gb2N1c30gb25CbHVyPXtoYW5kbGVMb2dpbkJsdXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Mb2dpbjwvc3Bhbj48L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17cGFzc3dvcmQgPT09IFwiV3Bpc3ogaGFzxYJvLi4uXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn0gbmFtZT17XCJwYXNzd29yZFwifSB2YWx1ZT17cGFzc3dvcmR9IG9uRm9jdXM9e2hhbmRsZVBhc3N3b3JkRm9jdXN9IG9uQmx1cj17aGFuZGxlUGFzc3dvcmRCbHVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGFzc3dvcmR9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+SGFzxYJvPC9zcGFuPjwvbGFiZWw+XG5cblxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvclwiPjxidXR0b24gY2xhc3NOYW1lPXtcImxvZ2luQnRuTG9nXCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5aYWxvZ3VqPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwPjxMaW5rIGNsYXNzTmFtZT17XCJsb2dpblJlZ2lzdHJhdGlvbkxpbmtcIn0gdG89XCIvcmVnaXN0cmF0aW9uXCI+TmllIG1hc3oga29udGE/IFphcmVqZXN0cnVqIHNpxJkhPC9MaW5rPjwvcD5cblxuICAgIDwvZGl2PjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtsb2dpbkFwcGVhcmVuY2V9XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTGluaywgTmF2TGluaywgT3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dC9sYXlvdXRcIjtcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL0hvbWUvd2VsY29tZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luL2xvZ2luXCI7XG5pbXBvcnQgTWFpbkFwcGxpY2F0aW9uIGZyb20gXCIuL01haW4vbWFpbkFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSBcIi4vSG9tZS9pbmZvcm1hdGlvblwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tIFwiLi9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IEFwcGxpY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJzQ2FsY3VsYXRpb25zLCBzZXRVc2Vyc0NhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSWk9e3NldExvZ2dlZH0vPn0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScnIGVsZW1lbnQ9ezxXZWxjb21lIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdpbmZvJyBlbGVtZW50PXs8SW5mb3JtYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvZ2luJyBlbGVtZW50PXs8TG9naW4gdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSBkYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gY2hhbmdpbmdEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ncmVnaXN0cmF0aW9uJyBlbGVtZW50PXs8UmVnaXN0cmF0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nY2FsY3VsYXRvcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9hbicgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2RlcG9zaXQnIGVsZW1lbnQ9ezxNYWluQXBwbGljYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdib25kJyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgKVxufVxuXG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHBsaWNhdGlvbi8+XG4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjVhY2I4MWEwOWY4Mjc0NWU2YTBjXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhTW9uZXlCaWxsQWx0IiwiR2lSZWNlaXZlTW9uZXkiLCJUYlBpZ01vbmV5IiwiQnNCYW5rIiwiTGluayIsIkxvZ2luIiwicHJvcHMiLCJBUEkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dpbiIsInNldExvZ2luIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJnZXR0aW5nRGF0YSIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlc3AiLCJqc29uIiwiY2hhbmdpbmdEYXRhIiwicmVqZWN0IiwibG9naW5BcHBlYXJlbmNlIiwidXNlckxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwib25DbGljayIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkZvY3VzIiwiaGFuZGxlTG9naW5Gb2N1cyIsInRhcmdldCIsIm9uQmx1ciIsImhhbmRsZUxvZ2luQmx1ciIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlTG9naW4iLCJoYW5kbGVQYXNzd29yZEZvY3VzIiwiaGFuZGxlUGFzc3dvcmRCbHVyIiwiaGFuZGxlQ2hhbmdlUGFzc3dvcmQiLCJoYW5kbGVDbGljayIsInNldFVzZXJMb2dJbiIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsImNyZWF0ZVJvb3QiLCJIYXNoUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJOYXZMaW5rIiwiT3V0bGV0IiwiTGF5b3V0IiwiV2VsY29tZSIsIk1haW5BcHBsaWNhdGlvbiIsIkluZm9ybWF0aW9uIiwiUmVnaXN0cmF0aW9uIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHBsaWNhdGlvbiIsImxvZ2dlZCIsInNldExvZ2dlZCIsInVzZXJzQ2FsY3VsYXRpb25zIiwic2V0VXNlcnNDYWxjdWxhdGlvbnMiLCJwYXRoIiwiZWxlbWVudCIsInNldFVzZXJMb2dJaSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=