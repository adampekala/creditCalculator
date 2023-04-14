import React, {useState} from "react";
import {MdLockOutline, MdQuestionMark} from "react-icons/md";
import {Link} from "react-router-dom";
import {BsBank} from "react-icons/bs";

const Header = (props) => {
    const iconsStyle = {width: "50px", height: "50px", color: "white"};

    // const [loggedIn, setLoggedIn] = useState(props.userLogIn);
    // const [loggedIn, setLoggedIn] = useState(true);


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
                <Link to={props.userLogIn ? '/userData' : '/login'} className={"logIconLink"}>
                    {props.userLogIn ? <BsBank style={iconsStyle}/> : <MdLockOutline style={iconsStyle}/>
                    }
                </Link>

            </div>
        </header>
    )
}

export default Header;