import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={<div/>} />
    </Routes>
  );
};

export default AppRoutes;
