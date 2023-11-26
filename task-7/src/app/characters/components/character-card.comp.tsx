import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import HighlightedTextFragment from "components/highlighted-text-fragment.comp";
import { Character } from "providers/types/character.types";
import { FC } from "react";

interface CharacterCardProps {
  character: Character;
  cardMaxWidth?: string;
  imgHeight?: string;
}

const CharacterCard: FC<CharacterCardProps> = ({ character, cardMaxWidth, imgHeight }) => {
  const { image, name, status, species, gender, location, origin } = character;

  const descriptionTextProps = {
    fontSize: "1.2rem"
  };

  return (
    <Card sx={{ maxWidth: cardMaxWidth ?? null, minWidth: "300px" }}>
      <CardMedia image={image} title={name} sx={{ height: imgHeight ?? "300px" }} />
      <CardContent>
        <Stack rowGap="8px">
          <Typography variant="h3" sx={{ fontSize: "1.5rem", fontWeight: 600 }}>
            {name}
          </Typography>
          <Box>
            <Typography sx={descriptionTextProps}>
              <HighlightedTextFragment>Status:</HighlightedTextFragment>
              {status}
            </Typography>
            <Typography sx={descriptionTextProps}>
              <HighlightedTextFragment>Species:</HighlightedTextFragment>
              {species}
            </Typography>
            <Typography sx={descriptionTextProps}>
              <HighlightedTextFragment>Gender:</HighlightedTextFragment>
              {gender}
            </Typography>
            <Typography sx={descriptionTextProps}>
              <HighlightedTextFragment>Origin location:</HighlightedTextFragment>
              {location.name}
            </Typography>
            <Typography sx={descriptionTextProps}>
              <HighlightedTextFragment>Current location:</HighlightedTextFragment>
              {origin.name}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;