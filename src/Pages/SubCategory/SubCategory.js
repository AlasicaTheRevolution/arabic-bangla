import React from "react";
import { Link } from "react-router-dom";
// import ActiveLink from "../Dashboard/ActiveLink";

const SubCategory = ({ sb }) => {
  return (
    <li>
      <Link to={`/${sb.category}/${sb.slug}`}>{sb.subcategory}</Link>
    </li>
  );
};

export default SubCategory;
