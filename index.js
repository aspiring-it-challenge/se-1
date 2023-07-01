const express = require("express");
const app = express();

const data = require("./utils/read_json");

app.get("/", async (req, res) => {
	res.json(data);
});

app.get("/:name", async (req, res) => {
	const trainName = req.params.name;
	const listOfSchedule = data.filter((schedule) => schedule.train_name === trainName);
	res.json(listOfSchedule);
});

app.listen(3000, () => {
	console.log("listening to port 3000");
});
