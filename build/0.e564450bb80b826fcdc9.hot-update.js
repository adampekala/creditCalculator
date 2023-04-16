"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 57:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _siderListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SiderHistory = /*#__PURE__*/function (_Component) {
  _inherits(SiderHistory, _Component);
  var _super = _createSuper(SiderHistory);
  function SiderHistory() {
    var _this;
    _classCallCheck(this, SiderHistory);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      userDataChart: _this.props.userData.credits[0].date
    };
    _this.dateConversion = function (d) {
      var dateInput = d.toString().slice(0, 10);
      return dateInput;
    };
    _this.rateConversion = function (d) {
      return "".concat(+d * 100, "%");
    };
    return _this;
  }
  _createClass(SiderHistory, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        type = _this$props.type,
        userData = _this$props.userData,
        setUserData = _this$props.setUserData;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sider"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "siderHistory-title mainColor"
      }, "Twoje obliczenia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "siderHistory-calcName contrastColor"
      }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "siderHistory-calcList"
      }, userData.credits.map(function (el, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_siderListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: i,
          data: el
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "siderHistory-calcChart-title mainColor"
      }, this.state.userDataChart, " | ", ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "siderHistory-calcChart-chart"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "siderHistory-calcChart-credit"
      }, "Kredyt", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "65%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "siderHistory-calcChart-chart2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "siderHistory-calcChart-interests"
      }, "Odsetki", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "35%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "siderHistory-calcChart-bottomLine"
      }));
    }
  }]);
  return SiderHistory;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__["default"] = (SiderHistory);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bd4b1ce57c382e0cba35"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFTLEVBQUU7TUFBb0MsRUFBTyxDQUV6RDtJQUVkO0VBQUM7RUFBQSxPQUFBcEMsWUFBQTtBQUFBLEVBaENzQk4sNENBQVM7QUFtQ3BDLCtEQUFlTSxZQUFZOzs7Ozs7OztVQ3pDM0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvc2lkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhQmVlciwgRmFBcmNoaXZlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgTWRQaWVDaGFydE91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgSGlNaW51c1NtIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCJcbmltcG9ydCBTaWRlckxpc3RJdGVtIGZyb20gXCIuL3NpZGVyTGlzdEl0ZW1cIjtcblxuY2xhc3MgU2lkZXJIaXN0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICB1c2VyRGF0YUNoYXJ0OiB0aGlzLnByb3BzLnVzZXJEYXRhLmNyZWRpdHNbMF0uZGF0ZSxcbiAgICB9O1xuXG4gICAgZGF0ZUNvbnZlcnNpb24gPSAoZCkgPT4ge1xuICAgICAgICBsZXQgZGF0ZUlucHV0O1xuICAgICAgICBkYXRlSW5wdXQgPSBkLnRvU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICAgICAgIHJldHVybiBkYXRlSW5wdXQ7XG4gICAgfVxuXG4gICAgcmF0ZUNvbnZlcnNpb24gPSAoZCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZUlucHV0ID0gK2QgKiAxMDA7XG4gICAgICAgIHJldHVybiBgJHtyYXRlSW5wdXR9JWA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dHlwZSwgdXNlckRhdGEsIHNldFVzZXJEYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJcIn0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktdGl0bGUgbWFpbkNvbG9yXCJ9PlR3b2plIG9ibGljemVuaWE8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY05hbWUgY29udHJhc3RDb2xvclwifT57dHlwZX08L3A+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0xpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRGF0YS5jcmVkaXRzLm1hcCgoZWwsIGkpID0+IDxTaWRlckxpc3RJdGVtIGtleT17aX0gZGF0YT17ZWx9Lz4pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtdGl0bGUgbWFpbkNvbG9yXCJ9Pnt0aGlzLnN0YXRlLnVzZXJEYXRhQ2hhcnR9IHwge1wiXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnRcIn0+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY3JlZGl0XCJ9PktyZWR5dDxici8+NjUlPC9zcGFuPjxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnQyXCJ9PjwvZGl2PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWludGVyZXN0c1wifT5PZHNldGtpPGJyLz4zNSU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1ib3R0b21MaW5lXCJ9PjwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZXJIaXN0b3J5OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiZDRiMWNlNTdjMzgyZTBjYmEzNVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRmFCZWVyIiwiRmFBcmNoaXZlIiwiTWRQaWVDaGFydE91dGxpbmUiLCJIaU1pbnVzU20iLCJTaWRlckxpc3RJdGVtIiwiU2lkZXJIaXN0b3J5IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInVzZXJEYXRhQ2hhcnQiLCJwcm9wcyIsInVzZXJEYXRhIiwiY3JlZGl0cyIsImRhdGUiLCJkYXRlQ29udmVyc2lvbiIsImQiLCJkYXRlSW5wdXQiLCJ0b1N0cmluZyIsInNsaWNlIiwicmF0ZUNvbnZlcnNpb24iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzJHByb3BzIiwidHlwZSIsInNldFVzZXJEYXRhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsImVsIiwiaSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9