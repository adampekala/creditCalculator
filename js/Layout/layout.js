import React from "react";
import SiderHistory from "../Sider/sider";
import {MdLockOutline, MdQuestionMark} from "react-icons/md";
import MainApplication from "../Main/mainApplication";
import Welcome from "../Home/welcome";
import {Outlet} from "react-router-dom";
const Header = () => {
    return (
        <>
        <header className={"mainColor topBar"}>
            <div className={"logoContainer"}><span className={"logo-el1"}><span className={"logo-el2"}></span></span>Odsetkomat.com</div>
            <div className={"iconsContainer"}>
                {/*<span className={"icon icon-question"}>*/}
                    <MdQuestionMark style={{width: "50px", height: "50px", color: "white"}}/>
                {/*</span>*/}
                {/*<span className={"icon icon-question"}>*/}
                    <MdLockOutline style={{width: "50px", height: "50px", color: "white"}}/>
                {/*</span>*/}
            </div>
        </header>

            <div className="content">
                <Outlet/>
                <SiderHistory calcName={"Kredyty"}/>
            </div>

        </>
    )
}

export default Header;