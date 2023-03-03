import React from "react";
import { Link } from "react-router-dom";
import Category from "./Category";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-bg bg-[#FFF4A3]">
        <div className="hero lg:h-[100vh] h-[80vh]">
          <div className="hero-content text-center text-neutral-content z-10">
            <div className="max-w-lg">
              <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold text-black bg-white bg-opacity-50 p-10 rounded-xl">
                আরবি ভাষা শিখুন বাংলায়
              </h1>
              <Link
                to="/nahu"
                className="btn btn-primary text-xl text-white px-10"
              >
                শুরু করুন
              </Link>
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1676457415 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <Category />
      </div>
    </div>
  );
}

export default Home;

// arabic-admin
// 9dYPUGIYRJVVnN2m
