import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import SubCategory from "../SubCategory/SubCategory";

function Sarf() {
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      await fetch(
        `https://arabic-bangla-backend.onrender.com/sub-category?category=sarf`
      )
        .then((res) => res.json())
        .then((data) => setSubCategory(data));
      setLoading(false);
    };
    data();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-24">
        <ul class="lg:hidden w-full text-center px-2">
          {loading ? (
            <div className="dots-3 top-0 bottom-0 left-0 right-0 m-auto"></div>
          ) : (
            ""
          )}
          {subCategory.length > 0 ? (
            subCategory.map((sb) => <><SubCategory sb={sb} key={sb._id} />&nbsp;&nbsp; | &nbsp;&nbsp;</>)
          ) : (
            <h2 className="text-center">No content</h2>
          )}
        </ul>
        <div className="sub-category">
          <div className="drawer drawer-mobile">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F1F5F9] px-10">
              <Outlet />
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 px-[3px]  overflow-y-auto w-64 bg-base-100 text-base-content">
                {loading ? (
                  <div className="dots-3 top-0 bottom-0 left-0 right-0 m-auto"></div>
                ) : (
                  ""
                )}
                {subCategory.length > 0 ? (
                  subCategory.map((sb) => <SubCategory sb={sb} key={sb._id} />)
                ) : (
                  <h2 className="text-center">No content</h2>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sarf;
