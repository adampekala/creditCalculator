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
    verification = _useState6[0],
    setVerification = _useState6[1];
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8b7c42924a8f6fc9e296"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQUFBO0lBQUt5QixTQUFTLEVBQUM7RUFBTyxnQkFDbEJ6QiwwREFBQTtJQUFLeUIsU0FBUyxFQUFDO0VBQWdCLEVBQ3pCLEVBQ0xILGVBQWUsQ0FDZDtBQUNkLENBQUM7QUFFRCwrREFBZWYsS0FBSzs7Ozs7Ozs7VUM5RXBCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9Mb2dpbi9sb2dpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoXCJXcGlzeiBMb2dpbi4uLlwiKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiV3Bpc3ogaGFzxYJvLi4uXCIpO1xuICAgIGNvbnN0IFt2ZXJpZmljYXRpb24sIHNldFZlcmlmaWNhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbkZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogTG9naW4uLi5cIiAmJiBzZXRMb2dpbihcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogaGFzxYJvLi4uXCIgJiYgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTG9naW5CbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0TG9naW4oXCJXcGlzeiBMb2dpbi4uLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRQYXNzd29yZChcIldwaXN6IGhhc8WCby4uLlwiKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTG9naW4gPSAoZSkgPT4ge1xuICAgICAgICBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmV0Y2goYCR7QVBJfS91c2Vycy8ke2xvZ2lufWApLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSkudGhlbihkYXRhID0+IGRhdGEucGFzc3dvcmQgPT09IHBhc3N3b3JkID8gcHJvcHMuc2V0VXNlckxvZ0luKHRydWUpIDogcHJvcHMuc2V0VXNlckxvZ0luKGZhbHNlKSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpO1xuXG4gICAgfVxuXG4gICAgbGV0IGxvZ2luQXBwZWFyZW5jZTtcbiAgICBwcm9wcy51c2VyTG9nSW4gPyBsb2dpbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XeWJpZXJ6IGthbGt1bGF0b3I8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yQ2hvaWNlXCJ9PlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEJzQmFuay8+PHNwYW4+S3JlZHl0PC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9sb2FuXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEdpUmVjZWl2ZU1vbmV5Lz48c3Bhbj5Qb8W8eWN6a2E8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2RlcG9zaXRcIj48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48VGJQaWdNb25leS8+PHNwYW4+TG9rYXRhPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9ib25kXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEZhTW9uZXlCaWxsQWx0Lz48c3Bhbj5PYmxpZ2FjamU8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICBsb2dpbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XaXRhajwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImxvZ2luXCJ9IHZhbHVlPXtsb2dpbn0gb25Gb2N1cz17aGFuZGxlTG9naW5Gb2N1c30gb25CbHVyPXtoYW5kbGVMb2dpbkJsdXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Mb2dpbjwvc3Bhbj48L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17cGFzc3dvcmQgPT09IFwiV3Bpc3ogaGFzxYJvLi4uXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn0gbmFtZT17XCJwYXNzd29yZFwifSB2YWx1ZT17cGFzc3dvcmR9IG9uRm9jdXM9e2hhbmRsZVBhc3N3b3JkRm9jdXN9IG9uQmx1cj17aGFuZGxlUGFzc3dvcmRCbHVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGFzc3dvcmR9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+SGFzxYJvPC9zcGFuPjwvbGFiZWw+XG5cblxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvclwiPjxidXR0b24gY2xhc3NOYW1lPXtcImxvZ2luQnRuTG9nXCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5aYWxvZ3VqPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwPjxMaW5rIGNsYXNzTmFtZT17XCJsb2dpblJlZ2lzdHJhdGlvbkxpbmtcIn0gdG89XCIvcmVnaXN0cmF0aW9uXCI+TmllIG1hc3oga29udGE/IFphcmVqZXN0cnVqIHNpxJkhPC9MaW5rPjwvcD5cblxuICAgIDwvZGl2PjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtsb2dpbkFwcGVhcmVuY2V9XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOGI3YzQyOTI0YThmNmZjOWUyOTZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMaW5rIiwiTG9naW4iLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2luIiwic2V0TG9naW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInZlcmlmaWNhdGlvbiIsInNldFZlcmlmaWNhdGlvbiIsImxvZ2luQXBwZWFyZW5jZSIsInVzZXJMb2dJbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0byIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkZvY3VzIiwiaGFuZGxlTG9naW5Gb2N1cyIsInRhcmdldCIsIm9uQmx1ciIsImhhbmRsZUxvZ2luQmx1ciIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlTG9naW4iLCJoYW5kbGVQYXNzd29yZEZvY3VzIiwiaGFuZGxlUGFzc3dvcmRCbHVyIiwiaGFuZGxlQ2hhbmdlUGFzc3dvcmQiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJzZXRVc2VyTG9nSW4iLCJyZWplY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==