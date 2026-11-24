import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchJson } from "../api.js";
import Loading from "../components/Loading.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPost() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchJson(`/posts/${id}`);
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getPost();
  }, [id]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <article>
      <Link to="/blog">← Tillbaka till bloggen</Link>

      <h1>{post.title}</h1>
      <p>Skrivet av användare #{post.userId}</p>

      <p>{post.body}</p>

      <p>
        {post.tags.map((tag) => (
          <span key={tag}>#{tag} </span>
        ))}
      </p>

      <p>
        👍 {post.reactions.likes} · 👎 {post.reactions.dislikes} · {post.views}{" "}
        visningar
      </p>
    </article>
  );
}

export default BlogPost;
