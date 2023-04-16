"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 57:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdPieChartOutline, {
        style: {
          width: "30px",
          height: "30px",
          transform: "rotate(30deg)"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "thirdColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiMinusSm, {
        style: {
          width: "30px",
          height: "30px"
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdPieChartOutline, {
        style: {
          width: "30px",
          height: "30px",
          transform: "rotate(30deg)"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "thirdColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiMinusSm, {
        style: {
          width: "30px",
          height: "30px"
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdPieChartOutline, {
        style: {
          width: "30px",
          height: "30px",
          transform: "rotate(30deg)"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "thirdColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiMinusSm, {
        style: {
          width: "30px",
          height: "30px"
        }
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
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
  var date = data.date;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "siderHistory-calcList-item contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, date, " | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdPieChartOutline, {
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
/******/ 	__webpack_require__.h = function() { return "16a707d114d84cbc76c9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxNQUFNLEVBQUUsTUFBTTtNQUFFQyxTQUFTLEVBQUU7SUFBZTtFQUFFLEVBQUUsZUFBQWxDLDBEQUFBO0lBQVF5QixTQUFTLEVBQUU7RUFBYSxnQkFBQ3pCLDBEQUFBLENBQUNLLHFEQUFTO0lBQUMwQixLQUFLLEVBQUU7TUFBQ0MsS0FBSyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFO0lBQU07RUFBRSxFQUFFLENBQVMsQ0FBTyxDQUFLO0FBR2pULENBQUM7QUFFRCwrREFBZTNCLGFBQWE7Ozs7Ozs7O1VDWjVCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9NYWluL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy9NYWluL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhQmVlciwgRmFBcmNoaXZlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgTWRQaWVDaGFydE91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgSGlNaW51c1NtIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCJcbmltcG9ydCBTaWRlckxpc3RJdGVtIGZyb20gXCIuL3NpZGVyTGlzdEl0ZW1cIjtcblxuY2xhc3MgU2lkZXJIaXN0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8vIHN0YXRlID0ge1xuICAgIC8vICAgICB1c2VyRGF0YTogdGhpcy5wcm9wcy51c2VyRGF0YSxcbiAgICAvLyB9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVyXCJ9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LXRpdGxlIG1haW5Db2xvclwifT5Ud29qZSBvYmxpY3plbmlhPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNOYW1lIGNvbnRyYXN0Q29sb3JcIn0+e3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckRhdGEuY3JlZGl0cy5tYXAoKGVsLCBpKSA9PiA8U2lkZXJMaXN0SXRlbSBrZXk9e2l9IGRhdGE9e2VsfS8+KX1cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0xpc3QtaXRlbSBjb250cmFzdENvbG9yXCJ9PjxzcGFuPjwvc3Bhbj48c3Bhbj4yMDIzLjA0LjAxIHwgMTQlPC9zcGFuPjxzcGFuPjxNZFBpZUNoYXJ0T3V0bGluZSBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIiwgaGVpZ2h0OiBcIjMwcHhcIiwgdHJhbnNmb3JtOiBcInJvdGF0ZSgzMGRlZylcIn19Lz48YnV0dG9uIGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yXCJ9PjxIaU1pbnVzU20gc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCJ9fS8+PC9idXR0b24+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0LWl0ZW0gY29udHJhc3RDb2xvclwifT48c3Bhbj48L3NwYW4+PHNwYW4+MjAyMy4wNC4wMSB8IDE0JTwvc3Bhbj48c3Bhbj48TWRQaWVDaGFydE91dGxpbmUgc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoMzBkZWcpXCJ9fS8+PGJ1dHRvbiBjbGFzc05hbWU9e1widGhpcmRDb2xvclwifT48SGlNaW51c1NtIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwifX0vPjwvYnV0dG9uPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTGlzdC1pdGVtIGNvbnRyYXN0Q29sb3JcIn0+PHNwYW4+PC9zcGFuPjxzcGFuPjIwMjMuMDQuMDEgfCAxNCU8L3NwYW4+PHNwYW4+PE1kUGllQ2hhcnRPdXRsaW5lIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwiLCB0cmFuc2Zvcm06IFwicm90YXRlKDMwZGVnKVwifX0vPjxidXR0b24gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3JcIn0+PEhpTWludXNTbSBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIiwgaGVpZ2h0OiBcIjMwcHhcIn19Lz48L2J1dHRvbj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LXRpdGxlIG1haW5Db2xvclwifT4yMDIzLjA0LjAxIHwgMTQlPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnRcIn0+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY3JlZGl0XCJ9PktyZWR5dDxici8+NjUlPC9zcGFuPjxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnQyXCJ9PjwvZGl2PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWludGVyZXN0c1wifT5PZHNldGtpPGJyLz4zNSU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1ib3R0b21MaW5lXCJ9PjwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZXJIaXN0b3J5OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtNZFBpZUNoYXJ0T3V0bGluZX0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQge0hpTWludXNTbX0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5cbmNvbnN0IFNpZGVyTGlzdEl0ZW0gPSAoe2tleSwgZGF0YX0pID0+IHtcbiAgICBjb25zdCB7ZGF0ZSwgfSA9IGRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTGlzdC1pdGVtIGNvbnRyYXN0Q29sb3JcIn0+PHNwYW4+PC9zcGFuPjxzcGFuPntkYXRlfSB8IDE0JTwvc3Bhbj48c3Bhbj48TWRQaWVDaGFydE91dGxpbmUgc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoMzBkZWcpXCJ9fS8+PGJ1dHRvbiBjbGFzc05hbWU9e1widGhpcmRDb2xvclwifT48SGlNaW51c1NtIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwifX0vPjwvYnV0dG9uPjwvc3Bhbj48L2xpPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlckxpc3RJdGVtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxNmE3MDdkMTE0ZDg0Y2JjNzZjOVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRmFCZWVyIiwiRmFBcmNoaXZlIiwiTWRQaWVDaGFydE91dGxpbmUiLCJIaU1pbnVzU20iLCJTaWRlckxpc3RJdGVtIiwiU2lkZXJIaXN0b3J5IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyRwcm9wcyIsInByb3BzIiwidHlwZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY3JlZGl0cyIsIm1hcCIsImVsIiwiaSIsImRhdGEiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJfcmVmIiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=