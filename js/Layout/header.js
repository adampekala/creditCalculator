import React from "react";
import {MdLockOutline, MdQuestionMark} from "react-icons/md";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"mainColor topBar"}>
            <div className={"logoContainer"}>
                <span className={"logo-el1"}>
                    <span className={"logo-el2"}></span>
                </span><Link className={"mainLogoHomeLink"} to='/'>Odsetkomat.com</Link>
            </div>
            <div className={"iconsContainer"}>
                <Link to='/info' className={"infoIconLink"}>
                    <MdQuestionMark style={{width: "50px", height: "50px", color: "white"}}/>
                </Link>
                <Link to='/login' className={"logIconLink"}>
                    <MdLockOutline style={{width: "50px", height: "50px", color: "white"}}/>
                </Link>

            </div>
        </header>
    )
}

export default Header;