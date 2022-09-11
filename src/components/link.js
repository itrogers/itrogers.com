import React from "react";
import classNames from "classnames";
import { Link as GatsbyLink } from "gatsby";

const Link = ({
  to = "#",
  children: content,
  colorClass = "text-white",
  hoverColorClass = "hover:text-cyan-300",
  className,
  newTab,
  ...rest
}) => {
  const checkExternal = () => {
    try {
      const toUrl = new URL(to, window.location.origin);
      return toUrl.hostname !== window.location.hostname;
    } catch (error) {
      return true;
    }
  };

  const isExternal = checkExternal();

  const cx = classNames(
    "underline",
    "underline-offset-4",
    colorClass,
    hoverColorClass,
    className
  );

  if (isExternal)
    return (
      <a target={newTab ? "_blank" : "_self"} className={cx} href={to}>
        {content}
      </a>
    );
  return (
    <GatsbyLink
      target={newTab ? "_blank" : "_self"}
      className={cx}
      to={to}
      {...rest}
    >
      {content}
    </GatsbyLink>
  );
};

export default Link;
