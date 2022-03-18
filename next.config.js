/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URL:
      "https://nextjs-mdx-blog-default-rtdb.europe-west1.firebasedatabase.app/emails.json",
  },
};

module.exports = nextConfig;

// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     providerImportSource: "@mdx-js/react",
//   },
// });
// module.exports = withMDX({
//   // Append the default value with md extensions
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
// });
