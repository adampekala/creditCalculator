import React, {useState} from "react";
import Navigation from "../CalculatorCommonComponents/navigation";
import { format, compareAsc } from 'date-fns'
import SiderHistoryDeposits from "./siderDeposit";

const DepositCalculator = ({userLogIn, userData, setUserData, filter}) => {
    const inputStyling = {display: "block", position: "relative", width: "400px"};
    const [displayShowCalc, setDisplayShowCalc] = useState(false);
    const API = "http://localhost:3005";
    const [amount, setAmount] = useState("Wpisz kwotę depozytu");
    const [rate, setRate] = useState("Wpisz wysokość odsetek");
    const [period, setPeriod] = useState("Wpisz okres depozytu w latach");
    const [isDepositSimple, setIsDepositSimple] = useState("true");
    const [isSent, setIsSent] = useState(false);

    //TODO
    const [userDataBase, setUserDataBase] = useState(userData);

    const {id, name, credits, loans, deposits, bonds} = userDataBase;

    const handleRadioChange = (e) => {
        setIsDepositSimple(e.target.value);
    };

    const handleAmountFocus = (e) => {
        e.target.value === "Wpisz kwotę depozytu" && setAmount("");
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleAmountBlur = (e) => {
        e.target.value === "" && setAmount("Wpisz kwotę depozytu");
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
        e.target.value === "Wpisz okres depozytu w latach" && setPeriod("");
    }

    const handlePeriodChange = (e) => {
        setPeriod(e.target.value)
    }

    const handlePeriodBlur = (e) => {
        e.target.value === "" && setPeriod("Wpisz okres depozytu w latach");
    }

    const [paymentArr, setPaymentArr] = useState(undefined);
    const [paymentArrPages, setPaymentArrPages] = useState(undefined);
    const [whichPage, setWhichPage] = useState(1);

    const handleCalculate = (e) => {
        e.preventDefault();

        let newDeposit = {
            date: new Date(),
            dateString: format(new Date(), 'dd-MMM-yyyy'),
            amount: amount,
            rate: rate,
            isDepositSimple: isDepositSimple,
            depositPeriod: period
        };

        let arr = [];
        //TODO tabela obliczeń
        if (isDepositSimple === "true") {
            for (let i = 0; i < newDeposit.depositPeriod*12; i++ ) {
                arr.push({amount: +amount, interests: +amount * ((+rate)/100), payment: +amount + (+amount * ((+rate)/100)) })
            }
        }
        else {
            for (let i = 0; i < newDeposit.depositPeriod*12; i++ ) {
                arr.push({amount: +amount, interests: +amount * ((+rate)/100), payment: +amount + (+amount * ((+rate)/100)) })
            }
        }


        setPaymentArr(arr);

        let pages = Math.ceil((newDeposit.depositPeriod * 12)/10);
        setPaymentArrPages(pages);

        console.log(newDeposit);
        let depositsArr = [...deposits, newDeposit];

        setUserData((prev) => ({...prev, deposits: depositsArr}));
        setUserDataBase((prev) => ({...prev, deposits: depositsArr}))

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
        setAmount("Wpisz kwotę depozytu");
        setRate("Wpisz wysokość odsetek");
        setPeriod("Wpisz okres depozytu w latach");
        setIsDepositSimple("true");
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
                        <h1>Oblicz oprocentowanie depozytu</h1>
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
                                <input type={"radio"} name="rataStała" value={"true"} onChange={handleRadioChange} checked={isDepositSimple === "true"}/><label>Odsetki proste</label>
                                <input type={"radio"} name="rataZmienna" value={"false"} onChange={handleRadioChange} checked={isDepositSimple === "false"}/><label>Odsetki składne</label>
                            </div>

                            <button type={"submit"} className={"btnOblicz"} onClick={handleCalculate}>Oblicz</button>
                        </form>
                    </div>
                }

            </div>

            <SiderHistoryDeposits type={"Depozyty"} userData={userData} setUserData={setUserData} setCreditInfo={setUserDataBase} creatingArrayToShow={setPaymentArr} creatingPagination={setPaymentArrPages} setDisplayShowCalc={setDisplayShowCalc} btnMinusFn={filter}/>

        </div>
    )
}

export default DepositCalculator;