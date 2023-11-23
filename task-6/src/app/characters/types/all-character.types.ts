import { Character } from "../../../providers/types/character.types";
import { FetchData } from "../../../types";

export interface AllСharactersPageState extends FetchData {
  characters: Character[];
  currentPage: number;
  pageCount: number | null;
}
