import styles from "components/layout/container/container.module.css";

export default function Container({children}) {
  return (
    <div className={styles.default}>
      {children}
    </div>
  );
}