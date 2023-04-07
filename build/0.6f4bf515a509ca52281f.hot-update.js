"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 35:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    value: function render() {
      var calcName = this.props.calcName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "sider"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "siderHistory-title mainColor"
      }, "Twoje obliczenia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "siderHistory-calcName contrastColor"
      }, calcName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "siderHistory-calcList"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "pictures/arrow_drop_down_circle_FILL0_wght400_GRAD0_opsz48.svg",
        style: {
          width: "20px",
          height: "20px"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "thirdColor"
      }, "--"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "pictures/arrow_drop_down_circle_FILL0_wght400_GRAD0_opsz48.svg",
        style: {
          width: "20px",
          height: "20px"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "thirdColor"
      }, "--"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "pictures/arrow_drop_down_circle_FILL0_wght400_GRAD0_opsz48.svg",
        style: {
          width: "20px",
          height: "20px"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "thirdColor"
      }, "--")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "siderHistory-calcChart-title mainColor"
      }, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "siderHistory-calcChart-chart"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "siderHistory-calcChart-credit"
      }, "Kredyt", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "65%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "siderHistory-calcChart-chart2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "siderHistory-calcChart-interests"
      }, "Odsetki")));
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
/******/ 	__webpack_require__.h = function() { return "3f7a00d0e66dfdea3722"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZjRiZjUxNWE1MDljYTUyMjgxZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFBQSxJQUVuQ0UsWUFBWSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFlBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixZQUFBO0VBQUEsU0FBQUEsYUFBQTtJQUFBSyxlQUFBLE9BQUFMLFlBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQVIsWUFBQTtJQUFBUyxHQUFBO0lBQUFDLEtBQUEsRUFFZCxTQUFBQyxPQUFBLEVBQVM7TUFDTCxJQUFPQyxRQUFRLEdBQUksSUFBSSxDQUFDQyxLQUFLLENBQXRCRCxRQUFRO01BQ2Ysb0JBQ0lkLDBEQUFBO1FBQUtpQixTQUFTLEVBQUU7TUFBUSxnQkFDcEJqQiwwREFBQTtRQUFJaUIsU0FBUyxFQUFFO01BQStCLEdBQUMsa0JBQWdCLENBQUssZUFDcEVqQiwwREFBQTtRQUFHaUIsU0FBUyxFQUFFO01BQXNDLEdBQUVILFFBQVEsQ0FBSyxlQUNuRWQsMERBQUE7UUFBSWlCLFNBQVMsRUFBRTtNQUF3QixnQkFDbkNqQiwwREFBQTtRQUFJaUIsU0FBUyxFQUFFO01BQTJDLGdCQUFDakIsMERBQUEsY0FBYSxlQUFBQSwwREFBQSxlQUFNLGtCQUFnQixDQUFPLGVBQUFBLDBEQUFBLDRCQUFNQSwwREFBQTtRQUFLa0IsR0FBRyxFQUFFLGdFQUFpRTtRQUFDQyxLQUFLLEVBQUU7VUFBQ0MsS0FBSyxFQUFFLE1BQU07VUFBRUMsTUFBTSxFQUFFO1FBQU07TUFBRSxFQUFHLGVBQUFyQiwwREFBQTtRQUFRaUIsU0FBUyxFQUFFO01BQWEsR0FBQyxJQUFFLENBQVMsQ0FBTyxDQUFLLGVBQ3pSakIsMERBQUE7UUFBSWlCLFNBQVMsRUFBRTtNQUEyQyxnQkFBQ2pCLDBEQUFBLGNBQWEsZUFBQUEsMERBQUEsZUFBTSxrQkFBZ0IsQ0FBTyxlQUFBQSwwREFBQSw0QkFBTUEsMERBQUE7UUFBS2tCLEdBQUcsRUFBRSxnRUFBaUU7UUFBQ0MsS0FBSyxFQUFFO1VBQUNDLEtBQUssRUFBRSxNQUFNO1VBQUVDLE1BQU0sRUFBRTtRQUFNO01BQUUsRUFBRyxlQUFBckIsMERBQUE7UUFBUWlCLFNBQVMsRUFBRTtNQUFhLEdBQUMsSUFBRSxDQUFTLENBQU8sQ0FBSyxlQUN6UmpCLDBEQUFBO1FBQUlpQixTQUFTLEVBQUU7TUFBMkMsZ0JBQUNqQiwwREFBQSxjQUFhLGVBQUFBLDBEQUFBLGVBQU0sa0JBQWdCLENBQU8sZUFBQUEsMERBQUEsNEJBQU1BLDBEQUFBO1FBQUtrQixHQUFHLEVBQUUsZ0VBQWlFO1FBQUNDLEtBQUssRUFBRTtVQUFDQyxLQUFLLEVBQUUsTUFBTTtVQUFFQyxNQUFNLEVBQUU7UUFBTTtNQUFFLEVBQUcsZUFBQXJCLDBEQUFBO1FBQVFpQixTQUFTLEVBQUU7TUFBYSxHQUFDLElBQUUsQ0FBUyxDQUFPLENBQUssQ0FDeFIsZUFDTGpCLDBEQUFBO1FBQUdpQixTQUFTLEVBQUU7TUFBeUMsR0FBQyxrQkFBZ0IsQ0FBSSxlQUM1RWpCLDBEQUFBO1FBQUtpQixTQUFTLEVBQUU7TUFBK0IsZ0JBQUNqQiwwREFBQTtRQUFNaUIsU0FBUyxFQUFFO01BQWdDLEdBQUMsUUFBTSxlQUFBakIsMERBQUEsWUFBSyxPQUFHLENBQU8sZUFBQUEsMERBQUE7UUFBS2lCLFNBQVMsRUFBRTtNQUFnQyxFQUFPLGVBQUFqQiwwREFBQTtRQUFNaUIsU0FBUyxFQUFFO01BQW1DLEdBQUMsU0FBTyxDQUFPLENBQU0sQ0FFclA7SUFFZDtFQUFDO0VBQUEsT0FBQWYsWUFBQTtBQUFBLEVBbEJzQkQsNENBQVM7QUFxQnBDLCtEQUFlQyxZQUFZOzs7Ozs7OztVQ3ZCM0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL1NpZGVyL3NpZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNpZGVySGlzdG9yeSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtjYWxjTmFtZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJcIn0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktdGl0bGUgbWFpbkNvbG9yXCJ9PlR3b2plIG9ibGljemVuaWE8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY05hbWUgY29udHJhc3RDb2xvclwifT57Y2FsY05hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTGlzdC1pdGVtIGNvbnRyYXN0Q29sb3JcIn0+PHNwYW4+PC9zcGFuPjxzcGFuPjIwMjMuMDQuMDEgfCAxNCU8L3NwYW4+PHNwYW4+PGltZyBzcmM9e1wicGljdHVyZXMvYXJyb3dfZHJvcF9kb3duX2NpcmNsZV9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3o0OC5zdmdcIn0gc3R5bGU9e3t3aWR0aDogXCIyMHB4XCIsIGhlaWdodDogXCIyMHB4XCJ9fSAvPjxidXR0b24gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3JcIn0+LS08L2J1dHRvbj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0xpc3QtaXRlbSBjb250cmFzdENvbG9yXCJ9PjxzcGFuPjwvc3Bhbj48c3Bhbj4yMDIzLjA0LjAxIHwgMTQlPC9zcGFuPjxzcGFuPjxpbWcgc3JjPXtcInBpY3R1cmVzL2Fycm93X2Ryb3BfZG93bl9jaXJjbGVfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6NDguc3ZnXCJ9IHN0eWxlPXt7d2lkdGg6IFwiMjBweFwiLCBoZWlnaHQ6IFwiMjBweFwifX0gLz48YnV0dG9uIGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yXCJ9Pi0tPC9idXR0b24+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0LWl0ZW0gY29udHJhc3RDb2xvclwifT48c3Bhbj48L3NwYW4+PHNwYW4+MjAyMy4wNC4wMSB8IDE0JTwvc3Bhbj48c3Bhbj48aW1nIHNyYz17XCJwaWN0dXJlcy9hcnJvd19kcm9wX2Rvd25fY2lyY2xlX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejQ4LnN2Z1wifSBzdHlsZT17e3dpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjIwcHhcIn19IC8+PGJ1dHRvbiBjbGFzc05hbWU9e1widGhpcmRDb2xvclwifT4tLTwvYnV0dG9uPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtdGl0bGUgbWFpbkNvbG9yXCJ9PjIwMjMuMDQuMDEgfCAxNCU8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jaGFydFwifT48c3BhbiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jcmVkaXRcIn0+S3JlZHl0PGJyLz42NSU8L3NwYW4+PGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jaGFydDJcIn0+PC9kaXY+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtaW50ZXJlc3RzXCJ9Pk9kc2V0a2k8L3NwYW4+PC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlckhpc3Rvcnk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjNmN2EwMGQwZTY2ZGZkZWEzNzIyXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTaWRlckhpc3RvcnkiLCJfQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlbmRlciIsImNhbGNOYW1lIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=