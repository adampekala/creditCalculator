"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 57:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _siderListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
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
      userDataChart: _this.props.userData.credits.length > 0 ? _this.props.userData.credits[1] : "brak danych"
    };
    _this.btnDeleteFn = function (id) {
      _this.props.btnMinusFn(id);
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
      var _this2 = this;
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
          data: el,
          index: i,
          btnDelete: _this2.btnDeleteFn
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "siderHistory-calcChart-title mainColor"
      }, this.dateConversion(this.state.userDataChart.date), " | ", this.rateConversion(this.state.userDataChart.rate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = function() { return "563976953d19be8ddeac"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLEVBQUMsS0FBRyxFQUFDLElBQUksQ0FBQ2pCLGNBQWMsQ0FBQyxJQUFJLENBQUNiLEtBQUssQ0FBQ0MsYUFBYSxDQUFDOEIsSUFBSSxDQUFDLENBQUssZUFDdkt0RCwwREFBQTtRQUFLOEMsU0FBUyxFQUFFO01BQStCLGdCQUFDOUMsMERBQUE7UUFBTThDLFNBQVMsRUFBRTtNQUFnQyxHQUFDLFFBQU0sZUFBQTlDLDBEQUFBLFlBQUssT0FBRyxDQUFPLGVBQUFBLDBEQUFBO1FBQUs4QyxTQUFTLEVBQUU7TUFBZ0MsRUFBTyxlQUFBOUMsMERBQUE7UUFBTThDLFNBQVMsRUFBRTtNQUFtQyxHQUFDLFNBQU8sZUFBQTlDLDBEQUFBLFlBQUssT0FBRyxDQUFPLENBQU0sZUFDL1BBLDBEQUFBO1FBQUs4QyxTQUFTLEVBQUU7TUFBb0MsRUFBTyxDQUV6RDtJQUVkO0VBQUM7RUFBQSxPQUFBdkMsWUFBQTtBQUFBLEVBcENzQk4sNENBQVM7QUF1Q3BDLCtEQUFlTSxZQUFZOzs7Ozs7OztVQzdDM0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvc2lkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhQmVlciwgRmFBcmNoaXZlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgTWRQaWVDaGFydE91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgSGlNaW51c1NtIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCJcbmltcG9ydCBTaWRlckxpc3RJdGVtIGZyb20gXCIuL3NpZGVyTGlzdEl0ZW1cIjtcblxuY2xhc3MgU2lkZXJIaXN0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICB1c2VyRGF0YUNoYXJ0OiB0aGlzLnByb3BzLnVzZXJEYXRhLmNyZWRpdHMubGVuZ3RoID4gMCA/IHRoaXMucHJvcHMudXNlckRhdGEuY3JlZGl0c1sxXTogXCJicmFrIGRhbnljaFwiLFxuICAgIH07XG5cbiAgICBidG5EZWxldGVGbiA9IChpZCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmJ0bk1pbnVzRm4oaWQpO1xuICAgIH1cblxuICAgIGRhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IGRhdGVJbnB1dDtcbiAgICAgICAgZGF0ZUlucHV0ID0gZC50b1N0cmluZygpLnNsaWNlKDAsMTApO1xuICAgICAgICByZXR1cm4gZGF0ZUlucHV0O1xuICAgIH1cblxuICAgIHJhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IHJhdGVJbnB1dCA9ICtkICogMTAwO1xuICAgICAgICByZXR1cm4gYCR7cmF0ZUlucHV0fSVgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVyXCJ9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LXRpdGxlIG1haW5Db2xvclwifT5Ud29qZSBvYmxpY3plbmlhPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNOYW1lIGNvbnRyYXN0Q29sb3JcIn0+e3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckRhdGEuY3JlZGl0cy5tYXAoKGVsLCBpKSA9PiA8U2lkZXJMaXN0SXRlbSBrZXk9e2l9IGRhdGE9e2VsfSBpbmRleD17aX0gYnRuRGVsZXRlPXt0aGlzLmJ0bkRlbGV0ZUZufS8+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LXRpdGxlIG1haW5Db2xvclwifT57dGhpcy5kYXRlQ29udmVyc2lvbih0aGlzLnN0YXRlLnVzZXJEYXRhQ2hhcnQuZGF0ZSl9IHwge3RoaXMucmF0ZUNvbnZlcnNpb24odGhpcy5zdGF0ZS51c2VyRGF0YUNoYXJ0LnJhdGUpfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNoYXJ0XCJ9PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNyZWRpdFwifT5LcmVkeXQ8YnIvPjY1JTwvc3Bhbj48ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNoYXJ0MlwifT48L2Rpdj48c3BhbiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1pbnRlcmVzdHNcIn0+T2RzZXRraTxici8+MzUlPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtYm90dG9tTGluZVwifT48L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVySGlzdG9yeTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNTYzOTc2OTUzZDE5YmU4ZGRlYWNcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZhQmVlciIsIkZhQXJjaGl2ZSIsIk1kUGllQ2hhcnRPdXRsaW5lIiwiSGlNaW51c1NtIiwiU2lkZXJMaXN0SXRlbSIsIlNpZGVySGlzdG9yeSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJ1c2VyRGF0YUNoYXJ0IiwicHJvcHMiLCJ1c2VyRGF0YSIsImNyZWRpdHMiLCJidG5EZWxldGVGbiIsImlkIiwiYnRuTWludXNGbiIsImRhdGVDb252ZXJzaW9uIiwiZCIsImRhdGVJbnB1dCIsInRvU3RyaW5nIiwic2xpY2UiLCJyYXRlQ29udmVyc2lvbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJ0eXBlIiwic2V0VXNlckRhdGEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwiZWwiLCJpIiwiZGF0YSIsImluZGV4IiwiYnRuRGVsZXRlIiwiZGF0ZSIsInJhdGUiXSwic291cmNlUm9vdCI6IiJ9