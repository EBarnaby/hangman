import "./App.css";

export default function Dialog({ title, description, reset }) {
    return (
        <>
            <div className="background">
            </div>
            <div className="popup">
                <h1>{title}</h1>
                <h4>{description}</h4>
                <button className="playAgain" onClick={reset}>Play Again?</button>
            </div >

        </>
    )
}