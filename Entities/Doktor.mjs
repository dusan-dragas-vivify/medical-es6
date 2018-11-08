import { KrvniPritisak } from "./KrvniPritisak";
import { NivoSecera } from "./NivoSecera";
import { NivoHolesterola } from "./NivoHolesterola";
import { Osoba } from "./Osoba";
import { Logger } from "../Utilities/Logger";
import { DateFormatter } from "../Utilities/DateFormatter";

export class Doktor extends Osoba {

    constructor (ime, prezime, specijalnost, pacijenti = []) {
        super(ime, prezime);
        this._specijalnost = specijalnost;
        this._pacijenti = pacijenti;

        let datum = DateFormatter.getFormattedDate();
        let vreme = DateFormatter.getFormattedTime();
        Logger.log(datum, vreme, `Kreiran doktor ${ime}`);
    }

    // Getters and setters
    getSpecijalnost() { return this._specijalnost };
    setSpecijalnost(specijalnost) { this._specijalnost = specijalnost };
    getPacijenti() { return this._pacijenti };

    dodajPacijenta(pacijent) {
        this._pacijenti.push(pacijent);
    }

    zakaziPregledPacijentu(pacijent, pregled, datum, vreme) {
        switch (pregled) {
            case 'merenje nivoa secera u krvi':
                NivoSecera.zakazi(datum, vreme, pacijent);
                break;
            case 'merenje krvnog pritiska':
                KrvniPritisak.zakazi(datum, vreme, pacijent);
                break;
            case 'merenje nivoa holesterola u krvi':
                NivoHolesterola.zakazi(datum, vreme, pacijent);
                break;
            default:
                throw new Error('Nepostojeci pregled');

        }
    }

}