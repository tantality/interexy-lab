import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import { Character } from "types";

interface CharacterCardProps {
  character: Character;
  cardMaxWidth?: string;
  imgHeight?: string;
}

const CharacterCard: FC<CharacterCardProps> = ({ character, cardMaxWidth, imgHeight }) => {
  const { image, name } = character;

  return (
    <Card sx={{ maxWidth: cardMaxWidth ?? null, minWidth: '300px' }}>
      <CardMedia image={image} title={name} sx={{ height: imgHeight ?? '350px' }} />
      <CardContent>
        <Typography variant="h3">{name}</Typography>
      </CardContent>
    </Card >
  );
}

export default CharacterCard;