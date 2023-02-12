import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      // style={{backgroundColor: match ? "#31B2EE" : "white", color: match ? "white" : "#000000"}}
      className={
        match
          ? "text-[15px] text-[rgb(39,39,39)] font-medium uppercase after:content-[''] relative after:absolute after:inline-block after:bg-[#000000] after:w-full after:h-[2px] after:left-0 after:bottom-[-2px] after:-z-10 "
          : "text-[15px] text-[rgb(39,39,39)] hover:text-[rgb(39,39,39)] duration-300 font-medium uppercase "
      }
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
