import React, {useState} from "react";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";
import {BsBank} from "react-icons/bs";
import {Link} from 'react-router-dom';

const UserData = (props) => {
    const [isLogged, setIsLogged] = useState(props.userLogIn);
    const [data, setData] = useState(props.userData);

    const handleLogOut = () => {
        props.setUserLogIn(false);
    }



    const iconsStyle = {width: "50px", height: "50px"};

    return (
        <div className="welcome">
            <div className="welcomeLeftPhoto">
            </div>
            <div className="welcomeHero contrastColor">
                <h1>Witaj {data.name}! Twoje obliczenia.</h1>
                <ul className="welcomeHero-list">
                    <li>
                    <span>
                        <TbPigMoney style={iconsStyle}/>
                    </span>
                        <span>{data.loans.length} pożyczka(i/ek)</span>
                    </li>
                    <li>
                    <span>
                        <BsBank style={iconsStyle}/>
                    </span>
                        <span>{data.credits.length} kredyt(ów/y)</span>
                    </li>
                    <li>
                    <span>
                        <GiReceiveMoney style={iconsStyle}/>
                    </span>
                        <span>{data.deposits.length} lokata(y)</span>
                    </li>
                    <li>
                    <span>
                        <FaMoneyBillAlt style={iconsStyle}/>
                    </span>
                        <span>{data.bonds.length} obligacja(e/i)</span>
                    </li>
                </ul>

                <Link to={'/login'} className={"thirdColor logLink"}>Skorzystaj z kalkulatora</Link>
                <Link to={'/login'} className={"thirdColor logLink"} onClick={handleLogOut} >Wyloguj się</Link>

            </div>
        </div>)
}

export default UserData;
