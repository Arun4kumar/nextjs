import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Showcase from "./Showcase";
const Layout = ({ title, description, keywords, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title || "Events app"}</title>
        <meta name="desctiption" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      {router.route === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
Layout.defaultProps = {
  title: "Events App",
  description: "This is an events managing application",
  keywords: ["dj", "occation", "party", "music", "pop", "dance"],
};
export default Layout;
