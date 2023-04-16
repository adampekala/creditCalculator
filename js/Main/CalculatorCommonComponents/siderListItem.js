import React, {useState, useEffect} from "react";
import {MdPieChartOutline} from "react-icons/md";
import {HiMinusSm} from "react-icons/hi";

const SiderListItem = ({data, index, btnDelete}) => {
    const {date, amount, rate, period} = data;

    const btnDeleteFn = (id) => (e) => {
        btnDelete(id);
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

    return (
        <li className={"siderHistory-calcList-item contrastColor"}><span></span><span>{dateConversion(date)} | {rateConversion(rate)}</span><span><MdPieChartOutline style={{width: "30px", height: "30px", transform: "rotate(30deg)"}}/><button className={"thirdColor"} onClick={btnDeleteFn(index)}><HiMinusSm style={{width: "30px", height: "30px"}}/></button></span></li>

    )
}

export default SiderListItem;