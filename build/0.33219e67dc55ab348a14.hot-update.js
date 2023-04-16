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
      debugger;
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
/******/ 	__webpack_require__.h = function() { return "d1fdd11ad38ad9f0f03a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMzIxOWU2N2RjNTVhYjM0OGExNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQzRCO0FBQ0g7QUFFL0QsSUFBTUksZ0JBQWdCLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUF3QztFQUFBLElBQXRDQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtJQUFFQyxXQUFXLEdBQUFILElBQUEsQ0FBWEcsV0FBVztFQUN2RCxJQUFNQyxZQUFZLEdBQUc7SUFBQ0MsT0FBTyxFQUFFLE9BQU87SUFBRUMsUUFBUSxFQUFFLFVBQVU7SUFBRUMsS0FBSyxFQUFFO0VBQU8sQ0FBQztFQUU3RSxJQUFBQyxTQUFBLEdBQTRCWiwrQ0FBUSxDQUFDLHFCQUFxQixDQUFDO0lBQUFhLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXBERyxNQUFNLEdBQUFGLFVBQUE7SUFBRUcsU0FBUyxHQUFBSCxVQUFBO0VBQ3hCLElBQUFJLFVBQUEsR0FBd0JqQiwrQ0FBUSxDQUFDLHdCQUF3QixDQUFDO0lBQUFrQixVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFuREUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQTRCckIsK0NBQVEsQ0FBQyw4QkFBOEIsQ0FBQztJQUFBc0IsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBN0RFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxTQUFTLEdBQUFGLFVBQUE7RUFDeEIsSUFBQUcsVUFBQSxHQUFvQ3pCLCtDQUFRLENBQUMsV0FBVyxDQUFDO0lBQUEwQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUFsREUsVUFBVSxHQUFBRCxVQUFBO0lBQUVFLGFBQWEsR0FBQUYsVUFBQTtFQUNoQyxJQUFBRyxVQUFBLEdBQTRCN0IsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQThCLFdBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUFwQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQXdDakMsK0NBQVEsQ0FBQ00sUUFBUSxDQUFDO0lBQUE0QixXQUFBLEdBQUFwQixjQUFBLENBQUFtQixXQUFBO0lBQW5ERSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBQ3BDO0VBQ0E7RUFDQSxJQUFNRyxPQUFPLEdBQUc7SUFDWkMsRUFBRSxFQUFFLENBQUM7SUFDTEMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDO0VBQ3BCOztFQUVBLElBQU1NLGlCQUFpQixHQUFHLFNBQUFBLENBQUNDLENBQUMsRUFBSztJQUM3QmhCLGFBQWEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDakMsQ0FBQztFQW1FRCxvQkFDSS9DLDBEQUFBO0lBQUtpRCxTQUFTLEVBQUU7RUFBMEIsZ0JBQ3RDakQsMERBQUE7SUFBS2lELFNBQVMsRUFBQztFQUFNLGdCQUNqQmpELDBEQUFBLENBQUNFLDhFQUFVLE9BQUUsZUFDYkYsMERBQUE7SUFBS2lELFNBQVMsRUFBQztFQUFnQixnQkFDM0JqRCwwREFBQSxhQUFJLHFCQUFtQixDQUFLLGVBQzVCQSwwREFBQTtJQUFNa0QsUUFBUSxFQVhILFNBQXJCQyxrQkFBa0JBLENBQUlOLENBQUMsRUFBSztNQUM5QjtNQUNBQSxDQUFDLENBQUNPLGNBQWMsRUFBRTtJQUN0QjtFQVFtRCxnQkFDL0JwRCwwREFBQTtJQUFPcUQsS0FBSyxFQUFFNUM7RUFBYSxnQkFDdkJULDBEQUFBO0lBQU9zRCxJQUFJLEVBQUUsTUFBTztJQUFDQyxJQUFJLEVBQUUsUUFBUztJQUFDUixLQUFLLEVBQUUvQixNQUFPO0lBQUN3QyxPQUFPLEVBekV6RCxTQUFwQkMsaUJBQWlCQSxDQUFJWixDQUFDLEVBQUs7TUFDN0JBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUsscUJBQXFCLElBQUk5QixTQUFTLENBQUMsRUFBRSxDQUFDO0lBQzdELENBdUV1RztJQUFDeUMsUUFBUSxFQXJFckYsU0FBckJDLGtCQUFrQkEsQ0FBSWQsQ0FBQyxFQUFLO01BQzlCNUIsU0FBUyxDQUFDNEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUM3QixDQW1FcUk7SUFBQ2EsTUFBTSxFQWpFbkgsU0FBbkJDLGdCQUFnQkEsQ0FBSWhCLENBQUMsRUFBSztNQUM1QkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyxFQUFFLElBQUk5QixTQUFTLENBQUMscUJBQXFCLENBQUM7SUFDN0Q7RUErRCtKLEVBQUUsZUFBQWpCLDBEQUFBO0lBQU1pRCxTQUFTLEVBQUUsdUJBQXdCO0lBQUNJLEtBQUssRUFBRTtNQUFDM0MsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFO0lBQVU7RUFBRSxHQUFDLEtBQUcsQ0FBTyxDQUMxTyxlQUVSWCwwREFBQTtJQUFPcUQsS0FBSyxFQUFFNUM7RUFBYSxnQkFDdkJULDBEQUFBO0lBQU9zRCxJQUFJLEVBQUUsTUFBTztJQUFDQyxJQUFJLEVBQUUsTUFBTztJQUFDUixLQUFLLEVBQUUzQixJQUFLO0lBQUNvQyxPQUFPLEVBakV2RCxTQUFsQk0sZUFBZUEsQ0FBSWpCLENBQUMsRUFBSztNQUMzQkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyx3QkFBd0IsSUFBSTFCLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDOUQsQ0ErRGlHO0lBQUNxQyxRQUFRLEVBN0RqRixTQUFuQkssZ0JBQWdCQSxDQUFJbEIsQ0FBQyxFQUFLO01BQzVCeEIsT0FBTyxDQUFDd0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUMzQixDQTJENkg7SUFBQ2EsTUFBTSxFQXpEN0csU0FBakJJLGNBQWNBLENBQUluQixDQUFDLEVBQUs7TUFDMUJBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEtBQUssRUFBRSxJQUFJMUIsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0lBQzlEO0VBdURxSixFQUFFLGVBQUFyQiwwREFBQTtJQUFNaUQsU0FBUyxFQUFFLHVCQUF3QjtJQUFDSSxLQUFLLEVBQUU7TUFBQzNDLE9BQU8sRUFBRSxPQUFPO01BQUVDLFFBQVEsRUFBRTtJQUFVO0VBQUUsR0FBQyxHQUFDLENBQU8sQ0FDOU4sZUFFUlgsMERBQUE7SUFBT3FELEtBQUssRUFBRTVDO0VBQWEsZ0JBQ3ZCVCwwREFBQTtJQUFPc0QsSUFBSSxFQUFFLE1BQU87SUFBQ0MsSUFBSSxFQUFFLFFBQVM7SUFBQ1IsS0FBSyxFQUFFdkIsTUFBTztJQUFDZ0MsT0FBTyxFQXpEekQsU0FBcEJTLGlCQUFpQkEsQ0FBSXBCLENBQUMsRUFBSztNQUM3QkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyw4QkFBOEIsSUFBSXRCLFNBQVMsQ0FBQyxFQUFFLENBQUM7SUFDdEUsQ0F1RHVHO0lBQUNpQyxRQUFRLEVBckRyRixTQUFyQlEsa0JBQWtCQSxDQUFJckIsQ0FBQyxFQUFLO01BQzlCcEIsU0FBUyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUM3QixDQW1EcUk7SUFBQ2EsTUFBTSxFQWpEbkgsU0FBbkJPLGdCQUFnQkEsQ0FBSXRCLENBQUMsRUFBSztNQUM1QkEsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssS0FBSyxFQUFFLElBQUl0QixTQUFTLENBQUMsOEJBQThCLENBQUM7SUFDdEU7RUErQytKLEVBQUUsZUFBQXpCLDBEQUFBO0lBQU1pRCxTQUFTLEVBQUUsdUJBQXdCO0lBQUNJLEtBQUssRUFBRTtNQUFDM0MsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFO0lBQVU7RUFBRSxHQUFDLE9BQUssQ0FBTyxDQUM1TyxlQUVSWCwwREFBQTtJQUFLaUQsU0FBUyxFQUFFO0VBQVEsZ0JBQ3BCakQsMERBQUE7SUFBT3NELElBQUksRUFBRSxPQUFRO0lBQUNDLElBQUksRUFBQyxnQkFBVztJQUFDUixLQUFLLEVBQUUsV0FBWTtJQUFDVyxRQUFRLEVBQUVkLGlCQUFrQjtJQUFDd0IsT0FBTyxFQUFFeEMsVUFBVSxLQUFLO0VBQVksRUFBRSxlQUFBNUIsMERBQUEsZ0JBQU8saUJBQVUsQ0FBUSxlQUN2SkEsMERBQUE7SUFBT3NELElBQUksRUFBRSxPQUFRO0lBQUNDLElBQUksRUFBQyxhQUFhO0lBQUNSLEtBQUssRUFBRSxhQUFjO0lBQUNXLFFBQVEsRUFBRWQsaUJBQWtCO0lBQUN3QixPQUFPLEVBQUV4QyxVQUFVLEtBQUs7RUFBYyxFQUFFLGVBQUE1QiwwREFBQSxnQkFBTyxjQUFZLENBQVEsQ0FDN0osZUFFTkEsMERBQUE7SUFBUWlELFNBQVMsRUFBRSxXQUFZO0lBQUNvQixPQUFPLEVBcER2QyxTQUFkQyxXQUFXQSxDQUFJekIsQ0FBQyxFQUFLO01BQ3ZCO01BQ0FBLENBQUMsQ0FBQ08sY0FBYyxFQUFFO01BQ2xCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUFtQixLQUFLLElBQUFDLE1BQUEsQ0F6RUcsdUJBQXVCLGNBeUVSO1FBQ25CQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDdEMsT0FBTyxDQUFDO1FBQzdCdUMsT0FBTyxFQUFFO1VBQUMsY0FBYyxFQUFFO1FBQWtCO01BQ2hELENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQUMsUUFBUTtRQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO01BQUEsRUFBQyxDQUFDRixJQUFJLENBQUMsVUFBQUcsSUFBSTtRQUFBLE9BQUl2QyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3NDLElBQUksQ0FBQztNQUFBLEVBQUMsU0FBTSxDQUFDLFVBQUFDLE1BQU07UUFBQSxPQUFJeEMsT0FBTyxDQUFDQyxHQUFHLENBQUN1QyxNQUFNLENBQUM7TUFBQSxFQUFDO0lBRTdHO0VBK0J5RSxHQUFDLFFBQU0sQ0FBUyxDQUNsRSxDQUNMLENBQ0osZUFDTmxGLDBEQUFBLENBQUNHLHlFQUFZLE9BQUUsQ0FDYjtBQUVkLENBQUM7QUFFRCwrREFBZUMsZ0JBQWdCOzs7Ozs7OztVQzdIL0IscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL01haW4vY3JlZGl0Q2FsY3VsYXRvci9jcmVkaXRDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lkZXJIaXN0b3J5IGZyb20gXCIuLi9DYWxjdWxhdG9yQ29tbW9uQ29tcG9uZW50cy9zaWRlclwiO1xuXG5jb25zdCBDcmVkaXRDYWxjdWxhdG9yID0gKHt1c2VyTG9nSW4sIHVzZXJEYXRhLCBzZXRVc2VyRGF0YX0pID0+IHtcbiAgICBjb25zdCBpbnB1dFN0eWxpbmcgPSB7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifTtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIpO1xuICAgIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIpO1xuICAgIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZShcIldwaXN6IG9rcmVzIGtyZWR5dHUgdyBsYXRhY2hcIik7XG4gICAgY29uc3QgW2NyZWRpdFR5cGUsIHNldENyZWRpdFR5cGVdID0gdXNlU3RhdGUoXCJzdGHFgmFSYXRhXCIpO1xuICAgIGNvbnN0IFtpc1NlbnQsIHNldElzU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJEYXRhQmFzZSwgc2V0VXNlckRhdGFCYXNlXSA9IHVzZVN0YXRlKHVzZXJEYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyRGF0YUJhc2UpO1xuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcbiAgICBjb25zdCBuZXdCYXNlID0ge1xuICAgICAgICBpZDogMyxcbiAgICAgICAga2x1Y3oyOiBcInd3d1wiLFxuICAgICAgICBrbHVjejE6IFwiZGRkXCJcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKG5ld0Jhc2UpO1xuICAgIC8vIGNvbnN0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YUJhc2U7XG5cbiAgICBjb25zdCBoYW5kbGVSYWRpb0NoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldENyZWRpdFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCIgJiYgc2V0QW1vdW50KFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFtb3VudENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVBbW91bnRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0QW1vdW50KFwiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmF0ZUZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogd3lzb2tvxZvEhyBvZHNldGVrXCIgJiYgc2V0UmF0ZShcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0UmF0ZShlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSYXRlQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldFJhdGUoXCJXcGlzeiB3eXNva2/Fm8SHIG9kc2V0ZWtcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiBva3JlcyBrcmVkeXR1IHcgbGF0YWNoXCIgJiYgc2V0UGVyaW9kKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0UGVyaW9kKFwiV3Bpc3ogb2tyZXMga3JlZHl0dSB3IGxhdGFjaFwiKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBsZXQgYmFzZSA9IFsuLi51c2VyRGF0YUJhc2VdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhiYXNlKTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gbGV0IG5ld0NyZWRpdCA9IHtcbiAgICAgICAgLy8gICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgLy8gICAgIHJhdGU6IHJhdGUsXG4gICAgICAgIC8vICAgICBjcmVkaXRQZXJpb2Q6IHBlcmlvZFxuICAgICAgICAvLyB9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdDcmVkaXQpO1xuICAgICAgICAvLyBiYXNlLnBvcChuZXdDcmVkaXQpO1xuXG4gICAgICAgIGZldGNoKGAke0FQSX0vZGF0YS8zYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3QmFzZSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKVxuXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ3JlZGl0U3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNhbGN1bGF0b3JNYWluQ29udGFpbmVyXCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNhbGN1bGF0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPk9ibGljeiByYXR5IGtyZWR5dHU8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ3JlZGl0U3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17aW5wdXRTdHlsaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXthbW91bnR9IG9uRm9jdXM9e2hhbmRsZUFtb3VudEZvY3VzfSBvbkNoYW5nZT17aGFuZGxlQW1vdW50Q2hhbmdlfSBvbkJsdXI9e2hhbmRsZUFtb3VudEJsdXJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+UExOPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtpbnB1dFN0eWxpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJyYXRlXCJ9IHZhbHVlPXtyYXRlfSBvbkZvY3VzPXtoYW5kbGVSYXRlRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVSYXRlQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZVJhdGVCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PiU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2lucHV0U3R5bGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcInBlcmlvZFwifSB2YWx1ZT17cGVyaW9kfSBvbkZvY3VzPXtoYW5kbGVQZXJpb2RGb2N1c30gb25DaGFuZ2U9e2hhbmRsZVBlcmlvZENoYW5nZX0gb25CbHVyPXtoYW5kbGVQZXJpb2RCbHVyfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pk9rcmVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wicmFkaW9cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e1wicmFkaW9cIn0gbmFtZT1cInN0YcWCYVJhdGFcIiB2YWx1ZT17XCJzdGHFgmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJzdGHFgmFSYXRhXCJ9Lz48bGFiZWw+UmF0YSBzdGHFgmE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtcInJhZGlvXCJ9IG5hbWU9XCJ6bWllbm5hUmF0YVwiIHZhbHVlPXtcInptaWVubmFSYXRhXCJ9IG9uQ2hhbmdlPXtoYW5kbGVSYWRpb0NoYW5nZX0gY2hlY2tlZD17Y3JlZGl0VHlwZSA9PT0gXCJ6bWllbm5hUmF0YVwifS8+PGxhYmVsPlJhdGEgem1pZW5uYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYnRuT2JsaWN6XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5PYmxpY3o8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2lkZXJIaXN0b3J5Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYWxjdWxhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJkMWZkZDExYWQzOGFkOWYwZjAzYVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZpZ2F0aW9uIiwiU2lkZXJIaXN0b3J5IiwiQ3JlZGl0Q2FsY3VsYXRvciIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiaW5wdXRTdHlsaW5nIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJwZXJpb2QiLCJzZXRQZXJpb2QiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImNyZWRpdFR5cGUiLCJzZXRDcmVkaXRUeXBlIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwiaXNTZW50Iiwic2V0SXNTZW50IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInVzZXJEYXRhQmFzZSIsInNldFVzZXJEYXRhQmFzZSIsIm5ld0Jhc2UiLCJpZCIsImtsdWN6MiIsImtsdWN6MSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSYWRpb0NoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImhhbmRsZUNyZWRpdFN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJ0eXBlIiwibmFtZSIsIm9uRm9jdXMiLCJoYW5kbGVBbW91bnRGb2N1cyIsIm9uQ2hhbmdlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwib25CbHVyIiwiaGFuZGxlQW1vdW50Qmx1ciIsImhhbmRsZVJhdGVGb2N1cyIsImhhbmRsZVJhdGVDaGFuZ2UiLCJoYW5kbGVSYXRlQmx1ciIsImhhbmRsZVBlcmlvZEZvY3VzIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwiaGFuZGxlUGVyaW9kQmx1ciIsImNoZWNrZWQiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==