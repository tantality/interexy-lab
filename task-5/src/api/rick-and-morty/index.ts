import { axiosInstance } from "api/rick-and-morty/axios";
import { CharactersWithPaginationData, GetCharactersWithPaginationDataParams } from "api/rick-and-morty/types/all-characters.types";

class RickAndMortyApi {
  async getAllCharacters(params: GetCharactersWithPaginationDataParams = {}): Promise<CharactersWithPaginationData> {
    const res = await axiosInstance.get<CharactersWithPaginationData>(`character/`, { params });
    return res.data;
  }
}

export default new RickAndMortyApi();
