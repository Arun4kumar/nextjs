import styles from "@/styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyrights &copy; 2021, All rights reserved.</p>
      <Link href="/about">About this site</Link>
    </footer>
  );
};

export default Footer;
