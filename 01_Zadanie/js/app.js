import React, {Component, useEffect, useState} from "react";
import { createRoot } from "react-dom/client";

const API = "http://localhost:3005";

const User = ({id, name, surname, age, city, gender}) => {
    return (
        <>
            <h1>{id}: {name} {surname} is a {gender}.</h1>
            <p>He lives in {city} and is {age} years old.</p>
        </>
        )

}
const Users = () => {
    const [users, setUsers ] = useState(null);

    useEffect(()=>{
        fetch(`${API}/users`)
            .then(respons => respons.json())
            .then(data => setUsers(data))
            .catch(error => console.log(`Błąd: ${error}`))
    }, [])

    return (
        users !== null ?
        <>
            <AddUser/>

            {users.map((el, i)=> <User key={i} id={el.id} name={el.name} surname={el.surname} age={el.age} city={el.city} gender={el.gender}/>)}
           
        </>
        :
        <p>fdfd</p>

    )
}

const AddUser = () => {
    const [userData, setUserData] = useState({name: "", surname: "", age: "", city: "Warszawa", gender: "male"});
    const handleName = (e) => {
        const {name, value} = e.target;
        console.log(e.target);
        setUserData(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    const handleSubmit = (e) => e.preventDefault();

    const handleClick = (e) => {

        userData.name.length > 5 ?

        fetch(`${API}/users`,
            {
                method: "POST",
                body: JSON.stringify(userData),
                headers: {"Content-type": "application/json"}
            })
            .then(respons => respons.json())
            .then(data => console.log(data))
            .catch(error => console.log(`Błąd: ${error}`))
            :
            e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Podaj imię <br/>
                <input name="name" value={userData.name} onChange={handleName}/>
            </label>
            <br/>
            <label>Podaj nazwisko <br/>
                <input name="surname" value={userData.surname} onChange={handleName}/>
            </label>
            <br/>
            <label>Podaj wiek <br/>
                <input name="age" value={userData.age} onChange={handleName}/>
            </label>
            <br/>
            <select name="city" value={userData.city} onChange={handleName}>
                <option value={"Warszawa"}>Warszawa</option>
                <option value={"Kraków"}>Kraków</option>
                <option value={"Łodź"}>Łódź</option>
                <option value={"Pcim"}>Pcim</option>
            </select>
            <hr/>
            <fieldset onChange={handleName}>
                <legend style={{"fontSize": "1rem"}}>Your gender</legend>
                <label><input name="gender" type="radio" value={"male"} checked/> Male</label><br/>
                <label><input name="gender" type="radio" value={"female"}/> Female</label><br/>
                <label><input name="gender" type="radio" value={"none"} /> I don't wanna say</label>
            </fieldset>
            <button type={"submit"} onClick={handleClick}>Wyślij!</button>
        </form>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<Users/>);
