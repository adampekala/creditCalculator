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
/******/ 	__webpack_require__.h = function() { return "17d2d65475075d765747"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hOTgwZTc4NmI5YjA1NWIxZGE0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUM0QjtBQUNIO0FBRS9ELElBQU1JLGdCQUFnQixHQUFHLFNBQUFBLENBQUFDLElBQUEsRUFBZ0Q7RUFBQSxJQUE5Q0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7SUFBRUMsV0FBVyxHQUFBSCxJQUFBLENBQVhHLFdBQVc7SUFBRUMsTUFBTSxHQUFBSixJQUFBLENBQU5JLE1BQU07RUFDL0QsSUFBTUMsWUFBWSxHQUFHO0lBQUNDLE9BQU8sRUFBRSxPQUFPO0lBQUVDLFFBQVEsRUFBRSxVQUFVO0lBQUVDLEtBQUssRUFBRTtFQUFPLENBQUM7RUFDN0UsSUFBQUMsU0FBQSxHQUE4Q2IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdERHLGVBQWUsR0FBQUYsVUFBQTtJQUFFRyxrQkFBa0IsR0FBQUgsVUFBQTtFQUUxQyxJQUFBSSxVQUFBLEdBQTRCbEIsK0NBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUFBbUIsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUF3QnRCLCtDQUFRLENBQUMsd0JBQXdCLENBQUM7SUFBQXVCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5ERSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEIxQiwrQ0FBUSxDQUFDLDhCQUE4QixDQUFDO0lBQUEyQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUE3REUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN4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Q0FBQ0csWUFBWSxHQUFHLEVBQUUsR0FBRSxFQUFFLENBQUM7TUFDdkQvQyxrQkFBa0IsQ0FBQ2tELEtBQUssQ0FBQztNQUV6QkcsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFNBQVMsQ0FBQztNQUN0QixJQUFJVyxVQUFVLE1BQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBT3pFLE9BQU8sSUFBRTRELFNBQVMsRUFBQztNQUV4Q2pHLFdBQVcsQ0FBQyxVQUFDNEUsSUFBSTtRQUFBLE9BQUFtQyxhQUFBLENBQUFBLGFBQUEsS0FBVW5DLElBQUk7VUFBRXZDLE9BQU8sRUFBRXVFO1FBQVU7TUFBQSxDQUFFLENBQUM7TUFFdkRsRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFDNUI7RUEyRTZGLEdBQUMsUUFBTSxDQUFTLENBQ2xGLENBQ0wsQ0FHUixlQUNObEIsMERBQUEsQ0FBQ0cseUVBQVk7SUFBQzhFLElBQUksRUFBRSxVQUFXO0lBQUMxRSxRQUFRLEVBQUVBLFFBQVM7SUFBQ0MsV0FBVyxFQUFFQSxXQUFZO0lBQUNnSCxVQUFVLEVBQUUvRztFQUFPLEVBQUUsQ0FDakc7QUFFZCxDQUFDO0FBRUQsK0RBQWVMLGdCQUFnQjs7Ozs7Ozs7VUM1Sy9CLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9NYWluL2NyZWRpdENhbGN1bGF0b3IvY3JlZGl0Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFNpZGVySGlzdG9yeSBmcm9tIFwiLi4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvc2lkZXJcIjtcblxuY29uc3QgQ3JlZGl0Q2FsY3VsYXRvciA9ICh7dXNlckxvZ0luLCB1c2VyRGF0YSwgc2V0VXNlckRhdGEsIGZpbHRlcn0pID0+IHtcbiAgICBjb25zdCBpbnB1dFN0eWxpbmcgPSB7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifTtcbiAgICBjb25zdCBbZGlzcGxheVNob3dDYWxjLCBzZXREaXNwbGF5U2hvd0NhbGNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCI7XG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICBjb25zdCBbY3JlZGl0VHlwZSwgc2V0Q3JlZGl0VHlwZV0gPSB1c2VTdGF0ZShcInN0YcWCYVJhdGFcIik7XG4gICAgY29uc3QgW2lzU2VudCwgc2V0SXNTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlckRhdGFCYXNlLCBzZXRVc2VyRGF0YUJhc2VdID0gdXNlU3RhdGUodXNlckRhdGEpO1xuXG4gICAgY29uc3Qge2lkLCBuYW1lLCBjcmVkaXRzLCBsb2FucywgZGVwb3NpdHMsIGJvbmRzfSA9IHVzZXJEYXRhQmFzZTtcblxuICAgIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Q3JlZGl0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIiAmJiBzZXRBbW91bnQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRBbW91bnQoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIiAmJiBzZXRSYXRlKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRSYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UmF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIiAmJiBzZXRQZXJpb2QoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRQZXJpb2QoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IFtwYXltZW50QXJyLCBzZXRQYXltZW50QXJyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW3BheW1lbnRBcnJQYWdlcywgc2V0UGF5bWVudEFyclBhZ2VzXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW3doaWNoUGFnZSwgc2V0V2hpY2hQYWdlXSA9IHVzZVN0YXRlKDEpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IG5ld0NyZWRpdCA9IHtcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIHJhdGU6IHJhdGUsXG4gICAgICAgICAgICBjcmVkaXRQZXJpb2Q6IHBlcmlvZFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdDcmVkaXQuY3JlZGl0UGVyaW9kKjEyOyBpKysgKSB7XG4gICAgICAgICAgICBhcnIucHVzaCh7YW1vdW50OiArYW1vdW50LCBpbnRlcmVzdHM6ICthbW91bnQgKiArcmF0ZSwgcGF5bWVudDogK2Ftb3VudCArICgrYW1vdW50ICogK3JhdGUpIH0pXG4gICAgICAgIH1cbiAgICAgICAgc2V0UGF5bWVudEFycihhcnIpO1xuXG4gICAgICAgIGxldCBwYWdlcyA9IE1hdGguY2VpbCgobmV3Q3JlZGl0LmNyZWRpdFBlcmlvZCAqIDEyKS8xMCk7XG4gICAgICAgIHNldFBheW1lbnRBcnJQYWdlcyhwYWdlcyk7XG5cbiAgICAgICAgY29uc29sZS5sb2cobmV3Q3JlZGl0KTtcbiAgICAgICAgbGV0IGNyZWRpdHNBcnIgPSBbLi4uY3JlZGl0cywgbmV3Q3JlZGl0XTtcblxuICAgICAgICBzZXRVc2VyRGF0YSgocHJldikgPT4gKHsuLi5wcmV2LCBjcmVkaXRzOiBjcmVkaXRzQXJyfSkpO1xuXG4gICAgICAgIHNldERpc3BsYXlTaG93Q2FsYyh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVOZXh0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2hpY2hQYWdlKChwcmV2KT0+IHByZXYgPCBwYXltZW50QXJyUGFnZXMgPyBwcmV2ICsgMSA6IHBheW1lbnRBcnJQYWdlcylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFdoaWNoUGFnZSgocHJldik9PiBwcmV2ID4gMSA/IHByZXYgLSAxIDogMSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVCYWNrVG9DYWxjdWxhdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIHNldERpc3BsYXlTaG93Q2FsYyhmYWxzZSk7XG4gICAgICAgIHNldFBheW1lbnRBcnIodW5kZWZpbmVkKTtcbiAgICAgICAgc2V0UGF5bWVudEFyclBhZ2VzKHVuZGVmaW5lZCk7XG4gICAgICAgIHNldEFtb3VudChcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgICAgICBzZXRSYXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgICAgICBzZXRQZXJpb2QoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgICAgICBzZXRDcmVkaXRUeXBlKFwic3RhxYJhUmF0YVwiKTtcbiAgICAgICAgc2V0V2hpY2hQYWdlKDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yTWFpbkNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVNob3dDYWxjID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvciBjcmVkaXRDYWxjdWxhdG9yQ2FsY3VsYXRpb25zRGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7bWFyZ2luOiBcIjFyZW0gMCAwIDBcIn19PlR3b2plIG9ibGljemVuaWE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY3JlZGl0Q2FsY3VsYXRvckNhbGN1bGF0aW9uc0Rpc3BsYXktbGlzdFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGdhcDogXCIyMHB4XCIsIGNvbG9yOiBcIiM5RTEwN0ZcIiwgYm9yZGVyQm90dG9tOiBcIjNweCBkb3VibGUgIzlFMTA3RlwifX0+PHNwYW4+UkFUQTwvc3Bhbj48c3Bhbj5LQVBJVEHFgTwvc3Bhbj48c3Bhbj5PRFNFVEtJPC9zcGFuPjxzcGFuPldQxYFBVEE8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXltZW50QXJyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsLCBpKSA9PiBpID4gKHdoaWNoUGFnZSAtIDEpICogMTAgJiYgaSA8PSB3aGljaFBhZ2UgKiAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWwsIGkpID0+IDxwIGtleT17aX0gc3R5bGU9e3tib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICM5RTEwN0ZcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgY29sb3I6IFwiIzlFMTA3RlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5uciB7KGkgKyAxKSArICgod2hpY2hQYWdlIC0gMSkqMTApfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5hbW91bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLmludGVyZXN0c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwucGF5bWVudH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD4pfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBjbGFzc05hbWU9e1wiYnV0dG9uUHJldlwifSBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c1BhZ2V9PjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6IFwiIzlFMTA3RlwiLCBmb250U2l6ZTogXCIwLjhyZW1cIn19Pnt3aGljaFBhZ2V9IHN0cm9uYSB6IHtwYXltZW50QXJyUGFnZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImJ1dHRvbk5leHRcIn0gb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9PjwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBjbGFzc05hbWU9e1wiY3JlZGl0Q2FsY3VsYXRvci1idG5CYWNrVG9DYWxjdWxhdGlvbnNcIn0gb25DbGljaz17aGFuZGxlQmFja1RvQ2FsY3VsYXRpb25zfT5Qb3dyw7N0IGRvIG9ibGljemXFhDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+T2JsaWN6IHJhdHkga3JlZHl0dTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e2Ftb3VudH0gb25Gb2N1cz17aGFuZGxlQW1vdW50Rm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInJhdGVcIn0gdmFsdWU9e3JhdGV9IG9uRm9jdXM9e2hhbmRsZVJhdGVGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVJhdGVDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUmF0ZUJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicGVyaW9kXCJ9IHZhbHVlPXtwZXJpb2R9IG9uRm9jdXM9e2hhbmRsZVBlcmlvZEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVBlcmlvZEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+T2tyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhZGlvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwic3RhxYJhUmF0YVwiIHZhbHVlPXtcInN0YcWCYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInN0YcWCYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHN0YcWCYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJ6bWllbm5hUmF0YVwiIHZhbHVlPXtcInptaWVubmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJ6bWllbm5hUmF0YVwifS8+PGxhYmVsPlJhdGEgem1pZW5uYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pk9ibGljejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVySGlzdG9yeSB0eXBlPXtcIktyZWR5dC95XCJ9IHVzZXJEYXRhPXt1c2VyRGF0YX0gc2V0VXNlckRhdGE9e3NldFVzZXJEYXRhfSBidG5NaW51c0ZuPXtmaWx0ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxN2QyZDY1NDc1MDc1ZDc2NTc0N1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiU2lkZXJIaXN0b3J5IiwiQ3JlZGl0Q2FsY3VsYXRvciIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZmlsdGVyIiwiaW5wdXRTdHlsaW5nIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJkaXNwbGF5U2hvd0NhbGMiLCJzZXREaXNwbGF5U2hvd0NhbGMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInBlcmlvZCIsInNldFBlcmlvZCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsImNyZWRpdFR5cGUiLCJzZXRDcmVkaXRUeXBlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImlzU2VudCIsInNldElzU2VudCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJ1c2VyRGF0YUJhc2UiLCJzZXRVc2VyRGF0YUJhc2UiLCJpZCIsIm5hbWUiLCJjcmVkaXRzIiwibG9hbnMiLCJkZXBvc2l0cyIsImJvbmRzIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJfdXNlU3RhdGUxNSIsInVuZGVmaW5lZCIsIl91c2VTdGF0ZTE2IiwicGF5bWVudEFyciIsInNldFBheW1lbnRBcnIiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwicGF5bWVudEFyclBhZ2VzIiwic2V0UGF5bWVudEFyclBhZ2VzIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsIndoaWNoUGFnZSIsInNldFdoaWNoUGFnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpbiIsImp1c3RpZnlDb250ZW50IiwiZ2FwIiwiY29sb3IiLCJib3JkZXJCb3R0b20iLCJlbCIsImkiLCJtYXAiLCJrZXkiLCJpbnRlcmVzdHMiLCJwYXltZW50IiwiYWxpZ25JdGVtcyIsInR5cGUiLCJvbkNsaWNrIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwicHJldiIsImZvbnRTaXplIiwiaGFuZGxlTmV4dFBhZ2UiLCJoYW5kbGVCYWNrVG9DYWxjdWxhdGlvbnMiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwib25Gb2N1cyIsImhhbmRsZUFtb3VudEZvY3VzIiwib25DaGFuZ2UiLCJoYW5kbGVBbW91bnRDaGFuZ2UiLCJvbkJsdXIiLCJoYW5kbGVBbW91bnRCbHVyIiwiaGFuZGxlUmF0ZUZvY3VzIiwiaGFuZGxlUmF0ZUNoYW5nZSIsImhhbmRsZVJhdGVCbHVyIiwiaGFuZGxlUGVyaW9kRm9jdXMiLCJoYW5kbGVQZXJpb2RDaGFuZ2UiLCJoYW5kbGVQZXJpb2RCbHVyIiwiY2hlY2tlZCIsImhhbmRsZUNsaWNrIiwibmV3Q3JlZGl0IiwiZGF0ZSIsIkRhdGUiLCJjcmVkaXRQZXJpb2QiLCJhcnIiLCJwdXNoIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsImNvbnNvbGUiLCJsb2ciLCJjcmVkaXRzQXJyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX29iamVjdFNwcmVhZCIsImJ0bk1pbnVzRm4iXSwic291cmNlUm9vdCI6IiJ9