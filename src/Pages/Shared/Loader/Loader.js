import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div>
        <div className="dots-3"></div>
      </div>
    </div>
  );
};

export default Loader;
