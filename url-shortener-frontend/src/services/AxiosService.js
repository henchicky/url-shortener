import axios from "axios";

const BACKEND_URL_LOCAL = "http://localhost:62762/url/";
const BACKEND_URL_PRODUCTION =
  "https://url-shortener-dotnet.herokuapp.com/url/";

const AxiosService = axios.create({
  baseURL: BACKEND_URL_PRODUCTION,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosService;
