import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout = (props: React.PropsWithChildren<ILayout>) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
