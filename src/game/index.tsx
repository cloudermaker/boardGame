import GridLayout from 'react-grid-layout';

import './game.css';
import Cell from './cell';
import { useState } from 'react';

interface TLayout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export const Game = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => {
  const [gameMap, setGameMap] = useState<TLayout[]>([]);

  const initTab = (): void => {
    const tmpMap: TLayout[] = [];

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        tmpMap.push({ i: `a${i * width + j}`, x: i, y: j, w: 1, h: 1 });
      }
    }

    setGameMap(tmpMap);
  };

  console.log(gameMap);
  return (
    <>
      <section className="section-actions">
        <div className="actions-main">
          <button onClick={initTab}>New game</button>
          <button>Stop game</button>
        </div>

        <div className="actions-steps">
          <button>Next</button>
        </div>
      </section>

      <section className="section-game">
        <GridLayout
          className="gameMap"
          layout={gameMap}
          cols={width}
          rowHeight={height}
          width={width * 100}
        >
          {gameMap.map((cell) => (
            <Cell key={cell.i} label={cell.i} />
          ))}
        </GridLayout>
      </section>
    </>
  );
};
