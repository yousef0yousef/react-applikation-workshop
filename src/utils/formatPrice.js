// Formaterar ett pris för visning i appen.
export function formatPrice(price) {
  return Number(price).toLocaleString("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
} 