"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const cubeGameTwo_1 = require("./cubeGameTwo");
const cubesGames_1 = require("./cubesGames");
const input_1 = require("./input");
describe("day two cube game", () => {
    it("test one should return the sum of all possible game IDs", () => {
        const parsedInput = (0, utils_1.parseInput)(input_1.input2);
        const maxRed = 12;
        const maxGreen = 13;
        const maxBlue = 14;
        expect((0, cubesGames_1.sumOfPossibleGameIDs)(parsedInput, maxRed, maxGreen, maxBlue)).toBe(2486);
    });
    it("test one should return the sum of all possible game IDs", () => {
        const parsedInput = (0, utils_1.parseInput)(input_1.input2);
        expect((0, cubeGameTwo_1.sumAllPowers)(parsedInput)).toBe(87984);
    });
});
