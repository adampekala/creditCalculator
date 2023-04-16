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
      fetch("".concat("http://localhost:3005", "/data/1"), {
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
/******/ 	__webpack_require__.h = function() { return "b0ebcd5bd11426217940"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MDUxNzg3ODIyOTc0NDU5MmYyYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDQTtBQUNKO0FBQ0o7QUFDQTtBQUd0QyxJQUFNTyxRQUFRLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUF5QztFQUFBLElBQXZDQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFFQyxRQUFRLEdBQUFGLElBQUEsQ0FBUkUsUUFBUTtJQUFFQyxZQUFZLEdBQUFILElBQUEsQ0FBWkcsWUFBWTtFQUNoRCxJQUFBQyxTQUFBLEdBQThCWCwrQ0FBUSxDQUFDUSxTQUFTLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBNUNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDMUIsSUFBS0ksRUFBRSxHQUEyQ1AsUUFBUSxDQUFyRE8sRUFBRTtJQUFFQyxJQUFJLEdBQXFDUixRQUFRLENBQWpEUSxJQUFJO0lBQUVDLE9BQU8sR0FBNEJULFFBQVEsQ0FBM0NTLE9BQU87SUFBRUMsS0FBSyxHQUFxQlYsUUFBUSxDQUFsQ1UsS0FBSztJQUFFQyxRQUFRLEdBQVdYLFFBQVEsQ0FBM0JXLFFBQVE7SUFBRUMsS0FBSyxHQUFJWixRQUFRLENBQWpCWSxLQUFLO0VBa0I5QyxJQUFNQyxVQUFVLEdBQUc7SUFBQ0MsS0FBSyxFQUFFLE1BQU07SUFBRUMsTUFBTSxFQUFFO0VBQU0sQ0FBQztFQUVsRCxvQkFDSXpCLDBEQUFBO0lBQUsyQixTQUFTLEVBQUM7RUFBUyxnQkFDcEIzQiwwREFBQTtJQUFLMkIsU0FBUyxFQUFDO0VBQWtCLEVBQzNCLGVBQ04zQiwwREFBQTtJQUFLMkIsU0FBUyxFQUFDO0VBQTJCLGdCQUN0QzNCLDBEQUFBLGFBQUksUUFBTSxFQUFDa0IsSUFBSSxFQUFDLHFCQUFtQixDQUFLLGVBQ3hDbEIsMERBQUE7SUFBSTJCLFNBQVMsRUFBQztFQUFrQixnQkFDNUIzQiwwREFBQSwwQkFDQUEsMERBQUEsNEJBQ0lBLDBEQUFBLENBQUNJLHNEQUFVO0lBQUN3QixLQUFLLEVBQUVMO0VBQVcsRUFBRSxDQUM3QixlQUNIdkIsMERBQUEsZUFBT29CLEtBQUssQ0FBQ1MsTUFBTSxFQUFDLHNCQUFlLENBQU8sQ0FDekMsZUFDTDdCLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0ssa0RBQU07SUFBQ3VCLEtBQUssRUFBRUw7RUFBVyxFQUFFLENBQ3pCLGVBQ0h2QiwwREFBQSxlQUFPbUIsT0FBTyxDQUFDVSxNQUFNLEVBQUMsa0JBQWEsQ0FBTyxDQUN6QyxlQUNMN0IsMERBQUEsMEJBQ0FBLDBEQUFBLDRCQUNJQSwwREFBQSxDQUFDRywwREFBYztJQUFDeUIsS0FBSyxFQUFFTDtFQUFXLEVBQUUsQ0FDakMsZUFDSHZCLDBEQUFBLGVBQU9xQixRQUFRLENBQUNRLE1BQU0sRUFBQyxZQUFVLENBQU8sQ0FDdkMsZUFDTDdCLDBEQUFBLDBCQUNBQSwwREFBQSw0QkFDSUEsMERBQUEsQ0FBQ0UsMERBQWM7SUFBQzBCLEtBQUssRUFBRUw7RUFBVyxFQUFFLENBQ2pDLGVBQ0h2QiwwREFBQSxlQUFPc0IsS0FBSyxDQUFDTyxNQUFNLEVBQUMsaUJBQWUsQ0FBTyxDQUN6QyxDQUNKLGVBRUw3QiwwREFBQSxDQUFDTSxrREFBSTtJQUFDd0IsRUFBRSxFQUFFLFFBQVM7SUFBQ0gsU0FBUyxFQUFFO0VBQXFCLEdBQUMsMEJBQXdCLENBQU8sZUFDcEYzQiwwREFBQSxDQUFDTSxrREFBSTtJQUFDd0IsRUFBRSxFQUFFLFFBQVM7SUFBQ0gsU0FBUyxFQUFFLG9CQUFxQjtJQUFDSSxPQUFPLEVBbERuRCxTQUFmQyxZQUFZQSxDQUFBLEVBQVM7TUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeEIsUUFBUSxDQUFDO01BRXJCeUIsS0FBSyxJQUFBQyxNQUFBLENBTkcsdUJBQXVCLGNBTVI7UUFDbkJDLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM5QixRQUFRLENBQUM7UUFDOUIrQixPQUFPLEVBQUU7VUFBQyxjQUFjLEVBQUU7UUFBa0I7TUFDaEQsQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFBQyxRQUFRO1FBQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7TUFBQSxFQUFDLENBQUNGLElBQUksQ0FBQyxVQUFBRyxJQUFJO1FBQUEsT0FBSVosT0FBTyxDQUFDQyxHQUFHLENBQUNXLElBQUksQ0FBQztNQUFBLEVBQUMsU0FBTSxDQUFDLFVBQUFDLE1BQU07UUFBQSxPQUFJYixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDO01BQUEsRUFBQzs7TUFFekc7SUFDSjtFQXdDdUYsR0FBRSxrQkFBVyxDQUFPLENBRTdGLENBQ0o7QUFDZCxDQUFDO0FBRUQsK0RBQWV2QyxRQUFROzs7Ozs7OztVQ3RFdkIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL3VzZXJEYXRhL3VzZXJEYXRhLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7RmFNb25leUJpbGxBbHR9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtHaVJlY2VpdmVNb25leX0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQge1RiUGlnTW9uZXl9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiO1xuaW1wb3J0IHtCc0Jhbmt9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuXG5jb25zdCBVc2VyRGF0YSA9ICh7dXNlckxvZ0luLCB1c2VyRGF0YSwgc2V0VXNlckxvZ0lufSkgPT4ge1xuICAgIGxldCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKHVzZXJMb2dJbik7XG4gICAgbGV0IHtpZCwgbmFtZSwgY3JlZGl0cywgbG9hbnMsIGRlcG9zaXRzLCBib25kc30gPSB1c2VyRGF0YTtcbiAgICBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiXG5cblxuICAgIGNvbnN0IGhhbmRsZUxvZ091dCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpO1xuXG4gICAgICAgIGZldGNoKGAke0FQSX0vZGF0YS8xYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChyZWplY3QgPT4gY29uc29sZS5sb2cocmVqZWN0KSlcblxuICAgICAgICAvLyBzZXRVc2VyTG9nSW4oZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBjb25zdCBpY29uc1N0eWxlID0ge3dpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIn07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUxlZnRQaG90b1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVIZXJvIGNvbnRyYXN0Q29sb3JcIj5cbiAgICAgICAgICAgICAgICA8aDE+V2l0YWoge25hbWV9ISBUd29qZSBvYmxpY3plbmlhLjwvaDE+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndlbGNvbWVIZXJvLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYlBpZ01vbmV5IHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntsb2Fucy5sZW5ndGh9IHBvxbx5Y3prYShpL2VrKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0Jhbmsgc3R5bGU9e2ljb25zU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NyZWRpdHMubGVuZ3RofSBrcmVkeXQow7N3L3kpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdpUmVjZWl2ZU1vbmV5IHN0eWxlPXtpY29uc1N0eWxlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkZXBvc2l0cy5sZW5ndGh9IGxva2F0YSh5KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYU1vbmV5QmlsbEFsdCBzdHlsZT17aWNvbnNTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Ym9uZHMubGVuZ3RofSBvYmxpZ2FjamEoZS9pKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPExpbmsgdG89eycvbG9naW4nfSBjbGFzc05hbWU9e1widGhpcmRDb2xvciBsb2dMaW5rXCJ9PlNrb3J6eXN0YWogeiBrYWxrdWxhdG9yYTwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9sb2dpbid9IGNsYXNzTmFtZT17XCJ0aGlyZENvbG9yIGxvZ0xpbmtcIn0gb25DbGljaz17aGFuZGxlTG9nT3V0fSA+V3lsb2d1aiBzacSZPC9MaW5rPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyRGF0YTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiMGViY2Q1YmQxMTQyNjIxNzk0MFwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYU1vbmV5QmlsbEFsdCIsIkdpUmVjZWl2ZU1vbmV5IiwiVGJQaWdNb25leSIsIkJzQmFuayIsIkxpbmsiLCJVc2VyRGF0YSIsIl9yZWYiLCJ1c2VyTG9nSW4iLCJ1c2VyRGF0YSIsInNldFVzZXJMb2dJbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJpZCIsIm5hbWUiLCJjcmVkaXRzIiwibG9hbnMiLCJkZXBvc2l0cyIsImJvbmRzIiwiaWNvbnNTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwibGVuZ3RoIiwidG8iLCJvbkNsaWNrIiwiaGFuZGxlTG9nT3V0IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiY29uY2F0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9