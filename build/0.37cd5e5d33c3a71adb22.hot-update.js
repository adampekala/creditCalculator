"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 57:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _siderListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      _this.props.btnMinusFn(id);
      var actualDataBase = _objectSpread({}, _this.props.userData);
      _this.props.setCreditInfo(actualDataBase);
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
/******/ 	__webpack_require__.h = function() { return "a06acb0851a7b5d279a6"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0RBQWE7VUFBQ29DLEdBQUcsRUFBRVcsQ0FBRTtVQUFDQyxJQUFJLEVBQUVGLEVBQUc7VUFBQ0csS0FBSyxFQUFFRixDQUFFO1VBQUNHLFNBQVMsRUFBRVgsTUFBSSxDQUFDaEI7UUFBWSxFQUFFO01BQUEsRUFBQyxDQUMxRyxlQUNMN0IsMERBQUE7UUFBR2tELFNBQVMsRUFBRTtNQUF5QyxHQUFFLElBQUksQ0FBQzNCLEtBQUssQ0FBQ0ssU0FBUyxLQUFLLE1BQU0sR0FBRyxJQUFJLENBQUNPLGNBQWMsQ0FBQyxJQUFJLENBQUNaLEtBQUssQ0FBQ0MsYUFBYSxDQUFDaUMsSUFBSSxDQUFDLEdBQUcsYUFBYSxFQUFFLEtBQUcsRUFBQyxJQUFJLENBQUNsQyxLQUFLLENBQUNLLFNBQVMsS0FBSyxNQUFNLEdBQUcsSUFBSSxDQUFDWSxjQUFjLENBQUMsSUFBSSxDQUFDakIsS0FBSyxDQUFDQyxhQUFhLENBQUNrQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUssZUFDcFExRCwwREFBQTtRQUFLa0QsU0FBUyxFQUFFO01BQStCLGdCQUFDbEQsMERBQUE7UUFBTWtELFNBQVMsRUFBRTtNQUFnQyxHQUFDLFFBQU0sZUFBQWxELDBEQUFBLFlBQUssT0FBRyxDQUFPLGVBQUFBLDBEQUFBO1FBQUtrRCxTQUFTLEVBQUU7TUFBZ0MsRUFBTyxlQUFBbEQsMERBQUE7UUFBTWtELFNBQVMsRUFBRTtNQUFtQyxHQUFDLFNBQU8sZUFBQWxELDBEQUFBLFlBQUssT0FBRyxDQUFPLENBQU0sZUFDL1BBLDBEQUFBO1FBQUtrRCxTQUFTLEVBQUU7TUFBb0MsRUFBTyxDQUV6RDtJQUVkO0VBQUM7RUFBQSxPQUFBM0MsWUFBQTtBQUFBLEVBeENzQk4sNENBQVM7QUEyQ3BDLCtEQUFlTSxZQUFZOzs7Ozs7OztVQ2pEM0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvc2lkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhQmVlciwgRmFBcmNoaXZlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgTWRQaWVDaGFydE91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgSGlNaW51c1NtIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCJcbmltcG9ydCBTaWRlckxpc3RJdGVtIGZyb20gXCIuL3NpZGVyTGlzdEl0ZW1cIjtcblxuY2xhc3MgU2lkZXJIaXN0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICB1c2VyRGF0YUNoYXJ0OiB0aGlzLnByb3BzLnVzZXJEYXRhLmNyZWRpdHMubGVuZ3RoID4gMCA/IHRoaXMucHJvcHMudXNlckRhdGEuY3JlZGl0c1swXTogXCJicmFrIGRhbnljaFwiLFxuICAgICAgICBpc0FueURhdGE6IHRoaXMucHJvcHMudXNlckRhdGEuY3JlZGl0cy5sZW5ndGggPiAwID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICB9O1xuXG4gICAgYnRuRGVsZXRlRm4gPSAoaWQpID0+IHtcbiAgICAgICAgLy9UT0RPXG4gICAgICAgIHRoaXMucHJvcHMuYnRuTWludXNGbihpZCk7XG4gICAgICAgIGxldCBhY3R1YWxEYXRhQmFzZSA9IHsuLi50aGlzLnByb3BzLnVzZXJEYXRhfVxuICAgICAgICB0aGlzLnByb3BzLnNldENyZWRpdEluZm8oYWN0dWFsRGF0YUJhc2UpO1xuICAgIH1cblxuICAgIGRhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IGRhdGVJbnB1dDtcbiAgICAgICAgZGF0ZUlucHV0ID0gZC50b1N0cmluZygpLnNsaWNlKDAsMTApO1xuICAgICAgICByZXR1cm4gZGF0ZUlucHV0O1xuICAgIH1cblxuICAgIHJhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IHJhdGVJbnB1dCA9ICtkICogMTAwO1xuICAgICAgICByZXR1cm4gYCR7cmF0ZUlucHV0fSVgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVyXCJ9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LXRpdGxlIG1haW5Db2xvclwifT5Ud29qZSBvYmxpY3plbmlhPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNOYW1lIGNvbnRyYXN0Q29sb3JcIn0+e3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckRhdGEuY3JlZGl0cy5tYXAoKGVsLCBpKSA9PiA8U2lkZXJMaXN0SXRlbSBrZXk9e2l9IGRhdGE9e2VsfSBpbmRleD17aX0gYnRuRGVsZXRlPXt0aGlzLmJ0bkRlbGV0ZUZufS8+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LXRpdGxlIG1haW5Db2xvclwifT57dGhpcy5zdGF0ZS5pc0FueURhdGEgPT09IFwidHJ1ZVwiID8gdGhpcy5kYXRlQ29udmVyc2lvbih0aGlzLnN0YXRlLnVzZXJEYXRhQ2hhcnQuZGF0ZSkgOiBcIkJyYWsgZGFueWNoXCIgfSB8IHt0aGlzLnN0YXRlLmlzQW55RGF0YSA9PT0gXCJ0cnVlXCIgPyB0aGlzLnJhdGVDb252ZXJzaW9uKHRoaXMuc3RhdGUudXNlckRhdGFDaGFydC5yYXRlKSA6IFwiLS0tXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnRcIn0+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY3JlZGl0XCJ9PktyZWR5dDxici8+NjUlPC9zcGFuPjxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnQyXCJ9PjwvZGl2PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWludGVyZXN0c1wifT5PZHNldGtpPGJyLz4zNSU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1ib3R0b21MaW5lXCJ9PjwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZXJIaXN0b3J5OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhMDZhY2IwODUxYTdiNWQyNzlhNlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRmFCZWVyIiwiRmFBcmNoaXZlIiwiTWRQaWVDaGFydE91dGxpbmUiLCJIaU1pbnVzU20iLCJTaWRlckxpc3RJdGVtIiwiU2lkZXJIaXN0b3J5IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInVzZXJEYXRhQ2hhcnQiLCJwcm9wcyIsInVzZXJEYXRhIiwiY3JlZGl0cyIsImlzQW55RGF0YSIsImJ0bkRlbGV0ZUZuIiwiaWQiLCJidG5NaW51c0ZuIiwiYWN0dWFsRGF0YUJhc2UiLCJfb2JqZWN0U3ByZWFkIiwic2V0Q3JlZGl0SW5mbyIsImRhdGVDb252ZXJzaW9uIiwiZCIsImRhdGVJbnB1dCIsInRvU3RyaW5nIiwic2xpY2UiLCJyYXRlQ29udmVyc2lvbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJ0eXBlIiwic2V0VXNlckRhdGEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwiZWwiLCJpIiwiZGF0YSIsImluZGV4IiwiYnRuRGVsZXRlIiwiZGF0ZSIsInJhdGUiXSwic291cmNlUm9vdCI6IiJ9