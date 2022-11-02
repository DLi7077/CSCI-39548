import "./App.css";
import CardList from "./components/CardList";
import Shuffle from "./shuffle";

function App() {
  const cards = ["Obama", "Amongus", "The rock", "John Cena"];

  const gameCards = Shuffle([...cards, ...cards]);
  return (
    <div>
      <CardList gameCards={gameCards} />;
    </div>
  );
  
}

export default App;
