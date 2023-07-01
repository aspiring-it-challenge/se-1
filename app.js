const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const config = require("./utils/config");
const scheduleRouter = require("./controllers/schedules");

mongoose
	.connect(config.MONGO_URI)
	.then(() => console.info("connected to database"))
	.catch((err) => console.error("failed to connect the database", err));

app.use(cors());
app.use(express.json());

app.use("/api/schedule", scheduleRouter);

module.exports = app;
