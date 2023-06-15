import React, { useState } from "react";

const Weather = () => {
  // const [city, setCity] = useState("");
  const [lat, setlatitude] = useState("");
  const [lon, setlongitude] = useState("");
  const [result, setResult] = useState("");
  // const changeHandler = (e) => {
  //   setCity(e.target.value);
  // };
  const changeHandle = (e) => {
    setlatitude(e.target.value);
  };
  const changeHandl = (e) => {
    setlongitude(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const humidity1 = data.main.humidity;
        const wind1 = data.wind.speed;

        const celcius = kelvin - 273.15;
        setResult(
          "Temperature at longitude:" +
            lon +
            "," +
            "latitude: " +
            lat +
            "," +
            "is" +
            "\n" +
            Math.round(celcius) +
            "°C " +
            "humidity:" +
            humidity1 +
            "," +
            "wind:" +
            wind1
        );
      })
      .catch((error) => console.log(error));
    // setCity("");
    setlatitude("");
    setlongitude("");
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={submitHandler}>
              {/* <input
                size="30"
                type="text"
                name="city"
                onChange={changeHandler}
                value={city}
              />{" "} */}
              <br />
              <input
                size="30"
                type="text"
                placeholder="latitude"
                name="latitude"
                onChange={changeHandle}
                value={lat}
              />{" "}
              <br />
              <input
                size="30"
                type="text"
                name="longitude"
                placeholder="longitude"
                onChange={changeHandl}
                value={lon}
              />{" "}
              <br />
              <input type="submit" value="Get Temperature" />
            </form>
            <br /> <br />
            <div>
              <h1>{result}</h1>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Weather;
