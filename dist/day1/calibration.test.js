"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calibration_1 = require("./calibration");
describe("calculateSumOfCalibrationValues", () => {
    it("calculates the correct sum of calibration values", () => {
        const lines = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
        const expectedSum = 142;
        expect((0, calibration_1.calculateSumOfCalibrationValues)(lines)).toBe(expectedSum);
    });
    it("calculates the correct sum of calibration values with text", () => {
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
        expect((0, calibration_1.calculateSumOfCalibrationValues)(linesWText)).toBe(expectedSumWText);
    });
});
