import type { NextPage } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

//
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Image from "next/image";
import Badge from "../../components/ui/Badge";

const components = {
  Image,
  Badge,
};

interface AboutPageProps {
  meta: { [key: string]: any };
  source: any;
}

const AboutPage: NextPage<AboutPageProps> = ({ meta, source }) => {
  return <MDXRemote {...source} components={components} />;
};

export default AboutPage;

export async function getStaticProps() {
  const aboutPostFile = path.join(
    process.cwd(),
    "components",
    "posts",
    "about-post",
    "About"
  );

  const source = fs.readFileSync(aboutPostFile + ".mdx").toString();
  const { data: meta, content } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: { meta, source: mdxSource },
  };
}
