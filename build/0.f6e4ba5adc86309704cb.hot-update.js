"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var API = "http://localhost:3005";
var User = function (_ref) {
  var id = _ref.id,
    name = _ref.name,
    surname = _ref.surname,
    age = _ref.age,
    city = _ref.city,
    gender = _ref.gender;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, id, ": ", name, " ", surname, " is a ", gender, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "He lives in ", city, " and is ", age, " years old."));
};
var Users = function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    users = _useState2[0],
    setUsers = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("".concat(API, "/users")).then(function (respons) {
      return respons.json();
    }).then(function (data) {
      return setUsers(data);
    })["catch"](function (error) {
      return console.log("B\u0142\u0105d: ".concat(error));
    });
  }, []);
  return users !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddUser, null), users.map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(User, {
      key: i,
      id: el.id,
      name: el.name,
      surname: el.surname,
      age: el.age,
      city: el.city,
      gender: el.gender
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hej hultaju");
};
var AddUser = function () {
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: "",
      surname: "",
      age: "",
      city: "Warszawa",
      gender: "male"
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    userData = _useState4[0],
    setUserData = _useState4[1];
  var handleName = function (e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    console.log(e.target);
    setUserData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: function handleSubmit(e) {
      return e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Podaj imi\u0119 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "name",
    value: userData.name,
    onChange: handleName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Podaj nazwisko ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "surname",
    value: userData.surname,
    onChange: handleName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Podaj wiek ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "age",
    value: userData.age,
    onChange: handleName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    name: "city",
    value: userData.city,
    onChange: handleName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Warszawa"
  }, "Warszawa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Kraków"
  }, "Krak\xF3w"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Łodź"
  }, "\u0141\xF3d\u017A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "Pcim"
  }, "Pcim")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
    onChange: handleName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("legend", {
    style: {
      "fontSize": "1rem"
    }
  }, "Your gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "gender",
    type: "radio",
    value: "male",
    checked: true
  }), " Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "gender",
    type: "radio",
    value: "female"
  }), " Female"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "gender",
    type: "radio",
    value: "none"
  }), " I don't wanna say")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: function handleClick(e) {
      userData.name.length > 5 ? fetch("".concat(API, "/users"), {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json"
        }
      }).then(function (respons) {
        return respons.json();
      }).then(function (data) {
        return console.log(data);
      })["catch"](function (error) {
        return console.log("B\u0142\u0105d: ".concat(error));
      }) : e.preventDefault();
    }
  }, "Wy\u015Blij!"));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Users, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0b2ca630e6818d11bb09"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0EsQ0FBSWYsQ0FBQyxFQUFLO01BRXZCSCxRQUFRLENBQUM3QixJQUFJLENBQUNnRCxNQUFNLEdBQUcsQ0FBQyxHQUV4Qm5DLEtBQUssSUFBQUMsTUFBQSxDQUFJbEIsR0FBRyxhQUNSO1FBQ0lxRCxNQUFNLEVBQUUsTUFBTTtRQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDdkIsUUFBUSxDQUFDO1FBQzlCd0IsT0FBTyxFQUFFO1VBQUMsY0FBYyxFQUFFO1FBQWtCO01BQ2hELENBQUMsQ0FBQyxDQUNEdEMsSUFBSSxDQUFDLFVBQUFDLE9BQU87UUFBQSxPQUFJQSxPQUFPLENBQUNDLElBQUksRUFBRTtNQUFBLEVBQUMsQ0FDL0JGLElBQUksQ0FBQyxVQUFBRyxJQUFJO1FBQUEsT0FBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztNQUFBLEVBQUMsU0FDMUIsQ0FBQyxVQUFBQyxLQUFLO1FBQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLG9CQUFBUCxNQUFBLENBQVVLLEtBQUssRUFBRztNQUFBLEVBQUMsR0FFOUNhLENBQUMsQ0FBQ1MsY0FBYyxFQUFFO0lBQzFCO0VBNkJxRCxHQUFDLGNBQU8sQ0FBUyxDQUMzRDtBQUVmLENBQUM7QUFFRCxJQUFNYSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUc5RCw0REFBVSxDQUFDMkQsU0FBUyxDQUFDO0FBRWxDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ25FLDBEQUFBLENBQUNnQixLQUFLLE9BQUUsQ0FBQzs7Ozs7Ozs7VUN6R3JCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuXG5jb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuXG5jb25zdCBVc2VyID0gKHtpZCwgbmFtZSwgc3VybmFtZSwgYWdlLCBjaXR5LCBnZW5kZXJ9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT57aWR9OiB7bmFtZX0ge3N1cm5hbWV9IGlzIGEge2dlbmRlcn0uPC9oMT5cbiAgICAgICAgICAgIDxwPkhlIGxpdmVzIGluIHtjaXR5fSBhbmQgaXMge2FnZX0geWVhcnMgb2xkLjwvcD5cbiAgICAgICAgPC8+XG4gICAgICAgIClcblxufVxuY29uc3QgVXNlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2VycyBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZmV0Y2goYCR7QVBJfS91c2Vyc2ApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zID0+IHJlc3BvbnMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRVc2VycyhkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhgQsWCxIVkOiAke2Vycm9yfWApKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgdXNlcnMgIT09IG51bGwgP1xuICAgICAgICA8PlxuICAgICAgICAgICAgPEFkZFVzZXIvPlxuXG4gICAgICAgICAgICB7dXNlcnMubWFwKChlbCwgaSk9PiA8VXNlciBrZXk9e2l9IGlkPXtlbC5pZH0gbmFtZT17ZWwubmFtZX0gc3VybmFtZT17ZWwuc3VybmFtZX0gYWdlPXtlbC5hZ2V9IGNpdHk9e2VsLmNpdHl9IGdlbmRlcj17ZWwuZ2VuZGVyfS8+KX1cbiAgICAgICAgICAgXG4gICAgICAgIDwvPlxuICAgICAgICA6XG4gICAgICAgIDxwPkhlaiBodWx0YWp1PC9wPlxuXG4gICAgKVxufVxuXG5jb25zdCBBZGRVc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoe25hbWU6IFwiXCIsIHN1cm5hbWU6IFwiXCIsIGFnZTogXCJcIiwgY2l0eTogXCJXYXJzemF3YVwiLCBnZW5kZXI6IFwibWFsZVwifSk7XG4gICAgY29uc3QgaGFuZGxlTmFtZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICBzZXRVc2VyRGF0YShwcmV2ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG5cbiAgICAgICAgdXNlckRhdGEubmFtZS5sZW5ndGggPiA1ID9cblxuICAgICAgICBmZXRjaChgJHtBUEl9L3VzZXJzYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9ucyA9PiByZXNwb25zLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coYELFgsSFZDogJHtlcnJvcn1gKSlcbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWw+UG9kYWogaW1pxJkgPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB2YWx1ZT17dXNlckRhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWV9Lz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGxhYmVsPlBvZGFqIG5hendpc2tvIDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzdXJuYW1lXCIgdmFsdWU9e3VzZXJEYXRhLnN1cm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lfS8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxsYWJlbD5Qb2RhaiB3aWVrIDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJhZ2VcIiB2YWx1ZT17dXNlckRhdGEuYWdlfSBvbkNoYW5nZT17aGFuZGxlTmFtZX0vPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjaXR5XCIgdmFsdWU9e3VzZXJEYXRhLmNpdHl9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIldhcnN6YXdhXCJ9PldhcnN6YXdhPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJLcmFrw7N3XCJ9PktyYWvDs3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIsWBb2TFulwifT7FgcOzZMW6PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJQY2ltXCJ9PlBjaW08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxmaWVsZHNldCBvbkNoYW5nZT17aGFuZGxlTmFtZX0+XG4gICAgICAgICAgICAgICAgPGxlZ2VuZCBzdHlsZT17e1wiZm9udFNpemVcIjogXCIxcmVtXCJ9fT5Zb3VyIGdlbmRlcjwvbGVnZW5kPlxuICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cImdlbmRlclwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtcIm1hbGVcIn0gY2hlY2tlZC8+IE1hbGU8L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBuYW1lPVwiZ2VuZGVyXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e1wiZmVtYWxlXCJ9Lz4gRmVtYWxlPC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cImdlbmRlclwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtcIm5vbmVcIn0gLz4gSSBkb24ndCB3YW5uYSBzYXk8L2xhYmVsPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pld5xZtsaWohPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxucm9vdC5yZW5kZXIoPFVzZXJzLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjBiMmNhNjMwZTY4MThkMTFiYjA5XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJBUEkiLCJVc2VyIiwiX3JlZiIsImlkIiwibmFtZSIsInN1cm5hbWUiLCJhZ2UiLCJjaXR5IiwiZ2VuZGVyIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiVXNlcnMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VycyIsInNldFVzZXJzIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzcG9ucyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiQWRkVXNlciIsIm1hcCIsImVsIiwiaSIsImtleSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImhhbmRsZU5hbWUiLCJlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2IiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsInN0eWxlIiwidHlwZSIsImNoZWNrZWQiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJsZW5ndGgiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=