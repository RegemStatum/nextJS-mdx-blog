import React, { FC } from "react";
import CategoriesList from "../categories/CategoriesLinks";
import styles from "./Footer.module.scss";
import FooterLinks from "./helper-components/FooterLinks";
import Navigation from "./helper-components/Navigation";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.links_container}>
          <FooterLinks title="Pages">
            <Navigation />
          </FooterLinks>
          <FooterLinks title="Categories">
            <CategoriesList />
          </FooterLinks>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} AlKon MDX Blog
        </p>
      </div>
    </footer>
  );
};

export default Footer;
