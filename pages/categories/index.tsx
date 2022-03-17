import type { NextPage } from "next";
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
    <>
      <PageSection title="Categories">
        <CategoriesGrid categories={categories} />
      </PageSection>
    </>
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
