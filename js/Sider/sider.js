import React, { Component } from 'react';

class SiderHistory extends Component {

    render() {
        const {calcName} = this.props;
        return (
            <div className={"sider"}>
                <h2 className={"siderHistory-title mainColor"}>Twoje obliczenia</h2>
                <p className={"siderHistory-calcName contrastColor"}>{calcName}</p>
                <ul className={"siderHistory-calcList"}>
                    <li className={"siderHistory-calcList-item contrastColor"}><span></span><span>2023.04.01 | 14%</span><span><img src={"pictures/arrow_drop_down_circle_FILL0_wght400_GRAD0_opsz48.svg"} style={{width: "20px", height: "20px"}} /><button className={"thirdColor"}>--</button></span></li>
                    <li className={"siderHistory-calcList-item contrastColor"}><span></span><span>2023.04.01 | 14%</span><span><img src={"pictures/arrow_drop_down_circle_FILL0_wght400_GRAD0_opsz48.svg"} style={{width: "20px", height: "20px"}} /><button className={"thirdColor"}>--</button></span></li>
                    <li className={"siderHistory-calcList-item contrastColor"}><span></span><span>2023.04.01 | 14%</span><span><img src={"pictures/arrow_drop_down_circle_FILL0_wght400_GRAD0_opsz48.svg"} style={{width: "20px", height: "20px"}} /><button className={"thirdColor"}>--</button></span></li>
                </ul>
                <p className={"siderHistory-calcChart-title mainColor"}>2023.04.01 | 14%</p>
                <div className={"siderHistory-calcChart-chart"}><span className={"siderHistory-calcChart-credit"}>Kredyt<br/>65%</span><div className={"siderHistory-calcChart-chart2"}></div><span className={"siderHistory-calcChart-interests"}>Odsetki<br/>35%</span></div>
                <div className={"siderHistory-calcChart-bottomLine"}></div>

            </div>
        )
    }
}

export default SiderHistory;