import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
// import logo from "../../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
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
    scrollTop >= 80
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <div>
      <div className="navbar bg-base-100 py-5 bg-transparent fixed justify-between">
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
        </div>
      </div>
      {/* <nav class="navbar navbar-expand-lg navbar-light py-3 fixed">
        <div class="container">
          <Link to="/" class="btn btn-ghost text-lg">
            Arabic Bangla
          </Link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="navbar-collapse justify-content-end collapse"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav justify-content-end">
              <li className="nav-item">
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li class="nav-item">
                <Link to="/ff"
                  class="nav-link text-dark"
                  href="#"
                >
                  Books
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
