import Link from "next/link";
import React, { FC } from "react";

const Navigation: FC = () => {
  return (
    <nav>
      <ul className="">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/feedback">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
