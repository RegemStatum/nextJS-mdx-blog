import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/pages/error.module.scss";

const ErrorPage: NextPage = () => {
  return (
    <div className={`page page-min-height ${styles.container}`}>
      <Head>
        <title>AlKon MDX | Error</title>
        <meta name="description" content="Al Kon mdx blog error page" />
      </Head>
      <span>404</span>
      <Link href="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
