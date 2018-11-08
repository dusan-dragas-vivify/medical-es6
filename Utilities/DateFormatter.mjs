export class DateFormatter {

    static getFormattedDate () {

        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth()+1;
        let year = date.getFullYear();

        let dateToReturn = `${day}.${month}.${year}.`;

        return dateToReturn;

    }

    static getFormattedTime () {

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        let time = `${hours}:${minutes}`;

        return time;
    }
}