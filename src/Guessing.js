import "./App.css";

export default function Guessing({ guessedLetter, setGuessedLetter }) {
  const alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  function letterClick(e) {
    setGuessedLetter([...guessedLetter, e])
  }

  return (
    <section className="guessing">
      <div className="keyboard">
        {alphabet.map((letter) => {
          if (guessedLetter.includes(letter)) {
            return (
              <button className="circle" disabled>
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
    </section>
  );
}
