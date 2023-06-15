// //
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plot } from "./Plot";
function WeatherComponent() {
  const [city, setCity] = useState("");
  const weatherSelector = useSelector((state) => state);
  const dispatch = useDispatch();
  const getWeatherinfoAction = (city) => dispatch(Plot(city));
  const getWeatherinfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("no of search city");
    } else {
      console.log(city);
      getWeatherinfoAction(city);
    }
  };
  useEffect(() => {
    getWeatherinfoAction(city);
  }, [city]);
  console.log(weatherSelector);
  return (
    <div className="App">
      <center>
        <h1> weatherApp</h1>

        <main>
          <p> The main content</p>
          <form onSubmit={getWeatherinfo}>
            <div className="control">
              <input
                type="text"
                name="name"
                placeholder="enter a city name..."
                onChange={(e) => setCity(e.target.value)}
              />
              <button onClick={() => dispatch()}>search</button>
            </div>
          </form>
        </main>
        {weatherSelector.WeatherReducer.data ? (
          weatherSelector.WeatherReducer.data.name ? (
            <div>
              <div>city name:{weatherSelector.WeatherReducer.data.name}</div>
              <div>
                Temperature:{" "}
                {weatherSelector.WeatherReducer.data.main.temp - 273 + "°c"}
              </div>
              {/* <div>
                Country:{weatherSelector.WeatherReducer.data.sys.country}
              </div> */}
              <div>
                wind speed:{weatherSelector.WeatherReducer.data.wind.speed}
              </div>
              <div>
                Humidity:{weatherSelector.WeatherReducer.data.main.humidity}
              </div>
            </div>
          ) : (
            <h5>Data Not found</h5>
          )
        ) : (
          <h6>not found</h6>
        )}
      </center>
    </div>
  );
}

export default WeatherComponent;
