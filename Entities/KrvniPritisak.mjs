import { Logger } from "../Utilities/Logger";
import { Pregled } from "./Pregled";

export class KrvniPritisak extends Pregled {

    constructor(datum, vreme, gornjaVrednost = null, donjaVrednost = null, puls = null) {
        super(datum, vreme);
        this._gornjaVrednost = gornjaVrednost;
        this._donjaVrednost = donjaVrednost;
        this._puls = puls;
    }

    // Getters and setters
    getGornjaVrednost() { return this._gornjaVrednost };
    setGornjaVrednost(gornjaVrednost) { this._gornjaVrednost = gornjaVrednost }
    getDonjaVrednost() { return this._donjaVrednost };
    setDonjaVrednost(donjaVrednost) { this._donjaVrednost = donjaVrednost};
    getPuls() { return this._puls };
    setPuls(puls) { this._puls = puls };

    static zakazi(datum, vreme, pacijent) {
        Logger.log(datum, vreme, `Zakazan pregled merenja krvnog pritiska pacijentu ${pacijent.getIme()}`);
    }

    static obavi(datum, vreme, pregled, ime) {
        this._gornjaVrednost = Math.floor(Math.random() * 200) + 100;
        this._donjaVrednost = Math.floor(Math.random() * 150) + 60;
        Logger.log(datum, vreme, `Pacijent ${ime} je obavio pregled ${pregled} sa vrednostima ${this._donjaVrednost} i ${this._gornjaVrednost}`);
    }


}