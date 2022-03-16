import React, { FC } from "react";
import styles from "./FooterLinks.module.scss";

interface FooterLinksProps {
  title: string;
}

const FooterLinks: FC<FooterLinksProps> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>{title}</h5>
      {children}
    </div>
  );
};

export default FooterLinks;
