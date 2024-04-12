"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSumOfCalibrationValues = void 0;
const numberWordsMap = {
    one: "o1ne",
    two: "two2",
    three: "thr3e",
    four: "fo4r",
    five: "fiv5e",
    six: "si6x",
    seven: "se7ven",
    eight: "eig8ht",
    nine: "nin9e",
};
function replaceNumberWordsWithDigits(line) {
    let lineWithDigits = line;
    for (const [word, digit] of Object.entries(numberWordsMap)) {
        const regex = new RegExp(word, "g");
        lineWithDigits = lineWithDigits.replace(regex, digit);
    }
    return lineWithDigits;
}
function calculateSumOfCalibrationValues(lines) {
    let result = 0;
    for (const line of lines) {
        const lineReplacedWithNumber = replaceNumberWordsWithDigits(line);
        const digits = lineReplacedWithNumber.match(/\d/g);
        if (digits && digits.length > 0) {
            console.log({ line, lineReplacedWithNumber, digits });
            const calibrationValue = parseInt(digits[0] + digits[digits.length - 1], 10);
            result += calibrationValue;
        }
    }
    return result;
}
exports.calculateSumOfCalibrationValues = calculateSumOfCalibrationValues;
