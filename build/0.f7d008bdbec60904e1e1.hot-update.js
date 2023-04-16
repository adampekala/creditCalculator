"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 61:
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



// import SiderHistory from "../Sider/sider";

var DepositCalculator = function (_ref) {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Oblicz depozyt"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
/* harmony default export */ __webpack_exports__["default"] = (DepositCalculator);

/***/ }),

/***/ 60:
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



var LoanCalculator = function (_ref) {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Oblicz po\u017Cyczk\u0119"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
/* harmony default export */ __webpack_exports__["default"] = (LoanCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c194d0e9ec695c8786a9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztJQUFDRCxTQUFTLEVBQUUsV0FBWTtJQUFDRSxPQUFPLEVBQUVoQjtFQUFZLEdBQUMsUUFBTSxDQUFTLENBQ2xGLENBQ0wsQ0FHUixlQUNOckQsMERBQUEsQ0FBQ0cseUVBQVk7SUFBQ2lFLElBQUksRUFBRSxVQUFXO0lBQUM3RCxRQUFRLEVBQUVBLFFBQVM7SUFBQ0MsV0FBVyxFQUFFQSxXQUFZO0lBQUM4RSxVQUFVLEVBQUU3RTtFQUFPLEVBQUUsQ0FDakc7QUFFZCxDQUFDO0FBRUQsK0RBQWU4RSxjQUFjOzs7Ozs7OztVQ3hIN0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vZGVwb3NpdENhbGN1bGF0b3IvZGVwb3NpdENhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vbG9hbkNhbGN1bGF0b3IvbG9hbkNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBTaWRlckhpc3RvcnkgZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyXCI7XG4vLyBpbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9TaWRlci9zaWRlclwiO1xuXG5jb25zdCBEZXBvc2l0Q2FsY3VsYXRvciA9ICh7dXNlckxvZ0luLCB1c2VyRGF0YSwgc2V0VXNlckRhdGEsIGZpbHRlcn0pID0+IHtcbiAgICBjb25zdCBpbnB1dFN0eWxpbmcgPSB7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifTtcbiAgICBjb25zdCBbZGlzcGxheVNob3dDYWxjLCBzZXREaXNwbGF5U2hvd0NhbGNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCI7XG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICBjb25zdCBbY3JlZGl0VHlwZSwgc2V0Q3JlZGl0VHlwZV0gPSB1c2VTdGF0ZShcInN0YcWCYVJhdGFcIik7XG4gICAgY29uc3QgW2lzU2VudCwgc2V0SXNTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlckRhdGFCYXNlLCBzZXRVc2VyRGF0YUJhc2VdID0gdXNlU3RhdGUodXNlckRhdGEpO1xuXG4gICAgY29uc3Qge2lkLCBuYW1lLCBjcmVkaXRzLCBsb2FucywgZGVwb3NpdHMsIGJvbmRzfSA9IHVzZXJEYXRhQmFzZTtcblxuICAgIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Q3JlZGl0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIiAmJiBzZXRBbW91bnQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRBbW91bnQoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIiAmJiBzZXRSYXRlKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRSYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UmF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIiAmJiBzZXRQZXJpb2QoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRQZXJpb2QoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBuZXdDcmVkaXQgPSB7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICByYXRlOiByYXRlLFxuICAgICAgICAgICAgY3JlZGl0UGVyaW9kOiBwZXJpb2RcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q3JlZGl0KTtcbiAgICAgICAgbGV0IGNyZWRpdHNBcnIgPSBbLi4uY3JlZGl0cywgbmV3Q3JlZGl0XTtcblxuICAgICAgICBzZXRVc2VyRGF0YSgocHJldikgPT4gKHsuLi5wcmV2LCBjcmVkaXRzOiBjcmVkaXRzQXJyfSkpO1xuXG4gICAgICAgIHNldERpc3BsYXlTaG93Q2FsYyh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvck1haW5Db250YWluZXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlTaG93Q2FsYyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNhbGN1bGF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ud29qZSBvYmxpY3plbmlhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhYmVsYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+UG93csOzdCBkbyBvYmxpY3plxYQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk9ibGljeiBkZXBvenl0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17YW1vdW50fSBvbkZvY3VzPXtoYW5kbGVBbW91bnRGb2N1c30gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PlBMTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicmF0ZVwifSB2YWx1ZT17cmF0ZX0gb25Gb2N1cz17aGFuZGxlUmF0ZUZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUmF0ZUNoYW5nZX0gb25CbHVyPXtoYW5kbGVSYXRlQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT4lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJwZXJpb2RcIn0gdmFsdWU9e3BlcmlvZH0gb25Gb2N1cz17aGFuZGxlUGVyaW9kRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUGVyaW9kQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Pa3Jlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFkaW9cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJzdGHFgmFSYXRhXCIgdmFsdWU9e1wic3RhxYJhUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwic3RhxYJhUmF0YVwifS8+PGxhYmVsPlJhdGEgc3RhxYJhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInptaWVubmFSYXRhXCIgdmFsdWU9e1wiem1pZW5uYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInptaWVubmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSB6bWllbm5hPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+T2JsaWN6PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2lkZXJIaXN0b3J5IHR5cGU9e1wiS3JlZHl0L3lcIn0gdXNlckRhdGE9e3VzZXJEYXRhfSBzZXRVc2VyRGF0YT17c2V0VXNlckRhdGF9IGJ0bk1pbnVzRm49e2ZpbHRlcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlcG9zaXRDYWxjdWxhdG9yOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlclwiO1xuXG5jb25zdCBMb2FuQ2FsY3VsYXRvciA9ICh7dXNlckxvZ0luLCB1c2VyRGF0YSwgc2V0VXNlckRhdGEsIGZpbHRlcn0pID0+IHtcbiAgICBjb25zdCBpbnB1dFN0eWxpbmcgPSB7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifTtcbiAgICBjb25zdCBbZGlzcGxheVNob3dDYWxjLCBzZXREaXNwbGF5U2hvd0NhbGNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCI7XG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICBjb25zdCBbY3JlZGl0VHlwZSwgc2V0Q3JlZGl0VHlwZV0gPSB1c2VTdGF0ZShcInN0YcWCYVJhdGFcIik7XG4gICAgY29uc3QgW2lzU2VudCwgc2V0SXNTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlckRhdGFCYXNlLCBzZXRVc2VyRGF0YUJhc2VdID0gdXNlU3RhdGUodXNlckRhdGEpO1xuXG4gICAgY29uc3Qge2lkLCBuYW1lLCBjcmVkaXRzLCBsb2FucywgZGVwb3NpdHMsIGJvbmRzfSA9IHVzZXJEYXRhQmFzZTtcblxuICAgIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Q3JlZGl0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIiAmJiBzZXRBbW91bnQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRBbW91bnQoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIiAmJiBzZXRSYXRlKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRSYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UmF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIiAmJiBzZXRQZXJpb2QoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRQZXJpb2QoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBuZXdDcmVkaXQgPSB7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICByYXRlOiByYXRlLFxuICAgICAgICAgICAgY3JlZGl0UGVyaW9kOiBwZXJpb2RcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q3JlZGl0KTtcbiAgICAgICAgbGV0IGNyZWRpdHNBcnIgPSBbLi4uY3JlZGl0cywgbmV3Q3JlZGl0XTtcblxuICAgICAgICBzZXRVc2VyRGF0YSgocHJldikgPT4gKHsuLi5wcmV2LCBjcmVkaXRzOiBjcmVkaXRzQXJyfSkpO1xuXG4gICAgICAgIHNldERpc3BsYXlTaG93Q2FsYyh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvck1haW5Db250YWluZXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlTaG93Q2FsYyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNhbGN1bGF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ud29qZSBvYmxpY3plbmlhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRhYmVsYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+UG93csOzdCBkbyBvYmxpY3plxYQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk9ibGljeiBwb8W8eWN6a8SZPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17YW1vdW50fSBvbkZvY3VzPXtoYW5kbGVBbW91bnRGb2N1c30gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PlBMTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicmF0ZVwifSB2YWx1ZT17cmF0ZX0gb25Gb2N1cz17aGFuZGxlUmF0ZUZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUmF0ZUNoYW5nZX0gb25CbHVyPXtoYW5kbGVSYXRlQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT4lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJwZXJpb2RcIn0gdmFsdWU9e3BlcmlvZH0gb25Gb2N1cz17aGFuZGxlUGVyaW9kRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUGVyaW9kQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Pa3Jlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFkaW9cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJzdGHFgmFSYXRhXCIgdmFsdWU9e1wic3RhxYJhUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwic3RhxYJhUmF0YVwifS8+PGxhYmVsPlJhdGEgc3RhxYJhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInptaWVubmFSYXRhXCIgdmFsdWU9e1wiem1pZW5uYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInptaWVubmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSB6bWllbm5hPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+T2JsaWN6PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2lkZXJIaXN0b3J5IHR5cGU9e1wiS3JlZHl0L3lcIn0gdXNlckRhdGE9e3VzZXJEYXRhfSBzZXRVc2VyRGF0YT17c2V0VXNlckRhdGF9IGJ0bk1pbnVzRm49e2ZpbHRlcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYW5DYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJjMTk0ZDBlOWVjNjk1Yzg3ODZhOVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiU2lkZXJIaXN0b3J5IiwiRGVwb3NpdENhbGN1bGF0b3IiLCJfcmVmIiwidXNlckxvZ0luIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImZpbHRlciIsImlucHV0U3R5bGluZyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGlzcGxheVNob3dDYWxjIiwic2V0RGlzcGxheVNob3dDYWxjIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwZXJpb2QiLCJzZXRQZXJpb2QiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJjcmVkaXRUeXBlIiwic2V0Q3JlZGl0VHlwZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwidXNlckRhdGFCYXNlIiwic2V0VXNlckRhdGFCYXNlIiwiaWQiLCJuYW1lIiwiY3JlZGl0cyIsImxvYW5zIiwiZGVwb3NpdHMiLCJib25kcyIsImhhbmRsZVJhZGlvQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NyZWRpdCIsImRhdGUiLCJEYXRlIiwiY3JlZGl0UGVyaW9kIiwiY29uc29sZSIsImxvZyIsImNyZWRpdHNBcnIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwcmV2IiwiX29iamVjdFNwcmVhZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0Iiwic3R5bGUiLCJvbkZvY3VzIiwiaGFuZGxlQW1vdW50Rm9jdXMiLCJvbkNoYW5nZSIsImhhbmRsZUFtb3VudENoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUFtb3VudEJsdXIiLCJoYW5kbGVSYXRlRm9jdXMiLCJoYW5kbGVSYXRlQ2hhbmdlIiwiaGFuZGxlUmF0ZUJsdXIiLCJoYW5kbGVQZXJpb2RGb2N1cyIsImhhbmRsZVBlcmlvZENoYW5nZSIsImhhbmRsZVBlcmlvZEJsdXIiLCJjaGVja2VkIiwiYnRuTWludXNGbiIsIkxvYW5DYWxjdWxhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==