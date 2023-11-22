export default function dateToDayString(dateObj) {

    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    return `${month}/${day}/${year}`

}


