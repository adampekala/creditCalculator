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
      var actualDataBase;
      var mypromis = new Promise(function (response, reject) {
        _this.props.btnMinusFn(id);
        response("ok");
        reject("error");
      });
      mypromis.then(function (res) {
        actualDataBase = _objectSpread({}, _this.props.userData);
        _this.props.setCreditInfo(actualDataBase);
        console.log(res);
      })["catch"](function (rej) {
        return console.log(rej);
      });
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
/******/ 	__webpack_require__.h = function() { return "81e3524942982b4b5244"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQUEzRCwwREFBQTtRQUFNMkQsU0FBUyxFQUFFO01BQW1DLEdBQUMsU0FBTyxlQUFBM0QsMERBQUEsWUFBSyxPQUFHLENBQU8sQ0FBTSxlQUMvUEEsMERBQUE7UUFBSzJELFNBQVMsRUFBRTtNQUFvQyxFQUFPLENBRXpEO0lBRWQ7RUFBQztFQUFBLE9BQUFwRCxZQUFBO0FBQUEsRUFwRHNCTiw0Q0FBUztBQXVEcEMsK0RBQWVNLFlBQVk7Ozs7Ozs7O1VDN0QzQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFCZWVyLCBGYUFyY2hpdmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBNZFBpZUNoYXJ0T3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5pbXBvcnQgeyBIaU1pbnVzU20gfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIlxuaW1wb3J0IFNpZGVyTGlzdEl0ZW0gZnJvbSBcIi4vc2lkZXJMaXN0SXRlbVwiO1xuXG5jbGFzcyBTaWRlckhpc3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHVzZXJEYXRhQ2hhcnQ6IHRoaXMucHJvcHMudXNlckRhdGEuY3JlZGl0cy5sZW5ndGggPiAwID8gdGhpcy5wcm9wcy51c2VyRGF0YS5jcmVkaXRzWzBdOiBcImJyYWsgZGFueWNoXCIsXG4gICAgICAgIGlzQW55RGF0YTogdGhpcy5wcm9wcy51c2VyRGF0YS5jcmVkaXRzLmxlbmd0aCA+IDAgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgIH07XG5cbiAgICBidG5EZWxldGVGbiA9IChpZCkgPT4ge1xuICAgICAgICAvL1RPRE9cbiAgICAgICAgbGV0IGFjdHVhbERhdGFCYXNlO1xuICAgICAgICBjb25zdCBteXByb21pcyA9IG5ldyBQcm9taXNlKChyZXNwb25zZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmJ0bk1pbnVzRm4oaWQpO1xuICAgICAgICAgICAgcmVzcG9uc2UoXCJva1wiKTtcbiAgICAgICAgICAgIHJlamVjdChcImVycm9yXCIpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbXlwcm9taXMudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBhY3R1YWxEYXRhQmFzZSA9IHsuLi50aGlzLnByb3BzLnVzZXJEYXRhfTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Q3JlZGl0SW5mbyhhY3R1YWxEYXRhQmFzZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KS5jYXRjaCgocmVqKSA9PiBjb25zb2xlLmxvZyhyZWopKVxuXG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgZGF0ZUNvbnZlcnNpb24gPSAoZCkgPT4ge1xuICAgICAgICBsZXQgZGF0ZUlucHV0O1xuICAgICAgICBkYXRlSW5wdXQgPSBkLnRvU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICAgICAgIHJldHVybiBkYXRlSW5wdXQ7XG4gICAgfVxuXG4gICAgcmF0ZUNvbnZlcnNpb24gPSAoZCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZUlucHV0ID0gK2QgKiAxMDA7XG4gICAgICAgIHJldHVybiBgJHtyYXRlSW5wdXR9JWA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dHlwZSwgdXNlckRhdGEsIHNldFVzZXJEYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJcIn0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktdGl0bGUgbWFpbkNvbG9yXCJ9PlR3b2plIG9ibGljemVuaWE8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY05hbWUgY29udHJhc3RDb2xvclwifT57dHlwZX08L3A+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0xpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRGF0YS5jcmVkaXRzLm1hcCgoZWwsIGkpID0+IDxTaWRlckxpc3RJdGVtIGtleT17aX0gZGF0YT17ZWx9IGluZGV4PXtpfSBidG5EZWxldGU9e3RoaXMuYnRuRGVsZXRlRm59Lz4pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtdGl0bGUgbWFpbkNvbG9yXCJ9Pnt0aGlzLnN0YXRlLmlzQW55RGF0YSA9PT0gXCJ0cnVlXCIgPyB0aGlzLmRhdGVDb252ZXJzaW9uKHRoaXMuc3RhdGUudXNlckRhdGFDaGFydC5kYXRlKSA6IFwiQnJhayBkYW55Y2hcIiB9IHwge3RoaXMuc3RhdGUuaXNBbnlEYXRhID09PSBcInRydWVcIiA/IHRoaXMucmF0ZUNvbnZlcnNpb24odGhpcy5zdGF0ZS51c2VyRGF0YUNoYXJ0LnJhdGUpIDogXCItLS1cIn08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jaGFydFwifT48c3BhbiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jcmVkaXRcIn0+S3JlZHl0PGJyLz42NSU8L3NwYW4+PGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jaGFydDJcIn0+PC9kaXY+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtaW50ZXJlc3RzXCJ9Pk9kc2V0a2k8YnIvPjM1JTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWJvdHRvbUxpbmVcIn0+PC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlckhpc3Rvcnk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjgxZTM1MjQ5NDI5ODJiNGI1MjQ0XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGYUJlZXIiLCJGYUFyY2hpdmUiLCJNZFBpZUNoYXJ0T3V0bGluZSIsIkhpTWludXNTbSIsIlNpZGVyTGlzdEl0ZW0iLCJTaWRlckhpc3RvcnkiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidXNlckRhdGFDaGFydCIsInByb3BzIiwidXNlckRhdGEiLCJjcmVkaXRzIiwiaXNBbnlEYXRhIiwiYnRuRGVsZXRlRm4iLCJpZCIsImFjdHVhbERhdGFCYXNlIiwibXlwcm9taXMiLCJQcm9taXNlIiwicmVzcG9uc2UiLCJyZWplY3QiLCJidG5NaW51c0ZuIiwidGhlbiIsInJlcyIsIl9vYmplY3RTcHJlYWQiLCJzZXRDcmVkaXRJbmZvIiwiY29uc29sZSIsImxvZyIsInJlaiIsImRhdGVDb252ZXJzaW9uIiwiZCIsImRhdGVJbnB1dCIsInRvU3RyaW5nIiwic2xpY2UiLCJyYXRlQ29udmVyc2lvbiIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMyIiwiX3RoaXMkcHJvcHMiLCJ0eXBlIiwic2V0VXNlckRhdGEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwiZWwiLCJpIiwiZGF0YSIsImluZGV4IiwiYnRuRGVsZXRlIiwiZGF0ZSIsInJhdGUiXSwic291cmNlUm9vdCI6IiJ9