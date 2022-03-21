import type { NextPage } from "next";
import Head from "next/head";
import CategoriesGrid from "../../components/categories/CategoriesGrid";
import PageSection from "../../components/ui/PageSection";
import { getCategories } from "../../helpers/posts-util";

interface AllCategoriesPageProps {
  categories: string[];
}

const AllCategoriesPage: NextPage<AllCategoriesPageProps> = ({
  categories,
}) => {
  return (
    <div className="page page-min-height">
      <Head>
        <title>AlKon MDX | Categories</title>
        <meta
          name="description"
          content="Al Kon mdx blog categories page. Here you can find different posts by specific category"
        />
      </Head>
      <PageSection title="Categories">
        <CategoriesGrid categories={categories} />
      </PageSection>
    </div>
  );
};

export default AllCategoriesPage;

export function getStaticProps() {
  return {
    props: {
      categories: getCategories(),
    },
    revalidate: 3600,
  };
}
