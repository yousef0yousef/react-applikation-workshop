# Hyllan – webbshop och blogg

Hyllan är en webbshop byggd i React med React Router. All data hämtas från [DummyJSON](https://dummyjson.com/docs).

Appen fungerar redan – men den är inte färdig. Det finns buggar, saknade funktioner och sidor som inte är stylade. Er uppgift är att jobba er igenom ärendena på er grupps **Trello-tavla**, ett kort i taget, med **Git** och **GitHub** precis som i ett riktigt utvecklingsteam.

---

## Kom igång

```bash
git clone <er-grupps-repo-url>
cd hyllan
npm install
npm run dev
```

Öppna adressen som visas i terminalen (oftast http://localhost:5173).

---

## Sidor (routes)

| URL                   | Komponent                 | Visar                                       |
| --------------------- | ------------------------- | ------------------------------------------- |
| `/`                   | `pages/Home.jsx`          | Startsida: kategorier, populära produkter, blogg |
| `/products`           | `pages/Products.jsx`      | Alla produkter                              |
| `/products/:id`       | `pages/ProductDetail.jsx` | En produkt + liknande produkter             |
| `/categories/:slug`   | `pages/Category.jsx`      | Produkter i en kategori                     |
| `/cart`               | `pages/Cart.jsx`          | Varukorgen                                  |
| `/checkout`           | `pages/Checkout.jsx`      | Kassa med formulär                          |
| `/order-confirmation` | `pages/OrderConfirmation.jsx` | Tack-sida efter beställning             |
| `/blog`               | `pages/Blog.jsx`          | Alla blogginlägg                            |
| `/blog/:id`           | `pages/BlogPost.jsx`      | Ett blogginlägg                             |

Alla routes finns i `src/App.jsx`.

---

## Projektstruktur

```
src/
├─ api.js              fetchJson() – hjälpfunktion för alla anrop
├─ App.jsx             Routes + varukorgens state
├─ main.jsx            BrowserRouter runt <App />
├─ index.css           Globala stilar och CSS-variabler
├─ utils/
│  └─ formatPrice.js
├─ components/         Delar som återkommer (får data via props)
│  ├─ Header.jsx
│  ├─ Footer.jsx
│  ├─ ProductCard.jsx
│  ├─ ProductGrid.jsx
│  ├─ CategoryList.jsx
│  ├─ PostCard.jsx
│  ├─ Loading.jsx
│  └─ ErrorMessage.jsx
└─ pages/              En fil per route
```

Komponenter och sidor stylas med **CSS Modules** (`Komponent.module.css`).

---

## Varukorgen

Varukorgen är ett state i `App.jsx`. Den skickas ner som props till de sidor som behöver den.

```js
// En rad i varukorgen:
{ product: { id, title, price, thumbnail, stock }, quantity: 2 }
```

Funktioner i `App.jsx`: `addToCart(product)`, `updateQuantity(productId, quantity)`, `removeFromCart(productId)` och `clearCart()`.

---

## API – endpoints ni kommer att behöva

Bas-URL: `https://dummyjson.com` (finns som `API_URL` i `src/api.js`)

| Endpoint                          | Ger                                   |
| --------------------------------- | ------------------------------------- |
| `/products`                       | `{ products, total, skip, limit }`    |
| `/products?limit=12&skip=12`      | Sida 2 med 12 produkter per sida      |
| `/products?sortBy=price&order=asc`| Sorterade produkter                   |
| `/products/search?q=phone`        | Sökresultat                           |
| `/products/:id`                   | En produkt (inkl. `images`, `reviews`)|
| `/products/categories`            | `[{ slug, name, url }]`               |
| `/products/category/:slug`        | Produkter i en kategori               |
| `/posts`                          | `{ posts, total, skip, limit }`       |
| `/posts/:id`                      | Ett inlägg (`userId`, `tags`, `reactions`) |
| `/posts/user/:userId`             | En användares inlägg                  |
| `/posts/tag/:tag`                 | Inlägg med en viss tagg               |
| `/comments/post/:postId`          | Kommentarer till ett inlägg           |
| `/users/:id`                      | En användare                          |

Tips: öppna en endpoint direkt i webbläsaren, eller `console.log` svaret, innan ni skriver JSX för det.

---

## Arbetsflöde med Git och Trello (kort version)

1. Välj ett kort i **Att göra**, sätt ditt namn på det och flytta det till **Pågår**.
2. Hämta det senaste från main och skapa en egen branch:
   ```bash
   git checkout main
   git pull
   git checkout -b bugfix/01-totalsumma
   ```
3. Gör ändringen. Commita i små steg med tydliga meddelanden.
4. Pusha branchen och öppna en **Pull Request** mot `main`. Klistra in länken till PR:en på Trello-kortet.
5. Flytta kortet till **Granskas**. En annan i gruppen granskar och godkänner.
6. Merga PR:en, flytta kortet till **Klart** – och alla i gruppen kör `git pull` på main.

Läs korten i listan **Läs först** på Trello-tavlan för hela arbetsflödet.
