import "./App.css";
import Counter from "./components/Counter";
import ComplexCounter from "./components/ComplexCounter";
import ComplexCounter2 from "./components/ComplexCounter2";
import ComplexCounter3 from "./components/ComplexCounter3";

function App() {
  return (
    <div className="App">
      <div className="box">
        <p style={{ color: "red" }}>normal way</p>
        <Counter></Counter>
      </div>

      <br />

      <div className="box">
        <p style={{ color: "red" }}>Complex way</p>
        <ComplexCounter></ComplexCounter>
      </div>

      <br />

      <div className="box">
        <p style={{ color: "red" }}>Complex way with multiple button</p>
        <ComplexCounter2></ComplexCounter2>
      </div>

      <br />

      <div className="box">
        <p style={{ color: "red" }}>Complex way with multiple state</p>
        <ComplexCounter3></ComplexCounter3>
      </div>

      <br />
    </div>
  );
}

export default App;
