import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const getAboutPageData = async () => {
  const aboutPostFile = path.join(
    process.cwd(),
    "components",
    "about",
    "About"
  );

  const source = fs.readFileSync(aboutPostFile + ".mdx").toString();
  const { data: meta, content } = matter(source);
  const mdxSource = await serialize(content);

  return { meta, source: mdxSource };
};

export default getAboutPageData;
