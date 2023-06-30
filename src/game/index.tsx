import Cell from './cell';

import './game.css';

export const Game = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => {
  return (
    <>
      <section className="section-actions">
        <div className="actions-main">
          <button>New game</button>
          <button>Stop game</button>
        </div>

        <div className="actions-steps">
          <button>Next</button>
        </div>
      </section>

      <section className="section-game">
        <table>
          {[...new Array(height)].map((a, idxH) => (
            <tr key={idxH}>
              {[...new Array(width)].map((a, idxW) => (
                <td key={`td_${idxH * width + idxW}`}>
                  <Cell label={`${idxH * width + idxW}`} />
                </td>
              ))}
            </tr>
          ))}
        </table>
      </section>
    </>
  );
};
