"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 52:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);





var Login = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcome"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeLeftPhoto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "welcomeHero contrastColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Witaj"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      display: "block",
      position: "relative",
      width: "400px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "amount",
    value: "Wpisz kwotę kredytu"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "PLN")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      display: "block",
      position: "relative",
      width: "400px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "amount",
    value: "Wpisz kwotę kredytu"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "inputAmount-caurrency",
    style: {
      display: "block",
      position: "absolute"
    }
  }, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnOblicz"
  }, "Zaloguj"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);
/* harmony import */ var _Login_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
/* harmony import */ var _Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);








// const API = "http://localhost:3005";
//
// const User = ({id, name, surname, age, city, gender}) => {
//     return (
//         <>
//             <h1>{id}: {name} {surname} is a {gender}.</h1>
//             <p>He lives in {city} and is {age} years old.</p>
//         </>
//         )
//
// }
// const Users = () => {
//     const [users, setUsers ] = useState(null);
//
//     useEffect(()=>{
//         fetch(`${API}/users`)
//             .then(respons => respons.json())
//             .then(data => setUsers(data))
//             .catch(error => console.log(`Błąd: ${error}`))
//     }, [])
//
//     return (
//         users !== null ?
//         <>
//             <AddUser/>
//
//             {users.map((el, i)=> <User key={i} id={el.id} name={el.name} surname={el.surname} age={el.age} city={el.city} gender={el.gender}/>)}
//
//         </>
//         :
//         <p>Hej hultaju</p>
//
//     )
// }
//
// const AddUser = () => {
//     const [userData, setUserData] = useState({name: "", surname: "", age: "", city: "Warszawa", gender: "male"});
//     const handleName = (e) => {
//         const {name, value} = e.target;
//         console.log(e.target);
//         setUserData(prev => {
//             return {
//                 ...prev,
//                 [name]: value
//             }
//         });
//     }
//
//     const handleSubmit = (e) => e.preventDefault();
//
//     const handleClick = (e) => {
//
//         userData.name.length > 5 ?
//
//         fetch(`${API}/users`,
//             {
//                 method: "POST",
//                 body: JSON.stringify(userData),
//                 headers: {"Content-type": "application/json"}
//             })
//             .then(respons => respons.json())
//             .then(data => console.log(data))
//             .catch(error => console.log(`Błąd: ${error}`))
//             :
//             e.preventDefault()
//     }
//
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>Podaj imię <br/>
//                 <input name="name" value={userData.name} onChange={handleName}/>
//             </label>
//             <br/>
//             <label>Podaj nazwisko <br/>
//                 <input name="surname" value={userData.surname} onChange={handleName}/>
//             </label>
//             <br/>
//             <label>Podaj wiek <br/>
//                 <input name="age" value={userData.age} onChange={handleName}/>
//             </label>
//             <br/>
//             <select name="city" value={userData.city} onChange={handleName}>
//                 <option value={"Warszawa"}>Warszawa</option>
//                 <option value={"Kraków"}>Kraków</option>
//                 <option value={"Łodź"}>Łódź</option>
//                 <option value={"Pcim"}>Pcim</option>
//             </select>
//             <hr/>
//             <fieldset onChange={handleName}>
//                 <legend style={{"fontSize": "1rem"}}>Your gender</legend>
//                 <label><input name="gender" type="radio" value={"male"} checked/> Male</label><br/>
//                 <label><input name="gender" type="radio" value={"female"}/> Female</label><br/>
//                 <label><input name="gender" type="radio" value={"none"} /> I don't wanna say</label>
//             </fieldset>
//             <button type={"submit"} onClick={handleClick}>Wyślij!</button>
//         </form>
//     )
// }

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "home",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "login",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login_login__WEBPACK_IMPORTED_MODULE_4__["default"], null)
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Route, {
  path: "calculator",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Main_mainApplication__WEBPACK_IMPORTED_MODULE_5__["default"], null)
})))));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "824e57079b5d31703866"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsZ0JBQy9CekIsMERBQUEsQ0FBQ3FCLG1EQUFLO0VBQUNZLElBQUksRUFBQyxNQUFNO0VBQUNDLE9BQU8sZUFBRWxDLDBEQUFBLENBQUMwQixxREFBTztBQUFHLEVBQUUsZUFDekMxQiwwREFBQSxDQUFDcUIsbURBQUs7RUFBQ1ksSUFBSSxFQUFDLE9BQU87RUFBQ0MsT0FBTyxlQUFFbEMsMERBQUEsQ0FBQ0ssb0RBQUs7QUFBRyxFQUFFLGVBQ3hDTCwwREFBQSxDQUFDcUIsbURBQUs7RUFBQ1ksSUFBSSxFQUFDLFlBQVk7RUFBQ0MsT0FBTyxlQUFFbEMsMERBQUEsQ0FBQzJCLDZEQUFlO0FBQUcsRUFBRSxDQUVuRCxDQUdQLENBQ0EsQ0FBQzs7Ozs7Ozs7VUMxSGQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL0xvZ2luL2xvZ2luLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtGYU1vbmV5QmlsbEFsdH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQge0dpUmVjZWl2ZU1vbmV5fSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7VGJQaWdNb25leX0gZnJvbSBcInJlYWN0LWljb25zL3RiXCI7XG5pbXBvcnQge0JzQmFua30gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgaWNvbnNTdHlsZSA9IHt3aWR0aDogXCI1MHB4XCIsIGhlaWdodDogXCI1MHB4XCJ9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lTGVmdFBob3RvXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZUhlcm8gY29udHJhc3RDb2xvclwiPlxuICAgICAgICAgICAgICAgIDxoMT5XaXRhajwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IFwiNDAwcHhcIn19PjxpbnB1dCB0eXBlPXtcInRleHRcIn0gbmFtZT17XCJhbW91bnRcIn0gdmFsdWU9e1wiV3Bpc3oga3dvdMSZIGtyZWR5dHVcIn0vPjxzcGFuIGNsYXNzTmFtZT17XCJpbnB1dEFtb3VudC1jYXVycmVuY3lcIn0gc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCJ9fT5QTE48L3NwYW4+PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjQwMHB4XCJ9fT48aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IG5hbWU9e1wiYW1vdW50XCJ9IHZhbHVlPXtcIldwaXN6IGt3b3TEmSBrcmVkeXR1XCJ9Lz48c3BhbiBjbGFzc05hbWU9e1wiaW5wdXRBbW91bnQtY2F1cnJlbmN5XCJ9IHN0eWxlPXt7ZGlzcGxheTogXCJibG9ja1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+JTwvc3Bhbj48L2xhYmVsPlxuXG5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17XCJidG5PYmxpY3pcIn0+WmFsb2d1ajwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCBMaW5rLCBOYXZMaW5rLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vTGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vSG9tZS93ZWxjb21lXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW4vbG9naW5cIjtcbmltcG9ydCBNYWluQXBwbGljYXRpb24gZnJvbSBcIi4vTWFpbi9tYWluQXBwbGljYXRpb25cIjtcblxuLy8gY29uc3QgQVBJID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDVcIjtcbi8vXG4vLyBjb25zdCBVc2VyID0gKHtpZCwgbmFtZSwgc3VybmFtZSwgYWdlLCBjaXR5LCBnZW5kZXJ9KSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPD5cbi8vICAgICAgICAgICAgIDxoMT57aWR9OiB7bmFtZX0ge3N1cm5hbWV9IGlzIGEge2dlbmRlcn0uPC9oMT5cbi8vICAgICAgICAgICAgIDxwPkhlIGxpdmVzIGluIHtjaXR5fSBhbmQgaXMge2FnZX0geWVhcnMgb2xkLjwvcD5cbi8vICAgICAgICAgPC8+XG4vLyAgICAgICAgIClcbi8vXG4vLyB9XG4vLyBjb25zdCBVc2VycyA9ICgpID0+IHtcbi8vICAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzIF0gPSB1c2VTdGF0ZShudWxsKTtcbi8vXG4vLyAgICAgdXNlRWZmZWN0KCgpPT57XG4vLyAgICAgICAgIGZldGNoKGAke0FQSX0vdXNlcnNgKVxuLy8gICAgICAgICAgICAgLnRoZW4ocmVzcG9ucyA9PiByZXNwb25zLmpzb24oKSlcbi8vICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0VXNlcnMoZGF0YSkpXG4vLyAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coYELFgsSFZDogJHtlcnJvcn1gKSlcbi8vICAgICB9LCBbXSlcbi8vXG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgdXNlcnMgIT09IG51bGwgP1xuLy8gICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPEFkZFVzZXIvPlxuLy9cbi8vICAgICAgICAgICAgIHt1c2Vycy5tYXAoKGVsLCBpKT0+IDxVc2VyIGtleT17aX0gaWQ9e2VsLmlkfSBuYW1lPXtlbC5uYW1lfSBzdXJuYW1lPXtlbC5zdXJuYW1lfSBhZ2U9e2VsLmFnZX0gY2l0eT17ZWwuY2l0eX0gZ2VuZGVyPXtlbC5nZW5kZXJ9Lz4pfVxuLy9cbi8vICAgICAgICAgPC8+XG4vLyAgICAgICAgIDpcbi8vICAgICAgICAgPHA+SGVqIGh1bHRhanU8L3A+XG4vL1xuLy8gICAgIClcbi8vIH1cbi8vXG4vLyBjb25zdCBBZGRVc2VyID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoe25hbWU6IFwiXCIsIHN1cm5hbWU6IFwiXCIsIGFnZTogXCJcIiwgY2l0eTogXCJXYXJzemF3YVwiLCBnZW5kZXI6IFwibWFsZVwifSk7XG4vLyAgICAgY29uc3QgaGFuZGxlTmFtZSA9IChlKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcbi8vICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuLy8gICAgICAgICBzZXRVc2VyRGF0YShwcmV2ID0+IHtcbi8vICAgICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICAgICAgLi4ucHJldixcbi8vICAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vXG4vLyAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IGUucHJldmVudERlZmF1bHQoKTtcbi8vXG4vLyAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuLy9cbi8vICAgICAgICAgdXNlckRhdGEubmFtZS5sZW5ndGggPiA1ID9cbi8vXG4vLyAgICAgICAgIGZldGNoKGAke0FQSX0vdXNlcnNgLFxuLy8gICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4vLyAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuLy8gICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAudGhlbihyZXNwb25zID0+IHJlc3BvbnMuanNvbigpKVxuLy8gICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcbi8vICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhgQsWCxIVkOiAke2Vycm9yfWApKVxuLy8gICAgICAgICAgICAgOlxuLy8gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4vLyAgICAgfVxuLy9cbi8vICAgICByZXR1cm4oXG4vLyAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuLy8gICAgICAgICAgICAgPGxhYmVsPlBvZGFqIGltacSZIDxici8+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgdmFsdWU9e3VzZXJEYXRhLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lfS8+XG4vLyAgICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgICAgPGJyLz5cbi8vICAgICAgICAgICAgIDxsYWJlbD5Qb2RhaiBuYXp3aXNrbyA8YnIvPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic3VybmFtZVwiIHZhbHVlPXt1c2VyRGF0YS5zdXJuYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZX0vPlxuLy8gICAgICAgICAgICAgPC9sYWJlbD5cbi8vICAgICAgICAgICAgIDxici8+XG4vLyAgICAgICAgICAgICA8bGFiZWw+UG9kYWogd2llayA8YnIvPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiYWdlXCIgdmFsdWU9e3VzZXJEYXRhLmFnZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWV9Lz5cbi8vICAgICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8YnIvPlxuLy8gICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY2l0eVwiIHZhbHVlPXt1c2VyRGF0YS5jaXR5fSBvbkNoYW5nZT17aGFuZGxlTmFtZX0+XG4vLyAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJXYXJzemF3YVwifT5XYXJzemF3YTwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiS3Jha8Ozd1wifT5LcmFrw7N3PC9vcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCLFgW9kxbpcIn0+xYHDs2TFujwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiUGNpbVwifT5QY2ltPC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8L3NlbGVjdD5cbi8vICAgICAgICAgICAgIDxoci8+XG4vLyAgICAgICAgICAgICA8ZmllbGRzZXQgb25DaGFuZ2U9e2hhbmRsZU5hbWV9PlxuLy8gICAgICAgICAgICAgICAgIDxsZWdlbmQgc3R5bGU9e3tcImZvbnRTaXplXCI6IFwiMXJlbVwifX0+WW91ciBnZW5kZXI8L2xlZ2VuZD5cbi8vICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IG5hbWU9XCJnZW5kZXJcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17XCJtYWxlXCJ9IGNoZWNrZWQvPiBNYWxlPC9sYWJlbD48YnIvPlxuLy8gICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cImdlbmRlclwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtcImZlbWFsZVwifS8+IEZlbWFsZTwvbGFiZWw+PGJyLz5cbi8vICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IG5hbWU9XCJnZW5kZXJcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17XCJub25lXCJ9IC8+IEkgZG9uJ3Qgd2FubmEgc2F5PC9sYWJlbD5cbi8vICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5XecWbbGlqITwvYnV0dG9uPlxuLy8gICAgICAgICA8L2Zvcm0+XG4vLyAgICAgKVxuLy8gfVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5cbnJvb3QucmVuZGVyKDxIYXNoUm91dGVyPlxuICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SGVhZGVyLz59PlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdob21lJyBlbGVtZW50PXs8V2VsY29tZS8+fS8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2xvZ2luJyBlbGVtZW50PXs8TG9naW4vPn0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPSdjYWxjdWxhdG9yJyBlbGVtZW50PXs8TWFpbkFwcGxpY2F0aW9uLz59Lz5cblxuICAgICAgICAgICAgPC9Sb3V0ZT5cblxuXG4gICAgPC9Sb3V0ZXM+XG48L0hhc2hSb3V0ZXI+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4MjRlNTcwNzliNWQzMTcwMzg2NlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiRmFNb25leUJpbGxBbHQiLCJHaVJlY2VpdmVNb25leSIsIlRiUGlnTW9uZXkiLCJCc0JhbmsiLCJMb2dpbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsIndpZHRoIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiSGVhZGVyIiwiV2VsY29tZSIsIk1haW5BcHBsaWNhdGlvbiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwicGF0aCIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9