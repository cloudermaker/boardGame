import { useEffect, useState } from 'react';
import { CustomButton } from '../component/customButton';
import Cell, { ECellBackground, ECellContent, TCell } from './cell';
import { buildNextMove } from '../lib/gameManager';

import './game.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

// add a game type ?
export const Game = (): JSX.Element => {
  const [width, setWidth] = useState<number>(5);
  const [height, setHeight] = useState<number>(5);
  const [gameTab, setGameTab] = useState<TCell[][]>([]);
  const [isGamePlay, setIsGamePlay] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (isGamePlay) {
        buildNextStep();
      }
    }, 300);
  });

  const computeBackground = (): ECellBackground => {
    var rand = Math.floor(Math.random() * 10);
    if (rand <= 2) return ECellBackground.sea;
    if (rand <= 4) return ECellBackground.grass;
    if (rand <= 6) return ECellBackground.snow;

    return ECellBackground.empty;
  };

  const computeContent = (): ECellContent => {
    var rand = Math.floor(Math.random() * 20);
    if (rand <= 2) return ECellContent.entity;
    if (rand <= 8) return ECellContent.food;

    return ECellContent.empty;
  };

  const resetGame = (): void => {
    setGameTab([]);
  };

  const initGame = (): void => {
    const tmpTab: TCell[][] = [];
    [...new Array(height)].forEach((_, idxH) => {
      const tmpLine: TCell[] = [];
      [...new Array(width)].forEach((_, idxW) => {
        tmpLine.push({
          content: idxH === 0 && idxW === 0 ? ECellContent.home : computeContent(),
          background: idxH === 0 && idxW === 0 ? ECellBackground.empty : computeBackground(),
        });
      });
      tmpTab.push(tmpLine);
    });

    setGameTab(tmpTab);
  };

  const buildNextStep = (): void => {
    const newGameTab = buildNextMove(gameTab, width, height);

    setGameTab(newGameTab);
  };

  const printDebug = (): JSX.Element => {
    const entityTab: { [x: string]: number } = {};

    gameTab.forEach((line) => {
      line.forEach((cell) => {
        const content = cell.content.toString();

        if (entityTab[content]) {
          entityTab[content] += 1;
        } else {
          entityTab[content] = 1;
        }
      });
    });

    return (
      <>
        {Object.keys(entityTab)
          .sort((key1, key2) => key1.localeCompare(key2))
          .map((key) => (
            <span key={key}>
              {key}: {entityTab[key]}
            </span>
          ))}
      </>
    );
  };

  return (
    <>
      <section className="section-actions">
        <div className="actions-main">
          <input
            className="actions-input"
            type="number"
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value))}
          />

          <input
            className="actions-input"
            type="number"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />

          <CustomButton
            label="New Game"
            disabled={gameTab.length !== 0 || (width === 0 && height === 0)}
            onClick={initGame}
          />

          <CustomButton label="Stop Game" onClick={resetGame} disabled={gameTab.length === 0} />
        </div>
      </section>

      <section className="section-game">
        <div className="actions-steps">
          <CustomButton onClick={() => setIsGamePlay(false)} disabled={!isGamePlay}>
            <span>
              <FontAwesomeIcon icon={faPause} />
            </span>
          </CustomButton>

          <CustomButton onClick={() => setIsGamePlay(true)} disabled={isGamePlay}>
            <span>
              <FontAwesomeIcon icon={faPlay} />
            </span>
          </CustomButton>

          <CustomButton onClick={buildNextStep} disabled={gameTab.length === 0 || isGamePlay}>
            <span>
              <FontAwesomeIcon icon={faForward} />
            </span>
          </CustomButton>
        </div>

        <table className="section-game-table">
          <tbody>
            {gameTab.map((line, idxH) => (
              <tr key={idxH}>
                {line.map((cell, idxW) => {
                  const id = idxH * width + idxW;

                  return (
                    <td className="table-td" key={`td_${id}`}>
                      <Cell id={id.toString()} background={cell.background} content={cell.content} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <br />
        {printDebug()}
      </section>
    </>
  );
};
