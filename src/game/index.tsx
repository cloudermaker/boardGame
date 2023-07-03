import { CustomButton } from '../component/customButton';
import Cell, { ECellBackground, ECellContent } from './cell';

import './game.css';

export const Game = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => {
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

  return (
    <>
      <section className="section-actions">
        <div className="actions-main">
          <CustomButton label="New Game" />
          <CustomButton label="Stop Game" />
        </div>

        <div className="actions-steps">
          <CustomButton label="Next step" />
        </div>
      </section>

      <section className="section-game">
        <table className="section-game-table">
          {[...new Array(height)].map((a, idxH) => (
            <tr key={idxH}>
              {[...new Array(width)].map((a, idxW) => {
                const id = idxH * width + idxW;

                return (
                  <td className="table-td" key={`td_${id}`}>
                    <Cell
                      id={id.toString()}
                      background={
                        id === 0 ? ECellBackground.empty : computeBackground()
                      }
                      content={id === 0 ? ECellContent.home : computeContent()}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </table>
      </section>
    </>
  );
};
