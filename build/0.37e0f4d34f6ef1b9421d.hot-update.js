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
          data: el
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "siderHistory-calcChart-title mainColor"
      }, function () {
        return _this2.dateConversion(_this2.userDataChart.date);
      }, " | ", function () {
        return _this2.rateConversion(_this2.userDataChart.rate);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = function() { return "dc63b2ebbb477d75b076"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zN2UwZjRkMzRmNmVmMWI5NDIxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1U7QUFDRDtBQUNSO0FBQ0U7QUFBQSxJQUV0Q08sWUFBWSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFlBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixZQUFBO0VBQUEsU0FBQUEsYUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixZQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBRWRXLEtBQUssR0FBRztNQUNKQyxhQUFhLEVBQUVaLEtBQUEsQ0FBS2EsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFBQWYsS0FBQSxDQUVEZ0IsY0FBYyxHQUFHLFVBQUNDLENBQUMsRUFBSztNQUNwQixJQUFJQyxTQUFTLEdBQ0RELENBQUMsQ0FBQ0UsUUFBUSxFQUFFLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUR0QjtNQUViLE9BQU9GLFNBQVM7SUFDcEIsQ0FBQztJQUFBbEIsS0FBQSxDQUVEcUIsY0FBYyxHQUFHLFVBQUNKLENBQUMsRUFBSztNQUVwQixVQUFBUCxNQUFBLENBRGdCLENBQUNPLENBQUMsR0FBRyxHQUFHO0lBRTVCLENBQUM7SUFBQSxPQUFBakIsS0FBQTtFQUFBO0VBQUFzQixZQUFBLENBQUEzQixZQUFBO0lBQUE0QixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxPQUFBLEVBQVM7TUFBQSxJQUFBQyxNQUFBO01BQ0wsSUFBQUMsV0FBQSxHQUF1QyxJQUFJLENBQUNkLEtBQUs7UUFBMUNlLElBQUksR0FBQUQsV0FBQSxDQUFKQyxJQUFJO1FBQUVkLFFBQVEsR0FBQWEsV0FBQSxDQUFSYixRQUFRO1FBQUVlLFdBQVcsR0FBQUYsV0FBQSxDQUFYRSxXQUFXO01BQ2xDLG9CQUNJekMsMERBQUE7UUFBSzJDLFNBQVMsRUFBRTtNQUFRLGdCQUNwQjNDLDBEQUFBO1FBQUkyQyxTQUFTLEVBQUU7TUFBK0IsR0FBQyxrQkFBZ0IsQ0FBSyxlQUNwRTNDLDBEQUFBO1FBQUcyQyxTQUFTLEVBQUU7TUFBc0MsR0FBRUgsSUFBSSxDQUFLLGVBQy9EeEMsMERBQUE7UUFBSTJDLFNBQVMsRUFBRTtNQUF3QixHQUNsQ2pCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDaUIsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsQ0FBQztRQUFBLG9CQUFLOUMsMERBQUEsQ0FBQ00sc0RBQWE7VUFBQzZCLEdBQUcsRUFBRVcsQ0FBRTtVQUFDQyxJQUFJLEVBQUVGO1FBQUcsRUFBRTtNQUFBLEVBQUMsQ0FDbkUsZUFDTDdDLDBEQUFBO1FBQUcyQyxTQUFTLEVBQUU7TUFBeUMsR0FBRTtRQUFBLE9BQUtMLE1BQUksQ0FBQ1YsY0FBYyxDQUFDVSxNQUFJLENBQUNkLGFBQWEsQ0FBQ3dCLElBQUksQ0FBQztNQUFBLEdBQUMsS0FBRyxFQUFDO1FBQUEsT0FBS1YsTUFBSSxDQUFDTCxjQUFjLENBQUNLLE1BQUksQ0FBQ2QsYUFBYSxDQUFDeUIsSUFBSSxDQUFDO01BQUEsRUFBSyxlQUNyS2pELDBEQUFBO1FBQUsyQyxTQUFTLEVBQUU7TUFBK0IsZ0JBQUMzQywwREFBQTtRQUFNMkMsU0FBUyxFQUFFO01BQWdDLEdBQUMsUUFBTSxlQUFBM0MsMERBQUEsWUFBSyxPQUFHLENBQU8sZUFBQUEsMERBQUE7UUFBSzJDLFNBQVMsRUFBRTtNQUFnQyxFQUFPLGVBQUEzQywwREFBQTtRQUFNMkMsU0FBUyxFQUFFO01BQW1DLEdBQUMsU0FBTyxlQUFBM0MsMERBQUEsWUFBSyxPQUFHLENBQU8sQ0FBTSxlQUMvUEEsMERBQUE7UUFBSzJDLFNBQVMsRUFBRTtNQUFvQyxFQUFPLENBRXpEO0lBRWQ7RUFBQztFQUFBLE9BQUFwQyxZQUFBO0FBQUEsRUFoQ3NCTiw0Q0FBUztBQW1DcEMsK0RBQWVNLFlBQVk7Ozs7Ozs7O1VDekMzQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFCZWVyLCBGYUFyY2hpdmUgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBNZFBpZUNoYXJ0T3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5pbXBvcnQgeyBIaU1pbnVzU20gfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIlxuaW1wb3J0IFNpZGVyTGlzdEl0ZW0gZnJvbSBcIi4vc2lkZXJMaXN0SXRlbVwiO1xuXG5jbGFzcyBTaWRlckhpc3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHVzZXJEYXRhQ2hhcnQ6IHRoaXMucHJvcHMudXNlckRhdGEuY3JlZGl0c1swXSxcbiAgICB9O1xuXG4gICAgZGF0ZUNvbnZlcnNpb24gPSAoZCkgPT4ge1xuICAgICAgICBsZXQgZGF0ZUlucHV0O1xuICAgICAgICBkYXRlSW5wdXQgPSBkLnRvU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICAgICAgIHJldHVybiBkYXRlSW5wdXQ7XG4gICAgfVxuXG4gICAgcmF0ZUNvbnZlcnNpb24gPSAoZCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZUlucHV0ID0gK2QgKiAxMDA7XG4gICAgICAgIHJldHVybiBgJHtyYXRlSW5wdXR9JWA7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dHlwZSwgdXNlckRhdGEsIHNldFVzZXJEYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJcIn0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktdGl0bGUgbWFpbkNvbG9yXCJ9PlR3b2plIG9ibGljemVuaWE8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY05hbWUgY29udHJhc3RDb2xvclwifT57dHlwZX08L3A+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0xpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRGF0YS5jcmVkaXRzLm1hcCgoZWwsIGkpID0+IDxTaWRlckxpc3RJdGVtIGtleT17aX0gZGF0YT17ZWx9Lz4pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtdGl0bGUgbWFpbkNvbG9yXCJ9PntlID0+IHRoaXMuZGF0ZUNvbnZlcnNpb24odGhpcy51c2VyRGF0YUNoYXJ0LmRhdGUpfSB8IHtlID0+IHRoaXMucmF0ZUNvbnZlcnNpb24odGhpcy51c2VyRGF0YUNoYXJ0LnJhdGUpfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNoYXJ0XCJ9PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNyZWRpdFwifT5LcmVkeXQ8YnIvPjY1JTwvc3Bhbj48ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNoYXJ0MlwifT48L2Rpdj48c3BhbiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1pbnRlcmVzdHNcIn0+T2RzZXRraTxici8+MzUlPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtYm90dG9tTGluZVwifT48L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVySGlzdG9yeTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZGM2M2IyZWJiYjQ3N2Q3NWIwNzZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZhQmVlciIsIkZhQXJjaGl2ZSIsIk1kUGllQ2hhcnRPdXRsaW5lIiwiSGlNaW51c1NtIiwiU2lkZXJMaXN0SXRlbSIsIlNpZGVySGlzdG9yeSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsImFwcGx5IiwiY29uY2F0Iiwic3RhdGUiLCJ1c2VyRGF0YUNoYXJ0IiwicHJvcHMiLCJ1c2VyRGF0YSIsImNyZWRpdHMiLCJkYXRlQ29udmVyc2lvbiIsImQiLCJkYXRlSW5wdXQiLCJ0b1N0cmluZyIsInNsaWNlIiwicmF0ZUNvbnZlcnNpb24iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsIl90aGlzMiIsIl90aGlzJHByb3BzIiwidHlwZSIsInNldFVzZXJEYXRhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsImVsIiwiaSIsImRhdGEiLCJkYXRlIiwicmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=