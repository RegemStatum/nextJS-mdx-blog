import React, { FC } from "react";
import Image from "next/image";
import styles from "./MainImg.module.scss";

const MainImg: FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/posts/react/react.png"
        placeholder="blur"
        blurDataURL="/images/posts/react/react.png"
        alt="react"
        width="150"
        height="150"
      />
    </div>
  );
};

export default MainImg;
