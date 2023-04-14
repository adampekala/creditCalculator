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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz Login..."),
    _useState2 = _slicedToArray(_useState, 2),
    login = _useState2[0],
    setLogin = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz hasło..."),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    userData = _useState6[0],
    setUserData = _useState6[1];
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
      fetch("".concat("http://localhost:3005", "/users/").concat(login)).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        return setUserData(data);
      })["catch"](function (reject) {
        return console.log(reject);
      });
      props.setUserLogIn(true);
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
/******/ 	__webpack_require__.h = function() { return "ac36059401306a0e7757"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUFLeUIsU0FBUyxFQUFDO0VBQWdCLEVBQ3pCLEVBQ0xILGVBQWUsQ0FDZDtBQUNkLENBQUM7QUFFRCwrREFBZWYsS0FBSzs7Ozs7Ozs7VUMvRXBCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9Mb2dpbi9sb2dpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoXCJXcGlzeiBMb2dpbi4uLlwiKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiV3Bpc3ogaGFzxYJvLi4uXCIpO1xuICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlTG9naW5Gb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IExvZ2luLi4uXCIgJiYgc2V0TG9naW4oXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGhhc8WCby4uLlwiICYmIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldExvZ2luKFwiV3Bpc3ogTG9naW4uLi5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGFzc3dvcmQoXCJXcGlzeiBoYXPFgm8uLi5cIik7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUxvZ2luID0gKGUpID0+IHtcbiAgICAgICAgc2V0TG9naW4oZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZldGNoKGAke0FQSX0vdXNlcnMvJHtsb2dpbn1gKS50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpLnRoZW4oZGF0YSA9PiBzZXRVc2VyRGF0YShkYXRhKSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpXG4gICAgICAgIHByb3BzLnNldFVzZXJMb2dJbih0cnVlKTtcblxuICAgIH1cblxuICAgIGxldCBsb2dpbkFwcGVhcmVuY2U7XG4gICAgcHJvcHMudXNlckxvZ0luID8gbG9naW5BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJsb2dpbkhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICA8aDE+V3liaWVyeiBrYWxrdWxhdG9yPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvckNob2ljZVwifT5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvclwiPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxCc0JhbmsvPjxzcGFuPktyZWR5dDwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3IvbG9hblwiPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxHaVJlY2VpdmVNb25leS8+PHNwYW4+UG/FvHljemthPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9kZXBvc2l0XCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PFRiUGlnTW9uZXkvPjxzcGFuPkxva2F0YTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3IvYm9uZFwiPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxGYU1vbmV5QmlsbEFsdC8+PHNwYW4+T2JsaWdhY2plPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgbG9naW5BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJsb2dpbkhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICA8aDE+V2l0YWo8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJsb2dpblwifSB2YWx1ZT17bG9naW59IG9uRm9jdXM9e2hhbmRsZUxvZ2luRm9jdXN9IG9uQmx1cj17aGFuZGxlTG9naW5CbHVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTG9naW59Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+TG9naW48L3NwYW4+PC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e3Bhc3N3b3JkID09PSBcIldwaXN6IGhhc8WCby4uLlwiID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9IG5hbWU9e1wicGFzc3dvcmRcIn0gdmFsdWU9e3Bhc3N3b3JkfSBvbkZvY3VzPXtoYW5kbGVQYXNzd29yZEZvY3VzfSBvbkJsdXI9e2hhbmRsZVBhc3N3b3JkQmx1cn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVBhc3N3b3JkfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pkhhc8WCbzwvc3Bhbj48L2xhYmVsPlxuXG5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3JcIj48YnV0dG9uIGNsYXNzTmFtZT17XCJsb2dpbkJ0bkxvZ1wifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+WmFsb2d1ajwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8cD48TGluayBjbGFzc05hbWU9e1wibG9naW5SZWdpc3RyYXRpb25MaW5rXCJ9IHRvPVwiL3JlZ2lzdHJhdGlvblwiPk5pZSBtYXN6IGtvbnRhPyBaYXJlamVzdHJ1aiBzacSZITwvTGluaz48L3A+XG5cbiAgICA8L2Rpdj47XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkxlZnRQaG90b1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bG9naW5BcHBlYXJlbmNlfVxuICAgICAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImFjMzYwNTk0MDEzMDZhMGU3NzU3XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhTW9uZXlCaWxsQWx0IiwiR2lSZWNlaXZlTW9uZXkiLCJUYlBpZ01vbmV5IiwiQnNCYW5rIiwiTGluayIsIkxvZ2luIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dpbiIsInNldExvZ2luIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibG9naW5BcHBlYXJlbmNlIiwidXNlckxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uRm9jdXMiLCJoYW5kbGVMb2dpbkZvY3VzIiwidGFyZ2V0Iiwib25CbHVyIiwiaGFuZGxlTG9naW5CbHVyIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2VMb2dpbiIsImhhbmRsZVBhc3N3b3JkRm9jdXMiLCJoYW5kbGVQYXNzd29yZEJsdXIiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayIsImZldGNoIiwiY29uY2F0IiwidGhlbiIsInJlc3AiLCJqc29uIiwiZGF0YSIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRVc2VyTG9nSW4iXSwic291cmNlUm9vdCI6IiJ9