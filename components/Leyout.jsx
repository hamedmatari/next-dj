import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "DJ events | Find the hottest parties",
  description: "Find the lastest Dj and other",
  keywords: "music , dj , edm",
};
