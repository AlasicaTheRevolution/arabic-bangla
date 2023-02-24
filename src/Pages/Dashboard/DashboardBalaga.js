import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../Context/API_URL";

const DashboardBalaga = () => {
  const [Sarf, setSarf] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const categories = async () => {
      setLoading(true);
      await axios
        .get(`${API_URL}category/63f0af8f994071ed8e5ccda3`)
        .then((res) => setSarf(res.data));
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
      .put("${API_URL}category/63f0af8f994071ed8e5ccda3", data)
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
        Update Sarf
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
              defaultValue={Sarf.categoryName}
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
              defaultValue={Sarf.categoryDescription}
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent w-full shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update Sarf
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardBalaga;
