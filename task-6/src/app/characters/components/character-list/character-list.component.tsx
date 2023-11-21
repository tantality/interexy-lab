import { Grid } from "@mantine/core";
import React from "react";
import { Character } from "../../../providers/types/character.types";
import CharacterCard from "../character-card/character-card.component";

class CharacterList extends React.Component<{ characters: Character[] }> {
  render() {
    const characterCards = this.props.characters.map((data) => {
      return (
        <Grid.Col style={{ maxWidth: '350px' }} key={data.id}>
          <CharacterCard {...data} />
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


