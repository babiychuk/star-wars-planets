import axios from "axios";

const rootURL = "https://swapi.dev/api";

const api = {
  planets: {
    getPlanets: (page) => axios.get(`${rootURL}/planets/?page=${page}`),
    singlePlanet: (url) => axios.get(`${url}`),
  },
  resident: {
    getResident: (url) => axios.get(`${url}`),
  },
};

export default api;
