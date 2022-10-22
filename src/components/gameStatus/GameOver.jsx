import "./gameOver.scss";

import React, { useContext } from "react";
import { AppContext } from "../../App";

function GameOver() {
  const { gameOver, imgPokemon, correctWord } = useContext(AppContext);
  const guessedWord = () => {
    return (
      <div className="container">
        <div id="hideMe">
          <div className="pokeball">
            <img
              id="showMe"
              src={imgPokemon}
              alt={correctWord}
              style={{
                visibility: "hidden",
                height: "100px",
              }}
            />
          </div>
        </div>
        <h3 id="showMe" style={{ visibility: "hidden" }}>
          YOU CATCH THE {correctWord} CONGRATS!
        </h3>
      </div>
    );
  };

  const failed = () => {
    return (
      <h3 style={{ color: "#CC0000", fontSize: "25px" }}>
        You failed the pokemon is {correctWord}
      </h3>
    );
  };

  return (
    <div className="gameOver">
      {gameOver.guessedWord ? guessedWord() : failed()}
    </div>
  );
}

export default GameOver;
