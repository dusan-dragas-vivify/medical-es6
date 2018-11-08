import { Doktor } from "./Entities/Doktor";
import { Pacijent } from "./Entities/Pacijent";

let doktor = new Doktor('Milan', 'Milanovic', 'Uho, grlo, nos');
let pacijent = new Pacijent('Dragan', 'Draganic', '2109989123321', '1213434');

pacijent.izaberiDoktora(doktor);

doktor.zakaziPregledPacijentu(pacijent, 'merenje nivoa secera u krvi', '21.1.2019.', '14:00');
doktor.zakaziPregledPacijentu(pacijent, 'merenje krvnog pritiska', '22.1.2019.', '10:00');

pacijent.obaviPregled('21.1.2019.', '14:00', 'merenje nivoa secera u krvi');
pacijent.obaviPregled('21.1.2019.', '14:00', 'merenje krvnog pritiska');