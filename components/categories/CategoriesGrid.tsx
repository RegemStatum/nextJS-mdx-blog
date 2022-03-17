import React, { FC } from "react";
import CategoryItem from "./CategoryItem";

interface CategoriesGridProps {
  categories: string[];
}

const CategoriesGrid: FC<CategoriesGridProps> = ({ categories }) => {
  return (
    <div className="grid">
      {categories.map((category, index) => (
        <CategoryItem name={category} key={index} />
      ))}
    </div>
  );
};

export default CategoriesGrid;
