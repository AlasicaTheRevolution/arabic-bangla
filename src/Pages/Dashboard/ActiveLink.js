import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const ActiveLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      // style={{backgroundColor: match ? "#31B2EE" : "white", color: match ? "white" : "#000000"}}
      className={
        match
          ? "bg-[#e2e2e2]"
          : ""
      }
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
