// src/pages/DetailsPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById, Item } from "../services/api";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchItemById(id).then((data) => {
        setItem(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <div>Loading details...</div>;
  if (!item) return <div>Item not found</div>;

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
      <button>Добавить в избранное (сделаем в шаге 7)</button>
    </div>
  );
};

export default DetailsPage;
