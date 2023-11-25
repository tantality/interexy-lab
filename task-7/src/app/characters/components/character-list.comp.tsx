import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";
import { Character } from "types";
import CharacterCards from "./character-cards.comp";

const CharacterList: FC = () => {
  const characters: Character[] = [{
    id: 361,
    name: "Toxic Rick",
    status: "Dead",
    species: "Humanoid",
    type: "Rick's Toxic Side",
    gender: "Male",
    origin: {
      name: "Alien Spa",
      url: "https://rickandmortyapi.com/api/location/64"
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/27"
    ],
    url: "https://rickandmortyapi.com/api/character/361",
    created: "2018-01-10T18:20:41.703Z",
  }
  ];

  return (
    <section className="character-list">
      <Stack alignItems="center" spacing="50px">
        <CharacterCards characters={characters} />
        <Pagination />
      </Stack>
    </section>
  )
}

export default CharacterList;