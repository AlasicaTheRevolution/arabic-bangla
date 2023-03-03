import axios from "axios";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loader from "../Shared/Loader/Loader";

const NavbarEdit = () => {
  const {
    data: menus,
    isLoading,
    refetch,
  } = useQuery("categories", () =>
    fetch("https://arabic-bangla-backend.onrender.com/menus", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loader />;
  }
  const submit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      link: e.target.link.value,
      tooltip: e.target.tooltip.value,
    };
    await axios.post("https://arabic-bangla-backend.onrender.com/menu", data).then((res) => {
      if (res.data) {
        toast.success("Successfully added");
        refetch();
      }
      e.target.reset();
    });
  };
  return (
    <div>
      <h2 className="text-black text-center text-2xl font-medium">
        Add Navbar Menu
      </h2>
      <hr />
      <div className="card flex-shrink-0 max-w-xl shadow-2xl bg-base-100 mx-auto mt-5">
        <form onSubmit={submit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Link</span>
            </label>
            <input type="text" name="link" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">ToolTip</span>
            </label>
            <input
              type="text"
              name="tooltip"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent w-full shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Navbar Menu
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-4xl mx-auto my-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
                <th>ToolTip</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu, index) => (
                <tr key={menu._id}>
                  <td>{menu.name.toUpperCase()}</td>
                  <td>{menu.link}</td>
                  <td>{menu.tooltip}</td>
                  <td>
                    <button
                      className="text-center bg-error text-white text-lg p-2 rounded-full"
                      onClick={() => {
                        axios
                          .delete(
                            `https://arabic-bangla-backend.onrender.com/delete-menu/${menu._id}`
                          )
                          .then((res) => {
                            if (res.data.deletedCount > 0) {
                              toast.success("Deleted");
                              refetch();
                            }
                          });
                      }}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NavbarEdit;
