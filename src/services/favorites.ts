// src/services/favorites.ts
const FAV_KEY = "favorites";

export const getFavorites = (): number[] => {
  const raw = localStorage.getItem(FAV_KEY);
  return raw ? JSON.parse(raw) : [];
};

export const addToFavorites = (id: number): void => {
  const current = getFavorites();
  if (!current.includes(id)) {
    localStorage.setItem(FAV_KEY, JSON.stringify([...current, id]));
  }
};

export const removeFromFavorites = (id: number): void => {
  const current = getFavorites();
  const updated = current.filter((favId) => favId !== id);
  localStorage.setItem(FAV_KEY, JSON.stringify(updated));
};
