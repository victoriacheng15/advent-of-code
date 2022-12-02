const fs = require("fs/promises");
const path = require("path");

// opponent: A rock, B paper, C scissors
// me: X rock, Y paper, Z scissors
// shape score: 1 - rock, 2 - paper, 3 - scissors
// score: 0 - lost, 3 - draw, 6 - win

function part1(input) {
	const result = input.reduce((acc, [opponent, , me]) => {
		const shape = { X: 1, Y: 2, Z: 3 }[me];
		const outcome = {
			A: { X: 3, Y: 6, Z: 0 },
			B: { X: 0, Y: 3, Z: 6 },
			C: { X: 6, Y: 0, Z: 3 },
		}[opponent][me];

		return acc + shape + outcome;
	}, 0);

	console.log(`Total score: ${result}`);
}

// opponent: A rock, B paper, C scissors
// me: X - lose, Y- draw, Z - win

function part2(input) {
  const result = input.reduce((acc, [opponent, , result]) => {
    const shape = {
      A: { X: 3, Y: 1, Z: 2 },
      B: { X: 1, Y: 2, Z: 3 },
      C: { X: 2, Y: 3, Z: 1 },
    }[opponent][result];
    const outcome = {
      X: 0,
      Y: 3,
      Z: 6,
    }[result];

    return acc + shape + outcome
  }, 0)

	console.log(`Total Score if follow Elf: ${result}`);
}

const day2 = async () => {
	const file = path.join(__dirname, "input.txt");
	const data = await fs.readFile(file, { encoding: "utf-8" });
	const input = data.split("\n");

	part1(input);
	part2(input);
};

day2();
