require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MONGO_URI = process.env.MONGO_URI;

const data = require("./utils/read_json");
const isTime1LaterThanTime2 = require("./utils/compare_times");

const Schedule = require("./models/schedule");

mongoose
	.connect(MONGO_URI)
	.then(() => console.info("connected to database"))
	.catch((err) => console.error("failed to connect the database", err));

app.get("/schedule", async (req, res) => {
	const from = req.query.from;
	const to = req.query.to;
	const range1 = req.query.range1;
	const range2 = req.query.range2;
	const result = data.filter((schedule) => schedule.from_station === from && schedule.to_station === to && isTime1LaterThanTime2(schedule.departure, range1) && isTime1LaterThanTime2(range2, schedule.arrival));
	res.json(result);
});

app.patch("/:name", async (req, res) => {
	const trainName = req.params.name;
	const departure = req.body.departure;
	const arrival = req.body.arrival;
	const schedule = await Schedule.findOneAndUpdate({ train_name: trainName }, { departure: departure, arrival: arrival }, { new: true });
	res.json(schedule);
});

app.get("/:name", async (req, res) => {
	const trainName = req.params.name;
	const listOfSchedule = data.filter((schedule) => schedule.train_name === trainName);
	res.json(listOfSchedule);
});

app.get("/", async (req, res) => {
	const schedules = await Schedule.find({});
	res.json(schedules);
});

app.listen(3000, () => {
	console.log("listening to port 3000");
});
