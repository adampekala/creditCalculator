
class KredytZmiennaRata {
    static stopaReferencyjna(stopaNominalna) {
        return Math.round((Math.pow(1 + (stopaNominalna / 12), 12) - 1) * 10000) / 10000;
    }
    static stałaRataKapitalowa(kwotaKredytu, ileLat) {
        return  Math.round((kwotaKredytu / (12 * ileLat)) * 100) / 100;
        }

    static odsetkiRazem(kwotaKredytu, stopaNominalna, ileLat) {
        return Math.round(
            ((kwotaKredytu * (stopaNominalna / 12) * ((12 * ileLat) + 1) / 2)) * 100
        ) / 100;
    }

    static ileKapitaluWSplacie(kwotaKredytu, stopaNominalna, ileLat) {
        return Math.round ((kwotaKredytu / (kwotaKredytu + KredytZmiennaRata.odsetkiRazem(kwotaKredytu, stopaNominalna, ileLat))) * 10000) / 10000
    }

    static ileOdsetekWSplacie(kwotaKredytu, stopaNominalna, ileLat) {
        return Math.round((KredytZmiennaRata.odsetkiRazem(kwotaKredytu, stopaNominalna, ileLat) / (kwotaKredytu + KredytZmiennaRata.odsetkiRazem(kwotaKredytu, stopaNominalna, ileLat))) * 10000) / 10000
    }
}


export default KredytZmiennaRata;