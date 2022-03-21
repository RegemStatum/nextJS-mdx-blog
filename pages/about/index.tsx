import type { NextPage } from "next";
import getAboutPageData from "../../helpers/about-page-data";
import { MDXRemote } from "next-mdx-remote";
// post components
import Image from "next/image";
import AboutLinks from "../../components/about/AboutLinks";
import Highlight from "../../components/posts/single-post/Highlight";
// styles
import postStyles from "../../components/posts/single-post/SinglePost.module.scss";
import aboutStyles from "../../components/about/About.module.scss";
import Head from "next/head";

interface AboutPageProps {
  meta: { [key: string]: any };
  source: any;
}

const AboutPage: NextPage<AboutPageProps> = ({ meta, source }) => {
  return (
    <div className={`page-min-height ${postStyles.post} ${aboutStyles.post}`}>
      <Head>
        <title>AlKon MDX | {meta.title}</title>
        <meta name="description" content={meta.excerpt} />
      </Head>
      <MDXRemote {...source} components={{ Image, AboutLinks, Highlight }} />
    </div>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const { meta, source } = await getAboutPageData();

  return {
    props: { meta, source },
  };
}
