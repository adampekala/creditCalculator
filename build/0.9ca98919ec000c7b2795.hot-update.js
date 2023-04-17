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
    to: props.userLogIn ? '/userData' : '/login',
    className: "logIconLink"
  }, props.userLogIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {
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

/***/ }),

/***/ 34:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);



var Layout = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    userLogIn: props.userLogIn,
    logOut: props.setUserLogIn,
    userData: props.userData
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
/* harmony import */ var _Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60);
/* harmony import */ var _Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61);
/* harmony import */ var _Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  var credits = usersCalculations.credits,
    bonds = usersCalculations.bonds,
    deposits = usersCalculations.deposits,
    loans = usersCalculations.loans;
  var creditsFilter = function (id) {
    var newCreditsArr = credits.filter(function (el, i) {
      return i !== id;
    });
    setUsersCalculations(_objectSpread(_objectSpread({}, usersCalculations), {}, {
      credits: newCreditsArr
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      userData: usersCalculations
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
      setUserData: setUsersCalculations,
      filter: creditsFilter
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations,
      filter: creditsFilter
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations,
      filter: creditsFilter
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations,
      filter: creditsFilter
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a6b95f51984e5bfb7ed9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YztFQUFHLEVBQUUsZUFFMUo5RSwwREFBQSxDQUFDZ0Qsb0RBQUs7SUFBQ29DLElBQUksRUFBQyxTQUFTO0lBQUNDLE9BQU8sZUFBRXJGLDBEQUFBLENBQUMyRCxrRkFBaUI7TUFBQ2pELFNBQVMsRUFBRTBELE1BQU87TUFBQ3hELFFBQVEsRUFBRTRELGlCQUFrQjtNQUFDZSxXQUFXLEVBQUVkLG9CQUFxQjtNQUFDTyxNQUFNLEVBQUVGO0lBQWM7RUFBRyxFQUFFLGVBRWhLOUUsMERBQUEsQ0FBQ2dELG9EQUFLO0lBQUNvQyxJQUFJLEVBQUMsTUFBTTtJQUFDQyxPQUFPLGVBQUVyRiwwREFBQSxDQUFDeUQsNEVBQWM7TUFBQy9DLFNBQVMsRUFBRTBELE1BQU87TUFBQ3hELFFBQVEsRUFBRTRELGlCQUFrQjtNQUFDZSxXQUFXLEVBQUVkLG9CQUFxQjtNQUFDTyxNQUFNLEVBQUVGO0lBQWM7RUFBRyxFQUFFLENBQ3RKLGVBQ1I5RSwwREFBQSxDQUFDZ0Qsb0RBQUs7SUFBQ29DLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRXJGLDBEQUFBLENBQUN1RCwwREFBUTtNQUFFN0MsU0FBUyxFQUFFMEQsTUFBTztNQUFDekIsWUFBWSxFQUFFMEIsU0FBVTtNQUFDekQsUUFBUSxFQUFFNEQ7SUFBa0I7RUFBRyxFQUFFLENBQ3BILENBQ0gsQ0FDQTtBQUVyQixDQUFDO0FBR0RULElBQUksQ0FBQ3lCLE1BQU0sZUFDUHhGLDBEQUFBLENBQUNnRSxXQUFXLE9BQUUsQ0FDakI7Ozs7Ozs7O1VDdkRELHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9MYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy9MYXlvdXQvbGF5b3V0LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNZExvY2tPdXRsaW5lLCBNZFF1ZXN0aW9uTWFya30gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0JzQmFuaywgQnNGaWxsQ2FsY3VsYXRvckZpbGwsIEJzUG93ZXJ9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5cbmNvbnN0IEhlYWRlciA9ICh7dXNlckxvZ0luLCBsb2dPdXQsIHVzZXJEYXRhfSkgPT4ge1xuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifTtcblxuICAgICAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG5cbiAgICAgICAgY29uc3QgaGFuZGxlTG9nT3V0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgICAgICBmZXRjaChgJHtBUEl9L2RhdGEvJHt1c2VyRGF0YS5pZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IHtjb25zb2xlLmxvZyhkYXRhKTsgbG9nT3V0KGZhbHNlKX0pLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuXG4gICAgICAgIH1cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtcIm1haW5Db2xvciB0b3BCYXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJsb2dvQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJsb2dvLWVsMVwifT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImxvZ28tZWwyXCJ9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+PExpbmsgY2xhc3NOYW1lPXtcIm1haW5Mb2dvSG9tZUxpbmtcIn0gdG89Jy8nPk9kc2V0a29tYXQuY29tPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpY29uc0NvbnRhaW5lclwifT5cblxuICAgICAgICAgICAgICAgIHt1c2VyTG9nSW4gP1xuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2xvZ2luJyBjbGFzc05hbWU9e1wiaW5mb0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzRmlsbENhbGN1bGF0b3JGaWxsIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvaW5mbycgY2xhc3NOYW1lPXtcImluZm9JY29uTGlua1wifT5cbiAgICAgICAgICAgICAgICAgICAgPE1kUXVlc3Rpb25NYXJrIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17cHJvcHMudXNlckxvZ0luID8gJy91c2VyRGF0YScgOiAnL2xvZ2luJ30gY2xhc3NOYW1lPXtcImxvZ0ljb25MaW5rXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudXNlckxvZ0luID8gPEJzQmFuayBzdHlsZT17aWNvbnNTdHlsZX0vPiA6IDxNZExvY2tPdXRsaW5lIHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICB7dXNlckxvZ0luID9cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIGNsYXNzTmFtZT17XCJpbmZvSWNvbkxpbmtcIn0gb25DbGljaz17aGFuZGxlTG9nT3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc1Bvd2VyIHN0eWxlPXt7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBjb2xvcjogXCJ3aGl0ZVwifX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgdXNlckxvZ0luPXtwcm9wcy51c2VyTG9nSW59IGxvZ091dD17cHJvcHMuc2V0VXNlckxvZ0lufSB1c2VyRGF0YT17cHJvcHMudXNlckRhdGF9Lz5cbiAgICAgICAgICAgIDxPdXRsZXQvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTGluaywgTmF2TGluaywgT3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dC9sYXlvdXRcIjtcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL0hvbWUvd2VsY29tZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luL2xvZ2luXCI7XG5pbXBvcnQgTWFpbkFwcGxpY2F0aW9uIGZyb20gXCIuL01haW4vbWFpbkFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSBcIi4vSG9tZS9pbmZvcm1hdGlvblwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tIFwiLi9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uXCI7XG5pbXBvcnQgVXNlckRhdGEgZnJvbSBcIi4vdXNlckRhdGEvdXNlckRhdGFcIjtcbmltcG9ydCBDcmVkaXRDYWxjdWxhdG9yIGZyb20gXCIuL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yXCI7XG5pbXBvcnQgQm9uZENhbGN1bGF0b3IgZnJvbSBcIi4vTWFpbi9ib25kQ2FsY3VsYXRvci9ib25kQ2FsY3VsYXRvclwiO1xuaW1wb3J0IExvYW5DYWxjdWxhdG9yIGZyb20gXCIuL01haW4vbG9hbkNhbGN1bGF0b3IvbG9hbkNhbGN1bGF0b3JcIjtcbmltcG9ydCBEZXBvc2l0Q2FsY3VsYXRvciBmcm9tIFwiLi9NYWluL2RlcG9zaXRDYWxjdWxhdG9yL2RlcG9zaXRDYWxjdWxhdG9yXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IEFwcGxpY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJzQ2FsY3VsYXRpb25zLCBzZXRVc2Vyc0NhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qge2NyZWRpdHMsIGJvbmRzLCBkZXBvc2l0cywgbG9hbnN9ID0gdXNlcnNDYWxjdWxhdGlvbnM7XG5cbiAgICBjb25zdCBjcmVkaXRzRmlsdGVyID0gKGlkKSA9PiB7XG4gICAgICAgIGxldCBuZXdDcmVkaXRzQXJyID0gY3JlZGl0cy5maWx0ZXIoKGVsLCBpKSA9PiB7cmV0dXJuIGkgIT09IGlkfSlcbiAgICAgICAgc2V0VXNlcnNDYWxjdWxhdGlvbnMoey4uLnVzZXJzQ2FsY3VsYXRpb25zLCBjcmVkaXRzOiBuZXdDcmVkaXRzQXJyfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SGFzaFJvdXRlcj5cbiAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PExheW91dCB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0luPXtzZXRMb2dnZWR9IHVzZXJEYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30vPn0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScnIGVsZW1lbnQ9ezxXZWxjb21lIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdpbmZvJyBlbGVtZW50PXs8SW5mb3JtYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvZ2luJyBlbGVtZW50PXs8TG9naW4gdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSBkYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gY2hhbmdpbmdEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ncmVnaXN0cmF0aW9uJyBlbGVtZW50PXs8UmVnaXN0cmF0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nY2FsY3VsYXRvcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8Q3JlZGl0Q2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0gdXNlckRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBzZXRVc2VyRGF0YT17c2V0VXNlcnNDYWxjdWxhdGlvbnN9IGZpbHRlcj17Y3JlZGl0c0ZpbHRlcn0vPn0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9hbicgZWxlbWVudD17PExvYW5DYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9IHNldFVzZXJEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30gZmlsdGVyPXtjcmVkaXRzRmlsdGVyfS8+fS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdkZXBvc2l0JyBlbGVtZW50PXs8RGVwb3NpdENhbGN1bGF0b3IgdXNlckxvZ0luPXtsb2dnZWR9IHVzZXJEYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gc2V0VXNlckRhdGE9e3NldFVzZXJzQ2FsY3VsYXRpb25zfSBmaWx0ZXI9e2NyZWRpdHNGaWx0ZXJ9Lz59Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2JvbmQnIGVsZW1lbnQ9ezxCb25kQ2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0gdXNlckRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBzZXRVc2VyRGF0YT17c2V0VXNlcnNDYWxjdWxhdGlvbnN9IGZpbHRlcj17Y3JlZGl0c0ZpbHRlcn0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ndXNlckRhdGEnIGVsZW1lbnQ9ezxVc2VyRGF0YSAgdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9Lz59Lz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICApXG59XG5cblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcGxpY2F0aW9uLz5cbik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYTZiOTVmNTE5ODRlNWJmYjdlZDlcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWRMb2NrT3V0bGluZSIsIk1kUXVlc3Rpb25NYXJrIiwiTGluayIsIkJzQmFuayIsIkJzRmlsbENhbGN1bGF0b3JGaWxsIiwiQnNQb3dlciIsIkhlYWRlciIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJsb2dPdXQiLCJ1c2VyRGF0YSIsImljb25zU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwic3R5bGUiLCJwcm9wcyIsIm9uQ2xpY2siLCJoYW5kbGVMb2dPdXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJjb25jYXQiLCJpZCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVqZWN0IiwidXNlRWZmZWN0IiwiT3V0bGV0IiwiTGF5b3V0IiwiRnJhZ21lbnQiLCJzZXRVc2VyTG9nSW4iLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTmF2TGluayIsIldlbGNvbWUiLCJMb2dpbiIsIk1haW5BcHBsaWNhdGlvbiIsIkluZm9ybWF0aW9uIiwiUmVnaXN0cmF0aW9uIiwiVXNlckRhdGEiLCJDcmVkaXRDYWxjdWxhdG9yIiwiQm9uZENhbGN1bGF0b3IiLCJMb2FuQ2FsY3VsYXRvciIsIkRlcG9zaXRDYWxjdWxhdG9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHBsaWNhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxvZ2dlZCIsInNldExvZ2dlZCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidXNlcnNDYWxjdWxhdGlvbnMiLCJzZXRVc2Vyc0NhbGN1bGF0aW9ucyIsImNyZWRpdHMiLCJib25kcyIsImRlcG9zaXRzIiwibG9hbnMiLCJjcmVkaXRzRmlsdGVyIiwibmV3Q3JlZGl0c0FyciIsImZpbHRlciIsImVsIiwiaSIsIl9vYmplY3RTcHJlYWQiLCJwYXRoIiwiZWxlbWVudCIsImNoYW5naW5nRGF0YSIsInNldFVzZXJEYXRhIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==