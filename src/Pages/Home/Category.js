import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../Context/API_URL";
import "../Shared/Loader/Loader.css";

const Category = () => {
  const [nahu, setNahu] = useState({});
  const [sarf, setSarf] = useState({});
  const [balaga, setBalaga] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const categories = async () => {
      setLoading(true);
      await axios
        .get(`${API_URL}category/63f0aebe994071ed8e5ccda1`)
        .then((res) => setNahu(res.data));
      await axios
        .get(`${API_URL}category/63f0af63994071ed8e5ccda2`)
        .then((res) => setSarf(res.data));
      await axios
        .get(`${API_URL}category/63f0af8f994071ed8e5ccda3`)
        .then((res) => setBalaga(res.data));
      setLoading(false);
    };
    categories();
  }, []);
  return (
    <div className="py-20 bg-[#fff] relative">
      {loading ? (
        <div className="dots-3 top-0 bottom-0 left-0 right-0 m-auto"></div>
      ) : (
        <>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-5 lg:px-40 lg:gap-x-16">
            <div className="card bg-[#c0ffc6] py-5 lg:mx-0 mx-5">
              <div className="card-body items-center text-center">
                <h2 className="text-black text-[45px] font-sans font-bold uppercase">
                  {nahu.categoryName}
                </h2>
                <p className="text-[rgb(58,58,58)] font-medium text-[18px]">
                  {nahu.categoryDescription}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to="/nahu"
                    className="bg-[#282A35] text-white px-14 text-lg py-2 rounded-full mt-5 hover:bg-black duration-300"
                  >
                    {nahu.categoryName} সম্পর্কে জানুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="card bg-[#ccffa3] py-5 lg:mx-0 mx-5">
              <div className="card-body items-center text-center">
                <h2 className="text-black text-[45px] font-sans font-bold uppercase">
                  {sarf.categoryName}
                </h2>
                <p className="text-[rgb(58,58,58)] font-medium text-[18px]">
                  {sarf.categoryDescription}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to="/sarf"
                    className="bg-[#282A35] text-white px-14 text-lg py-2 rounded-full mt-5 hover:bg-black duration-300"
                  >
                    {sarf.categoryName} সম্পর্কে জানুন
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="gird grid-cols-1 lg:px-40 lg:mt-16 mt-5">
            <div className="card bg-[#D9EEE1] py-5 lg:mx-0 mx-5">
              <div className="card-body items-center text-center">
                <h2 className="text-black text-[45px] font-sans font-bold uppercase">
                  {balaga.categoryName}
                </h2>
                <p className="text-[rgb(58,58,58)] font-medium text-[18px]">
                  {balaga.categoryDescription}
                </p>
                <div className="card-actions justify-end">
                  <button className="bg-[#282A35] text-white px-14 text-lg py-2 rounded-full mt-5 hover:bg-black duration-300">
                    {balaga.categoryName} সম্পর্কে জানুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
