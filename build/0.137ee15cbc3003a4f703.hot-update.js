"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 56:
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






var UserData = function (props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.userLogIn),
    _useState2 = _slicedToArray(_useState, 2),
    isLogged = _useState2[0],
    setIsLogged = _useState2[1];
  var _props$userData = _slicedToArray(props.userData, 2),
    data = _props$userData[0],
    setData = _props$userData[1];
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj ", data.name, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Dzi\u0119ki Odsetkomatowi obliczysz:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
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
    to: '/login',
    className: "thirdColor logLink"
  }, "Skorzystaj z kalkulatora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: '/login',
    className: "thirdColor logLink"
  }, "Wyloguj sie")));
};
/* harmony default export */ __webpack_exports__["default"] = (UserData);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8d54afe3497a008902e5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzdlZTE1Y2JjMzAwM2E0ZjcwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDQTtBQUNKO0FBQ0o7QUFDQTtBQUV0QyxJQUFNTyxRQUFRLEdBQUcsU0FBQUEsQ0FBQ0MsS0FBSyxFQUFLO0VBQ3hCLElBQUFDLFNBQUEsR0FBZ0NSLCtDQUFRLENBQUNPLEtBQUssQ0FBQ0UsU0FBUyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQWxESSxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLGVBQUEsR0FBQUgsY0FBQSxDQUF3QkosS0FBSyxDQUFDUSxRQUFRO0lBQS9CQyxJQUFJLEdBQUFGLGVBQUE7SUFBRUcsT0FBTyxHQUFBSCxlQUFBO0VBSXBCLElBQU1JLFVBQVUsR0FBRztJQUFDQyxLQUFLLEVBQUUsTUFBTTtJQUFFQyxNQUFNLEVBQUU7RUFBTSxDQUFDO0VBRWxELG9CQUNJckIsMERBQUE7SUFBS3VCLFNBQVMsRUFBQztFQUFTLGdCQUNwQnZCLDBEQUFBO0lBQUt1QixTQUFTLEVBQUM7RUFBa0IsRUFDM0IsZUFDTnZCLDBEQUFBO0lBQUt1QixTQUFTLEVBQUM7RUFBMkIsZ0JBQ3RDdkIsMERBQUEsYUFBSSxRQUFNLEVBQUNpQixJQUFJLENBQUNPLElBQUksRUFBQyxHQUFDLENBQUssZUFDM0J4QiwwREFBQSxZQUFHLHNDQUErQixDQUFJLGVBQ3RDQSwwREFBQTtJQUFJdUIsU0FBUyxFQUFDO0VBQWtCLGdCQUM1QnZCLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0ksc0RBQVU7SUFBQ3FCLEtBQUssRUFBRU47RUFBVyxFQUFFLENBQzdCLGVBQ0huQiwwREFBQSxlQUFNLGtDQUFpQixDQUFPLENBQzdCLGVBQ0xBLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0ssa0RBQU07SUFBQ29CLEtBQUssRUFBRU47RUFBVyxFQUFFLENBQ3pCLGVBQ0huQiwwREFBQSxlQUFNLHdCQUFzQixDQUFPLENBQ2xDLGVBQ0xBLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0csMERBQWM7SUFBQ3NCLEtBQUssRUFBRU47RUFBVyxFQUFFLENBQ2pDLGVBQ0huQiwwREFBQSxlQUFNLG1CQUFpQixDQUFPLENBQzdCLGVBQ0xBLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0UsMERBQWM7SUFBQ3VCLEtBQUssRUFBRU47RUFBVyxFQUFFLENBQ2pDLGVBQ0huQiwwREFBQSxlQUFNLGtCQUFnQixDQUFPLENBQzVCLENBQ0osZUFFTEEsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ29CLEVBQUUsRUFBRSxRQUFTO0lBQUNILFNBQVMsRUFBRTtFQUFxQixHQUFDLDBCQUF3QixDQUFPLGVBQ3BGdkIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ29CLEVBQUUsRUFBRSxRQUFTO0lBQUNILFNBQVMsRUFBRTtFQUFxQixHQUFDLGFBQVcsQ0FBTyxDQUVyRSxDQUNKO0FBQ2QsQ0FBQztBQUVELCtEQUFlaEIsUUFBUTs7Ozs7Ozs7VUN4RHZCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy91c2VyRGF0YS91c2VyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IFVzZXJEYXRhID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShwcm9wcy51c2VyTG9nSW4pO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHByb3BzLnVzZXJEYXRhO1xuXG5cblxuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwifTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxoMT5XaXRhaiB7ZGF0YS5uYW1lfSE8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkR6acSZa2kgT2RzZXRrb21hdG93aSBvYmxpY3p5c3o6PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3ZWxjb21lSGVyby1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGJQaWdNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj53eXNva2/Fm8SHIHBvxbx5Y3praTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0Jhbmsgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+b3Byb2NlbnRvd2FuaWUga3JlZHl0dTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaVJlY2VpdmVNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5vZHNldGtpIG9kIGxva2F0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYU1vbmV5QmlsbEFsdCBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj56eXNrIHogb2JsaWdhY2ppPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9sb2dpbid9IGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yIGxvZ0xpbmtcIn0+U2tvcnp5c3RhaiB6IGthbGt1bGF0b3JhPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2xvZ2luJ30gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3IgbG9nTGlua1wifT5XeWxvZ3VqIHNpZTwvTGluaz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRhdGE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOGQ1NGFmZTM0OTdhMDA4OTAyZTVcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMaW5rIiwiVXNlckRhdGEiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInVzZXJMb2dJbiIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJfcHJvcHMkdXNlckRhdGEiLCJ1c2VyRGF0YSIsImRhdGEiLCJzZXREYXRhIiwiaWNvbnNTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm5hbWUiLCJzdHlsZSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==