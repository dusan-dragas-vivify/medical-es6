export class Osoba {

    constructor (ime, prezime) {
        if (new.target === Osoba) {
            throw new TypeError("Ne moze se instancirati direktno klasa Osoba!");
        }
        this._ime = ime;
        this._prezime = prezime
    }

    // Getters and setters
    getIme () { return this._ime };
    setIme (ime) { this._ime = ime };
    getPrezime () { return this._prezime};
    setPrezime (prezime) { this._prezime = prezime};

}