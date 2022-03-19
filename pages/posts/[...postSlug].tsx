import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXProvider } from "@mdx-js/react";
import { getFeaturedPostsInfo, getSinglePost } from "../../helpers/posts-util";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Image from "next/image";
import Badge from "../../components/ui/Badge";
import PageSection from "../../components/ui/PageSection";
import BreadCrumbs from "../../components/ui/BreadCrumbs";
import { useRouter } from "next/router";

const components = {
  Image,
  Badge,
  PageSection,
};

interface SinglePostPageProps {
  meta: { [key: string]: any };
  source: any;
}

const SinglePostPage: NextPage<SinglePostPageProps> = ({ meta, source }) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <>
      <MDXRemote {...source} components={components} />
    </>
  );
};

export default SinglePostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  let slug: string[] = [];
  if (context.params!.postSlug instanceof Array) {
    slug = context.params!.postSlug;
  }
  const [category, postTitle] = slug;
  const { meta, content } = getSinglePost(category, postTitle);
  const mdxSource = await serialize(content);

  return {
    props: { meta, source: mdxSource },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const featuredPosts = getFeaturedPostsInfo();
  let paths = featuredPosts.map((post) => {
    return "/posts/" + post.title.split(" ").join("%20");
  });

  return {
    paths,
    fallback: "blocking",
  };
};
