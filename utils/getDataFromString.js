const getDateFromString = (dateString) => {
    var date = new Date(dateString);

    var day = date.getDate();
    var monthIndex = date.getMonth();

    var months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    var monthName = months[monthIndex];

    return day + " " + monthName;
}

export default getDateFromString