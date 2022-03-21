import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styles from "../styles/pages/error.module.scss";

const ErrorPage: NextPage = () => {
  return (
    <div className={`page page-min-height ${styles.container}`}>
      <span>404</span>
      <Link href="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
