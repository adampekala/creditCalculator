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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdLock, {
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
/******/ 	__webpack_require__.h = function() { return "6142dcd741560839a569"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsVUFBQTBCLE1BQU07UUFBQSxPQUFJZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDO01BQUEsRUFBQztJQUU5SDtFQStCMEUsZ0JBQzFEdkMsMERBQUEsQ0FBQ0ksOERBQWtCO0lBQUNrQixLQUFLLEVBQUU7TUFBQ04sS0FBSyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQW1CO0VBQUUsRUFBRSxDQUN0RixHQUVQLElBQUksQ0FHTixDQUNEO0FBRWpCLENBQUM7QUFFRCwrREFBZVIsTUFBTTs7Ozs7Ozs7VUMvRHJCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9MYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TWRMb2NrT3V0bGluZSwgTWRRdWVzdGlvbk1hcmssIE1kUG93ZXJTZXR0aW5nc05ldywgTWRDYWxjdWxhdGUsIE1kTG9ja30gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0JzUGVyc29uQ2lyY2xlLCBCc0ZpbGxDYWxjdWxhdG9yRmlsbH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5cblxuY29uc3QgSGVhZGVyID0gKHt1c2VyTG9nSW4sIGxvZ091dCwgdXNlckRhdGF9KSA9PiB7XG4gICAgY29uc3QgaWNvbnNTdHlsZSA9IHt3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIsIGNvbG9yOiBcIndoaXRlXCJ9O1xuXG4gICAgICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCJcblxuICAgICAgICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG5cbiAgICAgICAgICAgIGZldGNoKGAke0FQSX0vZGF0YS8ke3VzZXJEYXRhLmlkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge2NvbnNvbGUubG9nKGRhdGEpOyBsb2dPdXQoZmFsc2UpfSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e1wibWFpbkNvbG9yIHRvcEJhclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImxvZ29Db250YWluZXJcIn0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImxvZ28tZWwxXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wibG9nby1lbDJcIn0+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj48TGluayBjbGFzc05hbWU9e1wibWFpbkxvZ29Ib21lTGlua1wifSB0bz0nLyc+T2RzZXRrb21hdC5jb208L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImljb25zQ29udGFpbmVyXCJ9PlxuXG4gICAgICAgICAgICAgICAge3VzZXJMb2dJbiA/XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvbG9naW4nIGNsYXNzTmFtZT17XCJpbmZvSWNvbkxpbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRDYWxjdWxhdGUgc3R5bGU9e3t3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIsIGNvbG9yOiBcInJnYigxNSwgMTcwLCAyNDApXCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy9pbmZvJyBjbGFzc05hbWU9e1wiaW5mb0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8TWRRdWVzdGlvbk1hcmsgc3R5bGU9e3t3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIsIGNvbG9yOiBcIndoaXRlXCJ9fS8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt1c2VyTG9nSW4gPyAnL3VzZXJEYXRhJyA6ICcvbG9naW4nfSBjbGFzc05hbWU9e1wibG9nSWNvbkxpbmtcIn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyTG9nSW4gPyA8QnNQZXJzb25DaXJjbGUgc3R5bGU9e2ljb25zU3R5bGV9Lz4gOiA8TWRMb2NrIHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICB7dXNlckxvZ0luID9cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIGNsYXNzTmFtZT17XCJpbmZvSWNvbkxpbmtcIn0gb25DbGljaz17aGFuZGxlTG9nT3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZFBvd2VyU2V0dGluZ3NOZXcgc3R5bGU9e3t3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCIsIGNvbG9yOiBcInJnYigxNSwgMTcwLCAyNDApXCJ9fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjYxNDJkY2Q3NDE1NjA4MzlhNTY5XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1kTG9ja091dGxpbmUiLCJNZFF1ZXN0aW9uTWFyayIsIk1kUG93ZXJTZXR0aW5nc05ldyIsIk1kQ2FsY3VsYXRlIiwiTWRMb2NrIiwiTGluayIsIkJzUGVyc29uQ2lyY2xlIiwiQnNGaWxsQ2FsY3VsYXRvckZpbGwiLCJIZWFkZXIiLCJfcmVmIiwidXNlckxvZ0luIiwibG9nT3V0IiwidXNlckRhdGEiLCJpY29uc1N0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0byIsInN0eWxlIiwib25DbGljayIsImhhbmRsZUxvZ091dCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImNvbmNhdCIsImlkIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9