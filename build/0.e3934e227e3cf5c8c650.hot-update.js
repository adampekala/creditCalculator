self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/adam/CodersLab/creditCalculator/js/Layout/layout.js: Unexpected token (4:0)\n\n\u001b[0m \u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mSiderHistory\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m\"../Sider/sider\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m \u001b[36mimport\u001b[39m {\u001b[33mMdLockOutline\u001b[39m} \u001b[36mfrom\u001b[39m \u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 |\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mHeader\u001b[39m \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m     \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 6 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33mheader\u001b[39m className\u001b[33m=\u001b[39m{\u001b[32m\"mainColor topBar\"\u001b[39m}\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.unexpected (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:3291:16)\n    at JSXParserMixin.parseImportSource (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:14062:32)\n    at JSXParserMixin.parseImport (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:14046:24)\n    at JSXParserMixin.parseStatementContent (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:12651:27)\n    at JSXParserMixin.parseStatementLike (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:12544:17)\n    at JSXParserMixin.parseModuleItem (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:12521:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/adam/CodersLab/creditCalculator/node_modules/@babel/parser/lib/index.js:13116:36)");

/***/ }),

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Layout_layout__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_layout__WEBPACK_IMPORTED_MODULE_2__);




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
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Layout_layout__WEBPACK_IMPORTED_MODULE_2___default()), null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "399ed4a0ccbd65f471b5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMzkzNGUyMjdlM2NmNWM4YzY1MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDZDtBQUVUOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1NLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR0wsNERBQVUsQ0FBQ0UsU0FBUyxDQUFDO0FBRWxDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ1YsMERBQUEsQ0FBQ0ssdURBQU0sT0FBRSxDQUFDOzs7Ozs7OztVQzNHdEIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vTGF5b3V0L2xheW91dFwiO1xuXG4vLyBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNVwiO1xuLy9cbi8vIGNvbnN0IFVzZXIgPSAoe2lkLCBuYW1lLCBzdXJuYW1lLCBhZ2UsIGNpdHksIGdlbmRlcn0pID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPGgxPntpZH06IHtuYW1lfSB7c3VybmFtZX0gaXMgYSB7Z2VuZGVyfS48L2gxPlxuLy8gICAgICAgICAgICAgPHA+SGUgbGl2ZXMgaW4ge2NpdHl9IGFuZCBpcyB7YWdlfSB5ZWFycyBvbGQuPC9wPlxuLy8gICAgICAgICA8Lz5cbi8vICAgICAgICAgKVxuLy9cbi8vIH1cbi8vIGNvbnN0IFVzZXJzID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnMgXSA9IHVzZVN0YXRlKG51bGwpO1xuLy9cbi8vICAgICB1c2VFZmZlY3QoKCk9Pntcbi8vICAgICAgICAgZmV0Y2goYCR7QVBJfS91c2Vyc2ApXG4vLyAgICAgICAgICAgICAudGhlbihyZXNwb25zID0+IHJlc3BvbnMuanNvbigpKVxuLy8gICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXRVc2VycyhkYXRhKSlcbi8vICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhgQsWCxIVkOiAke2Vycm9yfWApKVxuLy8gICAgIH0sIFtdKVxuLy9cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICB1c2VycyAhPT0gbnVsbCA/XG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICA8QWRkVXNlci8+XG4vL1xuLy8gICAgICAgICAgICAge3VzZXJzLm1hcCgoZWwsIGkpPT4gPFVzZXIga2V5PXtpfSBpZD17ZWwuaWR9IG5hbWU9e2VsLm5hbWV9IHN1cm5hbWU9e2VsLnN1cm5hbWV9IGFnZT17ZWwuYWdlfSBjaXR5PXtlbC5jaXR5fSBnZW5kZXI9e2VsLmdlbmRlcn0vPil9XG4vL1xuLy8gICAgICAgICA8Lz5cbi8vICAgICAgICAgOlxuLy8gICAgICAgICA8cD5IZWogaHVsdGFqdTwvcD5cbi8vXG4vLyAgICAgKVxuLy8gfVxuLy9cbi8vIGNvbnN0IEFkZFVzZXIgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7bmFtZTogXCJcIiwgc3VybmFtZTogXCJcIiwgYWdlOiBcIlwiLCBjaXR5OiBcIldhcnN6YXdhXCIsIGdlbmRlcjogXCJtYWxlXCJ9KTtcbi8vICAgICBjb25zdCBoYW5kbGVOYW1lID0gKGUpID0+IHtcbi8vICAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4vLyAgICAgICAgIHNldFVzZXJEYXRhKHByZXYgPT4ge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuLy8gICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSk7XG4vLyAgICAgfVxuLy9cbi8vICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy9cbi8vICAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4vL1xuLy8gICAgICAgICB1c2VyRGF0YS5uYW1lLmxlbmd0aCA+IDUgP1xuLy9cbi8vICAgICAgICAgZmV0Y2goYCR7QVBJfS91c2Vyc2AsXG4vLyAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXG4vLyAgICAgICAgICAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgIC50aGVuKHJlc3BvbnMgPT4gcmVzcG9ucy5qc29uKCkpXG4vLyAgICAgICAgICAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuLy8gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGBCxYLEhWQ6ICR7ZXJyb3J9YCkpXG4vLyAgICAgICAgICAgICA6XG4vLyAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbi8vICAgICB9XG4vL1xuLy8gICAgIHJldHVybihcbi8vICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4vLyAgICAgICAgICAgICA8bGFiZWw+UG9kYWogaW1pxJkgPGJyLz5cbi8vICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiB2YWx1ZT17dXNlckRhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWV9Lz5cbi8vICAgICAgICAgICAgIDwvbGFiZWw+XG4vLyAgICAgICAgICAgICA8YnIvPlxuLy8gICAgICAgICAgICAgPGxhYmVsPlBvZGFqIG5hendpc2tvIDxici8+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzdXJuYW1lXCIgdmFsdWU9e3VzZXJEYXRhLnN1cm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lfS8+XG4vLyAgICAgICAgICAgICA8L2xhYmVsPlxuLy8gICAgICAgICAgICAgPGJyLz5cbi8vICAgICAgICAgICAgIDxsYWJlbD5Qb2RhaiB3aWVrIDxici8+XG4vLyAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJhZ2VcIiB2YWx1ZT17dXNlckRhdGEuYWdlfSBvbkNoYW5nZT17aGFuZGxlTmFtZX0vPlxuLy8gICAgICAgICAgICAgPC9sYWJlbD5cbi8vICAgICAgICAgICAgIDxici8+XG4vLyAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjaXR5XCIgdmFsdWU9e3VzZXJEYXRhLmNpdHl9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lfT5cbi8vICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIldhcnN6YXdhXCJ9PldhcnN6YXdhPC9vcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJLcmFrw7N3XCJ9PktyYWvDs3c8L29wdGlvbj5cbi8vICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtcIsWBb2TFulwifT7FgcOzZMW6PC9vcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJQY2ltXCJ9PlBjaW08L29wdGlvbj5cbi8vICAgICAgICAgICAgIDwvc2VsZWN0PlxuLy8gICAgICAgICAgICAgPGhyLz5cbi8vICAgICAgICAgICAgIDxmaWVsZHNldCBvbkNoYW5nZT17aGFuZGxlTmFtZX0+XG4vLyAgICAgICAgICAgICAgICAgPGxlZ2VuZCBzdHlsZT17e1wiZm9udFNpemVcIjogXCIxcmVtXCJ9fT5Zb3VyIGdlbmRlcjwvbGVnZW5kPlxuLy8gICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cImdlbmRlclwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtcIm1hbGVcIn0gY2hlY2tlZC8+IE1hbGU8L2xhYmVsPjxici8+XG4vLyAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCBuYW1lPVwiZ2VuZGVyXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9e1wiZmVtYWxlXCJ9Lz4gRmVtYWxlPC9sYWJlbD48YnIvPlxuLy8gICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cImdlbmRlclwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPXtcIm5vbmVcIn0gLz4gSSBkb24ndCB3YW5uYSBzYXk8L2xhYmVsPlxuLy8gICAgICAgICAgICAgPC9maWVsZHNldD5cbi8vICAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pld5xZtsaWohPC9idXR0b24+XG4vLyAgICAgICAgIDwvZm9ybT5cbi8vICAgICApXG4vLyB9XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxucm9vdC5yZW5kZXIoPEhlYWRlci8+KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIzOTllZDRhMGNjYmQ2NWY0NzFiNVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiSGVhZGVyIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==