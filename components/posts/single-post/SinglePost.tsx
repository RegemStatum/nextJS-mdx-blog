import React, { FC } from "react";
import { MDXRemote } from "next-mdx-remote";

import Image from "next/image";
import Badge from "../../ui/Badge";
import PageSection from "../../ui/PageSection";

const components = {
  Image,
  Badge,
  PageSection,
};

interface SinglePostProps {
  meta: { [key: string]: any };
  source: any;
}

const SinglePost: FC<SinglePostProps> = ({ meta, source }) => {
  return <MDXRemote {...source} components={components} />;
};

export default SinglePost;
