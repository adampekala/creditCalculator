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
    to: '/login',
    className: "thirdColor logLink"
  }, "Skorzystaj z kalkulatora")));
};
/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3d6fe65e015965b93644"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZDhlOTBkMTE1M2E2ZjQwNTYwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDQTtBQUNKO0FBQ0o7QUFDQTtBQUV0QyxJQUFNTyxPQUFPLEdBQUcsU0FBQUEsQ0FBQ0MsS0FBSyxFQUFLO0VBQ3ZCLElBQUFDLFNBQUEsR0FBZ0NSLCtDQUFRLENBQUNPLEtBQUssQ0FBQ0UsU0FBUyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQWxESSxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBSTVCLElBQU1JLFVBQVUsR0FBRztJQUFDQyxLQUFLLEVBQUUsTUFBTTtJQUFFQyxNQUFNLEVBQUU7RUFBTSxDQUFDO0VBRWxELG9CQUNBakIsMERBQUE7SUFBS21CLFNBQVMsRUFBQztFQUFTLGdCQUNwQm5CLDBEQUFBO0lBQUttQixTQUFTLEVBQUM7RUFBa0IsRUFDM0IsZUFDTm5CLDBEQUFBO0lBQUttQixTQUFTLEVBQUM7RUFBMkIsZ0JBQ3RDbkIsMERBQUEsYUFBSSxRQUFNLENBQUssZUFDZkEsMERBQUEsWUFBRyxzQ0FBK0IsQ0FBSSxlQUN0Q0EsMERBQUE7SUFBSW1CLFNBQVMsRUFBQztFQUFrQixnQkFDNUJuQiwwREFBQSwwQkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBLENBQUNJLHNEQUFVO0lBQUNnQixLQUFLLEVBQUVMO0VBQVcsRUFBRSxDQUM3QixlQUNQZiwwREFBQSxlQUFNLGtDQUFpQixDQUFPLENBQzdCLGVBQ0xBLDBEQUFBLDBCQUNJQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0ssa0RBQU07SUFBQ2UsS0FBSyxFQUFFTDtFQUFXLEVBQUUsQ0FDekIsZUFDUGYsMERBQUEsZUFBTSx3QkFBc0IsQ0FBTyxDQUNsQyxlQUNMQSwwREFBQSwwQkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBLENBQUNHLDBEQUFjO0lBQUNpQixLQUFLLEVBQUVMO0VBQVcsRUFBRSxDQUNqQyxlQUNQZiwwREFBQSxlQUFNLG1CQUFpQixDQUFPLENBQzdCLGVBQ0xBLDBEQUFBLDBCQUNJQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0UsMERBQWM7SUFBQ2tCLEtBQUssRUFBRUw7RUFBVyxFQUFFLENBQ2pDLGVBQ1BmLDBEQUFBLGVBQU0sa0JBQWdCLENBQU8sQ0FDNUIsQ0FDSixlQUVMQSwwREFBQSxDQUFDTSxrREFBSTtJQUFDZSxFQUFFLEVBQUUsUUFBUztJQUFDRixTQUFTLEVBQUU7RUFBcUIsR0FBQywwQkFBd0IsQ0FBTyxDQUVsRixDQUNKO0FBQ1YsQ0FBQztBQUVELCtEQUFlWixPQUFPOzs7Ozs7OztVQ3REdEIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0hvbWUvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IFdlbGNvbWUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKHByb3BzLnVzZXJMb2dJbik7XG5cblxuXG4gICAgY29uc3QgaWNvbnNTdHlsZSA9IHt3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCJ9O1xuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lTGVmdFBob3RvXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVIZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgICAgIDxoMT5XaXRhaiE8L2gxPlxuICAgICAgICAgICAgPHA+RHppxJlraSBPZHNldGtvbWF0b3dpIG9ibGljenlzejo8L3A+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8tbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGJQaWdNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnd5c29rb8WbxIcgcG/FvHljemtpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0Jhbmsgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5vcHJvY2VudG93YW5pZSBrcmVkeXR1PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaVJlY2VpdmVNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPm9kc2V0a2kgb2QgbG9rYXR5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYU1vbmV5QmlsbEFsdCBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnp5c2sgeiBvYmxpZ2Fjamk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxMaW5rIHRvPXsnL2xvZ2luJ30gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3IgbG9nTGlua1wifT5Ta29yenlzdGFqIHoga2Fsa3VsYXRvcmE8L0xpbms+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWxjb21lO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjNkNmZlNjVlMDE1OTY1YjkzNjQ0XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZhTW9uZXlCaWxsQWx0IiwiR2lSZWNlaXZlTW9uZXkiLCJUYlBpZ01vbmV5IiwiQnNCYW5rIiwiTGluayIsIldlbGNvbWUiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInVzZXJMb2dJbiIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJpY29uc1N0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=