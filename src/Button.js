import styles from "./Button.module.css";

export default function Button({ className, children, onClick }) {
  return (
    <main className={styles.main}>
      <button className={className} type="submit" onClick={onClick}>
        {children}
      </button>
    </main>
  );
}
