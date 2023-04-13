"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Layout = function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    logIn = _useState2[0],
    setLogIn = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userLogIn: logIn
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, null));
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
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);







var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "login",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "calculator"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "credit",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "loan",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "deposit",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "bond",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}))))));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "897da3c705f2dc5e9925"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xN2M0MmYyYzkwMGJjOTBmMzM1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ1Q7QUFFVjtBQUU5QixJQUFNSyxNQUFNLEdBQUcsU0FBQUEsQ0FBQSxFQUFNO0VBQ2pCLElBQUFDLFNBQUEsR0FBMEJMLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQWxDRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBQ3RCLG9CQUNJUCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0ksK0NBQU07SUFBQ1MsU0FBUyxFQUFFSjtFQUFNLEVBQUUsZUFDM0JULDBEQUFBLENBQUNHLG9EQUFNLE9BQUUsQ0FDVjtBQUVYLENBQUM7QUFFRCwrREFBZUUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0M7QUFDZjtBQUNxQztBQUU5QztBQUNBO0FBQ0g7QUFDbUI7QUFFckQsSUFBTW1CLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1osNERBQVUsQ0FBQ1MsU0FBUyxDQUFDO0FBRWxDRyxJQUFJLENBQUNDLE1BQU0sZUFDUDVCLDBEQUFBLENBQUNnQix3REFBVSxxQkFDUGhCLDBEQUFBLENBQUNpQixvREFBTSxxQkFDQ2pCLDBEQUFBLENBQUNrQixtREFBSztFQUFDVyxJQUFJLEVBQUMsR0FBRztFQUFDQyxPQUFPLGVBQUU5QiwwREFBQSxDQUFDSyxzREFBTTtBQUFHLGdCQUMvQkwsMERBQUEsQ0FBQ2tCLG1EQUFLO0VBQUNXLElBQUksRUFBQyxFQUFFO0VBQUNDLE9BQU8sZUFBRTlCLDBEQUFBLENBQUNxQixxREFBTztBQUFHLEVBQUUsZUFDckNyQiwwREFBQSxDQUFDa0IsbURBQUs7RUFBQ1csSUFBSSxFQUFDLE9BQU87RUFBQ0MsT0FBTyxlQUFFOUIsMERBQUEsQ0FBQ3NCLG9EQUFLO0FBQUcsRUFBRSxlQUN4Q3RCLDBEQUFBLENBQUNrQixtREFBSztFQUFDVyxJQUFJLEVBQUM7QUFBWSxnQkFDcEI3QiwwREFBQSxDQUFDa0IsbURBQUs7RUFBQ1csSUFBSSxFQUFDLFFBQVE7RUFBQ0MsT0FBTyxlQUFFOUIsMERBQUEsQ0FBQ3VCLDZEQUFlO0FBQUcsRUFBRSxlQUNuRHZCLDBEQUFBLENBQUNrQixtREFBSztFQUFDVyxJQUFJLEVBQUMsTUFBTTtFQUFDQyxPQUFPLGVBQUU5QiwwREFBQSxDQUFDdUIsNkRBQWU7QUFBRyxFQUFFLGVBQ2pEdkIsMERBQUEsQ0FBQ2tCLG1EQUFLO0VBQUNXLElBQUksRUFBQyxTQUFTO0VBQUNDLE9BQU8sZUFBRTlCLDBEQUFBLENBQUN1Qiw2REFBZTtBQUFHLEVBQUUsZUFDcER2QiwwREFBQSxDQUFDa0IsbURBQUs7RUFBQ1csSUFBSSxFQUFDLE1BQU07RUFBQ0MsT0FBTyxlQUFFOUIsMERBQUEsQ0FBQ3VCLDZEQUFlO0FBQUcsRUFBRSxDQUM3QyxDQUNKLENBQ1AsQ0FDQSxDQUNoQjs7Ozs7Ozs7VUMzQkQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xheW91dC9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7T3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuXG5jb25zdCBMYXlvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2xvZ0luLCBzZXRMb2dJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgdXNlckxvZ0luPXtsb2dJbn0vPlxuICAgICAgICAgICAgPE91dGxldC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCBMaW5rLCBOYXZMaW5rLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vSG9tZS93ZWxjb21lXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW4vbG9naW5cIjtcbmltcG9ydCBNYWluQXBwbGljYXRpb24gZnJvbSBcIi4vTWFpbi9tYWluQXBwbGljYXRpb25cIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5yb290LnJlbmRlcihcbiAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0Lz59PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8V2VsY29tZS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdsb2dpbicgZWxlbWVudD17PExvZ2luLz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2NhbGN1bGF0b3InPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2NyZWRpdCcgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbi8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9hbicgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbi8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nZGVwb3NpdCcgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbi8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nYm9uZCcgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbi8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Sb3V0ZXM+XG4gICAgPC9IYXNoUm91dGVyPlxuKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4OTdkYTNjNzA1ZjJkYzVlOTkyNVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPdXRsZXQiLCJIZWFkZXIiLCJMYXlvdXQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dJbiIsInNldExvZ0luIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidXNlckxvZ0luIiwiQ29tcG9uZW50IiwiY3JlYXRlUm9vdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkxpbmsiLCJOYXZMaW5rIiwiV2VsY29tZSIsIkxvZ2luIiwiTWFpbkFwcGxpY2F0aW9uIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJwYXRoIiwiZWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=