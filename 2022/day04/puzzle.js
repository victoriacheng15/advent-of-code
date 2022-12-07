const fs = require("fs/promises");
const path = require("path");

const regex = /\D/g;

function part1(input) {
	const result = input
		.map((line) => line.split(regex).map(Number))
		.filter(
			([l1, l2, r1, r2]) => (l1 >= r1 && l2 <= r2) || (l1 <= r1 && l2 >= r2),
		).length;

	console.log(`The amount of assignment pairs: ${result}`);
}

function part2(input) {
	const result = input
		.map((line) => line.split(regex).map(Number))
		.filter(([l1, l2, r1, r2]) => {
			return (
				(l2 >= r1 && l2 <= r2) ||
				(l1 >= r1 && l1 <= r2) ||
				(r1 >= l1 && r1 <= l2) ||
				(r2 >= l1 && r2 <= l2)
			);
		}).length;

	console.log(`The amount of overlapped assignment pairs: ${result}`);
}

const day4 = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await fs.readFile(file, { encoding: "utf-8" });
		const input = data.split("\n");

		part1(input);
		part2(input);
	} catch (error) {
		console.log(error);
	}
};

day4();
