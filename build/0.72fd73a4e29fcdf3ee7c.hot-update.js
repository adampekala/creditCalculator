"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 53:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sider_sider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);






var Header = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "mainColor topBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "logo-el1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "logo-el2"
  })), "Odsetkomat.com"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "iconsContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdQuestionMark, {
    style: {
      width: "50px",
      height: "50px",
      color: "white"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdLockOutline, {
    style: {
      width: "50px",
      height: "50px",
      color: "white"
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ 34:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sider_sider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);







var Layout = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Outlet, null));
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);







var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "login",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_3__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "calculator",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_4__["default"], null)
})))));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "17c42f2c900bc90f3359"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MmZkNzNhNGUyOWZjZGYzZWU3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFDbUI7QUFDUDtBQUNoQjtBQUNFO0FBQ3hDLElBQU1PLE1BQU0sR0FBRyxTQUFBQSxDQUFBLEVBQU07RUFDakIsb0JBQ0lQLDBEQUFBO0lBQVFTLFNBQVMsRUFBRTtFQUFtQixnQkFDbENULDBEQUFBO0lBQUtTLFNBQVMsRUFBRTtFQUFnQixnQkFBQ1QsMERBQUE7SUFBTVMsU0FBUyxFQUFFO0VBQVcsZ0JBQUNULDBEQUFBO0lBQU1TLFNBQVMsRUFBRTtFQUFXLEVBQVEsQ0FBTyxrQkFDekcsQ0FBTSxlQUNOVCwwREFBQTtJQUFLUyxTQUFTLEVBQUU7RUFBaUIsZ0JBRTdCVCwwREFBQSxDQUFDRywwREFBYztJQUFDTyxLQUFLLEVBQUU7TUFBQ0MsS0FBSyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQU87RUFBRSxFQUFFLGVBR3pFYiwwREFBQSxDQUFDRSx5REFBYTtJQUFDUSxLQUFLLEVBQUU7TUFBQ0MsS0FBSyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLE1BQU07TUFBRUMsS0FBSyxFQUFFO0lBQU87RUFBRSxFQUFFLENBRXRFLENBQ0Q7QUFFakIsQ0FBQztBQUVELCtEQUFlTixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUN2Qks7QUFDZ0I7QUFDbUI7QUFDUDtBQUNoQjtBQUNSO0FBQ1U7QUFDeEMsSUFBTU8sTUFBTSxHQUFHLFNBQUFBLENBQUEsRUFBTTtFQUNqQixvQkFDSWQsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNPLCtDQUFNLE9BQUUsZUFDVFAsMERBQUEsQ0FBQ00sb0RBQU0sT0FBRSxDQUNWO0FBRVgsQ0FBQztBQUVELCtEQUFlUSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCd0M7QUFDZjtBQUNxQztBQUU5QztBQUNIO0FBQ21CO0FBQ2hCO0FBRXJDLElBQU1ZLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1YsNERBQVUsQ0FBQ08sU0FBUyxDQUFDO0FBRWxDRyxJQUFJLENBQUNDLE1BQU0sZUFBQzlCLDBEQUFBLENBQUNvQix3REFBVSxxQkFDbkJwQiwwREFBQSxDQUFDcUIsb0RBQU0scUJBQ0NyQiwwREFBQSxDQUFDc0IsbURBQUs7RUFBQ1MsSUFBSSxFQUFDLEdBQUc7RUFBQ0MsT0FBTyxlQUFFaEMsMERBQUEsQ0FBQ2Msc0RBQU07QUFBRyxnQkFDL0JkLDBEQUFBLENBQUNzQixtREFBSztFQUFDUyxJQUFJLEVBQUMsRUFBRTtFQUFDQyxPQUFPLGVBQUVoQywwREFBQSxDQUFDSyxxREFBTztBQUFHLEVBQUUsZUFDckNMLDBEQUFBLENBQUNzQixtREFBSztFQUFDUyxJQUFJLEVBQUMsT0FBTztFQUFDQyxPQUFPLGVBQUVoQywwREFBQSxDQUFDeUIsb0RBQUs7QUFBRyxFQUFFLGVBQ3hDekIsMERBQUEsQ0FBQ3NCLG1EQUFLO0VBQUNTLElBQUksRUFBQyxZQUFZO0VBQUNDLE9BQU8sZUFBRWhDLDBEQUFBLENBQUNJLDZEQUFlO0FBQUcsRUFBRSxDQUVuRCxDQUdQLENBQ0EsQ0FBQzs7Ozs7Ozs7VUN2QmQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xheW91dC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xheW91dC9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9TaWRlci9zaWRlclwiO1xuaW1wb3J0IHtNZExvY2tPdXRsaW5lLCBNZFF1ZXN0aW9uTWFya30gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgTWFpbkFwcGxpY2F0aW9uIGZyb20gXCIuLi9NYWluL21haW5BcHBsaWNhdGlvblwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4uL0hvbWUvd2VsY29tZVwiO1xuaW1wb3J0IHtPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e1wibWFpbkNvbG9yIHRvcEJhclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImxvZ29Db250YWluZXJcIn0+PHNwYW4gY2xhc3NOYW1lPXtcImxvZ28tZWwxXCJ9PjxzcGFuIGNsYXNzTmFtZT17XCJsb2dvLWVsMlwifT48L3NwYW4+PC9zcGFuPk9kc2V0a29tYXQuY29tXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImljb25zQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT17XCJpY29uIGljb24tcXVlc3Rpb25cIn0+Ki99XG4gICAgICAgICAgICAgICAgPE1kUXVlc3Rpb25NYXJrIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9e1wiaWNvbiBpY29uLXF1ZXN0aW9uXCJ9PiovfVxuICAgICAgICAgICAgICAgIDxNZExvY2tPdXRsaW5lIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj4qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9TaWRlci9zaWRlclwiO1xuaW1wb3J0IHtNZExvY2tPdXRsaW5lLCBNZFF1ZXN0aW9uTWFya30gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgTWFpbkFwcGxpY2F0aW9uIGZyb20gXCIuLi9NYWluL21haW5BcHBsaWNhdGlvblwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4uL0hvbWUvd2VsY29tZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCB7T3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuY29uc3QgTGF5b3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgIDxPdXRsZXQvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTGluaywgTmF2TGluaywgT3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgV2VsY29tZSBmcm9tIFwiLi9Ib21lL3dlbGNvbWVcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpbi9sb2dpblwiO1xuaW1wb3J0IE1haW5BcHBsaWNhdGlvbiBmcm9tIFwiLi9NYWluL21haW5BcHBsaWNhdGlvblwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXQvbGF5b3V0XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxucm9vdC5yZW5kZXIoPEhhc2hSb3V0ZXI+XG4gICAgPFJvdXRlcz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQvPn0+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9JycgZWxlbWVudD17PFdlbGNvbWUvPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdsb2dpbicgZWxlbWVudD17PExvZ2luLz59Lz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nY2FsY3VsYXRvcicgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbi8+fS8+XG5cbiAgICAgICAgICAgIDwvUm91dGU+XG5cblxuICAgIDwvUm91dGVzPlxuPC9IYXNoUm91dGVyPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMTdjNDJmMmM5MDBiYzkwZjMzNTlcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIlNpZGVySGlzdG9yeSIsIk1kTG9ja091dGxpbmUiLCJNZFF1ZXN0aW9uTWFyayIsIk1haW5BcHBsaWNhdGlvbiIsIldlbGNvbWUiLCJPdXRsZXQiLCJIZWFkZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiTGF5b3V0IiwiRnJhZ21lbnQiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJIYXNoUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJMaW5rIiwiTmF2TGluayIsIkxvZ2luIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJwYXRoIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=