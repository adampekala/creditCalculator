import React, {useState} from "react";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";
import {BsBank} from "react-icons/bs"
import {Link} from 'react-router-dom'

const Login = (props) => {
    const iconsStyle = {width: "50px", height: "50px"};
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.setUserLogIn(true);

    }

    let loginAppearence;
    props.userLogIn ? loginAppearence = <div className="loginHero contrastColor">
        <h1>Wybierz kalkulator</h1>
        <div className={"calculatorChoice"}>
        <Link to="/calculator"><div className={"CalculatorChoice-btn"}><BsBank/><span>Kredyt</span></div></Link>
        <Link to="/calculator/loan"><div className={"CalculatorChoice-btn"}><GiReceiveMoney/><span>Pożyczka</span></div></Link>
        <Link to="/calculator/deposit"><div className={"CalculatorChoice-btn"}><TbPigMoney/><span>Lokata</span></div></Link>
        <Link to="/calculator/bond"><div className={"CalculatorChoice-btn"}><FaMoneyBillAlt/><span>Obligacje</span></div></Link>
        </div>
    </div>
        :
        loginAppearence = <div className="loginHero contrastColor">
        <h1>Witaj</h1>
        <form onSubmit={handleSubmit}>
            <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Wpisz Login..."}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Login</span></label>

            <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Wpisz hasło..."}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Hasło</span></label>


            <Link to="/calculator"><button className={"loginBtnLog"} onClick={handleClick}>Zaloguj</button></Link>
        </form>
        <p><Link className={"loginRegistrationLink"} to="/registration">Nie masz konta? Zarejestruj się!</Link></p>

    </div>;
    return (
        <div className="login">
            <div className="loginLeftPhoto">
            </div>
            {loginAppearence}
        </div>)
}

export default Login;
