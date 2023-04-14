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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.userData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj ", data[0].name, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Ranking oblicze\u0144:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "welcomeHero-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_1__.TbPigMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data[0].loan, " po\u017Cyczki(ek)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {
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
/******/ 	__webpack_require__.h = function() { return "952556f0530923573990"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNTE4MTEwY2U5NTBiYmVhNWYwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDQTtBQUNKO0FBQ0o7QUFDQTtBQUV0QyxJQUFNTyxRQUFRLEdBQUcsU0FBQUEsQ0FBQ0MsS0FBSyxFQUFLO0VBQ3hCLElBQUFDLFNBQUEsR0FBZ0NSLCtDQUFRLENBQUNPLEtBQUssQ0FBQ0UsU0FBUyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQWxESSxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBd0JkLCtDQUFRLENBQUNPLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO0lBQUFDLFVBQUEsR0FBQUwsY0FBQSxDQUFBRyxVQUFBO0lBQXpDRyxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBSXBCLElBQU1HLFVBQVUsR0FBRztJQUFDQyxLQUFLLEVBQUUsTUFBTTtJQUFFQyxNQUFNLEVBQUU7RUFBTSxDQUFDO0VBRWxELG9CQUNJdEIsMERBQUE7SUFBS3dCLFNBQVMsRUFBQztFQUFTLGdCQUNwQnhCLDBEQUFBO0lBQUt3QixTQUFTLEVBQUM7RUFBa0IsRUFDM0IsZUFDTnhCLDBEQUFBO0lBQUt3QixTQUFTLEVBQUM7RUFBMkIsZ0JBQ3RDeEIsMERBQUEsYUFBSSxRQUFNLEVBQUNrQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNPLElBQUksRUFBQyxHQUFDLENBQUssZUFDOUJ6QiwwREFBQSxZQUFHLHdCQUFpQixDQUFJLGVBQ3hCQSwwREFBQTtJQUFJd0IsU0FBUyxFQUFDO0VBQWtCLGdCQUM1QnhCLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0ksc0RBQVU7SUFBQ3NCLEtBQUssRUFBRU47RUFBVyxFQUFFLENBQzdCLGVBQ0hwQiwwREFBQSxlQUFPa0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDUyxJQUFJLEVBQUMsb0JBQWEsQ0FBTyxDQUN2QyxlQUNMM0IsMERBQUEsMEJBQ0FBLDBEQUFBLDRCQUNJQSwwREFBQSxDQUFDSyxrREFBTTtJQUFDcUIsS0FBSyxFQUFFTjtFQUFXLEVBQUUsQ0FDekIsZUFDSHBCLDBEQUFBLGVBQU0sd0JBQXNCLENBQU8sQ0FDbEMsZUFDTEEsMERBQUEsMEJBQ0FBLDBEQUFBLDRCQUNJQSwwREFBQSxDQUFDRywwREFBYztJQUFDdUIsS0FBSyxFQUFFTjtFQUFXLEVBQUUsQ0FDakMsZUFDSHBCLDBEQUFBLGVBQU0sbUJBQWlCLENBQU8sQ0FDN0IsZUFDTEEsMERBQUEsMEJBQ0FBLDBEQUFBLDRCQUNJQSwwREFBQSxDQUFDRSwwREFBYztJQUFDd0IsS0FBSyxFQUFFTjtFQUFXLEVBQUUsQ0FDakMsZUFDSHBCLDBEQUFBLGVBQU0sa0JBQWdCLENBQU8sQ0FDNUIsQ0FDSixlQUVMQSwwREFBQSxDQUFDTSxrREFBSTtJQUFDc0IsRUFBRSxFQUFFLFFBQVM7SUFBQ0osU0FBUyxFQUFFO0VBQXFCLEdBQUMsMEJBQXdCLENBQU8sZUFDcEZ4QiwwREFBQSxDQUFDTSxrREFBSTtJQUFDc0IsRUFBRSxFQUFFLFFBQVM7SUFBQ0osU0FBUyxFQUFFO0VBQXFCLEdBQUMsYUFBVyxDQUFPLENBRXJFLENBQ0o7QUFDZCxDQUFDO0FBRUQsK0RBQWVqQixRQUFROzs7Ozs7OztVQ3hEdkIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL3VzZXJEYXRhL3VzZXJEYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmFNb25leUJpbGxBbHR9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtHaVJlY2VpdmVNb25leX0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQge1RiUGlnTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiO1xuaW1wb3J0IHtCc0Jhbmt9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgVXNlckRhdGEgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKHByb3BzLnVzZXJMb2dJbik7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocHJvcHMudXNlckRhdGEpO1xuXG5cblxuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwifTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxoMT5XaXRhaiB7ZGF0YVswXS5uYW1lfSE8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlJhbmtpbmcgb2JsaWN6ZcWEOjwvcD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRiUGlnTW9uZXkgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGFbMF0ubG9hbn0gcG/FvHljemtpKGVrKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0Jhbmsgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+b3Byb2NlbnRvd2FuaWUga3JlZHl0dTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaVJlY2VpdmVNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5vZHNldGtpIG9kIGxva2F0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYU1vbmV5QmlsbEFsdCBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj56eXNrIHogb2JsaWdhY2ppPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9sb2dpbid9IGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yIGxvZ0xpbmtcIn0+U2tvcnp5c3RhaiB6IGthbGt1bGF0b3JhPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2xvZ2luJ30gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3IgbG9nTGlua1wifT5XeWxvZ3VqIHNpZTwvTGluaz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRhdGE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOTUyNTU2ZjA1MzA5MjM1NzM5OTBcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMaW5rIiwiVXNlckRhdGEiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInVzZXJMb2dJbiIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJfdXNlU3RhdGUzIiwidXNlckRhdGEiLCJfdXNlU3RhdGU0IiwiZGF0YSIsInNldERhdGEiLCJpY29uc1N0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibmFtZSIsInN0eWxlIiwibG9hbiIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==