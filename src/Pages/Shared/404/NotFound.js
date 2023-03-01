import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div class="container leading-[5]" >
      <h1 className="text-3xl lg:text-5xl">An error has occurred.</h1>
      <h1>
        <span class="ascii text-xl">(╯°□°）╯︵ ┻━┻</span>
      </h1>
      <Link className="btn rounded-full px-20 text-white"  to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
