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
    return i < whichPage * 10 && (whichPage - 1) * 10;
  }).map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: i
    }, el.amount, " ", el.interests, " ", el.payment);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btnOblicz",
    onClick: function handlePreviousPage() {
      setWhichPage(function (prev) {
        return prev > 1 ? prev - 1 : 1;
      });
    }
  }, "wcze\u015Bniejsza"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Kt\xF3ra strona na ", paymentArrPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btnOblicz",
    onClick: function handleNextPage() {
      setWhichPage(function (prev) {
        return prev <= paymentArrPages ? prev + 1 : paymentArrPages;
      });
    }
  }, "nast\u0119pna")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btnOblicz",
    onClick: handleClick
  }, "nast\u0119pna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = function() { return "026fdd684f47b5465967"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NDA0N2Q2Yjc4NzNhZTI5NWVjNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUM0QjtBQUNIO0FBRS9ELElBQU1JLGdCQUFnQixHQUFHLFNBQUFBLENBQUFDLElBQUEsRUFBZ0Q7RUFBQSxJQUE5Q0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBRUMsUUFBUSxHQUFBRixJQUFBLENBQVJFLFFBQVE7SUFBRUMsV0FBVyxHQUFBSCxJQUFBLENBQVhHLFdBQVc7SUFBRUMsTUFBTSxHQUFBSixJQUFBLENBQU5JLE1BQU07RUFDL0QsSUFBTUMsWUFBWSxHQUFHO0lBQUNDLE9BQU8sRUFBRSxPQUFPO0lBQUVDLFFBQVEsRUFBRSxVQUFVO0lBQUVDLEtBQUssRUFBRTtFQUFPLENBQUM7RUFDN0UsSUFBQUMsU0FBQSxHQUE4Q2IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWMsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdERHLGVBQWUsR0FBQUYsVUFBQTtJQUFFRyxrQkFBa0IsR0FBQUgsVUFBQTtFQUUxQyxJQUFBSSxVQUFBLEdBQTRCbEIsK0NBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUFBbUIsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBcERFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUF3QnRCLCtDQUFRLENBQUMsd0JBQXdCLENBQUM7SUFBQXVCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5ERSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBNEIxQiwrQ0FBUSxDQUFDLDhCQUE4QixDQUFDO0lBQUEyQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUE3REUsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFNBQVMsR0FBQUYsVUFBQTtFQUN4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QUFPLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUU7SUFBVTtFQUFFLEdBQUMsT0FBSyxDQUFPLENBQzVPLGVBRVJaLDBEQUFBO0lBQUt3RixTQUFTLEVBQUU7RUFBUSxnQkFDcEJ4RiwwREFBQTtJQUFPOEYsSUFBSSxFQUFFLE9BQVE7SUFBQ2xELElBQUksRUFBQyxnQkFBVztJQUFDUSxLQUFLLEVBQUUsV0FBWTtJQUFDa0QsUUFBUSxFQUFFckQsaUJBQWtCO0lBQUMrRCxPQUFPLEVBQUUvRSxVQUFVLEtBQUs7RUFBWSxFQUFFLGVBQUFqQywwREFBQSxnQkFBTyxpQkFBVSxDQUFRLGVBQ3ZKQSwwREFBQTtJQUFPOEYsSUFBSSxFQUFFLE9BQVE7SUFBQ2xELElBQUksRUFBQyxhQUFhO0lBQUNRLEtBQUssRUFBRSxhQUFjO0lBQUNrRCxRQUFRLEVBQUVyRCxpQkFBa0I7SUFBQytELE9BQU8sRUFBRS9FLFVBQVUsS0FBSztFQUFjLEVBQUUsZUFBQWpDLDBEQUFBLGdCQUFPLGNBQVksQ0FBUSxDQUM3SixlQUVOQSwwREFBQTtJQUFROEYsSUFBSSxFQUFFLFFBQVM7SUFBQ04sU0FBUyxFQUFFLFdBQVk7SUFBQ08sT0FBTyxFQUFFN0I7RUFBWSxHQUFDLFFBQU0sQ0FBUyxDQUNsRixDQUNMLENBR1IsZUFDTmxFLDBEQUFBLENBQUNHLHlFQUFZO0lBQUMyRixJQUFJLEVBQUUsVUFBVztJQUFDdkYsUUFBUSxFQUFFQSxRQUFTO0lBQUNDLFdBQVcsRUFBRUEsV0FBWTtJQUFDeUcsVUFBVSxFQUFFeEc7RUFBTyxFQUFFLENBQ2pHO0FBRWQsQ0FBQztBQUVELCtEQUFlTCxnQkFBZ0I7Ozs7Ozs7O1VDMUovQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9jcmVkaXRDYWxjdWxhdG9yL2NyZWRpdENhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBTaWRlckhpc3RvcnkgZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyXCI7XG5cbmNvbnN0IENyZWRpdENhbGN1bGF0b3IgPSAoe3VzZXJMb2dJbiwgdXNlckRhdGEsIHNldFVzZXJEYXRhLCBmaWx0ZXJ9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRTdHlsaW5nID0ge2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn07XG4gICAgY29uc3QgW2Rpc3BsYXlTaG93Q2FsYywgc2V0RGlzcGxheVNob3dDYWxjXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZShcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgY29uc3QgW2NyZWRpdFR5cGUsIHNldENyZWRpdFR5cGVdID0gdXNlU3RhdGUoXCJzdGHFgmFSYXRhXCIpO1xuICAgIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJEYXRhQmFzZSwgc2V0VXNlckRhdGFCYXNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcblxuICAgIGNvbnN0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YUJhc2U7XG5cbiAgICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENyZWRpdFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIgJiYgc2V0QW1vdW50KFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0QW1vdW50KFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIgJiYgc2V0UmF0ZShcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UmF0ZShlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFJhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIgJiYgc2V0UGVyaW9kKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGVyaW9kKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBbcGF5bWVudEFyciwgc2V0UGF5bWVudEFycl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFtwYXltZW50QXJyUGFnZXMsIHNldFBheW1lbnRBcnJQYWdlc10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IFt3aGljaFBhZ2UsIHNldFdoaWNoUGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCBuZXdDcmVkaXQgPSB7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgICAgICByYXRlOiByYXRlLFxuICAgICAgICAgICAgY3JlZGl0UGVyaW9kOiBwZXJpb2RcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3Q3JlZGl0LmNyZWRpdFBlcmlvZCoxMjsgaSsrICkge1xuICAgICAgICAgICAgYXJyLnB1c2goe2Ftb3VudDogK2Ftb3VudCwgaW50ZXJlc3RzOiArYW1vdW50ICogK3JhdGUsIHBheW1lbnQ6ICthbW91bnQgKyAoK2Ftb3VudCAqICtyYXRlKSB9KVxuICAgICAgICB9XG4gICAgICAgIHNldFBheW1lbnRBcnIoYXJyKTtcblxuICAgICAgICBsZXQgcGFnZXMgPSBNYXRoLmNlaWwoKG5ld0NyZWRpdC5jcmVkaXRQZXJpb2QgKiAxMikvMTApO1xuICAgICAgICBzZXRQYXltZW50QXJyUGFnZXMocGFnZXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NyZWRpdCk7XG4gICAgICAgIGxldCBjcmVkaXRzQXJyID0gWy4uLmNyZWRpdHMsIG5ld0NyZWRpdF07XG5cbiAgICAgICAgc2V0VXNlckRhdGEoKHByZXYpID0+ICh7Li4ucHJldiwgY3JlZGl0czogY3JlZGl0c0Fycn0pKTtcblxuICAgICAgICBzZXREaXNwbGF5U2hvd0NhbGModHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFdoaWNoUGFnZSgocHJldik9PiBwcmV2IDw9IHBheW1lbnRBcnJQYWdlcyA/IHByZXYgKyAxIDogcGF5bWVudEFyclBhZ2VzKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2hpY2hQYWdlKChwcmV2KT0+IHByZXYgPiAxID8gcHJldiAtIDEgOiAxKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yTWFpbkNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVNob3dDYWxjID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlR3b2plIG9ibGljemVuaWE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+PHNwYW4+S0FQSVRBxYE8L3NwYW4+PHNwYW4+T0RTRVRLSTwvc3Bhbj48c3Bhbj5QxYFBVE5PxZrEhzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGF5bWVudEFyclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsLCBpKSA9PiBpIDwgd2hpY2hQYWdlICogMTAgJiYgKHdoaWNoUGFnZSAtIDEpICogMTApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoZWwsIGkpID0+IDxwIGtleT17aX0+e2VsLmFtb3VudH0ge2VsLmludGVyZXN0c30ge2VsLnBheW1lbnR9PC9wPil9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX0+d2N6ZcWbbmllanN6YTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkt0w7NyYSBzdHJvbmEgbmEge3BheW1lbnRBcnJQYWdlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfT5uYXN0xJlwbmE8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pm5hc3TEmXBuYTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wiYnV0dG9uXCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlBvd3LDs3QgZG8gb2JsaWN6ZcWEPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNhbGN1bGF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5PYmxpY3ogcmF0eSBrcmVkeXR1PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17YW1vdW50fSBvbkZvY3VzPXtoYW5kbGVBbW91bnRGb2N1c30gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PlBMTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicmF0ZVwifSB2YWx1ZT17cmF0ZX0gb25Gb2N1cz17aGFuZGxlUmF0ZUZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUmF0ZUNoYW5nZX0gb25CbHVyPXtoYW5kbGVSYXRlQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT4lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJwZXJpb2RcIn0gdmFsdWU9e3BlcmlvZH0gb25Gb2N1cz17aGFuZGxlUGVyaW9kRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUGVyaW9kQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Pa3Jlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFkaW9cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJzdGHFgmFSYXRhXCIgdmFsdWU9e1wic3RhxYJhUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwic3RhxYJhUmF0YVwifS8+PGxhYmVsPlJhdGEgc3RhxYJhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInptaWVubmFSYXRhXCIgdmFsdWU9e1wiem1pZW5uYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInptaWVubmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSB6bWllbm5hPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+T2JsaWN6PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2lkZXJIaXN0b3J5IHR5cGU9e1wiS3JlZHl0L3lcIn0gdXNlckRhdGE9e3VzZXJEYXRhfSBzZXRVc2VyRGF0YT17c2V0VXNlckRhdGF9IGJ0bk1pbnVzRm49e2ZpbHRlcn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWRpdENhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjAyNmZkZDY4NGY0N2I1NDY1OTY3XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJTaWRlckhpc3RvcnkiLCJDcmVkaXRDYWxjdWxhdG9yIiwiX3JlZiIsInVzZXJMb2dJbiIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJmaWx0ZXIiLCJpbnB1dFN0eWxpbmciLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRpc3BsYXlTaG93Q2FsYyIsInNldERpc3BsYXlTaG93Q2FsYyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYW1vdW50Iiwic2V0QW1vdW50IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJyYXRlIiwic2V0UmF0ZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwicGVyaW9kIiwic2V0UGVyaW9kIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwiY3JlZGl0VHlwZSIsInNldENyZWRpdFR5cGUiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiaXNTZW50Iiwic2V0SXNTZW50IiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInVzZXJEYXRhQmFzZSIsInNldFVzZXJEYXRhQmFzZSIsImlkIiwibmFtZSIsImNyZWRpdHMiLCJsb2FucyIsImRlcG9zaXRzIiwiYm9uZHMiLCJoYW5kbGVSYWRpb0NoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl91c2VTdGF0ZTE1IiwidW5kZWZpbmVkIiwiX3VzZVN0YXRlMTYiLCJwYXltZW50QXJyIiwic2V0UGF5bWVudEFyciIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJwYXltZW50QXJyUGFnZXMiLCJzZXRQYXltZW50QXJyUGFnZXMiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwid2hpY2hQYWdlIiwic2V0V2hpY2hQYWdlIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NyZWRpdCIsImRhdGUiLCJEYXRlIiwiY3JlZGl0UGVyaW9kIiwiYXJyIiwiaSIsInB1c2giLCJpbnRlcmVzdHMiLCJwYXltZW50IiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsImNvbnNvbGUiLCJsb2ciLCJjcmVkaXRzQXJyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHJldiIsIl9vYmplY3RTcHJlYWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsImVsIiwibWFwIiwia2V5IiwidHlwZSIsIm9uQ2xpY2siLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0Iiwib25Gb2N1cyIsImhhbmRsZUFtb3VudEZvY3VzIiwib25DaGFuZ2UiLCJoYW5kbGVBbW91bnRDaGFuZ2UiLCJvbkJsdXIiLCJoYW5kbGVBbW91bnRCbHVyIiwiaGFuZGxlUmF0ZUZvY3VzIiwiaGFuZGxlUmF0ZUNoYW5nZSIsImhhbmRsZVJhdGVCbHVyIiwiaGFuZGxlUGVyaW9kRm9jdXMiLCJoYW5kbGVQZXJpb2RDaGFuZ2UiLCJoYW5kbGVQZXJpb2RCbHVyIiwiY2hlY2tlZCIsImJ0bk1pbnVzRm4iXSwic291cmNlUm9vdCI6IiJ9