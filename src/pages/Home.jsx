import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchJson } from "../api.js";
import ProductGrid from "../components/ProductGrid.jsx";
import CategoryList from "../components/CategoryList.jsx";
import PostCard from "../components/PostCard.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import styles from "./Home.module.css";

function Home() {
  const [popular, setPopular] = useState([]);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const productData = await fetchJson(
          "/products?sortBy=rating&order=desc&limit=8"
        );
        const categoryData = await fetchJson("/products/categories");
        const postData = await fetchJson("/posts?limit=3");

        setPopular(productData.products);
        setCategories(categoryData.slice(0, 8));
        setPosts(postData.posts);
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
    <>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Allt du behöver – på en hylla</h1>
        <p className={styles.heroText}>
          Skönhet, möbler, elektronik, mat och mycket mer. Hitta något nytt
          eller läs våra senaste tips på bloggen.
        </p>
        <Link to="/products" className="button">
          Se alla produkter
        </Link>
      </section>

      <section className={styles.section}>
        <h2>Kategorier</h2>
        <CategoryList categories={categories} />
      </section>

      <section className={styles.section}>
        <h2>Populärt just nu</h2>
        <ProductGrid products={popular} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>Från bloggen</h2>
          <Link to="/blog">Alla inlägg →</Link>
        </div>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
