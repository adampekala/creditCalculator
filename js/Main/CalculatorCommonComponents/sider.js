import React, { Component } from 'react';
import { FaBeer, FaArchive } from 'react-icons/fa';
import { MdPieChartOutline } from "react-icons/md"
import { HiMinusSm } from "react-icons/hi"
import SiderListItem from "./siderListItem";

class SiderHistory extends Component {

    state = {
        userDataChart: this.props.userData.credits[0],
    };

    btnDeleteFn = (id) => {
        this.props.btnMinusFn(id);
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
                    {userData.credits.map((el, i) => <SiderListItem key={i} data={el} index={i} btnDelete={this.btnDeleteFn}/>)}
                </ul>
                <p className={"siderHistory-calcChart-title mainColor"}>{this.dateConversion(this.state.userDataChart.date)} | {this.rateConversion(this.state.userDataChart.rate)}</p>
                <div className={"siderHistory-calcChart-chart"}><span className={"siderHistory-calcChart-credit"}>Kredyt<br/>65%</span><div className={"siderHistory-calcChart-chart2"}></div><span className={"siderHistory-calcChart-interests"}>Odsetki<br/>35%</span></div>
                <div className={"siderHistory-calcChart-bottomLine"}></div>

            </div>
        )
    }
}

export default SiderHistory;