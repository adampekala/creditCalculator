"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 35:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);




var Header = function (_ref) {
  var userLogIn = _ref.userLogIn,
    logOut = _ref.logOut,
    userData = _ref.userData;
  var iconsStyle = {
    width: "50px",
    height: "50px",
    color: "white"
  };
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
  }, userLogIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login",
    className: "infoIconLink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsFillCalculatorFill, {
    style: {
      width: "50px",
      height: "50px",
      color: "white"
    }
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/info",
    className: "infoIconLink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdQuestionMark, {
    style: {
      width: "50px",
      height: "50px",
      color: "white"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: userLogIn ? '/userData' : '/login',
    className: "logIconLink"
  }, userLogIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {
    style: iconsStyle
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdLockOutline, {
    style: iconsStyle
  })), userLogIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "infoIconLink",
    onClick: function handleLogOut() {
      console.log(userData);
      fetch("".concat("http://localhost:3005", "/data/").concat(userData.id), {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        logOut(false);
      })["catch"](function (reject) {
        return console.log(reject);
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsPower, {
    style: {
      width: "50px",
      height: "50px",
      color: "white"
    }
  })) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "48c853198a19c8ed67cb"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFBMEIsTUFBTTtRQUFBLE9BQUlkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxNQUFNLENBQUM7TUFBQSxFQUFDO0lBRTlIO0VBK0IwRSxnQkFDMURyQywwREFBQSxDQUFDTyxtREFBTztJQUFDYSxLQUFLLEVBQUU7TUFBQ04sS0FBSyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQU87RUFBRSxFQUFFLENBQy9ELEdBRVAsSUFBSSxDQUdOLENBQ0Q7QUFFakIsQ0FBQztBQUVELCtEQUFlUixNQUFNOzs7Ozs7OztVQy9EckIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xheW91dC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNZExvY2tPdXRsaW5lLCBNZFF1ZXN0aW9uTWFya30gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0JzQmFuaywgQnNGaWxsQ2FsY3VsYXRvckZpbGwsIEJzUG93ZXJ9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5cbmNvbnN0IEhlYWRlciA9ICh7dXNlckxvZ0luLCBsb2dPdXQsIHVzZXJEYXRhfSkgPT4ge1xuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifTtcblxuICAgICAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG5cbiAgICAgICAgY29uc3QgaGFuZGxlTG9nT3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgICAgICBmZXRjaChgJHtBUEl9L2RhdGEvJHt1c2VyRGF0YS5pZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtjb25zb2xlLmxvZyhkYXRhKTsgbG9nT3V0KGZhbHNlKX0pLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuXG4gICAgICAgIH1cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtcIm1haW5Db2xvciB0b3BCYXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJsb2dvQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJsb2dvLWVsMVwifT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImxvZ28tZWwyXCJ9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+PExpbmsgY2xhc3NOYW1lPXtcIm1haW5Mb2dvSG9tZUxpbmtcIn0gdG89Jy8nPk9kc2V0a29tYXQuY29tPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpY29uc0NvbnRhaW5lclwifT5cblxuICAgICAgICAgICAgICAgIHt1c2VyTG9nSW4gP1xuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2xvZ2luJyBjbGFzc05hbWU9e1wiaW5mb0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzRmlsbENhbGN1bGF0b3JGaWxsIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaW5mbycgY2xhc3NOYW1lPXtcImluZm9JY29uTGlua1wifT5cbiAgICAgICAgICAgICAgICAgICAgPE1kUXVlc3Rpb25NYXJrIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17dXNlckxvZ0luID8gJy91c2VyRGF0YScgOiAnL2xvZ2luJ30gY2xhc3NOYW1lPXtcImxvZ0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckxvZ0luID8gPEJzQmFuayBzdHlsZT17aWNvbnNTdHlsZX0vPiA6IDxNZExvY2tPdXRsaW5lIHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICB7dXNlckxvZ0luID9cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIGNsYXNzTmFtZT17XCJpbmZvSWNvbkxpbmtcIn0gb25DbGljaz17aGFuZGxlTG9nT3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc1Bvd2VyIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI0OGM4NTMxOThhMTljOGVkNjdjYlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNZExvY2tPdXRsaW5lIiwiTWRRdWVzdGlvbk1hcmsiLCJMaW5rIiwiQnNCYW5rIiwiQnNGaWxsQ2FsY3VsYXRvckZpbGwiLCJCc1Bvd2VyIiwiSGVhZGVyIiwiX3JlZiIsInVzZXJMb2dJbiIsImxvZ091dCIsInVzZXJEYXRhIiwiaWNvbnNTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidG8iLCJzdHlsZSIsIm9uQ2xpY2siLCJoYW5kbGVMb2dPdXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJjb25jYXQiLCJpZCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==