import { Grid } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Character } from "types";
import CharacterCard from "./character-card.comp";

interface CharacterCardsProps {
  characters: Character[]
}

const CharacterCards: FC<CharacterCardsProps> = ({ characters }) => {
  return (
    <div className="character-cards" style={{ 'width': '100%' }}>
      <Grid container display="grid" gap="20px" gridTemplateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}>
        {characters.map(character => {
          const characterId = character.id;
          return (
            <Grid item key={characterId}>
              <Link to={`/characters/${characterId}`}>
                <CharacterCard character={character} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}

export default CharacterCards;