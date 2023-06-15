import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "../page1";
import Page2 from "../page2";
import Page3 from "../page3";
import Page4 from "../page4";
import Page5 from "../page5";
import Page6 from "../page6";
import Page7 from "../page7";
import Page8 from "../page8";
import Page9 from "../page9";
import Page10 from "../page10";
import Page11 from "../page11";
const APPRouter = () => {
  return (
    <Routes>
      <Route Path to="/" element={<Page1 />}></Route>
      <Route path="/2" element={<Page2 />}></Route>
      <Route path="/3" element={<Page3 />}></Route>
      <Route path="/4" element={<Page4 />}></Route>
      <Route path="/5" element={<Page5 />}></Route>
      <Route path="/6" element={<Page6 />}></Route>
      <Route path="/7" element={<Page7 />}></Route>
      <Route path="/8" element={<Page8 />}></Route>
      <Route path="/9" element={<Page9 />}></Route>
      <Route path="/10" element={<Page10 />}></Route>
      <Route path="/11" element={<Page11 />}></Route>
    </Routes>
  );
};
export default APPRouter;
