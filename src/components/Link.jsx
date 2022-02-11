import React from "react";
import classNames from "classnames";
import { Link as RouteLink } from "react-router-dom";

const Link = ({ to = "#", children: content, className, ...rest }) => {
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
    "text-cyan-500",
    "hover:text-cyan-300",
    className
  );

  if (isExternal)
    return (
      <a className={cx} href={to} target="_self">
        {content}
      </a>
    );
  return (
    <RouteLink className={cx} to={to} {...rest}>
      {content}
    </RouteLink>
  );
};

export default Link;
