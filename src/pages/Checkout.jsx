import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    zip: "",
    city: "",
  });

  // Ett gemensamt onChange för alla fält.
  // e.target.name är fältets name-attribut, t.ex. "email".
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Här skulle beställningen skickas till en server.
    console.log("Beställning:", form, cart);

    navigate("/order-confirmation");
  }
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <section>
      <h1 className="page-title">Kassa</h1>
      <p>Du har {cartCount} produkter i varukorgen.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.field}>
          Namn
          <input name="name" value={form.name} onChange={handleChange} />
        </label>

        <label className={styles.field}>
          E-post
          <input name="email" value={form.email} onChange={handleChange} />
        </label>

        <label className={styles.field}>
          Adress
          <input name="address" value={form.address} onChange={handleChange} />
        </label>

        <div className={styles.row}>
          <label className={styles.field}>
            Postnummer
            <input name="zip" value={form.zip} onChange={handleChange} />
          </label>

          <label className={styles.field}>
            Ort
            <input name="city" value={form.city} onChange={handleChange} />
          </label>
        </div>

        <button type="submit" className="button">
          Slutför beställning
        </button>
      </form>
    </section>
  );
}

export default Checkout;