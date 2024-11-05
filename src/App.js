import "./App.css";
import Guessing from "./Guessing";
import Hangman from "./hangman";
import Word from "./Word";
import React, { useEffect, useState } from "react";

function App() {
  const [word, setWord] = useState("BOO");
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (guessedLetter.length > 0 && !word.split("").includes(guessedLetter[guessedLetter.length - 1])) {
      setCounter(counter + 1)
    }
  }, [word, guessedLetter])

  function gameOver() {
    setGuessedLetter = 0;
    setCounter = 0;
  }

  useEffect(() => {
    if (counter.length > 13) {
      gameOver();
    }
  }, [word, guessedLetter])

  return (
    <>
      <div className="word-display">
        <Word hiddenWord={word} guessedLetter={guessedLetter} />
      </div>
      <div className="grouping">
        <Guessing guessedLetter={guessedLetter} setGuessedLetter={setGuessedLetter} />
        <Hangman imgCounter={counter} />
      </div>
    </>
  );
}

export default App;
