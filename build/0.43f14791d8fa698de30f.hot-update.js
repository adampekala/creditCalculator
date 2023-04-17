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
      color: "rgb(15, 170, 240)"
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
  }, userLogIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsPersonCircle, {
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
/******/ 	__webpack_require__.h = function() { return "af88edcac369840fb4bd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsVUFBQTBCLE1BQU07UUFBQSxPQUFJZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDO01BQUEsRUFBQztJQUU5SDtFQStCMEUsZ0JBQzFEckMsMERBQUEsQ0FBQ08sbURBQU87SUFBQ2EsS0FBSyxFQUFFO01BQUNOLEtBQUssRUFBRSxNQUFNO01BQUVDLE1BQU0sRUFBRSxNQUFNO01BQUVDLEtBQUssRUFBRTtJQUFtQjtFQUFFLEVBQUUsQ0FDM0UsR0FFUCxJQUFJLENBR04sQ0FDRDtBQUVqQixDQUFDO0FBRUQsK0RBQWVSLE1BQU07Ozs7Ozs7O1VDL0RyQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge01kTG9ja091dGxpbmUsIE1kUXVlc3Rpb25NYXJrfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7QnNQZXJzb25DaXJjbGUsIEJzRmlsbENhbGN1bGF0b3JGaWxsLCBCc1Bvd2VyfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcblxuXG5jb25zdCBIZWFkZXIgPSAoe3VzZXJMb2dJbiwgbG9nT3V0LCB1c2VyRGF0YX0pID0+IHtcbiAgICBjb25zdCBpY29uc1N0eWxlID0ge3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgY29sb3I6IFwid2hpdGVcIn07XG5cbiAgICAgICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIlxuXG4gICAgICAgIGNvbnN0IGhhbmRsZUxvZ091dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcblxuICAgICAgICAgICAgZmV0Y2goYCR7QVBJfS9kYXRhLyR7dXNlckRhdGEuaWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxuICAgICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiB7Y29uc29sZS5sb2coZGF0YSk7IGxvZ091dChmYWxzZSl9KS5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSlcblxuICAgICAgICB9XG5cblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17XCJtYWluQ29sb3IgdG9wQmFyXCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wibG9nb0NvbnRhaW5lclwifT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wibG9nby1lbDFcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJsb2dvLWVsMlwifT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPjxMaW5rIGNsYXNzTmFtZT17XCJtYWluTG9nb0hvbWVMaW5rXCJ9IHRvPScvJz5PZHNldGtvbWF0LmNvbTwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiaWNvbnNDb250YWluZXJcIn0+XG5cbiAgICAgICAgICAgICAgICB7dXNlckxvZ0luID9cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9sb2dpbicgY2xhc3NOYW1lPXtcImluZm9JY29uTGlua1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0ZpbGxDYWxjdWxhdG9yRmlsbCBzdHlsZT17e3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgY29sb3I6IFwicmdiKDE1LCAxNzAsIDI0MClcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8TGluayB0bz0nL2luZm8nIGNsYXNzTmFtZT17XCJpbmZvSWNvbkxpbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxNZFF1ZXN0aW9uTWFyayBzdHlsZT17e3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgY29sb3I6IFwid2hpdGVcIn19Lz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e3VzZXJMb2dJbiA/ICcvdXNlckRhdGEnIDogJy9sb2dpbid9IGNsYXNzTmFtZT17XCJsb2dJY29uTGlua1wifT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXJMb2dJbiA/IDxCc1BlcnNvbkNpcmNsZSBzdHlsZT17aWNvbnNTdHlsZX0vPiA6IDxNZExvY2tPdXRsaW5lIHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICB7dXNlckxvZ0luID9cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIGNsYXNzTmFtZT17XCJpbmZvSWNvbkxpbmtcIn0gb25DbGljaz17aGFuZGxlTG9nT3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc1Bvd2VyIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJyZ2IoMTUsIDE3MCwgMjQwKVwifX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhZjg4ZWRjYWMzNjk4NDBmYjRiZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNZExvY2tPdXRsaW5lIiwiTWRRdWVzdGlvbk1hcmsiLCJMaW5rIiwiQnNQZXJzb25DaXJjbGUiLCJCc0ZpbGxDYWxjdWxhdG9yRmlsbCIsIkJzUG93ZXIiLCJIZWFkZXIiLCJfcmVmIiwidXNlckxvZ0luIiwibG9nT3V0IiwidXNlckRhdGEiLCJpY29uc1N0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0byIsInN0eWxlIiwib25DbGljayIsImhhbmRsZUxvZ091dCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImNvbmNhdCIsImlkIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9