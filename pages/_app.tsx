import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>AlKon Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is Aleksandr Kondratov's blog with posts about Javascript, Typescript, React, NextJS and more"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
