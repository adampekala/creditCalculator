"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 53:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Registration = function (props) {
  // const [usersNumber, setUsersNumber] = useState(props.usersNumberLength);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz wymyślony login"),
    _useState2 = _slicedToArray(_useState, 2),
    newLogin = _useState2[0],
    setNewLogin = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Wpisz hasło"),
    _useState4 = _slicedToArray(_useState3, 2),
    newPassword = _useState4[0],
    setNewPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Powtórz hasło"),
    _useState6 = _slicedToArray(_useState5, 2),
    newPasswordRepetition = _useState6[0],
    setNewPasswordRepetition = _useState6[1];
  var registrationAppearence;
  props.userLogIn ? registrationAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "registrationHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Wybierz kalkulator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "calculatorChoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Kredyt"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/loan"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Po\u017Cyczka"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/deposit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbPigMoney, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Lokata"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/calculator/bond"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "CalculatorChoice-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaMoneyBillAlt, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Obligacje"))))) : registrationAppearence = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "registrationHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Zarejestruj si\u0119"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: function handleSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      display: "block",
      position: "relative",
      width: "400px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "amount",
    value: newLogin,
    onFocus: function handleLoginFocus(e) {
      e.target.value === "Wpisz wymyślony login" && setNewLogin("");
    },
    onChange: function handleLoginChange(e) {
      setNewLogin(e.target.value);
    },
    onBlur: function handleLoginBlur(e) {
      e.target.value === "" && setNewLogin("Wpisz wymyślony login");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      display: "block",
      position: "relative",
      width: "400px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "amount",
    value: newPassword,
    onFocus: function handlePasswordFocus(e) {
      e.target.value === "Wpisz hasło" && setNewPassword("");
    },
    onBlur: function handlePasswordBlur(e) {
      e.target.value === "" && setNewPassword("Wpisz hasło");
    },
    onChange: function handlePasswordChange(e) {
      setNewPassword(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "Has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      display: "block",
      position: "relative",
      width: "400px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "amount",
    value: newPasswordRepetition,
    onFocus: function handlePasswordRepFocus(e) {
      e.target.value === "Powtórz hasło" && setNewPasswordRepetition("");
    },
    onBlur: function handlePasswordRepBlur(e) {
      e.target.value === "" && setNewPasswordRepetition("Powtórz hasło");
    },
    onChange: function handlePasswordRepetitionChange(e) {
      setNewPasswordRepetition(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "Has\u0142o")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "registrationBtnLog",
    onClick: function handleRegistrationClick(e) {
      e.preventDefault();
      var registrationData = {
        "id": newLogin,
        "idNum": props.usersNumberLength + 1,
        "password": newPassword
      };
      console.log(registrationData);
      debugger;
      fetch("".concat("http://localhost:3005", "/users"), {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(registrationData)
      }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        return data.log;
      })["catch"](function (reject) {
        return console.log(reject);
      });
      debugger;
    }
  }, "Zaloguj"))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "registration"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "registrationLeftPhoto"
  }), registrationAppearence);
};
/* harmony default export */ __webpack_exports__["default"] = (Registration);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "510135d2315f1c98966d"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41OGVjNDExMDljOTVkZmU1YTg0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDQTtBQUNKO0FBQ0w7QUFDQTtBQUVyQyxJQUFNTyxZQUFZLEdBQUcsU0FBQUEsQ0FBQ0MsS0FBSyxFQUFLO0VBRzVCO0VBQ0EsSUFBQUMsU0FBQSxHQUFnQ1IsK0NBQVEsQ0FBQyx1QkFBdUIsQ0FBQztJQUFBUyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExREcsUUFBUSxHQUFBRixVQUFBO0lBQUVHLFdBQVcsR0FBQUgsVUFBQTtFQUM1QixJQUFBSSxVQUFBLEdBQXNDYiwrQ0FBUSxDQUFDLGFBQWEsQ0FBQztJQUFBYyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUF0REUsV0FBVyxHQUFBRCxVQUFBO0lBQUVFLGNBQWMsR0FBQUYsVUFBQTtFQUNsQyxJQUFBRyxVQUFBLEdBQTBEakIsK0NBQVEsQ0FBQyxlQUFlLENBQUM7SUFBQWtCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQTVFRSxxQkFBcUIsR0FBQUQsVUFBQTtJQUFFRSx3QkFBd0IsR0FBQUYsVUFBQTtFQWdFdEQsSUFBSUcsc0JBQXNCO0VBQzFCZCxLQUFLLENBQUNlLFNBQVMsR0FBR0Qsc0JBQXNCLGdCQUFHdEIsMERBQUE7SUFBS3lCLFNBQVMsRUFBQztFQUFnQyxnQkFDbEZ6QiwwREFBQSxhQUFJLG9CQUFrQixDQUFLLGVBQzNCQSwwREFBQTtJQUFLeUIsU0FBUyxFQUFFO0VBQW1CLGdCQUMvQnpCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUNvQixFQUFFLEVBQUM7RUFBYSxnQkFBQzFCLDBEQUFBO0lBQUt5QixTQUFTLEVBQUU7RUFBdUIsZ0JBQUN6QiwwREFBQSxDQUFDSyxrREFBTSxPQUFFLGVBQUFMLDBEQUFBLGVBQU0sUUFBTSxDQUFPLENBQU0sQ0FBTyxlQUN4R0EsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ29CLEVBQUUsRUFBQztFQUFrQixnQkFBQzFCLDBEQUFBO0lBQUt5QixTQUFTLEVBQUU7RUFBdUIsZ0JBQUN6QiwwREFBQSxDQUFDRywwREFBYyxPQUFFLGVBQUFILDBEQUFBLGVBQU0sZUFBUSxDQUFPLENBQU0sQ0FBTyxlQUN2SEEsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ29CLEVBQUUsRUFBQztFQUFxQixnQkFBQzFCLDBEQUFBO0lBQUt5QixTQUFTLEVBQUU7RUFBdUIsZ0JBQUN6QiwwREFBQSxDQUFDSSxzREFBVSxPQUFFLGVBQUFKLDBEQUFBLGVBQU0sUUFBTSxDQUFPLENBQU0sQ0FBTyxlQUNwSEEsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ29CLEVBQUUsRUFBQztFQUFrQixnQkFBQzFCLDBEQUFBO0lBQUt5QixTQUFTLEVBQUU7RUFBdUIsZ0JBQUN6QiwwREFBQSxDQUFDRSwwREFBYyxPQUFFLGVBQUFGLDBEQUFBLGVBQU0sV0FBUyxDQUFPLENBQU0sQ0FBTyxDQUN0SCxDQUNKLEdBRU5zQixzQkFBc0IsZ0JBQUd0QiwwREFBQTtJQUFLeUIsU0FBUyxFQUFDO0VBQWdDLGdCQUNwRXpCLDBEQUFBLGFBQUksc0JBQWUsQ0FBSyxlQUN4QkEsMERBQUE7SUFBTTJCLFFBQVEsRUF2Q0QsU0FBZkMsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO01BQ3hCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUN0QjtFQXFDcUMsZ0JBQ3pCOUIsMERBQUE7SUFBTytCLEtBQUssRUFBRTtNQUFDQyxPQUFPLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFQyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUFDbEMsMERBQUE7SUFBT21DLElBQUksRUFBRSxNQUFPO0lBQUNDLElBQUksRUFBRSxRQUFTO0lBQUNDLEtBQUssRUFBRXpCLFFBQVM7SUFBQzBCLE9BQU8sRUE1RXhILFNBQW5CQyxnQkFBZ0JBLENBQUlWLENBQUMsRUFBSztNQUM1QkEsQ0FBQyxDQUFDVyxNQUFNLENBQUNILEtBQUssS0FBSyx1QkFBdUIsSUFBSXhCLFdBQVcsQ0FBQyxFQUFFLENBQUM7SUFDakUsQ0EwRW9LO0lBQUM0QixRQUFRLEVBcERuSixTQUFwQkMsaUJBQWlCQSxDQUFJYixDQUFDLEVBQUs7TUFDN0JoQixXQUFXLENBQUNnQixDQUFDLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO0lBQy9CLENBa0RpTTtJQUFDTSxNQUFNLEVBaEVoTCxTQUFsQkMsZUFBZUEsQ0FBSWYsQ0FBQyxFQUFLO01BQzNCQSxDQUFDLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxLQUFLLEVBQUUsSUFBSXhCLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztJQUNqRTtFQThEME4sRUFBRyxlQUFBYiwwREFBQTtJQUFNeUIsU0FBUyxFQUFFLHVCQUF3QjtJQUFDTSxLQUFLLEVBQUU7TUFBQ0MsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFO0lBQVU7RUFBRSxHQUFDLE9BQUssQ0FBTyxDQUFRLGVBRWhVakMsMERBQUE7SUFBTytCLEtBQUssRUFBRTtNQUFDQyxPQUFPLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFQyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUFDbEMsMERBQUE7SUFBT21DLElBQUksRUFBRSxNQUFPO0lBQUNDLElBQUksRUFBRSxRQUFTO0lBQUNDLEtBQUssRUFBRXJCLFdBQVk7SUFBQ3NCLE9BQU8sRUExRXhILFNBQXRCTyxtQkFBbUJBLENBQUloQixDQUFDLEVBQUs7TUFDL0JBLENBQUMsQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLEtBQUssYUFBYSxJQUFJcEIsY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxDQXdFMEs7SUFBQzBCLE1BQU0sRUE5RHRKLFNBQXJCRyxrQkFBa0JBLENBQUlqQixDQUFDLEVBQUs7TUFDOUJBLENBQUMsQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLEtBQUssRUFBRSxJQUFJcEIsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUMxRCxDQTREc007SUFBQ3dCLFFBQVEsRUFsRGxMLFNBQXZCTSxvQkFBb0JBLENBQUlsQixDQUFDLEVBQUs7TUFDaENaLGNBQWMsQ0FBQ1ksQ0FBQyxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztJQUNsQztFQWdEc08sRUFBRSxlQUFBckMsMERBQUE7SUFBTXlCLFNBQVMsRUFBRSx1QkFBd0I7SUFBQ00sS0FBSyxFQUFFO01BQUNDLE9BQU8sRUFBRSxPQUFPO01BQUVDLFFBQVEsRUFBRTtJQUFVO0VBQUUsR0FBQyxZQUFLLENBQU8sQ0FBUSxlQUUzVWpDLDBEQUFBO0lBQU8rQixLQUFLLEVBQUU7TUFBQ0MsT0FBTyxFQUFFLE9BQU87TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRUMsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFBQ2xDLDBEQUFBO0lBQU9tQyxJQUFJLEVBQUUsTUFBTztJQUFDQyxJQUFJLEVBQUUsUUFBUztJQUFDQyxLQUFLLEVBQUVqQixxQkFBc0I7SUFBQ2tCLE9BQU8sRUF4RS9ILFNBQXpCVSxzQkFBc0JBLENBQUluQixDQUFDLEVBQUs7TUFDbENBLENBQUMsQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLEtBQUssZUFBZSxJQUFJaEIsd0JBQXdCLENBQUMsRUFBRSxDQUFDO0lBQ3RFLENBc0V1TDtJQUFDc0IsTUFBTSxFQTVEaEssU0FBeEJNLHFCQUFxQkEsQ0FBSXBCLENBQUMsRUFBSztNQUNqQ0EsQ0FBQyxDQUFDVyxNQUFNLENBQUNILEtBQUssS0FBSyxFQUFFLElBQUloQix3QkFBd0IsQ0FBQyxlQUFlLENBQUM7SUFDdEUsQ0EwRHNOO0lBQUVvQixRQUFRLEVBaER6TCxTQUFqQ1MsOEJBQThCQSxDQUFJckIsQ0FBQyxFQUFLO01BQzFDUix3QkFBd0IsQ0FBQ1EsQ0FBQyxDQUFDVyxNQUFNLENBQUNILEtBQUssQ0FBQztJQUM1QztFQThDaVEsRUFBRSxlQUFBckMsMERBQUE7SUFBTXlCLFNBQVMsRUFBRSx1QkFBd0I7SUFBQ00sS0FBSyxFQUFFO01BQUNDLE9BQU8sRUFBRSxPQUFPO01BQUVDLFFBQVEsRUFBRTtJQUFVO0VBQUUsR0FBQyxZQUFLLENBQU8sQ0FBUSxlQUV0V2pDLDBEQUFBLENBQUNNLGtEQUFJO0lBQUNvQixFQUFFLEVBQUM7RUFBUSxnQkFBQzFCLDBEQUFBO0lBQVF5QixTQUFTLEVBQUUsb0JBQXFCO0lBQUMwQixPQUFPLEVBMUM5QyxTQUExQkMsdUJBQXVCQSxDQUFJdkIsQ0FBQyxFQUFLO01BQ25DQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtNQUNsQixJQUFJdUIsZ0JBQWdCLEdBQUc7UUFDbkIsSUFBSSxFQUFFekMsUUFBUTtRQUNkLE9BQU8sRUFBRUosS0FBSyxDQUFDOEMsaUJBQWlCLEdBQUcsQ0FBQztRQUNwQyxVQUFVLEVBQUV0QztNQUVoQixDQUFDO01BQ0R1QyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsZ0JBQWdCLENBQUM7TUFDN0I7TUFDQUksS0FBSyxJQUFBQyxNQUFBLENBekRHLHVCQUF1QixhQXlEVDtRQUNsQkMsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1VBQUMsY0FBYyxFQUFFO1FBQWtCLENBQUM7UUFDN0NDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNWLGdCQUFnQjtNQUN6QyxDQUFDLENBQUMsQ0FDR1csSUFBSSxDQUFDLFVBQUFDLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNDLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDekJGLElBQUksQ0FBQyxVQUFDRyxJQUFJO1FBQUEsT0FBS0EsSUFBSSxDQUFDWCxHQUFHO01BQUEsRUFBQyxTQUNuQixDQUFDLFVBQUFZLE1BQU07UUFBQSxPQUFJYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDO01BQUEsRUFBQztNQUN6QztJQUVKO0VBc0J3RyxHQUFDLFNBQU8sQ0FBUyxDQUFPLENBQ2pILENBRUw7RUFDVixvQkFDSXBFLDBEQUFBO0lBQUt5QixTQUFTLEVBQUM7RUFBYyxnQkFDekJ6QiwwREFBQTtJQUFLeUIsU0FBUyxFQUFDO0VBQXVCLEVBQ2hDLEVBQ0xILHNCQUFzQixDQUNyQjtBQUNkLENBQUM7QUFFRCwrREFBZWYsWUFBWTs7Ozs7Ozs7VUM3RzNCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9SZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmFNb25leUJpbGxBbHR9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtHaVJlY2VpdmVNb25leX0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQge1RiUGlnTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiO1xuaW1wb3J0IHtCc0Jhbmt9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IFJlZ2lzdHJhdGlvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCI7XG4gICAgY29uc3QgaWNvbnNTdHlsZSA9IHt3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCJ9O1xuICAgIC8vIGNvbnN0IFt1c2Vyc051bWJlciwgc2V0VXNlcnNOdW1iZXJdID0gdXNlU3RhdGUocHJvcHMudXNlcnNOdW1iZXJMZW5ndGgpO1xuICAgIGNvbnN0IFtuZXdMb2dpbiwgc2V0TmV3TG9naW5dID0gdXNlU3RhdGUoXCJXcGlzeiB3eW15xZtsb255IGxvZ2luXCIpO1xuICAgIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJXcGlzeiBoYXPFgm9cIik7XG4gICAgY29uc3QgW25ld1Bhc3N3b3JkUmVwZXRpdGlvbiwgc2V0TmV3UGFzc3dvcmRSZXBldGl0aW9uXSA9IHVzZVN0YXRlKFwiUG93dMOzcnogaGFzxYJvXCIpO1xuXG4gICAgY29uc3QgaGFuZGxlTG9naW5Gb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IHd5bXnFm2xvbnkgbG9naW5cIiAmJiBzZXROZXdMb2dpbihcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiV3Bpc3ogaGFzxYJvXCIgJiYgc2V0TmV3UGFzc3dvcmQoXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRSZXBGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlBvd3TDs3J6IGhhc8WCb1wiICYmIHNldE5ld1Bhc3N3b3JkUmVwZXRpdGlvbihcIlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbkJsdXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJcIiAmJiBzZXROZXdMb2dpbihcIldwaXN6IHd5bXnFm2xvbnkgbG9naW5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0TmV3UGFzc3dvcmQoXCJXcGlzeiBoYXPFgm9cIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRSZXBCbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0TmV3UGFzc3dvcmRSZXBldGl0aW9uKFwiUG93dMOzcnogaGFzxYJvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0TmV3TG9naW4oZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXROZXdQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZFJlcGV0aXRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXROZXdQYXNzd29yZFJlcGV0aXRpb24oZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdHJhdGlvbkNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcmVnaXN0cmF0aW9uRGF0YSA9IHtcbiAgICAgICAgICAgIFwiaWRcIjogbmV3TG9naW4sXG4gICAgICAgICAgICBcImlkTnVtXCI6IHByb3BzLnVzZXJzTnVtYmVyTGVuZ3RoICsgMSxcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogbmV3UGFzc3dvcmRcblxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHJlZ2lzdHJhdGlvbkRhdGEpO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBmZXRjaChgJHtBUEl9L3VzZXJzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb25EYXRhKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmxvZylcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSk7XG4gICAgICAgIGRlYnVnZ2VyXG5cbiAgICB9XG5cbiAgICBsZXQgcmVnaXN0cmF0aW9uQXBwZWFyZW5jZTtcbiAgICBwcm9wcy51c2VyTG9nSW4gPyByZWdpc3RyYXRpb25BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RyYXRpb25IZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgICAgIDxoMT5XeWJpZXJ6IGthbGt1bGF0b3I8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvckNob2ljZVwifT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEJzQmFuay8+PHNwYW4+S3JlZHl0PC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2xvYW5cIj48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48R2lSZWNlaXZlTW9uZXkvPjxzcGFuPlBvxbx5Y3prYTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9kZXBvc2l0XCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PFRiUGlnTW9uZXkvPjxzcGFuPkxva2F0YTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9ib25kXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEZhTW9uZXlCaWxsQWx0Lz48c3Bhbj5PYmxpZ2FjamU8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgIHJlZ2lzdHJhdGlvbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdHJhdGlvbkhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICAgICAgPGgxPlphcmVqZXN0cnVqIHNpxJk8L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17bmV3TG9naW59IG9uRm9jdXM9e2hhbmRsZUxvZ2luRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVMb2dpbkNoYW5nZX0gb25CbHVyPXtoYW5kbGVMb2dpbkJsdXJ9IC8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PkxvZ2luPC9zcGFuPjwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXtuZXdQYXNzd29yZH0gb25Gb2N1cz17aGFuZGxlUGFzc3dvcmRGb2N1c30gb25CbHVyPXtoYW5kbGVQYXNzd29yZEJsdXJ9IG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5IYXPFgm88L3NwYW4+PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e25ld1Bhc3N3b3JkUmVwZXRpdGlvbn0gb25Gb2N1cz17aGFuZGxlUGFzc3dvcmRSZXBGb2N1c30gb25CbHVyPXtoYW5kbGVQYXNzd29yZFJlcEJsdXJ9ICBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRSZXBldGl0aW9uQ2hhbmdlfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pkhhc8WCbzwvc3Bhbj48L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj48YnV0dG9uIGNsYXNzTmFtZT17XCJyZWdpc3RyYXRpb25CdG5Mb2dcIn0gb25DbGljaz17aGFuZGxlUmVnaXN0cmF0aW9uQ2xpY2t9PlphbG9ndWo8L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPC9kaXY+O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0cmF0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdHJhdGlvbkxlZnRQaG90b1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cmVnaXN0cmF0aW9uQXBwZWFyZW5jZX1cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNTEwMTM1ZDIzMTVmMWM5ODk2NmRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMaW5rIiwiUmVnaXN0cmF0aW9uIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuZXdMb2dpbiIsInNldE5ld0xvZ2luIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJuZXdQYXNzd29yZFJlcGV0aXRpb24iLCJzZXROZXdQYXNzd29yZFJlcGV0aXRpb24iLCJyZWdpc3RyYXRpb25BcHBlYXJlbmNlIiwidXNlckxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uRm9jdXMiLCJoYW5kbGVMb2dpbkZvY3VzIiwidGFyZ2V0Iiwib25DaGFuZ2UiLCJoYW5kbGVMb2dpbkNoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUxvZ2luQmx1ciIsImhhbmRsZVBhc3N3b3JkRm9jdXMiLCJoYW5kbGVQYXNzd29yZEJsdXIiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZVBhc3N3b3JkUmVwRm9jdXMiLCJoYW5kbGVQYXNzd29yZFJlcEJsdXIiLCJoYW5kbGVQYXNzd29yZFJlcGV0aXRpb25DaGFuZ2UiLCJvbkNsaWNrIiwiaGFuZGxlUmVnaXN0cmF0aW9uQ2xpY2siLCJyZWdpc3RyYXRpb25EYXRhIiwidXNlcnNOdW1iZXJMZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJjb25jYXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJkYXRhIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==