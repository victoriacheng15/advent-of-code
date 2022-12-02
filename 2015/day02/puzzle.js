const fs = require("fs/promises");
const path = require("path");

function part1(input) {
	const wrapper = input.reduce((total, _lwh) => {
		const [l, w, h] = _lwh.split("x");

		return (
			total + 2 * l * w + 2 * w * h + 2 * h * l + Math.min(l * w, w * h, h * l)
		);
	}, 0);

	console.log(`Total wrapper needed: ${wrapper}`);
}

function part2(input) {
	const ribbon = input.reduce((total, lwh) => {
		const [l, w, h] = lwh
			.split("x")
			.map(Number)
			.sort((a, b) => a - b);

		return total + (l + l + w + w) + l * w * h;
	}, 0);

	console.log(`Total ribbon needed: ${ribbon}`);
}

const day02 = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await await fs.readFile(file, { encoding: "utf-8" });
		const input = data.split("\n");

		part1(input);
		part2(input);
	} catch (error) {
		console.log(error);
	}
};

day02();
