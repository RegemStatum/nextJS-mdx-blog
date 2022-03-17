import Link from "next/link";
import React, { FC } from "react";
import styles from "./CategoryItem.module.scss";

interface CategoryItemProps {
  name: string;
}

const CategoryItem: FC<CategoryItemProps> = ({ name }) => {
  return (
    <Link href={`/categories/${name}`}>
      <a>
        <div className={styles.category}>
          <h3>{name}</h3>
        </div>
      </a>
    </Link>
  );
};

export default CategoryItem;
