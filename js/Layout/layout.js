import React, {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";

import Header from "./header";

const Layout = () => {
    const [logIn, setLogIn] = useState(false);
    return (
        <>
            <Header userLogIn={logIn}/>
            <Outlet/>
        </>
    )
}

export default Layout;