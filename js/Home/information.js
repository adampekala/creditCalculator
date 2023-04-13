import React from "react";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";
import {BsBank} from "react-icons/bs"
import {Link} from 'react-router-dom'

const Information = () => {
    const iconsStyle = {width: "50px", height: "50px"};
    return (
        <div className="welcome">
            <div className="welcomeLeftPhoto">
            </div>
            <div className="welcomeHero contrastColor">
                <h1>Jak działa Odsetkomat?</h1>
                <p>Dzięki Odsetkomatowi obliczysz:</p>
                <ul className="welcomeHero-list">
                    <li>
                    <span>
                        <BsBank style={iconsStyle}/>
                    </span>
                        <span>oprocentowanie kredytu</span>
                    </li>
                    <li>
                    <span>
                        <TbPigMoney style={iconsStyle}/>
                    </span>
                        <span>wysokość pożyczki</span>
                    </li>
                    <li>
                    <span>
                        <GiReceiveMoney style={iconsStyle}/>
                    </span>
                        <span>odsetki od lokaty</span>
                    </li>
                    <li>
                    <span>
                        <FaMoneyBillAlt style={iconsStyle}/>
                    </span>
                        <span>zysk z obligacji</span>
                    </li>
                </ul>

                <Link to='/login' className={"thirdColor logLink"}>Skorzystaj z kalkulatora</Link>

            </div>
        </div>)
}

export default Information;
