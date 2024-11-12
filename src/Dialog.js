import "./App.css";

export default function Dialog({ title, description, reset, word, reveal }) {
    return (
        <>
            <section className="guessing">
                <div className="popup">
                    <h1>{title}</h1>
                    <h4>{description}</h4>
                    <h4>{reveal}{word}</h4>
                    <button className="playAgain" onClick={reset}>Play Again?</button>
                </div>
            </section>
        </>
    )
}