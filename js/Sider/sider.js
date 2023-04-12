import React, { Component } from 'react';
import { FaBeer, FaArchive } from 'react-icons/fa';
import { MdPieChartOutline } from "react-icons/md"
import { HiMinusSm } from "react-icons/hi"

class SiderHistory extends Component {

    render() {
        const {calcName} = this.props;
        return (
            <div className={"sider"}>
                <h2 className={"siderHistory-title mainColor"}>Twoje obliczenia</h2>
                <p className={"siderHistory-calcName contrastColor"}>{calcName}</p>
                <ul className={"siderHistory-calcList"}>
                    <li className={"siderHistory-calcList-item contrastColor"}><span></span><span>2023.04.01 | 14%</span><span><MdPieChartOutline style={{width: "30px", height: "30px", transform: "rotate(30deg)"}}/><button className={"thirdColor"}><HiMinusSm style={{width: "30px", height: "30px"}}/></button></span></li>
                    <li className={"siderHistory-calcList-item contrastColor"}><span></span><span>2023.04.01 | 14%</span><span><MdPieChartOutline style={{width: "30px", height: "30px", transform: "rotate(30deg)"}}/><button className={"thirdColor"}><HiMinusSm style={{width: "30px", height: "30px"}}/></button></span></li>
                    <li className={"siderHistory-calcList-item contrastColor"}><span></span><span>2023.04.01 | 14%</span><span><MdPieChartOutline style={{width: "30px", height: "30px", transform: "rotate(30deg)"}}/><button className={"thirdColor"}><HiMinusSm style={{width: "30px", height: "30px"}}/></button></span></li>
                </ul>
                <p className={"siderHistory-calcChart-title mainColor"}>2023.04.01 | 14%</p>
                <div className={"siderHistory-calcChart-chart"}><span className={"siderHistory-calcChart-credit"}>Kredyt<br/>65%</span><div className={"siderHistory-calcChart-chart2"}></div><span className={"siderHistory-calcChart-interests"}>Odsetki<br/>35%</span></div>
                <div className={"siderHistory-calcChart-bottomLine"}></div>

            </div>
        )
    }
}

export default SiderHistory;