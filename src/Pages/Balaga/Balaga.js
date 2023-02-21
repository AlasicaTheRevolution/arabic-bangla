import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NahuSubCategory from "../Nahu/NahuSubCategory";
import Navbar from "../Shared/Navbar/Navbar";


function Sarf() {
  const [subCategory, setSubCategory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/sub-category?category=balaga`)
      .then(res => res.json())
      .then(data => setSubCategory(data))
  }, [])


  return (
    <div>
      <Navbar />
      <div className="min-h-screen ">
        <div className="sub-category">
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F1F5F9] px-10">
              <Outlet />
              
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              <ul className="menu p-4 px-[3px]  overflow-y-auto w-64 bg-base-100 text-base-content">
                {subCategory.map(sb => 
                <NahuSubCategory sb={sb} subCategory={subCategory} setSubCategory={setSubCategory} key={sb._id} />
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
