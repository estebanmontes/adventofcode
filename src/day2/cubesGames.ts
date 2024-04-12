type CubeCounts = { red: number; green: number; blue: number };

function parseGameData(gameData: string): CubeCounts {
  const games = gameData.split(";").map((game) => game.trim());
  const cubeCounts: CubeCounts = { red: 0, green: 0, blue: 0 };

  games.forEach((game) => {
    const parts = game.split(",").map((part) => part.trim());
    parts.forEach((part) => {
      const [count, color] = part.split(" ");
      const cubeCount = parseInt(count);
      if (color.includes("red")) {
        cubeCounts.red = Math.max(cubeCounts.red, cubeCount);
      } else if (color.includes("green")) {
        cubeCounts.green = Math.max(cubeCounts.green, cubeCount);
      } else if (color.includes("blue")) {
        cubeCounts.blue = Math.max(cubeCounts.blue, cubeCount);
      }
    });
  });

  return cubeCounts;
}

function checkGamePossible(
  cubeCounts: CubeCounts,
  maxRed: number,
  maxGreen: number,
  maxBlue: number
): boolean {
  return (
    cubeCounts.red <= maxRed &&
    cubeCounts.green <= maxGreen &&
    cubeCounts.blue <= maxBlue
  );
}

export function sumOfPossibleGameIDs(
  input: string[],
  maxRed: number,
  maxGreen: number,
  maxBlue: number
): number {
  let sumIDs = 0;

  input.forEach((line) => {
    if (!line.includes("Game")) return;
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
