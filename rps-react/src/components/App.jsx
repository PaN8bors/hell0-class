import React from "react";
import Choices from "./Choices";
import Results from "./Results";
import Buttons from "./Buttons";


function App() {
  return (
    <div>
      <main>
    <header>
        <h1>ROCK - PAPER - SCISSORS</h1>
      </header>
      <Choices />
      <Results />
        <h2>Make Your Choice</h2>
        <Buttons />
      </main>
    </div>
  );
}

export default App;
