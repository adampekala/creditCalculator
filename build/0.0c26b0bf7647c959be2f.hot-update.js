self["webpackHotUpdatewebpack"](0,{

/***/ 50:
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/adam/CodersLab/creditCalculator/js/Login/login.js: Unexpected token, expected \",\" (48:113)\n\n\u001b[0m \u001b[90m 46 |\u001b[39m     \u001b[36mconst\u001b[39m handleClick \u001b[33m=\u001b[39m (e) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 47 |\u001b[39m         e\u001b[33m.\u001b[39mpreventDefault()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 48 |\u001b[39m         fetch(\u001b[32m`${API}/users/${login}`\u001b[39m)\u001b[33m.\u001b[39mthen(resp \u001b[33m=>\u001b[39m resp\u001b[33m.\u001b[39mjson())\u001b[33m.\u001b[39mthen(data \u001b[33m=>\u001b[39m data\u001b[33m.\u001b[39mpassword \u001b[33m===\u001b[39m password \u001b[33m?\u001b[39m {props\u001b[33m.\u001b[39msetUserLogIn(\u001b[36mtrue\u001b[39m) }\u001b[33m:\u001b[39m props\u001b[33m.\u001b[39msetUserLogIn(\u001b[36mfalse\u001b[39m))\u001b[33m.\u001b[39m\u001b[36mcatch\u001b[39m(reject \u001b[33m=>\u001b[39m console\u001b[33m.\u001b[39mlog(reject))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 50 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 51 |\u001b[39m\u001b[0m\n    at instantiate (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.unexpected (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:3291:16)\n    at JSXParserMixin.expect (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:3633:28)\n    at JSXParserMixin.parseObjectLike (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:11637:14)\n    at JSXParserMixin.parseExprAtom (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:11157:23)\n    at JSXParserMixin.parseExprAtom (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:6998:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:10870:23)\n    at JSXParserMixin.parseUpdate (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:10853:21)");

/***/ }),

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Login_login__WEBPACK_IMPORTED_MODULE_4__);
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
      setUserLogIi: setLogged
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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Login_login__WEBPACK_IMPORTED_MODULE_4___default()), {
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
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__["default"], {
      userLogIn: logged
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
/******/ 	__webpack_require__.h = function() { return "d9da3f9e6cf01c57212f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQSxDQUFDbUIsNEVBQWM7TUFBQ29CLFNBQVMsRUFBRVQ7SUFBTztFQUFHLEVBQUUsQ0FDL0QsZUFDUjlCLDBEQUFBLENBQUNPLG9EQUFLO0lBQUM4QixJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUV0QywwREFBQSxDQUFDaUIsMERBQVE7TUFBRXNCLFNBQVMsRUFBRVQsTUFBTztNQUFDVyxZQUFZLEVBQUVWLFNBQVU7TUFBQ2EsUUFBUSxFQUFFVjtJQUFrQjtFQUFHLEVBQUUsQ0FDcEgsQ0FDSCxDQUNBO0FBRXJCLENBQUM7QUFHRFQsSUFBSSxDQUFDb0IsTUFBTSxlQUNQN0MsMERBQUEsQ0FBQzBCLFdBQVcsT0FBRSxDQUNqQjs7Ozs7Ozs7VUM5Q0QscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGVzLCBSb3V0ZSwgTGluaywgTmF2TGluaywgT3V0bGV0fSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dC9sYXlvdXRcIjtcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL0hvbWUvd2VsY29tZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luL2xvZ2luXCI7XG5pbXBvcnQgTWFpbkFwcGxpY2F0aW9uIGZyb20gXCIuL01haW4vbWFpbkFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgSW5mb3JtYXRpb24gZnJvbSBcIi4vSG9tZS9pbmZvcm1hdGlvblwiO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbiBmcm9tIFwiLi9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uXCI7XG5pbXBvcnQgVXNlckRhdGEgZnJvbSBcIi4vdXNlckRhdGEvdXNlckRhdGFcIjtcbmltcG9ydCBDcmVkaXRDYWxjdWxhdG9yIGZyb20gXCIuL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yXCI7XG5pbXBvcnQgQm9uZENhbGN1bGF0b3IgZnJvbSBcIi4vTWFpbi9ib25kQ2FsY3VsYXRvci9ib25kQ2FsY3VsYXRvclwiO1xuaW1wb3J0IExvYW5DYWxjdWxhdG9yIGZyb20gXCIuL01haW4vbG9hbkNhbGN1bGF0b3IvbG9hbkNhbGN1bGF0b3JcIjtcbmltcG9ydCBEZXBvc2l0Q2FsY3VsYXRvciBmcm9tIFwiLi9NYWluL2RlcG9zaXRDYWxjdWxhdG9yL2RlcG9zaXRDYWxjdWxhdG9yXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbmNvbnN0IEFwcGxpY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJzQ2FsY3VsYXRpb25zLCBzZXRVc2Vyc0NhbGN1bGF0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TGF5b3V0IHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSWk9e3NldExvZ2dlZH0vPn0+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScnIGVsZW1lbnQ9ezxXZWxjb21lIHVzZXJMb2dJbj17bG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdpbmZvJyBlbGVtZW50PXs8SW5mb3JtYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvZ2luJyBlbGVtZW50PXs8TG9naW4gdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSBkYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gY2hhbmdpbmdEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ncmVnaXN0cmF0aW9uJyBlbGVtZW50PXs8UmVnaXN0cmF0aW9uIHVzZXJMb2dJbj17bG9nZ2VkfSBzZXRVc2VyTG9nSW49e3NldExvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nY2FsY3VsYXRvcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nJyBlbGVtZW50PXs8Q3JlZGl0Q2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvYW4nIGVsZW1lbnQ9ezxMb2FuQ2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2RlcG9zaXQnIGVsZW1lbnQ9ezxEZXBvc2l0Q2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2JvbmQnIGVsZW1lbnQ9ezxCb25kQ2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0ndXNlckRhdGEnIGVsZW1lbnQ9ezxVc2VyRGF0YSAgdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9Lz59Lz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgPC9Sb3V0ZXM+XG4gICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICApXG59XG5cblxucm9vdC5yZW5kZXIoXG4gICAgPEFwcGxpY2F0aW9uLz5cbik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZDlkYTNmOWU2Y2YwMWM1NzIxMmZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiTGF5b3V0IiwiV2VsY29tZSIsIkxvZ2luIiwiTWFpbkFwcGxpY2F0aW9uIiwiSW5mb3JtYXRpb24iLCJSZWdpc3RyYXRpb24iLCJVc2VyRGF0YSIsIkNyZWRpdENhbGN1bGF0b3IiLCJCb25kQ2FsY3VsYXRvciIsIkxvYW5DYWxjdWxhdG9yIiwiRGVwb3NpdENhbGN1bGF0b3IiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsIkFwcGxpY2F0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibG9nZ2VkIiwic2V0TG9nZ2VkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ1c2Vyc0NhbGN1bGF0aW9ucyIsInNldFVzZXJzQ2FsY3VsYXRpb25zIiwiY3JlYXRlRWxlbWVudCIsInBhdGgiLCJlbGVtZW50IiwidXNlckxvZ0luIiwic2V0VXNlckxvZ0lpIiwic2V0VXNlckxvZ0luIiwiZGF0YSIsImNoYW5naW5nRGF0YSIsInVzZXJEYXRhIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==