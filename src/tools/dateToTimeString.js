export default function dateToTimeString(date) {


    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    //var ampm = hour >= 12 ? 'PM' : 'AM';
    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return `${hour}:${min}`

}