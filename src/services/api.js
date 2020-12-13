import axios from 'axios';

const rootURL = 'https://swapi.dev/api'; 

const api = {
    planets: {
      getPlanets: page => axios.get(`${rootURL}/planets/?page=${page}`),
    },
  };
  
  export default api;
  