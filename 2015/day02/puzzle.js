const fs = require("fs/promises");
const path = require("path");

const getTotalWrapper = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await (
			await fs.readFile(file, { encoding: "utf-8" })
		).split("\n");

		// part 1
		const wrapper = data.reduce((total, _lwh) => {
			const [l, w, h] = _lwh.split("x");

			return (
				total +
				2 * l * w +
				2 * w * h +
				2 * h * l +
				Math.min(l * w, w * h, h * l)
			);
		}, 0);
		console.log(`Total wrapper needed: ${wrapper}`);

		// part 2

		const ribbon = data.reduce((total, lwh) => {
			const [l, w, h] = lwh.split("x").map(Number).sort((a, b) => a - b);

			return total + (l + l + w + w) + l * w * h;
		}, 0);

		console.log(`Total ribbon needed: ${ribbon}`);
	} catch (error) {
		console.log(error);
	}
};

getTotalWrapper();
