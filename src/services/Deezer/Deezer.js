import DeezerAPI from "./api";

const DeezerService = {
  async searchTrack(trackName) {
    const response = await DeezerAPI.get(`?track=${trackName}"`);
    return response;
  },
};

export default DeezerService;
