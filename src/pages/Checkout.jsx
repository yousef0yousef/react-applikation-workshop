import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <section>
      <h1 className="page-title">Kassa</h1>
      <p>Du har {cart.length} produkter i varukorgen.</p>

      <form onSubmit={handleSubmit}>
        <label>
          Namn
          <input name="name" value={form.name} onChange={handleChange} />
        </label>

        <label>
          E-post
          <input name="email" value={form.email} onChange={handleChange} />
        </label>

        <label>
          Adress
          <input name="address" value={form.address} onChange={handleChange} />
        </label>

        <label>
          Postnummer
          <input name="zip" value={form.zip} onChange={handleChange} />
        </label>

        <label>
          Ort
          <input name="city" value={form.city} onChange={handleChange} />
        </label>

        <button type="submit" className="button">
          Slutför beställning
        </button>
      </form>
    </section>
  );
}

export default Checkout;
