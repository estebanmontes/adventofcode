import { calculateSumOfCalibrationValues } from "./day1/calibration/calibration";
import { input } from "./day1/calibration/input";
import { sumAllPowers } from "./day2/cubesGame/cubeGameTwo";
import { sumOfPossibleGameIDs } from "./day2/cubesGame/cubesGames";
import { input2 } from "./day2/cubesGame/input";
import { parseInput } from "./utils";

// DAY 1 this method implements the solution for the two tests in day 1
function runDayOne(input: string): number {
  const arrInput = parseInput(input);
  return calculateSumOfCalibrationValues(arrInput);
}

// DAY 2

function runDayTwoTestOne(input: string): number {
  const parsedInput = parseInput(input);
  const maxRed = 12;
  const maxGreen = 13;
  const maxBlue = 14;
  return sumOfPossibleGameIDs(parsedInput, maxRed, maxGreen, maxBlue);
}

function runDayTwoTestTwo(input: string): number {
  const parsedInput = parseInput(input);
  return sumAllPowers(parsedInput);
}

// MAIN RUNNER FUNCTION
function runAllDays(): void {
  console.log(`The sum of all calibration values test is: ${runDayOne(input)}`);
  console.log(
    `The sum of all possible IDs games is: ${runDayTwoTestOne(input2)}`
  );
  console.log(`The sum of all power is: ${runDayTwoTestTwo(input2)}`);
}

runAllDays();
