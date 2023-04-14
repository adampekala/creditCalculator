import React, {useState} from "react";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";
import {BsBank} from "react-icons/bs"
import {Link} from 'react-router-dom'

const Registration = (props) => {
    const iconsStyle = {width: "50px", height: "50px"};
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setUserLogIn(true);

    }

    let registrationAppearence;
    props.userLogIn ? registrationAppearence = <div className="registrationHero contrastColor">
            <h1>Wybierz kalkulator</h1>
            <div className={"calculatorChoice"}>
                <Link to="/calculator"><div className={"CalculatorChoice-btn"}><BsBank/><span>Kredyt</span></div></Link>
                <Link to="/calculator/loan"><div className={"CalculatorChoice-btn"}><GiReceiveMoney/><span>Pożyczka</span></div></Link>
                <Link to="/calculator/deposit"><div className={"CalculatorChoice-btn"}><TbPigMoney/><span>Lokata</span></div></Link>
                <Link to="/calculator/bond"><div className={"CalculatorChoice-btn"}><FaMoneyBillAlt/><span>Obligacje</span></div></Link>
            </div>
        </div>
        :
        registrationAppearence = <div className="registrationHero contrastColor">
            <h1>Zarejestruj się</h1>
            <form onSubmit={handleSubmit}>
                <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Wpisz wymyślony login"}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Login</span></label>

                <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Wpisz hasło"}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Hasło</span></label>
                <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Powtórz hasło"}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Hasło</span></label>

                <Link to="/calculator"><button className={"registrationBtnLog"} onClick={handleClick}>Zaloguj</button></Link>
            </form>

        </div>;
    return (
        <div className="registration">
            <div className="registrationLeftPhoto">
            </div>
            {registrationAppearence}
        </div>)
}

export default Registration;
