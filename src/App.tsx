// src/App.tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/favorites">Избранное</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
