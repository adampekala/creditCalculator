"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _Home_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIi: setLogged
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  })))));
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Application, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0e7b156c47db2b461109"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZWQ4Njk3Zjg4NDM5YjBiYjYzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ2Y7QUFDcUM7QUFFOUM7QUFDQTtBQUNIO0FBQ21CO0FBQ1I7QUFFN0MsSUFBTWdCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR2YsNERBQVUsQ0FBQ1ksU0FBUyxDQUFDO0FBQ2xDLElBQU1JLFdBQVcsR0FBRyxTQUFBQSxDQUFBLEVBQU07RUFDdEIsSUFBQUMsU0FBQSxHQUE0QmxCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFtQixVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFwQ0csTUFBTSxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUV4QixvQkFDSXRCLDBEQUFBLENBQUNLLHdEQUFVLHFCQUNQTCwwREFBQSxDQUFDTSxvREFBTSxxQkFDSE4sMERBQUEsQ0FBQ08sbURBQUs7SUFBQ29CLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRTVCLDBEQUFBLENBQUNXLHNEQUFNO01BQUNrQixTQUFTLEVBQUVMLE1BQU87TUFBQ00sWUFBWSxFQUFFTDtJQUFVO0VBQUcsZ0JBQzNFekIsMERBQUEsQ0FBQ08sbURBQUs7SUFBQ29CLElBQUksRUFBQyxFQUFFO0lBQUNDLE9BQU8sZUFBRTVCLDBEQUFBLENBQUNZLHFEQUFPO01BQUNpQixTQUFTLEVBQUVMO0lBQU87RUFBRyxFQUFFLGVBQ3hEeEIsMERBQUEsQ0FBQ08sbURBQUs7SUFBQ29CLElBQUksRUFBQyxNQUFNO0lBQUNDLE9BQU8sZUFBRTVCLDBEQUFBLENBQUNlLHlEQUFXO01BQUNjLFNBQVMsRUFBRUw7SUFBTztFQUFHLEVBQUUsZUFDaEV4QiwwREFBQSxDQUFDTyxtREFBSztJQUFDb0IsSUFBSSxFQUFDLE9BQU87SUFBQ0MsT0FBTyxlQUFFNUIsMERBQUEsQ0FBQ2Esb0RBQUs7TUFBQ2dCLFNBQVMsRUFBRUwsTUFBTztNQUFDTyxZQUFZLEVBQUVOO0lBQVU7RUFBRyxFQUFFLGVBQ3BGekIsMERBQUEsQ0FBQ08sbURBQUs7SUFBQ29CLElBQUksRUFBQztFQUFZLGdCQUNwQjNCLDBEQUFBLENBQUNPLG1EQUFLO0lBQUNvQixJQUFJLEVBQUMsRUFBRTtJQUFDQyxPQUFPLGVBQUU1QiwwREFBQSxDQUFDYyw2REFBZTtNQUFDZSxTQUFTLEVBQUVMO0lBQU87RUFBRyxFQUFFLGVBQ2hFeEIsMERBQUEsQ0FBQ08sbURBQUs7SUFBQ29CLElBQUksRUFBQyxNQUFNO0lBQUNDLE9BQU8sZUFBRTVCLDBEQUFBLENBQUNjLDZEQUFlO01BQUNlLFNBQVMsRUFBRUw7SUFBTztFQUFHLEVBQUUsZUFDcEV4QiwwREFBQSxDQUFDTyxtREFBSztJQUFDb0IsSUFBSSxFQUFDLFNBQVM7SUFBQ0MsT0FBTyxlQUFFNUIsMERBQUEsQ0FBQ2MsNkRBQWU7TUFBQ2UsU0FBUyxFQUFFTDtJQUFPO0VBQUcsRUFBRSxlQUN2RXhCLDBEQUFBLENBQUNPLG1EQUFLO0lBQUNvQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxPQUFPLGVBQUU1QiwwREFBQSxDQUFDYyw2REFBZTtNQUFDZSxTQUFTLEVBQUVMO0lBQU87RUFBRyxFQUFFLENBQ2hFLENBQ0osQ0FDSCxDQUNBO0FBRXJCLENBQUM7QUFHREwsSUFBSSxDQUFDYSxNQUFNLGVBQ1BoQywwREFBQSxDQUFDb0IsV0FBVyxPQUFFLENBQ2pCOzs7Ozs7OztVQ3JDRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCBMaW5rLCBOYXZMaW5rLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vSG9tZS93ZWxjb21lXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW4vbG9naW5cIjtcbmltcG9ydCBNYWluQXBwbGljYXRpb24gZnJvbSBcIi4vTWFpbi9tYWluQXBwbGljYXRpb25cIjtcbmltcG9ydCBJbmZvcm1hdGlvbiBmcm9tIFwiLi9Ib21lL2luZm9ybWF0aW9uXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IEFwcGxpY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PExheW91dCB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0lpPXtzZXRMb2dnZWR9Lz59PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8V2VsY29tZSB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0naW5mbycgZWxlbWVudD17PEluZm9ybWF0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdsb2dpbicgZWxlbWVudD17PExvZ2luIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nY2FsY3VsYXRvcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9hbicgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2RlcG9zaXQnIGVsZW1lbnQ9ezxNYWluQXBwbGljYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdib25kJyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgKVxufVxuXG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHBsaWNhdGlvbi8+XG4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjBlN2IxNTZjNDdkYjJiNDYxMTA5XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJIYXNoUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkxheW91dCIsIldlbGNvbWUiLCJMb2dpbiIsIk1haW5BcHBsaWNhdGlvbiIsIkluZm9ybWF0aW9uIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHBsaWNhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2dlZCIsInNldExvZ2dlZCIsImNyZWF0ZUVsZW1lbnQiLCJwYXRoIiwiZWxlbWVudCIsInVzZXJMb2dJbiIsInNldFVzZXJMb2dJaSIsInNldFVzZXJMb2dJbiIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=