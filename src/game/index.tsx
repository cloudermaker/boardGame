import "./game.css";

export const Game = () => {
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

      <section className="section-game">...</section>
    </>
  );
};
