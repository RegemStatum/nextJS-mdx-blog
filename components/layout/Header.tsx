import Image from "next/image";
import React, { FC } from "react";
import BurgerMenu from "./helper-components/BurgerMenu";
import styles from "./Header.module.scss";
import MyLink from "./helper-components/MyLink";
import Navigation from "./helper-components/Navigation";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <MyLink href="/" closeSidebarOnClick={true}>
          <a className={styles.logo}>
            <Image
              src="/images/components/layout/logo.png"
              alt="logo"
              width="30"
              height="30"
            />
          </a>
        </MyLink>
        <div className={styles.navigation}>
          <Navigation />
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
