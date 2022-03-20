import React, { FC } from "react";
import { MDXRemote } from "next-mdx-remote";
// post components
import Image from "next/image";
// styles
import styles from "./SinglePost.module.scss";
const components = {
  Image,
};

interface SinglePostProps {
  meta: { [key: string]: any };
  source: any;
}

const SinglePost: FC<SinglePostProps> = ({ meta, source }) => {
  return (
    <div className={`page-min-height ${styles.post}`}>
      <MDXRemote {...source} components={components} />
    </div>
  );
};

export default SinglePost;
