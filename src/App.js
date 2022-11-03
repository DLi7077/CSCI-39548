import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Clock from "./Clock";
import Shuffle from "./shuffle";

function App() {
  const cards = [1, 2, 3];
  const [ready, setReady] = useState(true);
  const [gameEnd, setGameEnd] = useState(true);

  const gameCards = Shuffle([...cards, ...cards]);
  const revealMS = 500;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        style={{ width: "fit-content" }}
        onClick={() => {
          setReady(false);
          setTimeout(() => {
            setReady(true);
          }, revealMS);
        }}
      >
        New game
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {ready && (
          <>
            <Clock stop={gameEnd} />
            <CardList gameCards={gameCards} endGame={() => setGameEnd(true)} />
          </>
        )}
        {!ready && <h3> loading...</h3>}
      </div>
    </div>
  );
}

export default App;
