import { useEffect } from "react";
import "./App.css";

export default function Guessing({ guessedLetter, setGuessedLetter }) {
  const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  function letterClick(letter) {
    setGuessedLetter(prevState => [...prevState, letter])
  }

  function letterKeyDown(e) {
    const letter = String.fromCharCode(e.charCode).toUpperCase()
    const reg = /[a-zA-Z]+/g;
    let res = reg.test(letter);

    if (res == true) {
      if (!guessedLetter.includes(letter)) {
        setGuessedLetter(prevState => [...prevState, letter])
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", letterKeyDown)
    return () => window.removeEventListener("keypress", letterKeyDown)
  }, [guessedLetter])

  return (
    <section className="guessing">
      <div className="keyboard">
        {alphabet.map((letter) => {
          if (guessedLetter.includes(letter)) {
            return (
              <button className="circle-guessed" disabled>
                <p>{letter}</p>
              </button>
            )
          } else {
            return (
              <button className="circle" onClick={() => letterClick(letter)}>
                <p>{letter}</p>
              </button>
            )
          }
        })}
      </div>
    </section >
  );
}