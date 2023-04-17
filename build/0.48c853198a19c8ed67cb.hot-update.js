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
/******/ 	__webpack_require__.h = function() { return "5279b7b0bddf7199ced2"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFBMEIsTUFBTTtRQUFBLE9BQUlkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxNQUFNLENBQUM7TUFBQSxFQUFDO0lBRTlIO0VBK0IwRSxnQkFDMURyQywwREFBQSxDQUFDTyxtREFBTztJQUFDYSxLQUFLLEVBQUU7TUFBQ04sS0FBSyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQU87RUFBRSxFQUFFLENBQy9ELEdBRVAsSUFBSSxDQUdOLENBQ0Q7QUFFakIsQ0FBQztBQUVELCtEQUFlUixNQUFNOzs7Ozs7OztVQy9EckIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xheW91dC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNZExvY2tPdXRsaW5lLCBNZFF1ZXN0aW9uTWFya30gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0JzUGVyc29uQ2lyY2xlLCBCc0ZpbGxDYWxjdWxhdG9yRmlsbCwgQnNQb3dlcn0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5cblxuY29uc3QgSGVhZGVyID0gKHt1c2VyTG9nSW4sIGxvZ091dCwgdXNlckRhdGF9KSA9PiB7XG4gICAgY29uc3QgaWNvbnNTdHlsZSA9IHt3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIsIGNvbG9yOiBcIndoaXRlXCJ9O1xuXG4gICAgICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCJcblxuICAgICAgICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgICAgIGZldGNoKGAke0FQSX0vZGF0YS8ke3VzZXJEYXRhLmlkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge2NvbnNvbGUubG9nKGRhdGEpOyBsb2dPdXQoZmFsc2UpfSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e1wibWFpbkNvbG9yIHRvcEJhclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImxvZ29Db250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImxvZ28tZWwxXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wibG9nby1lbDJcIn0+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj48TGluayBjbGFzc05hbWU9e1wibWFpbkxvZ29Ib21lTGlua1wifSB0bz0nLyc+T2RzZXRrb21hdC5jb208L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImljb25zQ29udGFpbmVyXCJ9PlxuXG4gICAgICAgICAgICAgICAge3VzZXJMb2dJbiA/XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvbG9naW4nIGNsYXNzTmFtZT17XCJpbmZvSWNvbkxpbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnNGaWxsQ2FsY3VsYXRvckZpbGwgc3R5bGU9e3t3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIsIGNvbG9yOiBcIndoaXRlXCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy9pbmZvJyBjbGFzc05hbWU9e1wiaW5mb0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8TWRRdWVzdGlvbk1hcmsgc3R5bGU9e3t3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIsIGNvbG9yOiBcIndoaXRlXCJ9fS8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt1c2VyTG9nSW4gPyAnL3VzZXJEYXRhJyA6ICcvbG9naW4nfSBjbGFzc05hbWU9e1wibG9nSWNvbkxpbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyTG9nSW4gPyA8QnNQZXJzb25DaXJjbGUgc3R5bGU9e2ljb25zU3R5bGV9Lz4gOiA8TWRMb2NrT3V0bGluZSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAge3VzZXJMb2dJbiA/XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJyBjbGFzc05hbWU9e1wiaW5mb0ljb25MaW5rXCJ9IG9uQ2xpY2s9e2hhbmRsZUxvZ091dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnNQb3dlciBzdHlsZT17e3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiwgY29sb3I6IFwid2hpdGVcIn19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNTI3OWI3YjBiZGRmNzE5OWNlZDJcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWRMb2NrT3V0bGluZSIsIk1kUXVlc3Rpb25NYXJrIiwiTGluayIsIkJzUGVyc29uQ2lyY2xlIiwiQnNGaWxsQ2FsY3VsYXRvckZpbGwiLCJCc1Bvd2VyIiwiSGVhZGVyIiwiX3JlZiIsInVzZXJMb2dJbiIsImxvZ091dCIsInVzZXJEYXRhIiwiaWNvbnNTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidG8iLCJzdHlsZSIsIm9uQ2xpY2siLCJoYW5kbGVMb2dPdXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJjb25jYXQiLCJpZCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==