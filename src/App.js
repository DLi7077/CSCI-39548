import { useState } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Shuffle from "./shuffle";

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [ready, setReady] = useState(true);

  const gameCards = Shuffle([...cards, ...cards]);
  return (
    <div>
      <button
        onClick={() => {
          setReady(false);
          setTimeout(() => {
            setReady(true);
          }, 200);
        }}
      >
        New game
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {ready && <CardList gameCards={gameCards} />}
        {!ready && <h3> loading...</h3>}
      </div>
    </div>
  );
}

export default App;
