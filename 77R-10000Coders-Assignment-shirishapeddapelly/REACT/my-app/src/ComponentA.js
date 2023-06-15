import React, { useContext } from "react";
import { store } from "./App";

const ComponentA = () => {
  const [data, setData] = useContext(store);
  return (
    <center>
      <div>Component A value= {data}</div>
    </center>
  );
};

export default ComponentA;
