import { ECellContent, TCell } from '../game/cell';

const getNextMove = (x: number, y: number, gameTab: TCell[][]): number[] => {
  const possibleNextMoves: number[][] = [];

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (gameTab[i] && gameTab[i][j] && gameTab[i][j].content !== ECellContent.entity) {
        possibleNextMoves.push([i, j]);
      }
    }
  }

  const randomId = Math.floor(Math.random() * possibleNextMoves.length);
  return possibleNextMoves[randomId];
};

export const buildNextMove = (
  gameTab: TCell[][],
  width: number,
  height: number,
  addFood = true,
  addEntity = true
): TCell[][] => {
  const newGameTab: TCell[][] = JSON.parse(JSON.stringify(gameTab));

  gameTab.forEach((line, idxH) => {
    line.forEach((cell, idxW) => {
      if (cell.content === ECellContent.entity) {
        const newContentCell = getNextMove(idxW, idxH, gameTab);
        newGameTab[idxH][idxW].content = ECellContent.empty;
        newGameTab[newContentCell[1]][newContentCell[0]].content = ECellContent.entity;
      }
    });
  });

  // Add random food
  if (addFood) {
    const averageNumber = width + height / 2;
    const foodToAdd = Math.floor(Math.random() * averageNumber);
    [...new Array(foodToAdd)].forEach(() => {
      const randomX = Math.floor(Math.random() * width);
      const randomY = Math.floor(Math.random() * height);
      if (newGameTab[randomX][randomY].content === ECellContent.empty) {
        newGameTab[randomX][randomY].content = ECellContent.food;
      }
    });
  }

  if (addEntity) {
    if (Math.floor(Math.random() * 2) === 0 && newGameTab[0][0].content === ECellContent.empty) {
      newGameTab[0][0].content = ECellContent.entity;
    }
  }

  return newGameTab;
};
