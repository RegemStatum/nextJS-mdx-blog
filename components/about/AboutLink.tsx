import React, { FC } from "react";
import Image from "next/image";

interface AboutLinkProps {
  href: string;
  src: string;
  alt: string;
}

const AboutLink: FC<AboutLinkProps> = ({ href, src, alt }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Image src={src} alt={alt} width="30" height="30" />
    </a>
  );
};

export default AboutLink;
