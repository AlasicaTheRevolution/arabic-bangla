import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".navbar");
    const scrollTop = window.scrollY;
    scrollTop >= 10
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <div>
      <div className="z-50 navbar bg-base-100 py-5 bg-transparent fixed justify-between">
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
              {/* <li className="font-sans list-none">
                <CustomLink to="/blogs">Blogs</CustomLink>
              </li>
              <li className="font-sans list-none">
                <CustomLink to="/uses">Uses</CustomLink>
              </li>
              <li className="font-sans list-none">
                <CustomLink to="/books">Books</CustomLink>
              </li> */}
              {user && (
                <li className="px-3 font-sans list-none">
                  <Link to="/dashboard" className="btn text-white rounded-full">
                    Dashboard
                  </Link>
                </li>
              )}
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
          {/* <li className="px-3 font-sans list-none">
            <CustomLink to="/blogs">Blogs</CustomLink>
          </li>
          <li className="px-3 font-sans list-none">
            <CustomLink to="/uses">Uses</CustomLink>
          </li>
          <li className="px-3 font-sans list-none">
            <CustomLink to="/books">Books</CustomLink>
          </li> */}
          {user && (
            <li className="px-3 font-sans list-none">
              <Link to="/dashboard" className="btn text-white rounded-full">
                Dashboard
              </Link>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
