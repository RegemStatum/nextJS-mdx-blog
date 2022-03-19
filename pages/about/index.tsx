import type { NextPage } from "next";
import getAboutPageData from "../../helpers/about-page-data";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import AboutLinks from "../../components/about/AboutLinks";
import styles from "../../components/posts/single-post/SinglePost.module.scss";

interface AboutPageProps {
  meta: { [key: string]: any };
  source: any;
}

const AboutPage: NextPage<AboutPageProps> = ({ meta, source }) => {
  return (
    <div className={`container ${styles.post}`}>
      <MDXRemote {...source} components={{ Image, AboutLinks }} />
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
