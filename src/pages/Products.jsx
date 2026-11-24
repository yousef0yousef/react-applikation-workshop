import { useEffect, useState } from "react";
import { fetchJson } from "../api.js";
import ProductGrid from "../components/ProductGrid.jsx";
import CategoryList from "../components/CategoryList.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import styles from "./Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const productData = await fetchJson("/products");
        const categoryData = await fetchJson("/products/categories");

        setProducts(productData.products);
        setTotal(productData.total);
        setCategories(categoryData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1 className="page-title">Alla produkter</h1>

      <div className={styles.toolbar}>
        <input
          type="search"
          placeholder="Sök produkter..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
        <p className={styles.count}>
          Visar {products.length} av {total} produkter
        </p>
      </div>

      <div className={styles.categories}>
        <CategoryList categories={categories} />
      </div>

      <ProductGrid products={products} />
    </section>
  );
}

export default Products;
