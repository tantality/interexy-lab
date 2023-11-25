import { Character } from "./character.types";

export interface GetAllCharactersWithPageInfoParams {
  page?: number;
}

export interface CharactersWithPaginationData {
  info: PageInfo;
  results: Character[];
}

interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
