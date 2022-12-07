const fs = require("fs/promises");
const path = require("path");

function isUnique(array) {
	return new Set(array).size === array.length;
}

function part1(input) {
	const slidingWindow = [];
	let index = 0;

	for (const char of input) {
		slidingWindow.push(char);

		if (slidingWindow.length > 4) {
			slidingWindow.shift();
		}

		if (slidingWindow.length === 4 && isUnique(slidingWindow)) {
			console.log(`The first char after the packet marker: ${index + 1}`);
			break;
		}

		index += 1;
	}
}

function part2(input) {
	const slidingWindow = [];
	let index = 0;

	for (const char of input) {
		slidingWindow.push(char);

		if (slidingWindow.length > 14) {
			slidingWindow.shift();
		}

		if (slidingWindow.length === 14 && isUnique(slidingWindow)) {
			console.log(`The first char after the message marker: ${index + 1}`);
			break;
		}

		index += 1;
	}
}

const day6 = async () => {
	try {
		const file = path.join(__dirname, "input.txt");
		const data = await fs.readFile(file, { encoding: "utf-8" });
		const input = data.trim();

		part1(input);
		part2(input);
	} catch (error) {
		console.log(error);
	}
};

day6();
