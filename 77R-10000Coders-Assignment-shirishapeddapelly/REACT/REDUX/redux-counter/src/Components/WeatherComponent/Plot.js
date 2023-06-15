export function Plot(city) {
  return function (dispatch) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5c53a519f75fe0db7194d23108b2b03`
    )
      .then((res) => {
        return res.json();
      })
      .then((JSONres) => {
        dispatch({ type: "FETCH_WEATHER", payload: JSONres });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
