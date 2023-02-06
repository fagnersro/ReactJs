import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reservas from './pages/Reservas';
import Header from './components/Header';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  );
}
