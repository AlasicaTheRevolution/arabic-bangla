import React from "react";
import { Outlet } from "react-router-dom";
import ActiveLink from "./ActiveLink";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <div className="h-20"></div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#F1F5F9] pt-10">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <ActiveLink to="/dashboard">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/navbar-edit">Navbar</ActiveLink>
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
              <ActiveLink to="/dashboard/add-subcategory">
                Add Subcategory
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/delete-subcategory">
                Delete Subcategory
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/dashboard/edit-subcategory">
                Edit Subcategory
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
