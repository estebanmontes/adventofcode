interface Round {
  red: number;
  green: number;
  blue: number;
}

type Game = Round[];

// Function to parse game data from input string
function parseGameData(input: string): Game[] {
  const games = input.split("\n").map((gameLine) => {
    const rounds = gameLine.split(";").map((round) => {
      const counts = { red: 0, green: 0, blue: 0 };
      round
        .trim()
        .split(",")
        .forEach((part) => {
          const [count, color] = part.trim().split(" ");
          counts[color as "red" | "green" | "blue"] = parseInt(count);
        });
      return counts;
    });
    return rounds;
  });
  return games;
}

// Function to calculate minimum cubes required for each color
function calculateMinimumCubes(game: Game): {
  red: number;
  green: number;
  blue: number;
} {
  return game.reduce(
    (acc, round) => ({
      red: Math.max(acc.red, round.red),
      green: Math.max(acc.green, round.green),
      blue: Math.max(acc.blue, round.blue),
    }),
    { red: 0, green: 0, blue: 0 }
  );
}

// Function to compute the power of the cube set
function computePower(minCubes: {
  red: number;
  green: number;
  blue: number;
}): number {
  return minCubes.red * minCubes.green * minCubes.blue;
}

export function sumAllPowers(input: string[]): number {
  const inputData = input.map((s) => s.substring(s.indexOf(":") + 1).trim());
  const parsedInput = parseGameData(inputData.join("\n"));
  let totalPower = 0;
  parsedInput.forEach((game) => {
    const minCubes = calculateMinimumCubes(game);
    const power = computePower(minCubes);
    totalPower += power;
  });
  return totalPower;
}

// Input data
const inputData = `
  Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
  `
  .trim()
  .split("\n")
  .map((s) => s.substring(s.indexOf(":") + 1).trim());

// Parsing and processing games
const games = parseGameData(inputData.join("\n"));
let totalPower = 0;
games.forEach((game) => {
  const minCubes = calculateMinimumCubes(game);
  const power = computePower(minCubes);
  totalPower += power;
  console.log(
    `Minimum cubes for game: ${JSON.stringify(minCubes)} with power: ${power}`
  );
});
