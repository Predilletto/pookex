import React, { useContext } from "react";

import { AppContext } from "../../App";

function GameOver() {
  const { gameOver, imgPokemon, correctWord } = useContext(AppContext);
  const guessedWord = () => {
    return (
      <div>
        <h3 style={{ color: "green" }}>You win the pokemon is {correctWord}</h3>
        <img src={imgPokemon} alt={correctWord} />
      </div>
    );
  };

  const failed = () => {
    return (
      <h3 style={{ color: "red" }}>You failed the pokemon is {correctWord}</h3>
    );
  };

  return (
    <div className="gameOver">
      {gameOver.guessedWord ? guessedWord() : failed()}
    </div>
  );
}

export default GameOver;
