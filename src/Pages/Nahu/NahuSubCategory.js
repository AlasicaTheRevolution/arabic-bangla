import React from 'react';
import { FaHome } from 'react-icons/fa';
import ActiveLink from '../Dashboard/ActiveLink';

const NahuSubCategory = ({ subcategory, sb }) => {
    console.log()
    return (
        <li>
            <ActiveLink to="/dashboard"><FaHome />{sb.subcategory}</ActiveLink>
        </li>
    );
};

export default NahuSubCategory;