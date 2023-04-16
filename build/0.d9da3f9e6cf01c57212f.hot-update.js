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
  var loginAppearence;
  props.userLogIn ? loginAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "loginHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Wybierz kalkulator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calculatorChoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Kredyt"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/loan"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Po\u017Cyczka"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/deposit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
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
        if (data.password === password) {
          props.setUserLogIn(true);
          fetch("".concat(API, "/data/").concat(login)).then(function (resp) {
            return resp.json();
          }).then(function (data) {
            return props.changingData(data);
          })["catch"](function (reject) {
            return console.log(reject);
          });
        } else {
          props.setUserLogIn(false);
        }
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _Home_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var _Registration_registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var _userData_userData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _Main_creditCalculator_creditCalculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55);
/* harmony import */ var _Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59);
/* harmony import */ var _Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60);
/* harmony import */ var _Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIi: setLogged
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      data: usersCalculations,
      changingData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "registration",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Registration_registration__WEBPACK_IMPORTED_MODULE_7__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_creditCalculator_creditCalculator__WEBPACK_IMPORTED_MODULE_9__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__["default"], {
      userLogIn: logged
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "userData",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_userData_userData__WEBPACK_IMPORTED_MODULE_8__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      userData: usersCalculations
    })
  }))));
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Application, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3ae7fce29aa9e308f1e8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RiwwREFBQSxDQUFDd0UsK0VBQWdCO01BQUNqRCxTQUFTLEVBQUUwRDtJQUFPO0VBQUcsRUFBRSxlQUNqRWpGLDBEQUFBLENBQUMrRCxvREFBSztJQUFDc0IsSUFBSSxFQUFDLE1BQU07SUFBQ0MsT0FBTyxlQUFFdEYsMERBQUEsQ0FBQzBFLDRFQUFjO01BQUNuRCxTQUFTLEVBQUUwRDtJQUFPO0VBQUcsRUFBRSxlQUNuRWpGLDBEQUFBLENBQUMrRCxvREFBSztJQUFDc0IsSUFBSSxFQUFDLFNBQVM7SUFBQ0MsT0FBTyxlQUFFdEYsMERBQUEsQ0FBQzJFLGtGQUFpQjtNQUFDcEQsU0FBUyxFQUFFMEQ7SUFBTztFQUFHLEVBQUUsZUFDekVqRiwwREFBQSxDQUFDK0Qsb0RBQUs7SUFBQ3NCLElBQUksRUFBQyxNQUFNO0lBQUNDLE9BQU8sZUFBRXRGLDBEQUFBLENBQUN5RSw0RUFBYztNQUFDbEQsU0FBUyxFQUFFMEQ7SUFBTztFQUFHLEVBQUUsQ0FDL0QsZUFDUmpGLDBEQUFBLENBQUMrRCxvREFBSztJQUFDc0IsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFdEYsMERBQUEsQ0FBQ3VFLDBEQUFRO01BQUVoRCxTQUFTLEVBQUUwRCxNQUFPO01BQUMxQixZQUFZLEVBQUUyQixTQUFVO01BQUNNLFFBQVEsRUFBRUw7SUFBa0I7RUFBRyxFQUFFLENBQ3BILENBQ0gsQ0FDQTtBQUVyQixDQUFDO0FBR0RKLElBQUksQ0FBQ1UsTUFBTSxlQUNQekYsMERBQUEsQ0FBQ2dGLFdBQVcsT0FBRSxDQUNqQjs7Ozs7Ozs7VUM5Q0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xvZ2luL2xvZ2luLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGYU1vbmV5QmlsbEFsdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0dpUmVjZWl2ZU1vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7VGJQaWdNb25leX0gZnJvbSBcInJlYWN0LWljb25zL3RiXCI7XG5pbXBvcnQge0JzQmFua30gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShcIldwaXN6IExvZ2luLi4uXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJXcGlzeiBoYXPFgm8uLi5cIik7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBMb2dpbi4uLlwiICYmIHNldExvZ2luKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBoYXPFgm8uLi5cIiAmJiBzZXRQYXNzd29yZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbkJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRMb2dpbihcIldwaXN6IExvZ2luLi4uXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBhc3N3b3JkKFwiV3Bpc3ogaGFzxYJvLi4uXCIpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VMb2dpbiA9IChlKSA9PiB7XG4gICAgICAgIHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYXNzd29yZCA9IChlKSA9PiB7XG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmV0Y2goYCR7QVBJfS91c2Vycy8ke2xvZ2lufWApXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucGFzc3dvcmQgPT09IHBhc3N3b3JkICkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRVc2VyTG9nSW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChgJHtBUEl9L2RhdGEvJHtsb2dpbn1gKS50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpLnRoZW4oZGF0YSA9PiBwcm9wcy5jaGFuZ2luZ0RhdGEoZGF0YSkpLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7cHJvcHMuc2V0VXNlckxvZ0luKGZhbHNlKX19KVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKTtcblxuICAgIH1cblxuICAgIGxldCBsb2dpbkFwcGVhcmVuY2U7XG4gICAgcHJvcHMudXNlckxvZ0luID8gbG9naW5BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJsb2dpbkhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICA8aDE+V3liaWVyeiBrYWxrdWxhdG9yPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvckNob2ljZVwifT5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvclwiID48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48QnNCYW5rLz48c3Bhbj5LcmVkeXQ8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2xvYW5cIiA+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEdpUmVjZWl2ZU1vbmV5Lz48c3Bhbj5Qb8W8eWN6a2E8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2RlcG9zaXRcIiA+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0gPjxUYlBpZ01vbmV5Lz48c3Bhbj5Mb2thdGE8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2JvbmRcIj48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48RmFNb25leUJpbGxBbHQvPjxzcGFuPk9ibGlnYWNqZTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgIGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwibG9naW5IZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgPGgxPldpdGFqPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wibG9naW5cIn0gdmFsdWU9e2xvZ2lufSBvbkZvY3VzPXtoYW5kbGVMb2dpbkZvY3VzfSBvbkJsdXI9e2hhbmRsZUxvZ2luQmx1cn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PkxvZ2luPC9zcGFuPjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtwYXNzd29yZCA9PT0gXCJXcGlzeiBoYXPFgm8uLi5cIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifSBuYW1lPXtcInBhc3N3b3JkXCJ9IHZhbHVlPXtwYXNzd29yZH0gb25Gb2N1cz17aGFuZGxlUGFzc3dvcmRGb2N1c30gb25CbHVyPXtoYW5kbGVQYXNzd29yZEJsdXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYXNzd29yZH0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5IYXPFgm88L3NwYW4+PC9sYWJlbD5cblxuXG4gICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGJ1dHRvbiBjbGFzc05hbWU9e1wibG9naW5CdG5Mb2dcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlphbG9ndWo8L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHA+PExpbmsgY2xhc3NOYW1lPXtcImxvZ2luUmVnaXN0cmF0aW9uTGlua1wifSB0bz1cIi9yZWdpc3RyYXRpb25cIj5OaWUgbWFzeiBrb250YT8gWmFyZWplc3RydWogc2nEmSE8L0xpbms+PC9wPlxuXG4gICAgPC9kaXY+O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5MZWZ0UGhvdG9cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xvZ2luQXBwZWFyZW5jZX1cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCBMaW5rLCBOYXZMaW5rLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vSG9tZS93ZWxjb21lXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW4vbG9naW5cIjtcbmltcG9ydCBNYWluQXBwbGljYXRpb24gZnJvbSBcIi4vTWFpbi9tYWluQXBwbGljYXRpb25cIjtcbmltcG9ydCBJbmZvcm1hdGlvbiBmcm9tIFwiLi9Ib21lL2luZm9ybWF0aW9uXCI7XG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gXCIuL1JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25cIjtcbmltcG9ydCBVc2VyRGF0YSBmcm9tIFwiLi91c2VyRGF0YS91c2VyRGF0YVwiO1xuaW1wb3J0IENyZWRpdENhbGN1bGF0b3IgZnJvbSBcIi4vTWFpbi9jcmVkaXRDYWxjdWxhdG9yL2NyZWRpdENhbGN1bGF0b3JcIjtcbmltcG9ydCBCb25kQ2FsY3VsYXRvciBmcm9tIFwiLi9NYWluL2JvbmRDYWxjdWxhdG9yL2JvbmRDYWxjdWxhdG9yXCI7XG5pbXBvcnQgTG9hbkNhbGN1bGF0b3IgZnJvbSBcIi4vTWFpbi9sb2FuQ2FsY3VsYXRvci9sb2FuQ2FsY3VsYXRvclwiO1xuaW1wb3J0IERlcG9zaXRDYWxjdWxhdG9yIGZyb20gXCIuL01haW4vZGVwb3NpdENhbGN1bGF0b3IvZGVwb3NpdENhbGN1bGF0b3JcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuY29uc3QgQXBwbGljYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlcnNDYWxjdWxhdGlvbnMsIHNldFVzZXJzQ2FsY3VsYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJaT17c2V0TG9nZ2VkfS8+fT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9JycgZWxlbWVudD17PFdlbGNvbWUgdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2luZm8nIGVsZW1lbnQ9ezxJbmZvcm1hdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9naW4nIGVsZW1lbnQ9ezxMb2dpbiB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0luPXtzZXRMb2dnZWR9IGRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBjaGFuZ2luZ0RhdGE9e3NldFVzZXJzQ2FsY3VsYXRpb25zfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdyZWdpc3RyYXRpb24nIGVsZW1lbnQ9ezxSZWdpc3RyYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdjYWxjdWxhdG9yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScnIGVsZW1lbnQ9ezxDcmVkaXRDYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9hbicgZWxlbWVudD17PExvYW5DYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nZGVwb3NpdCcgZWxlbWVudD17PERlcG9zaXRDYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nYm9uZCcgZWxlbWVudD17PEJvbmRDYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSd1c2VyRGF0YScgZWxlbWVudD17PFVzZXJEYXRhICB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0luPXtzZXRMb2dnZWR9IHVzZXJEYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgIClcbn1cblxuXG5yb290LnJlbmRlcihcbiAgICA8QXBwbGljYXRpb24vPlxuKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIzYWU3ZmNlMjlhYTllMzA4ZjFlOFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1vbmV5QmlsbEFsdCIsIkdpUmVjZWl2ZU1vbmV5IiwiVGJQaWdNb25leSIsIkJzQmFuayIsIkxpbmsiLCJMb2dpbiIsInByb3BzIiwiQVBJIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibG9naW4iLCJzZXRMb2dpbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibG9naW5BcHBlYXJlbmNlIiwidXNlckxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uRm9jdXMiLCJoYW5kbGVMb2dpbkZvY3VzIiwidGFyZ2V0Iiwib25CbHVyIiwiaGFuZGxlTG9naW5CbHVyIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2VMb2dpbiIsImhhbmRsZVBhc3N3b3JkRm9jdXMiLCJoYW5kbGVQYXNzd29yZEJsdXIiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlc3AiLCJqc29uIiwic2V0VXNlckxvZ0luIiwiY2hhbmdpbmdEYXRhIiwicmVqZWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwiY3JlYXRlUm9vdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdkxpbmsiLCJPdXRsZXQiLCJMYXlvdXQiLCJXZWxjb21lIiwiTWFpbkFwcGxpY2F0aW9uIiwiSW5mb3JtYXRpb24iLCJSZWdpc3RyYXRpb24iLCJVc2VyRGF0YSIsIkNyZWRpdENhbGN1bGF0b3IiLCJCb25kQ2FsY3VsYXRvciIsIkxvYW5DYWxjdWxhdG9yIiwiRGVwb3NpdENhbGN1bGF0b3IiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcGxpY2F0aW9uIiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwidXNlcnNDYWxjdWxhdGlvbnMiLCJzZXRVc2Vyc0NhbGN1bGF0aW9ucyIsInBhdGgiLCJlbGVtZW50Iiwic2V0VXNlckxvZ0lpIiwidXNlckRhdGEiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9