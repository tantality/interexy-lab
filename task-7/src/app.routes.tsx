import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<div />}>
    <Element />
  </Suspense>
);

const СharactersPage = React.lazy(() => import("app/characters"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/characters/*"} element={<PublicRoute element={СharactersPage} />} />
      <Route path='*' element={<Navigate to="/characters" />} />
    </Routes>
  );
};

export default AppRoutes;
