import PageLayout from "components/page-layout.comp";
import { useParams } from "react-router-dom";

const CharacterViewPage = () => {
  const { characterId } = useParams();

  return (
    <PageLayout>
      <section>character id: {characterId}</section>
    </PageLayout>
  );
};

export default CharacterViewPage;