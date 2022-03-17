import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "../../../context/AppProvider";

const CategoriesLinks: FC = () => {
  const { categories: appCategories } = useAppContext();
  const [categories, setCategories] = useState(appCategories);

  const fetchCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    setCategories(data.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
