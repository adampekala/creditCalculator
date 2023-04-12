"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Home_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43);






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
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
  path: "*",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home_welcome__WEBPACK_IMPORTED_MODULE_3__["default"], null)
})))));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4e54657220570699c8f3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZDQyNTg5NGVmZDE1NzQxNzkyZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ2Y7QUFDcUM7QUFFOUM7QUFDQTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNYSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdaLDREQUFVLENBQUNTLFNBQVMsQ0FBQztBQUVsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUNqQiwwREFBQSxDQUFDSyx3REFBVSxxQkFDbkJMLDBEQUFBLENBQUNNLG9EQUFNLHFCQUNDTiwwREFBQSxDQUFDTyxtREFBSztFQUFDWSxJQUFJLEVBQUMsR0FBRztFQUFDQyxPQUFPLGVBQUVwQiwwREFBQSxDQUFDVyxzREFBTTtBQUFHLGdCQUMvQlgsMERBQUEsQ0FBQ08sbURBQUs7RUFBQ1ksSUFBSSxFQUFDLEdBQUc7RUFBQ0MsT0FBTyxlQUFFcEIsMERBQUEsQ0FBQ1kscURBQU87QUFBRyxFQUFFLENBQ2xDLENBR1AsQ0FDQSxDQUFDOzs7Ozs7OztVQ3JIZCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBIYXNoUm91dGVyLCBSb3V0ZXMsIFJvdXRlLCBMaW5rLCBOYXZMaW5rLCBPdXRsZXR9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vTGF5b3V0L2xheW91dFwiO1xuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vSG9tZS93ZWxjb21lXCI7XG5cbi8vIGNvbnN0IEFQSSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCI7XG4vL1xuLy8gY29uc3QgVXNlciA9ICh7aWQsIG5hbWUsIHN1cm5hbWUsIGFnZSwgY2l0eSwgZ2VuZGVyfSkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICA8aDE+e2lkfToge25hbWV9IHtzdXJuYW1lfSBpcyBhIHtnZW5kZXJ9LjwvaDE+XG4vLyAgICAgICAgICAgICA8cD5IZSBsaXZlcyBpbiB7Y2l0eX0gYW5kIGlzIHthZ2V9IHllYXJzIG9sZC48L3A+XG4vLyAgICAgICAgIDwvPlxuLy8gICAgICAgICApXG4vL1xuLy8gfVxuLy8gY29uc3QgVXNlcnMgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgW3VzZXJzLCBzZXRVc2VycyBdID0gdXNlU3RhdGUobnVsbCk7XG4vL1xuLy8gICAgIHVzZUVmZmVjdCgoKT0+e1xuLy8gICAgICAgICBmZXRjaChgJHtBUEl9L3VzZXJzYClcbi8vICAgICAgICAgICAgIC50aGVuKHJlc3BvbnMgPT4gcmVzcG9ucy5qc29uKCkpXG4vLyAgICAgICAgICAgICAudGhlbihkYXRhID0+IHNldFVzZXJzKGRhdGEpKVxuLy8gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGBCxYLEhWQ6ICR7ZXJyb3J9YCkpXG4vLyAgICAgfSwgW10pXG4vL1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIHVzZXJzICE9PSBudWxsID9cbi8vICAgICAgICAgPD5cbi8vICAgICAgICAgICAgIDxBZGRVc2VyLz5cbi8vXG4vLyAgICAgICAgICAgICB7dXNlcnMubWFwKChlbCwgaSk9PiA8VXNlciBrZXk9e2l9IGlkPXtlbC5pZH0gbmFtZT17ZWwubmFtZX0gc3VybmFtZT17ZWwuc3VybmFtZX0gYWdlPXtlbC5hZ2V9IGNpdHk9e2VsLmNpdHl9IGdlbmRlcj17ZWwuZ2VuZGVyfS8+KX1cbi8vXG4vLyAgICAgICAgIDwvPlxuLy8gICAgICAgICA6XG4vLyAgICAgICAgIDxwPkhlaiBodWx0YWp1PC9wPlxuLy9cbi8vICAgICApXG4vLyB9XG4vL1xuLy8gY29uc3QgQWRkVXNlciA9ICgpID0+IHtcbi8vICAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtuYW1lOiBcIlwiLCBzdXJuYW1lOiBcIlwiLCBhZ2U6IFwiXCIsIGNpdHk6IFwiV2Fyc3phd2FcIiwgZ2VuZGVyOiBcIm1hbGVcIn0pO1xuLy8gICAgIGNvbnN0IGhhbmRsZU5hbWUgPSAoZSkgPT4ge1xuLy8gICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbi8vICAgICAgICAgc2V0VXNlckRhdGEocHJldiA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgIC4uLnByZXYsXG4vLyAgICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCk7XG4vL1xuLy8gICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbi8vXG4vLyAgICAgICAgIHVzZXJEYXRhLm5hbWUubGVuZ3RoID4gNSA/XG4vL1xuLy8gICAgICAgICBmZXRjaChgJHtBUEl9L3VzZXJzYCxcbi8vICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuLy8gICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgLnRoZW4ocmVzcG9ucyA9PiByZXNwb25zLmpzb24oKSlcbi8vICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4vLyAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coYELFgsSFZDogJHtlcnJvcn1gKSlcbi8vICAgICAgICAgICAgIDpcbi8vICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuLy8gICAgIH1cbi8vXG4vLyAgICAgcmV0dXJuKFxuLy8gICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbi8vICAgICAgICAgICAgIDxsYWJlbD5Qb2RhaiBpbWnEmSA8YnIvPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIHZhbHVlPXt1c2VyRGF0YS5uYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZX0vPlxuLy8gICAgICAgICAgICAgPC9sYWJlbD5cbi8vICAgICAgICAgICAgIDxici8+XG4vLyAgICAgICAgICAgICA8bGFiZWw+UG9kYWogbmF6d2lza28gPGJyLz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInN1cm5hbWVcIiB2YWx1ZT17dXNlckRhdGEuc3VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWV9Lz5cbi8vICAgICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8YnIvPlxuLy8gICAgICAgICAgICAgPGxhYmVsPlBvZGFqIHdpZWsgPGJyLz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImFnZVwiIHZhbHVlPXt1c2VyRGF0YS5hZ2V9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lfS8+XG4vLyAgICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgICAgPGJyLz5cbi8vICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNpdHlcIiB2YWx1ZT17dXNlckRhdGEuY2l0eX0gb25DaGFuZ2U9e2hhbmRsZU5hbWV9PlxuLy8gICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiV2Fyc3phd2FcIn0+V2Fyc3phd2E8L29wdGlvbj5cbi8vICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIktyYWvDs3dcIn0+S3Jha8Ozdzwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wixYFvZMW6XCJ9PsWBw7Nkxbo8L29wdGlvbj5cbi8vICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIlBjaW1cIn0+UGNpbTwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPC9zZWxlY3Q+XG4vLyAgICAgICAgICAgICA8aHIvPlxuLy8gICAgICAgICAgICAgPGZpZWxkc2V0IG9uQ2hhbmdlPXtoYW5kbGVOYW1lfT5cbi8vICAgICAgICAgICAgICAgICA8bGVnZW5kIHN0eWxlPXt7XCJmb250U2l6ZVwiOiBcIjFyZW1cIn19PllvdXIgZ2VuZGVyPC9sZWdlbmQ+XG4vLyAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBuYW1lPVwiZ2VuZGVyXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e1wibWFsZVwifSBjaGVja2VkLz4gTWFsZTwvbGFiZWw+PGJyLz5cbi8vICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IG5hbWU9XCJnZW5kZXJcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT17XCJmZW1hbGVcIn0vPiBGZW1hbGU8L2xhYmVsPjxici8+XG4vLyAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBuYW1lPVwiZ2VuZGVyXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e1wibm9uZVwifSAvPiBJIGRvbid0IHdhbm5hIHNheTwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30+V3nFm2xpaiE8L2J1dHRvbj5cbi8vICAgICAgICAgPC9mb3JtPlxuLy8gICAgIClcbi8vIH1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5yb290LnJlbmRlcig8SGFzaFJvdXRlcj5cbiAgICA8Um91dGVzPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhlYWRlci8+fT5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nKicgZWxlbWVudD17PFdlbGNvbWUvPn0vPlxuICAgICAgICAgICAgPC9Sb3V0ZT5cblxuXG4gICAgPC9Sb3V0ZXM+XG48L0hhc2hSb3V0ZXI+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI0ZTU0NjU3MjIwNTcwNjk5YzhmM1wiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJIZWFkZXIiLCJXZWxjb21lIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwicGF0aCIsImVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9