import React, { FC } from "react";
import PostInfo from "../../types/PostInfo";
import PostCard from "./PostCard";

interface PostsGridProps {
  posts: Array<PostInfo>;
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  return (
    <section className="grid">
      {posts.map((post, index) => (
        <PostCard {...post} key={index} />
      ))}
    </section>
  );
};

export default PostsGrid;
