import React, {useState} from "react";
import {FaMoneyBillAlt} from "react-icons/fa";
import {GiReceiveMoney} from "react-icons/gi";
import {TbPigMoney} from "react-icons/tb";
import {BsBank} from "react-icons/bs";
import {Link} from 'react-router-dom';


const UserData = ({userLogIn, userData, setUserLogIn}) => {
    let [isLogged, setIsLogged] = useState(userLogIn);
    let {id, name, credits, loans, deposits, bonds} = userData;
    const API = "http://localhost:3005"


    const handleLogOut = () => {
        console.log(userData);

        fetch(`${API}/data/${id}`, {
            method: "PUT",
            body: JSON.stringify(userData),
            headers: {"Content-type": "application/json"}
        }).then(response => response.json()).then(data => {console.log(data); setUserLogIn(false)}).catch(reject => console.log(reject))


    }



    const iconsStyle = {width: "50px", height: "50px"};

    return (
        <div className="welcome">
            <div className="welcomeLeftPhoto">
            </div>
            <div className="welcomeHero contrastColor">
                <h1>Witaj {name}! Twoje obliczenia.</h1>
                <ul className="welcomeHero-list">
                    <li>
                    <span>
                        <TbPigMoney style={iconsStyle}/>
                    </span>
                        <span>{loans.length} pożyczka(i/ek)</span>
                    </li>
                    <li>
                    <span>
                        <BsBank style={iconsStyle}/>
                    </span>
                        <span>{credits.length} kredyt(ów/y)</span>
                    </li>
                    <li>
                    <span>
                        <GiReceiveMoney style={iconsStyle}/>
                    </span>
                        <span>{deposits.length} lokata(y)</span>
                    </li>
                    <li>
                    <span>
                        <FaMoneyBillAlt style={iconsStyle}/>
                    </span>
                        <span>{bonds.length} obligacja(e/i)</span>
                    </li>
                </ul>

                <Link to={'/login'} className={"thirdColor logLink"}>Skorzystaj z kalkulatora</Link>
                <Link to={'/login'} className={"thirdColor logLink"} onClick={handleLogOut} >Wyloguj się</Link>

            </div>
        </div>)
}

export default UserData;
