import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import { useAsync } from "hooks";
import rickAndMortyClient from "providers/rick-and-morty.client";
import { CharactersWithPaginationData } from "providers/types/all-characters.types";
import { ChangeEvent, FC, useState } from "react";
import CharacterCards from "./character-cards.comp";

const CharacterList: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number | null>(null);

  const { data: charactersWithPaginationInfo } = useAsync<CharactersWithPaginationData>(
    () => rickAndMortyClient.getAllCharacters({ page: currentPage }),
    [currentPage]
  );

  if (!pageCount && charactersWithPaginationInfo) {
    const pageCount = charactersWithPaginationInfo.info.pages;
    setPageCount(pageCount);
  }

  const characters = charactersWithPaginationInfo?.results;

  return (
    <section className="character-list">
      <Stack alignItems="center" spacing="50px">
        {characters && characters.length && <CharacterCards characters={characters} />}
        {pageCount && <Pagination onChange={(event: ChangeEvent<unknown>, page: number) => setCurrentPage(page)} page={currentPage} count={pageCount} />}
      </Stack>
    </section>
  )
}

export default CharacterList;