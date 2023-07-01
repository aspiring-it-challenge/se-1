const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
	id: Number,
	train_name: String,
	from_station: String,
	departure: String,
	to_station: String,
	arrival: String,
});

module.exports = mongoose.model("Schedule", scheduleSchema);
