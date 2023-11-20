import { Character } from "./character.types";

export interface GetCharactersWithPaginationDataParams {
  page?: number;
}

export interface CharactersWithPaginationData {
  info: Info;
  results: Character[];
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
