import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

function PostCard({ post }) {
  const excerpt = post.body.slice(0, 120) + "…";

  return (
    <article className={styles.card}>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>

      <h3 className={styles.title}>
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>

      <p className={styles.excerpt}>{excerpt}</p>

      <p className={styles.meta}>
        Användare #{post.userId} · {post.reactions.likes} gillningar
      </p>
    </article>
  );
}

export default PostCard;
