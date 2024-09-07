const mongoose = require("mongoose");

type ConnectionObject = {
	isConnect?: number
}

const connection: ConnectionObject = {}
async function dbConnect(): Promise<void> {
	if (connection.isConnect) {
		console.log("Already connected to the database.");
		return;
	}
	try {
		if (process.env.MONGO_URL) {
			const db = await mongoose.connect(process.env.MONGO_URL!, {});
			connection.isConnect = db.connections[0].readyState;
			console.log("Database connected successfully.");
		}
		else {
			console.log("envirovariable n malyo ene.");
		}
	}
	catch (err) {
		console.log("Database connection failed", err);
		process.exit(1);
	}
}
export default dbConnect;

// {
// 	"problem_id": 1,
// 		"problem_title": "Watermelon",
// 			"time_limit": 1,
// 				"max_memory": 64,
// 					"problem_statement": "One hot summer day Pete and his friend Billy decided to buy a watermelon. They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed, and the scales showed w kilos. They rushed home, dying of thirst, and decided to divide the berry, however they faced a hard problem.\nPete and Billy are great fans of even numbers, that's why they want to divide the watermelon in such a way that each of the two parts weighs even number of kilos, at the same time it is not obligatory that the parts are equal. The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, if they can divide the watermelon in the way they want.For sure, each of them should get a part of positive weight.",
// 						"input_statement": "The first (and the only) input line contains integer number w (1 ≤ w ≤ 100) — the weight of the watermelon bought by the boys.",
// 							"output_statement": "Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case.",
// 								"examples": [
// 									{
// 										"input": "8",
// 										"output": "YES"
// 									},
// 									{
// 										"input": "12",
// 										"output": "YES"
// 									},
// 									{
// 										"input": "11",
// 										"output": "NO"
// 									},
// 									{
// 										"input": "15",
// 										"output": "NO"
// 									},
// 									{
// 										"input": "20",
// 										"output": "YES"
// 									},
// 									{
// 										"input": "29",
// 										"output": "NO"
// 									},
// 									{
// 										"input": "51",
// 										"output": "NO"
// 									},
// 									{
// 										"input": "100",
// 										"output": "YES"
// 									},
// 									{
// 										"input": "73",
// 										"output": "YES"
// 									},
// 									{
// 										"input": "927490",
// 										"output": "YES"
// 									}
// 								],
// 									"level": "easy",
// 										"category": ["brute force", "math"]
// }