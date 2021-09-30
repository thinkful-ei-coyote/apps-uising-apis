const axios = require('axios');
let city = process.argv[2];
let weatherQueryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6296511a4d3f3d2ac4c438d3447bcb10`;
let giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=batman&limit=1`;


axios.get(weatherQueryUrl).then(({data})=>{
    let temp = (data.main.temp - 273.15) * (9/5) + 32;
    return temp;
}).then(cityTemp=>{
    let giphyUrl=`https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=nice day&limit=1`
    if(cityTemp > 85){
    giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=hot&limit=1`;
    } 
    if(cityTemp<50){
        giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=cold&limit=1`;
    }
    axios.get(giphyUrl).then(resp=> console.log(`Temp ${cityTemp}: ${resp.data.data[0].bitly_url}`))
})