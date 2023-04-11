import React from "react";
import SiderHistory from "../Sider/sider";
import {MdLockOutline, MdQuestionMark} from "react-icons/md";
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
                <div className="main">
                    <div className="mainNavigation mainColor">
                        <div className={"mainNavigation-Arrow"}></div>
                        <ul className={"mainNavigationList"}>
                            <li>Pożyczka</li>
                            <li>Kredyt</li>
                            <li>Lokata</li>
                            <li>Obligacje</li>
                        </ul>
                    </div>
                    <div className="mainCalculator">
                        <h1>Oblicz raty kredytu</h1>
                        <form>
                        <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Wpisz kwotę kredytu"}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>PLN</span></label>

                        <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Wpisz kwotę kredytu"}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>%</span></label>

                        <label style={{display: "block", position: "relative", width: "400px"}}><input type={"text"} name={"amount"} value={"Wpisz kwotę kredytu"}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Ilość lat</span></label>

                        <div className={"radio"}>
                            <input type={"radio"} name="fav_language" value="HTML"/><label>Rata stała</label>
                            <input type={"radio"} name="fav_language" value="HTML"/><label>Rata zmienna</label>
                        </div>

                        <button className={"btnOblicz"}>Oblicz</button>
                        </form>
                    </div>
                </div>
                <SiderHistory calcName={"Kredyty"}/>
            </div>

        </>
    )
}

export default Header;