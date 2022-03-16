import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
};

export default Layout;
