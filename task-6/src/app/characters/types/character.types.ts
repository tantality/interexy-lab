import { Character } from "providers/types/character.types";
import { FetchData } from "types/index";

export interface СharacterPageState extends FetchData {
  character: Character | null;
}
