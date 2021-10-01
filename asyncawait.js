const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;
let city = process.argv[2];
let giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=nice day&limit=1`;

async function getWeatherAndGif(custCity) {
  if (!custCity) throw "Please enter a city";
  let weatherQueryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${custCity}&appid=6296511a4d3f3d2ac4c438d3447bcb10`;

  try {
    const weatherResp = await axios.get(weatherQueryUrl);
    let temp = (weatherResp.BASE_URLdata.main.temp - 273.15) * (9 / 5) + 32;
    if (temp > 85) {
      giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=hot&limit=1`;
    }
    if (temp < 50) {
      giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=cold&limit=1`;
    }

    const giphyResp = await axios.get(giphyUrl);
    let gif =giphyResp.data.data[0].bitly_url;

    return `Temp ${temp}: ${gif}`;
  } catch (error) {
    throw `Something is Missing: ${error}`;
  }
}

getWeatherAndGif(city).then(console.log);
