import React from "react";
import ActiveLink from "../Dashboard/ActiveLink";

const NahuSubCategory = ({ sb }) => {
  console.log(sb);
  return (
    <li>
      <ActiveLink to={sb.slug}>{sb.subcategory}</ActiveLink>
    </li>
  );
};

export default NahuSubCategory;
