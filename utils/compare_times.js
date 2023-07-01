const isTime1LaterThanTime2 = (time1, time2) => {
	// Convert time strings to Date objects
	const date1 = new Date(`2000-01-01T${time1}:00`);
	const date2 = new Date(`2000-01-01T${time2}:00`);

	// Compare the time values
	if (date1 >= date2) {
		return true; // time1 is later than time2
	} else {
		return false; // time1 is earlier than time2
	}
};

module.exports = isTime1LaterThanTime2;
