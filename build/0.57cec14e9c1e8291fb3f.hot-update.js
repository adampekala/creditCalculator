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
  var API = "http://localhost:3005";
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
      var registrationDataBase = {
        id: props.usersNumberLength + 1,
        name: newLogin,
        credits: [],
        loans: [],
        deposits: [],
        bonds: []
      };
      console.log(registrationData);
      debugger;
      fetch("".concat(API, "/users"), {
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
      fetch("".concat(API, "/data"), {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(registrationDataBase)
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
/******/ 	__webpack_require__.h = function() { return "0e1599cdd77d267f4504"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztNQUFBLEVBQUM7TUFFekNYLEtBQUssSUFBQUMsTUFBQSxDQUFJeEQsR0FBRyxZQUFTO1FBQ2pCeUQsTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1VBQUMsY0FBYyxFQUFFO1FBQWtCLENBQUM7UUFDN0NDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNkLG9CQUFvQjtNQUM3QyxDQUFDLENBQUMsQ0FDR2UsSUFBSSxDQUFDLFVBQUFDLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNDLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDekJGLElBQUksQ0FBQyxVQUFDRyxJQUFJO1FBQUEsT0FBS0EsSUFBSSxDQUFDWCxHQUFHO01BQUEsRUFBQyxTQUNuQixDQUFDLFVBQUFZLE1BQU07UUFBQSxPQUFJYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDO01BQUEsRUFBQztNQUN6QztJQUVKO0VBc0J3RyxHQUFDLFNBQU8sQ0FBUyxDQUFPLENBQ2pILENBRUw7RUFDVixvQkFDSTNFLDBEQUFBO0lBQUswQixTQUFTLEVBQUM7RUFBYyxnQkFDekIxQiwwREFBQTtJQUFLMEIsU0FBUyxFQUFDO0VBQXVCLEVBQ2hDLEVBQ0xILHNCQUFzQixDQUNyQjtBQUNkLENBQUM7QUFFRCwrREFBZWhCLFlBQVk7Ozs7Ozs7O1VDL0gzQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvUmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0ZhTW9uZXlCaWxsQWx0fSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7R2lSZWNlaXZlTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xuaW1wb3J0IHtUYlBpZ01vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIjtcbmltcG9ydCB7QnNCYW5rfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBSZWdpc3RyYXRpb24gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuICAgIGNvbnN0IGljb25zU3R5bGUgPSB7d2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwifTtcbiAgICAvLyBjb25zdCBbdXNlcnNOdW1iZXIsIHNldFVzZXJzTnVtYmVyXSA9IHVzZVN0YXRlKHByb3BzLnVzZXJzTnVtYmVyTGVuZ3RoKTtcbiAgICBjb25zdCBbbmV3TG9naW4sIHNldE5ld0xvZ2luXSA9IHVzZVN0YXRlKFwiV3Bpc3ogd3ltecWbbG9ueSBsb2dpblwiKTtcbiAgICBjb25zdCBbbmV3UGFzc3dvcmQsIHNldE5ld1Bhc3N3b3JkXSA9IHVzZVN0YXRlKFwiV3Bpc3ogaGFzxYJvXCIpO1xuICAgIGNvbnN0IFtuZXdQYXNzd29yZFJlcGV0aXRpb24sIHNldE5ld1Bhc3N3b3JkUmVwZXRpdGlvbl0gPSB1c2VTdGF0ZShcIlBvd3TDs3J6IGhhc8WCb1wiKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJXcGlzeiB3eW15xZtsb255IGxvZ2luXCIgJiYgc2V0TmV3TG9naW4oXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRGb2N1cyA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIldwaXN6IGhhc8WCb1wiICYmIHNldE5ld1Bhc3N3b3JkKFwiXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkUmVwRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9PT0gXCJQb3d0w7NyeiBoYXPFgm9cIiAmJiBzZXROZXdQYXNzd29yZFJlcGV0aXRpb24oXCJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTG9naW5CbHVyID0gKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPT09IFwiXCIgJiYgc2V0TmV3TG9naW4oXCJXcGlzeiB3eW15xZtsb255IGxvZ2luXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldE5ld1Bhc3N3b3JkKFwiV3Bpc3ogaGFzxYJvXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkUmVwQmx1ciA9IChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID09PSBcIlwiICYmIHNldE5ld1Bhc3N3b3JkUmVwZXRpdGlvbihcIlBvd3TDs3J6IGhhc8WCb1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldE5ld0xvZ2luKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0TmV3UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRSZXBldGl0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0TmV3UGFzc3dvcmRSZXBldGl0aW9uKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZWdpc3RyYXRpb25DbGljayA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHJlZ2lzdHJhdGlvbkRhdGEgPSB7XG4gICAgICAgICAgICBcImlkXCI6IG5ld0xvZ2luLFxuICAgICAgICAgICAgXCJpZE51bVwiOiBwcm9wcy51c2Vyc051bWJlckxlbmd0aCArIDEsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IG5ld1Bhc3N3b3JkXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWdpc3RyYXRpb25EYXRhQmFzZSA9IHtcbiAgICAgICAgICAgIGlkOiBwcm9wcy51c2Vyc051bWJlckxlbmd0aCArIDEsXG4gICAgICAgICAgICBuYW1lOiBuZXdMb2dpbixcbiAgICAgICAgICAgIGNyZWRpdHM6IFtdLFxuICAgICAgICAgICAgbG9hbnM6IFtdLFxuICAgICAgICAgICAgZGVwb3NpdHM6IFtdLFxuICAgICAgICAgICAgYm9uZHM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocmVnaXN0cmF0aW9uRGF0YSk7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGZldGNoKGAke0FQSX0vdXNlcnNgLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbkRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEubG9nKVxuICAgICAgICAgICAgLmNhdGNoKHJlamVjdCA9PiBjb25zb2xlLmxvZyhyZWplY3QpKTtcblxuICAgICAgICBmZXRjaChgJHtBUEl9L2RhdGFgLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbkRhdGFCYXNlKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmxvZylcbiAgICAgICAgICAgIC5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSk7XG4gICAgICAgIGRlYnVnZ2VyXG5cbiAgICB9XG5cbiAgICBsZXQgcmVnaXN0cmF0aW9uQXBwZWFyZW5jZTtcbiAgICBwcm9wcy51c2VyTG9nSW4gPyByZWdpc3RyYXRpb25BcHBlYXJlbmNlID0gPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RyYXRpb25IZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgICAgIDxoMT5XeWJpZXJ6IGthbGt1bGF0b3I8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY2FsY3VsYXRvckNob2ljZVwifT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEJzQmFuay8+PHNwYW4+S3JlZHl0PC9zcGFuPjwvZGl2PjwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9jYWxjdWxhdG9yL2xvYW5cIj48ZGl2IGNsYXNzTmFtZT17XCJDYWxjdWxhdG9yQ2hvaWNlLWJ0blwifT48R2lSZWNlaXZlTW9uZXkvPjxzcGFuPlBvxbx5Y3prYTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9kZXBvc2l0XCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PFRiUGlnTW9uZXkvPjxzcGFuPkxva2F0YTwvc3Bhbj48L2Rpdj48L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvY2FsY3VsYXRvci9ib25kXCI+PGRpdiBjbGFzc05hbWU9e1wiQ2FsY3VsYXRvckNob2ljZS1idG5cIn0+PEZhTW9uZXlCaWxsQWx0Lz48c3Bhbj5PYmxpZ2FjamU8L3NwYW4+PC9kaXY+PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA6XG4gICAgICAgIHJlZ2lzdHJhdGlvbkFwcGVhcmVuY2UgPSA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdHJhdGlvbkhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICAgICAgPGgxPlphcmVqZXN0cnVqIHNpxJk8L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB3aWR0aDogXCI0MDBweFwifX0+PGlucHV0IHR5cGU9e1widGV4dFwifSBuYW1lPXtcImFtb3VudFwifSB2YWx1ZT17bmV3TG9naW59IG9uRm9jdXM9e2hhbmRsZUxvZ2luRm9jdXN9IG9uQ2hhbmdlPXtoYW5kbGVMb2dpbkNoYW5nZX0gb25CbHVyPXtoYW5kbGVMb2dpbkJsdXJ9IC8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19PkxvZ2luPC9zcGFuPjwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXtuZXdQYXNzd29yZH0gb25Gb2N1cz17aGFuZGxlUGFzc3dvcmRGb2N1c30gb25CbHVyPXtoYW5kbGVQYXNzd29yZEJsdXJ9IG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5IYXPFgm88L3NwYW4+PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e25ld1Bhc3N3b3JkUmVwZXRpdGlvbn0gb25Gb2N1cz17aGFuZGxlUGFzc3dvcmRSZXBGb2N1c30gb25CbHVyPXtoYW5kbGVQYXNzd29yZFJlcEJsdXJ9ICBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRSZXBldGl0aW9uQ2hhbmdlfS8+PHNwYW4gY2xhc3NOYW1lPXtcImlucHV0QW1vdW50LWNhdXJyZW5jeVwifSBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIn19Pkhhc8WCbzwvc3Bhbj48L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj48YnV0dG9uIGNsYXNzTmFtZT17XCJyZWdpc3RyYXRpb25CdG5Mb2dcIn0gb25DbGljaz17aGFuZGxlUmVnaXN0cmF0aW9uQ2xpY2t9PlphbG9ndWo8L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPC9kaXY+O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0cmF0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdHJhdGlvbkxlZnRQaG90b1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cmVnaXN0cmF0aW9uQXBwZWFyZW5jZX1cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMGUxNTk5Y2RkNzdkMjY3ZjQ1MDRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMaW5rIiwiUmVnaXN0cmF0aW9uIiwicHJvcHMiLCJBUEkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuZXdMb2dpbiIsInNldE5ld0xvZ2luIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJuZXdQYXNzd29yZFJlcGV0aXRpb24iLCJzZXROZXdQYXNzd29yZFJlcGV0aXRpb24iLCJyZWdpc3RyYXRpb25BcHBlYXJlbmNlIiwidXNlckxvZ0luIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRvIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uRm9jdXMiLCJoYW5kbGVMb2dpbkZvY3VzIiwidGFyZ2V0Iiwib25DaGFuZ2UiLCJoYW5kbGVMb2dpbkNoYW5nZSIsIm9uQmx1ciIsImhhbmRsZUxvZ2luQmx1ciIsImhhbmRsZVBhc3N3b3JkRm9jdXMiLCJoYW5kbGVQYXNzd29yZEJsdXIiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZVBhc3N3b3JkUmVwRm9jdXMiLCJoYW5kbGVQYXNzd29yZFJlcEJsdXIiLCJoYW5kbGVQYXNzd29yZFJlcGV0aXRpb25DaGFuZ2UiLCJvbkNsaWNrIiwiaGFuZGxlUmVnaXN0cmF0aW9uQ2xpY2siLCJyZWdpc3RyYXRpb25EYXRhIiwidXNlcnNOdW1iZXJMZW5ndGgiLCJyZWdpc3RyYXRpb25EYXRhQmFzZSIsImlkIiwiY3JlZGl0cyIsImxvYW5zIiwiZGVwb3NpdHMiLCJib25kcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9