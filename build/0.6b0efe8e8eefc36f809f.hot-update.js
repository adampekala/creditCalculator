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
  props.setUserLogIn ? loginAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "42a3b8b935d316e13131"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YjBlZmU4ZThlZWZjMzZmODA5Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0M7QUFDUTtBQUNBO0FBQ0o7QUFDTDtBQUNBO0FBRXJDLElBQU1PLEtBQUssR0FBRyxTQUFBQSxDQUFDQyxLQUFLLEVBQUs7RUFXckIsSUFBSUMsZUFBZTtFQUNuQkQsS0FBSyxDQUFDRSxZQUFZLEdBQUdELGVBQWUsZ0JBQUdULDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUEyQixnQkFDN0VaLDBEQUFBLGFBQUksT0FBSyxDQUFLLGVBRWRBLDBEQUFBLENBQUNNLGtEQUFJO0lBQUNPLEVBQUUsRUFBQztFQUFHLEdBQUMsdUNBQWdDLENBQU8sZUFDcERiLDBEQUFBLENBQUNNLGtEQUFJO0lBQUNPLEVBQUUsRUFBQztFQUFHLEdBQUMsdUNBQWdDLENBQU8sZUFDcERiLDBEQUFBLENBQUNNLGtEQUFJO0lBQUNPLEVBQUUsRUFBQztFQUFHLEdBQUMsdUNBQWdDLENBQU8sQ0FDbEQsR0FFRkosZUFBZSxnQkFBR1QsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQTJCLGdCQUM1RFosMERBQUEsYUFBSSxPQUFLLENBQUssZUFDZEEsMERBQUE7SUFBTWMsUUFBUSxFQXBCRyxTQUFmQyxZQUFZQSxDQUFJQyxDQUFDLEVBQUs7TUFDeEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ3RCO0VBa0JpQyxnQkFDekJqQiwwREFBQTtJQUFPa0IsS0FBSyxFQUFFO01BQUNDLE9BQU8sRUFBRSxPQUFPO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVDLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQUNyQiwwREFBQTtJQUFPc0IsSUFBSSxFQUFFLE1BQU87SUFBQ0MsSUFBSSxFQUFFLFFBQVM7SUFBQ0MsS0FBSyxFQUFFO0VBQXNCLEVBQUUsZUFBQXhCLDBEQUFBO0lBQU1ZLFNBQVMsRUFBRSx1QkFBd0I7SUFBQ00sS0FBSyxFQUFFO01BQUNDLE9BQU8sRUFBRSxPQUFPO01BQUVDLFFBQVEsRUFBRTtJQUFVO0VBQUUsR0FBQyxPQUFLLENBQU8sQ0FBUSxlQUUzUHBCLDBEQUFBO0lBQU9rQixLQUFLLEVBQUU7TUFBQ0MsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRUMsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFBQ3JCLDBEQUFBO0lBQU9zQixJQUFJLEVBQUUsVUFBVztJQUFDQyxJQUFJLEVBQUUsUUFBUztJQUFDQyxLQUFLLEVBQUU7RUFBc0IsRUFBRSxlQUFBeEIsMERBQUE7SUFBTVksU0FBUyxFQUFFLHVCQUF3QjtJQUFDTSxLQUFLLEVBQUU7TUFBQ0MsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFO0lBQVU7RUFBRSxHQUFDLFlBQUssQ0FBTyxDQUFRLGVBSS9QcEIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ08sRUFBRSxFQUFDO0VBQWEsZ0JBQUNiLDBEQUFBO0lBQVFZLFNBQVMsRUFBRSxXQUFZO0lBQUNhLE9BQU8sRUF4QmxELFNBQWRDLFdBQVdBLENBQUlWLENBQUMsRUFBSztNQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFDbEJULEtBQUssQ0FBQ0UsWUFBWSxDQUFDLElBQUksQ0FBQztJQUU1QjtFQW9Cb0YsR0FBQyxTQUFPLENBQVMsQ0FBTyxDQUNqRyxlQUNQViwwREFBQSxDQUFDTSxrREFBSTtJQUFDTyxFQUFFLEVBQUM7RUFBRyxHQUFDLHVDQUFnQyxDQUFPLENBQ2xEO0VBQ04sb0JBQ0liLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFTLGdCQUNwQlosMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQWtCLEVBQzNCLEVBQ0xILGVBQWUsQ0FDZDtBQUNkLENBQUM7QUFFRCwrREFBZUYsS0FBSzs7Ozs7Ozs7VUNoRHBCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9Mb2dpbi9sb2dpbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwifTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9wcy5zZXRVc2VyTG9nSW4odHJ1ZSk7XG5cbiAgICB9XG5cbiAgICBsZXQgbG9naW5BcHBlYXJlbmNlO1xuICAgIHByb3BzLnNldFVzZXJMb2dJbiA/IGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICA8aDE+V2l0YWo8L2gxPlxuXG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPk5pZSBtYXN6IGtvbnRhPyBaYXJlamVzdHJ1aiBzacSZITwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+TmllIG1hc3oga29udGE/IFphcmVqZXN0cnVqIHNpxJkhPC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5OaWUgbWFzeiBrb250YT8gWmFyZWplc3RydWogc2nEmSE8L0xpbms+XG4gICAgPC9kaXY+XG4gICAgICAgIDpcbiAgICAgICAgbG9naW5BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgIDxoMT5XaXRhajwvaDE+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17XCJXcGlzeiBrd290xJkga3JlZHl0dVwifS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PkxvZ2luPC9zcGFuPjwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtcInBhc3N3b3JkXCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXtcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+SGFzxYJvPC9zcGFuPjwvbGFiZWw+XG5cblxuXG4gICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5aYWxvZ3VqPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPk5pZSBtYXN6IGtvbnRhPyBaYXJlamVzdHJ1aiBzacSZITwvTGluaz5cbiAgICA8L2Rpdj47XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVMZWZ0UGhvdG9cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xvZ2luQXBwZWFyZW5jZX1cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI0MmEzYjhiOTM1ZDMxNmUxMzEzMVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1vbmV5QmlsbEFsdCIsIkdpUmVjZWl2ZU1vbmV5IiwiVGJQaWdNb25leSIsIkJzQmFuayIsIkxpbmsiLCJMb2dpbiIsInByb3BzIiwibG9naW5BcHBlYXJlbmNlIiwic2V0VXNlckxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=