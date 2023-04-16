import React from "react";
import Navigation from "../CalculatorCommonComponents/navigation";
import SiderHistory from "../../Sider/sider";
// import SiderHistory from "../Sider/sider";

const DepositCalculator = () => {
    return (
        <div className={"calculatorMainContainer"}>
            <div className="main">
                <Navigation/>
                <div className="mainCalculator">
                    <h1>Oblicz odsetki z lokaty</h1>
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
            <SiderHistory/>
        </div>
    )
}

export default DepositCalculator;