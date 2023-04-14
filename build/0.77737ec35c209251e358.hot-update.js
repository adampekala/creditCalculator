"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _Home_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);
/* harmony import */ var _Registration_registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55);
/* harmony import */ var _userData_userData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIi: setLogged
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      data: usersCalculations,
      changingData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "registration",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Registration_registration__WEBPACK_IMPORTED_MODULE_7__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userLogIn: logged
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
    path: "userData",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_userData_userData__WEBPACK_IMPORTED_MODULE_8__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      userData: usersCalculations
    })
  }))));
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Application, null));

/***/ }),

/***/ 56:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var UserData = function (props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.userLogIn),
    _useState2 = _slicedToArray(_useState, 2),
    isLogged = _useState2[0],
    setIsLogged = _useState2[1];
  var iconsStyle = {
    width: "50px",
    height: "50px"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeLeftPhoto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Dzi\u0119ki Odsetkomatowi obliczysz:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "welcomeHero-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_1__.TbPigMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "wysoko\u015B\u0107 po\u017Cyczki")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "oprocentowanie kredytu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "odsetki od lokaty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMoneyBillAlt, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "zysk z obligacji"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: '/login',
    className: "thirdColor logLink"
  }, "Skorzystaj z kalkulatora")));
};
/* harmony default export */ __webpack_exports__["default"] = (UserData);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "137ee15cbc3003a4f703"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsQ0FBTyxDQUM3QixlQUNMQSwwREFBQSwwQkFDQUEsMERBQUEsNEJBQ0lBLDBEQUFBLENBQUM2QyxrREFBTTtJQUFDUSxLQUFLLEVBQUVKO0VBQVcsRUFBRSxDQUN6QixlQUNIakQsMERBQUEsZUFBTSx3QkFBc0IsQ0FBTyxDQUNsQyxlQUNMQSwwREFBQSwwQkFDQUEsMERBQUEsNEJBQ0lBLDBEQUFBLENBQUMyQywwREFBYztJQUFDVSxLQUFLLEVBQUVKO0VBQVcsRUFBRSxDQUNqQyxlQUNIakQsMERBQUEsZUFBTSxtQkFBaUIsQ0FBTyxDQUM3QixlQUNMQSwwREFBQSwwQkFDQUEsMERBQUEsNEJBQ0lBLDBEQUFBLENBQUMwQywwREFBYztJQUFDVyxLQUFLLEVBQUVKO0VBQVcsRUFBRSxDQUNqQyxlQUNIakQsMERBQUEsZUFBTSxrQkFBZ0IsQ0FBTyxDQUM1QixDQUNKLGVBRUxBLDBEQUFBLENBQUNRLGtEQUFJO0lBQUM4QyxFQUFFLEVBQUUsUUFBUztJQUFDRixTQUFTLEVBQUU7RUFBcUIsR0FBQywwQkFBd0IsQ0FBTyxDQUVsRixDQUNKO0FBQ2QsQ0FBQztBQUVELCtEQUFlbkMsUUFBUTs7Ozs7Ozs7VUN0RHZCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL3VzZXJEYXRhL3VzZXJEYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCBMaW5rLCBOYXZMaW5rLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vSG9tZS93ZWxjb21lXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW4vbG9naW5cIjtcbmltcG9ydCBNYWluQXBwbGljYXRpb24gZnJvbSBcIi4vTWFpbi9tYWluQXBwbGljYXRpb25cIjtcbmltcG9ydCBJbmZvcm1hdGlvbiBmcm9tIFwiLi9Ib21lL2luZm9ybWF0aW9uXCI7XG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gXCIuL1JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25cIjtcbmltcG9ydCBVc2VyRGF0YSBmcm9tIFwiLi91c2VyRGF0YS91c2VyRGF0YVwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5jb25zdCBBcHBsaWNhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2Vyc0NhbGN1bGF0aW9ucywgc2V0VXNlcnNDYWxjdWxhdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PExheW91dCB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0lpPXtzZXRMb2dnZWR9Lz59PlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8V2VsY29tZSB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0naW5mbycgZWxlbWVudD17PEluZm9ybWF0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdsb2dpbicgZWxlbWVudD17PExvZ2luIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0gZGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9IGNoYW5naW5nRGF0YT17c2V0VXNlcnNDYWxjdWxhdGlvbnN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J3JlZ2lzdHJhdGlvbicgZWxlbWVudD17PFJlZ2lzdHJhdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0luPXtzZXRMb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2NhbGN1bGF0b3InPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9JycgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvYW4nIGVsZW1lbnQ9ezxNYWluQXBwbGljYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdkZXBvc2l0JyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nYm9uZCcgZWxlbWVudD17PE1haW5BcHBsaWNhdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ndXNlckRhdGEnIGVsZW1lbnQ9ezxVc2VyRGF0YSAgdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9Lz59Lz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICApXG59XG5cblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcGxpY2F0aW9uLz5cbik7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IFVzZXJEYXRhID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShwcm9wcy51c2VyTG9nSW4pO1xuXG5cblxuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwifTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxoMT5XaXRhaiE8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkR6acSZa2kgT2RzZXRrb21hdG93aSBvYmxpY3p5c3o6PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3ZWxjb21lSGVyby1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGJQaWdNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj53eXNva2/Fm8SHIHBvxbx5Y3praTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0Jhbmsgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+b3Byb2NlbnRvd2FuaWUga3JlZHl0dTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaVJlY2VpdmVNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5vZHNldGtpIG9kIGxva2F0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYU1vbmV5QmlsbEFsdCBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj56eXNrIHogb2JsaWdhY2ppPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9sb2dpbid9IGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yIGxvZ0xpbmtcIn0+U2tvcnp5c3RhaiB6IGthbGt1bGF0b3JhPC9MaW5rPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyRGF0YTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxMzdlZTE1Y2JjMzAwM2E0ZjcwM1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJMYXlvdXQiLCJXZWxjb21lIiwiTG9naW4iLCJNYWluQXBwbGljYXRpb24iLCJJbmZvcm1hdGlvbiIsIlJlZ2lzdHJhdGlvbiIsIlVzZXJEYXRhIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHBsaWNhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2dlZCIsInNldExvZ2dlZCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidXNlcnNDYWxjdWxhdGlvbnMiLCJzZXRVc2Vyc0NhbGN1bGF0aW9ucyIsImNyZWF0ZUVsZW1lbnQiLCJwYXRoIiwiZWxlbWVudCIsInVzZXJMb2dJbiIsInNldFVzZXJMb2dJaSIsInNldFVzZXJMb2dJbiIsImRhdGEiLCJjaGFuZ2luZ0RhdGEiLCJ1c2VyRGF0YSIsInJlbmRlciIsIkZhTW9uZXlCaWxsQWx0IiwiR2lSZWNlaXZlTW9uZXkiLCJUYlBpZ01vbmV5IiwiQnNCYW5rIiwicHJvcHMiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwiaWNvbnNTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=