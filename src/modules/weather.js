import giphy from './gif';

function buildDisplay(location, description, humidity, pressure, celsius, fahrenheit, icon) {
  const display = document.getElementById('display');
  display.innerHTML = `<div class = 'location'>
  ${location}
  </div>
  <div class= 'temp'>
  ${celsius}&#176;
  </div>
  <div class= 'description'>
  ${description}
  </div>
  <div class= 'pressure'>
  ${pressure}
  </div>
  <img class= 'icon' src="http://openweathermap.org/img/wn/${icon}@2x.png">
  `;
}

function extractWeather(weatherData) {
  const description = weatherData.weather[0].description;
  const humidity = weatherData.main.humidity;
  const pressure = (weatherData.main.pressure / 3386 * 100).toFixed(2) + '"';
  const celsius = Math.round(weatherData.main.temp - 273.15);
  const fahrenheit = Math.round(celsius * 1.8 + 32);
  const icon = weatherData.weather[0].icon;
  const location = weatherData.name;
  buildDisplay(location, description, humidity, pressure, celsius, fahrenheit, icon);
}

async function openWeather() {
  let search = document.getElementById('winput').value;
  let error = document.getElementById('error');
  if (!search) search = 'Tokyo';
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e6f480d766a5c383c3c37252cc5674e2`, {
      mode: 'cors',
    });
    const weatherData = await response.json();
    extractWeather(weatherData);
    giphy(weatherData.weather[0].description);
  } catch {
    error.innerHTML = `Please try another city, "${search}" is not a valid option.`;
  }
}


window.weatherButton = function() {
  openWeather();
};

openWeather();

export default {
  openWeather,
  weatherButton
};
