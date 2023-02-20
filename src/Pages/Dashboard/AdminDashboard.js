import React from "react";
import {  Outlet } from "react-router-dom";
import { FaHome, FaRegClone } from "react-icons/fa";
import DashboardNavbar from "./DashboardNavbar";
import ActiveLink from "./ActiveLink";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#F1F5F9] pt-10">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <ActiveLink to="/dashboard"><FaHome/>Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/nahu">Nahu</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/sarf">Sarf</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/balaga">Balaga</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/add-subcategory"><FaRegClone/> Add Subcategory</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
