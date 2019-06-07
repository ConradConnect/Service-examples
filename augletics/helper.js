
function formatDate(d, lang) {
    const date = new Date(d);
    if (lang === 'de') {
        return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
    }
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}

function formatDuration(ms) {
    let seconds = Math.floor(ms / 1000);
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    const minutesFormated = minutes < 10 ? `0${minutes}` : minutes;
    const secondsFormated = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours}:${minutesFormated}:${secondsFormated}`;
}

function getDays(d) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const date = new Date(d);
    const today = new Date();
    return Math.floor(Math.abs((today.getTime() - date.getTime()) / (oneDay)));
}

function getHours(d) {
    const oneHour = 60 * 60 * 1000; // minutes*seconds*milliseconds
    const date = new Date(d);
    const today = new Date();
    return Math.floor(Math.abs((today.getTime() - date.getTime()) / (oneHour)));
}

module.exports  = {
    formatDate, formatDuration, getDays, getHours
}
