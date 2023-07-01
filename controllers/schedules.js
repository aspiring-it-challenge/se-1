const scheduleRouter = require("express").Router();
const Schedule = require("../models/schedule");
const isTime1LaterThanTime2 = require("../utils/compare_times");

scheduleRouter.get("/schedule", async (req, res) => {
	const from = req.query.from;
	const to = req.query.to;
	const range1 = req.query.range1;
	const range2 = req.query.range2;

	const data = await Schedule.find({});
	const result = data.filter((schedule) => schedule.from_station === from && schedule.to_station === to && isTime1LaterThanTime2(schedule.departure, range1) && isTime1LaterThanTime2(range2, schedule.arrival));
	res.json(result);
});

scheduleRouter.patch("/:name", async (req, res) => {
	const trainName = req.params.name;
	const departure = req.body.departure;
	const arrival = req.body.arrival;
	const schedule = await Schedule.findOneAndUpdate({ train_name: trainName }, { departure: departure, arrival: arrival }, { new: true });
	res.json(schedule);
});

scheduleRouter.get("/:name", async (req, res) => {
	const trainName = req.params.name;

	const data = await Schedule.find({});
	const listOfSchedule = data.filter((schedule) => schedule.train_name === trainName);
	res.json(listOfSchedule);
});

scheduleRouter.get("/", async (req, res) => {
	const schedules = await Schedule.find({});
	res.json(schedules);
});

module.exports = scheduleRouter;
