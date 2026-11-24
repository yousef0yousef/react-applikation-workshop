import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Hyllan – en övningsbutik för Frontend 2.</p>
      <p className={styles.small}>
        All data kommer från{" "}
        <a href="https://dummyjson.com" target="_blank" rel="noreferrer">
          dummyjson.com
        </a>
        . Inga riktiga beställningar skickas.
      </p>
    </footer>
  );
}

export default Footer;
