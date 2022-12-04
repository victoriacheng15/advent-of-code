const fs = require("fs/promises");
const path = require("path");

const priorities = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const sum = (acc, num) => acc + num;

const priority = (letter) => priorities.indexOf(letter);

Array.prototype.group = function (length) {
	return this.reduce((acc, arr, index) => {
		if (index % length === 0) {
			acc.push([]);
		}
		acc[acc.length - 1].push(arr);
		return acc;
	}, []);
};

function part1(input) {
	const result = input
		.map((line) => [
			line.slice(0, line.length / 2),
			line.slice(line.length / 2),
		])
		.map(([left, right]) =>
			[...left].find((leftItem) => right.includes(leftItem)),
		)
		.map(priority)
		.reduce(sum, 0);

	console.log(`The sum of priorities: ${result}`);
}

function part2(input) {
	const result = input
		.group(3)
		.map((elves) =>
			[...elves[0]].find((badge) => elves.every((elf) => elf.includes(badge))),
		)
		.map(priority)
		.reduce(sum, 0);

	console.log(`The sum of priorities (badges): ${result}`);
}

const day3 = async () => {
	const file = path.join(__dirname, "input.txt");
	const data = await fs.readFile(file, { encoding: "utf-8" });
	const input = data.split("\n");

	part1(input);
	part2(input);
};

day3();
