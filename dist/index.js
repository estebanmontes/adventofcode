"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calibration_1 = require("./day1/calibration/calibration");
const input_1 = require("./day1/calibration/input");
const cubeGameTwo_1 = require("./day2/cubesGame/cubeGameTwo");
const cubesGames_1 = require("./day2/cubesGame/cubesGames");
const input_2 = require("./day2/cubesGame/input");
const utils_1 = require("./utils");
// DAY 1
function runDayOne(input) {
    const arrInput = (0, utils_1.parseInput)(input);
    return (0, calibration_1.calculateSumOfCalibrationValues)(arrInput);
}
// DAY 2
function runDayTwoTestOne(input) {
    const parsedInput = (0, utils_1.parseInput)(input);
    const maxRed = 12;
    const maxGreen = 13;
    const maxBlue = 14;
    return (0, cubesGames_1.sumOfPossibleGameIDs)(parsedInput, maxRed, maxGreen, maxBlue);
}
function runDayTwoTestTwo(input) {
    const parsedInput = (0, utils_1.parseInput)(input);
    return (0, cubeGameTwo_1.sumAllPowers)(parsedInput);
}
// MAIN RUNNER FUNCTION
function runAllDays() {
    console.log(`The sum of all calibration values test is: ${runDayOne(input_1.input)}`);
    console.log(`The sum of all possible IDs games is: ${runDayTwoTestOne(input_2.input2)}`);
    console.log(`The sum of all power is: ${runDayTwoTestTwo(input_2.input2)}`);
}
runAllDays();
