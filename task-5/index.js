import RickAndMortyApi from "./api/rick-and-morty/index.js";

async function main() {
  try {
    const charactersData = await RickAndMortyApi.getAllCharacters();
    const characterPageCount = charactersData.info.pages;
    const pagesData = { step: 2, count: characterPageCount };
    const characterPages = await getCharacterPages(pagesData);

    const characters = getCharacters(characterPages);
    console.log(characters);
  } catch (e) {
    console.log(e.message);
  }
}

async function getCharacterPages(pagesData) {
  const { step, count } = pagesData;
  const characterPagePromises = [];

  for (let i = step; i <= count; i += step) {
    const promise = RickAndMortyApi.getAllCharacters({ page: i });
    characterPagePromises.push(promise);
  }

  return await Promise.all(characterPagePromises);
}

function getCharacters(characterPages) {
  const characters = [];

  for (let page of characterPages) {
    characters.push(...page.results);
  }

  return characters;
}

main();
