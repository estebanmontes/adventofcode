import { parseInput } from "../utils";
import { sumAllPowers } from "./cubeGameTwo";
import { sumOfPossibleGameIDs } from "./cubesGames";
import { input2 } from "./input";

const maxRed = 12;
const maxGreen = 13;
const maxBlue = 14;

describe("day two cube game", () => {
  it("test one example: should return the sum of all possible game IDs", () => {
    const example = `
    Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
    Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
    Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
    Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
    `;
    const parsedInput = parseInput(example);

    expect(sumOfPossibleGameIDs(parsedInput, maxRed, maxGreen, maxBlue)).toBe(
      8
    );
  });
  it("test one: should return the sum of all possible game IDs", () => {
    const parsedInput = parseInput(input2);
    expect(sumOfPossibleGameIDs(parsedInput, maxRed, maxGreen, maxBlue)).toBe(
      2486
    );
  });
  it("test two: should return the sum of all possible game IDs", () => {
    const parsedInput = parseInput(input2);
    expect(sumAllPowers(parsedInput)).toBe(87984);
  });
});
