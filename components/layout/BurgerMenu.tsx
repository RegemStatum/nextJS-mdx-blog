import React, { FC } from "react";
import { useAppContext } from "../../context/AppProvider";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu: FC = () => {
  const { isSidebarOpen, toggleSidebarOpen } = useAppContext();

  return (
    <div
      className={`${styles.container} ${isSidebarOpen ? styles.open : ""}`}
      onClick={toggleSidebarOpen}
    >
      <div className={styles.item}></div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default BurgerMenu;
