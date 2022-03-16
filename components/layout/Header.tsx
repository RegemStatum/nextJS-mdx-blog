import Image from "next/image";
import React, { FC } from "react";
import BurgerMenu from "./BurgerMenu";
import styles from "./Header.module.scss";
import Navigation from "./Navigation";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/images/components/layout/logo.png"
        alt="logo"
        width="30"
        height="30"
      />
      <Navigation />
      <BurgerMenu />
    </header>
  );
};

export default Header;
