// src/services/api.ts
const BASE_URL = "https://jsonplaceholder.typicode.com";

export interface Item {
  id: number;
  title: string;
  body?: string;
}

export async function fetchItems(): Promise<Item[]> {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch items:", error);
    return [];
  }
}

export async function fetchItemById(id: string): Promise<Item | null> {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch item ${id}:`, error);
    return null;
  }
}
