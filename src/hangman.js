import "./App.css";

export default function Hangman({ imgCounter }) {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('./hangmanimgs', false, /\.(png|jpe?g|svg)$/));

  return (
    <section className="hangman">
      <img
        src={images[imgCounter]}
        alt="i no work :("
      />
    </section>
  );
}
