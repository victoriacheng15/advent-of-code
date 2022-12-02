const fs = require("fs/promises");
const path = require("path");

function part1(input) {
	const getFloor = input.reduce(
		(acc, floor) => acc + (floor === "(" ? +1 : -1),
		0,
	);

	console.log(`The floor Santa is on: ${getFloor}`);
}

function part2(input) {
	let [floor, position] = [0, 0];
	for (const char of input) {
		char === "(" ? floor++ : floor--;

		position++;

		if (floor < 0) {
			console.log(`Current position: ${position}`);
			break;
		}
	}
}

const day01 = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await fs.readFile(file, { encoding: "utf-8" });
		const input = data.split("");

		part1(input);
		part2(input);
	} catch (error) {
		console.log(error);
	}
};

day01();
