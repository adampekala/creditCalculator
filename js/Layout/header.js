import React, {useState} from "react";
import {MdLockOutline, MdQuestionMark} from "react-icons/md";
import {Link} from "react-router-dom";
import {BsPersonCircle, BsFillCalculatorFill, BsPower} from "react-icons/bs";


const Header = ({userLogIn, logOut, userData}) => {
    const iconsStyle = {width: "50px", height: "50px", color: "white"};

        const API = "http://localhost:3005"

        const handleLogOut = () => {
            console.log(userData);

            fetch(`${API}/data/${userData.id}`, {
                method: "PUT",
                body: JSON.stringify(userData),
                headers: {"Content-type": "application/json"}
            }).then(response => response.json()).then(data => {console.log(data); logOut(false)}).catch(reject => console.log(reject))

        }




    return (
        <header className={"mainColor topBar"}>
            <div className={"logoContainer"}>
                <span className={"logo-el1"}>
                    <span className={"logo-el2"}></span>
                </span><Link className={"mainLogoHomeLink"} to='/'>Odsetkomat.com</Link>
            </div>
            <div className={"iconsContainer"}>

                {userLogIn ?
                    <Link to='/login' className={"infoIconLink"}>
                        <BsFillCalculatorFill style={{width: "50px", height: "50px", color: "rgb(15, 170, 240)"}}/>
                    </Link>
                    :
                    null
                }

                <Link to='/info' className={"infoIconLink"}>
                    <MdQuestionMark style={{width: "50px", height: "50px", color: "white"}}/>
                </Link>
                <Link to={userLogIn ? '/userData' : '/login'} className={"logIconLink"}>
                    {userLogIn ? <BsPersonCircle style={iconsStyle}/> : <MdLockOutline style={iconsStyle}/>
                    }
                </Link>

                {userLogIn ?
                    <Link to='/' className={"infoIconLink"} onClick={handleLogOut}>
                        <BsPower style={{width: "50px", height: "50px", color: "rgb(15, 170, 240)"}}/>
                    </Link>
                    :
                    null
                }

            </div>
        </header>
    )
}

export default Header;