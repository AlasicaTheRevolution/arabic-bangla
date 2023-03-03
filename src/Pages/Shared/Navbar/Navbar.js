import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import axios from "axios";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [menus, setMenus] = useState([]);

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
  useEffect(() => {
    const categories = async () => {
      setLoading(true);
      await axios
        .get("https://arabic-bangla-backend.onrender.com/menus")
        .then((res) => setMenus(res.data));
      setLoading(false);
    };
    categories();
  }, []);
  if (loading) {
    return <div className="dots-3 top-0 bottom-0 left-0 right-0 m-auto "></div>;
  }
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
              {menus.map((menu) => (
                <li className="px-3 font-sans list-none">
                  <CustomLink to={menu.link}>{menu.name}</CustomLink>
                </li>
              ))}
              {user && (
                <li className="px-3 font-sans list-none">
                  <Link to="/dashboard" className="btn text-white rounded-full">
                    Dashboard
                  </Link>
                </li>
              )}
              {user && (
                <li className="px-3 font-sans list-none">
                  <button
                    className="btn btn-primary px-10 rounded-full text-white"
                    onClick={() => {
                      signOut(auth);
                    }}
                  >
                    Logout
                  </button>
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
          {menus.map((menu) => (
            <li
              className="px-3 font-sans list-none tooltip tooltip-bottom"
              data-tip={menu?.tooltip}
            >
              <CustomLink to={menu.link}>{menu.name}</CustomLink>
            </li>
          ))}
          {user && (
            <li className="px-3 font-sans list-none">
              <Link to="/dashboard" className="btn text-white rounded-full">
                Dashboard
              </Link>
            </li>
          )}
          {user && (
            <li className="px-3 font-sans list-none">
              <button
                className="btn btn-primary rounded-full text-white"
                onClick={() => {
                  signOut(auth);
                }}
              >
                Logout
              </button>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
