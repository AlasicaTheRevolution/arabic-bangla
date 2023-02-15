import React from "react";

const Category = () => {
  return (
    <div className="py-20 bg-[#fff]">
      <div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-5 lg:px-40 lg:gap-x-16">
        <div className="card bg-[#c0ffc6] py-5 lg:mx-0 mx-5">
          <div className="card-body items-center text-center">
            <h2 className="text-black text-[45px] font-sans font-bold uppercase">
              নাহূ
            </h2>
            <p className="text-[rgb(58,58,58)] font-medium text-[18px]">
              নাহূ আরবি ভাষা শিক্ষার প্রথম ধাপ
            </p>
            <div className="card-actions justify-end">
              <button className="bg-[#282A35] text-white px-14 text-lg py-2 rounded-full mt-5 hover:bg-black duration-300">
                নাহূ সম্পর্কে জানুন
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#ccffa3] py-5 lg:mx-0 mx-5">
          <div className="card-body items-center text-center">
            <h2 className="text-black text-[45px] font-sans font-bold uppercase">
              সার্ফ
            </h2>
            <p className="text-[rgb(58,58,58)] font-medium text-[18px]">
              সার্ফ আরবি ভাষা শিক্ষার দ্বিতীয় ধাপ
            </p>
            <div className="card-actions justify-end">
              <button className="bg-[#282A35] text-white px-14 text-lg py-2 rounded-full mt-5 hover:bg-black duration-300">
                সার্ফ সম্পর্কে জানুন
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="gird grid-cols-1 lg:px-40 lg:mt-16 mt-5">
        <div className="card bg-[#D9EEE1] py-5 lg:mx-0 mx-5">
          <div className="card-body items-center text-center">
            <h2 className="text-black text-[45px] font-sans font-bold uppercase">
              বালাগা
            </h2>
            <p className="text-[rgb(58,58,58)] font-medium text-[18px]">
              বালাগা আরবি ভাষা শিক্ষার তৃতীয় ধাপ
            </p>
            <div className="card-actions justify-end">
              <button className="bg-[#282A35] text-white px-14 text-lg py-2 rounded-full mt-5 hover:bg-black duration-300">
                বালাগা সম্পর্কে জানুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
