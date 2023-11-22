//https://stackoverflow.com/questions/4611754/javascript-convert-seconds-to-a-date-object
export default function secondsToDate(secs) {
    var t = new Date(); // Epoch
    t.setTime(secs * 1000)
    return t;
}