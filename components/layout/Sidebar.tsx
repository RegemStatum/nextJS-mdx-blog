import React, { FC } from "react";
import { useAppContext } from "../../context/AppProvider";
import Navigation from "./Navigation";
import styles from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  const { isSidebarOpen } = useAppContext();

  return (
    <div
      className={`${styles.container} ${
        isSidebarOpen ? styles.show : styles.hide
      }`}
    >
      <aside className={styles.sidebar}>
        <Navigation isInSidebar={true} />
      </aside>
    </div>
  );
};

export default Sidebar;
