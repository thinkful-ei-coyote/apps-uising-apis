const axios = require('axios');
const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;



function getConstellations(ids) {
    const promises = ids.map((id) => {
      const url = `${BASE_URL}/constellations/${id}`;
      return axios.get(url);
    });
   console.log(promises);
    return Promise.all(promises);
  }
   
  const ids = ["KGQIwSq", "32TN5F8"];
  getConstellations(ids).then(responses=>{
      console.log(responses.length);
      for( let response of responses){
          console.log(response.data);
      }
  });
  