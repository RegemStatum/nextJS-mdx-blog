import React, { FC, useState } from "react";
import Link from "next/link";
import { useAppContext } from "../../context/AppProvider";

const CategoriesLinks: FC = () => {
  const { categories } = useAppContext();

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>
          <Link href={`/categories/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesLinks;
