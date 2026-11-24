import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ cart }) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Hyllan
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Hem
          </Link>
          <Link to="/products" className={styles.link}>
            Produkter
          </Link>
          <Link to="/blog" className={styles.link}>
            Blogg
          </Link>
          <Link to="/cart" className={styles.cartLink}>
            Varukorg ({cartCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
