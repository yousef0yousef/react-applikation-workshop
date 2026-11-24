import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchJson } from "../api.js";
import ProductGrid from "../components/ProductGrid.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function Category() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchJson(`/products/category/${slug}`);
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, [slug]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <Link to="/products">← Alla produkter</Link>
      <h1 className="page-title">{slug}</h1>
      <p>{products.length} produkter i kategorin</p>
      <ProductGrid products={products} />
    </section>
  );
}

export default Category;
