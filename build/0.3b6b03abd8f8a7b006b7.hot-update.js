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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data[0].loans.length, " po\u017Cyczka(i/ek)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data[0].credits.length, " kredyt(\xF3w/y)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data[0].deposits.length, " lokata(y)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMoneyBillAlt, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data[0].bonds.length, " obligacja(e/i)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
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
/******/ 	__webpack_require__.h = function() { return "7f0b7a5db4f1d192fa92"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYjZiMDNhYmQ4ZjhhN2IwMDZiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDQTtBQUNKO0FBQ0o7QUFDQTtBQUV0QyxJQUFNTyxRQUFRLEdBQUcsU0FBQUEsQ0FBQ0MsS0FBSyxFQUFLO0VBQ3hCLElBQUFDLFNBQUEsR0FBZ0NSLCtDQUFRLENBQUNPLEtBQUssQ0FBQ0UsU0FBUyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSCxTQUFBO0lBQWxESSxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBd0JkLCtDQUFRLENBQUNPLEtBQUssQ0FBQ1EsUUFBUSxDQUFDO0lBQUFDLFVBQUEsR0FBQUwsY0FBQSxDQUFBRyxVQUFBO0lBQXpDRyxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBSXBCLElBQU1HLFVBQVUsR0FBRztJQUFDQyxLQUFLLEVBQUUsTUFBTTtJQUFFQyxNQUFNLEVBQUU7RUFBTSxDQUFDO0VBRWxELG9CQUNJdEIsMERBQUE7SUFBS3dCLFNBQVMsRUFBQztFQUFTLGdCQUNwQnhCLDBEQUFBO0lBQUt3QixTQUFTLEVBQUM7RUFBa0IsRUFDM0IsZUFDTnhCLDBEQUFBO0lBQUt3QixTQUFTLEVBQUM7RUFBMkIsZ0JBQ3RDeEIsMERBQUEsYUFBSSxRQUFNLEVBQUNrQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNPLElBQUksRUFBQyxHQUFDLENBQUssZUFDOUJ6QiwwREFBQSxZQUFHLHdCQUFpQixDQUFJLGVBQ3hCQSwwREFBQTtJQUFJd0IsU0FBUyxFQUFDO0VBQWtCLGdCQUM1QnhCLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0ksc0RBQVU7SUFBQ3NCLEtBQUssRUFBRU47RUFBVyxFQUFFLENBQzdCLGVBQ0hwQiwwREFBQSxlQUFPa0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDUyxLQUFLLENBQUNDLE1BQU0sRUFBQyxzQkFBZSxDQUFPLENBQ2pELGVBQ0w1QiwwREFBQSwwQkFDQUEsMERBQUEsNEJBQ0lBLDBEQUFBLENBQUNLLGtEQUFNO0lBQUNxQixLQUFLLEVBQUVOO0VBQVcsRUFBRSxDQUN6QixlQUNIcEIsMERBQUEsZUFBT2tCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ1csT0FBTyxDQUFDRCxNQUFNLEVBQUMsa0JBQWEsQ0FBTyxDQUNqRCxlQUNMNUIsMERBQUEsMEJBQ0FBLDBEQUFBLDRCQUNJQSwwREFBQSxDQUFDRywwREFBYztJQUFDdUIsS0FBSyxFQUFFTjtFQUFXLEVBQUUsQ0FDakMsZUFDSHBCLDBEQUFBLGVBQU9rQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNZLFFBQVEsQ0FBQ0YsTUFBTSxFQUFDLFlBQVUsQ0FBTyxDQUMvQyxlQUNMNUIsMERBQUEsMEJBQ0FBLDBEQUFBLDRCQUNJQSwwREFBQSxDQUFDRSwwREFBYztJQUFDd0IsS0FBSyxFQUFFTjtFQUFXLEVBQUUsQ0FDakMsZUFDSHBCLDBEQUFBLGVBQU9rQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNhLEtBQUssQ0FBQ0gsTUFBTSxFQUFDLGlCQUFlLENBQU8sQ0FDakQsQ0FDSixlQUVMNUIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQzBCLEVBQUUsRUFBRSxRQUFTO0lBQUNSLFNBQVMsRUFBRTtFQUFxQixHQUFDLDBCQUF3QixDQUFPLGVBQ3BGeEIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQzBCLEVBQUUsRUFBRSxRQUFTO0lBQUNSLFNBQVMsRUFBRTtFQUFxQixHQUFDLGFBQVcsQ0FBTyxDQUVyRSxDQUNKO0FBQ2QsQ0FBQztBQUVELCtEQUFlakIsUUFBUTs7Ozs7Ozs7VUN4RHZCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy91c2VyRGF0YS91c2VyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IFVzZXJEYXRhID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShwcm9wcy51c2VyTG9nSW4pO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHByb3BzLnVzZXJEYXRhKTtcblxuXG5cbiAgICBjb25zdCBpY29uc1N0eWxlID0ge3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIn07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUxlZnRQaG90b1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVIZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgICAgICAgICA8aDE+V2l0YWoge2RhdGFbMF0ubmFtZX0hPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5SYW5raW5nIG9ibGljemXFhDo8L3A+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndlbGNvbWVIZXJvLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYlBpZ01vbmV5IHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRhWzBdLmxvYW5zLmxlbmd0aH0gcG/FvHljemthKGkvZWspPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzQmFuayBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YVswXS5jcmVkaXRzLmxlbmd0aH0ga3JlZHl0KMOzdy95KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaVJlY2VpdmVNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YVswXS5kZXBvc2l0cy5sZW5ndGh9IGxva2F0YSh5KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYU1vbmV5QmlsbEFsdCBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YVswXS5ib25kcy5sZW5ndGh9IG9ibGlnYWNqYShlL2kpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9sb2dpbid9IGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yIGxvZ0xpbmtcIn0+U2tvcnp5c3RhaiB6IGthbGt1bGF0b3JhPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2xvZ2luJ30gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3IgbG9nTGlua1wifT5XeWxvZ3VqIHNpZTwvTGluaz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRhdGE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiN2YwYjdhNWRiNGYxZDE5MmZhOTJcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMaW5rIiwiVXNlckRhdGEiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInVzZXJMb2dJbiIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJfdXNlU3RhdGUzIiwidXNlckRhdGEiLCJfdXNlU3RhdGU0IiwiZGF0YSIsInNldERhdGEiLCJpY29uc1N0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibmFtZSIsInN0eWxlIiwibG9hbnMiLCJsZW5ndGgiLCJjcmVkaXRzIiwiZGVwb3NpdHMiLCJib25kcyIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==