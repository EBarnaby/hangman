import "./App.css";
import png from "./GameOver.png";
import yes from "./GameWon.png";

export default function Hangman({ imgCounter, win }) {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('./hangmanimgs', false, /\.(png|jpe?g|svg)$/));

  if (imgCounter == 12) {
    return (
      <section className="hangman">
        <img src={png} alt="this is fine" />
      </section>
    )
  }

  if (win == true) {
    return (
      <section className="hangman">
        <img src={yes} alt="yep" />
      </section>
    )
  }

  return (
    <section className="hangman">
      <img
        src={images[imgCounter]}
        alt="i no work :("
      />
    </section>
  );
}
