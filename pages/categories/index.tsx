import type { NextPage } from "next";
import PageSection from "../../components/ui/PageSection";
import { getAllCategories } from "../../helpers/categories-util";

interface AllCategoriesPageProps {
  categories: string[];
}

const AllCategoriesPage: NextPage<AllCategoriesPageProps> = ({
  categories,
}) => {
  return (
    <>
      <PageSection title="Categories"></PageSection>
    </>
  );
};

export default AllCategoriesPage;

export function getStaticProps() {
  return {
    props: {
      categories: getAllCategories(),
    },
    revalidate: 3600,
  };
}
