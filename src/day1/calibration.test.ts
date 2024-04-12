import { calculateSumOfCalibrationValues } from "./calibration";

describe("day one calculateSumOfCalibrationValues", () => {
  it("test one: calculates the correct sum of calibration values", () => {
    const lines = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    const expectedSum = 142;
    expect(calculateSumOfCalibrationValues(lines)).toBe(expectedSum);
  });

  it("test two: calculates the correct sum of calibration values with numbers letter", () => {
    const linesWText = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen", // Assuming 'sixteen' should be ignored as it's beyond 'nine'
    ];
    const expectedSumWText = 281;
    expect(calculateSumOfCalibrationValues(linesWText)).toBe(expectedSumWText);
  });
});
