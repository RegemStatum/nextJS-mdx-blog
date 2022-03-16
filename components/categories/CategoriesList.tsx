import React, { FC } from "react";
import { getAllCategories } from "../../helpers/categories-util";
import Link from "next/link";

const CategoriesList: FC = () => {
  return (
    <ul>
      {getAllCategories().map((category, index) => (
        <li key={index}>
          <Link href={`/categories/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
