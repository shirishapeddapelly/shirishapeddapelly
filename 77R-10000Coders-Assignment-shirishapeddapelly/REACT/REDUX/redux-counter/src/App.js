import TODOLIST from "./Components/Todolistcomponent/TODOLIST";
import WeatherComponent from "./Components/WeatherComponent/WeatherComponent";
import Calculater from "./Components/CalculaterComponent/Calculater";
function App() {
  return (
    <div className="App">
      <TODOLIST />
      <WeatherComponent />
      {/* <Calculater /> */}
    </div>
  );
}
export default App;
