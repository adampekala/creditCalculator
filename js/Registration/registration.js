import React, {useState} from "react";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";
import {BsBank} from "react-icons/bs"
import {Link} from 'react-router-dom'

const Registration = (props) => {
    const API = "http://localhost:3005";
    const iconsStyle = {width: "50px", height: "50px"};
    // const [usersNumber, setUsersNumber] = useState(props.usersNumberLength);
    const [newLogin, setNewLogin] = useState("Wpisz wymyślony login");
    const [newPassword, setNewPassword] = useState("Wpisz hasło");
    const [newPasswordRepetition, setNewPasswordRepetition] = useState("Powtórz hasło");
    const [isError, setIsError] = useState(false);
    const [isPasswordRepeated, setIsPasswordRepeated] = useState(true);
    const [usersArrToCheck, setUserArrToCheck] = useState(props.usersLogins);
    const [afterRegistration, setAfterRegistration] = useState(false);

    const handleLoginFocus = (e) => {
        e.target.value === "Wpisz wymyślony login" && setNewLogin("");
        setIsError(false)
    }

    const handlePasswordFocus = (e) => {
        e.target.value === "Wpisz hasło" && setNewPassword("");
        setIsPasswordRepeated(true)
    }

    const handlePasswordRepFocus = (e) => {
        e.target.value === "Powtórz hasło" && setNewPasswordRepetition("");
    }

    const handleLoginBlur = (e) => {
        e.target.value === "" && setNewLogin("Wpisz wymyślony login");
    }

    const handlePasswordBlur = (e) => {
        e.target.value === "" && setNewPassword("Wpisz hasło");
    }

    const handlePasswordRepBlur = (e) => {
        e.target.value === "" && setNewPasswordRepetition("Powtórz hasło");
    }

    const handleLoginChange = (e) => {
        setNewLogin(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value)
    }

    const handlePasswordRepetitionChange = (e) => {
        setNewPasswordRepetition(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleRegistrationClick = (e) => {
        e.preventDefault();
        if (newPassword !== newPasswordRepetition) {
            setIsPasswordRepeated(false);
        }

        if (!usersArrToCheck.every((el) => el !== newLogin)) {
            setIsError(true);
        }

        if (usersArrToCheck.every((el) => el !== newLogin) && newPassword === newPasswordRepetition) {
            let registrationData = {
                "id": newLogin,
                "idNum": props.usersNumberLength + 1,
                "password": newPassword

            }

            let registrationDataBase = {
                id: props.usersNumberLength + 1,
                name: newLogin,
                credits: [],
                loans: [],
                deposits: [],
                bonds: []
            }
            console.log(registrationData);

            fetch(`${API}/users`, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(registrationData)
            })
                .then(resp => resp.json())
                .then((data) => data.log)
                .catch(reject => console.log(reject));

            fetch(`${API}/data`, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(registrationDataBase)
            })
                .then(resp => resp.json())
                .then((data) => data.log)
                .catch(reject => console.log(reject));

            setAfterRegistration(true);
        }

    }

    const handleImportUsersArr = () => {
        fetch(`${API}/users`)
            .then(resp => resp.json())
            .then(
                (data) => {
                    props.setUsersLoginArrFn(data.map(el => el.id));
                })
            .catch(reject => console.log(reject));

    }

    let registrationAppearence;

    switch (true) {
        case props.userLogIn: registrationAppearence = <div className="registrationHero contrastColor">
            <h1>Wybierz kalkulator</h1>
            <div className={"calculatorChoice"}>
                <Link to="/calculator"><div className={"CalculatorChoice-btn"}><BsBank/><span>Kredyt</span></div></Link>
                <Link to="/calculator/loan"><div className={"CalculatorChoice-btn"}><GiReceiveMoney/><span>Pożyczka</span></div></Link>
                <Link to="/calculator/deposit"><div className={"CalculatorChoice-btn"}><TbPigMoney/><span>Lokata</span></div></Link>
                <Link to="/calculator/bond"><div className={"CalculatorChoice-btn"}><FaMoneyBillAlt/><span>Obligacje</span></div></Link>
            </div>
        </div>;
        break;

        case props.usersLogins !== undefined: registrationAppearence = <div className="registrationHero contrastColor">
            <h1>Zarejestruj się</h1>
            <form onSubmit={handleSubmit}>
                <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={newLogin} onFocus={handleLoginFocus} onChange={handleLoginChange} onBlur={handleLoginBlur} /><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Login</span></label>

                <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={newPassword} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} onChange={handlePasswordChange}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Hasło</span></label>

                <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={newPasswordRepetition} onFocus={handlePasswordRepFocus} onBlur={handlePasswordRepBlur}  onChange={handlePasswordRepetitionChange}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Hasło</span></label>

                <p className={"errorInformation"}>{isError ? "Wymyśl inny Login!" : ""} {isPasswordRepeated ? "" : "Niezgodne hasła."}</p>

                <button className={"registrationBtnLog"} onClick={handleRegistrationClick}>Zarejestruj</button>
            </form>

        </div>;
        break;

        case props.usersLogins === undefined: registrationAppearence = <div className="registrationHero contrastColor">
            <h1 className={"registrationConfirmationHeader"}>Teraz możesz się zalogować</h1>

            <Link onClick={handleImportUsersArr} to={'/login'} className={"thirdColor registrationLogLink"}>Przejdź do strony logowania</Link>
        </div>;
        break;
    }

    return (
        <div className="registration">
            <div className="registrationLeftPhoto">
            </div>
            {registrationAppearence}
        </div>)
}

export default Registration;
