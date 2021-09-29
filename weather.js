const axios = require('axios');
let city = process.argv[2];

let queryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6296511a4d3f3d2ac4c438d3447bcb10`;

axios.get(queryUrl).then(resp=>{
    let temp = resp.data.main.temp;
    temp = (temp - 273.15) * (9/5) + 32;
    let humidity = resp.data.main.humidity
    console.log(`The temp in ${city} is ${temp}F and the humidity is ${humidity}`);
});