import axios from "axios";

const bostaAxios = axios.create({
  // TODO: add base url for development and production
  // set token for Authorization
});

export default bostaAxios;
