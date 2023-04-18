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
      // this.props.setCreditInfo()
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

  //TODO
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
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState16 = _slicedToArray(_useState15, 2),
    paymentArr = _useState16[0],
    setPaymentArr = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState18 = _slicedToArray(_useState17, 2),
    paymentArrPages = _useState18[0],
    setPaymentArrPages = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState20 = _slicedToArray(_useState19, 2),
    whichPage = _useState20[0],
    setWhichPage = _useState20[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calculatorMainContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), displayShowCalc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mainCalculator creditCalculatorCalculationsDisplay"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: {
      margin: "1rem 0 0 0"
    }
  }, "Twoje obliczenia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "creditCalculatorCalculationsDisplay-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      color: "#9E107F",
      borderBottom: "3px double #9E107F"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "RATA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "KAPITA\u0141"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "ODSETKI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "WP\u0141ATA")), paymentArr.filter(function (el, i) {
    return i > (whichPage - 1) * 10 && i <= whichPage * 10;
  }).map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: i,
      style: {
        borderBottom: "1px solid #9E107F",
        display: "flex",
        justifyContent: "space-between",
        color: "#9E107F"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "nr ", i + 1 + (whichPage - 1) * 10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, el.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, el.interests), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, el.payment));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "buttonPrev",
    onClick: function handlePreviousPage() {
      setWhichPage(function (prev) {
        return prev > 1 ? prev - 1 : 1;
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: "#9E107F",
      fontSize: "0.8rem"
    }
  }, whichPage, " strona z ", paymentArrPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "buttonNext",
    onClick: function handleNextPage() {
      setWhichPage(function (prev) {
        return prev < paymentArrPages ? prev + 1 : paymentArrPages;
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "creditCalculator-btnBackToCalculations",
    onClick: function handleBackToCalculations() {
      setDisplayShowCalc(false);
      setPaymentArr(undefined);
      setPaymentArrPages(undefined);
      setAmount("Wpisz kwotę kredytu");
      setRate("Wpisz wysokość odsetek");
      setPeriod("Wpisz okres kredytu w latach");
      setCreditType("stałaRata");
      setWhichPage(1);
    }
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
    onClick: function handleClick(e) {
      e.preventDefault();
      var newCredit = {
        date: new Date(),
        amount: amount,
        rate: rate,
        creditPeriod: period
      };
      var arr = [];
      for (var i = 0; i < newCredit.creditPeriod * 12; i++) {
        arr.push({
          amount: +amount,
          interests: +amount * +rate,
          payment: +amount + +amount * +rate
        });
      }
      setPaymentArr(arr);
      var pages = Math.ceil(newCredit.creditPeriod * 12 / 10);
      setPaymentArrPages(pages);
      console.log(newCredit);
      var creditsArr = [].concat(_toConsumableArray(credits), [newCredit]);
      setUserData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          credits: creditsArr
        });
      });
      setUserDataBase(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          credits: creditsArr
        });
      });
      setDisplayShowCalc(true);
    }
  }, "Oblicz")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_sider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "Kredyt/y",
    userData: userData,
    setUserData: setUserData,
    setCreditInfo: setUserDataBase,
    btnMinusFn: filter
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f07d8bafb222c8945d8d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMjllNDg2OTVjNGZkY2JmZGU0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1U7QUFDRDtBQUNSO0FBQ0U7QUFBQSxJQUV0Q08sWUFBWSwwQkFBQUMsVUFBQTtFQUFBQyxTQUFBLENBQUFGLFlBQUEsRUFBQUMsVUFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixZQUFBO0VBQUEsU0FBQUEsYUFBQTtJQUFBLElBQUFLLEtBQUE7SUFBQUMsZUFBQSxPQUFBTixZQUFBO0lBQUEsU0FBQU8sSUFBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsRUFBQUMsSUFBQSxPQUFBQyxLQUFBLENBQUFKLElBQUEsR0FBQUssSUFBQSxNQUFBQSxJQUFBLEdBQUFMLElBQUEsRUFBQUssSUFBQTtNQUFBRixJQUFBLENBQUFFLElBQUEsSUFBQUosU0FBQSxDQUFBSSxJQUFBO0lBQUE7SUFBQVAsS0FBQSxHQUFBRixNQUFBLENBQUFVLElBQUEsQ0FBQUMsS0FBQSxDQUFBWCxNQUFBLFNBQUFZLE1BQUEsQ0FBQUwsSUFBQTtJQUFBTCxLQUFBLENBRWRXLEtBQUssR0FBRztNQUNKQyxhQUFhLEVBQUVaLEtBQUEsQ0FBS2EsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ1gsTUFBTSxHQUFHLENBQUMsR0FBR0osS0FBQSxDQUFLYSxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFFLGFBQWE7TUFDckdDLFNBQVMsRUFBRWhCLEtBQUEsQ0FBS2EsS0FBSyxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ1gsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUc7SUFDakUsQ0FBQztJQUFBSixLQUFBLENBRURpQixXQUFXLEdBQUcsVUFBQ0MsRUFBRSxFQUFLO01BQ2xCO01BQ0E7TUFDQWxCLEtBQUEsQ0FBS2EsS0FBSyxDQUFDTSxVQUFVLENBQUNELEVBQUUsQ0FBQztJQUM3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aUk7UUFBVTtNQUFBLENBQUUsQ0FBQztNQUN2RC9ELGVBQWUsQ0FBQyxVQUFDZ0MsSUFBSTtRQUFBLE9BQUFpQyxhQUFBLENBQUFBLGFBQUEsS0FBVWpDLElBQUk7VUFBRWxHLE9BQU8sRUFBRWlJO1FBQVU7TUFBQSxDQUFFLENBQUM7TUFFM0R0RixrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFDNUI7RUEyRTZGLEdBQUMsUUFBTSxDQUFTLENBQ2xGLENBQ0wsQ0FHUixlQUNOdEUsMERBQUEsQ0FBQ08seUVBQVk7SUFBQ3FDLElBQUksRUFBRSxVQUFXO0lBQUNsQixRQUFRLEVBQUVBLFFBQVM7SUFBQ21CLFdBQVcsRUFBRUEsV0FBWTtJQUFDa0gsYUFBYSxFQUFFbEUsZUFBZ0I7SUFBQzlELFVBQVUsRUFBRThCO0VBQU8sRUFBRSxDQUNqSTtBQUVkLENBQUM7QUFFRCwrREFBZUgsZ0JBQWdCOzs7Ozs7OztVQy9LL0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvc2lkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYUJlZXIsIEZhQXJjaGl2ZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IE1kUGllQ2hhcnRPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCB7IEhpTWludXNTbSB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiXG5pbXBvcnQgU2lkZXJMaXN0SXRlbSBmcm9tIFwiLi9zaWRlckxpc3RJdGVtXCI7XG5cbmNsYXNzIFNpZGVySGlzdG9yeSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdXNlckRhdGFDaGFydDogdGhpcy5wcm9wcy51c2VyRGF0YS5jcmVkaXRzLmxlbmd0aCA+IDAgPyB0aGlzLnByb3BzLnVzZXJEYXRhLmNyZWRpdHNbMF06IFwiYnJhayBkYW55Y2hcIixcbiAgICAgICAgaXNBbnlEYXRhOiB0aGlzLnByb3BzLnVzZXJEYXRhLmNyZWRpdHMubGVuZ3RoID4gMCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgfTtcblxuICAgIGJ0bkRlbGV0ZUZuID0gKGlkKSA9PiB7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvLyB0aGlzLnByb3BzLnNldENyZWRpdEluZm8oKVxuICAgICAgICB0aGlzLnByb3BzLmJ0bk1pbnVzRm4oaWQpO1xuICAgIH1cblxuICAgIGRhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IGRhdGVJbnB1dDtcbiAgICAgICAgZGF0ZUlucHV0ID0gZC50b1N0cmluZygpLnNsaWNlKDAsMTApO1xuICAgICAgICByZXR1cm4gZGF0ZUlucHV0O1xuICAgIH1cblxuICAgIHJhdGVDb252ZXJzaW9uID0gKGQpID0+IHtcbiAgICAgICAgbGV0IHJhdGVJbnB1dCA9ICtkICogMTAwO1xuICAgICAgICByZXR1cm4gYCR7cmF0ZUlucHV0fSVgO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3R5cGUsIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVyXCJ9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LXRpdGxlIG1haW5Db2xvclwifT5Ud29qZSBvYmxpY3plbmlhPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNOYW1lIGNvbnRyYXN0Q29sb3JcIn0+e3R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNMaXN0XCJ9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlckRhdGEuY3JlZGl0cy5tYXAoKGVsLCBpKSA9PiA8U2lkZXJMaXN0SXRlbSBrZXk9e2l9IGRhdGE9e2VsfSBpbmRleD17aX0gYnRuRGVsZXRlPXt0aGlzLmJ0bkRlbGV0ZUZufS8+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LXRpdGxlIG1haW5Db2xvclwifT57dGhpcy5zdGF0ZS5pc0FueURhdGEgPT09IFwidHJ1ZVwiID8gdGhpcy5kYXRlQ29udmVyc2lvbih0aGlzLnN0YXRlLnVzZXJEYXRhQ2hhcnQuZGF0ZSkgOiBcIkJyYWsgZGFueWNoXCIgfSB8IHt0aGlzLnN0YXRlLmlzQW55RGF0YSA9PT0gXCJ0cnVlXCIgPyB0aGlzLnJhdGVDb252ZXJzaW9uKHRoaXMuc3RhdGUudXNlckRhdGFDaGFydC5yYXRlKSA6IFwiLS0tXCJ9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnRcIn0+PHNwYW4gY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY3JlZGl0XCJ9PktyZWR5dDxici8+NjUlPC9zcGFuPjxkaXYgY2xhc3NOYW1lPXtcInNpZGVySGlzdG9yeS1jYWxjQ2hhcnQtY2hhcnQyXCJ9PjwvZGl2PjxzcGFuIGNsYXNzTmFtZT17XCJzaWRlckhpc3RvcnktY2FsY0NoYXJ0LWludGVyZXN0c1wifT5PZHNldGtpPGJyLz4zNSU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZXJIaXN0b3J5LWNhbGNDaGFydC1ib3R0b21MaW5lXCJ9PjwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZXJIaXN0b3J5OyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlclwiO1xuXG5jb25zdCBDcmVkaXRDYWxjdWxhdG9yID0gKHt1c2VyTG9nSW4sIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSwgZmlsdGVyfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0U3R5bGluZyA9IHtkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9O1xuICAgIGNvbnN0IFtkaXNwbGF5U2hvd0NhbGMsIHNldERpc3BsYXlTaG93Q2FsY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIGNvbnN0IFtjcmVkaXRUeXBlLCBzZXRDcmVkaXRUeXBlXSA9IHVzZVN0YXRlKFwic3RhxYJhUmF0YVwiKTtcbiAgICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLy9UT0RPXG4gICAgY29uc3QgW3VzZXJEYXRhQmFzZSwgc2V0VXNlckRhdGFCYXNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcblxuICAgIGNvbnN0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YUJhc2U7XG5cbiAgICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENyZWRpdFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIgJiYgc2V0QW1vdW50KFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0QW1vdW50KFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIgJiYgc2V0UmF0ZShcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UmF0ZShlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFJhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIgJiYgc2V0UGVyaW9kKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGVyaW9kKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBbcGF5bWVudEFyciwgc2V0UGF5bWVudEFycl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtwYXltZW50QXJyUGFnZXMsIHNldFBheW1lbnRBcnJQYWdlc10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFt3aGljaFBhZ2UsIHNldFdoaWNoUGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBuZXdDcmVkaXQgPSB7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICByYXRlOiByYXRlLFxuICAgICAgICAgICAgY3JlZGl0UGVyaW9kOiBwZXJpb2RcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3Q3JlZGl0LmNyZWRpdFBlcmlvZCoxMjsgaSsrICkge1xuICAgICAgICAgICAgYXJyLnB1c2goe2Ftb3VudDogK2Ftb3VudCwgaW50ZXJlc3RzOiArYW1vdW50ICogK3JhdGUsIHBheW1lbnQ6ICthbW91bnQgKyAoK2Ftb3VudCAqICtyYXRlKSB9KVxuICAgICAgICB9XG4gICAgICAgIHNldFBheW1lbnRBcnIoYXJyKTtcblxuICAgICAgICBsZXQgcGFnZXMgPSBNYXRoLmNlaWwoKG5ld0NyZWRpdC5jcmVkaXRQZXJpb2QgKiAxMikvMTApO1xuICAgICAgICBzZXRQYXltZW50QXJyUGFnZXMocGFnZXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NyZWRpdCk7XG4gICAgICAgIGxldCBjcmVkaXRzQXJyID0gWy4uLmNyZWRpdHMsIG5ld0NyZWRpdF07XG5cbiAgICAgICAgc2V0VXNlckRhdGEoKHByZXYpID0+ICh7Li4ucHJldiwgY3JlZGl0czogY3JlZGl0c0Fycn0pKTtcbiAgICAgICAgc2V0VXNlckRhdGFCYXNlKChwcmV2KSA9PiAoey4uLnByZXYsIGNyZWRpdHM6IGNyZWRpdHNBcnJ9KSlcblxuICAgICAgICBzZXREaXNwbGF5U2hvd0NhbGModHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFdoaWNoUGFnZSgocHJldik9PiBwcmV2IDwgcGF5bWVudEFyclBhZ2VzID8gcHJldiArIDEgOiBwYXltZW50QXJyUGFnZXMpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4ge1xuICAgICAgICBzZXRXaGljaFBhZ2UoKHByZXYpPT4gcHJldiA+IDEgPyBwcmV2IC0gMSA6IDEpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQmFja1RvQ2FsY3VsYXRpb25zID0gKCkgPT4ge1xuICAgICAgICBzZXREaXNwbGF5U2hvd0NhbGMoZmFsc2UpO1xuICAgICAgICBzZXRQYXltZW50QXJyKHVuZGVmaW5lZCk7XG4gICAgICAgIHNldFBheW1lbnRBcnJQYWdlcyh1bmRlZmluZWQpO1xuICAgICAgICBzZXRBbW91bnQoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICAgICAgc2V0UmF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICAgICAgc2V0UGVyaW9kKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICAgICAgc2V0Q3JlZGl0VHlwZShcInN0YcWCYVJhdGFcIik7XG4gICAgICAgIHNldFdoaWNoUGFnZSgxKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvck1haW5Db250YWluZXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlTaG93Q2FsYyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNhbGN1bGF0b3IgY3JlZGl0Q2FsY3VsYXRvckNhbGN1bGF0aW9uc0Rpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e21hcmdpbjogXCIxcmVtIDAgMCAwXCJ9fT5Ud29qZSBvYmxpY3plbmlhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNyZWRpdENhbGN1bGF0b3JDYWxjdWxhdGlvbnNEaXNwbGF5LWxpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBnYXA6IFwiMjBweFwiLCBjb2xvcjogXCIjOUUxMDdGXCIsIGJvcmRlckJvdHRvbTogXCIzcHggZG91YmxlICM5RTEwN0ZcIn19PjxzcGFuPlJBVEE8L3NwYW4+PHNwYW4+S0FQSVRBxYE8L3NwYW4+PHNwYW4+T0RTRVRLSTwvc3Bhbj48c3Bhbj5XUMWBQVRBPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF5bWVudEFyclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCwgaSkgPT4gaSA+ICh3aGljaFBhZ2UgLSAxKSAqIDEwICYmIGkgPD0gd2hpY2hQYWdlICogMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsLCBpKSA9PiA8cCBrZXk9e2l9IHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjOUUxMDdGXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGNvbG9yOiBcIiM5RTEwN0ZcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bnIgeyhpICsgMSkgKyAoKHdoaWNoUGFnZSAtIDEpKjEwKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuYW1vdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5pbnRlcmVzdHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLnBheW1lbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImJ1dHRvblByZXZcIn0gb25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIiM5RTEwN0ZcIiwgZm9udFNpemU6IFwiMC44cmVtXCJ9fT57d2hpY2hQYWdlfSBzdHJvbmEgeiB7cGF5bWVudEFyclBhZ2VzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IGNsYXNzTmFtZT17XCJidXR0b25OZXh0XCJ9IG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfT48L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImNyZWRpdENhbGN1bGF0b3ItYnRuQmFja1RvQ2FsY3VsYXRpb25zXCJ9IG9uQ2xpY2s9e2hhbmRsZUJhY2tUb0NhbGN1bGF0aW9uc30+UG93csOzdCBkbyBvYmxpY3plxYQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk9ibGljeiByYXR5IGtyZWR5dHU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXthbW91bnR9IG9uRm9jdXM9e2hhbmRsZUFtb3VudEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfSBvbkJsdXI9e2hhbmRsZUFtb3VudEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+UExOPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJyYXRlXCJ9IHZhbHVlPXtyYXRlfSBvbkZvY3VzPXtoYW5kbGVSYXRlRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVSYXRlQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVJhdGVCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PiU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInBlcmlvZFwifSB2YWx1ZT17cGVyaW9kfSBvbkZvY3VzPXtoYW5kbGVQZXJpb2RGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVBlcmlvZENoYW5nZX0gb25CbHVyPXtoYW5kbGVQZXJpb2RCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pk9rcmVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWRpb1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInN0YcWCYVJhdGFcIiB2YWx1ZT17XCJzdGHFgmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJzdGHFgmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSBzdGHFgmE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwiem1pZW5uYVJhdGFcIiB2YWx1ZT17XCJ6bWllbm5hUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwiem1pZW5uYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHptaWVubmE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5PYmxpY3o8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTaWRlckhpc3RvcnkgdHlwZT17XCJLcmVkeXQveVwifSB1c2VyRGF0YT17dXNlckRhdGF9IHNldFVzZXJEYXRhPXtzZXRVc2VyRGF0YX0gc2V0Q3JlZGl0SW5mbz17c2V0VXNlckRhdGFCYXNlfSBidG5NaW51c0ZuPXtmaWx0ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJmMDdkOGJhZmIyMjJjODk0NWQ4ZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRmFCZWVyIiwiRmFBcmNoaXZlIiwiTWRQaWVDaGFydE91dGxpbmUiLCJIaU1pbnVzU20iLCJTaWRlckxpc3RJdGVtIiwiU2lkZXJIaXN0b3J5IiwiX0NvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInVzZXJEYXRhQ2hhcnQiLCJwcm9wcyIsInVzZXJEYXRhIiwiY3JlZGl0cyIsImlzQW55RGF0YSIsImJ0bkRlbGV0ZUZuIiwiaWQiLCJidG5NaW51c0ZuIiwiZGF0ZUNvbnZlcnNpb24iLCJkIiwiZGF0ZUlucHV0IiwidG9TdHJpbmciLCJzbGljZSIsInJhdGVDb252ZXJzaW9uIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJfdGhpczIiLCJfdGhpcyRwcm9wcyIsInR5cGUiLCJzZXRVc2VyRGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtYXAiLCJlbCIsImkiLCJkYXRhIiwiaW5kZXgiLCJidG5EZWxldGUiLCJkYXRlIiwicmF0ZSIsInVzZVN0YXRlIiwiTmF2aWdhdGlvbiIsIkNyZWRpdENhbGN1bGF0b3IiLCJfcmVmIiwidXNlckxvZ0luIiwiZmlsdGVyIiwiaW5wdXRTdHlsaW5nIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJkaXNwbGF5U2hvd0NhbGMiLCJzZXREaXNwbGF5U2hvd0NhbGMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic2V0UmF0ZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwicGVyaW9kIiwic2V0UGVyaW9kIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwiY3JlZGl0VHlwZSIsInNldENyZWRpdFR5cGUiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiaXNTZW50Iiwic2V0SXNTZW50IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInVzZXJEYXRhQmFzZSIsInNldFVzZXJEYXRhQmFzZSIsIm5hbWUiLCJsb2FucyIsImRlcG9zaXRzIiwiYm9uZHMiLCJoYW5kbGVSYWRpb0NoYW5nZSIsImUiLCJ0YXJnZXQiLCJfdXNlU3RhdGUxNSIsInVuZGVmaW5lZCIsIl91c2VTdGF0ZTE2IiwicGF5bWVudEFyciIsInNldFBheW1lbnRBcnIiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwicGF5bWVudEFyclBhZ2VzIiwic2V0UGF5bWVudEFyclBhZ2VzIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsIndoaWNoUGFnZSIsInNldFdoaWNoUGFnZSIsInN0eWxlIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJjb2xvciIsImJvcmRlckJvdHRvbSIsImludGVyZXN0cyIsInBheW1lbnQiLCJhbGlnbkl0ZW1zIiwib25DbGljayIsImhhbmRsZVByZXZpb3VzUGFnZSIsInByZXYiLCJmb250U2l6ZSIsImhhbmRsZU5leHRQYWdlIiwiaGFuZGxlQmFja1RvQ2FsY3VsYXRpb25zIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uRm9jdXMiLCJoYW5kbGVBbW91bnRGb2N1cyIsIm9uQ2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlQW1vdW50Qmx1ciIsImhhbmRsZVJhdGVGb2N1cyIsImhhbmRsZVJhdGVDaGFuZ2UiLCJoYW5kbGVSYXRlQmx1ciIsImhhbmRsZVBlcmlvZEZvY3VzIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwiaGFuZGxlUGVyaW9kQmx1ciIsImNoZWNrZWQiLCJoYW5kbGVDbGljayIsIm5ld0NyZWRpdCIsIkRhdGUiLCJjcmVkaXRQZXJpb2QiLCJhcnIiLCJwdXNoIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsImNvbnNvbGUiLCJsb2ciLCJjcmVkaXRzQXJyIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX29iamVjdFNwcmVhZCIsInNldENyZWRpdEluZm8iXSwic291cmNlUm9vdCI6IiJ9