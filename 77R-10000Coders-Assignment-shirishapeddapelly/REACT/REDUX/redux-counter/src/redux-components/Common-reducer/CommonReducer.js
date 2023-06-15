import { combineReducers } from "redux";
import { TodoListReducer } from "../counter-reducer/TodoListReducer";
import { WeatherReducer } from "../counter-reducer/WeatherReducer";
import { CalculaterReducer } from "../counter-reducer/CalculaterReducer";
export const reducer = combineReducers({
  TodoListReducer,
  // counterData: CounterReducer,
  WeatherReducer: WeatherReducer,
  // calculaterData: CalculaterReducer,
});
