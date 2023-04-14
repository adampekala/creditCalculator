import React from "react";
// import SiderHistory from "../Sider/sider";

const MainApplication = () => {
    return (
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
                <h1>Oblicz raty kredytu szkalala</h1>
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
    )
}

export default MainApplication;