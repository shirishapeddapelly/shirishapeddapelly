import React, { useReducer } from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + action.payload;

      case "DECREMENT":
        return state - action.payload;

      case "RESET":
        return action.payload;

      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Counter : {count} </h1>
      <button
        className="btn btn-info ms-2"
        onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}
      >
        Increment 1
      </button>
      <button
        className="btn btn-info ms-2"
        onClick={() => dispatch({ type: "DECREMENT", payload: 3 })}
      >
        Decrement
      </button>

      <button
        className="btn btn-info ms-2"
        onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}
      >
        Increment 2
      </button>
      <button
        className="btn btn-info ms-2"
        onClick={() => dispatch({ type: "RESET", payload: 0 })}
      >
        Reset
      </button>
    </div>
  );
};

export default Reducer;
