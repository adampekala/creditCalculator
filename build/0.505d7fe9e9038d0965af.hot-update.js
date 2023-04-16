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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz kwotę kredytu"),
    _useState2 = _slicedToArray(_useState, 2),
    amount = _useState2[0],
    setAmount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz wysokość odsetek"),
    _useState4 = _slicedToArray(_useState3, 2),
    rate = _useState4[0],
    setRate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz okres kredytu w latach"),
    _useState6 = _slicedToArray(_useState5, 2),
    period = _useState6[0],
    setPeriod = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("stałaRata"),
    _useState8 = _slicedToArray(_useState7, 2),
    creditType = _useState8[0],
    setCreditType = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isSent = _useState10[0],
    setIsSent = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userData),
    _useState12 = _slicedToArray(_useState11, 2),
    userDataBase = _useState12[0],
    setUserDataBase = _useState12[1];
  var id = userDataBase.id,
    name = userDataBase.name,
    credits = userDataBase.credits,
    loans = userDataBase.loans,
    deposits = userDataBase.deposits,
    bonds = userDataBase.bonds;
  var handleRadioChange = function (e) {
    setCreditType(e.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calculatorMainContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    }
  }, "Oblicz")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_sider__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cff847c8c0c9788a0a0d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNKO0VBOEJ5RixHQUFDLFFBQU0sQ0FBUyxDQUNsRixDQUNMLENBQ0osZUFDTjVFLDBEQUFBLENBQUNHLHlFQUFZLE9BQUUsQ0FDYjtBQUVkLENBQUM7QUFFRCwrREFBZUMsZ0JBQWdCOzs7Ozs7OztVQzVIL0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlclwiO1xuXG5jb25zdCBDcmVkaXRDYWxjdWxhdG9yID0gKHt1c2VyTG9nSW4sIHVzZXJEYXRhLCBzZXRVc2VyRGF0YX0pID0+IHtcbiAgICBjb25zdCBpbnB1dFN0eWxpbmcgPSB7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifTtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZShcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgY29uc3QgW2NyZWRpdFR5cGUsIHNldENyZWRpdFR5cGVdID0gdXNlU3RhdGUoXCJzdGHFgmFSYXRhXCIpO1xuICAgIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJEYXRhQmFzZSwgc2V0VXNlckRhdGFCYXNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcblxuICAgIGNvbnN0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YUJhc2U7XG5cbiAgICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENyZWRpdFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIgJiYgc2V0QW1vdW50KFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0QW1vdW50KFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIgJiYgc2V0UmF0ZShcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UmF0ZShlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFJhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIgJiYgc2V0UGVyaW9kKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGVyaW9kKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgbmV3Q3JlZGl0ID0ge1xuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAgICAgcmF0ZTogcmF0ZSxcbiAgICAgICAgICAgIGNyZWRpdFBlcmlvZDogcGVyaW9kXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NyZWRpdCk7XG4gICAgICAgIGxldCBjcmVkaXRzQXJyID0gWy4uLmNyZWRpdHMsIG5ld0NyZWRpdF07XG5cbiAgICAgICAgc2V0VXNlckRhdGEoKHByZXYpID0+ICh7Li4ucHJldiwgY3JlZGl0czogY3JlZGl0c0Fycn0pKTtcblxuICAgICAgICAvLyBsZXQgYmFzZSA9IFsuLi51c2VyRGF0YUJhc2VdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhiYXNlKTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gbGV0IG5ld0NyZWRpdCA9IHtcblxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdDcmVkaXQpO1xuICAgICAgICAvLyBiYXNlLnBvcChuZXdDcmVkaXQpO1xuXG4gICAgICAgIC8vIGZldGNoKGAke0FQSX0vZGF0YS8zYCwge1xuICAgICAgICAvLyAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3QmFzZSksXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgIC8vIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuICAgICAgICAvL1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yTWFpbkNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5PYmxpY3ogcmF0eSBrcmVkeXR1PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17YW1vdW50fSBvbkZvY3VzPXtoYW5kbGVBbW91bnRGb2N1c30gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PlBMTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicmF0ZVwifSB2YWx1ZT17cmF0ZX0gb25Gb2N1cz17aGFuZGxlUmF0ZUZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUmF0ZUNoYW5nZX0gb25CbHVyPXtoYW5kbGVSYXRlQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT4lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJwZXJpb2RcIn0gdmFsdWU9e3BlcmlvZH0gb25Gb2N1cz17aGFuZGxlUGVyaW9kRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUGVyaW9kQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Pa3Jlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhZGlvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJzdGHFgmFSYXRhXCIgdmFsdWU9e1wic3RhxYJhUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwic3RhxYJhUmF0YVwifS8+PGxhYmVsPlJhdGEgc3RhxYJhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwiem1pZW5uYVJhdGFcIiB2YWx1ZT17XCJ6bWllbm5hUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwiem1pZW5uYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHptaWVubmE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+T2JsaWN6PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVySGlzdG9yeS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0Q2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiY2ZmODQ3YzhjMGM5Nzg4YTBhMGRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmF2aWdhdGlvbiIsIlNpZGVySGlzdG9yeSIsIkNyZWRpdENhbGN1bGF0b3IiLCJfcmVmIiwidXNlckxvZ0luIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImlucHV0U3R5bGluZyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYW1vdW50Iiwic2V0QW1vdW50IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJyYXRlIiwic2V0UmF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicGVyaW9kIiwic2V0UGVyaW9kIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJjcmVkaXRUeXBlIiwic2V0Q3JlZGl0VHlwZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsImlzU2VudCIsInNldElzU2VudCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJ1c2VyRGF0YUJhc2UiLCJzZXRVc2VyRGF0YUJhc2UiLCJpZCIsIm5hbWUiLCJjcmVkaXRzIiwibG9hbnMiLCJkZXBvc2l0cyIsImJvbmRzIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwidHlwZSIsIm9uRm9jdXMiLCJoYW5kbGVBbW91bnRGb2N1cyIsIm9uQ2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlQW1vdW50Qmx1ciIsImhhbmRsZVJhdGVGb2N1cyIsImhhbmRsZVJhdGVDaGFuZ2UiLCJoYW5kbGVSYXRlQmx1ciIsImhhbmRsZVBlcmlvZEZvY3VzIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwiaGFuZGxlUGVyaW9kQmx1ciIsImNoZWNrZWQiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJuZXdDcmVkaXQiLCJkYXRlIiwiRGF0ZSIsImNyZWRpdFBlcmlvZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVkaXRzQXJyIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHJldiIsIl9vYmplY3RTcHJlYWQiXSwic291cmNlUm9vdCI6IiJ9