import { Grid } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { Character } from "../../../providers/types/character.types";
import CharacterCard from "../character-card/character-card.component";

class CharacterList extends React.Component<{ characters: Character[] }> {
  render() {
    const { characters } = this.props;
    const characterCards = characters.map((character) => {
      return (
        <Grid.Col style={{ maxWidth: '350px' }} key={character.id}>
          <Link to={`/characters/${character.id}`}>
            <CharacterCard {...character} imageHeight={260} />
          </Link>
        </Grid.Col>
      )
    });

    return (
      <Grid grow justify="center" >
        {characterCards}
      </Grid>
    );
  }
}

export default CharacterList;


