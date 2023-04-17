import React, {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";

import Header from "./header";

const Layout = (props) => {

    return (
        <>
            <Header userLogIn={props.userLogIn} logOut={props.setUserLogIn} userData={props.userData}/>
            <Outlet/>
        </>
    )
}

export default Layout;