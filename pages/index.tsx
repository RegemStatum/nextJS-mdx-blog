import { NextPage } from "next";
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
      <PageSection title="Featured Articles">
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
