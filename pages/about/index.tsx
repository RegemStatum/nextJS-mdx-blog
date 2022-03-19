import type { NextPage } from "next";
import getAboutPageData from "../../helpers/about-page-data";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Badge from "../../components/ui/Badge";

interface AboutPageProps {
  meta: { [key: string]: any };
  source: any;
}

const AboutPage: NextPage<AboutPageProps> = ({ meta, source }) => {
  return <MDXRemote {...source} components={{ Image, Badge }} />;
};

export default AboutPage;

export async function getStaticProps() {
  const { meta, source } = await getAboutPageData();

  return {
    props: { meta, source },
  };
}
