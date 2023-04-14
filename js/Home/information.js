import React from "react";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";
import {BsBank} from "react-icons/bs"
import {Link} from 'react-router-dom'

const Information = () => {
    const iconsStyle = {width: "40px", height: "40px"};
    return (
        <div className="info">
            <div className="infoLeftPhoto">
            </div>
            <div className="infoHero contrastColor">
                <h1>Jak działa Odsetkomat?</h1>
                <p>
                    <span><BsBank style={iconsStyle}/></span>
                    <span>Zarejestruj się. Po utworzeniu konta zaloguj się.</span>
                </p>
                <p>
                    <span><TbPigMoney style={iconsStyle}/></span>
                    <span>Wybierz rodzaj kalkulatora, który odpowiada Twoim potrzebom.</span>

                </p>
                <p>
                    <span><GiReceiveMoney style={iconsStyle}/></span>
                    <span>Wypełnij pola zgodnie z opisem. Wybierz odpowiednie opcje.</span>
                </p>
                <p>
                    <span><FaMoneyBillAlt style={iconsStyle}/></span>
                    <span>Wciśnij guzik. Teraz możesz zapoznać się z wynikiem</span>

                </p>

                <Link to='/login' className={"thirdColor logLink"}>Skorzystaj z kalkulatora</Link>

            </div>
        </div>)
}

export default Information;
