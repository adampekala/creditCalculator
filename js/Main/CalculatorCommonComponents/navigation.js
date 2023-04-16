import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="calculatorLeftNavigation mainColor">
            <ul className={"calculatorLeftNavigationList"}>
                <li><NavLink end to={'/calculator/loan'} className={({isActive})=> isActive ? "calculatorLeftNavigationList-active" : "calculatorLeftNavigationList-inactive"}><span className={"arrow"}></span>Pożyczka<span className={"dot"}></span></NavLink></li>
                <li><NavLink end to={'/calculator'} className={({isActive})=> isActive ? "calculatorLeftNavigationList-active" : "calculatorLeftNavigationList-inactive"} ><span className={"arrow"}></span>Kredyt<span className={"dot"}></span></NavLink></li>
                <li><NavLink end to={'/calculator/deposit'} className={({isActive})=> isActive ? "calculatorLeftNavigationList-active" : "calculatorLeftNavigationList-inactive"} ><span className={"arrow"}></span>Lokata<span className={"dot"}></span></NavLink></li>
                <li><NavLink end to={'/calculator/bond'} className={({isActive})=> isActive ? "calculatorLeftNavigationList-active" : "calculatorLeftNavigationList-inactive"} ><span className={"arrow"}></span>Obligacje<span className={"dot"}></span></NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation;
