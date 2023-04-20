import {Link} from "react-router-dom";
import React from "react";

const PageDontExists = () => {
    return (
        <div className="registrationHero contrastColor">
            <h1 className={"registrationConfirmationHeader"}>UPS! Strona nie istnieje</h1>

            <Link to={'/'} className={"thirdColor registrationLogLink"}>Przejdź do strony domowej</Link>
        </div>
    )
}

export default PageDontExists;