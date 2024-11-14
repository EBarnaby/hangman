import "./App.css";
import { useEffect } from "react";

export default function Dialog({ title, description, reset, word, reveal }) {

    function handleKeyPress(e) {
        if (e.keyCode === 32) {
            reset()
        }
    }

    useEffect(() => {
        window.addEventListener("keypress", handleKeyPress)
        return () => window.removeEventListener("keypress", handleKeyPress)
    }, [reset])

    return (
        <>
            <section className="guessing">
                <div className="popup">
                    <h1>{title}</h1>
                    <h4>{description}</h4>
                    <h4>{reveal}{word}</h4>
                    <button className="playAgain" onClick={reset}>Press [SPACE]<br /> to Play Again!</button>
                </div>
            </section >
        </>
    )
}