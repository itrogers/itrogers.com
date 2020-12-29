import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const ThemeToggle = ({ label, optA, optB }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={(e) => toggleTheme(e.target.checked ? optA : optB)}
            checked={theme === optA}
          />{" "}
          {label}
        </label>
      )}
    </ThemeToggler>
  );
};

export default ThemeToggle;
