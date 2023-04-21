import React, {useState, useEffect} from "react";
import {MdPieChartOutline} from "react-icons/md";
import {HiMinusSm} from "react-icons/hi";
import { FiPieChart } from "react-icons/fi";
import {format} from "date-fns";

const SiderDepositsListItem = ({data, index, btnDelete, setPaymentArrFn, creatingPaginationFn , btnChangeChart, setDisplayShowCalc}) => {
    const {date, dateString , amount, rate, period} = data;

    const btnDeleteFn = (id) => (e) => {
        btnDelete(id);
    }

    const handleChangeChart = (data) => (e) => {
        btnChangeChart(data)
    }

    const dateConversion = (d) => {
        let dateInput;
        dateInput = d.toString().slice(4,15);
        return dateInput;
    }

    const rateConversion = (d) => {
        let rateInput = +d * 100;
        return `${rateInput}%`;
    }

    // const [paymentArr, setPaymentArr] = useState(undefined);
    // const [paymentArrPages, setPaymentArrPages] = useState(undefined);
    // const [whichPage, setWhichPage] = useState(1);



    const handleShowHistoryClick = ()=> {

        let historicalDeposit = {
            ...data
        };

        let arr = [];
        for (let i = 0; i < historicalDeposit.depositPeriod*12; i++ ) {
            arr.push({amount: Math.round(+amount) , interests: Math.round(+amount * ((+rate)/100)) , payment: Math.round(+amount + (+amount * ((+rate)/100))) })
        }
        setPaymentArrFn(arr);

        let pages = Math.ceil((historicalDeposit.depositPeriod * 12)/10);
        creatingPaginationFn(pages);

        setDisplayShowCalc(true);
    }

    return (
        <li className={"siderHistory-calcList-item contrastColor"}>
            <span></span>
            <span onClick={handleShowHistoryClick}>{dateString} | {rate}%</span>
            <span>
                <button
                    style={{width: "30px", height: "30px", borderStyle: "none", backgroundColor: "white" }}
                    onClick={handleChangeChart(data)}>
                     <FiPieChart style={{width: "30px", height: "30px", borderStyle: "none", backgroundColor: "white" }}/>
                </button>

                <button className={"thirdColor"} onClick={btnDeleteFn(index)}>
                    <HiMinusSm style={{width: "30px", height: "30px", color: "white"}}/>
                </button>
            </span>
        </li>

    )
}

export default SiderDepositsListItem;