// src/pages/FavoritesPage.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavorites, removeFromFavorites } from "../services/favorites";
import { fetchItems, Item } from "../services/api";

const FavoritesPage = () => {
  const [favoriteItems, setFavoriteItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favIds = getFavorites();
    if (favIds.length === 0) {
      setFavoriteItems([]);
      setLoading(false);
      return;
    }
    fetchItems().then((allItems) => {
      const filtered = allItems.filter((item) => favIds.includes(item.id));
      setFavoriteItems(filtered);
      setLoading(false);
    });
  }, []);

  const handleRemove = (id: number) => {
    removeFromFavorites(id);
    setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (loading) return <div>Loading favorites...</div>;

  return (
    <div>
      <h2>Избранное</h2>
      {favoriteItems.length === 0 && <p>Нет избранных элементов</p>}
      <div style={{ display: "grid", gap: "1rem" }}>
        {favoriteItems.map((item) => (
          <div
            key={item.id}
            style={{ border: "1px solid gold", padding: "1rem" }}
          >
            <h3>{item.title}</h3>
            <Link to={`/item/${item.id}`}>Открыть</Link>
            <button onClick={() => handleRemove(item.id)}>Удалить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
