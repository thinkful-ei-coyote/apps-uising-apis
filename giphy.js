const axios = require('axios');

let requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=G9t2NdJSwXvmPA8Xr7rKQMp5afwWKkRm&q=batman&limit=1`;

axios.get(requestUrl).then(response=>{
    let giphyJson = response.data.data;
    console.log(giphyJson[0].bitly_url)
});