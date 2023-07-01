const express = require("express");
const app = express();

const data = require("./utils/read_json");
const isTime1LaterThanTime2 = require("./utils/compare_times");

app.get("/schedule", async (req, res) => {
	const from = req.query.from;
	const to = req.query.to;
	const range1 = req.query.range1;
	const range2 = req.query.range2;
	const result = data.filter((schedule) => schedule.from_station === from && schedule.to_station === to && isTime1LaterThanTime2(schedule.departure, range1) && isTime1LaterThanTime2(range2, schedule.arrival));
	res.json(result);
});

app.get("/:name", async (req, res) => {
	const trainName = req.params.name;
	const listOfSchedule = data.filter((schedule) => schedule.train_name === trainName);
	res.json(listOfSchedule);
});

app.get("/", async (req, res) => {
	res.json(data);
});

app.listen(3000, () => {
	console.log("listening to port 3000");
});
