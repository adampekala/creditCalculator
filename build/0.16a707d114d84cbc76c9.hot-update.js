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
    _classCallCheck(this, SiderHistory);
    return _super.apply(this, arguments);
  }
  _createClass(SiderHistory, [{
    key: "render",
    value:
    // state = {
    //     userData: this.props.userData,
    // };
    function render() {
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
      }, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

/***/ }),

/***/ 62:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);



var SiderListItem = function (_ref) {
  var key = _ref.key,
    data = _ref.data;
  var date = data.date,
    amount = data.amount,
    rate = data.rate,
    period = data.period;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "siderHistory-calcList-item contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, date, " | rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdPieChartOutline, {
    style: {
      width: "30px",
      height: "30px",
      transform: "rotate(30deg)"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "thirdColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiMinusSm, {
    style: {
      width: "30px",
      height: "30px"
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SiderListItem);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "dcdfb3c1876597ea47c4"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFFO0VBQWEsZ0JBQUN6QiwwREFBQSxDQUFDSyxxREFBUztJQUFDaUMsS0FBSyxFQUFFO01BQUNDLEtBQUssRUFBRSxNQUFNO01BQUVDLE1BQU0sRUFBRTtJQUFNO0VBQUUsRUFBRSxDQUFTLENBQU8sQ0FBSztBQUdsVCxDQUFDO0FBRUQsK0RBQWVsQyxhQUFhOzs7Ozs7OztVQ1o1QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlckxpc3RJdGVtLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUJlZXIsIEZhQXJjaGl2ZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IE1kUGllQ2hhcnRPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCB7IEhpTWludXNTbSB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiXG5pbXBvcnQgU2lkZXJMaXN0SXRlbSBmcm9tIFwiLi9zaWRlckxpc3RJdGVtXCI7XG5cbmNsYXNzIFNpZGVySGlzdG9yeSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAvLyBzdGF0ZSA9IHtcbiAgICAvLyAgICAgdXNlckRhdGE6IHRoaXMucHJvcHMudXNlckRhdGEsXG4gICAgLy8gfTtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHt0eXBlLCB1c2VyRGF0YSwgc2V0VXNlckRhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlclwifT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS10aXRsZSBtYWluQ29sb3JcIn0+VHdvamUgb2JsaWN6ZW5pYTwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTmFtZSBjb250cmFzdENvbG9yXCJ9Pnt0eXBlfTwvcD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTGlzdFwifT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXJEYXRhLmNyZWRpdHMubWFwKChlbCwgaSkgPT4gPFNpZGVyTGlzdEl0ZW0ga2V5PXtpfSBkYXRhPXtlbH0vPil9XG4gICAgICAgICAgICAgICAgICAgIHsvKjxsaSBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0LWl0ZW0gY29udHJhc3RDb2xvclwifT48c3Bhbj48L3NwYW4+PHNwYW4+MjAyMy4wNC4wMSB8IDE0JTwvc3Bhbj48c3Bhbj48TWRQaWVDaGFydE91dGxpbmUgc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoMzBkZWcpXCJ9fS8+PGJ1dHRvbiBjbGFzc05hbWU9e1widGhpcmRDb2xvclwifT48SGlNaW51c1NtIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwifX0vPjwvYnV0dG9uPjwvc3Bhbj48L2xpPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8bGkgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTGlzdC1pdGVtIGNvbnRyYXN0Q29sb3JcIn0+PHNwYW4+PC9zcGFuPjxzcGFuPjIwMjMuMDQuMDEgfCAxNCU8L3NwYW4+PHNwYW4+PE1kUGllQ2hhcnRPdXRsaW5lIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwiLCB0cmFuc2Zvcm06IFwicm90YXRlKDMwZGVnKVwifX0vPjxidXR0b24gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3JcIn0+PEhpTWludXNTbSBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIiwgaGVpZ2h0OiBcIjMwcHhcIn19Lz48L2J1dHRvbj48L3NwYW4+PC9saT4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPGxpIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0xpc3QtaXRlbSBjb250cmFzdENvbG9yXCJ9PjxzcGFuPjwvc3Bhbj48c3Bhbj4yMDIzLjA0LjAxIHwgMTQlPC9zcGFuPjxzcGFuPjxNZFBpZUNoYXJ0T3V0bGluZSBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIiwgaGVpZ2h0OiBcIjMwcHhcIiwgdHJhbnNmb3JtOiBcInJvdGF0ZSgzMGRlZylcIn19Lz48YnV0dG9uIGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yXCJ9PjxIaU1pbnVzU20gc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCJ9fS8+PC9idXR0b24+PC9zcGFuPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC10aXRsZSBtYWluQ29sb3JcIn0+MjAyMy4wNC4wMSB8IDE0JTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNoYXJ0XCJ9PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNyZWRpdFwifT5LcmVkeXQ8YnIvPjY1JTwvc3Bhbj48ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNoYXJ0MlwifT48L2Rpdj48c3BhbiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1pbnRlcmVzdHNcIn0+T2RzZXRraTxici8+MzUlPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtYm90dG9tTGluZVwifT48L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVySGlzdG9yeTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TWRQaWVDaGFydE91dGxpbmV9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHtIaU1pbnVzU219IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuXG5jb25zdCBTaWRlckxpc3RJdGVtID0gKHtrZXksIGRhdGF9KSA9PiB7XG4gICAgY29uc3Qge2RhdGUsIGFtb3VudCwgcmF0ZSwgcGVyaW9kfSA9IGRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTGlzdC1pdGVtIGNvbnRyYXN0Q29sb3JcIn0+PHNwYW4+PC9zcGFuPjxzcGFuPntkYXRlfSB8IHJhdGU8L3NwYW4+PHNwYW4+PE1kUGllQ2hhcnRPdXRsaW5lIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwiLCB0cmFuc2Zvcm06IFwicm90YXRlKDMwZGVnKVwifX0vPjxidXR0b24gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3JcIn0+PEhpTWludXNTbSBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIiwgaGVpZ2h0OiBcIjMwcHhcIn19Lz48L2J1dHRvbj48L3NwYW4+PC9saT5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZXJMaXN0SXRlbTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZGNkZmIzYzE4NzY1OTdlYTQ3YzRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZhQmVlciIsIkZhQXJjaGl2ZSIsIk1kUGllQ2hhcnRPdXRsaW5lIiwiSGlNaW51c1NtIiwiU2lkZXJMaXN0SXRlbSIsIlNpZGVySGlzdG9yeSIsIl9Db21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVuZGVyIiwiX3RoaXMkcHJvcHMiLCJwcm9wcyIsInR5cGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNyZWRpdHMiLCJtYXAiLCJlbCIsImkiLCJkYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJfcmVmIiwiZGF0ZSIsImFtb3VudCIsInJhdGUiLCJwZXJpb2QiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==