import "./App.css";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import GameOver from "./components/gameStatus/GameOver";

import { createContext, useEffect, useState } from "react";
import { boardDefault, generateWordSet, getPokemonImg } from "./Pookex";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set(""));
  const [correctWord, setCorrectWord] = useState("");
  const [imgPokemon, setImgPokemon] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord.toUpperCase());
      setImgPokemon(words.urlImg)
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for(let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if(wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Pokemon Not Found!")
    }
    
    if(currWord === correctWord) {
      setGameOver({gameOver: true, guessedWord: true})
      return;
    }

    if(currAttempt.attempt === 5) {
      setGameOver({gameOver: true, guessedWord: false})
    }

  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }

  return (
    <div className="App">
      <nav>
        <h1>Poo.kex</h1>{" "}
      </nav>
      <div>

      </div>
      <AppContext.Provider value={{ 
          onSelectLetter,
          onDelete,
          onEnter,
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          setDisabledLetters,
          disabledLetters,
          setGameOver,
          gameOver,
          imgPokemon
        }}>
        <div className="game">
          {gameOver.gameOver && <GameOver />}
          <Board />
          {!gameOver.gameOver && <Keyboard/>}
        </div >
      </AppContext.Provider>
    </div>
  );
}

export default App;
