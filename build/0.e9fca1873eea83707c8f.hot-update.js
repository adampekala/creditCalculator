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






var Login = function (props) {
  var loginAppearence;
  props.userLogIn ? loginAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Wybierz kalkulator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calculatorChoice"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaMoneyBillAlt, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Obligacje")))) : loginAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "50312566082e3cd39c4c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVdBLENBQUlWLENBQUMsRUFBSztNQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEJULEtBQUssQ0FBQ21CLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFFNUI7RUFzQm9GLEdBQUMsU0FBTyxDQUFTLENBQU8sQ0FDakcsZUFDUDNCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUNPLEVBQUUsRUFBQztFQUFHLEdBQUMsdUNBQWdDLENBQU8sQ0FDbEQ7RUFDTixvQkFDSWIsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQVMsZ0JBQ3BCWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBa0IsRUFDM0IsRUFDTEgsZUFBZSxDQUNkO0FBQ2QsQ0FBQztBQUVELCtEQUFlRixLQUFLOzs7Ozs7OztVQ2xEcEIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xvZ2luL2xvZ2luLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmFNb25leUJpbGxBbHR9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtHaVJlY2VpdmVNb25leX0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQge1RiUGlnTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiO1xuaW1wb3J0IHtCc0Jhbmt9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaWNvbnNTdHlsZSA9IHt3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCJ9O1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb3BzLnNldFVzZXJMb2dJbih0cnVlKTtcblxuICAgIH1cblxuICAgIGxldCBsb2dpbkFwcGVhcmVuY2U7XG4gICAgcHJvcHMudXNlckxvZ0luID8gbG9naW5BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XeWJpZXJ6IGthbGt1bGF0b3I8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yQ2hvaWNlXCJ9PjwvZGl2PlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEJzQmFuay8+PHNwYW4+S3JlZHl0PC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9sb2FuXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEdpUmVjZWl2ZU1vbmV5Lz48c3Bhbj5Qb8W8eWN6a2E8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2RlcG9zaXRcIj48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48VGJQaWdNb25leS8+PHNwYW4+TG9rYXRhPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9ib25kXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEZhTW9uZXlCaWxsQWx0Lz48c3Bhbj5PYmxpZ2FjamU8L3NwYW4+PC9kaXY+PC9MaW5rPlxuXG4gICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgbG9naW5BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XaXRhajwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17XCJXcGlzeiBrd290xJkga3JlZHl0dVwifS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PkxvZ2luPC9zcGFuPjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtcInBhc3N3b3JkXCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXtcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+SGFzxYJvPC9zcGFuPjwvbGFiZWw+XG5cblxuXG4gICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5aYWxvZ3VqPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPk5pZSBtYXN6IGtvbnRhPyBaYXJlamVzdHJ1aiBzacSZITwvTGluaz5cbiAgICA8L2Rpdj47XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVMZWZ0UGhvdG9cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xvZ2luQXBwZWFyZW5jZX1cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI1MDMxMjU2NjA4MmUzY2QzOWM0Y1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1vbmV5QmlsbEFsdCIsIkdpUmVjZWl2ZU1vbmV5IiwiVGJQaWdNb25leSIsIkJzQmFuayIsIkxpbmsiLCJMb2dpbiIsInByb3BzIiwibG9naW5BcHBlYXJlbmNlIiwidXNlckxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayIsInNldFVzZXJMb2dJbiJdLCJzb3VyY2VSb290IjoiIn0=