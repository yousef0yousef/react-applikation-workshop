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
    let ignore = false;

    async function getData() {
      try {
        const endpoint = search.trim()
          ? `/products/search?q=${encodeURIComponent(search.trim())}`
          : "/products";

        const productData = await fetchJson(endpoint);
        const categoryData = await fetchJson("/products/categories");

        if (!ignore) {
          setProducts(productData.products);
          setTotal(productData.total);
          setCategories(categoryData);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    getData();

    return () => {
      ignore = true;
    };
  }, [search]);

  if (isLoading) return <Loading />;

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

      {error ? (
        <ErrorMessage message={error} />
      ) : products.length === 0 ? (
        <p>Inga produkter matchar din sökning.</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </section>
  );
}

export default Products;
