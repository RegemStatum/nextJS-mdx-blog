import type { NextPage } from "next";
import Head from "next/head";
import PostsGrid from "../../components/posts/PostsGrid";
import PageSection from "../../components/ui/PageSection";
import { getAllPostsInfo } from "../../helpers/posts-util";
import PostInfo from "../../types/PostInfo";

interface AllPostsPageProps {
  posts: Array<PostInfo>;
}

const AllPostsPage: NextPage<AllPostsPageProps> = ({ posts }) => {
  return (
    <div className="page page-min-height">
      <Head>
        <title>AlKon MDX | Posts</title>
        <meta
          name="description"
          content="Al Kon mdx blog page with interesting and unique posts"
        />
      </Head>
      <PageSection title="Posts">
        <PostsGrid posts={posts} />
      </PageSection>
    </div>
  );
};

export default AllPostsPage;

export function getStaticProps() {
  return {
    props: {
      posts: getAllPostsInfo(),
    },
    revalidate: 3600,
  };
}
