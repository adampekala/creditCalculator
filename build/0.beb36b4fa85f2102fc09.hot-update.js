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
  var handleCreditSubmit = function (e) {
    debugger;
    e.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calculatorMainContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mainCalculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Oblicz raty kredytu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleCreditSubmit
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
    onSubmit: handleCreditSubmit,
    onClick: function handleClick(e) {
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
      e.preventDefault();
    }
  }, "Oblicz")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CalculatorCommonComponents_sider__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCalculator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a08d12353c6308110311"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQztNQUFBLEVBQUM7TUFDekdyQyxDQUFDLENBQUNJLGNBQWMsRUFBRTtJQUN0QjtFQStCdUgsR0FBQyxRQUFNLENBQVMsQ0FDaEgsQ0FDTCxDQUNKLGVBQ05qRCwwREFBQSxDQUFDRyx5RUFBWSxPQUFFLENBQ2I7QUFFZCxDQUFDO0FBRUQsK0RBQWVDLGdCQUFnQjs7Ozs7Ozs7VUM3SC9CLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9NYWluL2NyZWRpdENhbGN1bGF0b3IvY3JlZGl0Q2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFNpZGVySGlzdG9yeSBmcm9tIFwiLi4vQ2FsY3VsYXRvckNvbW1vbkNvbXBvbmVudHMvc2lkZXJcIjtcblxuY29uc3QgQ3JlZGl0Q2FsY3VsYXRvciA9ICh7dXNlckxvZ0luLCB1c2VyRGF0YSwgc2V0VXNlckRhdGF9KSA9PiB7XG4gICAgY29uc3QgaW5wdXRTdHlsaW5nID0ge2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn07XG4gICAgY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcbiAgICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIGNvbnN0IFtjcmVkaXRUeXBlLCBzZXRDcmVkaXRUeXBlXSA9IHVzZVN0YXRlKFwic3RhxYJhUmF0YVwiKTtcbiAgICBjb25zdCBbaXNTZW50LCBzZXRJc1NlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt1c2VyRGF0YUJhc2UsIHNldFVzZXJEYXRhQmFzZV0gPSB1c2VTdGF0ZSh1c2VyRGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2codXNlckRhdGFCYXNlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyRGF0YSk7XG4gICAgY29uc3QgbmV3QmFzZSA9IHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGtsdWN6MjogXCJ3d3dcIixcbiAgICAgICAga2x1Y3oxOiBcImRkZFwiXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhuZXdCYXNlKTtcbiAgICAvLyBjb25zdCB7aWQsIG5hbWUsIGNyZWRpdHMsIGxvYW5zLCBkZXBvc2l0cywgYm9uZHN9ID0gdXNlckRhdGFCYXNlO1xuXG4gICAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRDcmVkaXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Rm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBrd290xJkga3JlZHl0dVwiICYmIHNldEFtb3VudChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Qmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldEFtb3VudChcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiICYmIHNldFJhdGUoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFJhdGUoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRSYXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiICYmIHNldFBlcmlvZChcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQZXJpb2QoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFBlcmlvZChcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgfVxuXG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG5cblxuICAgICAgICAvLyBsZXQgYmFzZSA9IFsuLi51c2VyRGF0YUJhc2VdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhiYXNlKTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gbGV0IG5ld0NyZWRpdCA9IHtcbiAgICAgICAgLy8gICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgLy8gICAgIHJhdGU6IHJhdGUsXG4gICAgICAgIC8vICAgICBjcmVkaXRQZXJpb2Q6IHBlcmlvZFxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdDcmVkaXQpO1xuICAgICAgICAvLyBiYXNlLnBvcChuZXdDcmVkaXQpO1xuXG4gICAgICAgIGZldGNoKGAke0FQSX0vZGF0YS8zYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3QmFzZSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ3JlZGl0U3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGN1bGF0b3JNYWluQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNhbGN1bGF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPk9ibGljeiByYXR5IGtyZWR5dHU8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ3JlZGl0U3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXthbW91bnR9IG9uRm9jdXM9e2hhbmRsZUFtb3VudEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfSBvbkJsdXI9e2hhbmRsZUFtb3VudEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+UExOPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJyYXRlXCJ9IHZhbHVlPXtyYXRlfSBvbkZvY3VzPXtoYW5kbGVSYXRlRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVSYXRlQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVJhdGVCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PiU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInBlcmlvZFwifSB2YWx1ZT17cGVyaW9kfSBvbkZvY3VzPXtoYW5kbGVQZXJpb2RGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVBlcmlvZENoYW5nZX0gb25CbHVyPXtoYW5kbGVQZXJpb2RCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pk9rcmVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFkaW9cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInN0YcWCYVJhdGFcIiB2YWx1ZT17XCJzdGHFgmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJzdGHFgmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSBzdGHFgmE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJ6bWllbm5hUmF0YVwiIHZhbHVlPXtcInptaWVubmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJ6bWllbm5hUmF0YVwifS8+PGxhYmVsPlJhdGEgem1pZW5uYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifSBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uU3VibWl0PXtoYW5kbGVDcmVkaXRTdWJtaXR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5PYmxpY3o8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2lkZXJIaXN0b3J5Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJhMDhkMTIzNTNjNjMwODExMDMxMVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiU2lkZXJIaXN0b3J5IiwiQ3JlZGl0Q2FsY3VsYXRvciIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiaW5wdXRTdHlsaW5nIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJwZXJpb2QiLCJzZXRQZXJpb2QiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImNyZWRpdFR5cGUiLCJzZXRDcmVkaXRUeXBlIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwiaXNTZW50Iiwic2V0SXNTZW50IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInVzZXJEYXRhQmFzZSIsInNldFVzZXJEYXRhQmFzZSIsIm5ld0Jhc2UiLCJpZCIsImtsdWN6MiIsImtsdWN6MSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSYWRpb0NoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNyZWRpdFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0Iiwic3R5bGUiLCJ0eXBlIiwibmFtZSIsIm9uRm9jdXMiLCJoYW5kbGVBbW91bnRGb2N1cyIsIm9uQ2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlQW1vdW50Qmx1ciIsImhhbmRsZVJhdGVGb2N1cyIsImhhbmRsZVJhdGVDaGFuZ2UiLCJoYW5kbGVSYXRlQmx1ciIsImhhbmRsZVBlcmlvZEZvY3VzIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwiaGFuZGxlUGVyaW9kQmx1ciIsImNoZWNrZWQiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==