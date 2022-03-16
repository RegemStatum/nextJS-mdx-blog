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
          <MyLink href="/" isInSidebar={isInSidebar}>
            Home
          </MyLink>
        </li>
        <li>
          <MyLink href="/posts" isInSidebar={isInSidebar}>
            Posts
          </MyLink>
        </li>
        <li>
          <MyLink href="/categories" isInSidebar={isInSidebar}>
            Categories
          </MyLink>
        </li>
        <li>
          <MyLink href="/about" isInSidebar={isInSidebar}>
            About
          </MyLink>
        </li>
        <li>
          <MyLink href="/feedback" isInSidebar={isInSidebar}>
            Feedback
          </MyLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
