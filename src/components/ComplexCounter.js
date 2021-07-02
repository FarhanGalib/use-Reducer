import React from "react";
import { useReducer } from "react";

const initialState = { counter: 0 };
const reducer = (state, action) => {
  switch (action.Type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return { counter: state.counter };
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count - {count.counter}</p>
      <button onClick={() => dispatch({ Type: "increment"})}>Increment</button>
      <button onClick={() => dispatch({ Type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default ComplexCounter;