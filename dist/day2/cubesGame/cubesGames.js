"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfPossibleGameIDs = void 0;
function parseGameData(gameData) {
    const games = gameData.split(";").map((game) => game.trim());
    const cubeCounts = { red: 0, green: 0, blue: 0 };
    games.forEach((game) => {
        const parts = game.split(",").map((part) => part.trim());
        parts.forEach((part) => {
            const [count, color] = part.split(" ");
            const cubeCount = parseInt(count);
            if (color.includes("red")) {
                cubeCounts.red = Math.max(cubeCounts.red, cubeCount);
            }
            else if (color.includes("green")) {
                cubeCounts.green = Math.max(cubeCounts.green, cubeCount);
            }
            else if (color.includes("blue")) {
                cubeCounts.blue = Math.max(cubeCounts.blue, cubeCount);
            }
        });
    });
    return cubeCounts;
}
function checkGamePossible(cubeCounts, maxRed, maxGreen, maxBlue) {
    return (cubeCounts.red <= maxRed &&
        cubeCounts.green <= maxGreen &&
        cubeCounts.blue <= maxBlue);
}
function sumOfPossibleGameIDs(input, maxRed, maxGreen, maxBlue) {
    let sumIDs = 0;
    input.forEach((line) => {
        if (!line.includes("Game"))
            return;
        const parts = line.split(":");
        const gameID = parseInt(parts[0].replace("Game", "").trim());
        const gameData = parts[1].trim();
        const cubeCounts = parseGameData(gameData);
        if (checkGamePossible(cubeCounts, maxRed, maxGreen, maxBlue)) {
            sumIDs += gameID;
        }
    });
    return sumIDs;
}
exports.sumOfPossibleGameIDs = sumOfPossibleGameIDs;
