import {Link} from "react-router-dom";
import React from "react";

const InvalidPage = () => {
    return (
        <div className="registrationHero contrastColor">
            <h1 className={"registrationConfirmationHeader"}>Coś poszło nie tak</h1>

            <Link to={'/'} className={"thirdColor registrationLogLink"}>Przejdź do strony domowej</Link>
        </div>
    )
}

export default InvalidPage;