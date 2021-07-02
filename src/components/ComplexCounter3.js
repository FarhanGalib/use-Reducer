import React from "react";
import { useReducer } from "react";

const initialState = { 
    counter: 0, 
    counter2: 0, 
};
const reducer = (state, action) => {
  switch (action.Type) {
    case "increment":
      return {...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
      case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return { ...state, counter: state.counter, counter2: state.counter2 };
  }
};

const ComplexCounter3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count - {count.counter}</p>

      <button onClick={() => dispatch({ Type: "increment", value: 1 })}>
        Increment by 1
      </button>

      <button onClick={() => dispatch({ Type: "decrement", value: 1 })}>
        Decrement by 1
      </button>

      <br />
      <p>Count - {count.counter2}</p>

      <button onClick={() => dispatch({ Type: "increment2", value: 1 })}>
        Increment2 by 1
      </button>

      <button onClick={() => dispatch({ Type: "decrement2", value: 1 })}>
        Decrement2 by 1
      </button>
    </div>
  );
};

export default ComplexCounter3;
