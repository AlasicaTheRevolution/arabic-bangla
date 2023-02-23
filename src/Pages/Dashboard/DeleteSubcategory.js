import axios from "axios";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loader from "../Shared/Loader/Loader";

const DeleteSubcategory = () => {
  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery("categories", () =>
    fetch("http://localhost:5000/sub-categories", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-4xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#ID</th>
              <th>Main Category</th>
              <th>Sub Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id}>
                <th>{index + 1}</th>
                <td>{category.category.toUpperCase()}</td>
                <td>{category.subcategory.slice(0, 20) + "..."}</td>
                <td>
                  <button
                    className="text-center bg-error text-white text-lg p-2 rounded-full"
                    onClick={() => {
                      axios
                        .delete(
                          `http://localhost:5000/delete-sub-category/${category._id}`
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
  );
};

export default DeleteSubcategory;
