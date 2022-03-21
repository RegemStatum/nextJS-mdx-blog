import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import { AppProvider } from "../context/AppProvider";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Head>
          <title>AlKon MDX Blog</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="This is Aleksandr Kondratov's blog with posts about Javascript, Typescript, React, NextJS and more"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
