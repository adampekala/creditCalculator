import React, {useState} from 'react';
import SiderBondListItem from "./siderBondListItem";
import DonatChart from "../CalculatorCommonComponents/donatChart";
import fnKredytZmiennaRata from "../../calculationFunctions/fnKredytZmiennaRata";
import fnKredytStalaRata from "../../calculationFunctions/fnKredytStalaRata";
import KredytStalaRata from "../../calculationFunctions/fnKredytStalaRata";
import KredytZmiennaRata from "../../calculationFunctions/fnKredytZmiennaRata";


// type={"Obligacje"}
// userData={userData}
// setUserData={setUserData}
// setCreditInfo={setUserDataBase}
// creatingArrayToShow={setPaymentArr}
// creatingPagination={setPaymentArrPages}
// setDisplayShowCalc={setDisplayShowCalc}
// btnMinusFn={filter}

const SiderBondHistoryTest = ({type, userData, setUserData, setCreditInfo, creatingArrayToShow, creatingPagination, setDisplayShowCalc, btnMinusFn}) => {

    const [userDataChart, setUserDataChart] = useState(userData.credits.length > 0 ? userData.credits[0]: "brak danych");
    const [isAnyData, setIsAnyData] = useState(userData.credits.length > 0 ? "true" : "false");
    const [userDataChartToDisplay, setuserDataChartToDisplay] = useState (userData.credits.length > 0 ? userData.credits[0] : "ble");

    const btnChangeChartFn = (data) => {
        setuserDataChartToDisplay(data);
        setUserDataChart(data);
        setIsAnyData("true")
    }


    const chartInterestsFn = (amount, rate, years, isFixedPayment) => {
        isFixedPayment === true ? KredytStalaRata.ileOdsetekWSplacie(amount, rate, years)
            :
        KredytZmiennaRata.ileOdsetekWSplacie(amount, rate, years)
    }

    // chartCapitalFn = () => {
    //     // if (isFixedPayment === true) {
    //     //     return KredytStalaRata.ileKapitaluWSplacie(amount, rate, years)
    //     // }
    //     // else {
    //     //     return KredytZmiennaRata.ileKapitaluWSplacie(amount, rate, years)
    //     return 2;
    // }


    const btnDeleteFn = (id) => {
        let actualDataBase;
        const mypromis = new Promise((response, reject) => {
            btnMinusFn(id);
            response("ok");
            reject("error")
        })

        mypromis.then((res) => {
            actualDataBase = {...userData};
            setCreditInfo(actualDataBase);
            console.log(res);
        }).catch((rej) => console.log(rej))



    }


    const dateConversion = (d) => {
        let dateInput;
        dateInput = d.toString().slice(0,10);
        return dateInput;
    }

    const rateConversion = (d) => {
        let rateInput = +d * 100;
        return `${rateInput}%`;
    }

    return (
        <div className={"sider"}>
            <h2 className={"siderHistory-title mainColor"}>Twoje obliczenia</h2>
            <p className={"siderHistory-calcName contrastColor"}>{type}</p>
            <ul className={"siderHistory-calcList"}>
                {userData.credits.map((el, i) => <SiderBondListItem key={i} data={el} index={i} setPaymentArrFn={creatingArrayToShow} creatingPaginationFn={creatingPagination} setDisplayShowCalc={setDisplayShowCalc} btnChangeChart={btnChangeChartFn} btnDelete={btnDeleteFn}/>)}
            </ul>
            <p className={"siderHistory-calcChart-title mainColor"}>
                {isAnyData === "true" ?
                    userDataChartToDisplay.dateString :
                    "Brak danych"
                } | {isAnyData === "true" ?
                `${userDataChartToDisplay.rate}%` :
                "---"}
            </p>
            <div className={"siderHistory-calcChart-chart"}>
                    <span className={"siderHistory-calcChart-interests"}>
                    Odsetki

                        //TODO funkcje
                    <br/>
                        {KredytZmiennaRata.ileOdsetekWSplacie(+userDataChartToDisplay.amount, +userDataChartToDisplay.rate, +userDataChartToDisplay.creditPeriod)*100}%
                    </span>

                <DonatChart capital={userDataChartToDisplay === "ble" ? 100 : 100 - +userDataChartToDisplay.rate} interests={userDataChartToDisplay === "ble" ? 0 : userDataChartToDisplay.rate}/>

                <span className={"siderHistory-calcChart-credit"}>
                        Kredyt(tutaj)
                        <br/>
                    {KredytZmiennaRata.ileKapitaluWSplacie(+userDataChartToDisplay.amount, +userDataChartToDisplay.rate, +userDataChartToDisplay.creditPeriod)*100}%

                    {/*{userDataChartToDisplay === "ble" ? false : 100 - +userDataChartToDisplay.rate}%*/}
                    </span>


            </div>
            <div className={"siderHistory-calcChart-bottomLine"}></div>

        </div>
    )

}

export default SiderBondHistoryTest;