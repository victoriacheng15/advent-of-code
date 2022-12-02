const fs = require("fs/promises");
const path = require("path");

function getElfTotalCalories(array) {
	return array.map((elf) =>
		elf.split("\n").reduce((acc, calorie) => acc + Number(calorie), 0),
	);
}

const getCalories = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await fs.readFile(file, {
			encoding: "utf8",
		});
		const elves = data.split("\n\n");
		const totalElvesCalories = getElfTotalCalories(elves);
		const sortedCalories = totalElvesCalories.sort((a, b) => b - a);

		// part 1
		console.log("highest calories count: ", sortedCalories[0]);

		//part 2
		const top3 = sortedCalories.slice(0, 3);
		const totalTop3Calories = top3.reduce((acc, cal) => acc + cal, 0);
		console.log("Total top 3 elves calories count: ", totalTop3Calories);
	} catch (error) {
		console.log(error);
	}
};

getCalories();
