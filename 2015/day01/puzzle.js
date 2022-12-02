const fs = require("fs/promises");
const path = require("path");

const getInput = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await fs.readFile(file, { encoding: "utf-8" });

		// part 1
		const getFloor = data
			.split("")
			.reduce((acc, floor) => acc + (floor === "(" ? +1 : -1), 0);

		console.log("The floor Santa is on: ", getFloor);

		// part 2
		let [floor, position] = [0, 0];
		for (const char of data) {
			char === "(" ? floor++ : floor--;

			position++;

			if (floor < 0) {
				console.log(`Current position: ${position}`);
				break;
			}
		}
	} catch (error) {
		console.log(error);
	}
};

getInput();
