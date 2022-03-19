import type { NextPage } from "next";
import About from "../../components/posts/single-post/About";
import main from "../../helpers/mdxFrontmatter";

const AboutPage: NextPage<{ value: any }> = ({ value }) => {
  return <About />;
};

export default AboutPage;

export async function getStaticProps() {
  main();

  return {
    props: {},
  };
}
