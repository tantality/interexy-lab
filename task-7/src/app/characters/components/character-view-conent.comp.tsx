import { Button, Stack } from "@mui/material";
import { useAsync } from "hooks";
import rickAndMortyClient from "providers/rick-and-morty.client";
import { Character } from "providers/types/character.types";
import { FC } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "./character-card.comp";

const CharacterViewContent: FC = () => {
  const { characterId: characterIdParam } = useParams();
  const characterId = Number(characterIdParam);

  const { data: character } = useAsync<Character>(() => rickAndMortyClient.getCharacter(characterId), [characterId]);

  return (
    <section className="character-view-content">
      <Stack rowGap="50px" alignItems="center">
        {character && <CharacterCard character={character} imgHeight="450px" cardMaxWidth="450px" key={characterId} />}
        <Button href="/characters" variant="outlined" size="large" sx={{ border: "1px solid black", color: "black" }}>
          All characters
        </Button>
      </Stack>
    </section>
  );
};

export default CharacterViewContent;
