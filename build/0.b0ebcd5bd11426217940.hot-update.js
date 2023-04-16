"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 54:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var UserData = function (_ref) {
  var userLogIn = _ref.userLogIn,
    userData = _ref.userData,
    setUserLogIn = _ref.setUserLogIn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(userLogIn),
    _useState2 = _slicedToArray(_useState, 2),
    isLogged = _useState2[0],
    setIsLogged = _useState2[1];
  var id = userData.id,
    name = userData.name,
    credits = userData.credits,
    loans = userData.loans,
    deposits = userData.deposits,
    bonds = userData.bonds;
  var iconsStyle = {
    width: "50px",
    height: "50px"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeLeftPhoto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj ", name, "! Twoje obliczenia."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "welcomeHero-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_tb__WEBPACK_IMPORTED_MODULE_1__.TbPigMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, loans.length, " po\u017Cyczka(i/ek)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsBank, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, credits.length, " kredyt(\xF3w/y)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiReceiveMoney, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, deposits.length, " lokata(y)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMoneyBillAlt, {
    style: iconsStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, bonds.length, " obligacja(e/i)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: '/login',
    className: "thirdColor logLink"
  }, "Skorzystaj z kalkulatora"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
    to: '/login',
    className: "thirdColor logLink",
    onClick: function handleLogOut() {
      console.log(userData);
      fetch("".concat("http://localhost:3005", "/data/").concat(id), {
        method: "PUT",
        body: JSON.stringify(userData),
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

      // setUserLogIn(false);
    }
  }, "Wyloguj si\u0119")));
};
/* harmony default export */ __webpack_exports__["default"] = (UserData);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d1e6ac9ffca31d971844"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMGViY2Q1YmQxMTQyNjIxNzk0MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDQTtBQUNKO0FBQ0o7QUFDQTtBQUd0QyxJQUFNTyxRQUFRLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUF5QztFQUFBLElBQXZDQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtJQUFFQyxZQUFZLEdBQUFILElBQUEsQ0FBWkcsWUFBWTtFQUNoRCxJQUFBQyxTQUFBLEdBQThCWCwrQ0FBUSxDQUFDUSxTQUFTLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBNUNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDMUIsSUFBS0ksRUFBRSxHQUEyQ1AsUUFBUSxDQUFyRE8sRUFBRTtJQUFFQyxJQUFJLEdBQXFDUixRQUFRLENBQWpEUSxJQUFJO0lBQUVDLE9BQU8sR0FBNEJULFFBQVEsQ0FBM0NTLE9BQU87SUFBRUMsS0FBSyxHQUFxQlYsUUFBUSxDQUFsQ1UsS0FBSztJQUFFQyxRQUFRLEdBQVdYLFFBQVEsQ0FBM0JXLFFBQVE7SUFBRUMsS0FBSyxHQUFJWixRQUFRLENBQWpCWSxLQUFLO0VBa0I5QyxJQUFNQyxVQUFVLEdBQUc7SUFBQ0MsS0FBSyxFQUFFLE1BQU07SUFBRUMsTUFBTSxFQUFFO0VBQU0sQ0FBQztFQUVsRCxvQkFDSXpCLDBEQUFBO0lBQUsyQixTQUFTLEVBQUM7RUFBUyxnQkFDcEIzQiwwREFBQTtJQUFLMkIsU0FBUyxFQUFDO0VBQWtCLEVBQzNCLGVBQ04zQiwwREFBQTtJQUFLMkIsU0FBUyxFQUFDO0VBQTJCLGdCQUN0QzNCLDBEQUFBLGFBQUksUUFBTSxFQUFDa0IsSUFBSSxFQUFDLHFCQUFtQixDQUFLLGVBQ3hDbEIsMERBQUE7SUFBSTJCLFNBQVMsRUFBQztFQUFrQixnQkFDNUIzQiwwREFBQSwwQkFDQUEsMERBQUEsNEJBQ0lBLDBEQUFBLENBQUNJLHNEQUFVO0lBQUN3QixLQUFLLEVBQUVMO0VBQVcsRUFBRSxDQUM3QixlQUNIdkIsMERBQUEsZUFBT29CLEtBQUssQ0FBQ1MsTUFBTSxFQUFDLHNCQUFlLENBQU8sQ0FDekMsZUFDTDdCLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0ssa0RBQU07SUFBQ3VCLEtBQUssRUFBRUw7RUFBVyxFQUFFLENBQ3pCLGVBQ0h2QiwwREFBQSxlQUFPbUIsT0FBTyxDQUFDVSxNQUFNLEVBQUMsa0JBQWEsQ0FBTyxDQUN6QyxlQUNMN0IsMERBQUEsMEJBQ0FBLDBEQUFBLDRCQUNJQSwwREFBQSxDQUFDRywwREFBYztJQUFDeUIsS0FBSyxFQUFFTDtFQUFXLEVBQUUsQ0FDakMsZUFDSHZCLDBEQUFBLGVBQU9xQixRQUFRLENBQUNRLE1BQU0sRUFBQyxZQUFVLENBQU8sQ0FDdkMsZUFDTDdCLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0UsMERBQWM7SUFBQzBCLEtBQUssRUFBRUw7RUFBVyxFQUFFLENBQ2pDLGVBQ0h2QiwwREFBQSxlQUFPc0IsS0FBSyxDQUFDTyxNQUFNLEVBQUMsaUJBQWUsQ0FBTyxDQUN6QyxDQUNKLGVBRUw3QiwwREFBQSxDQUFDTSxrREFBSTtJQUFDd0IsRUFBRSxFQUFFLFFBQVM7SUFBQ0gsU0FBUyxFQUFFO0VBQXFCLEdBQUMsMEJBQXdCLENBQU8sZUFDcEYzQiwwREFBQSxDQUFDTSxrREFBSTtJQUFDd0IsRUFBRSxFQUFFLFFBQVM7SUFBQ0gsU0FBUyxFQUFFLG9CQUFxQjtJQUFDSSxPQUFPLEVBbERuRCxTQUFmQyxZQUFZQSxDQUFBLEVBQVM7TUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeEIsUUFBUSxDQUFDO01BRXJCeUIsS0FBSyxJQUFBQyxNQUFBLENBTkcsdUJBQXVCLFlBQUFBLE1BQUEsQ0FNVm5CLEVBQUUsR0FBSTtRQUN2Qm9CLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM5QixRQUFRLENBQUM7UUFDOUIrQixPQUFPLEVBQUU7VUFBQyxjQUFjLEVBQUU7UUFBa0I7TUFDaEQsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFBQyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7TUFBQSxFQUFDLENBQUNGLElBQUksQ0FBQyxVQUFBRyxJQUFJO1FBQUEsT0FBSVosT0FBTyxDQUFDQyxHQUFHLENBQUNXLElBQUksQ0FBQztNQUFBLEVBQUMsU0FBTSxDQUFDLFVBQUFDLE1BQU07UUFBQSxPQUFJYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDO01BQUEsRUFBQzs7TUFFekc7SUFDSjtFQXdDdUYsR0FBRSxrQkFBVyxDQUFPLENBRTdGLENBQ0o7QUFDZCxDQUFDO0FBRUQsK0RBQWV2QyxRQUFROzs7Ozs7OztVQ3RFdkIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL3VzZXJEYXRhL3VzZXJEYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmFNb25leUJpbGxBbHR9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtHaVJlY2VpdmVNb25leX0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQge1RiUGlnTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiO1xuaW1wb3J0IHtCc0Jhbmt9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuXG5jb25zdCBVc2VyRGF0YSA9ICh7dXNlckxvZ0luLCB1c2VyRGF0YSwgc2V0VXNlckxvZ0lufSkgPT4ge1xuICAgIGxldCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKHVzZXJMb2dJbik7XG4gICAgbGV0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YTtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG5cblxuICAgIGNvbnN0IGhhbmRsZUxvZ091dCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIGZldGNoKGAke0FQSX0vZGF0YS8ke2lkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkuY2F0Y2gocmVqZWN0ID0+IGNvbnNvbGUubG9nKHJlamVjdCkpXG5cbiAgICAgICAgLy8gc2V0VXNlckxvZ0luKGZhbHNlKTtcbiAgICB9XG5cblxuXG4gICAgY29uc3QgaWNvbnNTdHlsZSA9IHt3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCJ9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVMZWZ0UGhvdG9cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lSGVybyBjb250cmFzdENvbG9yXCI+XG4gICAgICAgICAgICAgICAgPGgxPldpdGFqIHtuYW1lfSEgVHdvamUgb2JsaWN6ZW5pYS48L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3ZWxjb21lSGVyby1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGJQaWdNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bG9hbnMubGVuZ3RofSBwb8W8eWN6a2EoaS9layk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnNCYW5rIHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntjcmVkaXRzLmxlbmd0aH0ga3JlZHl0KMOzdy95KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaVJlY2VpdmVNb25leSBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGVwb3NpdHMubGVuZ3RofSBsb2thdGEoeSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFNb25leUJpbGxBbHQgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2JvbmRzLmxlbmd0aH0gb2JsaWdhY2phKGUvaSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2xvZ2luJ30gY2xhc3NOYW1lPXtcInRoaXJkQ29sb3IgbG9nTGlua1wifT5Ta29yenlzdGFqIHoga2Fsa3VsYXRvcmE8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89eycvbG9naW4nfSBjbGFzc05hbWU9e1widGhpcmRDb2xvciBsb2dMaW5rXCJ9IG9uQ2xpY2s9e2hhbmRsZUxvZ091dH0gPld5bG9ndWogc2nEmTwvTGluaz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pilcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckRhdGE7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZDFlNmFjOWZmY2EzMWQ5NzE4NDRcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMaW5rIiwiVXNlckRhdGEiLCJfcmVmIiwidXNlckxvZ0luIiwidXNlckRhdGEiLCJzZXRVc2VyTG9nSW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc0xvZ2dlZCIsInNldElzTG9nZ2VkIiwiaWQiLCJuYW1lIiwiY3JlZGl0cyIsImxvYW5zIiwiZGVwb3NpdHMiLCJib25kcyIsImljb25zU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImxlbmd0aCIsInRvIiwib25DbGljayIsImhhbmRsZUxvZ091dCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==