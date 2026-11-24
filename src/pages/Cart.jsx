import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice.js";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <section>
      <h1 className="page-title">Varukorg</h1>

      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            <img src={item.product.thumbnail} alt="" width="80" />
            <Link to={`/products/${item.product.id}`}>{item.product.title}</Link>
            <span>{formatPrice(item.product.price)}</span>

            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            >
              −
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            >
              +
            </button>

            <button onClick={() => removeFromCart(item.product.id)}>
              Ta bort
            </button>
          </li>
        ))}
      </ul>

      <p>Totalt: {formatPrice(total)}</p>

      <Link to="/checkout" className="button">
        Till kassan
      </Link>
    </section>
  );
}

export default Cart;
