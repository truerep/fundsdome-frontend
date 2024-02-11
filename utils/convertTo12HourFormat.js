const convertTo12HourFormat = (time) => {
    var splitTime = time.split(':');
    var hours = parseInt(splitTime[0]);
    var minutes = splitTime[1];

    var meridiem = (hours < 12) ? "AM" : "PM";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
    }

    return hours + ":" + minutes + " " + meridiem;
}

export default convertTo12HourFormat