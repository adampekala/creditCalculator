"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 55:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CalculatorCommonComponents_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony import */ var _CalculatorCommonComponents_sider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
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
  // console.log(userDataBase);
  // console.log(userData);

  console.log({
    id: 3,
    klucz2: "www",
    klucz1: "ddd"
  });
  // const {id, name, credits, loans, deposits, bonds} = userDataBase;

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

      // let base = [...userDataBase];
      // console.log(base);
      // debugger
      // let newCredit = {
      //     date: new Date(),
      //     amount: amount,
      //     rate: rate,
      //     creditPeriod: period
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
/******/ 	__webpack_require__.h = function() { return "4ea9f3ed7f5e1c563261"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxFQUFFLFdBQVk7SUFBQ1csUUFBUSxFQUFFZCxpQkFBa0I7SUFBQ3dCLE9BQU8sRUFBRXZDLFVBQVUsS0FBSztFQUFZLEVBQUUsZUFBQTVCLDBEQUFBLGdCQUFPLGlCQUFVLENBQVEsZUFDdkpBLDBEQUFBO0lBQU9xRCxJQUFJLEVBQUUsT0FBUTtJQUFDQyxJQUFJLEVBQUMsYUFBYTtJQUFDUixLQUFLLEVBQUUsYUFBYztJQUFDVyxRQUFRLEVBQUVkLGlCQUFrQjtJQUFDd0IsT0FBTyxFQUFFdkMsVUFBVSxLQUFLO0VBQWMsRUFBRSxlQUFBNUIsMERBQUEsZ0JBQU8sY0FBWSxDQUFRLENBQzdKLGVBRU5BLDBEQUFBO0lBQVFxRCxJQUFJLEVBQUUsUUFBUztJQUFDTCxTQUFTLEVBQUUsV0FBWTtJQUFDb0IsT0FBTyxFQW5EdkQsU0FBZEMsV0FBV0EsQ0FBSXpCLENBQUMsRUFBSztNQUN2QkEsQ0FBQyxDQUFDTyxjQUFjLEVBQUU7O01BRWxCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0o7RUE4QnlGLEdBQUMsUUFBTSxDQUFTLENBQ2xGLENBQ0wsQ0FDSixlQUNObkQsMERBQUEsQ0FBQ0cseUVBQVksT0FBRSxDQUNiO0FBRWQsQ0FBQztBQUVELCtEQUFlQyxnQkFBZ0I7Ozs7Ozs7O1VDNUgvQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvTWFpbi9jcmVkaXRDYWxjdWxhdG9yL2NyZWRpdENhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBTaWRlckhpc3RvcnkgZnJvbSBcIi4uL0NhbGN1bGF0b3JDb21tb25Db21wb25lbnRzL3NpZGVyXCI7XG5cbmNvbnN0IENyZWRpdENhbGN1bGF0b3IgPSAoe3VzZXJMb2dJbiwgdXNlckRhdGEsIHNldFVzZXJEYXRhfSkgPT4ge1xuICAgIGNvbnN0IGlucHV0U3R5bGluZyA9IHtkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9O1xuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCI7XG4gICAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICBjb25zdCBbY3JlZGl0VHlwZSwgc2V0Q3JlZGl0VHlwZV0gPSB1c2VTdGF0ZShcInN0YcWCYVJhdGFcIik7XG4gICAgY29uc3QgW2lzU2VudCwgc2V0SXNTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdXNlckRhdGFCYXNlLCBzZXRVc2VyRGF0YUJhc2VdID0gdXNlU3RhdGUodXNlckRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhQmFzZSk7XG4gICAgLy8gY29uc29sZS5sb2codXNlckRhdGEpO1xuICAgIGNvbnN0IG5ld0Jhc2UgPSB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBrbHVjejI6IFwid3d3XCIsXG4gICAgICAgIGtsdWN6MTogXCJkZGRcIlxuICAgIH07XG4gICAgY29uc29sZS5sb2cobmV3QmFzZSk7XG4gICAgLy8gY29uc3Qge2lkLCBuYW1lLCBjcmVkaXRzLCBsb2FucywgZGVwb3NpdHMsIGJvbmRzfSA9IHVzZXJEYXRhQmFzZTtcblxuICAgIGNvbnN0IGhhbmRsZVJhZGlvQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Q3JlZGl0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIiAmJiBzZXRBbW91bnQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRBbW91bnQoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIiAmJiBzZXRSYXRlKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRSYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UmF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIiAmJiBzZXRQZXJpb2QoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRQZXJpb2QoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gbGV0IGJhc2UgPSBbLi4udXNlckRhdGFCYXNlXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYmFzZSk7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIGxldCBuZXdDcmVkaXQgPSB7XG4gICAgICAgIC8vICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIC8vICAgICByYXRlOiByYXRlLFxuICAgICAgICAvLyAgICAgY3JlZGl0UGVyaW9kOiBwZXJpb2RcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Q3JlZGl0KTtcbiAgICAgICAgLy8gYmFzZS5wb3AobmV3Q3JlZGl0KTtcblxuICAgICAgICAvLyBmZXRjaChgJHtBUEl9L2RhdGEvM2AsIHtcbiAgICAgICAgLy8gICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0Jhc2UpLFxuICAgICAgICAvLyAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxuICAgICAgICAvLyB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSlcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvck1haW5Db250YWluZXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+T2JsaWN6IHJhdHkga3JlZHl0dTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e2Ftb3VudH0gb25Gb2N1cz17aGFuZGxlQW1vdW50Rm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInJhdGVcIn0gdmFsdWU9e3JhdGV9IG9uRm9jdXM9e2hhbmRsZVJhdGVGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVJhdGVDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUmF0ZUJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicGVyaW9kXCJ9IHZhbHVlPXtwZXJpb2R9IG9uRm9jdXM9e2hhbmRsZVBlcmlvZEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVBlcmlvZEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+T2tyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWRpb1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwic3RhxYJhUmF0YVwiIHZhbHVlPXtcInN0YcWCYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInN0YcWCYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHN0YcWCYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInptaWVubmFSYXRhXCIgdmFsdWU9e1wiem1pZW5uYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInptaWVubmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSB6bWllbm5hPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pk9ibGljejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTaWRlckhpc3RvcnkvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWRpdENhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjRlYTlmM2VkN2Y1ZTFjNTYzMjYxXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJTaWRlckhpc3RvcnkiLCJDcmVkaXRDYWxjdWxhdG9yIiwiX3JlZiIsInVzZXJMb2dJbiIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJpbnB1dFN0eWxpbmciLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInBlcmlvZCIsInNldFBlcmlvZCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiY3JlZGl0VHlwZSIsInNldENyZWRpdFR5cGUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwidXNlckRhdGFCYXNlIiwic2V0VXNlckRhdGFCYXNlIiwiY29uc29sZSIsImxvZyIsImlkIiwia2x1Y3oyIiwia2x1Y3oxIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwidHlwZSIsIm5hbWUiLCJvbkZvY3VzIiwiaGFuZGxlQW1vdW50Rm9jdXMiLCJvbkNoYW5nZSIsImhhbmRsZUFtb3VudENoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUFtb3VudEJsdXIiLCJoYW5kbGVSYXRlRm9jdXMiLCJoYW5kbGVSYXRlQ2hhbmdlIiwiaGFuZGxlUmF0ZUJsdXIiLCJoYW5kbGVQZXJpb2RGb2N1cyIsImhhbmRsZVBlcmlvZENoYW5nZSIsImhhbmRsZVBlcmlvZEJsdXIiLCJjaGVja2VkIiwib25DbGljayIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==