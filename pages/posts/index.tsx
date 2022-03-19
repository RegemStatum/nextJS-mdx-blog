import type { NextPage } from "next";
import PostsGrid from "../../components/posts/PostsGrid";
import PageSection from "../../components/ui/PageSection";
import { getAllPostsInfo, getCategories } from "../../helpers/posts-util";
import PostInfo from "../../types/PostInfo";

interface AllPostsPageProps {
  posts: Array<PostInfo>;
}

const AllPostsPage: NextPage<AllPostsPageProps> = ({ posts }) => {
  return (
    <div className="page">
      <PageSection title="Articles">
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
