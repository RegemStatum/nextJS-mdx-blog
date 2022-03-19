import React, { FC } from "react";
import AboutLink from "./AboutLink";
import styles from "./AboutLinks.module.scss";

const AboutLinks: FC = () => {
  return (
    <div className={styles.container}>
      <AboutLink
        href="https://t.me/Al_Kondratov"
        src="/images/components/about-links/telegram.png"
        alt="telegram"
      />
      <AboutLink
        href="https://www.linkedin.com/in/oleksandr-kondratov-11911a232"
        src="/images/components/about-links/linkedin.png"
        alt="linkedin"
      />
      <AboutLink
        href="https://github.com/RegemStatum"
        src="/images/components/about-links/github.png"
        alt="github"
      />
      <AboutLink
        href="https://app.netlify.com/teams/regemstatum/overview"
        src="/images/components/about-links/netlify.png"
        alt="netlify"
      />
    </div>
  );
};

export default AboutLinks;
