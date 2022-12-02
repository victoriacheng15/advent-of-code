const fs = require("fs/promises");
const path = require("path");

function sortedCalories(arr) {
	return arr
		.map((elf) =>
			elf.split("\n").reduce((acc, calorie) => acc + Number(calorie), 0),
		)
		.sort((a, b) => b - a);
}

function part1(input) {
	const result = sortedCalories(input);

	console.log(`Highest calories count: ${result[0]} `);
}

function part2(input) {
	const result = sortedCalories(input);
	const totalTop3Calories = result
		.slice(0, 3)
		.reduce((acc, cal) => acc + cal, 0);

	console.log(`Total top 3 elves calories count: ${totalTop3Calories}`);
}

const day01 = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await fs.readFile(file, { encoding: "utf-8" });
		const elves = data.split("\n\n");

		part1(elves);
		part2(elves);
	} catch (error) {
		console.log(error);
	}
};

day01();
