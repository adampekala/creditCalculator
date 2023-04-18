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
      userDataChart: _this.props.userData.credits.length > 0 ? _this.props.userData.credits[0] : "brak danych",
      isAnyData: _this.props.userData.credits.length > 0 ? "true" : "false"
    };
    _this.btnDeleteFn = function (id) {
      //TODO
      _this.props.setCreditInfo(_this.props.userData);
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
      }, this.state.isAnyData === "true" ? this.dateConversion(this.state.userDataChart.date) : "Brak danych", " | ", this.state.isAnyData === "true" ? this.rateConversion(this.state.userDataChart.rate) : "---"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = function() { return "1391e3883c5c45bcfefe"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO1VBQUNHLEtBQUssRUFBRUYsQ0FBRTtVQUFDRyxTQUFTLEVBQUVYLE1BQUksQ0FBQ2Q7UUFBWSxFQUFFO01BQUEsRUFBQyxDQUMxRyxlQUNMN0IsMERBQUE7UUFBR2dELFNBQVMsRUFBRTtNQUF5QyxHQUFFLElBQUksQ0FBQ3pCLEtBQUssQ0FBQ0ssU0FBUyxLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUNLLGNBQWMsQ0FBQyxJQUFJLENBQUNWLEtBQUssQ0FBQ0MsYUFBYSxDQUFDK0IsSUFBSSxDQUFDLEdBQUcsYUFBYSxFQUFFLEtBQUcsRUFBQyxJQUFJLENBQUNoQyxLQUFLLENBQUNLLFNBQVMsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDVSxjQUFjLENBQUMsSUFBSSxDQUFDZixLQUFLLENBQUNDLGFBQWEsQ0FBQ2dDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBSyxlQUNwUXhELDBEQUFBO1FBQUtnRCxTQUFTLEVBQUU7TUFBK0IsZ0JBQUNoRCwwREFBQTtRQUFNZ0QsU0FBUyxFQUFFO01BQWdDLEdBQUMsUUFBTSxlQUFBaEQsMERBQUEsWUFBSyxPQUFHLENBQU8sZUFBQUEsMERBQUE7UUFBS2dELFNBQVMsRUFBRTtNQUFnQyxFQUFPLGVBQUFoRCwwREFBQTtRQUFNZ0QsU0FBUyxFQUFFO01BQW1DLEdBQUMsU0FBTyxlQUFBaEQsMERBQUEsWUFBSyxPQUFHLENBQU8sQ0FBTSxlQUMvUEEsMERBQUE7UUFBS2dELFNBQVMsRUFBRTtNQUFvQyxFQUFPLENBRXpEO0lBRWQ7RUFBQztFQUFBLE9BQUF6QyxZQUFBO0FBQUEsRUF2Q3NCTiw0Q0FBUztBQTBDcEMsK0RBQWVNLFlBQVk7Ozs7Ozs7O1VDaEQzQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFCZWVyLCBGYUFyY2hpdmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBNZFBpZUNoYXJ0T3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5pbXBvcnQgeyBIaU1pbnVzU20gfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIlxuaW1wb3J0IFNpZGVyTGlzdEl0ZW0gZnJvbSBcIi4vc2lkZXJMaXN0SXRlbVwiO1xuXG5jbGFzcyBTaWRlckhpc3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHVzZXJEYXRhQ2hhcnQ6IHRoaXMucHJvcHMudXNlckRhdGEuY3JlZGl0cy5sZW5ndGggPiAwID8gdGhpcy5wcm9wcy51c2VyRGF0YS5jcmVkaXRzWzBdOiBcImJyYWsgZGFueWNoXCIsXG4gICAgICAgIGlzQW55RGF0YTogdGhpcy5wcm9wcy51c2VyRGF0YS5jcmVkaXRzLmxlbmd0aCA+IDAgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgIH07XG5cbiAgICBidG5EZWxldGVGbiA9IChpZCkgPT4ge1xuICAgICAgICAvL1RPRE9cbiAgICAgICAgdGhpcy5wcm9wcy5zZXRDcmVkaXRJbmZvKHRoaXMucHJvcHMudXNlckRhdGEpO1xuICAgICAgICB0aGlzLnByb3BzLmJ0bk1pbnVzRm4oaWQpO1xuICAgIH1cblxuICAgIGRhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IGRhdGVJbnB1dDtcbiAgICAgICAgZGF0ZUlucHV0ID0gZC50b1N0cmluZygpLnNsaWNlKDAsMTApO1xuICAgICAgICByZXR1cm4gZGF0ZUlucHV0O1xuICAgIH1cblxuICAgIHJhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IHJhdGVJbnB1dCA9ICtkICogMTAwO1xuICAgICAgICByZXR1cm4gYCR7cmF0ZUlucHV0fSVgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVyXCJ9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LXRpdGxlIG1haW5Db2xvclwifT5Ud29qZSBvYmxpY3plbmlhPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNOYW1lIGNvbnRyYXN0Q29sb3JcIn0+e3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckRhdGEuY3JlZGl0cy5tYXAoKGVsLCBpKSA9PiA8U2lkZXJMaXN0SXRlbSBrZXk9e2l9IGRhdGE9e2VsfSBpbmRleD17aX0gYnRuRGVsZXRlPXt0aGlzLmJ0bkRlbGV0ZUZufS8+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LXRpdGxlIG1haW5Db2xvclwifT57dGhpcy5zdGF0ZS5pc0FueURhdGEgPT09IFwidHJ1ZVwiID8gdGhpcy5kYXRlQ29udmVyc2lvbih0aGlzLnN0YXRlLnVzZXJEYXRhQ2hhcnQuZGF0ZSkgOiBcIkJyYWsgZGFueWNoXCIgfSB8IHt0aGlzLnN0YXRlLmlzQW55RGF0YSA9PT0gXCJ0cnVlXCIgPyB0aGlzLnJhdGVDb252ZXJzaW9uKHRoaXMuc3RhdGUudXNlckRhdGFDaGFydC5yYXRlKSA6IFwiLS0tXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnRcIn0+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY3JlZGl0XCJ9PktyZWR5dDxici8+NjUlPC9zcGFuPjxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnQyXCJ9PjwvZGl2PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWludGVyZXN0c1wifT5PZHNldGtpPGJyLz4zNSU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1ib3R0b21MaW5lXCJ9PjwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZXJIaXN0b3J5OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxMzkxZTM4ODNjNWM0NWJjZmVmZVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRmFCZWVyIiwiRmFBcmNoaXZlIiwiTWRQaWVDaGFydE91dGxpbmUiLCJIaU1pbnVzU20iLCJTaWRlckxpc3RJdGVtIiwiU2lkZXJIaXN0b3J5IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInVzZXJEYXRhQ2hhcnQiLCJwcm9wcyIsInVzZXJEYXRhIiwiY3JlZGl0cyIsImlzQW55RGF0YSIsImJ0bkRlbGV0ZUZuIiwiaWQiLCJzZXRDcmVkaXRJbmZvIiwiYnRuTWludXNGbiIsImRhdGVDb252ZXJzaW9uIiwiZCIsImRhdGVJbnB1dCIsInRvU3RyaW5nIiwic2xpY2UiLCJyYXRlQ29udmVyc2lvbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJ0eXBlIiwic2V0VXNlckRhdGEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwiZWwiLCJpIiwiZGF0YSIsImluZGV4IiwiYnRuRGVsZXRlIiwiZGF0ZSIsInJhdGUiXSwic291cmNlUm9vdCI6IiJ9