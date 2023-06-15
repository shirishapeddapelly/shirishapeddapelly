import React, { useContext } from "react";
import { store } from "./App";
const ComponentB = () => {
  const [data, setData] = useContext(store);
  return (
    <center>
      <div>Component B value= {data} </div>
    </center>
  );
};

export default ComponentB;
