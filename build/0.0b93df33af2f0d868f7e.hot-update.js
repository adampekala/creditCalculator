"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _Home_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var _Registration_registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var _userData_userData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _Main_creditCalculator_creditCalculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55);
/* harmony import */ var _Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59);
/* harmony import */ var _Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60);
/* harmony import */ var _Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      data: usersCalculations,
      changingData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "registration",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Registration_registration__WEBPACK_IMPORTED_MODULE_7__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_creditCalculator_creditCalculator__WEBPACK_IMPORTED_MODULE_9__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
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

/***/ 54:
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.userData),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj ", data.name, "! Twoje obliczenia."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "welcomeHero-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_1__.TbPigMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data.loans.length, " po\u017Cyczka(i/ek)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data.credits.length, " kredyt(\xF3w/y)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data.deposits.length, " lokata(y)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMoneyBillAlt, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data.bonds.length, " obligacja(e/i)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: '/login',
    className: "thirdColor logLink"
  }, "Skorzystaj z kalkulatora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: '/login',
    className: "thirdColor logLink",
    onClick: function handleLogOut() {
      props.setUserLogIn(false);
    }
  }, "Wyloguj si\u0119")));
};
/* harmony default export */ __webpack_exports__["default"] = (UserData);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "768d485e1928dae76773"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Esa0RBQUk7SUFBQ3lELEVBQUUsRUFBRSxRQUFTO0lBQUNSLFNBQVMsRUFBRTtFQUFxQixHQUFDLDBCQUF3QixDQUFPLGVBQ3BGekQsMERBQUEsQ0FBQ1Esa0RBQUk7SUFBQ3lELEVBQUUsRUFBRSxRQUFTO0lBQUNSLFNBQVMsRUFBRSxvQkFBcUI7SUFBQ1MsT0FBTyxFQTFDbkQsU0FBZkMsWUFBWUEsQ0FBQSxFQUFTO01BQ3ZCakIsS0FBSyxDQUFDVixZQUFZLENBQUMsS0FBSyxDQUFDO0lBQzdCO0VBd0N1RixHQUFFLGtCQUFXLENBQU8sQ0FFN0YsQ0FDSjtBQUNkLENBQUM7QUFFRCwrREFBZXZCLFFBQVE7Ozs7Ozs7O1VDM0R2QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy91c2VyRGF0YS91c2VyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTGluaywgTmF2TGluaywgT3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dC9sYXlvdXRcIjtcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL0hvbWUvd2VsY29tZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luL2xvZ2luXCI7XG5pbXBvcnQgTWFpbkFwcGxpY2F0aW9uIGZyb20gXCIuL01haW4vbWFpbkFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSBcIi4vSG9tZS9pbmZvcm1hdGlvblwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tIFwiLi9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uXCI7XG5pbXBvcnQgVXNlckRhdGEgZnJvbSBcIi4vdXNlckRhdGEvdXNlckRhdGFcIjtcbmltcG9ydCBDcmVkaXRDYWxjdWxhdG9yIGZyb20gXCIuL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yXCI7XG5pbXBvcnQgQm9uZENhbGN1bGF0b3IgZnJvbSBcIi4vTWFpbi9ib25kQ2FsY3VsYXRvci9ib25kQ2FsY3VsYXRvclwiO1xuaW1wb3J0IExvYW5DYWxjdWxhdG9yIGZyb20gXCIuL01haW4vbG9hbkNhbGN1bGF0b3IvbG9hbkNhbGN1bGF0b3JcIjtcbmltcG9ydCBEZXBvc2l0Q2FsY3VsYXRvciBmcm9tIFwiLi9NYWluL2RlcG9zaXRDYWxjdWxhdG9yL2RlcG9zaXRDYWxjdWxhdG9yXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IEFwcGxpY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJzQ2FsY3VsYXRpb25zLCBzZXRVc2Vyc0NhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScnIGVsZW1lbnQ9ezxXZWxjb21lIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdpbmZvJyBlbGVtZW50PXs8SW5mb3JtYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvZ2luJyBlbGVtZW50PXs8TG9naW4gdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSBkYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gY2hhbmdpbmdEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ncmVnaXN0cmF0aW9uJyBlbGVtZW50PXs8UmVnaXN0cmF0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nY2FsY3VsYXRvcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8Q3JlZGl0Q2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0gdXNlckRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBzZXRVc2VyRGF0YT17c2V0VXNlcnNDYWxjdWxhdGlvbnN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdsb2FuJyBlbGVtZW50PXs8TG9hbkNhbGN1bGF0b3IgdXNlckxvZ0luPXtsb2dnZWR9IHVzZXJEYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gc2V0VXNlckRhdGE9e3NldFVzZXJzQ2FsY3VsYXRpb25zfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nZGVwb3NpdCcgZWxlbWVudD17PERlcG9zaXRDYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9IHNldFVzZXJEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2JvbmQnIGVsZW1lbnQ9ezxCb25kQ2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0gdXNlckRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBzZXRVc2VyRGF0YT17c2V0VXNlcnNDYWxjdWxhdGlvbnN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J3VzZXJEYXRhJyBlbGVtZW50PXs8VXNlckRhdGEgIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0gdXNlckRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfS8+fS8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgKVxufVxuXG5cbnJvb3QucmVuZGVyKFxuICAgIDxBcHBsaWNhdGlvbi8+XG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGYU1vbmV5QmlsbEFsdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0dpUmVjZWl2ZU1vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7VGJQaWdNb25leX0gZnJvbSBcInJlYWN0LWljb25zL3RiXCI7XG5pbXBvcnQge0JzQmFua30gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBVc2VyRGF0YSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtpc0xvZ2dlZCwgc2V0SXNMb2dnZWRdID0gdXNlU3RhdGUocHJvcHMudXNlckxvZ0luKTtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShwcm9wcy51c2VyRGF0YSk7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dPdXQgPSAoKSA9PiB7XG4gICAgICAgIHByb3BzLnNldFVzZXJMb2dJbihmYWxzZSk7XG4gICAgfVxuXG5cblxuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwifTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxoMT5XaXRhaiB7ZGF0YS5uYW1lfSEgVHdvamUgb2JsaWN6ZW5pYS48L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3ZWxjb21lSGVyby1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGJQaWdNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YS5sb2Fucy5sZW5ndGh9IHBvxbx5Y3prYShpL2VrKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0Jhbmsgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEuY3JlZGl0cy5sZW5ndGh9IGtyZWR5dCjDs3cveSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R2lSZWNlaXZlTW9uZXkgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEuZGVwb3NpdHMubGVuZ3RofSBsb2thdGEoeSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFNb25leUJpbGxBbHQgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEuYm9uZHMubGVuZ3RofSBvYmxpZ2FjamEoZS9pKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89eycvbG9naW4nfSBjbGFzc05hbWU9e1widGhpcmRDb2xvciBsb2dMaW5rXCJ9PlNrb3J6eXN0YWogeiBrYWxrdWxhdG9yYTwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9sb2dpbid9IGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yIGxvZ0xpbmtcIn0gb25DbGljaz17aGFuZGxlTG9nT3V0fSA+V3lsb2d1aiBzacSZPC9MaW5rPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyRGF0YTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI3NjhkNDg1ZTE5MjhkYWU3Njc3M1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJMYXlvdXQiLCJXZWxjb21lIiwiTG9naW4iLCJNYWluQXBwbGljYXRpb24iLCJJbmZvcm1hdGlvbiIsIlJlZ2lzdHJhdGlvbiIsIlVzZXJEYXRhIiwiQ3JlZGl0Q2FsY3VsYXRvciIsIkJvbmRDYWxjdWxhdG9yIiwiTG9hbkNhbGN1bGF0b3IiLCJEZXBvc2l0Q2FsY3VsYXRvciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwiQXBwbGljYXRpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dnZWQiLCJzZXRMb2dnZWQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInVzZXJzQ2FsY3VsYXRpb25zIiwic2V0VXNlcnNDYWxjdWxhdGlvbnMiLCJjcmVhdGVFbGVtZW50IiwicGF0aCIsImVsZW1lbnQiLCJ1c2VyTG9nSW4iLCJzZXRVc2VyTG9nSW4iLCJkYXRhIiwiY2hhbmdpbmdEYXRhIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInJlbmRlciIsIkZhTW9uZXlCaWxsQWx0IiwiR2lSZWNlaXZlTW9uZXkiLCJUYlBpZ01vbmV5IiwiQnNCYW5rIiwicHJvcHMiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwic2V0RGF0YSIsImljb25zU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsIm5hbWUiLCJzdHlsZSIsImxvYW5zIiwibGVuZ3RoIiwiY3JlZGl0cyIsImRlcG9zaXRzIiwiYm9uZHMiLCJ0byIsIm9uQ2xpY2siLCJoYW5kbGVMb2dPdXQiXSwic291cmNlUm9vdCI6IiJ9