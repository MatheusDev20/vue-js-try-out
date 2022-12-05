import axios from "axios";

const DeezerAPI = axios.create({
  baseURL: "https://api.deezer.com/",
});

export default DeezerAPI;
