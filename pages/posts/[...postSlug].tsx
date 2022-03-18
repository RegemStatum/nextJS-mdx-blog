import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXProvider } from "@mdx-js/react";
import { getFeaturedPostsInfo, getSinglePost } from "../../helpers/posts-util";
import PostInfo from "../../types/PostInfo";
// checking mdx
import Post from "../../posts/nextJs/needful-sites-for-nextJS.mdx";
import markdownToHtml from "../../helpers/mdToHtml";

interface SinglePostPageProps {
  post: any;
  meta: {};
}

const SinglePostPage: NextPage<SinglePostPageProps> = ({ post, meta }) => {
  if (Object.keys(post).length === 0) {
    return <h2>There is no such post!</h2>;
  }

  return (
    <MDXProvider>
      {/* <div dangerouslySetInnerHTML={{ __html: post }}></div> */}
      <Post />
    </MDXProvider>
  );
};

export default SinglePostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  let slug: string[] = [];
  if (context.params!.postSlug instanceof Array) {
    slug = context.params!.postSlug;
  }
  const [category, postTitle] = slug;
  const postMD = getSinglePost(category, postTitle);
  const postHtml = await markdownToHtml(postMD.content);

  return {
    props: { post: postHtml, meta: postMD.data },
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
