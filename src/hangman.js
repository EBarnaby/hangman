import "./App.css";
import png from "./GameWon.png";

export default function Hangman({ imgCounter }) {
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

  return (
    <section className="hangman">
      <img
        src={images[imgCounter]}
        alt="i no work :("
      />
    </section>
  );
}
