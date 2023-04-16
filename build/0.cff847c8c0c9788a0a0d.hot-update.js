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

    // let base = [...userDataBase];
    // console.log(base);
    // debugger
    // let newCredit = {

    // };
    // console.log(newCredit);
    // base.pop(newCredit);

    // fetch(`${API}/data/3`, {
    //     method: "PUT",
    //     body: JSON.stringify(newBase),
    //     headers: {"Content-type": "application/json"}
    // }).then(response => response.json()).then(data => console.log(data)).catch(reject => console.log(reject))
    //
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
  }, "Oblicz")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_sider__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1285229d8d2ef6534b5a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRTtFQUFRLGdCQUNwQmxFLDBEQUFBO0lBQU9tRSxJQUFJLEVBQUUsT0FBUTtJQUFDeEIsSUFBSSxFQUFDLGdCQUFXO0lBQUNRLEtBQUssRUFBRSxXQUFZO0lBQUN1QixRQUFRLEVBQUUxQixpQkFBa0I7SUFBQ29DLE9BQU8sRUFBRXBELFVBQVUsS0FBSztFQUFZLEVBQUUsZUFBQWhDLDBEQUFBLGdCQUFPLGlCQUFVLENBQVEsZUFDdkpBLDBEQUFBO0lBQU9tRSxJQUFJLEVBQUUsT0FBUTtJQUFDeEIsSUFBSSxFQUFDLGFBQWE7SUFBQ1EsS0FBSyxFQUFFLGFBQWM7SUFBQ3VCLFFBQVEsRUFBRTFCLGlCQUFrQjtJQUFDb0MsT0FBTyxFQUFFcEQsVUFBVSxLQUFLO0VBQWMsRUFBRSxlQUFBaEMsMERBQUEsZ0JBQU8sY0FBWSxDQUFRLENBQzdKLGVBRU5BLDBEQUFBO0lBQVFtRSxJQUFJLEVBQUUsUUFBUztJQUFDRCxTQUFTLEVBQUUsV0FBWTtJQUFDRSxPQUFPLEVBQUVoQjtFQUFZLEdBQUMsUUFBTSxDQUFTLENBQ2xGLENBQ0wsQ0FHUixlQUNOcEQsMERBQUEsQ0FBQ0cseUVBQVksT0FBRSxDQUNiO0FBRWQsQ0FBQztBQUVELCtEQUFlQyxnQkFBZ0I7Ozs7Ozs7O1VDdkkvQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9jcmVkaXRDYWxjdWxhdG9yL2NyZWRpdENhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBTaWRlckhpc3RvcnkgZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyXCI7XG5cbmNvbnN0IENyZWRpdENhbGN1bGF0b3IgPSAoe3VzZXJMb2dJbiwgdXNlckRhdGEsIHNldFVzZXJEYXRhfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0U3R5bGluZyA9IHtkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9O1xuICAgIGNvbnN0IFtkaXNwbGF5U2hvd0NhbGMsIHNldERpc3BsYXlTaG93Q2FsY10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIGNvbnN0IFtjcmVkaXRUeXBlLCBzZXRDcmVkaXRUeXBlXSA9IHVzZVN0YXRlKFwic3RhxYJhUmF0YVwiKTtcbiAgICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VyRGF0YUJhc2UsIHNldFVzZXJEYXRhQmFzZV0gPSB1c2VTdGF0ZSh1c2VyRGF0YSk7XG5cbiAgICBjb25zdCB7aWQsIG5hbWUsIGNyZWRpdHMsIGxvYW5zLCBkZXBvc2l0cywgYm9uZHN9ID0gdXNlckRhdGFCYXNlO1xuXG4gICAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRDcmVkaXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Rm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBrd290xJkga3JlZHl0dVwiICYmIHNldEFtb3VudChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldEFtb3VudChcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiICYmIHNldFJhdGUoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFJhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRSYXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiICYmIHNldFBlcmlvZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQZXJpb2QoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBlcmlvZChcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IG5ld0NyZWRpdCA9IHtcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgICAgIHJhdGU6IHJhdGUsXG4gICAgICAgICAgICBjcmVkaXRQZXJpb2Q6IHBlcmlvZFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdDcmVkaXQpO1xuICAgICAgICBsZXQgY3JlZGl0c0FyciA9IFsuLi5jcmVkaXRzLCBuZXdDcmVkaXRdO1xuXG4gICAgICAgIHNldFVzZXJEYXRhKChwcmV2KSA9PiAoey4uLnByZXYsIGNyZWRpdHM6IGNyZWRpdHNBcnJ9KSk7XG5cbiAgICAgICAgLy8gbGV0IGJhc2UgPSBbLi4udXNlckRhdGFCYXNlXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYmFzZSk7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIGxldCBuZXdDcmVkaXQgPSB7XG5cbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Q3JlZGl0KTtcbiAgICAgICAgLy8gYmFzZS5wb3AobmV3Q3JlZGl0KTtcblxuICAgICAgICAvLyBmZXRjaChgJHtBUEl9L2RhdGEvM2AsIHtcbiAgICAgICAgLy8gICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0Jhc2UpLFxuICAgICAgICAvLyAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxuICAgICAgICAvLyB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSlcbiAgICAgICAgLy9cbiAgICAgICAgc2V0RGlzcGxheVNob3dDYWxjKHRydWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yTWFpbkNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICB7ZGlzcGxheVNob3dDYWxjID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlR3b2plIG9ibGljemVuaWE8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGFiZWxhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcImJ1dHRvblwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Qb3dyw7N0IGRvIG9ibGljemXFhDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+T2JsaWN6IHJhdHkga3JlZHl0dTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e2Ftb3VudH0gb25Gb2N1cz17aGFuZGxlQW1vdW50Rm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInJhdGVcIn0gdmFsdWU9e3JhdGV9IG9uRm9jdXM9e2hhbmRsZVJhdGVGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVJhdGVDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUmF0ZUJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicGVyaW9kXCJ9IHZhbHVlPXtwZXJpb2R9IG9uRm9jdXM9e2hhbmRsZVBlcmlvZEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVBlcmlvZEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+T2tyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhZGlvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwic3RhxYJhUmF0YVwiIHZhbHVlPXtcInN0YcWCYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInN0YcWCYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHN0YcWCYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJ6bWllbm5hUmF0YVwiIHZhbHVlPXtcInptaWVubmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJ6bWllbm5hUmF0YVwifS8+PGxhYmVsPlJhdGEgem1pZW5uYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pk9ibGljejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVySGlzdG9yeS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0Q2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMTI4NTIyOWQ4ZDJlZjY1MzRiNWFcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmF2aWdhdGlvbiIsIlNpZGVySGlzdG9yeSIsIkNyZWRpdENhbGN1bGF0b3IiLCJfcmVmIiwidXNlckxvZ0luIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImlucHV0U3R5bGluZyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGlzcGxheVNob3dDYWxjIiwic2V0RGlzcGxheVNob3dDYWxjIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwZXJpb2QiLCJzZXRQZXJpb2QiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJjcmVkaXRUeXBlIiwic2V0Q3JlZGl0VHlwZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwidXNlckRhdGFCYXNlIiwic2V0VXNlckRhdGFCYXNlIiwiaWQiLCJuYW1lIiwiY3JlZGl0cyIsImxvYW5zIiwiZGVwb3NpdHMiLCJib25kcyIsImhhbmRsZVJhZGlvQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NyZWRpdCIsImRhdGUiLCJEYXRlIiwiY3JlZGl0UGVyaW9kIiwiY29uc29sZSIsImxvZyIsImNyZWRpdHNBcnIiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwcmV2IiwiX29iamVjdFNwcmVhZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0Iiwic3R5bGUiLCJvbkZvY3VzIiwiaGFuZGxlQW1vdW50Rm9jdXMiLCJvbkNoYW5nZSIsImhhbmRsZUFtb3VudENoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUFtb3VudEJsdXIiLCJoYW5kbGVSYXRlRm9jdXMiLCJoYW5kbGVSYXRlQ2hhbmdlIiwiaGFuZGxlUmF0ZUJsdXIiLCJoYW5kbGVQZXJpb2RGb2N1cyIsImhhbmRsZVBlcmlvZENoYW5nZSIsImhhbmRsZVBlcmlvZEJsdXIiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==