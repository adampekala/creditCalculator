
class KredytStalaRata {
    static stopaReferencyjna(stopaNominalna) {
        return Math.round((Math.pow(1 + (stopaNominalna / 12), 12) - 1) * 10000) / 10000;
    }
    static stałaKwotaPłatności(kwotaKredytu, stopaNominalna, ileLat) {
        return Math.round ((kwotaKredytu * Math.pow((1 + KredytStalaRata.stopaReferencyjna(stopaNominalna)), ileLat * 12) * KredytStalaRata.stopaReferencyjna(stopaNominalna) / (Math.pow((1 + KredytStalaRata.stopaReferencyjna(stopaNominalna)), ileLat * 12) - 1)) * 100) / 100
    }

    static odsetkiRazem(kwotaKredytu, stopaNominalna, ileLat) {
        return Math.round((kwotaKredytu * (((ileLat * 12) * Math.pow((1 + KredytStalaRata.stopaReferencyjna(stopaNominalna)), ileLat * 12) * KredytStalaRata.stopaReferencyjna(stopaNominalna) / (Math.pow((1 + KredytStalaRata.stopaReferencyjna(stopaNominalna)), ileLat * 12) - 1) ) - 1)) * 100) / 100;
    }

    static ileKapitaluWSplacie(kwotaKredytu, stopaNominalna, ileLat) {
        return Math.round ((kwotaKredytu / (kwotaKredytu + KredytStalaRata.odsetkiRazem(kwotaKredytu, stopaNominalna, ileLat))) * 10000) / 10000
    }

    static ileOdsetekWSplacie(kwotaKredytu, stopaNominalna, ileLat) {
        return Math.round((KredytStalaRata.odsetkiRazem(kwotaKredytu, stopaNominalna, ileLat) / (kwotaKredytu + KredytStalaRata.odsetkiRazem(kwotaKredytu, stopaNominalna, ileLat))) * 10000) / 10000
    }
}


export default KredytStalaRata;