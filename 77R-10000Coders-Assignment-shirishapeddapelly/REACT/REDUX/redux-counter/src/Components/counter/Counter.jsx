import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Increment,
  Decrement,
  Reset,
} from "../../redux-components/action -creators/ActionCreators";

const Counter = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  console.log(storeData);
  return (
    <div>
      <h1>Count:{storeData.counterData.count}</h1>
      <button className="btn btn-info" onClick={() => dispatch(Increment())}>
        Increment
      </button>
      <br />
      <br />
      <button className="btn btn-info" onClick={() => dispatch(Decrement())}>
        Decrement
      </button>
      <br />
      <br />
      <button className="btn btn-info" onClick={() => dispatch(Reset())}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
