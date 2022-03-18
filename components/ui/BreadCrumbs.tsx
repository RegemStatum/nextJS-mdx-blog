import Link from "next/link";
import React, { FC } from "react";
import styles from "./BreadCrumbs.module.scss";

interface BreadCrumbsProps {
  path: string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ path }) => {
  const breadCrumbs = path.split("/");

  const getHref = (crumb: string) => {
    const crumbIndex = breadCrumbs.indexOf(crumb);
    const path = breadCrumbs.slice(0, crumbIndex + 1).join("/");
    return path === "" ? "/" : path;
  };

  return (
    <div className={`container ${styles.breadcrumbs}`}>
      {breadCrumbs.map((crumb, index) => {
        return (
          <span key={index}>
            <Link href={getHref(crumb)}>{crumb === "" ? "home" : crumb}</Link>
            <span>{index === breadCrumbs.length - 1 ? " " : " / "}</span>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
