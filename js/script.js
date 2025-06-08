async function getWeather() {
  const apiKey = "886e80809c613062d67c25b258bf1249";
  const city = "Lviv";
  const lat = 49.8397;
  const lon = 24.0297;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.8397&lon=24.0297&units=metric&appid=886e80809c613062d67c25b258bf1249`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;

    document.getElementById(
      "weather"
    ).innerText = `In the city ${city} now ${temp}°C, ${desc}`;
  } catch (error) {
    document.getElementById("weather").innerText = "Error retrieving weather";
  }
}
getWeather();
