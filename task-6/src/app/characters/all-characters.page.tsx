import { Center, Container, Pagination, Space } from "@mantine/core";
import React from "react";
import rickAndMortyClient from "../providers/rick-and-morty.client";
import { Character } from "../providers/types/character.types";
import CharacterList from "./components/character-list/character-list.component";

interface AllСharactersPageState {
  characters: Character[];
  currentPage: number;
  pageCount: number;
}


class AllСharactersPage extends React.Component<any, AllСharactersPageState> {
  constructor(props: any) {
    super(props);

    this.state = {
      characters: [],
      currentPage: 1,
      pageCount: 0,
    }

    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.updatePageCount = this.updatePageCount.bind(this);
    this.updateCharacters = this.updateCharacters.bind(this);
  }

  async componentDidMount(): Promise<void> {
    const currentPage = this.state.currentPage;
    const charactersWithPageInfo = await rickAndMortyClient.getAllCharacters({ page: currentPage });

    const characters = charactersWithPageInfo.results;
    const pageCount = charactersWithPageInfo.info.pages;

    this.updatePageCount(pageCount);
    this.updateCharacters(characters)
  }

  async componentDidUpdate(prevProps: any, prevState: AllСharactersPageState) {
    if (prevState.currentPage !== this.state.currentPage) {
      const charactersWithPageInfo = await rickAndMortyClient.getAllCharacters({ page: this.state.currentPage });
      const characters = charactersWithPageInfo.results;
      this.updateCharacters(characters)
    }
  }

  updateCurrentPage = (pageNumber: number) => {
    this.setState((state) => ({
      ...state,
      currentPage: pageNumber
    }))
  }

  updatePageCount = (pageCount: number) => {
    this.setState((state) => ({
      ...state,
      pageCount
    }))
  }

  updateCharacters = (characters: Character[]) => {
    this.setState((state) => ({
      ...state,
      characters
    }))
  }

  render() {
    const { characters, currentPage, pageCount } = this.state;

    return (
      <Container size="lg" px={30} py="lg">
        <CharacterList characters={characters} />
        <Space h="xl" />
        <Center>
          <Pagination total={pageCount} value={currentPage} onChange={this.updateCurrentPage} />
        </Center>
      </Container>
    );
  }
}

export default AllСharactersPage;