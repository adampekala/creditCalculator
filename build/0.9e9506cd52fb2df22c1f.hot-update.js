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
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: inputStyling
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "amount",
    value: amount,
    onFocus: function handleAmountFocus(e) {
      e.preventDefault();
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
/******/ 	__webpack_require__.h = function() { return "32cf130e2a15b1cb59e1"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZTk1MDZjZDUyZmIyZGYyMmMxZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQzRCO0FBQ0g7QUFFL0QsSUFBTUksZ0JBQWdCLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUF3QztFQUFBLElBQXRDQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztFQUN2RCxJQUFNQyxZQUFZLEdBQUc7SUFBQ0MsT0FBTyxFQUFFLE9BQU87SUFBRUMsUUFBUSxFQUFFLFVBQVU7SUFBRUMsS0FBSyxFQUFFO0VBQU8sQ0FBQztFQUU3RSxJQUFBQyxTQUFBLEdBQTRCWiwrQ0FBUSxDQUFDLHFCQUFxQixDQUFDO0lBQUFhLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXBERyxNQUFNLEdBQUFGLFVBQUE7SUFBRUcsU0FBUyxHQUFBSCxVQUFBO0VBQ3hCLElBQUFJLFVBQUEsR0FBd0JqQiwrQ0FBUSxDQUFDLHdCQUF3QixDQUFDO0lBQUFrQixVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFuREUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQTRCckIsK0NBQVEsQ0FBQyw4QkFBOEIsQ0FBQztJQUFBc0IsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBN0RFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUFvQ3pCLCtDQUFRLENBQUMsV0FBVyxDQUFDO0lBQUEwQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUFsREUsVUFBVSxHQUFBRCxVQUFBO0lBQUVFLGFBQWEsR0FBQUYsVUFBQTtFQUNoQyxJQUFBRyxVQUFBLEdBQTRCN0IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQThCLFdBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUFwQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQXdDakMsK0NBQVEsQ0FBQ00sUUFBUSxDQUFDO0lBQUE0QixXQUFBLEdBQUFwQixjQUFBLENBQUFtQixXQUFBO0lBQW5ERSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBQ3BDO0VBQ0E7RUFDQSxJQUFNRyxPQUFPLEdBQUc7SUFDWkMsRUFBRSxFQUFFLENBQUM7SUFDTEMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDO0VBQ3BCOztFQUVBLElBQU1NLGlCQUFpQixHQUFHLFNBQUFBLENBQUNDLENBQUMsRUFBSztJQUM3QmhCLGFBQWEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDakMsQ0FBQztFQWtFRCxvQkFDSS9DLDBEQUFBO0lBQUtpRCxTQUFTLEVBQUU7RUFBMEIsZ0JBQ3RDakQsMERBQUE7SUFBS2lELFNBQVMsRUFBQztFQUFNLGdCQUNqQmpELDBEQUFBLENBQUNFLDhFQUFVLE9BQUUsZUFDYkYsMERBQUE7SUFBS2lELFNBQVMsRUFBQztFQUFnQixnQkFDM0JqRCwwREFBQSxhQUFJLHFCQUFtQixDQUFLLGVBQzVCQSwwREFBQTtJQUFNa0QsUUFBUSxFQVZILFNBQXJCQyxrQkFBa0JBLENBQUlOLENBQUMsRUFBSztNQUM5QkEsQ0FBQyxDQUFDTyxjQUFjLEVBQUU7SUFDdEI7RUFRbUQsZ0JBQy9CcEQsMERBQUE7SUFBT3FELEtBQUssRUFBRTVDO0VBQWEsZ0JBQ3ZCVCwwREFBQTtJQUFPc0QsSUFBSSxFQUFFLE1BQU87SUFBQ0MsSUFBSSxFQUFFLFFBQVM7SUFBQ1IsS0FBSyxFQUFFL0IsTUFBTztJQUFDd0MsT0FBTyxFQXhFekQsU0FBcEJDLGlCQUFpQkEsQ0FBSVosQ0FBQyxFQUFLO01BQzdCQSxDQUFDLENBQUNPLGNBQWMsRUFBRTtNQUNsQlAsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyxxQkFBcUIsSUFBSTlCLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDN0QsQ0FxRXVHO0lBQUN5QyxRQUFRLEVBbkVyRixTQUFyQkMsa0JBQWtCQSxDQUFJZCxDQUFDLEVBQUs7TUFDOUI1QixTQUFTLENBQUM0QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQzdCLENBaUVxSTtJQUFDYSxNQUFNLEVBL0RuSCxTQUFuQkMsZ0JBQWdCQSxDQUFJaEIsQ0FBQyxFQUFLO01BQzVCQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLLEVBQUUsSUFBSTlCLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztJQUM3RDtFQTZEK0osRUFBRSxlQUFBakIsMERBQUE7SUFBTWlELFNBQVMsRUFBRSx1QkFBd0I7SUFBQ0ksS0FBSyxFQUFFO01BQUMzQyxPQUFPLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUU7SUFBVTtFQUFFLEdBQUMsS0FBRyxDQUFPLENBQzFPLGVBRVJYLDBEQUFBO0lBQU9xRCxLQUFLLEVBQUU1QztFQUFhLGdCQUN2QlQsMERBQUE7SUFBT3NELElBQUksRUFBRSxNQUFPO0lBQUNDLElBQUksRUFBRSxNQUFPO0lBQUNSLEtBQUssRUFBRTNCLElBQUs7SUFBQ29DLE9BQU8sRUEvRHZELFNBQWxCTSxlQUFlQSxDQUFJakIsQ0FBQyxFQUFLO01BQzNCQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLLHdCQUF3QixJQUFJMUIsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUM5RCxDQTZEaUc7SUFBQ3FDLFFBQVEsRUEzRGpGLFNBQW5CSyxnQkFBZ0JBLENBQUlsQixDQUFDLEVBQUs7TUFDNUJ4QixPQUFPLENBQUN3QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQzNCLENBeUQ2SDtJQUFDYSxNQUFNLEVBdkQ3RyxTQUFqQkksY0FBY0EsQ0FBSW5CLENBQUMsRUFBSztNQUMxQkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyxFQUFFLElBQUkxQixPQUFPLENBQUMsd0JBQXdCLENBQUM7SUFDOUQ7RUFxRHFKLEVBQUUsZUFBQXJCLDBEQUFBO0lBQU1pRCxTQUFTLEVBQUUsdUJBQXdCO0lBQUNJLEtBQUssRUFBRTtNQUFDM0MsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFO0lBQVU7RUFBRSxHQUFDLEdBQUMsQ0FBTyxDQUM5TixlQUVSWCwwREFBQTtJQUFPcUQsS0FBSyxFQUFFNUM7RUFBYSxnQkFDdkJULDBEQUFBO0lBQU9zRCxJQUFJLEVBQUUsTUFBTztJQUFDQyxJQUFJLEVBQUUsUUFBUztJQUFDUixLQUFLLEVBQUV2QixNQUFPO0lBQUNnQyxPQUFPLEVBdkR6RCxTQUFwQlMsaUJBQWlCQSxDQUFJcEIsQ0FBQyxFQUFLO01BQzdCQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLLDhCQUE4QixJQUFJdEIsU0FBUyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxDQXFEdUc7SUFBQ2lDLFFBQVEsRUFuRHJGLFNBQXJCUSxrQkFBa0JBLENBQUlyQixDQUFDLEVBQUs7TUFDOUJwQixTQUFTLENBQUNvQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQzdCLENBaURxSTtJQUFDYSxNQUFNLEVBL0NuSCxTQUFuQk8sZ0JBQWdCQSxDQUFJdEIsQ0FBQyxFQUFLO01BQzVCQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxLQUFLLEVBQUUsSUFBSXRCLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztJQUN0RTtFQTZDK0osRUFBRSxlQUFBekIsMERBQUE7SUFBTWlELFNBQVMsRUFBRSx1QkFBd0I7SUFBQ0ksS0FBSyxFQUFFO01BQUMzQyxPQUFPLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUU7SUFBVTtFQUFFLEdBQUMsT0FBSyxDQUFPLENBQzVPLGVBRVJYLDBEQUFBO0lBQUtpRCxTQUFTLEVBQUU7RUFBUSxnQkFDcEJqRCwwREFBQTtJQUFPc0QsSUFBSSxFQUFFLE9BQVE7SUFBQ0MsSUFBSSxFQUFDLGdCQUFXO0lBQUNSLEtBQUssRUFBRSxXQUFZO0lBQUNXLFFBQVEsRUFBRWQsaUJBQWtCO0lBQUN3QixPQUFPLEVBQUV4QyxVQUFVLEtBQUs7RUFBWSxFQUFFLGVBQUE1QiwwREFBQSxnQkFBTyxpQkFBVSxDQUFRLGVBQ3ZKQSwwREFBQTtJQUFPc0QsSUFBSSxFQUFFLE9BQVE7SUFBQ0MsSUFBSSxFQUFDLGFBQWE7SUFBQ1IsS0FBSyxFQUFFLGFBQWM7SUFBQ1csUUFBUSxFQUFFZCxpQkFBa0I7SUFBQ3dCLE9BQU8sRUFBRXhDLFVBQVUsS0FBSztFQUFjLEVBQUUsZUFBQTVCLDBEQUFBLGdCQUFPLGNBQVksQ0FBUSxDQUM3SixlQUVOQSwwREFBQTtJQUFRaUQsU0FBUyxFQUFFLFdBQVk7SUFBQ29CLE9BQU8sRUFsRHZDLFNBQWRDLFdBQVdBLENBQUl6QixDQUFDLEVBQUs7TUFDdkJBLENBQUMsQ0FBQ08sY0FBYyxFQUFFO01BQ2xCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUFtQixLQUFLLElBQUFDLE1BQUEsQ0F6RUcsdUJBQXVCLGNBeUVSO1FBQ25CQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDdEMsT0FBTyxDQUFDO1FBQzdCdUMsT0FBTyxFQUFFO1VBQUMsY0FBYyxFQUFFO1FBQWtCO01BQ2hELENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQUMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO01BQUEsRUFBQyxDQUFDRixJQUFJLENBQUMsVUFBQUcsSUFBSTtRQUFBLE9BQUl2QyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3NDLElBQUksQ0FBQztNQUFBLEVBQUMsU0FBTSxDQUFDLFVBQUFDLE1BQU07UUFBQSxPQUFJeEMsT0FBTyxDQUFDQyxHQUFHLENBQUN1QyxNQUFNLENBQUM7TUFBQSxFQUFDO0lBRTdHO0VBOEJ5RSxHQUFDLFFBQU0sQ0FBUyxDQUNsRSxDQUNMLENBQ0osZUFDTmxGLDBEQUFBLENBQUNHLHlFQUFZLE9BQUUsQ0FDYjtBQUVkLENBQUM7QUFFRCwrREFBZUMsZ0JBQWdCOzs7Ozs7OztVQzVIL0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlclwiO1xuXG5jb25zdCBDcmVkaXRDYWxjdWxhdG9yID0gKHt1c2VyTG9nSW4sIHVzZXJEYXRhLCBzZXRVc2VyRGF0YX0pID0+IHtcbiAgICBjb25zdCBpbnB1dFN0eWxpbmcgPSB7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifTtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZShcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgY29uc3QgW2NyZWRpdFR5cGUsIHNldENyZWRpdFR5cGVdID0gdXNlU3RhdGUoXCJzdGHFgmFSYXRhXCIpO1xuICAgIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJEYXRhQmFzZSwgc2V0VXNlckRhdGFCYXNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyRGF0YUJhc2UpO1xuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgICBjb25zdCBuZXdCYXNlID0ge1xuICAgICAgICBpZDogMyxcbiAgICAgICAga2x1Y3oyOiBcInd3d1wiLFxuICAgICAgICBrbHVjejE6IFwiZGRkXCJcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKG5ld0Jhc2UpO1xuICAgIC8vIGNvbnN0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YUJhc2U7XG5cbiAgICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENyZWRpdFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIiAmJiBzZXRBbW91bnQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRBbW91bnQoXCJXcGlzeiBrd290xJkga3JlZHl0dVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIiAmJiBzZXRSYXRlKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRSYXRlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJhdGVCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UmF0ZShcIldwaXN6IHd5c29rb8WbxIcgb2RzZXRla1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIiAmJiBzZXRQZXJpb2QoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZEJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXRQZXJpb2QoXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIpO1xuICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGxldCBiYXNlID0gWy4uLnVzZXJEYXRhQmFzZV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJhc2UpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyBsZXQgbmV3Q3JlZGl0ID0ge1xuICAgICAgICAvLyAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICAvLyAgICAgcmF0ZTogcmF0ZSxcbiAgICAgICAgLy8gICAgIGNyZWRpdFBlcmlvZDogcGVyaW9kXG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0NyZWRpdCk7XG4gICAgICAgIC8vIGJhc2UucG9wKG5ld0NyZWRpdCk7XG5cbiAgICAgICAgZmV0Y2goYCR7QVBJfS9kYXRhLzNgLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdCYXNlKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpXG5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDcmVkaXRTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvck1haW5Db250YWluZXJcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ2FsY3VsYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+T2JsaWN6IHJhdHkga3JlZHl0dTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDcmVkaXRTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e2Ftb3VudH0gb25Gb2N1cz17aGFuZGxlQW1vdW50Rm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVBbW91bnRDaGFuZ2V9IG9uQmx1cj17aGFuZGxlQW1vdW50Qmx1cn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInJhdGVcIn0gdmFsdWU9e3JhdGV9IG9uRm9jdXM9e2hhbmRsZVJhdGVGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVJhdGVDaGFuZ2V9IG9uQmx1cj17aGFuZGxlUmF0ZUJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wicGVyaW9kXCJ9IHZhbHVlPXtwZXJpb2R9IG9uRm9jdXM9e2hhbmRsZVBlcmlvZEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVBlcmlvZEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+T2tyZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJyYWRpb1wifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJyYWRpb1wifSBuYW1lPVwic3RhxYJhUmF0YVwiIHZhbHVlPXtcInN0YcWCYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInN0YcWCYVJhdGFcIn0vPjxsYWJlbD5SYXRhIHN0YcWCYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInptaWVubmFSYXRhXCIgdmFsdWU9e1wiem1pZW5uYVJhdGFcIn0gb25DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfSBjaGVja2VkPXtjcmVkaXRUeXBlID09PSBcInptaWVubmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSB6bWllbm5hPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pk9ibGljejwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTaWRlckhpc3RvcnkvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWRpdENhbGN1bGF0b3I7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjMyY2YxMzBlMmExNWIxY2I1OWUxXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJTaWRlckhpc3RvcnkiLCJDcmVkaXRDYWxjdWxhdG9yIiwiX3JlZiIsInVzZXJMb2dJbiIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJpbnB1dFN0eWxpbmciLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInBlcmlvZCIsInNldFBlcmlvZCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiY3JlZGl0VHlwZSIsInNldENyZWRpdFR5cGUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJpc1NlbnQiLCJzZXRJc1NlbnQiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwidXNlckRhdGFCYXNlIiwic2V0VXNlckRhdGFCYXNlIiwibmV3QmFzZSIsImlkIiwia2x1Y3oyIiwia2x1Y3oxIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVJhZGlvQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaGFuZGxlQ3JlZGl0U3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsInR5cGUiLCJuYW1lIiwib25Gb2N1cyIsImhhbmRsZUFtb3VudEZvY3VzIiwib25DaGFuZ2UiLCJoYW5kbGVBbW91bnRDaGFuZ2UiLCJvbkJsdXIiLCJoYW5kbGVBbW91bnRCbHVyIiwiaGFuZGxlUmF0ZUZvY3VzIiwiaGFuZGxlUmF0ZUNoYW5nZSIsImhhbmRsZVJhdGVCbHVyIiwiaGFuZGxlUGVyaW9kRm9jdXMiLCJoYW5kbGVQZXJpb2RDaGFuZ2UiLCJoYW5kbGVQZXJpb2RCbHVyIiwiY2hlY2tlZCIsIm9uQ2xpY2siLCJoYW5kbGVDbGljayIsImZldGNoIiwiY29uY2F0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9