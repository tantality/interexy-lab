import { Container } from "@mantine/core";
import React from "react";
import CharacterList from "./components/character-list/character-list.component";

class AllСharactersPage extends React.Component {
  render() {
    return (
      <Container size="lg" px={30} py="lg">
        <CharacterList />
      </Container>
    );
  }
}

export default AllСharactersPage;