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
          fetch("".concat(API, "/data/").concat(data.id)).then(function (resp) {
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
/******/ 	__webpack_require__.h = function() { return "74079eceaf5a12f2817b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTtVQUFDbEQsS0FBSyxDQUFDK0MsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUFBO01BQUMsQ0FBQyxDQUFDLFNBQ3BDLENBQUMsVUFBQUcsTUFBTTtRQUFBLE9BQUl2QyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3NDLE1BQU0sQ0FBQztNQUFBLEVBQUM7SUFFN0M7RUFxQnNGLEdBQUMsU0FBTyxDQUFTLENBQU8sQ0FDbkcsZUFDUDFELDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDTSxrREFBSTtJQUFDbUIsU0FBUyxFQUFFLHVCQUF3QjtJQUFDQyxFQUFFLEVBQUM7RUFBZSxHQUFDLHVDQUFnQyxDQUFPLENBQUksQ0FFekc7RUFDTixvQkFDSTFCLDBEQUFBO0lBQUt5QixTQUFTLEVBQUM7RUFBTyxnQkFDbEJ6QiwwREFBQTtJQUFLeUIsU0FBUyxFQUFDO0VBQWdCLEVBQ3pCLEVBQ0xILGVBQWUsQ0FDZDtBQUNkLENBQUM7QUFFRCwrREFBZWYsS0FBSzs7Ozs7Ozs7VUN6RnBCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9Mb2dpbi9sb2dpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKFwiV3Bpc3ogTG9naW4uLi5cIik7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIldwaXN6IGhhc8WCby4uLlwiKTtcblxuICAgIGNvbnNvbGUubG9nKHByb3BzLmRhdGEpO1xuXG4gICAgY29uc3QgaGFuZGxlTG9naW5Gb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IExvZ2luLi4uXCIgJiYgc2V0TG9naW4oXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGhhc8WCby4uLlwiICYmIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldExvZ2luKFwiV3Bpc3ogTG9naW4uLi5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGFzc3dvcmQoXCJXcGlzeiBoYXPFgm8uLi5cIik7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUxvZ2luID0gKGUpID0+IHtcbiAgICAgICAgc2V0TG9naW4oZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmZXRjaChgJHtBUEl9L3VzZXJzLyR7bG9naW59YClcbiAgICAgICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXNzd29yZCA9PT0gcGFzc3dvcmQgKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNldFVzZXJMb2dJbih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGAke0FQSX0vZGF0YS8ke2RhdGEuaWR9YCkudGhlbihyZXNwID0+IHJlc3AuanNvbigpKS50aGVuKGRhdGEgPT4gcHJvcHMuY2hhbmdpbmdEYXRhKGRhdGEpKS5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge3Byb3BzLnNldFVzZXJMb2dJbihmYWxzZSl9fSlcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSk7XG5cbiAgICB9XG5cbiAgICBsZXQgbG9naW5BcHBlYXJlbmNlO1xuICAgIHByb3BzLnVzZXJMb2dJbiA/IGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwibG9naW5IZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgPGgxPld5Ymllcnoga2Fsa3VsYXRvcjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGN1bGF0b3JDaG9pY2VcIn0+XG4gICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3JcIiA+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEJzQmFuay8+PHNwYW4+S3JlZHl0PC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9sb2FuXCIgPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9PjxHaVJlY2VpdmVNb25leS8+PHNwYW4+UG/FvHljemthPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9kZXBvc2l0XCIgPjxkaXYgY2xhc3NOYW1lPXtcIkNhbGN1bGF0b3JDaG9pY2UtYnRuXCJ9ID48VGJQaWdNb25leS8+PHNwYW4+TG9rYXRhPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9ib25kXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEZhTW9uZXlCaWxsQWx0Lz48c3Bhbj5PYmxpZ2FjamU8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICBsb2dpbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XaXRhajwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImxvZ2luXCJ9IHZhbHVlPXtsb2dpbn0gb25Gb2N1cz17aGFuZGxlTG9naW5Gb2N1c30gb25CbHVyPXtoYW5kbGVMb2dpbkJsdXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VMb2dpbn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Mb2dpbjwvc3Bhbj48L2xhYmVsPlxuXG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17cGFzc3dvcmQgPT09IFwiV3Bpc3ogaGFzxYJvLi4uXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn0gbmFtZT17XCJwYXNzd29yZFwifSB2YWx1ZT17cGFzc3dvcmR9IG9uRm9jdXM9e2hhbmRsZVBhc3N3b3JkRm9jdXN9IG9uQmx1cj17aGFuZGxlUGFzc3dvcmRCbHVyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGFzc3dvcmR9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+SGFzxYJvPC9zcGFuPjwvbGFiZWw+XG5cblxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvclwiPjxidXR0b24gY2xhc3NOYW1lPXtcImxvZ2luQnRuTG9nXCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5aYWxvZ3VqPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwPjxMaW5rIGNsYXNzTmFtZT17XCJsb2dpblJlZ2lzdHJhdGlvbkxpbmtcIn0gdG89XCIvcmVnaXN0cmF0aW9uXCI+TmllIG1hc3oga29udGE/IFphcmVqZXN0cnVqIHNpxJkhPC9MaW5rPjwvcD5cblxuICAgIDwvZGl2PjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtsb2dpbkFwcGVhcmVuY2V9XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNzQwNzllY2VhZjVhMTJmMjgxN2JcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMaW5rIiwiTG9naW4iLCJwcm9wcyIsIkFQSSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2luIiwic2V0TG9naW4iLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvZ2luQXBwZWFyZW5jZSIsInVzZXJMb2dJbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0byIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsInR5cGUiLCJuYW1lIiwidmFsdWUiLCJvbkZvY3VzIiwiaGFuZGxlTG9naW5Gb2N1cyIsInRhcmdldCIsIm9uQmx1ciIsImhhbmRsZUxvZ2luQmx1ciIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlTG9naW4iLCJoYW5kbGVQYXNzd29yZEZvY3VzIiwiaGFuZGxlUGFzc3dvcmRCbHVyIiwiaGFuZGxlQ2hhbmdlUGFzc3dvcmQiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJmZXRjaCIsImNvbmNhdCIsInRoZW4iLCJyZXNwIiwianNvbiIsInNldFVzZXJMb2dJbiIsImlkIiwiY2hhbmdpbmdEYXRhIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==