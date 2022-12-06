const fs = require("fs/promises");
const path = require("path");

const filteredLine = (line) => [...line].filter((_, index) => index % 4 === 1);

function part1(input) {
	let [stacks, steps] = input;

	stacks = stacks.split("\n").slice(0, -1).map(filteredLine).reverse();
	stacks = stacks[0].map((_, index) =>
		stacks.map((row) => row[index]).filter((crate) => crate !== " "),
	);

	const regex = /^move (\d+) from (\d+) to (\d+)$/;
	steps = steps.split("\n").map((line) => {
		const [_, count, from, to] = line.match(regex).map(Number);
		return [count, from, to];
	});

	for (let [count, from, to] of steps) {
		for (let i = 1; i <= count; i++) {
			stacks[to - 1].push(stacks[from - 1].pop());
		}
	}

	stacks = stacks.map((stack) => stack.at(-1)).join("");

	console.log(`Crates on top of each stack with CrateMover 9000: ${stacks}`);
}

function part2(input) {
	let [stacks, steps] = input;

	stacks = stacks.split("\n").slice(0, -1).map(filteredLine).reverse();
	stacks = stacks[0].map((_, index) =>
		stacks.map((row) => row[index]).filter((crate) => crate !== " "),
	);

	const regex = /^move (\d+) from (\d+) to (\d+)$/;
	steps = steps.split("\n").map((line) => {
		const [_, count, from, to] = line.match(regex).map(Number);
		return [count, from, to];
	});

	for (const [count, from, to] of steps) {
		stacks[to - 1].push(...stacks[from - 1].splice(-count));
	}

	stacks = stacks.map((stack) => stack.at(-1)).join("");

	console.log(`Crates on top of each stack with CrateMover 9001: ${stacks}`);
}

const day5 = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await fs.readFile(file, { encoding: "utf-8" });
		const input = data.split("\n\n");

		part1(input);
		part2(input);
	} catch (error) {
		console.log(error);
	}
};

day5();
