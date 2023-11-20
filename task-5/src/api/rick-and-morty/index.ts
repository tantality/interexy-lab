import { axiosInstance } from "./axios";
import { AllCharacters, GetAllCharactersParams } from "src/api/rick-and-morty/types/all-characters.types";

class RickAndMortyApi {
  async getAllCharacters(params: GetAllCharactersParams = {}): Promise<AllCharacters> {
    const res = await axiosInstance.get<AllCharacters>(`character/`, { params });
    return res.data;
  }
}

export default new RickAndMortyApi();
