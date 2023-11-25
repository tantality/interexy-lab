import PageLayout from "components/page-layout.comp";
import { FC } from "react";
import CharacterList from "./components/character-list.comp";

const CharacterListPage: FC = () => {
  return (
    <PageLayout>
      <CharacterList />
    </PageLayout>
  );
};

export default CharacterListPage;
