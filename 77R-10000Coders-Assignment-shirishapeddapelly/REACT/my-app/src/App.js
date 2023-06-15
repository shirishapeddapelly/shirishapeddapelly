// import React, { createContext, useState } from "react";
// import ComponentA from "./ComponentA";
// import ComponentB from "./ComponentB";
// export const store = createContext();

// const App = () => {
//   const [data, setData] = useState(0);
//   return (
//     <>
//       <store.Provider value={[data, setData]}>
//         <ComponentA />
//         <ComponentB />
//         <center>
//           <button onClick={() => setData(data + 1)}>increment</button>
//           <button onClick={() => setData(data - 1)}>decrement</button>
//         </center>
//       </store.Provider>
//     </>
//   );
// };

// export default App;

//import "./App.css";
import REACT from "react";
//import AppRouter from "./components/AppRouter/AppRouter";
//import Header from "./components/Header/Header";
//import FORMS from "./components/FORMS/formvalidation";
//import Mounting from "./components/life-cycle-methods/mountingPhase/mountingPhase";
//import Tablesort from "./components/life-cycle-methods/Sortingtable/SortTable";
//import UpdatingPhase from "./components/life-cycle-methods/updatingPhase/updatingPhase";
//import UpdatingUseEffect from "./components/life-cycle-methods/updatingPhase/UpdatingUseEffect";
import Reducer from "./components/UseReducer/REducer";
/*
import Home from "./components/Home/Home";
import Why from "./components/Why/Why";
import Team from "./components/Team/Team";
import Employeers from "./components/Employeers/employeers";
import Admission from "./components/Admission/Admission";
import Curriculam from "./components/Curriculam/Curriculam";
import Price from "./components/Price/Price";
import Faq from "./components/Faq/Faq";
*/
//import Banner from "./components/Banner/Banner";
//import Content from "./components/content/Content";
//import Footer from "./components/Footer/Footer";
//
//function App() {
//return (
//<div className="App">
//<header className="App-header">
//<img src={logo} className="App-logo" alt="logo" />
//<p>
//Edit <code>src/App.js</code> and save to reload.
//</p>
//<a
//className="App-link"
//href="https://reactjs.org"
//target="_blank"
//rel="noopener noreferrer"
//>
//Learn React
//</a>
//</header>
//</div>
//);
//}

class App extends REACT.Component {
  render() {
    return (
      // <>
      //   <Header />
      //   <Banner />
      //   <Content />
      //   <Footer />
      // </>
      <>
        {/*<Header />*/}

        {/* <AppRouter />
        {/* <FORMS />*/}
        {/* <Mounting /> */}
        {/*<UpdatingPhase/> */}
        {/*<UpdatingUseEffect />*/}
        {/* <Tablesort /> */}

        <Reducer />
      </>
    );
  }
}
export default App;
