import CenteredLoader from "components/centered-loader.comp";
import { useAsync } from "hooks";
import rickAndMortyClient from "providers/rick-and-morty.client";
import { Character } from "providers/types/character.types";
import { FC } from "react";
import CharacterCard from "./character-card.comp";

interface SmartCharacterCardProps {
  characterId: number;
}

const SmartCharacterCard: FC<SmartCharacterCardProps> = ({ characterId }) => {
  const { data: character, isLoading } = useAsync<Character>(() => rickAndMortyClient.getCharacter(characterId), [characterId]);

  if (isLoading) {
    return <CenteredLoader />
  }

  return (
    <>
      {character && <CharacterCard character={character} imgHeight="450px" cardMaxWidth="450px" key={characterId} />}
    </>
  );
};

export default SmartCharacterCard;