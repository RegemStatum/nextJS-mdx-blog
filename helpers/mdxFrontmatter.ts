import { promises as fs } from "node:fs";
import remarkFrontmatter from "remark-frontmatter";
import { compile } from "@mdx-js/mdx";
import { PathLike } from "fs";

async function compileFromMdxToTsx(
  readFromFilePath: PathLike,
  writeToFilePath: PathLike
) {
  const readFromFile = readFromFilePath + ".mdx";
  const writeToFile = writeToFilePath + ".tsx";

  const { value } = await compile(await fs.readFile(readFromFile), {
    remarkPlugins: [remarkFrontmatter],
  });

  await fs.writeFile(writeToFile, value);
}

export default compileFromMdxToTsx;
