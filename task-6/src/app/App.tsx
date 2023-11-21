import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import CharactersRouter from './characters';

function App() {
  return (
    <Routes>
      <Route path="characters/*" element={<CharactersRouter />} />
      <Route path='*' element={<Navigate replace to="/characters" />} />
    </Routes>
  );
}

export default App;