"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 35:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);




var Header = function (_ref) {
  var userLogIn = _ref.userLogIn,
    logOut = _ref.logOut;
  var iconsStyle = {
    width: "50px",
    height: "50px",
    color: "white"
  };

  // const [loggedIn, setLoggedIn] = useState(props.userLogIn);
  // const [loggedIn, setLoggedIn] = useState(true);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "mainColor topBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "logo-el1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "logo-el2"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "mainLogoHomeLink",
    to: "/"
  }, "Odsetkomat.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "iconsContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/info",
    className: "infoIconLink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdQuestionMark, {
    style: {
      width: "50px",
      height: "50px",
      color: "white"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: props.userLogIn ? '/userData' : '/login',
    className: "logIconLink"
  }, props.userLogIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsBank, {
    style: iconsStyle
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdLockOutline, {
    style: iconsStyle
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ 34:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);



var Layout = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userLogIn: props.userLogIn,
    logOut: props.setUserLogIn
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null));
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "73907f477cf7375626b0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMjM3ZmFhNTUyYmEwZTVjMTE2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzQztBQUN1QjtBQUN2QjtBQUNBO0FBRXRDLElBQU1NLE1BQU0sR0FBRyxTQUFBQSxDQUFBQyxJQUFBLEVBQXlCO0VBQUEsSUFBdkJDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUVDLE1BQU0sR0FBQUYsSUFBQSxDQUFORSxNQUFNO0VBQzlCLElBQU1DLFVBQVUsR0FBRztJQUFDQyxLQUFLLEVBQUUsTUFBTTtJQUFFQyxNQUFNLEVBQUUsTUFBTTtJQUFFQyxLQUFLLEVBQUU7RUFBTyxDQUFDOztFQUVsRTtFQUNBOztFQUdBLG9CQUNJYiwwREFBQTtJQUFRZSxTQUFTLEVBQUU7RUFBbUIsZ0JBQ2xDZiwwREFBQTtJQUFLZSxTQUFTLEVBQUU7RUFBZ0IsZ0JBQzVCZiwwREFBQTtJQUFNZSxTQUFTLEVBQUU7RUFBVyxnQkFDeEJmLDBEQUFBO0lBQU1lLFNBQVMsRUFBRTtFQUFXLEVBQVEsQ0FDakMsZUFBQWYsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ1csU0FBUyxFQUFFLGtCQUFtQjtJQUFDQyxFQUFFLEVBQUM7RUFBRyxHQUFDLGdCQUFjLENBQU8sQ0FDdEUsZUFDTmhCLDBEQUFBO0lBQUtlLFNBQVMsRUFBRTtFQUFpQixnQkFDN0JmLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNZLEVBQUUsRUFBQyxPQUFPO0lBQUNELFNBQVMsRUFBRTtFQUFlLGdCQUN2Q2YsMERBQUEsQ0FBQ0csMERBQWM7SUFBQ2MsS0FBSyxFQUFFO01BQUNOLEtBQUssRUFBRSxNQUFNO01BQUVDLE1BQU0sRUFBRSxNQUFNO01BQUVDLEtBQUssRUFBRTtJQUFPO0VBQUUsRUFBRSxDQUN0RSxlQUNQYiwwREFBQSxDQUFDSSxrREFBSTtJQUFDWSxFQUFFLEVBQUVFLEtBQUssQ0FBQ1YsU0FBUyxHQUFHLFdBQVcsR0FBRyxRQUFTO0lBQUNPLFNBQVMsRUFBRTtFQUFjLEdBQ3hFRyxLQUFLLENBQUNWLFNBQVMsZ0JBQUdSLDBEQUFBLENBQUNLLGtEQUFNO0lBQUNZLEtBQUssRUFBRVA7RUFBVyxFQUFFLGdCQUFHViwwREFBQSxDQUFDRSx5REFBYTtJQUFDZSxLQUFLLEVBQUVQO0VBQVcsRUFBRSxDQUVsRixDQUVMLENBQ0Q7QUFFakIsQ0FBQztBQUVELCtEQUFlSixNQUFNOzs7Ozs7Ozs7Ozs7QUNqQzRCO0FBQ1Q7QUFFVjtBQUU5QixJQUFNZSxNQUFNLEdBQUcsU0FBQUEsQ0FBQ0gsS0FBSyxFQUFLO0VBRXRCLG9CQUNJbEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNNLCtDQUFNO0lBQUNFLFNBQVMsRUFBRVUsS0FBSyxDQUFDVixTQUFVO0lBQUNDLE1BQU0sRUFBRVMsS0FBSyxDQUFDSztFQUFhLEVBQUUsZUFDakV2QiwwREFBQSxDQUFDb0Isb0RBQU0sT0FBRSxDQUNWO0FBRVgsQ0FBQztBQUVELCtEQUFlQyxNQUFNOzs7Ozs7OztVQ2ZyQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTGF5b3V0L2xheW91dC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge01kTG9ja091dGxpbmUsIE1kUXVlc3Rpb25NYXJrfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcblxuY29uc3QgSGVhZGVyID0gKHt1c2VyTG9nSW4sIGxvZ091dH0pID0+IHtcbiAgICBjb25zdCBpY29uc1N0eWxlID0ge3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgY29sb3I6IFwid2hpdGVcIn07XG5cbiAgICAvLyBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKHByb3BzLnVzZXJMb2dJbik7XG4gICAgLy8gY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e1wibWFpbkNvbG9yIHRvcEJhclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImxvZ29Db250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImxvZ28tZWwxXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wibG9nby1lbDJcIn0+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj48TGluayBjbGFzc05hbWU9e1wibWFpbkxvZ29Ib21lTGlua1wifSB0bz0nLyc+T2RzZXRrb21hdC5jb208L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImljb25zQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaW5mbycgY2xhc3NOYW1lPXtcImluZm9JY29uTGlua1wifT5cbiAgICAgICAgICAgICAgICAgICAgPE1kUXVlc3Rpb25NYXJrIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17cHJvcHMudXNlckxvZ0luID8gJy91c2VyRGF0YScgOiAnL2xvZ2luJ30gY2xhc3NOYW1lPXtcImxvZ0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudXNlckxvZ0luID8gPEJzQmFuayBzdHlsZT17aWNvbnNTdHlsZX0vPiA6IDxNZExvY2tPdXRsaW5lIHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7T3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIHVzZXJMb2dJbj17cHJvcHMudXNlckxvZ0lufSBsb2dPdXQ9e3Byb3BzLnNldFVzZXJMb2dJbn0vPlxuICAgICAgICAgICAgPE91dGxldC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI3MzkwN2Y0NzdjZjczNzU2MjZiMFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNZExvY2tPdXRsaW5lIiwiTWRRdWVzdGlvbk1hcmsiLCJMaW5rIiwiQnNCYW5rIiwiSGVhZGVyIiwiX3JlZiIsInVzZXJMb2dJbiIsImxvZ091dCIsImljb25zU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwic3R5bGUiLCJwcm9wcyIsInVzZUVmZmVjdCIsIk91dGxldCIsIkxheW91dCIsIkZyYWdtZW50Iiwic2V0VXNlckxvZ0luIl0sInNvdXJjZVJvb3QiOiIifQ==