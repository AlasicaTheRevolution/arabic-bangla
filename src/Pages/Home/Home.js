import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/bg.png";
import Category from "./Category";

function Home() {
  return (
    <div className="home-bg">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-content text-center text-neutral-content z-10">
          <div className="max-w-lg">
            <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold text-white  bg-black bg-opacity-50 p-10 rounded-xl">
              আরবি ভাষা শিখুন বাংলায়
            </h1>
            <Link to="/" className="btn btn-primary text-xl text-white px-10">
              শুরু করুন
            </Link>
          </div>
        </div>
      </div>
      <Category/>
    </div>
  );
}

export default Home;
