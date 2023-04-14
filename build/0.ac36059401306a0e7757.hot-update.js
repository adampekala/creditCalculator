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
        return data.password === password ? setUserData("Autoryzacja OK") : setUserData("Autoryzacja False");
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
/******/ 	__webpack_require__.h = function() { return "84d3129f4dc7f0314ecf"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUV6RztFQUNOLG9CQUNJMUIsMERBQUE7SUFBS3lCLFNBQVMsRUFBQztFQUFPLGdCQUNsQnpCLDBEQUFBO0lBQUt5QixTQUFTLEVBQUM7RUFBZ0IsRUFDekIsRUFDTEgsZUFBZSxDQUNkO0FBQ2QsQ0FBQztBQUVELCtEQUFlZixLQUFLOzs7Ozs7OztVQy9FcEIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xvZ2luL2xvZ2luLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmFNb25leUJpbGxBbHR9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtHaVJlY2VpdmVNb25leX0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQge1RiUGlnTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiO1xuaW1wb3J0IHtCc0Jhbmt9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShcIldwaXN6IExvZ2luLi4uXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJXcGlzeiBoYXPFgm8uLi5cIik7XG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbkZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogTG9naW4uLi5cIiAmJiBzZXRMb2dpbihcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogaGFzxYJvLi4uXCIgJiYgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTG9naW5CbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0TG9naW4oXCJXcGlzeiBMb2dpbi4uLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRQYXNzd29yZChcIldwaXN6IGhhc8WCby4uLlwiKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlTG9naW4gPSAoZSkgPT4ge1xuICAgICAgICBzZXRMb2dpbihlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmV0Y2goYCR7QVBJfS91c2Vycy8ke2xvZ2lufWApLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSkudGhlbihkYXRhID0+IGRhdGEucGFzc3dvcmQgPT09IHBhc3N3b3JkID8gc2V0VXNlckRhdGEoXCJBdXRvcnl6YWNqYSBPS1wiKSA6IHNldFVzZXJEYXRhKFwiQXV0b3J5emFjamEgRmFsc2VcIikpLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuICAgICAgICBwcm9wcy5zZXRVc2VyTG9nSW4odHJ1ZSk7XG5cbiAgICB9XG5cbiAgICBsZXQgbG9naW5BcHBlYXJlbmNlO1xuICAgIHByb3BzLnVzZXJMb2dJbiA/IGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwibG9naW5IZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgPGgxPld5Ymllcnoga2Fsa3VsYXRvcjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGN1bGF0b3JDaG9pY2VcIn0+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3JcIj48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48QnNCYW5rLz48c3Bhbj5LcmVkeXQ8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2xvYW5cIj48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48R2lSZWNlaXZlTW9uZXkvPjxzcGFuPlBvxbx5Y3prYTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3IvZGVwb3NpdFwiPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxUYlBpZ01vbmV5Lz48c3Bhbj5Mb2thdGE8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2JvbmRcIj48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48RmFNb25leUJpbGxBbHQvPjxzcGFuPk9ibGlnYWNqZTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgIGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwibG9naW5IZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgPGgxPldpdGFqPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wibG9naW5cIn0gdmFsdWU9e2xvZ2lufSBvbkZvY3VzPXtoYW5kbGVMb2dpbkZvY3VzfSBvbkJsdXI9e2hhbmRsZUxvZ2luQmx1cn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PkxvZ2luPC9zcGFuPjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtwYXNzd29yZCA9PT0gXCJXcGlzeiBoYXPFgm8uLi5cIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifSBuYW1lPXtcInBhc3N3b3JkXCJ9IHZhbHVlPXtwYXNzd29yZH0gb25Gb2N1cz17aGFuZGxlUGFzc3dvcmRGb2N1c30gb25CbHVyPXtoYW5kbGVQYXNzd29yZEJsdXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYXNzd29yZH0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5IYXPFgm88L3NwYW4+PC9sYWJlbD5cblxuXG4gICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGJ1dHRvbiBjbGFzc05hbWU9e1wibG9naW5CdG5Mb2dcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlphbG9ndWo8L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHA+PExpbmsgY2xhc3NOYW1lPXtcImxvZ2luUmVnaXN0cmF0aW9uTGlua1wifSB0bz1cIi9yZWdpc3RyYXRpb25cIj5OaWUgbWFzeiBrb250YT8gWmFyZWplc3RydWogc2nEmSE8L0xpbms+PC9wPlxuXG4gICAgPC9kaXY+O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5MZWZ0UGhvdG9cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xvZ2luQXBwZWFyZW5jZX1cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4NGQzMTI5ZjRkYzdmMDMxNGVjZlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1vbmV5QmlsbEFsdCIsIkdpUmVjZWl2ZU1vbmV5IiwiVGJQaWdNb25leSIsIkJzQmFuayIsIkxpbmsiLCJMb2dpbiIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibG9naW4iLCJzZXRMb2dpbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImxvZ2luQXBwZWFyZW5jZSIsInVzZXJMb2dJbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0byIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkZvY3VzIiwiaGFuZGxlTG9naW5Gb2N1cyIsInRhcmdldCIsIm9uQmx1ciIsImhhbmRsZUxvZ2luQmx1ciIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlTG9naW4iLCJoYW5kbGVQYXNzd29yZEZvY3VzIiwiaGFuZGxlUGFzc3dvcmRCbHVyIiwiaGFuZGxlQ2hhbmdlUGFzc3dvcmQiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJyZWplY3QiLCJjb25zb2xlIiwibG9nIiwic2V0VXNlckxvZ0luIl0sInNvdXJjZVJvb3QiOiIifQ==