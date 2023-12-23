const eventTiming = (dateTime) => {
    console.log(dateTime, "<---")

    const eventDate = new Date(dateTime?.date);

    // Format date
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = eventDate.toLocaleDateString('en-US', options);

    // Format time
    const formattedTime = dateTime?.time.replace(/(\d{2}):(\d{2})/, (match, hour, minute) => {
        const hh = parseInt(hour, 10);
        const meridiem = hh < 12 ? 'AM' : 'PM';
        const formattedHour = hh % 12 || 12; // Convert to 12-hour format
        return `${formattedHour}:${minute}${meridiem}`;
    });

    // Current date and time
    const currentDate = new Date();
    const isUpcoming = eventDate > currentDate;

    // Determine the status (starts at or ended on)
    const status = isUpcoming ? 'Starts' : 'Ended';

    // Combine formatted date and time
    const result = `${status} ${formattedTime}, ${formattedDate}`;

    return result;
}

export default eventTiming;