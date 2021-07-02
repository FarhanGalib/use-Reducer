import './App.css';
import Counter from "./components/Counter";
import ComplexCounter from "./components/ComplexCounter";


function App() {
  return (
    <div className="App">
      <p>normal way</p>
      <Counter></Counter>

      <br />
      <br />

      <p>Complex way</p>
      <ComplexCounter></ComplexCounter>
    </div>
  );
}

export default App;
