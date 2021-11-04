import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Events</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/events">
            <a>All Events</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
