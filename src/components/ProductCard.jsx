import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice.js";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.image}
      />

      <div className={styles.body}>
        <p className={styles.category}>{product.category}</p>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.meta}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          <span className={styles.rating}>Betyg: {product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
