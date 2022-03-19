import React, { FC } from "react";
import { MDXRemote } from "next-mdx-remote";
// post components
import Image from "next/image";
import Section from "./layout/Section";
import Article from "./layout/Article";
// styles
import styles from "./SinglePost.module.scss";

const components = {
  Image,
  Section,
  Article,
};

interface SinglePostProps {
  meta: { [key: string]: any };
  source: any;
}

const SinglePost: FC<SinglePostProps> = ({ meta, source }) => {
  return (
    <div className={styles.post}>
      <MDXRemote {...source} components={components} />
    </div>
  );
};

export default SinglePost;
