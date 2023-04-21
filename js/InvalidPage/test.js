import React from "react";
import KredytStalaRata from "../calculationFunctions/fnKredytStalaRata";
import KredytZmiennaRata from "../calculationFunctions/fnKredytZmiennaRata";

const Test = () => {

    return (
        <div>
            <h1>TEST</h1>
            <p>Kwota kredytu: 20000,00 zł</p>
            <p>
                Odsetki: {KredytStalaRata.odsetkiRazem(20000, 0.12, 3)}
            </p>
            <p>
                Kwota płatności: {KredytStalaRata.stałaKwotaPłatności(20000, 0.12, 3)}
            </p>
            <p>
                Ile odsetek: {KredytStalaRata.ileOdsetekWSplacie(20000, 0.12, 3)*100}%
            </p>
            <p>Ile kapitału: {KredytStalaRata.ileKapitaluWSplacie(20000, 0.12, 3)*100}%</p>

            <h1>TEST</h1>
            <p>Kwota kredytu: 20000,00 zł</p>
            <p>
                Odsetki: {KredytZmiennaRata.odsetkiRazem(20000, 0.12, 3)}
            </p>
            <p>
                Rata kapitałowa: {KredytZmiennaRata.stałaRataKapitalowa(20000, 3)}
            </p>
            <p>
                Ile odsetek: {KredytZmiennaRata.ileOdsetekWSplacie(20000, 0.12, 3)*100}%
            </p>
            <p>Ile kapitału: {KredytZmiennaRata.ileKapitaluWSplacie(20000, 0.12, 3)*100}%</p>
        </div>
    )
}

export default Test;