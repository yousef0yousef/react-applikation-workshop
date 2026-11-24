import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.srOnly}>Laddar...</span>
    </div>
  );
}

export default Loading;