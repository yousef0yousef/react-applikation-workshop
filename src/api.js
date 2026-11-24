// All data i appen kommer från DummyJSON: https://dummyjson.com/docs
export const API_URL = "https://dummyjson.com";

// Hämtar JSON från en endpoint, t.ex. fetchJson("/products/1").
// Kastar ett fel om servern svarar med en felkod (t.ex. 404).
export async function fetchJson(path) {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) {
    throw new Error(`Något gick fel när data skulle hämtas (${res.status})`);
  }

  return res.json();
}
