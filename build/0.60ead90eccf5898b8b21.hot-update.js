"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 46:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Welcome = function (props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.userLogIn),
    _useState2 = _slicedToArray(_useState, 2),
    isLogged = _useState2[0],
    setIsLogged = _useState2[1];
  var iconsStyle = {
    width: "50px",
    height: "50px"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeLeftPhoto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Dzi\u0119ki Odsetkomatowi obliczysz:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "welcomeHero-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_1__.TbPigMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "wysoko\u015B\u0107 po\u017Cyczki")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "oprocentowanie kredytu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "odsetki od lokaty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMoneyBillAlt, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "zysk z obligacji"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: props.userLogIn ? '/calculator' : '/login',
    className: "thirdColor logLink"
  }, "Skorzystaj z kalkulatora")));
};
/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Wybierz kalkulator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btnCalculatorChoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Kredyt"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/loan"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btnCalculatorChoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Po\u017Cyczka"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/deposit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btnCalculatorChoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbPigMoney, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Lokata"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/bond"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "btnCalculatorChoice"
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
/******/ 	__webpack_require__.h = function() { return "e9fca1873eea83707c8f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQXNCLEVBQUUsZUFBQWhDLDBEQUFBO0lBQU1tQixTQUFTLEVBQUUsdUJBQXdCO0lBQUNDLEtBQUssRUFBRTtNQUFDUSxPQUFPLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUU7SUFBVTtFQUFFLEdBQUMsWUFBSyxDQUFPLENBQVEsZUFJL1A3QiwwREFBQSxDQUFDTSxrREFBSTtJQUFDZSxFQUFFLEVBQUM7RUFBYSxnQkFBQ3JCLDBEQUFBO0lBQVFtQixTQUFTLEVBQUUsV0FBWTtJQUFDYyxPQUFPLEVBMUJsRCxTQUFkQyxXQUFXQSxDQUFJUixDQUFDLEVBQUs7TUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO01BQ2xCbkIsS0FBSyxDQUFDMkIsWUFBWSxDQUFDLElBQUksQ0FBQztJQUU1QjtFQXNCb0YsR0FBQyxTQUFPLENBQVMsQ0FBTyxDQUNqRyxlQUNQbkMsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ2UsRUFBRSxFQUFDO0VBQUcsR0FBQyx1Q0FBZ0MsQ0FBTyxDQUNsRDtFQUNOLG9CQUNJckIsMERBQUE7SUFBS21CLFNBQVMsRUFBQztFQUFTLGdCQUNwQm5CLDBEQUFBO0lBQUttQixTQUFTLEVBQUM7RUFBa0IsRUFDM0IsRUFDTEksZUFBZSxDQUNkO0FBQ2QsQ0FBQztBQUVELCtEQUFlRCxLQUFLOzs7Ozs7OztVQ2xEcEIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0hvbWUvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGYU1vbmV5QmlsbEFsdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0dpUmVjZWl2ZU1vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7VGJQaWdNb25leX0gZnJvbSBcInJlYWN0LWljb25zL3RiXCI7XG5pbXBvcnQge0JzQmFua30gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBXZWxjb21lID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShwcm9wcy51c2VyTG9nSW4pO1xuXG5cblxuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwifTtcblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUxlZnRQaG90b1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgICAgICA8aDE+V2l0YWohPC9oMT5cbiAgICAgICAgICAgIDxwPkR6acSZa2kgT2RzZXRrb21hdG93aSBvYmxpY3p5c3o6PC9wPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndlbGNvbWVIZXJvLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRiUGlnTW9uZXkgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj53eXNva2/Fm8SHIHBvxbx5Y3praTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnNCYW5rIHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+b3Byb2NlbnRvd2FuaWUga3JlZHl0dTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R2lSZWNlaXZlTW9uZXkgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5vZHNldGtpIG9kIGxva2F0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFNb25leUJpbGxBbHQgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj56eXNrIHogb2JsaWdhY2ppPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8TGluayB0bz17cHJvcHMudXNlckxvZ0luID8gJy9jYWxjdWxhdG9yJyA6ICcvbG9naW4nfSBjbGFzc05hbWU9e1widGhpcmRDb2xvciBsb2dMaW5rXCJ9PlNrb3J6eXN0YWogeiBrYWxrdWxhdG9yYTwvTGluaz5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwifTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9wcy5zZXRVc2VyTG9nSW4odHJ1ZSk7XG5cbiAgICB9XG5cbiAgICBsZXQgbG9naW5BcHBlYXJlbmNlO1xuICAgIHByb3BzLnVzZXJMb2dJbiA/IGxvZ2luQXBwZWFyZW5jZSA9IDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICA8aDE+V3liaWVyeiBrYWxrdWxhdG9yPC9oMT5cblxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGRpdiBjbGFzc05hbWU9e1wiYnRuQ2FsY3VsYXRvckNob2ljZVwifT48QnNCYW5rLz48c3Bhbj5LcmVkeXQ8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2xvYW5cIj48ZGl2IGNsYXNzTmFtZT17XCJidG5DYWxjdWxhdG9yQ2hvaWNlXCJ9PjxHaVJlY2VpdmVNb25leS8+PHNwYW4+UG/FvHljemthPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9kZXBvc2l0XCI+PGRpdiBjbGFzc05hbWU9e1wiYnRuQ2FsY3VsYXRvckNob2ljZVwifT48VGJQaWdNb25leS8+PHNwYW4+TG9rYXRhPC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9ib25kXCI+PGRpdiBjbGFzc05hbWU9e1wiYnRuQ2FsY3VsYXRvckNob2ljZVwifT48RmFNb25leUJpbGxBbHQvPjxzcGFuPk9ibGlnYWNqZTwvc3Bhbj48L2Rpdj48L0xpbms+XG5cbiAgICA8L2Rpdj5cbiAgICAgICAgOlxuICAgICAgICBsb2dpbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVIZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgPGgxPldpdGFqPC9oMT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXtcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+TG9naW48L3NwYW4+PC9sYWJlbD5cblxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e1wicGFzc3dvcmRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e1wiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5IYXPFgm88L3NwYW4+PC9sYWJlbD5cblxuXG5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NhbGN1bGF0b3JcIj48YnV0dG9uIGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlphbG9ndWo8L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+TmllIG1hc3oga29udGE/IFphcmVqZXN0cnVqIHNpxJkhPC9MaW5rPlxuICAgIDwvZGl2PjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUxlZnRQaG90b1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7bG9naW5BcHBlYXJlbmNlfVxuICAgICAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImU5ZmNhMTg3M2VlYTgzNzA3YzhmXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhTW9uZXlCaWxsQWx0IiwiR2lSZWNlaXZlTW9uZXkiLCJUYlBpZ01vbmV5IiwiQnNCYW5rIiwiTGluayIsIldlbGNvbWUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInVzZXJMb2dJbiIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJpY29uc1N0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0byIsIkxvZ2luIiwibG9naW5BcHBlYXJlbmNlIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DbGljayIsImhhbmRsZUNsaWNrIiwic2V0VXNlckxvZ0luIl0sInNvdXJjZVJvb3QiOiIifQ==