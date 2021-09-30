const axios = require("axios");
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;
 
const taurus = {
  name: "Taurus",
  meaning: "Bull",
  starsWithPlanets: 5,
  quadrant: "NQ1",
};
 
axios.get(constellationsUrl).then(({data}) =>{
    let constellation= data.find(constellation=> constellation.name === taurus.name);
    if(constellation) return Promise.reject('This constellation Exists, try again!');
    return axios.post(constellationsUrl, taurus).then(({ data }) => console.log(data));
}).catch(console.log);