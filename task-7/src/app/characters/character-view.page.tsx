import { useParams } from "react-router-dom";

const CharacterViewPage = () => {
  const { characterId } = useParams();

  return (
    <>
      <section>character id: {characterId}</section>
    </>
  );
};

export default CharacterViewPage;