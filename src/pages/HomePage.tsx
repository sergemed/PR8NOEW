// src/pages/HomePage.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchItems, Item } from "../services/api";
import { addToFavorites } from "../services/favorites";

const HomePage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="cards-grid">
      {items.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <Link to={`/item/${item.id}`}>Подробнее</Link>
          <button onClick={() => addToFavorites(item.id)}>
            ❤️ В избранное
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
