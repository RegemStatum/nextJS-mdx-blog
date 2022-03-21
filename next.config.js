/** @type {import('next').NextConfig} */
const remarkFrontmatter = import("remark-frontmatter");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX({
  // Append the default value with md extensions
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
