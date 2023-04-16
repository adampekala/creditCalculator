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
/******/ 	__webpack_require__.h = function() { return "6f86c56fa5422b8718e8"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3VCLFFBQVEsRUFBRXBCO0lBQWtCO0VBQUcsRUFBRSxDQUNwSCxDQUNILENBQ0E7QUFFckIsQ0FBQztBQUdEVCxJQUFJLENBQUMrQixNQUFNLGVBQ1B4RCwwREFBQSxDQUFDMEIsV0FBVyxPQUFFLENBQ2pCOzs7Ozs7OztVQ3ZERCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCBMaW5rLCBOYXZMaW5rLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vSG9tZS93ZWxjb21lXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW4vbG9naW5cIjtcbmltcG9ydCBNYWluQXBwbGljYXRpb24gZnJvbSBcIi4vTWFpbi9tYWluQXBwbGljYXRpb25cIjtcbmltcG9ydCBJbmZvcm1hdGlvbiBmcm9tIFwiLi9Ib21lL2luZm9ybWF0aW9uXCI7XG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gXCIuL1JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb25cIjtcbmltcG9ydCBVc2VyRGF0YSBmcm9tIFwiLi91c2VyRGF0YS91c2VyRGF0YVwiO1xuaW1wb3J0IENyZWRpdENhbGN1bGF0b3IgZnJvbSBcIi4vTWFpbi9jcmVkaXRDYWxjdWxhdG9yL2NyZWRpdENhbGN1bGF0b3JcIjtcbmltcG9ydCBCb25kQ2FsY3VsYXRvciBmcm9tIFwiLi9NYWluL2JvbmRDYWxjdWxhdG9yL2JvbmRDYWxjdWxhdG9yXCI7XG5pbXBvcnQgTG9hbkNhbGN1bGF0b3IgZnJvbSBcIi4vTWFpbi9sb2FuQ2FsY3VsYXRvci9sb2FuQ2FsY3VsYXRvclwiO1xuaW1wb3J0IERlcG9zaXRDYWxjdWxhdG9yIGZyb20gXCIuL01haW4vZGVwb3NpdENhbGN1bGF0b3IvZGVwb3NpdENhbGN1bGF0b3JcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuY29uc3QgQXBwbGljYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlcnNDYWxjdWxhdGlvbnMsIHNldFVzZXJzQ2FsY3VsYXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7Y3JlZGl0cywgYm9uZHMsIGRlcG9zaXRzLCBsb2Fuc30gPSB1c2Vyc0NhbGN1bGF0aW9ucztcblxuICAgIGNvbnN0IGNyZWRpdHNGaWx0ZXIgPSAoaWQpID0+IHtcbiAgICAgICAgbGV0IG5ld0NyZWRpdHNBcnIgPSBjcmVkaXRzLmZpbHRlcigoZWwsIGkpID0+IHtyZXR1cm4gaSAhPT0gaWR9KVxuICAgICAgICBzZXRVc2Vyc0NhbGN1bGF0aW9ucyh7Li4udXNlcnNDYWxjdWxhdGlvbnMsIGNyZWRpdHM6IG5ld0NyZWRpdHNBcnJ9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScnIGVsZW1lbnQ9ezxXZWxjb21lIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdpbmZvJyBlbGVtZW50PXs8SW5mb3JtYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvZ2luJyBlbGVtZW50PXs8TG9naW4gdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSBkYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gY2hhbmdpbmdEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ncmVnaXN0cmF0aW9uJyBlbGVtZW50PXs8UmVnaXN0cmF0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nY2FsY3VsYXRvcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8Q3JlZGl0Q2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0gdXNlckRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBzZXRVc2VyRGF0YT17c2V0VXNlcnNDYWxjdWxhdGlvbnN9IGZpbHRlcj17Y3JlZGl0c0ZpbHRlcn0vPn0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9hbicgZWxlbWVudD17PExvYW5DYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9IHNldFVzZXJEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30gZmlsdGVyPXtjcmVkaXRzRmlsdGVyfS8+fS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdkZXBvc2l0JyBlbGVtZW50PXs8RGVwb3NpdENhbGN1bGF0b3IgdXNlckxvZ0luPXtsb2dnZWR9IHVzZXJEYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gc2V0VXNlckRhdGE9e3NldFVzZXJzQ2FsY3VsYXRpb25zfSBmaWx0ZXI9e2NyZWRpdHNGaWx0ZXJ9Lz59Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2JvbmQnIGVsZW1lbnQ9ezxCb25kQ2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0gdXNlckRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBzZXRVc2VyRGF0YT17c2V0VXNlcnNDYWxjdWxhdGlvbnN9IGZpbHRlcj17Y3JlZGl0c0ZpbHRlcn0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ndXNlckRhdGEnIGVsZW1lbnQ9ezxVc2VyRGF0YSAgdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9Lz59Lz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICApXG59XG5cblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcGxpY2F0aW9uLz5cbik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNmY4NmM1NmZhNTQyMmI4NzE4ZThcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiTGF5b3V0IiwiV2VsY29tZSIsIkxvZ2luIiwiTWFpbkFwcGxpY2F0aW9uIiwiSW5mb3JtYXRpb24iLCJSZWdpc3RyYXRpb24iLCJVc2VyRGF0YSIsIkNyZWRpdENhbGN1bGF0b3IiLCJCb25kQ2FsY3VsYXRvciIsIkxvYW5DYWxjdWxhdG9yIiwiRGVwb3NpdENhbGN1bGF0b3IiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcGxpY2F0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ1c2Vyc0NhbGN1bGF0aW9ucyIsInNldFVzZXJzQ2FsY3VsYXRpb25zIiwiY3JlZGl0cyIsImJvbmRzIiwiZGVwb3NpdHMiLCJsb2FucyIsImNyZWRpdHNGaWx0ZXIiLCJpZCIsIm5ld0NyZWRpdHNBcnIiLCJmaWx0ZXIiLCJlbCIsImkiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsInBhdGgiLCJlbGVtZW50IiwidXNlckxvZ0luIiwic2V0VXNlckxvZ0luIiwiZGF0YSIsImNoYW5naW5nRGF0YSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9