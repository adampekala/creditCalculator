import React, {Component, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Link, NavLink, Outlet} from "react-router-dom";

import Layout from "./Layout/layout";
import Welcome from "./Home/welcome";
import Login from "./Login/login";
import MainApplication from "./Main/mainApplication";
import Information from "./Home/information";
import Registration from "./Registration/registration";
import UserData from "./userData/userData";
import CreditCalculator from "./Main/creditCalculator/creditCalculator";
import BondCalculator from "./Main/bondCalculator/bondCalculator";
import LoanCalculator from "./Main/loanCalculator/loanCalculator";
import DepositCalculator from "./Main/depositCalculator/depositCalculator";
import DonatChart from "./Main/CalculatorCommonComponents/donatChart";

const container = document.getElementById("app");
const root = createRoot(container);
const Application = () => {
    const [logged, setLogged] = useState(false);
    const [usersCalculations, setUsersCalculations] = useState(false);
    const [usersNumber, setUsersNumber] = useState(undefined);
    const {credits, bonds, deposits, loans} = usersCalculations;

    const creditsFilter = (id) => {
        let newCreditsArr = credits.filter((el, i) => {return i !== id})
        setUsersCalculations({...usersCalculations, credits: newCreditsArr})
    }

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout userLogIn={logged} setUserLogIn={setLogged} userData={usersCalculations}/>}>
                    <Route path='' element={<Welcome userLogIn={logged}/>}/>
                    <Route path='info' element={<Information userLogIn={logged}/>}/>
                    <Route path='login' element={<Login userLogIn={logged} setUserLogIn={setLogged} data={usersCalculations} changingData={setUsersCalculations} usersNumberFn={setUsersNumber} />}/>
                    <Route path='registration' element={<Registration userLogIn={logged} setUserLogIn={setLogged} usersNumberLength={usersNumber}/>}/>
                    <Route path='calculator'>
                        <Route path='' element={<CreditCalculator userLogIn={logged} userData={usersCalculations} setUserData={setUsersCalculations} filter={creditsFilter}/>}/>

                        <Route path='loan' element={<LoanCalculator userLogIn={logged} userData={usersCalculations} setUserData={setUsersCalculations} filter={creditsFilter}/>}/>

                        <Route path='deposit' element={<DepositCalculator userLogIn={logged} userData={usersCalculations} setUserData={setUsersCalculations} filter={creditsFilter}/>}/>

                        <Route path='bond' element={<BondCalculator userLogIn={logged} userData={usersCalculations} setUserData={setUsersCalculations} filter={creditsFilter}/>}/>
                    </Route>
                    <Route path='userData' element={<UserData  userLogIn={logged} setUserLogIn={setLogged} userData={usersCalculations}/>}/>
                    {/*<Route path='/test' element={<DonatChart amount={100} interests={0.50}/>}/>*/}
                </Route>
            </Routes>
        </HashRouter>
    )
}


root.render(
    <Application/>
);
