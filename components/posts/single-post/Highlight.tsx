import React, { FC } from "react";
import styles from "./Highlight.module.scss";
import hintImg from "../../../public/images/components/highlight-msg/hint.png";
import questionImg from "../../../public/images/components/highlight-msg/question.png";
import successImg from "../../../public/images/components/highlight-msg/success.png";
import warningImg from "../../../public/images/components/highlight-msg/warning.png";
import Image from "next/image";

interface HighlightProps {
  type: "hint" | "warning" | "question" | "success";
  text: string;
}

const Highlight: FC<HighlightProps> = ({ type, text }) => {
  const imgSrc =
    type === "hint"
      ? hintImg
      : type === "warning"
      ? warningImg
      : type === "question"
      ? questionImg
      : successImg;

  const style = `styles.${type}`;

  return (
    <div className={`${styles.container} ${style}`}>
      <div>
        <Image src={imgSrc} alt={type} width="30" height="30" />
        <span>{type}</span>
      </div>
      {text}
    </div>
  );
};

export default Highlight;
