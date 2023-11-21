import { axiosInstance } from "./rick-and-morty.axios-instance";
import { GetAllCharactersWithPageInfoParams, CharactersWithPaginationData } from "./types/all-characters.types";

class RickAndMortyApi {
  async getAllCharacters(params: GetAllCharactersWithPageInfoParams = {}): Promise<CharactersWithPaginationData> {
    const res = await axiosInstance.get<CharactersWithPaginationData>(`character/`, { params });
    return res.data;
  }
}

export default new RickAndMortyApi();
