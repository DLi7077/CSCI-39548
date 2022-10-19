import "./App.css";
import Clock from "./Clock";

function App() {
  const user = {
    first_name: "Devin",
    last_name: "Li",
  };
  function format(user) {
    return `${user.first_name} ${user.last_name}`;
  }
  const greet = <h1>{`Hello, ${format(user)}`}</h1>;
  return (
    <div className="App">
      {greet}
      <Clock />
    </div>
  );
}

export default App;
