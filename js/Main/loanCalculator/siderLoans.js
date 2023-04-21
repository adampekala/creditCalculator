import React, { Component } from 'react';
import { FaBeer, FaArchive } from 'react-icons/fa';
import { MdPieChartOutline } from "react-icons/md"
import { HiMinusSm } from "react-icons/hi"
import SiderListItem from "../creditCalculator/siderListItem";
import DonatChart from "../CalculatorCommonComponents/donatChart";
import fnKredytZmiennaRata from "../../calculationFunctions/fnKredytZmiennaRata";
import fnKredytStalaRata from "../../calculationFunctions/fnKredytStalaRata";
import KredytStalaRata from "../../calculationFunctions/fnKredytStalaRata";
import KredytZmiennaRata from "../../calculationFunctions/fnKredytZmiennaRata";
import SiderLoansListItem from "./siderLoansListItem";
class SiderHistoryLoans extends Component {

    state = {
        userDataChart: this.props.userData.loans.length > 0 ? this.props.userData.loans[0]: "brak danych",
        isAnyData: this.props.userData.loans.length > 0 ? "true" : "false",
        userDataChartToDisplay: this.props.userData.loans.length > 0 ? this.props.userData.loans[0] : "ble"
    };

    // chartInterestsFn = (amount, rate, years, isFixedPayment) => {
    //     isFixedPayment === true ? KredytStalaRata.ileOdsetekWSplacie(amount, rate, years)
    //         :
    //     KredytZmiennaRata.ileOdsetekWSplacie(amount, rate, years)
    // }

    chartCapitalFn = () => {
        // if (isFixedPayment === true) {
        //     return KredytStalaRata.ileKapitaluWSplacie(amount, rate, years)
        // }
        // else {
        //     return KredytZmiennaRata.ileKapitaluWSplacie(amount, rate, years)
        return 2;
    }


    btnDeleteFn = (id) => {
        //TODO
        let actualDataBase;
        const mypromis = new Promise((response, reject) => {
            this.props.btnMinusFn(id);
            response("ok");
            reject("error")
        })

        mypromis.then((res) => {
            actualDataBase = {...this.props.userData};
            this.props.setCreditInfo(actualDataBase);
            console.log(res);
        }).catch((rej) => console.log(rej))



    }

    btnChangeChartFn = (data) => {
        this.setState({userDataChartToDisplay: data});
        this.setState({userDataChart: data});
        this.setState({isAnyData: "true"})
    }

    dateConversion = (d) => {
        let dateInput;
        dateInput = d.toString().slice(0,10);
        return dateInput;
    }

    rateConversion = (d) => {
        let rateInput = +d * 100;
        return `${rateInput}%`;
    }

    render() {
        const {type, userData, setUserData } = this.props;
        return (
            <div className={"sider"}>
                <h2 className={"siderHistory-title mainColor"}>Twoje obliczenia</h2>
                <p className={"siderHistory-calcName contrastColor"}>{type}</p>
                <ul className={"siderHistory-calcList"}>
                    {userData.loans.map((el, i) => <SiderLoansListItem key={i} data={el} index={i} setPaymentArrFn={this.props.creatingArrayToShow} creatingPaginationFn={this.props.creatingPagination} setDisplayShowCalc={this.props.setDisplayShowCalc} btnChangeChart={this.btnChangeChartFn} btnDelete={this.btnDeleteFn}/>)}
                </ul>
                <p className={"siderHistory-calcChart-title mainColor"}>
                    {this.state.isAnyData === "true" ?
                        this.state.userDataChartToDisplay.dateString :
                        "Brak danych"
                    } | {this.state.isAnyData === "true" ?
                    `${this.state.userDataChartToDisplay.rate}%` :
                    "---"}
                </p>
                <div className={"siderHistory-calcChart-chart"}>
                    <span className={"siderHistory-calcChart-credit"}>
                        Pożyczka
                        <br/>{this.state.userDataChartToDisplay === "ble" ? false : 100 - +this.state.userDataChartToDisplay.rate}%
                    </span>

                    <DonatChart capital={this.state.userDataChartToDisplay === "ble" ? 100 : 100 - +this.state.userDataChartToDisplay.rate} interests={this.state.userDataChartToDisplay === "ble" ? 0 : this.state.userDataChartToDisplay.rate}/>

                    <span className={"siderHistory-calcChart-interests"}>
                    Odsetki
                    <br/>
                        {this.state.userDataChartToDisplay === "ble" ? false : this.state.userDataChartToDisplay.rate}%
                    </span>
                </div>
                <div className={"siderHistory-calcChart-bottomLine"}></div>

            </div>
        )
    }
}

export default SiderHistoryLoans;