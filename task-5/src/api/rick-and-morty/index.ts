import { axiosInstance } from "./axios";

class RickAndMortyApi {
  async getAllCharacters(params = {}) {
    const res = await axiosInstance.get(`character/`, { params });
    return res.data;
  }
}

export default new RickAndMortyApi();
