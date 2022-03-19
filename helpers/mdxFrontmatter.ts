import path from "path";
import { promises as fs } from "node:fs";
import remarkFrontmatter from "remark-frontmatter";
import { compile } from "@mdx-js/mdx";

const singlePostDir = path.join(
  process.cwd(),
  "components",
  "posts",
  "single-post"
);

const aboutFileMDX = path.join(singlePostDir, "About.mdx");
const aboutFileTSX = path.join(singlePostDir, "About.tsx");

async function main() {
  const { value } = await compile(await fs.readFile(aboutFileMDX), {
    remarkPlugins: [remarkFrontmatter],
  });

  await fs.writeFile(aboutFileTSX, value);
}

export default main;
