import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="container mx-auto text-white">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
