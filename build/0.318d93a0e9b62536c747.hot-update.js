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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "KAPITA\u0141"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "ODSETKI"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "P\u0141ATNO\u015A\u0107")), paymentArr.filter(function (el, i) {
    return i > (whichPage - 1) * 10 && i < whichPage * 10;
  }).map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: i,
      style: {
        display: "flex",
        justifyCountent: "space-evenly"
      }
    }, el.amount, " ", el.interests, " ", el.payment);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "buttonPrev",
    onClick: function handlePreviousPage() {
      setWhichPage(function (prev) {
        return prev > 1 ? prev - 1 : 1;
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Kt\xF3ra strona na ", paymentArrPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "buttonPrev",
    onClick: function handleNextPage() {
      setWhichPage(function (prev) {
        return prev <= paymentArrPages ? prev + 1 : paymentArrPages;
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = function() { return "a1b9554948084a92ea17"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMThkOTNhMGU5YjYyNTM2Yzc0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUM0QjtBQUNIO0FBRS9ELElBQU1JLGdCQUFnQixHQUFHLFNBQUFBLENBQUFDLElBQUEsRUFBZ0Q7RUFBQSxJQUE5Q0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7SUFBRUMsV0FBVyxHQUFBSCxJQUFBLENBQVhHLFdBQVc7SUFBRUMsTUFBTSxHQUFBSixJQUFBLENBQU5JLE1BQU07RUFDL0QsSUFBTUMsWUFBWSxHQUFHO0lBQUNDLE9BQU8sRUFBRSxPQUFPO0lBQUVDLFFBQVEsRUFBRSxVQUFVO0lBQUVDLEtBQUssRUFBRTtFQUFPLENBQUM7RUFDN0UsSUFBQUMsU0FBQSxHQUE4Q2IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdERHLGVBQWUsR0FBQUYsVUFBQTtJQUFFRyxrQkFBa0IsR0FBQUgsVUFBQTtFQUUxQyxJQUFBSSxVQUFBLEdBQTRCbEIsK0NBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUFBbUIsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUF3QnRCLCtDQUFRLENBQUMsd0JBQXdCLENBQUM7SUFBQXVCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5ERSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEIxQiwrQ0FBUSxDQUFDLDhCQUE4QixDQUFDO0lBQUEyQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUE3REUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN4QixJQUFBRyxVQUFBLEdBQW9DOUIsK0NBQVEsQ0FBQyxXQUFXLENBQUM7SUFBQStCLFdBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUFsREUsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFBRyxXQUFBLEdBQTRCbEMsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQW1DLFdBQUEsR0FBQXBCLGNBQUEsQ0FBQW1CLFdBQUE7SUFBcENFLE1BQU0sR0FBQUQsV0FBQTtJQUFFRSxTQUFTLEdBQUFGLFdBQUE7RUFDeEIsSUFBQUcsV0FBQSxHQUF3Q3RDLCtDQUFRLENBQUNNLFFBQVEsQ0FBQztJQUFBaUMsV0FBQSxHQUFBeEIsY0FBQSxDQUFBdUIsV0FBQTtJQUFuREUsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUVwQyxJQUFPRyxFQUFFLEdBQTJDRixZQUFZLENBQXpERSxFQUFFO0lBQUVDLElBQUksR0FBcUNILFlBQVksQ0FBckRHLElBQUk7SUFBRUMsT0FBTyxHQUE0QkosWUFBWSxDQUEvQ0ksT0FBTztJQUFFQyxLQUFLLEdBQXFCTCxZQUFZLENBQXRDSyxLQUFLO0lBQUVDLFFBQVEsR0FBV04sWUFBWSxDQUEvQk0sUUFBUTtJQUFFQyxLQUFLLEdBQUlQLFlBQVksQ0FBckJPLEtBQUs7RUFFaEQsSUFBTUMsaUJBQWlCLEdBQUcsU0FBQUEsQ0FBQ0MsQ0FBQyxFQUFLO0lBQzdCaEIsYUFBYSxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNqQyxDQUFDO0VBc0NELElBQUFDLFdBQUEsR0FBb0NwRCwrQ0FBUSxDQUFDcUQsU0FBUyxDQUFDO0lBQUFDLFdBQUEsR0FBQXZDLGNBQUEsQ0FBQXFDLFdBQUE7SUFBaERHLFVBQVUsR0FBQUQsV0FBQTtJQUFFRSxhQUFhLEdBQUFGLFdBQUE7RUFDaEMsSUFBQUcsV0FBQSxHQUE4Q3pELCtDQUFRLENBQUNxRCxTQUFTLENBQUM7SUFBQUssV0FBQSxHQUFBM0MsY0FBQSxDQUFBMEMsV0FBQTtJQUExREUsZUFBZSxHQUFBRCxXQUFBO0lBQUVFLGtCQUFrQixHQUFBRixXQUFBO0VBQzFDLElBQUFHLFdBQUEsR0FBa0M3RCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBOEQsV0FBQSxHQUFBL0MsY0FBQSxDQUFBOEMsV0FBQTtJQUF0Q0UsU0FBUyxHQUFBRCxXQUFBO0lBQUVFLFlBQVksR0FBQUYsV0FBQTtFQUU5QixJQUFNRyxXQUFXLEdBQUcsU0FBQUEsQ0FBQ2hCLENBQUMsRUFBSztJQUN2QkEsQ0FBQyxDQUFDaUIsY0FBYyxFQUFFO0lBRWxCLElBQUlDLFNBQVMsR0FBRztNQUNaQyxJQUFJLEVBQUUsSUFBSUMsSUFBSSxFQUFFO01BQ2hCakQsTUFBTSxFQUFFQSxNQUFNO01BQ2RJLElBQUksRUFBRUEsSUFBSTtNQUNWOEMsWUFBWSxFQUFFMUM7SUFDbEIsQ0FBQztJQUVELElBQUkyQyxHQUFHLEdBQUcsRUFBRTtJQUNaLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTCxTQUFTLENBQUNHLFlBQVksR0FBQyxFQUFFLEVBQUVFLENBQUMsRUFBRSxFQUFHO01BQ2pERCxHQUFHLENBQUNFLElBQUksQ0FBQztRQUFDckQsTUFBTSxFQUFFLENBQUNBLE1BQU07UUFBRXNELFNBQVMsRUFBRSxDQUFDdEQsTUFBTSxHQUFHLENBQUNJLElBQUk7UUFBRW1ELE9BQU8sRUFBRSxDQUFDdkQsTUFBTSxHQUFJLENBQUNBLE1BQU0sR0FBRyxDQUFDSTtNQUFNLENBQUMsQ0FBQztJQUNsRztJQUNBZ0MsYUFBYSxDQUFDZSxHQUFHLENBQUM7SUFFbEIsSUFBSUssS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUksQ0FBRVgsU0FBUyxDQUFDRyxZQUFZLEdBQUcsRUFBRSxHQUFFLEVBQUUsQ0FBQztJQUN2RFYsa0JBQWtCLENBQUNnQixLQUFLLENBQUM7SUFFekJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixTQUFTLENBQUM7SUFDdEIsSUFBSWMsVUFBVSxNQUFBQyxNQUFBLENBQUFDLGtCQUFBLENBQU92QyxPQUFPLElBQUV1QixTQUFTLEVBQUM7SUFFeEM1RCxXQUFXLENBQUMsVUFBQzZFLElBQUk7TUFBQSxPQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FBVUQsSUFBSTtRQUFFeEMsT0FBTyxFQUFFcUM7TUFBVTtJQUFBLENBQUUsQ0FBQztJQUV2RGhFLGtCQUFrQixDQUFDLElBQUksQ0FBQztFQUM1QixDQUFDO0VBY0Qsb0JBQ0lsQiwwREFBQTtJQUFLd0YsU0FBUyxFQUFFO0VBQTBCLGdCQUN0Q3hGLDBEQUFBO0lBQUt3RixTQUFTLEVBQUM7RUFBTSxnQkFDakJ4RiwwREFBQSxDQUFDRSw4RUFBVSxPQUFFLEVBQ1plLGVBQWUsZ0JBQ1pqQiwwREFBQTtJQUFLd0YsU0FBUyxFQUFDO0VBQWdCLGdCQUMzQnhGLDBEQUFBLGFBQUksa0JBQWdCLENBQUssZUFDekJBLDBEQUFBO0lBQUd5RixLQUFLLEVBQUU7TUFBQzlFLE9BQU8sRUFBRSxNQUFNO01BQUUrRSxjQUFjLEVBQUU7SUFBZTtFQUFFLGdCQUFDMUYsMERBQUEsZUFBTSxjQUFPLENBQU8sZUFBQUEsMERBQUEsZUFBTSxTQUFPLENBQU8sZUFBQUEsMERBQUEsZUFBTSx5QkFBUSxDQUFPLENBQUksRUFDOUh3RCxVQUFVLENBQ04vQyxNQUFNLENBQUMsVUFBQ2tGLEVBQUUsRUFBRWxCLENBQUM7SUFBQSxPQUFLQSxDQUFDLEdBQUcsQ0FBQ1QsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUlTLENBQUMsR0FBR1QsU0FBUyxHQUFHLEVBQUU7RUFBQSxFQUFDLENBQ2pFNEIsR0FBRyxDQUFDLFVBQUNELEVBQUUsRUFBRWxCLENBQUM7SUFBQSxvQkFBS3pFLDBEQUFBO01BQUc2RixHQUFHLEVBQUVwQixDQUFFO01BQUNnQixLQUFLLEVBQUU7UUFBQzlFLE9BQU8sRUFBRSxNQUFNO1FBQUVtRixlQUFlLEVBQUU7TUFBYztJQUFFLEdBQUVILEVBQUUsQ0FBQ3RFLE1BQU0sRUFBQyxHQUFDLEVBQUNzRSxFQUFFLENBQUNoQixTQUFTLEVBQUMsR0FBQyxFQUFDZ0IsRUFBRSxDQUFDZixPQUFPLENBQUs7RUFBQSxFQUFDLGVBRXRJNUUsMERBQUE7SUFBS3lGLEtBQUssRUFBRTtNQUFDOUUsT0FBTyxFQUFFO0lBQU07RUFBRSxnQkFDMUJYLDBEQUFBO0lBQVErRixJQUFJLEVBQUUsUUFBUztJQUFDUCxTQUFTLEVBQUUsWUFBYTtJQUFDUSxPQUFPLEVBckJyRCxTQUFyQkMsa0JBQWtCQSxDQUFBLEVBQVM7TUFDN0JoQyxZQUFZLENBQUMsVUFBQ29CLElBQUk7UUFBQSxPQUFJQSxJQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7TUFBQSxFQUFDO0lBQ2xEO0VBbUJxRyxFQUFVLGVBQ3ZGckYsMERBQUEsZUFBTSxxQkFBZ0IsRUFBQzRELGVBQWUsQ0FBUSxlQUM5QzVELDBEQUFBO0lBQVErRixJQUFJLEVBQUUsUUFBUztJQUFDUCxTQUFTLEVBQUUsWUFBYTtJQUFDUSxPQUFPLEVBM0J6RCxTQUFqQkUsY0FBY0EsQ0FBQSxFQUFTO01BQ3pCakMsWUFBWSxDQUFDLFVBQUNvQixJQUFJO1FBQUEsT0FBSUEsSUFBSSxJQUFJekIsZUFBZSxHQUFHeUIsSUFBSSxHQUFHLENBQUMsR0FBR3pCLGVBQWU7TUFBQSxFQUFDO0lBQy9FO0VBeUJpRyxFQUFVLENBRWpGLGVBRU41RCwwREFBQTtJQUFRK0YsSUFBSSxFQUFFLFFBQVM7SUFBQ1AsU0FBUyxFQUFFLFdBQVk7SUFBQ1EsT0FBTyxFQUFFOUI7RUFBWSxHQUFDLDRCQUFrQixDQUFTLENBQy9GLGdCQUVObEUsMERBQUE7SUFBS3dGLFNBQVMsRUFBQztFQUFnQixnQkFDM0J4RiwwREFBQSxhQUFJLHFCQUFtQixDQUFLLGVBQzVCQSwwREFBQTtJQUFNbUcsUUFBUSxFQTVCYixTQUFmQyxZQUFZQSxDQUFJbEQsQ0FBQyxFQUFLO01BQ3hCQSxDQUFDLENBQUNpQixjQUFjLEVBQUU7SUFDdEI7RUEwQmlELGdCQUN6Qm5FLDBEQUFBO0lBQU95RixLQUFLLEVBQUUvRTtFQUFhLGdCQUN2QlYsMERBQUE7SUFBTytGLElBQUksRUFBRSxNQUFPO0lBQUNuRCxJQUFJLEVBQUUsUUFBUztJQUFDUSxLQUFLLEVBQUUvQixNQUFPO0lBQUNnRixPQUFPLEVBekc3RCxTQUFwQkMsaUJBQWlCQSxDQUFJcEQsQ0FBQyxFQUFLO01BQzdCQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLLHFCQUFxQixJQUFJOUIsU0FBUyxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQXVHMkc7SUFBQ2lGLFFBQVEsRUFyR3pGLFNBQXJCQyxrQkFBa0JBLENBQUl0RCxDQUFDLEVBQUs7TUFDOUI1QixTQUFTLENBQUM0QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQzdCLENBbUd5STtJQUFDcUQsTUFBTSxFQWpHdkgsU0FBbkJDLGdCQUFnQkEsQ0FBSXhELENBQUMsRUFBSztNQUM1QkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyxFQUFFLElBQUk5QixTQUFTLENBQUMscUJBQXFCLENBQUM7SUFDN0Q7RUErRm1LLEVBQUUsZUFBQXRCLDBEQUFBO0lBQU13RixTQUFTLEVBQUUsdUJBQXdCO0lBQUNDLEtBQUssRUFBRTtNQUFDOUUsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFO0lBQVU7RUFBRSxHQUFDLEtBQUcsQ0FBTyxDQUMxTyxlQUVSWiwwREFBQTtJQUFPeUYsS0FBSyxFQUFFL0U7RUFBYSxnQkFDdkJWLDBEQUFBO0lBQU8rRixJQUFJLEVBQUUsTUFBTztJQUFDbkQsSUFBSSxFQUFFLE1BQU87SUFBQ1EsS0FBSyxFQUFFM0IsSUFBSztJQUFDNEUsT0FBTyxFQWpHM0QsU0FBbEJNLGVBQWVBLENBQUl6RCxDQUFDLEVBQUs7TUFDM0JBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUssd0JBQXdCLElBQUkxQixPQUFPLENBQUMsRUFBRSxDQUFDO0lBQzlELENBK0ZxRztJQUFDNkUsUUFBUSxFQTdGckYsU0FBbkJLLGdCQUFnQkEsQ0FBSTFELENBQUMsRUFBSztNQUM1QnhCLE9BQU8sQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDM0IsQ0EyRmlJO0lBQUNxRCxNQUFNLEVBekZqSCxTQUFqQkksY0FBY0EsQ0FBSTNELENBQUMsRUFBSztNQUMxQkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyxFQUFFLElBQUkxQixPQUFPLENBQUMsd0JBQXdCLENBQUM7SUFDOUQ7RUF1RnlKLEVBQUUsZUFBQTFCLDBEQUFBO0lBQU13RixTQUFTLEVBQUUsdUJBQXdCO0lBQUNDLEtBQUssRUFBRTtNQUFDOUUsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFO0lBQVU7RUFBRSxHQUFDLEdBQUMsQ0FBTyxDQUM5TixlQUVSWiwwREFBQTtJQUFPeUYsS0FBSyxFQUFFL0U7RUFBYSxnQkFDdkJWLDBEQUFBO0lBQU8rRixJQUFJLEVBQUUsTUFBTztJQUFDbkQsSUFBSSxFQUFFLFFBQVM7SUFBQ1EsS0FBSyxFQUFFdkIsTUFBTztJQUFDd0UsT0FBTyxFQXpGN0QsU0FBcEJTLGlCQUFpQkEsQ0FBSTVELENBQUMsRUFBSztNQUM3QkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyw4QkFBOEIsSUFBSXRCLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDdEUsQ0F1RjJHO0lBQUN5RSxRQUFRLEVBckZ6RixTQUFyQlEsa0JBQWtCQSxDQUFJN0QsQ0FBQyxFQUFLO01BQzlCcEIsU0FBUyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUM3QixDQW1GeUk7SUFBQ3FELE1BQU0sRUFqRnZILFNBQW5CTyxnQkFBZ0JBLENBQUk5RCxDQUFDLEVBQUs7TUFDNUJBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUssRUFBRSxJQUFJdEIsU0FBUyxDQUFDLDhCQUE4QixDQUFDO0lBQ3RFO0VBK0VtSyxFQUFFLGVBQUE5QiwwREFBQTtJQUFNd0YsU0FBUyxFQUFFLHVCQUF3QjtJQUFDQyxLQUFLLEVBQUU7TUFBQzlFLE9BQU8sRUFBRSxPQUFPO01BQUVDLFFBQVEsRUFBRTtJQUFVO0VBQUUsR0FBQyxPQUFLLENBQU8sQ0FDNU8sZUFFUlosMERBQUE7SUFBS3dGLFNBQVMsRUFBRTtFQUFRLGdCQUNwQnhGLDBEQUFBO0lBQU8rRixJQUFJLEVBQUUsT0FBUTtJQUFDbkQsSUFBSSxFQUFDLGdCQUFXO0lBQUNRLEtBQUssRUFBRSxXQUFZO0lBQUNtRCxRQUFRLEVBQUV0RCxpQkFBa0I7SUFBQ2dFLE9BQU8sRUFBRWhGLFVBQVUsS0FBSztFQUFZLEVBQUUsZUFBQWpDLDBEQUFBLGdCQUFPLGlCQUFVLENBQVEsZUFDdkpBLDBEQUFBO0lBQU8rRixJQUFJLEVBQUUsT0FBUTtJQUFDbkQsSUFBSSxFQUFDLGFBQWE7SUFBQ1EsS0FBSyxFQUFFLGFBQWM7SUFBQ21ELFFBQVEsRUFBRXRELGlCQUFrQjtJQUFDZ0UsT0FBTyxFQUFFaEYsVUFBVSxLQUFLO0VBQWMsRUFBRSxlQUFBakMsMERBQUEsZ0JBQU8sY0FBWSxDQUFRLENBQzdKLGVBRU5BLDBEQUFBO0lBQVErRixJQUFJLEVBQUUsUUFBUztJQUFDUCxTQUFTLEVBQUUsV0FBWTtJQUFDUSxPQUFPLEVBQUU5QjtFQUFZLEdBQUMsUUFBTSxDQUFTLENBQ2xGLENBQ0wsQ0FHUixlQUNObEUsMERBQUEsQ0FBQ0cseUVBQVk7SUFBQzRGLElBQUksRUFBRSxVQUFXO0lBQUN4RixRQUFRLEVBQUVBLFFBQVM7SUFBQ0MsV0FBVyxFQUFFQSxXQUFZO0lBQUMwRyxVQUFVLEVBQUV6RztFQUFPLEVBQUUsQ0FDakc7QUFFZCxDQUFDO0FBRUQsK0RBQWVMLGdCQUFnQjs7Ozs7Ozs7VUN6Si9CLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9NYWluL2NyZWRpdENhbGN1bGF0b3IvY3JlZGl0Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFNpZGVySGlzdG9yeSBmcm9tIFwiLi4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvc2lkZXJcIjtcblxuY29uc3QgQ3JlZGl0Q2FsY3VsYXRvciA9ICh7dXNlckxvZ0luLCB1c2VyRGF0YSwgc2V0VXNlckRhdGEsIGZpbHRlcn0pID0+IHtcbiAgICBjb25zdCBpbnB1dFN0eWxpbmcgPSB7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifTtcbiAgICBjb25zdCBbZGlzcGxheVNob3dDYWxjLCBzZXREaXNwbGF5U2hvd0NhbGNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCI7XG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICBjb25zdCBbY3JlZGl0VHlwZSwgc2V0Q3JlZGl0VHlwZV0gPSB1c2VTdGF0ZShcInN0YcWCYVJhdGFcIik7XG4gICAgY29uc3QgW2lzU2VudCwgc2V0SXNTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlckRhdGFCYXNlLCBzZXRVc2VyRGF0YUJhc2VdID0gdXNlU3RhdGUodXNlckRhdGEpO1xuXG4gICAgY29uc3Qge2lkLCBuYW1lLCBjcmVkaXRzLCBsb2FucywgZGVwb3NpdHMsIGJvbmRzfSA9IHVzZXJEYXRhQmFzZTtcblxuICAgIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Q3JlZGl0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIiAmJiBzZXRBbW91bnQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRBbW91bnQoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIiAmJiBzZXRSYXRlKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRSYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UmF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIiAmJiBzZXRQZXJpb2QoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRQZXJpb2QoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IFtwYXltZW50QXJyLCBzZXRQYXltZW50QXJyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW3BheW1lbnRBcnJQYWdlcywgc2V0UGF5bWVudEFyclBhZ2VzXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW3doaWNoUGFnZSwgc2V0V2hpY2hQYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IG5ld0NyZWRpdCA9IHtcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIHJhdGU6IHJhdGUsXG4gICAgICAgICAgICBjcmVkaXRQZXJpb2Q6IHBlcmlvZFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdDcmVkaXQuY3JlZGl0UGVyaW9kKjEyOyBpKysgKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh7YW1vdW50OiArYW1vdW50LCBpbnRlcmVzdHM6ICthbW91bnQgKiArcmF0ZSwgcGF5bWVudDogK2Ftb3VudCArICgrYW1vdW50ICogK3JhdGUpIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0UGF5bWVudEFycihhcnIpO1xuXG4gICAgICAgIGxldCBwYWdlcyA9IE1hdGguY2VpbCgobmV3Q3JlZGl0LmNyZWRpdFBlcmlvZCAqIDEyKS8xMCk7XG4gICAgICAgIHNldFBheW1lbnRBcnJQYWdlcyhwYWdlcyk7XG5cbiAgICAgICAgY29uc29sZS5sb2cobmV3Q3JlZGl0KTtcbiAgICAgICAgbGV0IGNyZWRpdHNBcnIgPSBbLi4uY3JlZGl0cywgbmV3Q3JlZGl0XTtcblxuICAgICAgICBzZXRVc2VyRGF0YSgocHJldikgPT4gKHsuLi5wcmV2LCBjcmVkaXRzOiBjcmVkaXRzQXJyfSkpO1xuXG4gICAgICAgIHNldERpc3BsYXlTaG93Q2FsYyh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVOZXh0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2hpY2hQYWdlKChwcmV2KT0+IHByZXYgPD0gcGF5bWVudEFyclBhZ2VzID8gcHJldiArIDEgOiBwYXltZW50QXJyUGFnZXMpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4ge1xuICAgICAgICBzZXRXaGljaFBhZ2UoKHByZXYpPT4gcHJldiA+IDEgPyBwcmV2IC0gMSA6IDEpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGN1bGF0b3JNYWluQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgICAgIHtkaXNwbGF5U2hvd0NhbGMgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+VHdvamUgb2JsaWN6ZW5pYTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCJ9fT48c3Bhbj5LQVBJVEHFgTwvc3Bhbj48c3Bhbj5PRFNFVEtJPC9zcGFuPjxzcGFuPlDFgUFUTk/FmsSHPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYXltZW50QXJyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZWwsIGkpID0+IGkgPiAod2hpY2hQYWdlIC0gMSkgKiAxMCAmJiBpIDwgd2hpY2hQYWdlICogMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWwsIGkpID0+IDxwIGtleT17aX0gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvdW50ZW50OiBcInNwYWNlLWV2ZW5seVwifX0+e2VsLmFtb3VudH0ge2VsLmludGVyZXN0c30ge2VsLnBheW1lbnR9PC9wPil9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImJ1dHRvblByZXZcIn0gb25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5LdMOzcmEgc3Ryb25hIG5hIHtwYXltZW50QXJyUGFnZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImJ1dHRvblByZXZcIn0gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9PjwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Qb3dyw7N0IGRvIG9ibGljemXFhDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+T2JsaWN6IHJhdHkga3JlZHl0dTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e2Ftb3VudH0gb25Gb2N1cz17aGFuZGxlQW1vdW50Rm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInJhdGVcIn0gdmFsdWU9e3JhdGV9IG9uRm9jdXM9e2hhbmRsZVJhdGVGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVJhdGVDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUmF0ZUJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicGVyaW9kXCJ9IHZhbHVlPXtwZXJpb2R9IG9uRm9jdXM9e2hhbmRsZVBlcmlvZEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVBlcmlvZEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+T2tyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhZGlvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwic3RhxYJhUmF0YVwiIHZhbHVlPXtcInN0YcWCYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInN0YcWCYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHN0YcWCYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJ6bWllbm5hUmF0YVwiIHZhbHVlPXtcInptaWVubmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJ6bWllbm5hUmF0YVwifS8+PGxhYmVsPlJhdGEgem1pZW5uYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pk9ibGljejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVySGlzdG9yeSB0eXBlPXtcIktyZWR5dC95XCJ9IHVzZXJEYXRhPXt1c2VyRGF0YX0gc2V0VXNlckRhdGE9e3NldFVzZXJEYXRhfSBidG5NaW51c0ZuPXtmaWx0ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhMWI5NTU0OTQ4MDg0YTkyZWExN1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiU2lkZXJIaXN0b3J5IiwiQ3JlZGl0Q2FsY3VsYXRvciIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZmlsdGVyIiwiaW5wdXRTdHlsaW5nIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJkaXNwbGF5U2hvd0NhbGMiLCJzZXREaXNwbGF5U2hvd0NhbGMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInBlcmlvZCIsInNldFBlcmlvZCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsImNyZWRpdFR5cGUiLCJzZXRDcmVkaXRUeXBlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImlzU2VudCIsInNldElzU2VudCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJ1c2VyRGF0YUJhc2UiLCJzZXRVc2VyRGF0YUJhc2UiLCJpZCIsIm5hbWUiLCJjcmVkaXRzIiwibG9hbnMiLCJkZXBvc2l0cyIsImJvbmRzIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJfdXNlU3RhdGUxNSIsInVuZGVmaW5lZCIsIl91c2VTdGF0ZTE2IiwicGF5bWVudEFyciIsInNldFBheW1lbnRBcnIiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwicGF5bWVudEFyclBhZ2VzIiwic2V0UGF5bWVudEFyclBhZ2VzIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsIndoaWNoUGFnZSIsInNldFdoaWNoUGFnZSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJuZXdDcmVkaXQiLCJkYXRlIiwiRGF0ZSIsImNyZWRpdFBlcmlvZCIsImFyciIsImkiLCJwdXNoIiwiaW50ZXJlc3RzIiwicGF5bWVudCIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJjb25zb2xlIiwibG9nIiwiY3JlZGl0c0FyciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInByZXYiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJlbCIsIm1hcCIsImtleSIsImp1c3RpZnlDb3VudGVudCIsInR5cGUiLCJvbkNsaWNrIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsIm9uRm9jdXMiLCJoYW5kbGVBbW91bnRGb2N1cyIsIm9uQ2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlQW1vdW50Qmx1ciIsImhhbmRsZVJhdGVGb2N1cyIsImhhbmRsZVJhdGVDaGFuZ2UiLCJoYW5kbGVSYXRlQmx1ciIsImhhbmRsZVBlcmlvZEZvY3VzIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwiaGFuZGxlUGVyaW9kQmx1ciIsImNoZWNrZWQiLCJidG5NaW51c0ZuIl0sInNvdXJjZVJvb3QiOiIifQ==