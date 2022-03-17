import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import PostInfo from "../../types/PostInfo";
import Badge from "../ui/Badge";
import styles from "./PostCard.module.scss";

const getFormattedDate = (text: string) => {
  let [day, month, year] = text.split(".");
  let formattedText = [year, month, day].join("-");
  const formattedMonth = new Date(formattedText).toLocaleDateString("en-US", {
    month: "long",
  });
  return [day, formattedMonth, year].join("/");
};

const PostCard: FC<PostInfo> = (props) => {
  const { title, category, date, mainImage, excerpt } = props;

  const postHref = `/posts/${category}/${title}`;
  const imgPath = `/images/posts/${category}/${mainImage}`;
  const badgeText = category[0].toUpperCase() + category.slice(1);
  const formattedDate = getFormattedDate(date);

  return (
    <Link href={postHref}>
      <a>
        <article className={styles.card}>
          <div className="row">
            <div className={styles.img_container}>
              <Image
                src={imgPath}
                alt={title}
                width="80"
                height="80"
                quality="100"
                placeholder="blur"
                blurDataURL={imgPath}
                className={styles.img}
              />
            </div>
            <div className={styles.info}>
              <h3>{title}</h3>
              <div className={styles.badge_date_container}>
                <Badge
                  name={badgeText}
                  containerClr="#D9E2EC"
                  textClr="#0B69A3"
                />
                <p className={styles.date}>
                  <time>{formattedDate}</time>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.separator}></div>
          <p className={styles.excerpt}>{excerpt}</p>
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
