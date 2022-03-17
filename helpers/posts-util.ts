import fs from "fs";
import path from "path";
const matter = require("gray-matter");

const getPostDirPath = () => {
  const postFolderPath = path.join(process.cwd(), "posts");
  return postFolderPath;
};

const getCategories = () => {
  const postsDir = getPostDirPath();
  const categories = fs.readdirSync(postsDir);
  return categories;
};

const getAllPostsInfo = () => {
  const postsDir = getPostDirPath();
  const folders = fs.readdirSync(postsDir);
  const postsInfo = [];

  for (const folder of folders) {
    const categoryDir = path.join(postsDir, folder);
    const categoryPosts = fs.readdirSync(categoryDir);

    for (const post of categoryPosts) {
      const postFile = path.join(categoryDir, post);
      const file = fs.readFileSync(postFile);
      const { data } = matter(file);

      postsInfo.push({ ...data });
    }
  }

  return postsInfo;
};

const getFeaturedPostsInfo = () => {
  const allPosts = getAllPostsInfo();
  return allPosts.filter((post) => post.isFeatured);
};

export { getAllPostsInfo, getCategories, getFeaturedPostsInfo };
