const fs = require("fs");

const readJsonFile = (filePath) => {
	try {
		const data = fs.readFileSync(filePath, "utf8");
		return JSON.parse(data);
	} catch (error) {
		console.error(`Error reading JSON file: ${error.message}`);
		return null;
	}
};
const filepath = "./data2.json";
const data = readJsonFile(filepath);

module.exports = data;
