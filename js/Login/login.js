import React from "react";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";
import {BsBank} from "react-icons/bs"
import {Link} from 'react-router-dom'

const Login = () => {
    const iconsStyle = {width: "50px", height: "50px"};
    return (
        <div className="welcome">
            <div className="welcomeLeftPhoto">
            </div>
            <div className="welcomeHero contrastColor">
                <h1>Witaj</h1>
                <form>
                    <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Wpisz kwotę kredytu"}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Login</span></label>

                    <label style={{display: "block", position: "relative", width: "400px"}}><input type={"password"} name={"amount"} value={"Wpisz kwotę kredytu"}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Hasło</span></label>



                    <button className={"btnOblicz"}>Zaloguj</button>
                </form>
                <Link to="/">Nie masz konta? Zarejestruj się!</Link>
            </div>
        </div>)
}

export default Login;
