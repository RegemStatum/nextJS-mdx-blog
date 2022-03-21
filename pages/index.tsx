import { NextPage } from "next";
import Head from "next/head";
import EmailSubscription from "../components/forms/EmailSubscription";
import PostsGrid from "../components/posts/PostsGrid";
import PageSection from "../components/ui/PageSection";
import { getFeaturedPostsInfo } from "../helpers/posts-util";
import PostInfo from "../types/PostInfo";

interface HomePageProps {
  featuredPosts: Array<PostInfo>;
}

const HomePage: NextPage<HomePageProps> = ({ featuredPosts }) => {
  return (
    <div className="page">
      <Head>
        <title>AlKon MDX | Home</title>
        <meta
          name="description"
          content="Al Kon mdx blog home page with featured articles and email subscription"
        />
      </Head>
      <PageSection title="Featured Posts">
        <PostsGrid posts={featuredPosts} />
      </PageSection>
      <PageSection title="Subscribe">
        <EmailSubscription />
      </PageSection>
    </div>
  );
};

export default HomePage;

export function getStaticProps() {
  return {
    props: {
      featuredPosts: getFeaturedPostsInfo(),
    },
    revalidate: 3600,
  };
}
