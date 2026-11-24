import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="center">
      <h1 className="page-title">Sidan kunde inte hittas</h1>
      <p>
        Sidan du söker finns inte längre eller har flyttats.
      </p>
      <Link to="/" className="button">
        tillbaka till startsidan
      </Link>
    </section>
  );
}

export default NotFound;
