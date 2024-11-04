import "./App.css";

export default function Guessing() {
  const alphabet = "QAZWSXEDCRFVTGBYHNUJMIKLOP".split("");
  console.log(alphabet);
  return (
    <section className="guessing">
      <div className="keyboard">
        {alphabet.map((letter) => (
          <button className="circle">
            <p>{letter}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
