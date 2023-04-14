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
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbPigMoney, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Lokata"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/bond",
    onClick: gettingData
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6d8e90d1153a6f405600"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsVUFBQUosSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ0osUUFBUSxLQUFLQSxRQUFRLEdBQUdULEtBQUssQ0FBQ2tELFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBR2xELEtBQUssQ0FBQ2tELFlBQVksQ0FBQyxLQUFLLENBQUM7TUFBQSxFQUFDLFNBQU0sQ0FBQyxVQUFBN0IsTUFBTTtRQUFBLE9BQUlWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxNQUFNLENBQUM7TUFBQSxFQUFDO0lBRWpNO0VBcUJzRixHQUFDLFNBQU8sQ0FBUyxDQUFPLENBQ25HLGVBQ1A3QiwwREFBQSx5QkFBR0EsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQzJCLFNBQVMsRUFBRSx1QkFBd0I7SUFBQ0MsRUFBRSxFQUFDO0VBQWUsR0FBQyx1Q0FBZ0MsQ0FBTyxDQUFJLENBRXpHO0VBQ04sb0JBQ0lsQywwREFBQTtJQUFLaUMsU0FBUyxFQUFDO0VBQU8sZ0JBQ2xCakMsMERBQUE7SUFBS2lDLFNBQVMsRUFBQztFQUFnQixFQUN6QixFQUNMSCxlQUFlLENBQ2Q7QUFDZCxDQUFDO0FBRUQsK0RBQWV2QixLQUFLOzs7Ozs7OztVQ25GcEIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xvZ2luL2xvZ2luLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmFNb25leUJpbGxBbHR9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtHaVJlY2VpdmVNb25leX0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQge1RiUGlnTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiO1xuaW1wb3J0IHtCc0Jhbmt9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIlxuICAgIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoXCJXcGlzeiBMb2dpbi4uLlwiKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiV3Bpc3ogaGFzxYJvLi4uXCIpO1xuXG4gICAgY29uc29sZS5sb2cocHJvcHMuZGF0YSk7XG4gICAgY29uc3QgZ2V0dGluZ0RhdGEgPSAoKSA9PiB7XG4gICAgICAgIGZldGNoKGAke0FQSX0vJHtsb2dpbn1gKS50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpLnRoZW4oZGF0YSA9PiBwcm9wcy5jaGFuZ2luZ0RhdGEoZGF0YSkpLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBMb2dpbi4uLlwiICYmIHNldExvZ2luKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBoYXPFgm8uLi5cIiAmJiBzZXRQYXNzd29yZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbkJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRMb2dpbihcIldwaXN6IExvZ2luLi4uXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBhc3N3b3JkKFwiV3Bpc3ogaGFzxYJvLi4uXCIpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VMb2dpbiA9IChlKSA9PiB7XG4gICAgICAgIHNldExvZ2luKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQYXNzd29yZCA9IChlKSA9PiB7XG4gICAgICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmV0Y2goYCR7QVBJfS91c2Vycy8ke2xvZ2lufWApLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSkudGhlbihkYXRhID0+IGRhdGEucGFzc3dvcmQgPT09IHBhc3N3b3JkID8gcHJvcHMuc2V0VXNlckxvZ0luKHRydWUpIDogcHJvcHMuc2V0VXNlckxvZ0luKGZhbHNlKSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpO1xuXG4gICAgfVxuXG4gICAgbGV0IGxvZ2luQXBwZWFyZW5jZTtcbiAgICBwcm9wcy51c2VyTG9nSW4gPyBsb2dpbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XeWJpZXJ6IGthbGt1bGF0b3I8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yQ2hvaWNlXCJ9PlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCIgb25DbGljaz17Z2V0dGluZ0RhdGF9ID48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48QnNCYW5rLz48c3Bhbj5LcmVkeXQ8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2xvYW5cIiBvbkNsaWNrPXtnZXR0aW5nRGF0YX0gPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxHaVJlY2VpdmVNb25leS8+PHNwYW4+UG/FvHljemthPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9kZXBvc2l0XCIgb25DbGljaz17Z2V0dGluZ0RhdGF9ID48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifSA+PFRiUGlnTW9uZXkvPjxzcGFuPkxva2F0YTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3IvYm9uZFwiIG9uQ2xpY2s9e2dldHRpbmdEYXRhfT48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48RmFNb25leUJpbGxBbHQvPjxzcGFuPk9ibGlnYWNqZTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgIGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwibG9naW5IZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgPGgxPldpdGFqPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wibG9naW5cIn0gdmFsdWU9e2xvZ2lufSBvbkZvY3VzPXtoYW5kbGVMb2dpbkZvY3VzfSBvbkJsdXI9e2hhbmRsZUxvZ2luQmx1cn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvZ2lufS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PkxvZ2luPC9zcGFuPjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtwYXNzd29yZCA9PT0gXCJXcGlzeiBoYXPFgm8uLi5cIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifSBuYW1lPXtcInBhc3N3b3JkXCJ9IHZhbHVlPXtwYXNzd29yZH0gb25Gb2N1cz17aGFuZGxlUGFzc3dvcmRGb2N1c30gb25CbHVyPXtoYW5kbGVQYXNzd29yZEJsdXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VQYXNzd29yZH0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5IYXPFgm88L3NwYW4+PC9sYWJlbD5cblxuXG4gICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGJ1dHRvbiBjbGFzc05hbWU9e1wibG9naW5CdG5Mb2dcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlphbG9ndWo8L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHA+PExpbmsgY2xhc3NOYW1lPXtcImxvZ2luUmVnaXN0cmF0aW9uTGlua1wifSB0bz1cIi9yZWdpc3RyYXRpb25cIj5OaWUgbWFzeiBrb250YT8gWmFyZWplc3RydWogc2nEmSE8L0xpbms+PC9wPlxuXG4gICAgPC9kaXY+O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5MZWZ0UGhvdG9cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xvZ2luQXBwZWFyZW5jZX1cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI2ZDhlOTBkMTE1M2E2ZjQwNTYwMFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1vbmV5QmlsbEFsdCIsIkdpUmVjZWl2ZU1vbmV5IiwiVGJQaWdNb25leSIsIkJzQmFuayIsIkxpbmsiLCJMb2dpbiIsInByb3BzIiwiQVBJIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibG9naW4iLCJzZXRMb2dpbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZ2V0dGluZ0RhdGEiLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXNwIiwianNvbiIsImNoYW5naW5nRGF0YSIsInJlamVjdCIsImxvZ2luQXBwZWFyZW5jZSIsInVzZXJMb2dJbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0byIsIm9uQ2xpY2siLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25Gb2N1cyIsImhhbmRsZUxvZ2luRm9jdXMiLCJ0YXJnZXQiLCJvbkJsdXIiLCJoYW5kbGVMb2dpbkJsdXIiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZUxvZ2luIiwiaGFuZGxlUGFzc3dvcmRGb2N1cyIsImhhbmRsZVBhc3N3b3JkQmx1ciIsImhhbmRsZUNoYW5nZVBhc3N3b3JkIiwiaGFuZGxlQ2xpY2siLCJzZXRVc2VyTG9nSW4iXSwic291cmNlUm9vdCI6IiJ9