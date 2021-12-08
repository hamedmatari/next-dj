import styles from "@/styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Leyout";
import React from "react";
export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h4>sorry , there is a error</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
