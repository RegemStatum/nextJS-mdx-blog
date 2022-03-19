import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getFeaturedPostsInfo, getSinglePost } from "../../helpers/posts-util";
import SinglePost from "../../components/posts/single-post/SinglePost";

interface SinglePostPageProps {
  meta: { [key: string]: any };
  source: any;
}

const SinglePostPage: NextPage<SinglePostPageProps> = ({ meta, source }) => {
  return <SinglePost meta={meta} source={source} />;
};

export default SinglePostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  let slug: string[] = [];
  if (context.params!.postSlug instanceof Array) {
    slug = context.params!.postSlug;
  }
  const [category, postTitle] = slug;
  const { meta, source } = await getSinglePost(category, postTitle);

  return {
    props: { meta, source },
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
