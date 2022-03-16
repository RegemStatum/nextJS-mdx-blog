import React, { FC } from "react";
import MyLink from "./MyLink";

interface NavigationProps {
  isInSidebar?: boolean;
}

const Navigation: FC<NavigationProps> = ({ isInSidebar = false }) => {
  return (
    <nav>
      <ul className="">
        <li>
          <MyLink href="/" closeSidebarOnClick={isInSidebar}>
            Home
          </MyLink>
        </li>
        <li>
          <MyLink href="/posts" closeSidebarOnClick={isInSidebar}>
            Posts
          </MyLink>
        </li>
        <li>
          <MyLink href="/categories" closeSidebarOnClick={isInSidebar}>
            Categories
          </MyLink>
        </li>
        <li>
          <MyLink href="/about" closeSidebarOnClick={isInSidebar}>
            About
          </MyLink>
        </li>
        <li>
          <MyLink href="/feedback" closeSidebarOnClick={isInSidebar}>
            Feedback
          </MyLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
