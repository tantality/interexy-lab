import React, { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import AllCharactersPage from "./all-characters.page";
import CharacterPage from "./character.page";

class CharactersRouter extends React.Component {
  render(): ReactNode {
    return (
      <Routes>
        <Route path="" element={<AllCharactersPage />} />
        <Route path=":id" element={<CharacterPage />} />
      </Routes>
    );
  }
}

export default CharactersRouter;