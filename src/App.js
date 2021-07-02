import './App.css';
import Counter from "./components/Counter";
import ComplexCounter from "./components/ComplexCounter";
import ComplexCounter2 from "./components/ComplexCounter2";


function App() {
  return (
    <div className="App">
      <p>normal way</p>
      <Counter></Counter>

      
      <br />

      <p>Complex way</p>
      <ComplexCounter></ComplexCounter>

      
      <br />

      <p>Complex way with multiple button</p>
      <ComplexCounter2></ComplexCounter2>


      <br />
    </div>
  );
}

export default App;
