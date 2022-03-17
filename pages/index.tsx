import { NextPage } from "next";
import PostsGrid from "../components/posts/PostsGrid";
import PageSection from "../components/ui/PageSection";
import { getFeaturedPostsInfo } from "../helpers/posts-util";
import PostInfo from "../types/PostInfo";

interface HomePageProps {
  featuredPosts: Array<PostInfo>;
}

const HomePage: NextPage<HomePageProps> = ({ featuredPosts }) => {
  return (
    <>
      <PageSection title="Featured Articles">
        <PostsGrid posts={featuredPosts} />
      </PageSection>
      <PageSection title="Subscribe">
        <></>
      </PageSection>
    </>
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
