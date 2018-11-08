export class Pregled {

    constructor (datum, vreme) {

        if (new.target === Pregled) {
            throw new TypeError("Ne moze se instancirati direktno klasa Pregled");
        }

        this._datum = datum;
        this._vreme = vreme;
    }

    static zakazi(datum, vreme, pacijent) {
        throw new Error('Morate implementirati ovu klasu u child klasi');
    }
    static obavi(datum, vreme, pregled, ime) {
        throw new Error('Morate implementirati ovu klasu u child klasi');
    }

    getDatum() { return this._datum };
    setDatum(datum) {this._datum = datum };
    getVreme() { return this._vreme };
    setVreme(vreme) { this._vreme = vreme };

}