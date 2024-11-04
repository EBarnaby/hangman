import "./App.css";
import Guessing from "./Guessing";
import Hangman from "./hangman";
import Word from "./Word";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("CHEESE");

  return (
    <>
      <Word />
      <div className="grouping">
        <Guessing />
        <Hangman />
      </div>
    </>
  );
}

export default App;
