import { Container, Button, Space, Flex, Anchor } from "@mantine/core";
import { AxiosError } from "axios";
import React from "react";
import rickAndMortyClient from "../providers/rick-and-morty.client";
import { Character } from "../providers/types/character.types";
import CharacterCard from "./components/character-card/character-card.component";

interface FetchData {
  isLoading: boolean;
  error: null | AxiosError | Error;
}

interface СharacterPageState extends FetchData {
  character: Character | null;
}

class СharacterPage extends React.Component<{}, СharacterPageState> {
  constructor(props: never) {
    super(props);

    this.state = {
      character: null,
      isLoading: false,
      error: null
    }

  }

  async fetchCharacter(id: number) {
    this.setState({ ...this.state, isLoading: true });
    try {
      const character = await rickAndMortyClient.getCharacter(id);
      this.setState({ ...this.state, character, isLoading: false, error: null });
    } catch (error: unknown) {
      this.setState({ ...this.state, isLoading: false });
      if (error instanceof AxiosError) {
        this.setState({ ...this.state, error });
      }

      if (error instanceof Error) {
        this.setState({ ...this.state, error });
      }
    }
  }

  async componentDidMount() {
    const characterId = Number(window.location.href.split('/')[4]);
    await this.fetchCharacter(characterId)
  }

  async componentDidUpdate(prevProps: any, prevState: СharacterPageState) {
    const curCharacter = this.state.character;
    const prevCharacter = prevState.character;

    if (!curCharacter || !prevCharacter) {
      return;
    }

    if (prevCharacter.id !== curCharacter.id) {
      await this.fetchCharacter(curCharacter.id)
    }
  }

  render() {
    const { character } = this.state;

    return (
      <Container size="lg" px={30} py="lg" h="99vh">
        <Container maw={500}>
          <Flex direction="column" align="center">
            {character && <CharacterCard {...character} />}
            <Space h={70} />
            <Anchor href="/characters">
              <Button variant="outline" color="black" size="md" radius="md">All characters</Button>
            </Anchor>
          </Flex>
        </Container>
      </Container >
    );
  }
}

export default СharacterPage;
