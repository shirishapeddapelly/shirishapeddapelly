export const WeatherReducer = (
  state = {
    data: [],
  },
  action
) => {
  if ((action.type = "FETCH_WEATHER")) {
    state = { ...state, data: action.payload };
  }
  return state;
};
export default WeatherReducer;
