import React from "react";
const Header = () => {
    return (
        <>
        <header className={"mainColor topBar"}>
            <div><span>Logo</span>Odsetkomat.com</div>
            <div><span>Ikon</span><span>Ikon2</span></div>
        </header>
            <div className="content">
                <div className="main">
                    <div className="mainNavigation mainColor"></div>
                    <div className="mainCalculator"></div>
                </div>
                <sider className={"sider"}></sider>
            </div>

        </>
    )
}

export default Header;