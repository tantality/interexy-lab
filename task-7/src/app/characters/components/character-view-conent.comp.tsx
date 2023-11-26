import { Button, Stack } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import SmartCharacterCard from "./smart-character-card.comp";

const CharacterViewContent: FC = () => {
  const { characterId: characterIdParam } = useParams();
  const characterId = Number(characterIdParam);

  return (
    <section className="character-view-content">
      <Stack rowGap="50px" alignItems="center">
        <SmartCharacterCard key={characterId} characterId={characterId} />
        <Button href="/characters" variant="outlined" size="large" sx={{ border: "1px solid black", color: "black" }}>
          All characters
        </Button>
      </Stack>
    </section>
  );
};

export default CharacterViewContent;
