import { useState, useRef, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Clock from "./Clock";
import Shuffle from "./shuffle";

function App() {
  const [cards, setCards] = useState([]);
  const [ready, setReady] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [cardCount, setCardCount] = useState(3);

  const [gameCards, setGameCards] = useState([]);

  useEffect(() => {
    setGameCards(Shuffle([...cards, ...cards]));
  }, [cards]);

  const revealMS = 500;

  function updateCardList() {
    const newCardList = [...Array(parseInt(cardCount)).keys()];
    setCards(newCardList);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <input
          type="number"
          value={cardCount}
          onChange={(e) => {
            setCardCount(e.target.value);
          }}
        ></input>
      </div>
      <button
        style={{ width: "fit-content" }}
        onClick={() => {
          updateCardList();
          setReady(false);
          setTimeout(() => {
            setReady(true);
            setGameEnd(false);
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
            <CardList
              gameCards={gameCards}
              endGame={() => setGameEnd(true)}
            />
          </>
        )}
        {!ready && gameEnd && <h3> loading...</h3>}
      </div>
    </div>
  );
}

export default App;
