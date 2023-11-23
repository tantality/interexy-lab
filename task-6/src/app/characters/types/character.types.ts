import { Character } from "../../../providers/types/character.types";
import { FetchData } from "../../../types";

export interface СharacterPageState extends FetchData {
  character: Character | null;
}
