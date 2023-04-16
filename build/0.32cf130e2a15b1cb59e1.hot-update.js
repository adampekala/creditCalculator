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
  var newBase = {
    id: 3,
    klucz2: "www",
    klucz1: "ddd"
  };
  console.log(newBase);
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
    onSubmit: function handleCreditSubmit(e) {
      debugger;
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

      fetch("".concat("http://localhost:3005", "/data/3"), {
        method: "PUT",
        body: JSON.stringify(newBase),
        headers: {
          "Content-type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        return console.log(data);
      })["catch"](function (reject) {
        return console.log(reject);
      });
    }
  }, "Oblicz")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_sider__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "33219e67dc55ab348a14"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQVMsQ0FDbEUsQ0FDTCxDQUNKLGVBQ05sRiwwREFBQSxDQUFDRyx5RUFBWSxPQUFFLENBQ2I7QUFFZCxDQUFDO0FBRUQsK0RBQWVDLGdCQUFnQjs7Ozs7Ozs7VUM1SC9CLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9NYWluL2NyZWRpdENhbGN1bGF0b3IvY3JlZGl0Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFNpZGVySGlzdG9yeSBmcm9tIFwiLi4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvc2lkZXJcIjtcblxuY29uc3QgQ3JlZGl0Q2FsY3VsYXRvciA9ICh7dXNlckxvZ0luLCB1c2VyRGF0YSwgc2V0VXNlckRhdGF9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRTdHlsaW5nID0ge2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn07XG4gICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIGNvbnN0IFtjcmVkaXRUeXBlLCBzZXRDcmVkaXRUeXBlXSA9IHVzZVN0YXRlKFwic3RhxYJhUmF0YVwiKTtcbiAgICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VyRGF0YUJhc2UsIHNldFVzZXJEYXRhQmFzZV0gPSB1c2VTdGF0ZSh1c2VyRGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2codXNlckRhdGFCYXNlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG4gICAgY29uc3QgbmV3QmFzZSA9IHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGtsdWN6MjogXCJ3d3dcIixcbiAgICAgICAga2x1Y3oxOiBcImRkZFwiXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhuZXdCYXNlKTtcbiAgICAvLyBjb25zdCB7aWQsIG5hbWUsIGNyZWRpdHMsIGxvYW5zLCBkZXBvc2l0cywgYm9uZHN9ID0gdXNlckRhdGFCYXNlO1xuXG4gICAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRDcmVkaXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Rm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBrd290xJkga3JlZHl0dVwiICYmIHNldEFtb3VudChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldEFtb3VudChcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiICYmIHNldFJhdGUoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFJhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRSYXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiICYmIHNldFBlcmlvZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQZXJpb2QoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBlcmlvZChcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gbGV0IGJhc2UgPSBbLi4udXNlckRhdGFCYXNlXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYmFzZSk7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vIGxldCBuZXdDcmVkaXQgPSB7XG4gICAgICAgIC8vICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIC8vICAgICByYXRlOiByYXRlLFxuICAgICAgICAvLyAgICAgY3JlZGl0UGVyaW9kOiBwZXJpb2RcbiAgICAgICAgLy8gfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3Q3JlZGl0KTtcbiAgICAgICAgLy8gYmFzZS5wb3AobmV3Q3JlZGl0KTtcblxuICAgICAgICBmZXRjaChgJHtBUEl9L2RhdGEvM2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0Jhc2UpLFxuICAgICAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSlcblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNyZWRpdFN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjYWxjdWxhdG9yTWFpbkNvbnRhaW5lclwifT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5DYWxjdWxhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5PYmxpY3ogcmF0eSBrcmVkeXR1PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUNyZWRpdFN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17YW1vdW50fSBvbkZvY3VzPXtoYW5kbGVBbW91bnRGb2N1c30gb25DaGFuZ2U9e2hhbmRsZUFtb3VudENoYW5nZX0gb25CbHVyPXtoYW5kbGVBbW91bnRCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PlBMTjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicmF0ZVwifSB2YWx1ZT17cmF0ZX0gb25Gb2N1cz17aGFuZGxlUmF0ZUZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUmF0ZUNoYW5nZX0gb25CbHVyPXtoYW5kbGVSYXRlQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT4lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJwZXJpb2RcIn0gdmFsdWU9e3BlcmlvZH0gb25Gb2N1cz17aGFuZGxlUGVyaW9kRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUGVyaW9kQmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5Pa3Jlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJhZGlvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJzdGHFgmFSYXRhXCIgdmFsdWU9e1wic3RhxYJhUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwic3RhxYJhUmF0YVwifS8+PGxhYmVsPlJhdGEgc3RhxYJhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwiem1pZW5uYVJhdGFcIiB2YWx1ZT17XCJ6bWllbm5hUmF0YVwifSBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9IGNoZWNrZWQ9e2NyZWRpdFR5cGUgPT09IFwiem1pZW5uYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHptaWVubmE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImJ0bk9ibGljelwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+T2JsaWN6PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNpZGVySGlzdG9yeS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0Q2FsY3VsYXRvcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMzMyMTllNjdkYzU1YWIzNDhhMTRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmF2aWdhdGlvbiIsIlNpZGVySGlzdG9yeSIsIkNyZWRpdENhbGN1bGF0b3IiLCJfcmVmIiwidXNlckxvZ0luIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImlucHV0U3R5bGluZyIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYW1vdW50Iiwic2V0QW1vdW50IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJyYXRlIiwic2V0UmF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicGVyaW9kIiwic2V0UGVyaW9kIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJjcmVkaXRUeXBlIiwic2V0Q3JlZGl0VHlwZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsImlzU2VudCIsInNldElzU2VudCIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJ1c2VyRGF0YUJhc2UiLCJzZXRVc2VyRGF0YUJhc2UiLCJuZXdCYXNlIiwiaWQiLCJrbHVjejIiLCJrbHVjejEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJoYW5kbGVDcmVkaXRTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlIiwidHlwZSIsIm5hbWUiLCJvbkZvY3VzIiwiaGFuZGxlQW1vdW50Rm9jdXMiLCJvbkNoYW5nZSIsImhhbmRsZUFtb3VudENoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUFtb3VudEJsdXIiLCJoYW5kbGVSYXRlRm9jdXMiLCJoYW5kbGVSYXRlQ2hhbmdlIiwiaGFuZGxlUmF0ZUJsdXIiLCJoYW5kbGVQZXJpb2RGb2N1cyIsImhhbmRsZVBlcmlvZENoYW5nZSIsImhhbmRsZVBlcmlvZEJsdXIiLCJjaGVja2VkIiwib25DbGljayIsImhhbmRsZUNsaWNrIiwiZmV0Y2giLCJjb25jYXQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=