import "./App.css";
import Storage from "./components/Storage";

function App() {
  return (
    <div className="App">
      <Storage used={815} max={1000} />
    </div>
  );
}

export default App;
