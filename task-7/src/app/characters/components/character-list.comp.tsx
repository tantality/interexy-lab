import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import CenteredLoader from "components/centered-loader.comp";
import ErrorScreen from "components/error-screen.comp";
import { useAsync } from "hooks";
import rickAndMortyClient from "providers/rick-and-morty.client";
import { CharactersWithPaginationData } from "providers/types/all-characters.types";
import { ChangeEvent, FC, useState } from "react";
import CharacterCards from "./character-cards.comp";

const CharacterList: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number | null>(null);

  const { data: charactersWithPaginationInfo, isLoading, error } = useAsync<CharactersWithPaginationData>(
    () => rickAndMortyClient.getAllCharacters({ page: currentPage }),
    [currentPage]
  );

  if (isLoading) {
    return <CenteredLoader />;
  }

  if (error) {
    return <ErrorScreen error={error} />
  }

  if (!pageCount && charactersWithPaginationInfo) {
    const pageCount = charactersWithPaginationInfo.info.pages;
    setPageCount(pageCount);
  }

  const handleCurrentPageChange = (event: ChangeEvent<unknown>, page: number): void => {
    setCurrentPage(page);
  };

  const characters = charactersWithPaginationInfo?.results;

  return (
    <section className="character-list">
      <Stack alignItems="center" spacing="50px">
        {characters?.length && <CharacterCards characters={characters} />}
        {pageCount && <Pagination onChange={handleCurrentPageChange} page={currentPage} count={pageCount} size="large" />}
      </Stack>
    </section>
  );
};

export default CharacterList;
