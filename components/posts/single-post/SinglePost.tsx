import React, { FC } from "react";
import { MDXRemote } from "next-mdx-remote";
// post components
import Image from "next/image";
import Highlight from "./Highlight";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// styles
import styles from "./SinglePost.module.scss";

interface SinglePostProps {
  meta: { [key: string]: any };
  source: any;
}

const code = ({ className, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
  ) : (
    <code className={className} {...props} />
  );
};

const components = {
  Image,
  Highlight,
  code,
};

const SinglePost: FC<SinglePostProps> = ({ meta, source }) => {
  return (
    <div className={`page-min-height ${styles.post}`}>
      <MDXRemote {...source} components={components} />
    </div>
  );
};

export default SinglePost;
