import styles from "@/styles/404Page.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";
import { FaExclamationTriangle } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <Layout title="Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h3>Sorry, noting related found</h3>
        <Link href="/">Go Home</Link>
      </div>
    </Layout>
  );
};

export default ErrorPage;
