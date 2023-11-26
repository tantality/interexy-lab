import { Button, Stack } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

const CharacterViewContent: FC = () => {
  const { characterId } = useParams();

  return (
    <section className="character-view-content">
      <Stack rowGap="30px" alignItems="center">
        character id: {characterId}
        <Button href="/characters" variant="outlined" size="large">All characters</Button>
      </Stack>
    </section>
  );
};

export default CharacterViewContent;
