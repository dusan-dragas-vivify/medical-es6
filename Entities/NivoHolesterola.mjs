import { Logger } from "../Utilities/Logger";
import { Pregled } from "./Pregled";

export class NivoHolesterola extends Pregled {

    constructor(datum, vreme, vrednost = null, vremePoslednjegObroka = null) {
        super(datum, vreme);
        this._vrednost = vrednost;
        this._vremePoslednjegObroka = vremePoslednjegObroka;
    }

    // Getters and setters
    getVrednost() { return this._vrednost };
    setVrednost(vrednost) { this._vrednost = vrednost };
    getVremePoslednjegObroka() { return this._vremePoslednjegObroka };
    setVremePoslednjegObroka(vremePoslednjegObroka) { this._vremePoslednjegObroka = vremePoslednjegObroka };

    static zakazi(datum, vreme, pacijent) {
        Logger.log(datum, vreme, `Zakazan pregled merenja holesterola u krvi pacijentu ${pacijent.getIme()}`);
    }

    static obavi(datum, vreme, pregled, ime) {
        Logger.log(datum, vreme, `Pacijent ${ime} je obavio pregled ${pregled}`);
    }

}