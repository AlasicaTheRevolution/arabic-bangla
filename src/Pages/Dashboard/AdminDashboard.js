import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

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
            <hr />
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <hr />
            <li>
              <Link to="/dashboard/add-subcategory">Add Subcategory</Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
