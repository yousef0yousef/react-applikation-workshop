import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  // Varukorgen ligger här i App så att alla sidor kan nå den via props.
  // Varje rad i varukorgen ser ut så här:
  // { product: { id, title, price, thumbnail, stock }, quantity: 2 }
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      const newItem = {
        product: {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          stock: product.stock,
        },
        quantity: 1,
      };
      return [...prevCart, newItem];
    });
  }

  function updateQuantity(productId, quantity) {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function removeFromCart(productId) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className="app">
      <Header cart={cart} />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route path="/categories/:slug" element={<Category />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} clearCart={clearCart} />}
          />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
