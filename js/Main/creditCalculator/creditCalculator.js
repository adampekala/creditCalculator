import React, {useState} from "react";
import Navigation from "../CalculatorCommonComponents/navigation";
import SiderHistory from "../../Sider/sider";

const CreditCalculator = () => {
    const inputStyling = {display: "block", position: "relative", width: "400px"};
    const API = "http://localhost:3005";
    const [amount, setAmount] = useState("Wpisz kwotę kredytu");
    const [rate, setRate] = useState("Wpisz wysokość odsetek");
    const [period, setPeriod] = useState("Wpisz okres kredytu w latach");
    const [creditType, setCreditType] = useState("stałaRata");
    const [isSent, setIsSent] = useState(false);

    const handleRadioChange = (e) => {
        setCreditType(e.target.value);
    };

    const handleAmountFocus = (e) => {
        e.target.value === "Wpisz kwotę kredytu" && setAmount("");
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleAmountBlur = (e) => {
        e.target.value === "" && setAmount("Wpisz kwotę kredytu");
    }

    const handleRateFocus = (e) => {
        e.target.value === "Wpisz wysokość odsetek" && setRate("");
    }

    const handleRateChange = (e) => {
        setRate(e.target.value)
    }

    const handleRateBlur = (e) => {
        e.target.value === "" && setRate("Wpisz wysokość odsetek");
    }

    const handlePeriodFocus = (e) => {
        e.target.value === "Wpisz okres kredytu w latach" && setPeriod("");
    }

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value)
    }

    const handlePeriodBlur = (e) => {
        e.target.value === "" && setPeriod("Wpisz okres kredytu w latach");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClick = (e) => {
        let data = {
            creditAmount: amount,
            creditRate: rate,
            creditPeriod: period
        };
        e.preventDefault();
        fetch(`${API}/data`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json"}
        }).then(response => response.json()).then(data => console.log(data)).catch(reject => console.log(reject))

    }

    return (
        <div className={"calculatorMainContainer"}>
            <div className="main">
                <Navigation/>
                <div className="mainCalculator">
                    <h1>Oblicz raty kredytu</h1>
                    <form onSubmit={handleSubmit}>
                        <label style={inputStyling}>
                            <input type={"text"} name={"amount"} value={amount} onFocus={handleAmountFocus} onChange={handleAmountChange} onBlur={handleAmountBlur}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>PLN</span>
                        </label>

                        <label style={inputStyling}>
                            <input type={"text"} name={"rate"} value={rate} onFocus={handleRateFocus} onChange={handleRateChange} onBlur={handleRateBlur}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>%</span>
                        </label>

                        <label style={inputStyling}>
                            <input type={"text"} name={"period"} value={period} onFocus={handlePeriodFocus} onChange={handlePeriodChange} onBlur={handlePeriodBlur}/><span className={"inputAmount-caurrency"} style={{display: "block", position: "absolute"}}>Okres</span>
                        </label>

                        <div className={"radio"}>
                            <input type={"radio"} name="stałaRata" value={"stałaRata"} onChange={handleRadioChange} checked={creditType === "stałaRata"}/><label>Rata stała</label>
                            <input type={"radio"} name="zmiennaRata" value={"zmiennaRata"} onChange={handleRadioChange} checked={creditType === "zmiennaRata"}/><label>Rata zmienna</label>
                        </div>

                        <button className={"btnOblicz"} onClick={handleClick}>Oblicz</button>
                    </form>
                </div>
            </div>
            <SiderHistory/>
        </div>
    )
}

export default CreditCalculator;