"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _Home_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);
/* harmony import */ var _Registration_registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
var Application = function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    logged = _useState2[0],
    setLogged = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    usersCalculations = _useState4[0],
    setUsersCalculations = _useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIi: setLogged
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      data: usersCalculations,
      changingData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "registration",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Registration_registration__WEBPACK_IMPORTED_MODULE_7__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "userData",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserData, {
      userLogIn: logged,
      setUserLogIn: setLogged,
      userData: usersCalculations
    })
  }))));
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Application, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "953b552d8c6f5a14dbd7"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUNoRSxlQUNSekIsMERBQUEsQ0FBQ08sbURBQUs7SUFBQ3lCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRWpDLDBEQUFBLENBQUN1QyxRQUFRO01BQUVMLFNBQVMsRUFBRVQsTUFBTztNQUFDVyxZQUFZLEVBQUVWLFNBQVU7TUFBQ2MsUUFBUSxFQUFFWDtJQUFrQjtFQUFHLEVBQUUsQ0FDcEgsQ0FDSCxDQUNBO0FBRXJCLENBQUM7QUFHRFQsSUFBSSxDQUFDcUIsTUFBTSxlQUNQekMsMERBQUEsQ0FBQ3FCLFdBQVcsT0FBRSxDQUNqQjs7Ozs7Ozs7VUN6Q0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTGluaywgTmF2TGluaywgT3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dC9sYXlvdXRcIjtcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL0hvbWUvd2VsY29tZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luL2xvZ2luXCI7XG5pbXBvcnQgTWFpbkFwcGxpY2F0aW9uIGZyb20gXCIuL01haW4vbWFpbkFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSBcIi4vSG9tZS9pbmZvcm1hdGlvblwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tIFwiLi9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IEFwcGxpY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJzQ2FsY3VsYXRpb25zLCBzZXRVc2Vyc0NhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSWk9e3NldExvZ2dlZH0vPn0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScnIGVsZW1lbnQ9ezxXZWxjb21lIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdpbmZvJyBlbGVtZW50PXs8SW5mb3JtYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvZ2luJyBlbGVtZW50PXs8TG9naW4gdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSBkYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gY2hhbmdpbmdEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ncmVnaXN0cmF0aW9uJyBlbGVtZW50PXs8UmVnaXN0cmF0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nY2FsY3VsYXRvcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9hbicgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2RlcG9zaXQnIGVsZW1lbnQ9ezxNYWluQXBwbGljYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdib25kJyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSd1c2VyRGF0YScgZWxlbWVudD17PFVzZXJEYXRhICB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0luPXtzZXRMb2dnZWR9IHVzZXJEYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgIClcbn1cblxuXG5yb290LnJlbmRlcihcbiAgICA8QXBwbGljYXRpb24vPlxuKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI5NTNiNTUyZDhjNmY1YTE0ZGJkN1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJMYXlvdXQiLCJXZWxjb21lIiwiTG9naW4iLCJNYWluQXBwbGljYXRpb24iLCJJbmZvcm1hdGlvbiIsIlJlZ2lzdHJhdGlvbiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwbGljYXRpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInVzZXJzQ2FsY3VsYXRpb25zIiwic2V0VXNlcnNDYWxjdWxhdGlvbnMiLCJjcmVhdGVFbGVtZW50IiwicGF0aCIsImVsZW1lbnQiLCJ1c2VyTG9nSW4iLCJzZXRVc2VyTG9nSWkiLCJzZXRVc2VyTG9nSW4iLCJkYXRhIiwiY2hhbmdpbmdEYXRhIiwiVXNlckRhdGEiLCJ1c2VyRGF0YSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=