import fs from "fs";
import path from "path";
import formatPathToSlug from "./slugify";
const matter = require("gray-matter");

const getPostDirPath = () => {
  return path.join(process.cwd(), "posts");
};

const getCategories = () => {
  const postsDir = getPostDirPath();
  const categories = fs.readdirSync(postsDir);
  return categories;
};

const getAllPostsInfo = () => {
  const postsDir = getPostDirPath();
  const categories = fs.readdirSync(postsDir);
  const postsInfo = [];

  for (const category of categories) {
    const categoryDir = path.join(postsDir, category);
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

const getCategoryPosts = (category: string) => {
  const postsDir = getPostDirPath();
  const categoryDir = path.join(postsDir, category);
  const categoryPosts = fs.readdirSync(categoryDir);
  const postsInfo = [];

  for (const post of categoryPosts) {
    const postFile = path.join(categoryDir, post);
    const postData = fs.readFileSync(postFile);
    const { data } = matter(postData);
    postsInfo.push({ ...data });
  }
  return postsInfo;
};

const getSinglePost = (category: string, postTitle: string) => {
  const fileName = formatPathToSlug(postTitle) + ".mdx";
  const postsDir = getPostDirPath();
  const file = path.join(postsDir, category, fileName);
  let fileData;
  try {
    fileData = fs.readFileSync(file).toString();
  } catch (e) {
    console.log(e);
    return {};
  }
  const { data, content } = matter(fileData);
  return { data, content };
};

const getFeaturedPostsInfo = () => {
  const allPosts = getAllPostsInfo();
  return allPosts.filter((post) => post.isFeatured);
};

export {
  getAllPostsInfo,
  getCategories,
  getFeaturedPostsInfo,
  getCategoryPosts,
  getSinglePost,
};
