import { Logger } from "../Utilities/Logger";
import { NivoSecera } from "./NivoSecera";
import { KrvniPritisak } from "./KrvniPritisak";
import { NivoHolesterola } from "./NivoHolesterola";
import { Osoba } from "./Osoba";
import { DateFormatter } from "../Utilities/DateFormatter";

export class Pacijent extends Osoba {

    constructor (ime, prezime, jmbg, brojKartona) {
        super(ime, prezime);
        this._jmbg = jmbg;
        this._brojKartona = brojKartona;

        let datum = DateFormatter.getFormattedDate();
        let vreme = DateFormatter.getFormattedTime();
        Logger.log(datum, vreme, `Kreiran pacijent ${ime}`);

    }

    // Getters and setters
    getJmbg() { return this._jmbg };
    setJmbg(jmbg) { this._jmbg = jmbg };
    getBrojKartona() { return this._brojKartona };
    setBrojKartona(brojKartona) { this._brojKartona = brojKartona };

    izaberiDoktora(doktor) {
        this._doktor = doktor;
        doktor.dodajPacijenta(this);
    }

    obaviPregled(datum, vreme, pregled) {
        switch (pregled) {
            case 'merenje nivoa secera u krvi':
                NivoSecera.obavi(datum, vreme, pregled, this.getIme());
                break;
            case 'merenje krvnog pritiska':
                KrvniPritisak.obavi(datum, vreme, pregled, this.getIme());
                break;
            case 'merenje nivoa holesterola u krvi':
                NivoHolesterola.obavi(datum, vreme, pregled, this.getIme());
                break;
            default:
                throw new Error('Nepostojeci pregled');

        }
    }

}