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

/***/ }),

/***/ 62:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);



var SiderListItem = function (_ref) {
  var data = _ref.data,
    index = _ref.index,
    btnDelete = _ref.btnDelete;
  var date = data.date,
    amount = data.amount,
    rate = data.rate,
    period = data.period;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "siderHistory-calcList-item contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, function dateConversion(d) {
    var dateInput = d.toString().slice(0, 10);
    return dateInput;
  }(date), " | ", function rateConversion(d) {
    return "".concat(+d * 100, "%");
  }(rate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdPieChartOutline, {
    style: {
      width: "30px",
      height: "30px",
      transform: "rotate(30deg)"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "thirdColor",
    onClick: function btnDeleteFn(id) {
      return function () {
        btnDelete(id);
      };
    }(index)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiMinusSm, {
    style: {
      width: "30px",
      height: "30px"
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (SiderListItem);

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
    setUserData = _ref.setUserData,
    filter = _ref.filter;
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
    setUserData: setUserData,
    btnMinusFn: filter
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCalculator);

/***/ }),

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51);
/* harmony import */ var _Home_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);
/* harmony import */ var _Registration_registration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var _userData_userData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54);
/* harmony import */ var _Main_creditCalculator_creditCalculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55);
/* harmony import */ var _Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59);
/* harmony import */ var _Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60);
/* harmony import */ var _Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
var Application = function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    logged = _useState2[0],
    setLogged = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    usersCalculations = _useState4[0],
    setUsersCalculations = _useState4[1];
  var credits = usersCalculations.credits,
    bonds = usersCalculations.bonds,
    deposits = usersCalculations.deposits,
    loans = usersCalculations.loans;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "info",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_information__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userLogIn: logged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      data: usersCalculations,
      changingData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "registration",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Registration_registration__WEBPACK_IMPORTED_MODULE_7__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_creditCalculator_creditCalculator__WEBPACK_IMPORTED_MODULE_9__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations,
      filter: function creditsFilter(id) {
        var newCreditsArr = credits.filter(function (el, i) {
          return i !== id;
        });
        setUsersCalculations(_objectSpread(_objectSpread({}, usersCalculations), {}, {
          credits: newCreditsArr
        }));
      }
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "loan",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_loanCalculator_loanCalculator__WEBPACK_IMPORTED_MODULE_11__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "deposit",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_depositCalculator_depositCalculator__WEBPACK_IMPORTED_MODULE_12__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "bond",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_bondCalculator_bondCalculator__WEBPACK_IMPORTED_MODULE_10__["default"], {
      userLogIn: logged,
      userData: usersCalculations,
      setUserData: setUsersCalculations
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "userData",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_userData_userData__WEBPACK_IMPORTED_MODULE_8__["default"], {
      userLogIn: logged,
      setUserLogIn: setLogged,
      userData: usersCalculations
    })
  }))));
};
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Application, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bba47671b4c28afa72cd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQSxDQUFDc0ksb0RBQUs7SUFBQ3VCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRTlKLDBEQUFBLENBQUNnSiwwREFBUTtNQUFFN0UsU0FBUyxFQUFFc0YsTUFBTztNQUFDTSxZQUFZLEVBQUVMLFNBQVU7TUFBQ2hJLFFBQVEsRUFBRWlJO0lBQWtCO0VBQUcsRUFBRSxDQUNwSCxDQUNILENBQ0E7QUFFckIsQ0FBQztBQUdESixJQUFJLENBQUMvRyxNQUFNLGVBQ1B4QywwREFBQSxDQUFDd0osV0FBVyxPQUFFLENBQ2pCOzs7Ozs7OztVQ3BERCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlckxpc3RJdGVtLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy9NYWluL2NyZWRpdENhbGN1bGF0b3IvY3JlZGl0Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUJlZXIsIEZhQXJjaGl2ZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IE1kUGllQ2hhcnRPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCB7IEhpTWludXNTbSB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiXG5pbXBvcnQgU2lkZXJMaXN0SXRlbSBmcm9tIFwiLi9zaWRlckxpc3RJdGVtXCI7XG5cbmNsYXNzIFNpZGVySGlzdG9yeSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdXNlckRhdGFDaGFydDogdGhpcy5wcm9wcy51c2VyRGF0YS5jcmVkaXRzWzBdLFxuICAgIH07XG5cbiAgICBidG5EZWxldGVGbiA9IChpZCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmJ0bk1pbnVzRm4oaWQpO1xuICAgIH1cblxuICAgIGRhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IGRhdGVJbnB1dDtcbiAgICAgICAgZGF0ZUlucHV0ID0gZC50b1N0cmluZygpLnNsaWNlKDAsMTApO1xuICAgICAgICByZXR1cm4gZGF0ZUlucHV0O1xuICAgIH1cblxuICAgIHJhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IHJhdGVJbnB1dCA9ICtkICogMTAwO1xuICAgICAgICByZXR1cm4gYCR7cmF0ZUlucHV0fSVgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVyXCJ9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LXRpdGxlIG1haW5Db2xvclwifT5Ud29qZSBvYmxpY3plbmlhPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNOYW1lIGNvbnRyYXN0Q29sb3JcIn0+e3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckRhdGEuY3JlZGl0cy5tYXAoKGVsLCBpKSA9PiA8U2lkZXJMaXN0SXRlbSBrZXk9e2l9IGRhdGE9e2VsfSBpbmRleD17aX0gYnRuRGVsZXRlPXt0aGlzLmJ0bkRlbGV0ZUZufS8+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LXRpdGxlIG1haW5Db2xvclwifT57dGhpcy5kYXRlQ29udmVyc2lvbih0aGlzLnN0YXRlLnVzZXJEYXRhQ2hhcnQuZGF0ZSl9IHwge3RoaXMucmF0ZUNvbnZlcnNpb24odGhpcy5zdGF0ZS51c2VyRGF0YUNoYXJ0LnJhdGUpfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNoYXJ0XCJ9PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNyZWRpdFwifT5LcmVkeXQ8YnIvPjY1JTwvc3Bhbj48ZGl2IGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWNoYXJ0MlwifT48L2Rpdj48c3BhbiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1pbnRlcmVzdHNcIn0+T2RzZXRraTxici8+MzUlPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtYm90dG9tTGluZVwifT48L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVySGlzdG9yeTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TWRQaWVDaGFydE91dGxpbmV9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHtIaU1pbnVzU219IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiO1xuXG5jb25zdCBTaWRlckxpc3RJdGVtID0gKHtkYXRhLCBpbmRleCwgYnRuRGVsZXRlfSkgPT4ge1xuICAgIGNvbnN0IHtkYXRlLCBhbW91bnQsIHJhdGUsIHBlcmlvZH0gPSBkYXRhO1xuXG4gICAgY29uc3QgYnRuRGVsZXRlRm4gPSAoaWQpID0+IChlKSA9PiB7XG4gICAgICAgIGJ0bkRlbGV0ZShpZCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZUNvbnZlcnNpb24gPSAoZCkgPT4ge1xuICAgICAgICBsZXQgZGF0ZUlucHV0O1xuICAgICAgICBkYXRlSW5wdXQgPSBkLnRvU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gICAgICAgIHJldHVybiBkYXRlSW5wdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmF0ZUNvbnZlcnNpb24gPSAoZCkgPT4ge1xuICAgICAgICBsZXQgcmF0ZUlucHV0ID0gK2QgKiAxMDA7XG4gICAgICAgIHJldHVybiBgJHtyYXRlSW5wdXR9JWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0xpc3QtaXRlbSBjb250cmFzdENvbG9yXCJ9PjxzcGFuPjwvc3Bhbj48c3Bhbj57ZGF0ZUNvbnZlcnNpb24oZGF0ZSl9IHwge3JhdGVDb252ZXJzaW9uKHJhdGUpfTwvc3Bhbj48c3Bhbj48TWRQaWVDaGFydE91dGxpbmUgc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCIsIHRyYW5zZm9ybTogXCJyb3RhdGUoMzBkZWcpXCJ9fS8+PGJ1dHRvbiBjbGFzc05hbWU9e1widGhpcmRDb2xvclwifSBvbkNsaWNrPXtidG5EZWxldGVGbihpbmRleCl9PjxIaU1pbnVzU20gc3R5bGU9e3t3aWR0aDogXCIzMHB4XCIsIGhlaWdodDogXCIzMHB4XCJ9fS8+PC9idXR0b24+PC9zcGFuPjwvbGk+XG5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVyTGlzdEl0ZW07IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBTaWRlckhpc3RvcnkgZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyXCI7XG5cbmNvbnN0IENyZWRpdENhbGN1bGF0b3IgPSAoe3VzZXJMb2dJbiwgdXNlckRhdGEsIHNldFVzZXJEYXRhLCBmaWx0ZXJ9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRTdHlsaW5nID0ge2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn07XG4gICAgY29uc3QgW2Rpc3BsYXlTaG93Q2FsYywgc2V0RGlzcGxheVNob3dDYWxjXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZShcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgY29uc3QgW2NyZWRpdFR5cGUsIHNldENyZWRpdFR5cGVdID0gdXNlU3RhdGUoXCJzdGHFgmFSYXRhXCIpO1xuICAgIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJEYXRhQmFzZSwgc2V0VXNlckRhdGFCYXNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcblxuICAgIGNvbnN0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YUJhc2U7XG5cbiAgICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENyZWRpdFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIgJiYgc2V0QW1vdW50KFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0QW1vdW50KFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIgJiYgc2V0UmF0ZShcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UmF0ZShlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFJhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIgJiYgc2V0UGVyaW9kKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGVyaW9kKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgbmV3Q3JlZGl0ID0ge1xuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgcmF0ZTogcmF0ZSxcbiAgICAgICAgICAgIGNyZWRpdFBlcmlvZDogcGVyaW9kXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NyZWRpdCk7XG4gICAgICAgIGxldCBjcmVkaXRzQXJyID0gWy4uLmNyZWRpdHMsIG5ld0NyZWRpdF07XG5cbiAgICAgICAgc2V0VXNlckRhdGEoKHByZXYpID0+ICh7Li4ucHJldiwgY3JlZGl0czogY3JlZGl0c0Fycn0pKTtcblxuICAgICAgICBzZXREaXNwbGF5U2hvd0NhbGModHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGN1bGF0b3JNYWluQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgICAgIHtkaXNwbGF5U2hvd0NhbGMgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+VHdvamUgb2JsaWN6ZW5pYTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UYWJlbGE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlBvd3LDs3QgZG8gb2JsaWN6ZcWEPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNhbGN1bGF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5PYmxpY3ogcmF0eSBrcmVkeXR1PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17YW1vdW50fSBvbkZvY3VzPXtoYW5kbGVBbW91bnRGb2N1c30gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PlBMTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicmF0ZVwifSB2YWx1ZT17cmF0ZX0gb25Gb2N1cz17aGFuZGxlUmF0ZUZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUmF0ZUNoYW5nZX0gb25CbHVyPXtoYW5kbGVSYXRlQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT4lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJwZXJpb2RcIn0gdmFsdWU9e3BlcmlvZH0gb25Gb2N1cz17aGFuZGxlUGVyaW9kRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUGVyaW9kQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Pa3Jlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFkaW9cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJzdGHFgmFSYXRhXCIgdmFsdWU9e1wic3RhxYJhUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwic3RhxYJhUmF0YVwifS8+PGxhYmVsPlJhdGEgc3RhxYJhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInptaWVubmFSYXRhXCIgdmFsdWU9e1wiem1pZW5uYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInptaWVubmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSB6bWllbm5hPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+T2JsaWN6PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2lkZXJIaXN0b3J5IHR5cGU9e1wiS3JlZHl0L3lcIn0gdXNlckRhdGE9e3VzZXJEYXRhfSBzZXRVc2VyRGF0YT17c2V0VXNlckRhdGF9IGJ0bk1pbnVzRm49e2ZpbHRlcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWRpdENhbGN1bGF0b3I7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IEhhc2hSb3V0ZXIsIFJvdXRlcywgUm91dGUsIExpbmssIE5hdkxpbmssIE91dGxldH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXQvbGF5b3V0XCI7XG5pbXBvcnQgV2VsY29tZSBmcm9tIFwiLi9Ib21lL3dlbGNvbWVcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpbi9sb2dpblwiO1xuaW1wb3J0IE1haW5BcHBsaWNhdGlvbiBmcm9tIFwiLi9NYWluL21haW5BcHBsaWNhdGlvblwiO1xuaW1wb3J0IEluZm9ybWF0aW9uIGZyb20gXCIuL0hvbWUvaW5mb3JtYXRpb25cIjtcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSBcIi4vUmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvblwiO1xuaW1wb3J0IFVzZXJEYXRhIGZyb20gXCIuL3VzZXJEYXRhL3VzZXJEYXRhXCI7XG5pbXBvcnQgQ3JlZGl0Q2FsY3VsYXRvciBmcm9tIFwiLi9NYWluL2NyZWRpdENhbGN1bGF0b3IvY3JlZGl0Q2FsY3VsYXRvclwiO1xuaW1wb3J0IEJvbmRDYWxjdWxhdG9yIGZyb20gXCIuL01haW4vYm9uZENhbGN1bGF0b3IvYm9uZENhbGN1bGF0b3JcIjtcbmltcG9ydCBMb2FuQ2FsY3VsYXRvciBmcm9tIFwiLi9NYWluL2xvYW5DYWxjdWxhdG9yL2xvYW5DYWxjdWxhdG9yXCI7XG5pbXBvcnQgRGVwb3NpdENhbGN1bGF0b3IgZnJvbSBcIi4vTWFpbi9kZXBvc2l0Q2FsY3VsYXRvci9kZXBvc2l0Q2FsY3VsYXRvclwiO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5jb25zdCBBcHBsaWNhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2Vyc0NhbGN1bGF0aW9ucywgc2V0VXNlcnNDYWxjdWxhdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHtjcmVkaXRzLCBib25kcywgZGVwb3NpdHMsIGxvYW5zfSA9IHVzZXJzQ2FsY3VsYXRpb25zO1xuXG4gICAgY29uc3QgY3JlZGl0c0ZpbHRlciA9IChpZCkgPT4ge1xuICAgICAgICBsZXQgbmV3Q3JlZGl0c0FyciA9IGNyZWRpdHMuZmlsdGVyKChlbCwgaSkgPT4ge3JldHVybiBpICE9PSBpZH0pXG4gICAgICAgIHNldFVzZXJzQ2FsY3VsYXRpb25zKHsuLi51c2Vyc0NhbGN1bGF0aW9ucywgY3JlZGl0czogbmV3Q3JlZGl0c0Fycn0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxMYXlvdXQgdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfS8+fT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9JycgZWxlbWVudD17PFdlbGNvbWUgdXNlckxvZ0luPXtsb2dnZWR9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2luZm8nIGVsZW1lbnQ9ezxJbmZvcm1hdGlvbiB1c2VyTG9nSW49e2xvZ2dlZH0vPn0vPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9naW4nIGVsZW1lbnQ9ezxMb2dpbiB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0luPXtzZXRMb2dnZWR9IGRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBjaGFuZ2luZ0RhdGE9e3NldFVzZXJzQ2FsY3VsYXRpb25zfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdyZWdpc3RyYXRpb24nIGVsZW1lbnQ9ezxSZWdpc3RyYXRpb24gdXNlckxvZ0luPXtsb2dnZWR9IHNldFVzZXJMb2dJbj17c2V0TG9nZ2VkfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdjYWxjdWxhdG9yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScnIGVsZW1lbnQ9ezxDcmVkaXRDYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9IHNldFVzZXJEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30gZmlsdGVyPXtjcmVkaXRzRmlsdGVyfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nbG9hbicgZWxlbWVudD17PExvYW5DYWxjdWxhdG9yIHVzZXJMb2dJbj17bG9nZ2VkfSB1c2VyRGF0YT17dXNlcnNDYWxjdWxhdGlvbnN9IHNldFVzZXJEYXRhPXtzZXRVc2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2RlcG9zaXQnIGVsZW1lbnQ9ezxEZXBvc2l0Q2FsY3VsYXRvciB1c2VyTG9nSW49e2xvZ2dlZH0gdXNlckRhdGE9e3VzZXJzQ2FsY3VsYXRpb25zfSBzZXRVc2VyRGF0YT17c2V0VXNlcnNDYWxjdWxhdGlvbnN9Lz59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdib25kJyBlbGVtZW50PXs8Qm9uZENhbGN1bGF0b3IgdXNlckxvZ0luPXtsb2dnZWR9IHVzZXJEYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30gc2V0VXNlckRhdGE9e3NldFVzZXJzQ2FsY3VsYXRpb25zfS8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSd1c2VyRGF0YScgZWxlbWVudD17PFVzZXJEYXRhICB1c2VyTG9nSW49e2xvZ2dlZH0gc2V0VXNlckxvZ0luPXtzZXRMb2dnZWR9IHVzZXJEYXRhPXt1c2Vyc0NhbGN1bGF0aW9uc30vPn0vPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgPC9IYXNoUm91dGVyPlxuICAgIClcbn1cblxuXG5yb290LnJlbmRlcihcbiAgICA8QXBwbGljYXRpb24vPlxuKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiYmE0NzY3MWI0YzI4YWZhNzJjZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRmFCZWVyIiwiRmFBcmNoaXZlIiwiTWRQaWVDaGFydE91dGxpbmUiLCJIaU1pbnVzU20iLCJTaWRlckxpc3RJdGVtIiwiU2lkZXJIaXN0b3J5IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInVzZXJEYXRhQ2hhcnQiLCJwcm9wcyIsInVzZXJEYXRhIiwiY3JlZGl0cyIsImJ0bkRlbGV0ZUZuIiwiaWQiLCJidG5NaW51c0ZuIiwiZGF0ZUNvbnZlcnNpb24iLCJkIiwiZGF0ZUlucHV0IiwidG9TdHJpbmciLCJzbGljZSIsInJhdGVDb252ZXJzaW9uIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJfdGhpcyRwcm9wcyIsInR5cGUiLCJzZXRVc2VyRGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJlbCIsImkiLCJkYXRhIiwiaW5kZXgiLCJidG5EZWxldGUiLCJkYXRlIiwicmF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiX3JlZiIsImFtb3VudCIsInBlcmlvZCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJvbkNsaWNrIiwiTmF2aWdhdGlvbiIsIkNyZWRpdENhbGN1bGF0b3IiLCJ1c2VyTG9nSW4iLCJmaWx0ZXIiLCJpbnB1dFN0eWxpbmciLCJkaXNwbGF5IiwicG9zaXRpb24iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJkaXNwbGF5U2hvd0NhbGMiLCJzZXREaXNwbGF5U2hvd0NhbGMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic2V0UmF0ZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic2V0UGVyaW9kIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwiY3JlZGl0VHlwZSIsInNldENyZWRpdFR5cGUiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiaXNTZW50Iiwic2V0SXNTZW50IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInVzZXJEYXRhQmFzZSIsInNldFVzZXJEYXRhQmFzZSIsIm5hbWUiLCJsb2FucyIsImRlcG9zaXRzIiwiYm9uZHMiLCJoYW5kbGVSYWRpb0NoYW5nZSIsImUiLCJ0YXJnZXQiLCJoYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwibmV3Q3JlZGl0IiwiRGF0ZSIsImNyZWRpdFBlcmlvZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVkaXRzQXJyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHJldiIsIl9vYmplY3RTcHJlYWQiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsIm9uRm9jdXMiLCJoYW5kbGVBbW91bnRGb2N1cyIsIm9uQ2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlQW1vdW50Qmx1ciIsImhhbmRsZVJhdGVGb2N1cyIsImhhbmRsZVJhdGVDaGFuZ2UiLCJoYW5kbGVSYXRlQmx1ciIsImhhbmRsZVBlcmlvZEZvY3VzIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwiaGFuZGxlUGVyaW9kQmx1ciIsImNoZWNrZWQiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJMYXlvdXQiLCJXZWxjb21lIiwiTG9naW4iLCJNYWluQXBwbGljYXRpb24iLCJJbmZvcm1hdGlvbiIsIlJlZ2lzdHJhdGlvbiIsIlVzZXJEYXRhIiwiQm9uZENhbGN1bGF0b3IiLCJMb2FuQ2FsY3VsYXRvciIsIkRlcG9zaXRDYWxjdWxhdG9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJBcHBsaWNhdGlvbiIsImxvZ2dlZCIsInNldExvZ2dlZCIsInVzZXJzQ2FsY3VsYXRpb25zIiwic2V0VXNlcnNDYWxjdWxhdGlvbnMiLCJwYXRoIiwiZWxlbWVudCIsInNldFVzZXJMb2dJbiIsImNoYW5naW5nRGF0YSIsImNyZWRpdHNGaWx0ZXIiLCJuZXdDcmVkaXRzQXJyIl0sInNvdXJjZVJvb3QiOiIifQ==