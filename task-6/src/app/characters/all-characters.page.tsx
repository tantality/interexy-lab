import { Center, Container, Loader, Pagination, Space } from "@mantine/core";
import { AxiosError } from "axios";
import React from "react";
import rickAndMortyClient from "../providers/rick-and-morty.client";
import { Character } from "../providers/types/character.types";
import CharacterList from "./components/character-list/character-list.component";

interface FetchData {
  isLoading: boolean;
  error: null | AxiosError | Error;
}

interface AllСharactersPageState extends FetchData {
  characters: Character[];
  currentPage: number;
  pageCount: number | null;
}

class AllСharactersPage extends React.Component<any, AllСharactersPageState> {
  constructor(props: any) {
    super(props);

    this.state = {
      characters: [],
      currentPage: 1,
      pageCount: null,
      isLoading: false,
      error: null
    }

    this.updateCurrentPage = this.updateCurrentPage.bind(this);
  }

  async fetchAllCharactersWithPageData({ page }: { page: number }) {
    this.setState({ ...this.state, isLoading: true });
    try {
      const charactersWithPageInfo = await rickAndMortyClient.getAllCharacters({ page });
      const characters = charactersWithPageInfo.results;
      this.setState({ ...this.state, characters, isLoading: false, error: null });

      if (!this.state.pageCount) {
        const pageCount = charactersWithPageInfo.info.pages;
        this.setState((state) => ({ ...state, pageCount }));
      }

      return charactersWithPageInfo;
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
    await this.fetchAllCharactersWithPageData({ page: this.state.currentPage })
  }

  async componentDidUpdate(prevProps: any, prevState: AllСharactersPageState) {
    if (prevState.currentPage !== this.state.currentPage) {
      await this.fetchAllCharactersWithPageData({ page: this.state.currentPage })
    }
  }

  updateCurrentPage = (pageNumber: number) => {
    this.setState((state) => ({
      ...state,
      currentPage: pageNumber
    }))
  }

  render() {
    const { characters, currentPage, pageCount, isLoading, error } = this.state;

    if (error) {
      return <div>Error</div>
    }

    const loader = (<Center><Loader /></Center>);
    const content = isLoading ? loader : <CharacterList characters={characters} />;
    const pagination = (pageCount && <Pagination total={pageCount} value={currentPage} onChange={this.updateCurrentPage} />)

    return (
      <Container size="lg" px={30} py="lg">
        {content}
        <Space h="xl" />
        <Center>
          {pagination}
        </Center>
      </Container>
    );
  }
}

export default AllСharactersPage;