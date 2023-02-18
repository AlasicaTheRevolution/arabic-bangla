import React from "react";
import {  Outlet } from "react-router-dom";
import { FaHome, FaRegClone } from "react-icons/fa";
import DashboardNavbar from "./DashboardNavbar";
import ActiveLink from "./ActiveLink";

const AdminDashboard = () => {
  return (
    <div class="dashboard">
      <DashboardNavbar />
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content bg-[#F1F5F9] pt-10">
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <ActiveLink to="/dashboard"><FaHome/>Home</ActiveLink>
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
