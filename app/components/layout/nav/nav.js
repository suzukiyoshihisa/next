import Link from "next/link";
import styles from "components/layout/nav/nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            about
          </Link>
        </li>
        <li>
          <Link href="/news">
            news
          </Link>
        </li>
      </ul>
    </nav>
  );
}