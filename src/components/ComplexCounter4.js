import React from 'react';
import {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        default :
            return state;
    }
};

const ComplexCounter4 = () => {
    const [count, dispatch] = useReducer( reducer, initialState );
    const [count2, dispatch2] = useReducer( reducer, initialState );
    return (
        <div>
            <p>Count - {count}</p>
            <button onClick={()=>dispatch("increment")}>Increment</button>
            <button onClick={()=>dispatch("decrement")}>Decrement</button>

            <p>Count - {count2}</p>
            <button onClick={()=>dispatch2("increment")}>Increment</button>
            <button onClick={()=>dispatch2("decrement")}>Decrement</button>
        </div>
    );
};

export default ComplexCounter4;