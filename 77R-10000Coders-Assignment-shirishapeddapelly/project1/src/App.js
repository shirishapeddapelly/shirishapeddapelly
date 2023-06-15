import "./App.css";

import React from "react";
// import Calculator from "./CALCULATER/Caculator";
// import Weather from "./WEATHER/Weather";
// import Todolist from "./TODO LIST/Todolist";
// import { HeadsAndTailes } from "./HEADSANDTAILES/HeadsAndTailes";
// import { HeadTailGame } from "./HEADSANDTAILES/HeadsAndTailes";
//import { FruitSelectDropdown } from "./HEADSANDTAILES/HeadsAndTailes";

import APPRouter from "./TOUCH UI/APPROUTER/APPRouter";
import Page1 from "./TOUCH UI/page1";
import Combinationof1and2 from "./TOUCH UI/Combinationof1and2";
class App extends React.Component {
  render() {
    return (
      <>
        {/* <Calculator />
        <Weather />
        <Todolist /> */}
        {/* <HeadsAndTailes /> */}
        {/* <HeadTailGame /> */}
        {/* <FruitSelectDropdown /> */}
        <Combinationof1and2 />
        <APPRouter />
        {/* <Page1 /> */}
      </>
    );
  }
}
export default App;
