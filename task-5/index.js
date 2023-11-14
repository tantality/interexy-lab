import RickAndMortyApi from "./api/rick-and-morty/index.js";

async function main() {
  try {
    const charactersData = await RickAndMortyApi.getAllCharacters();
    const characterPageCount = charactersData.info.pages;
    const pagesData = { step: 2, count: characterPageCount };
    const characterPages = await getCharacterPages(pagesData);
  } catch (e) {
    console.log(e.message);
  }
}

async function getCharacterPages(pagesData) {
  const { step, count } = pagesData;
  const characterPagePromises = [];

  for (let i = step; i <= count; i += step) {
    const promise = RickAndMortyApi.getAllCharacters({ page: i });
    console.log(promise);
    characterPagePromises.push(promise);
  }

  return await Promise.all(characterPagePromises);
}

main();
