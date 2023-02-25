import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DashboardNahu = () => {
  const [nahu, setNahu] = useState({});
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const categories = async () => {
      setLoading(true);
      await axios
        .get("https://arabic-bangla-backend.onrender.com/category/63f0aebe994071ed8e5ccda1")
        .then((res) => setNahu(res.data));
      setLoading(false);
    };
    categories();
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    const data = {
      categoryName: e.target.categoryName.value,
      categoryDescription: e.target.categoryDescription.value,
    };
    setLoading(true);
    await axios
      .put("https://arabic-bangla-backend.onrender.com/category/63f0aebe994071ed8e5ccda1", data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Successfully Updated");
        }
      });
    setLoading(false);
  };
  return (
    <div>
      <h2 className="text-black text-center text-2xl font-medium">
        Update Nahu
      </h2>
      <hr />
      <div className="card flex-shrink-0 max-w-xl shadow-2xl bg-base-100 mx-auto mt-5">
        <form onSubmit={submit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="categoryName"
              className="input input-bordered"
              defaultValue={nahu.categoryName}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="categoryDescription"
              className="input input-bordered"
              defaultValue={nahu.categoryDescription}
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent w-full shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Nahu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardNahu;
