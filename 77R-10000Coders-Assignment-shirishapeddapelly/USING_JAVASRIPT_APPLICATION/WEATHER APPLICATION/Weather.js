const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
// const search = document.querySelector("#search");
// const weather = document.querySelector("#weather");
const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  weather.innerHTML = `
    <div>
      <h2>temperature:${data.main.temp}. ℃</h2>
      <h2>humidity:${data.main.humidity}</h2>
      <h2>wind speed:${data.wind.speed}</h2>
      <h2>latitude:${data.coord.lat}</h2>
      <h2>longitude:${data.coord.lon}</h2>
    </div>
  `;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
