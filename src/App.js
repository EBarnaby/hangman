import "./App.css";
import Dialog from "./Dialog";
import Guessing from "./Guessing";
import Hangman from "./hangman";
import Word from "./Word";
import React, { useEffect, useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [counter, setCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  async function createWord() {
    let run = true;
    while (run) {
      const response = await fetch("https://random-word-api.herokuapp.com/word");
      let json = await response.json()
      if (json[0].length < 13) {
        setWord(json[0].toUpperCase())
        run = false;
      }
    }
  }
  useEffect(() => {
    createWord();
  }, [])

  function isSubset() {
    let win = true
    for (const value of new Set(word.split(""))) {
      if (guessedLetter.includes(value)) {
        continue
      } else {
        win = false;
      }
    }
    if (win) setWin(true)
  }

  useEffect(() => {
    if (word.length > 0) {
      if (
        guessedLetter.length > 0 &&
        !word.split("").includes(guessedLetter[guessedLetter.length - 1])
      ) {
        if (counter + 1 == 12) {
          setGameOver(true)
        }
        setCounter(counter + 1);
      }
      isSubset()
    }
  }, [word, guessedLetter]);

  function endGame() {
    createWord();
    setGuessedLetter([]);
    setCounter(0);
    setGameOver(false);
    setWin(false);
  }

  return (
    <>
      <div className="word-display">
        <Word
          hiddenWord={word}
          guessedLetter={guessedLetter}
        />
      </div>
      <div className="grouping">
        {win ?
          <Dialog
            title="Congratulations!"
            description="You correctly guessed the word!"
            reset={endGame}
          /> :
          null
        }
        {gameOver ?
          <Dialog
            title="Oh Snap!"
            description="The man is dead!"
            reveal="The word was: "
            word={word}
            reset={endGame}
          /> :
          null
        }
        {!win && !gameOver ?
          <>
            <Guessing
              guessedLetter={guessedLetter}
              setGuessedLetter={setGuessedLetter}
            />
          </>
          :
          null
        }
        <Hangman
          imgCounter={counter}
          win={win} />
      </div>
    </>
  );
}

export default App;