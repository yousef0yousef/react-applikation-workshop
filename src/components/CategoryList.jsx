import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";

// categories är en array med objekt från /products/categories:
// { slug: "beauty", name: "Beauty", url: "..." }
function CategoryList({ categories }) {
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link
            to={`/categories/${category.name.toLowerCase()}`}
            className={styles.chip}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
