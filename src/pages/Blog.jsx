import { useEffect, useState } from "react";
import { fetchJson } from "../api.js";
import PostCard from "../components/PostCard.jsx";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import styles from "./Blog.module.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await fetchJson("/posts?limit=12");
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getPosts();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1 className="page-title">Bloggen</h1>
      <p className={styles.intro}>
        Tips, tankar och historier från Hyllans community.
      </p>

      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
