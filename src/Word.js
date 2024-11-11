import "./App.css";

export default function Word({ hiddenWord, guessedLetter, ...otherProps }) {
  console.log(hiddenWord)
  return (
    <>
      {hiddenWord?.split("").map((letter) => {
        if (guessedLetter.includes(letter)) {
          return <h3>{letter}</h3>;
        } else {
          return <h3>*</h3>;
        }

      })}
    </>
  );
}
