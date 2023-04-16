import React, {useState} from "react";
import Navigation from "../CalculatorCommonComponents/navigation";
import SiderHistory from "../CalculatorCommonComponents/sider";

const CreditCalculator = ({userLogIn, userData, setUserData, filter}) => {
    const inputStyling = {display: "block", position: "relative", width: "400px"};
    const [displayShowCalc, setDisplayShowCalc] = useState(false);
    const API = "http://localhost:3005";
    const [amount, setAmount] = useState("Wpisz kwotę kredytu");
    const [rate, setRate] = useState("Wpisz wysokość odsetek");
    const [period, setPeriod] = useState("Wpisz okres kredytu w latach");
    const [creditType, setCreditType] = useState("stałaRata");
    const [isSent, setIsSent] = useState(false);
    const [userDataBase, setUserDataBase] = useState(userData);

    const {id, name, credits, loans, deposits, bonds} = userDataBase;

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


    const handleClick = (e) => {
        e.preventDefault();
        let newCredit = {
            date: new Date(),
            amount: amount,
            rate: rate,
            creditPeriod: period
        };
        console.log(newCredit);
        let creditsArr = [...credits, newCredit];

        setUserData((prev) => ({...prev, credits: creditsArr}));

        setDisplayShowCalc(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={"calculatorMainContainer"}>
            <div className="main">
                <Navigation/>
                {displayShowCalc ?
                    <div className="mainCalculator">
                        <h1>Twoje obliczenia</h1>
                        <p>Tabela</p>
                        <button type={"button"} className={"btnOblicz"} onClick={handleClick}>Powrót do obliczeń</button>
                    </div>
                    :
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

                            <button type={"submit"} className={"btnOblicz"} onClick={handleClick}>Oblicz</button>
                        </form>
                    </div>
                }

            </div>
            <SiderHistory type={"Kredyt/y"} userData={userData} setUserData={setUserData} btnMinusFn={filter}/>
        </div>
    )
}

export default CreditCalculator;