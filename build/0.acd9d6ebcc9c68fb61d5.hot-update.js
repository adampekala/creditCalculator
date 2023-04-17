"use strict";
self["webpackHotUpdatewebpack"](0,{

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
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
    _useState16 = _slicedToArray(_useState15, 2),
    paymentRate = _useState16[0],
    setPaymentRate = _useState16[1];
  var handleClick = function (e) {
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
    setPaymentRate(arr);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Twoje obliczenia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "KAPITA\u0141"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "ODSETKI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "P\u0141ATNO\u015A\u0107")), paymentRate.filter(function (el, i) {
    return i < 10;
  }).map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: i
    }, el.amount, " ", el.interests, " ", el.payment);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4c505a01bcfdc8f0669d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hY2Q5ZDZlYmNjOWM2OGZiNjFkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUM0QjtBQUNIO0FBRS9ELElBQU1JLGdCQUFnQixHQUFHLFNBQUFBLENBQUFDLElBQUEsRUFBZ0Q7RUFBQSxJQUE5Q0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7SUFBRUMsV0FBVyxHQUFBSCxJQUFBLENBQVhHLFdBQVc7SUFBRUMsTUFBTSxHQUFBSixJQUFBLENBQU5JLE1BQU07RUFDL0QsSUFBTUMsWUFBWSxHQUFHO0lBQUNDLE9BQU8sRUFBRSxPQUFPO0lBQUVDLFFBQVEsRUFBRSxVQUFVO0lBQUVDLEtBQUssRUFBRTtFQUFPLENBQUM7RUFDN0UsSUFBQUMsU0FBQSxHQUE4Q2IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdERHLGVBQWUsR0FBQUYsVUFBQTtJQUFFRyxrQkFBa0IsR0FBQUgsVUFBQTtFQUUxQyxJQUFBSSxVQUFBLEdBQTRCbEIsK0NBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUFBbUIsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUF3QnRCLCtDQUFRLENBQUMsd0JBQXdCLENBQUM7SUFBQXVCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5ERSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEIxQiwrQ0FBUSxDQUFDLDhCQUE4QixDQUFDO0lBQUEyQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUE3REUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN4QixJQUFBRyxVQUFBLEdBQW9DOUIsK0NBQVEsQ0FBQyxXQUFXLENBQUM7SUFBQStCLFdBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUFsREUsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFBRyxXQUFBLEdBQTRCbEMsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQW1DLFdBQUEsR0FBQXBCLGNBQUEsQ0FBQW1CLFdBQUE7SUFBcENFLE1BQU0sR0FBQUQsV0FBQTtJQUFFRSxTQUFTLEdBQUFGLFdBQUE7RUFDeEIsSUFBQUcsV0FBQSxHQUF3Q3RDLCtDQUFRLENBQUNNLFFBQVEsQ0FBQztJQUFBaUMsV0FBQSxHQUFBeEIsY0FBQSxDQUFBdUIsV0FBQTtJQUFuREUsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUVwQyxJQUFPRyxFQUFFLEdBQTJDRixZQUFZLENBQXpERSxFQUFFO0lBQUVDLElBQUksR0FBcUNILFlBQVksQ0FBckRHLElBQUk7SUFBRUMsT0FBTyxHQUE0QkosWUFBWSxDQUEvQ0ksT0FBTztJQUFFQyxLQUFLLEdBQXFCTCxZQUFZLENBQXRDSyxLQUFLO0lBQUVDLFFBQVEsR0FBV04sWUFBWSxDQUEvQk0sUUFBUTtJQUFFQyxLQUFLLEdBQUlQLFlBQVksQ0FBckJPLEtBQUs7RUFFaEQsSUFBTUMsaUJBQWlCLEdBQUcsU0FBQUEsQ0FBQ0MsQ0FBQyxFQUFLO0lBQzdCaEIsYUFBYSxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNqQyxDQUFDO0VBc0NELElBQUFDLFdBQUEsR0FBc0NwRCwrQ0FBUSxDQUFDcUQsU0FBUyxDQUFDO0lBQUFDLFdBQUEsR0FBQXZDLGNBQUEsQ0FBQXFDLFdBQUE7SUFBbERHLFdBQVcsR0FBQUQsV0FBQTtJQUFFRSxjQUFjLEdBQUFGLFdBQUE7RUFFbEMsSUFBTUcsV0FBVyxHQUFHLFNBQUFBLENBQUNSLENBQUMsRUFBSztJQUN2QkEsQ0FBQyxDQUFDUyxjQUFjLEVBQUU7SUFFbEIsSUFBSUMsU0FBUyxHQUFHO01BQ1pDLElBQUksRUFBRSxJQUFJQyxJQUFJLEVBQUU7TUFDaEJ6QyxNQUFNLEVBQUVBLE1BQU07TUFDZEksSUFBSSxFQUFFQSxJQUFJO01BQ1ZzQyxZQUFZLEVBQUVsQztJQUNsQixDQUFDO0lBRUQsSUFBSW1DLEdBQUcsR0FBRyxFQUFFO0lBQ1osS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLFNBQVMsQ0FBQ0csWUFBWSxHQUFDLEVBQUUsRUFBRUUsQ0FBQyxFQUFFLEVBQUc7TUFDakRELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO1FBQUM3QyxNQUFNLEVBQUUsQ0FBQ0EsTUFBTTtRQUFFOEMsU0FBUyxFQUFFLENBQUM5QyxNQUFNLEdBQUcsQ0FBQ0ksSUFBSTtRQUFFMkMsT0FBTyxFQUFFLENBQUMvQyxNQUFNLEdBQUksQ0FBQ0EsTUFBTSxHQUFHLENBQUNJO01BQU0sQ0FBQyxDQUFDO0lBQ2xHO0lBQ0FnQyxjQUFjLENBQUNPLEdBQUcsQ0FBQztJQUVuQkssT0FBTyxDQUFDQyxHQUFHLENBQUNWLFNBQVMsQ0FBQztJQUN0QixJQUFJVyxVQUFVLE1BQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBTzVCLE9BQU8sSUFBRWUsU0FBUyxFQUFDO0lBRXhDcEQsV0FBVyxDQUFDLFVBQUNrRSxJQUFJO01BQUEsT0FBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQVVELElBQUk7UUFBRTdCLE9BQU8sRUFBRTBCO01BQVU7SUFBQSxDQUFFLENBQUM7SUFFdkRyRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7RUFDNUIsQ0FBQztFQU1ELG9CQUNJbEIsMERBQUE7SUFBSzZFLFNBQVMsRUFBRTtFQUEwQixnQkFDdEM3RSwwREFBQTtJQUFLNkUsU0FBUyxFQUFDO0VBQU0sZ0JBQ2pCN0UsMERBQUEsQ0FBQ0UsOEVBQVUsT0FBRSxFQUNaZSxlQUFlLGdCQUNaakIsMERBQUE7SUFBSzZFLFNBQVMsRUFBQztFQUFnQixnQkFDM0I3RSwwREFBQSxhQUFJLGtCQUFnQixDQUFLLGVBQ3pCQSwwREFBQTtJQUFHOEUsS0FBSyxFQUFFO01BQUNuRSxPQUFPLEVBQUUsTUFBTTtNQUFFb0UsY0FBYyxFQUFFO0lBQWU7RUFBRSxnQkFBQy9FLDBEQUFBLGVBQU0sY0FBTyxDQUFPLGVBQUFBLDBEQUFBLGVBQU0sU0FBTyxDQUFPLGVBQUFBLDBEQUFBLGVBQU0seUJBQVEsQ0FBTyxDQUFJLEVBQzlId0QsV0FBVyxDQUNQL0MsTUFBTSxDQUFDLFVBQUN1RSxFQUFFLEVBQUVmLENBQUM7SUFBQSxPQUFLQSxDQUFDLEdBQUcsRUFBRTtFQUFBLEVBQUMsQ0FDekJnQixHQUFHLENBQUMsVUFBQ0QsRUFBRSxFQUFFZixDQUFDO0lBQUEsb0JBQUtqRSwwREFBQTtNQUFHa0YsR0FBRyxFQUFFakI7SUFBRSxHQUFFZSxFQUFFLENBQUMzRCxNQUFNLEVBQUMsR0FBQyxFQUFDMkQsRUFBRSxDQUFDYixTQUFTLEVBQUMsR0FBQyxFQUFDYSxFQUFFLENBQUNaLE9BQU8sQ0FBSztFQUFBLEVBQUMsZUFDM0VwRSwwREFBQTtJQUFRbUYsSUFBSSxFQUFFLFFBQVM7SUFBQ04sU0FBUyxFQUFFLFdBQVk7SUFBQ08sT0FBTyxFQUFFMUI7RUFBWSxHQUFDLDRCQUFrQixDQUFTLENBQy9GLGdCQUVOMUQsMERBQUE7SUFBSzZFLFNBQVMsRUFBQztFQUFnQixnQkFDM0I3RSwwREFBQSxhQUFJLHFCQUFtQixDQUFLLGVBQzVCQSwwREFBQTtJQUFNcUYsUUFBUSxFQXBCYixTQUFmQyxZQUFZQSxDQUFJcEMsQ0FBQyxFQUFLO01BQ3hCQSxDQUFDLENBQUNTLGNBQWMsRUFBRTtJQUN0QjtFQWtCaUQsZ0JBQ3pCM0QsMERBQUE7SUFBTzhFLEtBQUssRUFBRXBFO0VBQWEsZ0JBQ3ZCViwwREFBQTtJQUFPbUYsSUFBSSxFQUFFLE1BQU87SUFBQ3ZDLElBQUksRUFBRSxRQUFTO0lBQUNRLEtBQUssRUFBRS9CLE1BQU87SUFBQ2tFLE9BQU8sRUFwRjdELFNBQXBCQyxpQkFBaUJBLENBQUl0QyxDQUFDLEVBQUs7TUFDN0JBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUsscUJBQXFCLElBQUk5QixTQUFTLENBQUMsRUFBRSxDQUFDO0lBQzdELENBa0YyRztJQUFDbUUsUUFBUSxFQWhGekYsU0FBckJDLGtCQUFrQkEsQ0FBSXhDLENBQUMsRUFBSztNQUM5QjVCLFNBQVMsQ0FBQzRCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDN0IsQ0E4RXlJO0lBQUN1QyxNQUFNLEVBNUV2SCxTQUFuQkMsZ0JBQWdCQSxDQUFJMUMsQ0FBQyxFQUFLO01BQzVCQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLLEVBQUUsSUFBSTlCLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztJQUM3RDtFQTBFbUssRUFBRSxlQUFBdEIsMERBQUE7SUFBTTZFLFNBQVMsRUFBRSx1QkFBd0I7SUFBQ0MsS0FBSyxFQUFFO01BQUNuRSxPQUFPLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUU7SUFBVTtFQUFFLEdBQUMsS0FBRyxDQUFPLENBQzFPLGVBRVJaLDBEQUFBO0lBQU84RSxLQUFLLEVBQUVwRTtFQUFhLGdCQUN2QlYsMERBQUE7SUFBT21GLElBQUksRUFBRSxNQUFPO0lBQUN2QyxJQUFJLEVBQUUsTUFBTztJQUFDUSxLQUFLLEVBQUUzQixJQUFLO0lBQUM4RCxPQUFPLEVBNUUzRCxTQUFsQk0sZUFBZUEsQ0FBSTNDLENBQUMsRUFBSztNQUMzQkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyx3QkFBd0IsSUFBSTFCLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDOUQsQ0EwRXFHO0lBQUMrRCxRQUFRLEVBeEVyRixTQUFuQkssZ0JBQWdCQSxDQUFJNUMsQ0FBQyxFQUFLO01BQzVCeEIsT0FBTyxDQUFDd0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUMzQixDQXNFaUk7SUFBQ3VDLE1BQU0sRUFwRWpILFNBQWpCSSxjQUFjQSxDQUFJN0MsQ0FBQyxFQUFLO01BQzFCQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLLEVBQUUsSUFBSTFCLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztJQUM5RDtFQWtFeUosRUFBRSxlQUFBMUIsMERBQUE7SUFBTTZFLFNBQVMsRUFBRSx1QkFBd0I7SUFBQ0MsS0FBSyxFQUFFO01BQUNuRSxPQUFPLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUU7SUFBVTtFQUFFLEdBQUMsR0FBQyxDQUFPLENBQzlOLGVBRVJaLDBEQUFBO0lBQU84RSxLQUFLLEVBQUVwRTtFQUFhLGdCQUN2QlYsMERBQUE7SUFBT21GLElBQUksRUFBRSxNQUFPO0lBQUN2QyxJQUFJLEVBQUUsUUFBUztJQUFDUSxLQUFLLEVBQUV2QixNQUFPO0lBQUMwRCxPQUFPLEVBcEU3RCxTQUFwQlMsaUJBQWlCQSxDQUFJOUMsQ0FBQyxFQUFLO01BQzdCQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLLDhCQUE4QixJQUFJdEIsU0FBUyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxDQWtFMkc7SUFBQzJELFFBQVEsRUFoRXpGLFNBQXJCUSxrQkFBa0JBLENBQUkvQyxDQUFDLEVBQUs7TUFDOUJwQixTQUFTLENBQUNvQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQzdCLENBOER5STtJQUFDdUMsTUFBTSxFQTVEdkgsU0FBbkJPLGdCQUFnQkEsQ0FBSWhELENBQUMsRUFBSztNQUM1QkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyxFQUFFLElBQUl0QixTQUFTLENBQUMsOEJBQThCLENBQUM7SUFDdEU7RUEwRG1LLEVBQUUsZUFBQTlCLDBEQUFBO0lBQU02RSxTQUFTLEVBQUUsdUJBQXdCO0lBQUNDLEtBQUssRUFBRTtNQUFDbkUsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFO0lBQVU7RUFBRSxHQUFDLE9BQUssQ0FBTyxDQUM1TyxlQUVSWiwwREFBQTtJQUFLNkUsU0FBUyxFQUFFO0VBQVEsZ0JBQ3BCN0UsMERBQUE7SUFBT21GLElBQUksRUFBRSxPQUFRO0lBQUN2QyxJQUFJLEVBQUMsZ0JBQVc7SUFBQ1EsS0FBSyxFQUFFLFdBQVk7SUFBQ3FDLFFBQVEsRUFBRXhDLGlCQUFrQjtJQUFDa0QsT0FBTyxFQUFFbEUsVUFBVSxLQUFLO0VBQVksRUFBRSxlQUFBakMsMERBQUEsZ0JBQU8saUJBQVUsQ0FBUSxlQUN2SkEsMERBQUE7SUFBT21GLElBQUksRUFBRSxPQUFRO0lBQUN2QyxJQUFJLEVBQUMsYUFBYTtJQUFDUSxLQUFLLEVBQUUsYUFBYztJQUFDcUMsUUFBUSxFQUFFeEMsaUJBQWtCO0lBQUNrRCxPQUFPLEVBQUVsRSxVQUFVLEtBQUs7RUFBYyxFQUFFLGVBQUFqQywwREFBQSxnQkFBTyxjQUFZLENBQVEsQ0FDN0osZUFFTkEsMERBQUE7SUFBUW1GLElBQUksRUFBRSxRQUFTO0lBQUNOLFNBQVMsRUFBRSxXQUFZO0lBQUNPLE9BQU8sRUFBRTFCO0VBQVksR0FBQyxRQUFNLENBQVMsQ0FDbEYsQ0FDTCxDQUdSLGVBQ04xRCwwREFBQSxDQUFDRyx5RUFBWTtJQUFDZ0YsSUFBSSxFQUFFLFVBQVc7SUFBQzVFLFFBQVEsRUFBRUEsUUFBUztJQUFDQyxXQUFXLEVBQUVBLFdBQVk7SUFBQzRGLFVBQVUsRUFBRTNGO0VBQU8sRUFBRSxDQUNqRztBQUVkLENBQUM7QUFFRCwrREFBZUwsZ0JBQWdCOzs7Ozs7OztVQ3BJL0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlclwiO1xuXG5jb25zdCBDcmVkaXRDYWxjdWxhdG9yID0gKHt1c2VyTG9nSW4sIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSwgZmlsdGVyfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0U3R5bGluZyA9IHtkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9O1xuICAgIGNvbnN0IFtkaXNwbGF5U2hvd0NhbGMsIHNldERpc3BsYXlTaG93Q2FsY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIGNvbnN0IFtjcmVkaXRUeXBlLCBzZXRDcmVkaXRUeXBlXSA9IHVzZVN0YXRlKFwic3RhxYJhUmF0YVwiKTtcbiAgICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VyRGF0YUJhc2UsIHNldFVzZXJEYXRhQmFzZV0gPSB1c2VTdGF0ZSh1c2VyRGF0YSk7XG5cbiAgICBjb25zdCB7aWQsIG5hbWUsIGNyZWRpdHMsIGxvYW5zLCBkZXBvc2l0cywgYm9uZHN9ID0gdXNlckRhdGFCYXNlO1xuXG4gICAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRDcmVkaXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Rm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBrd290xJkga3JlZHl0dVwiICYmIHNldEFtb3VudChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldEFtb3VudChcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiICYmIHNldFJhdGUoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFJhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRSYXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiICYmIHNldFBlcmlvZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQZXJpb2QoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBlcmlvZChcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgfVxuXG4gICAgY29uc3QgW3BheW1lbnRSYXRlLCBzZXRQYXltZW50UmF0ZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IG5ld0NyZWRpdCA9IHtcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIHJhdGU6IHJhdGUsXG4gICAgICAgICAgICBjcmVkaXRQZXJpb2Q6IHBlcmlvZFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdDcmVkaXQuY3JlZGl0UGVyaW9kKjEyOyBpKysgKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh7YW1vdW50OiArYW1vdW50LCBpbnRlcmVzdHM6ICthbW91bnQgKiArcmF0ZSwgcGF5bWVudDogK2Ftb3VudCArICgrYW1vdW50ICogK3JhdGUpIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0UGF5bWVudFJhdGUoYXJyKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhuZXdDcmVkaXQpO1xuICAgICAgICBsZXQgY3JlZGl0c0FyciA9IFsuLi5jcmVkaXRzLCBuZXdDcmVkaXRdO1xuXG4gICAgICAgIHNldFVzZXJEYXRhKChwcmV2KSA9PiAoey4uLnByZXYsIGNyZWRpdHM6IGNyZWRpdHNBcnJ9KSk7XG5cbiAgICAgICAgc2V0RGlzcGxheVNob3dDYWxjKHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yTWFpbkNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVNob3dDYWxjID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlR3b2plIG9ibGljemVuaWE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+PHNwYW4+S0FQSVRBxYE8L3NwYW4+PHNwYW4+T0RTRVRLSTwvc3Bhbj48c3Bhbj5QxYFBVE5PxZrEhzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGF5bWVudFJhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCwgaSkgPT4gaSA8IDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsLCBpKSA9PiA8cCBrZXk9e2l9PntlbC5hbW91bnR9IHtlbC5pbnRlcmVzdHN9IHtlbC5wYXltZW50fTwvcD4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Qb3dyw7N0IGRvIG9ibGljemXFhDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+T2JsaWN6IHJhdHkga3JlZHl0dTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e2Ftb3VudH0gb25Gb2N1cz17aGFuZGxlQW1vdW50Rm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInJhdGVcIn0gdmFsdWU9e3JhdGV9IG9uRm9jdXM9e2hhbmRsZVJhdGVGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVJhdGVDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUmF0ZUJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicGVyaW9kXCJ9IHZhbHVlPXtwZXJpb2R9IG9uRm9jdXM9e2hhbmRsZVBlcmlvZEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVBlcmlvZEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+T2tyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhZGlvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwic3RhxYJhUmF0YVwiIHZhbHVlPXtcInN0YcWCYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInN0YcWCYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHN0YcWCYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJ6bWllbm5hUmF0YVwiIHZhbHVlPXtcInptaWVubmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJ6bWllbm5hUmF0YVwifS8+PGxhYmVsPlJhdGEgem1pZW5uYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pk9ibGljejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVySGlzdG9yeSB0eXBlPXtcIktyZWR5dC95XCJ9IHVzZXJEYXRhPXt1c2VyRGF0YX0gc2V0VXNlckRhdGE9e3NldFVzZXJEYXRhfSBidG5NaW51c0ZuPXtmaWx0ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI0YzUwNWEwMWJjZmRjOGYwNjY5ZFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiU2lkZXJIaXN0b3J5IiwiQ3JlZGl0Q2FsY3VsYXRvciIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZmlsdGVyIiwiaW5wdXRTdHlsaW5nIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJkaXNwbGF5U2hvd0NhbGMiLCJzZXREaXNwbGF5U2hvd0NhbGMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInBlcmlvZCIsInNldFBlcmlvZCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsImNyZWRpdFR5cGUiLCJzZXRDcmVkaXRUeXBlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImlzU2VudCIsInNldElzU2VudCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJ1c2VyRGF0YUJhc2UiLCJzZXRVc2VyRGF0YUJhc2UiLCJpZCIsIm5hbWUiLCJjcmVkaXRzIiwibG9hbnMiLCJkZXBvc2l0cyIsImJvbmRzIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJfdXNlU3RhdGUxNSIsInVuZGVmaW5lZCIsIl91c2VTdGF0ZTE2IiwicGF5bWVudFJhdGUiLCJzZXRQYXltZW50UmF0ZSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJuZXdDcmVkaXQiLCJkYXRlIiwiRGF0ZSIsImNyZWRpdFBlcmlvZCIsImFyciIsImkiLCJwdXNoIiwiaW50ZXJlc3RzIiwicGF5bWVudCIsImNvbnNvbGUiLCJsb2ciLCJjcmVkaXRzQXJyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHJldiIsIl9vYmplY3RTcHJlYWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsImVsIiwibWFwIiwia2V5IiwidHlwZSIsIm9uQ2xpY2siLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsIm9uRm9jdXMiLCJoYW5kbGVBbW91bnRGb2N1cyIsIm9uQ2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlQW1vdW50Qmx1ciIsImhhbmRsZVJhdGVGb2N1cyIsImhhbmRsZVJhdGVDaGFuZ2UiLCJoYW5kbGVSYXRlQmx1ciIsImhhbmRsZVBlcmlvZEZvY3VzIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwiaGFuZGxlUGVyaW9kQmx1ciIsImNoZWNrZWQiLCJidG5NaW51c0ZuIl0sInNvdXJjZVJvb3QiOiIifQ==