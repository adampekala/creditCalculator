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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "nr in: ", i + 1, " whichPage: ", whichPage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, el.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, el.interests), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, el.payment));
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
/******/ 	__webpack_require__.h = function() { return "52dfd4aa914aa4a43289"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43OGM3NzJiZjE0YmMyMmFkZTM3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUM0QjtBQUNIO0FBRS9ELElBQU1JLGdCQUFnQixHQUFHLFNBQUFBLENBQUFDLElBQUEsRUFBZ0Q7RUFBQSxJQUE5Q0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7SUFBRUMsV0FBVyxHQUFBSCxJQUFBLENBQVhHLFdBQVc7SUFBRUMsTUFBTSxHQUFBSixJQUFBLENBQU5JLE1BQU07RUFDL0QsSUFBTUMsWUFBWSxHQUFHO0lBQUNDLE9BQU8sRUFBRSxPQUFPO0lBQUVDLFFBQVEsRUFBRSxVQUFVO0lBQUVDLEtBQUssRUFBRTtFQUFPLENBQUM7RUFDN0UsSUFBQUMsU0FBQSxHQUE4Q2IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdERHLGVBQWUsR0FBQUYsVUFBQTtJQUFFRyxrQkFBa0IsR0FBQUgsVUFBQTtFQUUxQyxJQUFBSSxVQUFBLEdBQTRCbEIsK0NBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUFBbUIsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUF3QnRCLCtDQUFRLENBQUMsd0JBQXdCLENBQUM7SUFBQXVCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5ERSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEIxQiwrQ0FBUSxDQUFDLDhCQUE4QixDQUFDO0lBQUEyQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUE3REUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN4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UW1HLElBQUksRUFBRSxRQUFTO0lBQUNYLFNBQVMsRUFBRSxXQUFZO0lBQUNZLE9BQU8sRUFBRWxDO0VBQVksR0FBQyxRQUFNLENBQVMsQ0FDbEYsQ0FDTCxDQUdSLGVBQ05sRSwwREFBQSxDQUFDRyx5RUFBWTtJQUFDZ0csSUFBSSxFQUFFLFVBQVc7SUFBQzVGLFFBQVEsRUFBRUEsUUFBUztJQUFDQyxXQUFXLEVBQUVBLFdBQVk7SUFBQytHLFVBQVUsRUFBRTlHO0VBQU8sRUFBRSxDQUNqRztBQUVkLENBQUM7QUFFRCwrREFBZUwsZ0JBQWdCOzs7Ozs7OztVQ2pLL0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlclwiO1xuXG5jb25zdCBDcmVkaXRDYWxjdWxhdG9yID0gKHt1c2VyTG9nSW4sIHVzZXJEYXRhLCBzZXRVc2VyRGF0YSwgZmlsdGVyfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0U3R5bGluZyA9IHtkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9O1xuICAgIGNvbnN0IFtkaXNwbGF5U2hvd0NhbGMsIHNldERpc3BsYXlTaG93Q2FsY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIGNvbnN0IFtjcmVkaXRUeXBlLCBzZXRDcmVkaXRUeXBlXSA9IHVzZVN0YXRlKFwic3RhxYJhUmF0YVwiKTtcbiAgICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VyRGF0YUJhc2UsIHNldFVzZXJEYXRhQmFzZV0gPSB1c2VTdGF0ZSh1c2VyRGF0YSk7XG5cbiAgICBjb25zdCB7aWQsIG5hbWUsIGNyZWRpdHMsIGxvYW5zLCBkZXBvc2l0cywgYm9uZHN9ID0gdXNlckRhdGFCYXNlO1xuXG4gICAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRDcmVkaXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Rm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBrd290xJkga3JlZHl0dVwiICYmIHNldEFtb3VudChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldEFtb3VudChcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiICYmIHNldFJhdGUoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFJhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRSYXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiICYmIHNldFBlcmlvZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQZXJpb2QoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBlcmlvZChcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgfVxuXG4gICAgY29uc3QgW3BheW1lbnRBcnIsIHNldFBheW1lbnRBcnJdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCBbcGF5bWVudEFyclBhZ2VzLCBzZXRQYXltZW50QXJyUGFnZXNdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgICBjb25zdCBbd2hpY2hQYWdlLCBzZXRXaGljaFBhZ2VdID0gdXNlU3RhdGUoMSk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgbmV3Q3JlZGl0ID0ge1xuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgcmF0ZTogcmF0ZSxcbiAgICAgICAgICAgIGNyZWRpdFBlcmlvZDogcGVyaW9kXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0NyZWRpdC5jcmVkaXRQZXJpb2QqMTI7IGkrKyApIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHthbW91bnQ6ICthbW91bnQsIGludGVyZXN0czogK2Ftb3VudCAqICtyYXRlLCBwYXltZW50OiArYW1vdW50ICsgKCthbW91bnQgKiArcmF0ZSkgfSlcbiAgICAgICAgfVxuICAgICAgICBzZXRQYXltZW50QXJyKGFycik7XG5cbiAgICAgICAgbGV0IHBhZ2VzID0gTWF0aC5jZWlsKChuZXdDcmVkaXQuY3JlZGl0UGVyaW9kICogMTIpLzEwKTtcbiAgICAgICAgc2V0UGF5bWVudEFyclBhZ2VzKHBhZ2VzKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhuZXdDcmVkaXQpO1xuICAgICAgICBsZXQgY3JlZGl0c0FyciA9IFsuLi5jcmVkaXRzLCBuZXdDcmVkaXRdO1xuXG4gICAgICAgIHNldFVzZXJEYXRhKChwcmV2KSA9PiAoey4uLnByZXYsIGNyZWRpdHM6IGNyZWRpdHNBcnJ9KSk7XG5cbiAgICAgICAgc2V0RGlzcGxheVNob3dDYWxjKHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xuICAgICAgICBzZXRXaGljaFBhZ2UoKHByZXYpPT4gcHJldiA8IHBheW1lbnRBcnJQYWdlcyA/IHByZXYgKyAxIDogcGF5bWVudEFyclBhZ2VzKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2hpY2hQYWdlKChwcmV2KT0+IHByZXYgPiAxID8gcHJldiAtIDEgOiAxKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yTWFpbkNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVNob3dDYWxjID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvciBjcmVkaXRDYWxjdWxhdG9yQ2FsY3VsYXRpb25zRGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7bWFyZ2luOiBcIjFyZW0gMCAwIDBcIn19PlR3b2plIG9ibGljemVuaWE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY3JlZGl0Q2FsY3VsYXRvckNhbGN1bGF0aW9uc0Rpc3BsYXktbGlzdFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGdhcDogXCIyMHB4XCIsIGNvbG9yOiBcIiM5RTEwN0ZcIiwgYm9yZGVyQm90dG9tOiBcIjNweCBkb3VibGUgIzlFMTA3RlwifX0+PHNwYW4+UkFUQTwvc3Bhbj48c3Bhbj5LQVBJVEHFgTwvc3Bhbj48c3Bhbj5PRFNFVEtJPC9zcGFuPjxzcGFuPldQxYFBVEE8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXltZW50QXJyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsLCBpKSA9PiBpID4gKHdoaWNoUGFnZSAtIDEpICogMTAgJiYgaSA8PSB3aGljaFBhZ2UgKiAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWwsIGkpID0+IDxwIGtleT17aX0gc3R5bGU9e3tib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICM5RTEwN0ZcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgY29sb3I6IFwiIzlFMTA3RlwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5uciBpbjogeyhpICsgMSl9IHdoaWNoUGFnZToge3doaWNoUGFnZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZWwuYW1vdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntlbC5pbnRlcmVzdHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VsLnBheW1lbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+KX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImJ1dHRvblByZXZcIn0gb25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIiM5RTEwN0ZcIiwgZm9udFNpemU6IFwiMC44cmVtXCJ9fT57d2hpY2hQYWdlfSBzdHJvbmEgeiB7cGF5bWVudEFyclBhZ2VzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IGNsYXNzTmFtZT17XCJidXR0b25OZXh0XCJ9IG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfT48L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJidXR0b25cIn0gY2xhc3NOYW1lPXtcImNyZWRpdENhbGN1bGF0b3ItYnRuQmFja1RvQ2FsY3VsYXRpb25zXCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Qb3dyw7N0IGRvIG9ibGljemXFhDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+T2JsaWN6IHJhdHkga3JlZHl0dTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e2Ftb3VudH0gb25Gb2N1cz17aGFuZGxlQW1vdW50Rm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInJhdGVcIn0gdmFsdWU9e3JhdGV9IG9uRm9jdXM9e2hhbmRsZVJhdGVGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVJhdGVDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUmF0ZUJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicGVyaW9kXCJ9IHZhbHVlPXtwZXJpb2R9IG9uRm9jdXM9e2hhbmRsZVBlcmlvZEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVBlcmlvZEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+T2tyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhZGlvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwic3RhxYJhUmF0YVwiIHZhbHVlPXtcInN0YcWCYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInN0YcWCYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHN0YcWCYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJ6bWllbm5hUmF0YVwiIHZhbHVlPXtcInptaWVubmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJ6bWllbm5hUmF0YVwifS8+PGxhYmVsPlJhdGEgem1pZW5uYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pk9ibGljejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVySGlzdG9yeSB0eXBlPXtcIktyZWR5dC95XCJ9IHVzZXJEYXRhPXt1c2VyRGF0YX0gc2V0VXNlckRhdGE9e3NldFVzZXJEYXRhfSBidG5NaW51c0ZuPXtmaWx0ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI1MmRmZDRhYTkxNGFhNGE0MzI4OVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiU2lkZXJIaXN0b3J5IiwiQ3JlZGl0Q2FsY3VsYXRvciIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZmlsdGVyIiwiaW5wdXRTdHlsaW5nIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJkaXNwbGF5U2hvd0NhbGMiLCJzZXREaXNwbGF5U2hvd0NhbGMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInBlcmlvZCIsInNldFBlcmlvZCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsImNyZWRpdFR5cGUiLCJzZXRDcmVkaXRUeXBlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImlzU2VudCIsInNldElzU2VudCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJ1c2VyRGF0YUJhc2UiLCJzZXRVc2VyRGF0YUJhc2UiLCJpZCIsIm5hbWUiLCJjcmVkaXRzIiwibG9hbnMiLCJkZXBvc2l0cyIsImJvbmRzIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJfdXNlU3RhdGUxNSIsInVuZGVmaW5lZCIsIl91c2VTdGF0ZTE2IiwicGF5bWVudEFyciIsInNldFBheW1lbnRBcnIiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwicGF5bWVudEFyclBhZ2VzIiwic2V0UGF5bWVudEFyclBhZ2VzIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsIndoaWNoUGFnZSIsInNldFdoaWNoUGFnZSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJuZXdDcmVkaXQiLCJkYXRlIiwiRGF0ZSIsImNyZWRpdFBlcmlvZCIsImFyciIsImkiLCJwdXNoIiwiaW50ZXJlc3RzIiwicGF5bWVudCIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJjb25zb2xlIiwibG9nIiwiY3JlZGl0c0FyciIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInByZXYiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJnYXAiLCJjb2xvciIsImJvcmRlckJvdHRvbSIsImVsIiwibWFwIiwia2V5IiwiYWxpZ25JdGVtcyIsInR5cGUiLCJvbkNsaWNrIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwiZm9udFNpemUiLCJoYW5kbGVOZXh0UGFnZSIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0Iiwib25Gb2N1cyIsImhhbmRsZUFtb3VudEZvY3VzIiwib25DaGFuZ2UiLCJoYW5kbGVBbW91bnRDaGFuZ2UiLCJvbkJsdXIiLCJoYW5kbGVBbW91bnRCbHVyIiwiaGFuZGxlUmF0ZUZvY3VzIiwiaGFuZGxlUmF0ZUNoYW5nZSIsImhhbmRsZVJhdGVCbHVyIiwiaGFuZGxlUGVyaW9kRm9jdXMiLCJoYW5kbGVQZXJpb2RDaGFuZ2UiLCJoYW5kbGVQZXJpb2RCbHVyIiwiY2hlY2tlZCIsImJ0bk1pbnVzRm4iXSwic291cmNlUm9vdCI6IiJ9