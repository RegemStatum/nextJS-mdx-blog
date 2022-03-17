import React, { FC } from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  name: string;
  containerClr: string;
  textClr: string;
}

const Badge: FC<BadgeProps> = ({ name, containerClr, textClr }) => {
  return (
    <div
      style={{ backgroundColor: `${containerClr}` }}
      className={styles.container}
    >
      <p style={{ color: `${textClr}` }}>{name}</p>
    </div>
  );
};

export default Badge;
