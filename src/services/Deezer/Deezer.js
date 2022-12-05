import DeezerAPI from "./api";

const DeezerService = {
  async searchTrack(trackName) {
    const response = await DeezerAPI.get(`search?q=track:"${trackName}"`);
    console.log(response);
  },
};

export default DeezerService;
