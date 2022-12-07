import axios from "axios";

const DeezerAPI = axios.create({
  baseURL: "http://localhost:8080",
});

export default DeezerAPI;
