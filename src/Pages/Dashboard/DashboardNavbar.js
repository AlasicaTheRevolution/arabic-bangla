import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const DashboardNavbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div className="navbar py-5 bg-[#f5fcf8] justify-between">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-sans list-none">
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li className="font-sans list-none">
                <CustomLink to="/nahu">Nahu</CustomLink>
              </li>
              <li className="font-sans list-none">
                <CustomLink to="/sarf">Sarf</CustomLink>
              </li>
              <li className="font-sans list-none">
                <CustomLink to="/balaga">Balaga</CustomLink>
              </li>
              <li className="font-sans list-none">
                <CustomLink to="/blogs">Blogs</CustomLink>
              </li>
              <li className="font-sans list-none">
                <CustomLink to="/uses">Uses</CustomLink>
              </li>
              <li className="font-sans list-none">
                <CustomLink to="/books">Books</CustomLink>
              </li>
              <li className="font-sans list-none">
                <button
                  className="btn btn-primary px-10 rounded-full text-white"
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case text-2xl no-animation btn btn-ghost"
          >
            Arabic Bangla
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <li className="px-3 font-sans list-none">
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li className="px-3 font-sans list-none">
            <CustomLink to="/nahu">Nahu</CustomLink>
          </li>
          <li className="px-3 font-sans list-none">
            <CustomLink to="/sarf">Sarf</CustomLink>
          </li>
          <li className="px-3 font-sans list-none">
            <CustomLink to="/balaga">Balaga</CustomLink>
          </li>
          <li className="px-3 font-sans list-none">
            <CustomLink to="/blogs">Blogs</CustomLink>
          </li>
          <li className="px-3 font-sans list-none">
            <CustomLink to="/uses">Uses</CustomLink>
          </li>
          <li className="px-3 font-sans list-none">
            <CustomLink to="/books">Books</CustomLink>
          </li>
          <li className="font-sans list-none">
            <button
              className="btn btn-primary px-10 rounded-full text-white"
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout
            </button>
          </li>
        </div>
        <div className="navbar-end lg:hidden">
          {user && (
            <label
              htmlFor="my-drawer-2"
              className="btn btn-accent text-white drawer-button m-0 lg:hidden lg:ml-10"
            >
              ☰
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
