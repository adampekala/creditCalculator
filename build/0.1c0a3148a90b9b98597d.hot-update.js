"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 35:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);




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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdCalculate, {
    style: {
      width: "50px",
      height: "50px",
      color: "rgb(15, 170, 240)"
    }
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/info",
    className: "infoIconLink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdQuestionMark, {
    style: {
      width: "50px",
      height: "50px",
      color: "white"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: userLogIn ? '/userData' : '/login',
    className: "logIconLink"
  }, userLogIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsPersonCircle, {
    style: iconsStyle
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdLockOutline, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdPowerSettingsNew, {
    style: {
      width: "50px",
      height: "50px",
      color: "rgb(15, 170, 240)"
    }
  })) : null));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2d9b48770d9ed084c72a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsVUFBQTBCLE1BQU07UUFBQSxPQUFJZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDO01BQUEsRUFBQztJQUU5SDtFQStCMEUsZ0JBQzFEdEMsMERBQUEsQ0FBQ0ksOERBQWtCO0lBQUNpQixLQUFLLEVBQUU7TUFBQ04sS0FBSyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQW1CO0VBQUUsRUFBRSxDQUN0RixHQUVQLElBQUksQ0FHTixDQUNEO0FBRWpCLENBQUM7QUFFRCwrREFBZVIsTUFBTTs7Ozs7Ozs7VUMvRHJCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9MYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TWRMb2NrT3V0bGluZSwgTWRRdWVzdGlvbk1hcmssIE1kUG93ZXJTZXR0aW5nc05ldywgTWRDYWxjdWxhdGV9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHtCc1BlcnNvbkNpcmNsZSwgQnNGaWxsQ2FsY3VsYXRvckZpbGx9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5cbmNvbnN0IEhlYWRlciA9ICh7dXNlckxvZ0luLCBsb2dPdXQsIHVzZXJEYXRhfSkgPT4ge1xuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifTtcblxuICAgICAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG5cbiAgICAgICAgY29uc3QgaGFuZGxlTG9nT3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgICAgICBmZXRjaChgJHtBUEl9L2RhdGEvJHt1c2VyRGF0YS5pZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtjb25zb2xlLmxvZyhkYXRhKTsgbG9nT3V0KGZhbHNlKX0pLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuXG4gICAgICAgIH1cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtcIm1haW5Db2xvciB0b3BCYXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJsb2dvQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJsb2dvLWVsMVwifT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImxvZ28tZWwyXCJ9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+PExpbmsgY2xhc3NOYW1lPXtcIm1haW5Mb2dvSG9tZUxpbmtcIn0gdG89Jy8nPk9kc2V0a29tYXQuY29tPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpY29uc0NvbnRhaW5lclwifT5cblxuICAgICAgICAgICAgICAgIHt1c2VyTG9nSW4gP1xuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2xvZ2luJyBjbGFzc05hbWU9e1wiaW5mb0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1kQ2FsY3VsYXRlIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJyZ2IoMTUsIDE3MCwgMjQwKVwifX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaW5mbycgY2xhc3NOYW1lPXtcImluZm9JY29uTGlua1wifT5cbiAgICAgICAgICAgICAgICAgICAgPE1kUXVlc3Rpb25NYXJrIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17dXNlckxvZ0luID8gJy91c2VyRGF0YScgOiAnL2xvZ2luJ30gY2xhc3NOYW1lPXtcImxvZ0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckxvZ0luID8gPEJzUGVyc29uQ2lyY2xlIHN0eWxlPXtpY29uc1N0eWxlfS8+IDogPE1kTG9ja091dGxpbmUgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIHt1c2VyTG9nSW4gP1xuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgY2xhc3NOYW1lPXtcImluZm9JY29uTGlua1wifSBvbkNsaWNrPXtoYW5kbGVMb2dPdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1kUG93ZXJTZXR0aW5nc05ldyBzdHlsZT17e3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgY29sb3I6IFwicmdiKDE1LCAxNzAsIDI0MClcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMmQ5YjQ4NzcwZDllZDA4NGM3MmFcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWRMb2NrT3V0bGluZSIsIk1kUXVlc3Rpb25NYXJrIiwiTWRQb3dlclNldHRpbmdzTmV3IiwiTWRDYWxjdWxhdGUiLCJMaW5rIiwiQnNQZXJzb25DaXJjbGUiLCJCc0ZpbGxDYWxjdWxhdG9yRmlsbCIsIkhlYWRlciIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJsb2dPdXQiLCJ1c2VyRGF0YSIsImljb25zU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwic3R5bGUiLCJvbkNsaWNrIiwiaGFuZGxlTG9nT3V0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiY29uY2F0IiwiaWQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=