import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, hideHeader = false, hideFooter = false }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {!hideHeader && <Header />}
      <div className="container mx-auto text-white">{children}</div>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
