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
      userDataChart: _this.props.userData.credits[0]
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
/******/ 	__webpack_require__.h = function() { return "2d95ca876578d5d8e298"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQU0wQyxTQUFTLEVBQUU7TUFBbUMsR0FBQyxTQUFPLGVBQUExQywwREFBQSxZQUFLLE9BQUcsQ0FBTyxDQUFNLGVBQy9QQSwwREFBQTtRQUFLMEMsU0FBUyxFQUFFO01BQW9DLEVBQU8sQ0FFekQ7SUFFZDtFQUFDO0VBQUEsT0FBQW5DLFlBQUE7QUFBQSxFQWhDc0JOLDRDQUFTO0FBbUNwQywrREFBZU0sWUFBWTs7Ozs7Ozs7VUN6QzNCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9NYWluL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUJlZXIsIEZhQXJjaGl2ZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IE1kUGllQ2hhcnRPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCB7IEhpTWludXNTbSB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiXG5pbXBvcnQgU2lkZXJMaXN0SXRlbSBmcm9tIFwiLi9zaWRlckxpc3RJdGVtXCI7XG5cbmNsYXNzIFNpZGVySGlzdG9yeSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdXNlckRhdGFDaGFydDogdGhpcy5wcm9wcy51c2VyRGF0YS5jcmVkaXRzWzBdLFxuICAgIH07XG5cbiAgICBkYXRlQ29udmVyc2lvbiA9IChkKSA9PiB7XG4gICAgICAgIGxldCBkYXRlSW5wdXQ7XG4gICAgICAgIGRhdGVJbnB1dCA9IGQudG9TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgICAgICAgcmV0dXJuIGRhdGVJbnB1dDtcbiAgICB9XG5cbiAgICByYXRlQ29udmVyc2lvbiA9IChkKSA9PiB7XG4gICAgICAgIGxldCByYXRlSW5wdXQgPSArZCAqIDEwMDtcbiAgICAgICAgcmV0dXJuIGAke3JhdGVJbnB1dH0lYDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHt0eXBlLCB1c2VyRGF0YSwgc2V0VXNlckRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlclwifT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS10aXRsZSBtYWluQ29sb3JcIn0+VHdvamUgb2JsaWN6ZW5pYTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTmFtZSBjb250cmFzdENvbG9yXCJ9Pnt0eXBlfTwvcD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTGlzdFwifT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXJEYXRhLmNyZWRpdHMubWFwKChlbCwgaSkgPT4gPFNpZGVyTGlzdEl0ZW0ga2V5PXtpfSBkYXRhPXtlbH0vPil9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC10aXRsZSBtYWluQ29sb3JcIn0+e3RoaXMuZGF0ZUNvbnZlcnNpb24odGhpcy5zdGF0ZS51c2VyRGF0YUNoYXJ0LmRhdGUpfSB8IHt0aGlzLnJhdGVDb252ZXJzaW9uKHRoaXMuc3RhdGUudXNlckRhdGFDaGFydC5yYXRlKX08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jaGFydFwifT48c3BhbiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jcmVkaXRcIn0+S3JlZHl0PGJyLz42NSU8L3NwYW4+PGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jaGFydDJcIn0+PC9kaXY+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtaW50ZXJlc3RzXCJ9Pk9kc2V0a2k8YnIvPjM1JTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWJvdHRvbUxpbmVcIn0+PC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlckhpc3Rvcnk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjJkOTVjYTg3NjU3OGQ1ZDhlMjk4XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGYUJlZXIiLCJGYUFyY2hpdmUiLCJNZFBpZUNoYXJ0T3V0bGluZSIsIkhpTWludXNTbSIsIlNpZGVyTGlzdEl0ZW0iLCJTaWRlckhpc3RvcnkiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidXNlckRhdGFDaGFydCIsInByb3BzIiwidXNlckRhdGEiLCJjcmVkaXRzIiwiZGF0ZUNvbnZlcnNpb24iLCJkIiwiZGF0ZUlucHV0IiwidG9TdHJpbmciLCJzbGljZSIsInJhdGVDb252ZXJzaW9uIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyRwcm9wcyIsInR5cGUiLCJzZXRVc2VyRGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJlbCIsImkiLCJkYXRhIiwiZGF0ZSIsInJhdGUiXSwic291cmNlUm9vdCI6IiJ9