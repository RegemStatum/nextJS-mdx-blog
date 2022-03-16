import Link from "next/link";
import React, { FC } from "react";
import { useAppContext } from "../../../context/AppProvider";

interface MyLinkProps {
  href: string;
  closeSidebarOnClick: boolean;
}

const MyLink: FC<MyLinkProps> = ({ href, children, closeSidebarOnClick }) => {
  const { closeSidebar } = useAppContext();

  return closeSidebarOnClick ? (
    <Link href={href}>
      <a onClick={closeSidebar}>{children}</a>
    </Link>
  ) : (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default MyLink;
