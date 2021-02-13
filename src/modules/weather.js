async function openWeather() {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=e6f480d766a5c383c3c37252cc5674e2', { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData.weather[0]['description']);
}

export default openWeather();
