import React from "react";
import { useReducer } from "react";

const initialState = { counter: 0 };
const reducer = (state, action) => {
  switch (action.Type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };
    default:
      return { counter: state.counter };
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count - {count.counter}</h1>

      <button onClick={() => dispatch({ Type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ Type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <br />
      <button onClick={() => dispatch({ Type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ Type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
    </div>
  );
};

export default ComplexCounter;
