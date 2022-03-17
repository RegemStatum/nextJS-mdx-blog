import React, { FC } from "react";
import styles from "./PageSection.module.scss";

interface PageSectionProps {
  title: string;
}

const PageSection: FC<PageSectionProps> = ({ children, title }) => {
  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default PageSection;
