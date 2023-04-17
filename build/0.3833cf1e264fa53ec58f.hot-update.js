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
    btnMinusFn: filter
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b8985d030a3aaf0cf1cc"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zODMzY2YxZTI2NGZhNTNlYzU4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUM0QjtBQUNIO0FBRS9ELElBQU1JLGdCQUFnQixHQUFHLFNBQUFBLENBQUFDLElBQUEsRUFBZ0Q7RUFBQSxJQUE5Q0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7SUFBRUMsV0FBVyxHQUFBSCxJQUFBLENBQVhHLFdBQVc7SUFBRUMsTUFBTSxHQUFBSixJQUFBLENBQU5JLE1BQU07RUFDL0QsSUFBTUMsWUFBWSxHQUFHO0lBQUNDLE9BQU8sRUFBRSxPQUFPO0lBQUVDLFFBQVEsRUFBRSxVQUFVO0lBQUVDLEtBQUssRUFBRTtFQUFPLENBQUM7RUFDN0UsSUFBQUMsU0FBQSxHQUE4Q2IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdERHLGVBQWUsR0FBQUYsVUFBQTtJQUFFRyxrQkFBa0IsR0FBQUgsVUFBQTtFQUUxQyxJQUFBSSxVQUFBLEdBQTRCbEIsK0NBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUFBbUIsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUF3QnRCLCtDQUFRLENBQUMsd0JBQXdCLENBQUM7SUFBQXVCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5ERSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEIxQiwrQ0FBUSxDQUFDLDhCQUE4QixDQUFDO0lBQUEyQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUE3REUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN4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Q0FBQ0csWUFBWSxHQUFHLEVBQUUsR0FBRSxFQUFFLENBQUM7TUFDdkQvQyxrQkFBa0IsQ0FBQ2tELEtBQUssQ0FBQztNQUV6QkcsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFNBQVMsQ0FBQztNQUN0QixJQUFJVyxVQUFVLE1BQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBT3pFLE9BQU8sSUFBRTRELFNBQVMsRUFBQztNQUV4Q2pHLFdBQVcsQ0FBQyxVQUFDNEUsSUFBSTtRQUFBLE9BQUFtQyxhQUFBLENBQUFBLGFBQUEsS0FBVW5DLElBQUk7VUFBRXZDLE9BQU8sRUFBRXVFO1FBQVU7TUFBQSxDQUFFLENBQUM7TUFDdkQxRSxlQUFlLENBQUMsVUFBQzBDLElBQUk7UUFBQSxPQUFBbUMsYUFBQSxDQUFBQSxhQUFBLEtBQVVuQyxJQUFJO1VBQUV2QyxPQUFPLEVBQUV1RTtRQUFVO01BQUEsQ0FBRSxDQUFDO01BRTNEbEcsa0JBQWtCLENBQUMsSUFBSSxDQUFDO0lBQzVCO0VBMkU2RixHQUFDLFFBQU0sQ0FBUyxDQUNsRixDQUNMLENBR1IsZUFDTmxCLDBEQUFBLENBQUNHLHlFQUFZO0lBQUM4RSxJQUFJLEVBQUUsVUFBVztJQUFDMUUsUUFBUSxFQUFFQSxRQUFTO0lBQUNDLFdBQVcsRUFBRUEsV0FBWTtJQUFDZ0gsVUFBVSxFQUFFL0c7RUFBTyxFQUFFLENBQ2pHO0FBRWQsQ0FBQztBQUVELCtEQUFlTCxnQkFBZ0I7Ozs7Ozs7O1VDN0svQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9jcmVkaXRDYWxjdWxhdG9yL2NyZWRpdENhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBTaWRlckhpc3RvcnkgZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyXCI7XG5cbmNvbnN0IENyZWRpdENhbGN1bGF0b3IgPSAoe3VzZXJMb2dJbiwgdXNlckRhdGEsIHNldFVzZXJEYXRhLCBmaWx0ZXJ9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRTdHlsaW5nID0ge2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn07XG4gICAgY29uc3QgW2Rpc3BsYXlTaG93Q2FsYywgc2V0RGlzcGxheVNob3dDYWxjXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZShcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgY29uc3QgW2NyZWRpdFR5cGUsIHNldENyZWRpdFR5cGVdID0gdXNlU3RhdGUoXCJzdGHFgmFSYXRhXCIpO1xuICAgIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJEYXRhQmFzZSwgc2V0VXNlckRhdGFCYXNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcblxuICAgIGNvbnN0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YUJhc2U7XG5cbiAgICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENyZWRpdFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIgJiYgc2V0QW1vdW50KFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0QW1vdW50KFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIgJiYgc2V0UmF0ZShcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UmF0ZShlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFJhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIgJiYgc2V0UGVyaW9kKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGVyaW9kKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBbcGF5bWVudEFyciwgc2V0UGF5bWVudEFycl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtwYXltZW50QXJyUGFnZXMsIHNldFBheW1lbnRBcnJQYWdlc10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFt3aGljaFBhZ2UsIHNldFdoaWNoUGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBuZXdDcmVkaXQgPSB7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICByYXRlOiByYXRlLFxuICAgICAgICAgICAgY3JlZGl0UGVyaW9kOiBwZXJpb2RcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3Q3JlZGl0LmNyZWRpdFBlcmlvZCoxMjsgaSsrICkge1xuICAgICAgICAgICAgYXJyLnB1c2goe2Ftb3VudDogK2Ftb3VudCwgaW50ZXJlc3RzOiArYW1vdW50ICogK3JhdGUsIHBheW1lbnQ6ICthbW91bnQgKyAoK2Ftb3VudCAqICtyYXRlKSB9KVxuICAgICAgICB9XG4gICAgICAgIHNldFBheW1lbnRBcnIoYXJyKTtcblxuICAgICAgICBsZXQgcGFnZXMgPSBNYXRoLmNlaWwoKG5ld0NyZWRpdC5jcmVkaXRQZXJpb2QgKiAxMikvMTApO1xuICAgICAgICBzZXRQYXltZW50QXJyUGFnZXMocGFnZXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NyZWRpdCk7XG4gICAgICAgIGxldCBjcmVkaXRzQXJyID0gWy4uLmNyZWRpdHMsIG5ld0NyZWRpdF07XG5cbiAgICAgICAgc2V0VXNlckRhdGEoKHByZXYpID0+ICh7Li4ucHJldiwgY3JlZGl0czogY3JlZGl0c0Fycn0pKTtcbiAgICAgICAgc2V0VXNlckRhdGFCYXNlKChwcmV2KSA9PiAoey4uLnByZXYsIGNyZWRpdHM6IGNyZWRpdHNBcnJ9KSlcblxuICAgICAgICBzZXREaXNwbGF5U2hvd0NhbGModHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFdoaWNoUGFnZSgocHJldik9PiBwcmV2IDwgcGF5bWVudEFyclBhZ2VzID8gcHJldiArIDEgOiBwYXltZW50QXJyUGFnZXMpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4ge1xuICAgICAgICBzZXRXaGljaFBhZ2UoKHByZXYpPT4gcHJldiA+IDEgPyBwcmV2IC0gMSA6IDEpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQmFja1RvQ2FsY3VsYXRpb25zID0gKCkgPT4ge1xuICAgICAgICBzZXREaXNwbGF5U2hvd0NhbGMoZmFsc2UpO1xuICAgICAgICBzZXRQYXltZW50QXJyKHVuZGVmaW5lZCk7XG4gICAgICAgIHNldFBheW1lbnRBcnJQYWdlcyh1bmRlZmluZWQpO1xuICAgICAgICBzZXRBbW91bnQoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICAgICAgc2V0UmF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICAgICAgc2V0UGVyaW9kKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICAgICAgc2V0Q3JlZGl0VHlwZShcInN0YcWCYVJhdGFcIik7XG4gICAgICAgIHNldFdoaWNoUGFnZSgxKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvck1haW5Db250YWluZXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAge2Rpc3BsYXlTaG93Q2FsYyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNhbGN1bGF0b3IgY3JlZGl0Q2FsY3VsYXRvckNhbGN1bGF0aW9uc0Rpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17e21hcmdpbjogXCIxcmVtIDAgMCAwXCJ9fT5Ud29qZSBvYmxpY3plbmlhPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNyZWRpdENhbGN1bGF0b3JDYWxjdWxhdGlvbnNEaXNwbGF5LWxpc3RcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBnYXA6IFwiMjBweFwiLCBjb2xvcjogXCIjOUUxMDdGXCIsIGJvcmRlckJvdHRvbTogXCIzcHggZG91YmxlICM5RTEwN0ZcIn19PjxzcGFuPlJBVEE8L3NwYW4+PHNwYW4+S0FQSVRBxYE8L3NwYW4+PHNwYW4+T0RTRVRLSTwvc3Bhbj48c3Bhbj5XUMWBQVRBPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGF5bWVudEFyclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChlbCwgaSkgPT4gaSA+ICh3aGljaFBhZ2UgLSAxKSAqIDEwICYmIGkgPD0gd2hpY2hQYWdlICogMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGVsLCBpKSA9PiA8cCBrZXk9e2l9IHN0eWxlPXt7Ym9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjOUUxMDdGXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGNvbG9yOiBcIiM5RTEwN0ZcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bnIgeyhpICsgMSkgKyAoKHdoaWNoUGFnZSAtIDEpKjEwKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuYW1vdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5pbnRlcmVzdHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLnBheW1lbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImJ1dHRvblByZXZcIn0gb25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIiM5RTEwN0ZcIiwgZm9udFNpemU6IFwiMC44cmVtXCJ9fT57d2hpY2hQYWdlfSBzdHJvbmEgeiB7cGF5bWVudEFyclBhZ2VzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IGNsYXNzTmFtZT17XCJidXR0b25OZXh0XCJ9IG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfT48L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImNyZWRpdENhbGN1bGF0b3ItYnRuQmFja1RvQ2FsY3VsYXRpb25zXCJ9IG9uQ2xpY2s9e2hhbmRsZUJhY2tUb0NhbGN1bGF0aW9uc30+UG93csOzdCBkbyBvYmxpY3plxYQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk9ibGljeiByYXR5IGtyZWR5dHU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXthbW91bnR9IG9uRm9jdXM9e2hhbmRsZUFtb3VudEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfSBvbkJsdXI9e2hhbmRsZUFtb3VudEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+UExOPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJyYXRlXCJ9IHZhbHVlPXtyYXRlfSBvbkZvY3VzPXtoYW5kbGVSYXRlRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVSYXRlQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVJhdGVCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PiU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInBlcmlvZFwifSB2YWx1ZT17cGVyaW9kfSBvbkZvY3VzPXtoYW5kbGVQZXJpb2RGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVBlcmlvZENoYW5nZX0gb25CbHVyPXtoYW5kbGVQZXJpb2RCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pk9rcmVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWRpb1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInN0YcWCYVJhdGFcIiB2YWx1ZT17XCJzdGHFgmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJzdGHFgmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSBzdGHFgmE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwiem1pZW5uYVJhdGFcIiB2YWx1ZT17XCJ6bWllbm5hUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwiem1pZW5uYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHptaWVubmE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5PYmxpY3o8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTaWRlckhpc3RvcnkgdHlwZT17XCJLcmVkeXQveVwifSB1c2VyRGF0YT17dXNlckRhdGF9IHNldFVzZXJEYXRhPXtzZXRVc2VyRGF0YX0gYnRuTWludXNGbj17ZmlsdGVyfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0Q2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYjg5ODVkMDMwYTNhYWYwY2YxY2NcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmF2aWdhdGlvbiIsIlNpZGVySGlzdG9yeSIsIkNyZWRpdENhbGN1bGF0b3IiLCJfcmVmIiwidXNlckxvZ0luIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImZpbHRlciIsImlucHV0U3R5bGluZyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGlzcGxheVNob3dDYWxjIiwic2V0RGlzcGxheVNob3dDYWxjIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwZXJpb2QiLCJzZXRQZXJpb2QiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJjcmVkaXRUeXBlIiwic2V0Q3JlZGl0VHlwZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwidXNlckRhdGFCYXNlIiwic2V0VXNlckRhdGFCYXNlIiwiaWQiLCJuYW1lIiwiY3JlZGl0cyIsImxvYW5zIiwiZGVwb3NpdHMiLCJib25kcyIsImhhbmRsZVJhZGlvQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiX3VzZVN0YXRlMTUiLCJ1bmRlZmluZWQiLCJfdXNlU3RhdGUxNiIsInBheW1lbnRBcnIiLCJzZXRQYXltZW50QXJyIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInBheW1lbnRBcnJQYWdlcyIsInNldFBheW1lbnRBcnJQYWdlcyIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJ3aGljaFBhZ2UiLCJzZXRXaGljaFBhZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImdhcCIsImNvbG9yIiwiYm9yZGVyQm90dG9tIiwiZWwiLCJpIiwibWFwIiwia2V5IiwiaW50ZXJlc3RzIiwicGF5bWVudCIsImFsaWduSXRlbXMiLCJ0eXBlIiwib25DbGljayIsImhhbmRsZVByZXZpb3VzUGFnZSIsInByZXYiLCJmb250U2l6ZSIsImhhbmRsZU5leHRQYWdlIiwiaGFuZGxlQmFja1RvQ2FsY3VsYXRpb25zIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uRm9jdXMiLCJoYW5kbGVBbW91bnRGb2N1cyIsIm9uQ2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlQW1vdW50Qmx1ciIsImhhbmRsZVJhdGVGb2N1cyIsImhhbmRsZVJhdGVDaGFuZ2UiLCJoYW5kbGVSYXRlQmx1ciIsImhhbmRsZVBlcmlvZEZvY3VzIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwiaGFuZGxlUGVyaW9kQmx1ciIsImNoZWNrZWQiLCJoYW5kbGVDbGljayIsIm5ld0NyZWRpdCIsImRhdGUiLCJEYXRlIiwiY3JlZGl0UGVyaW9kIiwiYXJyIiwicHVzaCIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJjb25zb2xlIiwibG9nIiwiY3JlZGl0c0FyciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJidG5NaW51c0ZuIl0sInNvdXJjZVJvb3QiOiIifQ==