import { Grid } from "@mantine/core";
import React from "react";
import CharacterCard from "../character-card/character-card.component";

const mockCharacters = [
  {
    id: 1,
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    gender: 'Male',
    status: 'Alive',
    species: 'Human',
  },
  {
    id: 2,
    img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith',
    gender: 'Unknown',
    status: 'Dead',
    species: 'Human',
  },
]


class CharacterList extends React.Component {
  render() {
    const characterCards = mockCharacters.map((data) => {
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


