import type { GetStaticPaths, NextPage } from "next";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import PostsGrid from "../../components/posts/PostsGrid";
import BreadCrumbs from "../../components/ui/BreadCrumbs";
import PageSection from "../../components/ui/PageSection";
import { getCategories, getCategoryPosts } from "../../helpers/posts-util";
import PostInfo from "../../types/PostInfo";

interface SingleCategoryPageProps {
  posts: Array<PostInfo>;
  category: string;
}

const SingleCategoryPage: NextPage<SingleCategoryPageProps> = ({
  posts,
  category,
}) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <div className="page">
      <BreadCrumbs path={path} />
      <PageSection title={category}>
        <PostsGrid posts={posts} />
      </PageSection>
    </div>
  );
};

export default SingleCategoryPage;

export const getStaticProps: GetStaticProps = (context) => {
  const category = context.params!.categorySlug;
  let posts: string[] = [];
  if (category && typeof category === "string") {
    posts = getCategoryPosts(category);
  }

  return {
    props: {
      posts,
      category,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const categories = getCategories();
  const paths = categories.map((category) => ({
    params: {
      categorySlug: category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
