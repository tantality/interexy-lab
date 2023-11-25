import React, { FC, PropsWithChildren, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    <Suspense fallback={<div >loading </div>}>
      <Element />
    </Suspense>
  );
};

const CharacterListPage = React.lazy(() => import("app/characters/character-list.page"));
const CharacterViewPage = React.lazy(() => import("app/characters/character-view.page"));

const CharactersRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Suspended element={CharacterListPage} />} />
      <Route path={"/:characterId"} element={<Suspended element={CharacterViewPage} />} />
      <Route path='*' element={<Navigate to="/characters" />} />
    </Routes>
  );
};

export default CharactersRoutes;
