"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 57:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdPieChartOutline, {
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
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdPieChartOutline, {
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
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "siderHistory-calcList-item contrastColor"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "2023.04.01 | 14%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdPieChartOutline, {
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

/***/ 55:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CalculatorCommonComponents_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _CalculatorCommonComponents_sider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var CreditCalculator = function (_ref) {
  var userLogIn = _ref.userLogIn,
    userData = _ref.userData,
    setUserData = _ref.setUserData;
  var inputStyling = {
    display: "block",
    position: "relative",
    width: "400px"
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    displayShowCalc = _useState2[0],
    setDisplayShowCalc = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz kwotę kredytu"),
    _useState4 = _slicedToArray(_useState3, 2),
    amount = _useState4[0],
    setAmount = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz wysokość odsetek"),
    _useState6 = _slicedToArray(_useState5, 2),
    rate = _useState6[0],
    setRate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz okres kredytu w latach"),
    _useState8 = _slicedToArray(_useState7, 2),
    period = _useState8[0],
    setPeriod = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("stałaRata"),
    _useState10 = _slicedToArray(_useState9, 2),
    creditType = _useState10[0],
    setCreditType = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isSent = _useState12[0],
    setIsSent = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userData),
    _useState14 = _slicedToArray(_useState13, 2),
    userDataBase = _useState14[0],
    setUserDataBase = _useState14[1];
  var id = userDataBase.id,
    name = userDataBase.name,
    credits = userDataBase.credits,
    loans = userDataBase.loans,
    deposits = userDataBase.deposits,
    bonds = userDataBase.bonds;
  var handleRadioChange = function (e) {
    setCreditType(e.target.value);
  };
  var handleClick = function (e) {
    e.preventDefault();
    var newCredit = {
      date: new Date(),
      amount: amount,
      rate: rate,
      creditPeriod: period
    };
    console.log(newCredit);
    var creditsArr = [].concat(_toConsumableArray(credits), [newCredit]);
    setUserData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        credits: creditsArr
      });
    });
    setDisplayShowCalc(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calculatorMainContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), displayShowCalc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mainCalculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Twoje obliczenia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Tabela"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btnOblicz",
    onClick: handleClick
  }, "Powr\xF3t do oblicze\u0144")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mainCalculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Oblicz raty kredytu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: function handleSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: inputStyling
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "amount",
    value: amount,
    onFocus: function handleAmountFocus(e) {
      e.target.value === "Wpisz kwotę kredytu" && setAmount("");
    },
    onChange: function handleAmountChange(e) {
      setAmount(e.target.value);
    },
    onBlur: function handleAmountBlur(e) {
      e.target.value === "" && setAmount("Wpisz kwotę kredytu");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "PLN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: inputStyling
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "rate",
    value: rate,
    onFocus: function handleRateFocus(e) {
      e.target.value === "Wpisz wysokość odsetek" && setRate("");
    },
    onChange: function handleRateChange(e) {
      setRate(e.target.value);
    },
    onBlur: function handleRateBlur(e) {
      e.target.value === "" && setRate("Wpisz wysokość odsetek");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: inputStyling
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "period",
    value: period,
    onFocus: function handlePeriodFocus(e) {
      e.target.value === "Wpisz okres kredytu w latach" && setPeriod("");
    },
    onChange: function handlePeriodChange(e) {
      setPeriod(e.target.value);
    },
    onBlur: function handlePeriodBlur(e) {
      e.target.value === "" && setPeriod("Wpisz okres kredytu w latach");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "Okres")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "radio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: "sta\u0142aRata",
    value: "stałaRata",
    onChange: handleRadioChange,
    checked: creditType === "stałaRata"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Rata sta\u0142a"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: "zmiennaRata",
    value: "zmiennaRata",
    onChange: handleRadioChange,
    checked: creditType === "zmiennaRata"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Rata zmienna")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnOblicz",
    onClick: handleClick
  }, "Oblicz")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_sider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "Kredyt/y",
    userData: userData,
    setUserData: setUserData
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "666feafc5f9d41f2df48"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9jcmVkaXRDYWxjdWxhdG9yL2NyZWRpdENhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhQmVlciwgRmFBcmNoaXZlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgTWRQaWVDaGFydE91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgSGlNaW51c1NtIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCJcblxuY2xhc3MgU2lkZXJIaXN0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8vIHN0YXRlID0ge1xuICAgIC8vICAgICB1c2VyRGF0YTogdGhpcy5wcm9wcy51c2VyRGF0YSxcbiAgICAvLyB9O1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVyXCJ9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LXRpdGxlIG1haW5Db2xvclwifT5Ud29qZSBvYmxpY3plbmlhPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNOYW1lIGNvbnRyYXN0Q29sb3JcIn0+e3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjTGlzdC1pdGVtIGNvbnRyYXN0Q29sb3JcIn0+PHNwYW4+PC9zcGFuPjxzcGFuPjIwMjMuMDQuMDEgfCAxNCU8L3NwYW4+PHNwYW4+PE1kUGllQ2hhcnRPdXRsaW5lIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwiLCB0cmFuc2Zvcm06IFwicm90YXRlKDMwZGVnKVwifX0vPjxidXR0b24gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3JcIn0+PEhpTWludXNTbSBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIiwgaGVpZ2h0OiBcIjMwcHhcIn19Lz48L2J1dHRvbj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0xpc3QtaXRlbSBjb250cmFzdENvbG9yXCJ9PjxzcGFuPjwvc3Bhbj48c3Bhbj4yMDIzLjA0LjAxIHwgMTQlPC9zcGFuPjxzcGFuPjxNZFBpZUNoYXJ0T3V0bGluZSBzdHlsZT17e3dpZHRoOiBcIjMwcHhcIiwgaGVpZ2h0OiBcIjMwcHhcIiwgdHJhbnNmb3JtOiBcInJvdGF0ZSgzMGRlZylcIn19Lz48YnV0dG9uIGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yXCJ9PjxIaU1pbnVzU20gc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCJ9fS8+PC9idXR0b24+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0LWl0ZW0gY29udHJhc3RDb2xvclwifT48c3Bhbj48L3NwYW4+PHNwYW4+MjAyMy4wNC4wMSB8IDE0JTwvc3Bhbj48c3Bhbj48TWRQaWVDaGFydE91dGxpbmUgc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoMzBkZWcpXCJ9fS8+PGJ1dHRvbiBjbGFzc05hbWU9e1widGhpcmRDb2xvclwifT48SGlNaW51c1NtIHN0eWxlPXt7d2lkdGg6IFwiMzBweFwiLCBoZWlnaHQ6IFwiMzBweFwifX0vPjwvYnV0dG9uPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtdGl0bGUgbWFpbkNvbG9yXCJ9PjIwMjMuMDQuMDEgfCAxNCU8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jaGFydFwifT48c3BhbiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jcmVkaXRcIn0+S3JlZHl0PGJyLz42NSU8L3NwYW4+PGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1jaGFydDJcIn0+PC9kaXY+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtaW50ZXJlc3RzXCJ9Pk9kc2V0a2k8YnIvPjM1JTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWJvdHRvbUxpbmVcIn0+PC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlckhpc3Rvcnk7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBTaWRlckhpc3RvcnkgZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyXCI7XG5cbmNvbnN0IENyZWRpdENhbGN1bGF0b3IgPSAoe3VzZXJMb2dJbiwgdXNlckRhdGEsIHNldFVzZXJEYXRhfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0U3R5bGluZyA9IHtkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9O1xuICAgIGNvbnN0IFtkaXNwbGF5U2hvd0NhbGMsIHNldERpc3BsYXlTaG93Q2FsY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIGNvbnN0IFtjcmVkaXRUeXBlLCBzZXRDcmVkaXRUeXBlXSA9IHVzZVN0YXRlKFwic3RhxYJhUmF0YVwiKTtcbiAgICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VyRGF0YUJhc2UsIHNldFVzZXJEYXRhQmFzZV0gPSB1c2VTdGF0ZSh1c2VyRGF0YSk7XG5cbiAgICBjb25zdCB7aWQsIG5hbWUsIGNyZWRpdHMsIGxvYW5zLCBkZXBvc2l0cywgYm9uZHN9ID0gdXNlckRhdGFCYXNlO1xuXG4gICAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRDcmVkaXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Rm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBrd290xJkga3JlZHl0dVwiICYmIHNldEFtb3VudChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldEFtb3VudChcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiICYmIHNldFJhdGUoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFJhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRSYXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiICYmIHNldFBlcmlvZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQZXJpb2QoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBlcmlvZChcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG5ld0NyZWRpdCA9IHtcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIHJhdGU6IHJhdGUsXG4gICAgICAgICAgICBjcmVkaXRQZXJpb2Q6IHBlcmlvZFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdDcmVkaXQpO1xuICAgICAgICBsZXQgY3JlZGl0c0FyciA9IFsuLi5jcmVkaXRzLCBuZXdDcmVkaXRdO1xuXG4gICAgICAgIHNldFVzZXJEYXRhKChwcmV2KSA9PiAoey4uLnByZXYsIGNyZWRpdHM6IGNyZWRpdHNBcnJ9KSk7XG5cbiAgICAgICAgc2V0RGlzcGxheVNob3dDYWxjKHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yTWFpbkNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVNob3dDYWxjID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlR3b2plIG9ibGljemVuaWE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFiZWxhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Qb3dyw7N0IGRvIG9ibGljemXFhDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+T2JsaWN6IHJhdHkga3JlZHl0dTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e2Ftb3VudH0gb25Gb2N1cz17aGFuZGxlQW1vdW50Rm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInJhdGVcIn0gdmFsdWU9e3JhdGV9IG9uRm9jdXM9e2hhbmRsZVJhdGVGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVJhdGVDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUmF0ZUJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicGVyaW9kXCJ9IHZhbHVlPXtwZXJpb2R9IG9uRm9jdXM9e2hhbmRsZVBlcmlvZEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVBlcmlvZEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+T2tyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhZGlvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwic3RhxYJhUmF0YVwiIHZhbHVlPXtcInN0YcWCYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInN0YcWCYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHN0YcWCYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJ6bWllbm5hUmF0YVwiIHZhbHVlPXtcInptaWVubmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJ6bWllbm5hUmF0YVwifS8+PGxhYmVsPlJhdGEgem1pZW5uYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pk9ibGljejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVySGlzdG9yeSB0eXBlPXtcIktyZWR5dC95XCJ9IHVzZXJEYXRhPXt1c2VyRGF0YX0gc2V0VXNlckRhdGE9e3NldFVzZXJEYXRhfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0Q2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNjY2ZmVhZmM1ZjlkNDFmMmRmNDhcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZhQmVlciIsIkZhQXJjaGl2ZSIsIk1kUGllQ2hhcnRPdXRsaW5lIiwiSGlNaW51c1NtIiwiU2lkZXJIaXN0b3J5IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpcyRwcm9wcyIsInByb3BzIiwidHlwZSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsInVzZVN0YXRlIiwiTmF2aWdhdGlvbiIsIkNyZWRpdENhbGN1bGF0b3IiLCJfcmVmIiwidXNlckxvZ0luIiwiaW5wdXRTdHlsaW5nIiwiZGlzcGxheSIsInBvc2l0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGlzcGxheVNob3dDYWxjIiwic2V0RGlzcGxheVNob3dDYWxjIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwZXJpb2QiLCJzZXRQZXJpb2QiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJjcmVkaXRUeXBlIiwic2V0Q3JlZGl0VHlwZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwidXNlckRhdGFCYXNlIiwic2V0VXNlckRhdGFCYXNlIiwiaWQiLCJuYW1lIiwiY3JlZGl0cyIsImxvYW5zIiwiZGVwb3NpdHMiLCJib25kcyIsImhhbmRsZVJhZGlvQ2hhbmdlIiwiZSIsInRhcmdldCIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJuZXdDcmVkaXQiLCJkYXRlIiwiRGF0ZSIsImNyZWRpdFBlcmlvZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVkaXRzQXJyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHJldiIsIl9vYmplY3RTcHJlYWQiLCJvbkNsaWNrIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJvbkZvY3VzIiwiaGFuZGxlQW1vdW50Rm9jdXMiLCJvbkNoYW5nZSIsImhhbmRsZUFtb3VudENoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUFtb3VudEJsdXIiLCJoYW5kbGVSYXRlRm9jdXMiLCJoYW5kbGVSYXRlQ2hhbmdlIiwiaGFuZGxlUmF0ZUJsdXIiLCJoYW5kbGVQZXJpb2RGb2N1cyIsImhhbmRsZVBlcmlvZENoYW5nZSIsImhhbmRsZVBlcmlvZEJsdXIiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==