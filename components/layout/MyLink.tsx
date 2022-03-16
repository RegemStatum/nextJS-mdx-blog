import Link from "next/link";
import React, { FC } from "react";
import { useAppContext } from "../../context/AppProvider";

interface MyLinkProps {
  href: string;
  isInSidebar: boolean;
}

const MyLink: FC<MyLinkProps> = ({ href, children, isInSidebar }) => {
  const { toggleSidebarOpen } = useAppContext();

  return isInSidebar ? (
    <Link href={href}>
      <a onClick={toggleSidebarOpen}>{children}</a>
    </Link>
  ) : (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default MyLink;
