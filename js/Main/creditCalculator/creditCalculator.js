import React, {useState} from "react";
import Navigation from "../CalculatorCommonComponents/navigation";
import SiderHistory from "../CalculatorCommonComponents/sider";
import { format, compareAsc } from 'date-fns'

const CreditCalculator = ({userLogIn, userData, setUserData, filter}) => {
    const inputStyling = {display: "block", position: "relative", width: "400px"};
    const [displayShowCalc, setDisplayShowCalc] = useState(false);
    const API = "http://localhost:3005";
    const [amount, setAmount] = useState("Wpisz kwotę kredytu");
    const [rate, setRate] = useState("Wpisz wysokość odsetek");
    const [period, setPeriod] = useState("Wpisz okres kredytu w latach");
    const [creditType, setCreditType] = useState("stałaRata");
    const [isSent, setIsSent] = useState(false);

    //TODO
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

    const [paymentArr, setPaymentArr] = useState(undefined);
    const [paymentArrPages, setPaymentArrPages] = useState(undefined);
    const [whichPage, setWhichPage] = useState(1);

    const handleClick = (e) => {
        e.preventDefault();

        let newCredit = {
            date: new Date(),
            dateString: format(new Date(), 'dd-MMM-yyyy'),
            amount: amount,
            rate: rate,
            creditPeriod: period
        };

        let arr = [];
        for (let i = 0; i < newCredit.creditPeriod*12; i++ ) {
            arr.push({amount: +amount, interests: +amount * ((+rate)/100), payment: +amount + (+amount * ((+rate)/100)) })
        }
        setPaymentArr(arr);

        let pages = Math.ceil((newCredit.creditPeriod * 12)/10);
        setPaymentArrPages(pages);

        console.log(newCredit);
        let creditsArr = [...credits, newCredit];

        setUserData((prev) => ({...prev, credits: creditsArr}));
        setUserDataBase((prev) => ({...prev, credits: creditsArr}))

        setDisplayShowCalc(true);
    }

    const handleNextPage = () => {
        setWhichPage((prev)=> prev < paymentArrPages ? prev + 1 : paymentArrPages)
    }

    const handlePreviousPage = () => {
        setWhichPage((prev)=> prev > 1 ? prev - 1 : 1)
    }

    const handleBackToCalculations = () => {
        setDisplayShowCalc(false);
        setPaymentArr(undefined);
        setPaymentArrPages(undefined);
        setAmount("Wpisz kwotę kredytu");
        setRate("Wpisz wysokość odsetek");
        setPeriod("Wpisz okres kredytu w latach");
        setCreditType("stałaRata");
        setWhichPage(1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={"calculatorMainContainer"}>
            <div className="main">
                <Navigation/>
                {displayShowCalc ?
                    <div className="mainCalculator creditCalculatorCalculationsDisplay">
                        <h1 style={{margin: "1rem 0 0 0"}}>Twoje obliczenia</h1>
                        <div className={"creditCalculatorCalculationsDisplay-list"}>
                            <p style={{display: "flex", justifyContent: "space-between", gap: "20px", color: "#9E107F", borderBottom: "3px double #9E107F"}}><span>RATA</span><span>KAPITAŁ</span><span>ODSETKI</span><span>WPŁATA</span></p>
                            {paymentArr
                                .filter((el, i) => i > (whichPage - 1) * 10 && i <= whichPage * 10)
                                .map((el, i) => <p key={i} style={{borderBottom: "1px solid #9E107F", display: "flex", justifyContent: "space-between", color: "#9E107F"}}>
                                    <span>nr {(i + 1) + ((whichPage - 1)*10)}</span>
                                    <span>{el.amount}</span>
                                    <span>{el.interests}</span>
                                    <span>{el.payment}</span>
                                </p>)}

                        </div>

                        <div style={{display: "flex", alignItems: "center"}}>
                            <button type={"button"} className={"buttonPrev"} onClick={handlePreviousPage}></button>
                            <span style={{color: "#9E107F", fontSize: "0.8rem"}}>{whichPage} strona z {paymentArrPages}</span>
                            <button type={"button"} className={"buttonNext"} onClick={handleNextPage}></button>

                        </div>

                        <button type={"button"} className={"creditCalculator-btnBackToCalculations"} onClick={handleBackToCalculations}>Powrót do obliczeń</button>
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
            <SiderHistory type={"Kredyt/y"} userData={userData} setUserData={setUserData} setCreditInfo={setUserDataBase} creatingArrayToShow={setPaymentArr} creatingPagination={setPaymentArrPages} setDisplayShowCalc={setDisplayShowCalc} btnMinusFn={filter}/>
        </div>
    )
}

export default CreditCalculator;