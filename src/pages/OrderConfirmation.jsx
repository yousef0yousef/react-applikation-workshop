import { Link } from "react-router-dom";

function OrderConfirmation() {
  return (
    <section className="center">
      <h1 className="page-title">Tack för din beställning!</h1>
      <p>
        Vi skickar ett mejl när paketet är på väg. (Det här är en övningsbutik
        – ingenting skickas på riktigt.)
      </p>
      <Link to="/products" className="button">
        Fortsätt handla
      </Link>
    </section>
  );
}

export default OrderConfirmation;
