import RickAndMortyApi from "api/rick-and-morty";
import { CharactersWithPaginationData } from "api/rick-and-morty/types/all-characters.types";
import { Character } from "api/rick-and-morty/types/character.types";

interface Page {
  step: number;
  count: number;
}

async function main(): Promise<void> {
  try {
    const charactersWithPagination: CharactersWithPaginationData = await RickAndMortyApi.getAllCharacters();
    const characterPageCount = charactersWithPagination.info.pages;
    const data: Page = { step: 2, count: characterPageCount };
    const characterPages: CharactersWithPaginationData[] = await getCharacterPages(data);

    const characters: Character[] = getCharacters(characterPages);
    console.log(characters);
  } catch (error: any) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

async function getCharacterPages(data: Page): Promise<CharactersWithPaginationData[]> {
  const { step, count } = data;
  const characterPagePromises: Promise<CharactersWithPaginationData>[] = [];

  for (let i = step; i <= count; i += step) {
    const promise = RickAndMortyApi.getAllCharacters({ page: i });
    characterPagePromises.push(promise);
  }

  return Promise.all(characterPagePromises);
}

function getCharacters(characterPages: CharactersWithPaginationData[]): Character[] {
  const characters: Character[] = [];

  for (let page of characterPages) {
    characters.push(...page.results);
  }

  return characters;
}

main();
