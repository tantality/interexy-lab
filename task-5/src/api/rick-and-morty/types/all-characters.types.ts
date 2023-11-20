import { Character } from "./character.types";

export interface GetAllCharactersParams {
  page?: number;
}

export interface AllCharacters {
  info: Info;
  results: Character[];
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
