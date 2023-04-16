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
          fetch("".concat(API, "/data/1")).then(function (resp) {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8c913925063bd26fce59"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7UUFBQTtNQUFDLENBQUMsQ0FBQyxTQUNwQyxDQUFDLFVBQUFFLE1BQU07UUFBQSxPQUFJdEMsT0FBTyxDQUFDQyxHQUFHLENBQUNxQyxNQUFNLENBQUM7TUFBQSxFQUFDO0lBRTdDO0VBcUJzRixHQUFDLFNBQU8sQ0FBUyxDQUFPLENBQ25HLGVBQ1B6RCwwREFBQSx5QkFBR0EsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ21CLFNBQVMsRUFBRSx1QkFBd0I7SUFBQ0MsRUFBRSxFQUFDO0VBQWUsR0FBQyx1Q0FBZ0MsQ0FBTyxDQUFJLENBRXpHO0VBQ04sb0JBQ0kxQiwwREFBQTtJQUFLeUIsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCekIsMERBQUE7SUFBS3lCLFNBQVMsRUFBQztFQUFnQixFQUN6QixFQUNMSCxlQUFlLENBQ2Q7QUFDZCxDQUFDO0FBRUQsK0RBQWVmLEtBQUs7Ozs7Ozs7O1VDekZwQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGYU1vbmV5QmlsbEFsdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0dpUmVjZWl2ZU1vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7VGJQaWdNb25leX0gZnJvbSBcInJlYWN0LWljb25zL3RiXCI7XG5pbXBvcnQge0JzQmFua30gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShcIldwaXN6IExvZ2luLi4uXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJXcGlzeiBoYXPFgm8uLi5cIik7XG5cbiAgICBjb25zb2xlLmxvZyhwcm9wcy5kYXRhKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBMb2dpbi4uLlwiICYmIHNldExvZ2luKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBoYXPFgm8uLi5cIiAmJiBzZXRQYXNzd29yZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbkJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRMb2dpbihcIldwaXN6IExvZ2luLi4uXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBhc3N3b3JkKFwiV3Bpc3ogaGFzxYJvLi4uXCIpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VMb2dpbiA9IChlKSA9PiB7XG4gICAgICAgIHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYXNzd29yZCA9IChlKSA9PiB7XG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmV0Y2goYCR7QVBJfS91c2Vycy8ke2xvZ2lufWApXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucGFzc3dvcmQgPT09IHBhc3N3b3JkICkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRVc2VyTG9nSW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChgJHtBUEl9L2RhdGEvMWApLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSkudGhlbihkYXRhID0+IHByb3BzLmNoYW5naW5nRGF0YShkYXRhKSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtwcm9wcy5zZXRVc2VyTG9nSW4oZmFsc2UpfX0pXG4gICAgICAgICAgICAuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpO1xuXG4gICAgfVxuXG4gICAgbGV0IGxvZ2luQXBwZWFyZW5jZTtcbiAgICBwcm9wcy51c2VyTG9nSW4gPyBsb2dpbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XeWJpZXJ6IGthbGt1bGF0b3I8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yQ2hvaWNlXCJ9PlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCIgPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxCc0JhbmsvPjxzcGFuPktyZWR5dDwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3IvbG9hblwiID48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48R2lSZWNlaXZlTW9uZXkvPjxzcGFuPlBvxbx5Y3prYTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3IvZGVwb3NpdFwiID48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifSA+PFRiUGlnTW9uZXkvPjxzcGFuPkxva2F0YTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3IvYm9uZFwiPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxGYU1vbmV5QmlsbEFsdC8+PHNwYW4+T2JsaWdhY2plPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgbG9naW5BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJsb2dpbkhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICA8aDE+V2l0YWo8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJsb2dpblwifSB2YWx1ZT17bG9naW59IG9uRm9jdXM9e2hhbmRsZUxvZ2luRm9jdXN9IG9uQmx1cj17aGFuZGxlTG9naW5CbHVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+TG9naW48L3NwYW4+PC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e3Bhc3N3b3JkID09PSBcIldwaXN6IGhhc8WCby4uLlwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9IG5hbWU9e1wicGFzc3dvcmRcIn0gdmFsdWU9e3Bhc3N3b3JkfSBvbkZvY3VzPXtoYW5kbGVQYXNzd29yZEZvY3VzfSBvbkJsdXI9e2hhbmRsZVBhc3N3b3JkQmx1cn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBhc3N3b3JkfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pkhhc8WCbzwvc3Bhbj48L2xhYmVsPlxuXG5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3JcIj48YnV0dG9uIGNsYXNzTmFtZT17XCJsb2dpbkJ0bkxvZ1wifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+WmFsb2d1ajwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8cD48TGluayBjbGFzc05hbWU9e1wibG9naW5SZWdpc3RyYXRpb25MaW5rXCJ9IHRvPVwiL3JlZ2lzdHJhdGlvblwiPk5pZSBtYXN6IGtvbnRhPyBaYXJlamVzdHJ1aiBzacSZITwvTGluaz48L3A+XG5cbiAgICA8L2Rpdj47XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkxlZnRQaG90b1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bG9naW5BcHBlYXJlbmNlfVxuICAgICAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjhjOTEzOTI1MDYzYmQyNmZjZTU5XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhTW9uZXlCaWxsQWx0IiwiR2lSZWNlaXZlTW9uZXkiLCJUYlBpZ01vbmV5IiwiQnNCYW5rIiwiTGluayIsIkxvZ2luIiwicHJvcHMiLCJBUEkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dpbiIsInNldExvZ2luIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJsb2dpbkFwcGVhcmVuY2UiLCJ1c2VyTG9nSW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidG8iLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25Gb2N1cyIsImhhbmRsZUxvZ2luRm9jdXMiLCJ0YXJnZXQiLCJvbkJsdXIiLCJoYW5kbGVMb2dpbkJsdXIiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZUxvZ2luIiwiaGFuZGxlUGFzc3dvcmRGb2N1cyIsImhhbmRsZVBhc3N3b3JkQmx1ciIsImhhbmRsZUNoYW5nZVBhc3N3b3JkIiwib25DbGljayIsImhhbmRsZUNsaWNrIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJzZXRVc2VyTG9nSW4iLCJjaGFuZ2luZ0RhdGEiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9