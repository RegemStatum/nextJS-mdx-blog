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
  env: {
    DB_URL:
      "https://nextjs-mdx-blog-default-rtdb.europe-west1.firebasedatabase.app",
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
