import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6">
      <p className="text-gray-300 text-sm">
        &copy; Copyright 2015-{year} Ian Rogers. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
