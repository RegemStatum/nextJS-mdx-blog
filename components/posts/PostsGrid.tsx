import React, { FC } from "react";
import PostInfo from "../../types/PostInfo";
import PostCard from "./PostCard";
import styles from "./PostsGrid.module.scss";

interface PostsGridProps {
  posts: Array<PostInfo>;
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  return (
    <section className={styles.container}>
      {posts.map((post, index) => (
        <PostCard {...post} key={index} />
      ))}
    </section>
  );
};

export default PostsGrid;
