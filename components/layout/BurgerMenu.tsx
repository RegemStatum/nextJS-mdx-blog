import React, { FC } from "react";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu: FC = () => {
  return (
    <div className={styles.container + " clicked"}>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default BurgerMenu;
