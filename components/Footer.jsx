import Link from "next/link";
import styles from "@/styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyrights &copy ; developet by hamed</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
}
