import React from "react";

const Logo = ({ text = "IT Rogers" }) => {
  return (
    <div className="flex items-center">
      <span className="bg-cyan-500 w-3 h-3 rounded-full motion-safe:animate-pulse mr-2"></span>
      <span className="text-white text-xl font-bold font-mono hover:text-cyan-500 transition-all duration-200">
        {text}
      </span>
    </div>
  );
};

export default Logo;
