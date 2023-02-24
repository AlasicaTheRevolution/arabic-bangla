import React from "react";
import { FaEdit } from "react-icons/fa";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../Context/API_URL";
import Loader from "../Shared/Loader/Loader";

const EditSubcategory = () => {
  const navigate = useNavigate();
  const { data: categories, isLoading } = useQuery("categories", () =>
    fetch(`${API_URL}sub-categories`, {
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
                    className="text-center bg-success text-white text-lg p-2 rounded-full"
                    onClick={() => {
                      navigate(category.slug);
                    }}
                  >
                    <FaEdit />
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

export default EditSubcategory;
