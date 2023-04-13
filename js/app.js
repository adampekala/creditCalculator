import React, {Component, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, Link, NavLink, Outlet} from "react-router-dom";

import Layout from "./Layout/layout";
import Welcome from "./Home/welcome";
import Login from "./Login/login";
import MainApplication from "./Main/mainApplication";
import Information from "./Home/information";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <HashRouter>
        <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path='' element={<Welcome/>}/>
                    <Route path='info' element={<Information/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='calculator'>
                        <Route path='credit' element={<MainApplication/>}/>
                        <Route path='loan' element={<MainApplication/>}/>
                        <Route path='deposit' element={<MainApplication/>}/>
                        <Route path='bond' element={<MainApplication/>}/>
                    </Route>
                </Route>
        </Routes>
    </HashRouter>
);
