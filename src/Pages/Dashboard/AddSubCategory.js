import React, { useState } from "react";
import { toast } from "react-toastify";

const AddSubCategory = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const slug =
      subcategory.toLowerCase().replace(/\s/g, "-") +
      "-" +
      (Math.random() * 10000).toFixed(0);

    const data = {
      category: category,
      subcategory: subcategory,
      description: description,
      slug: slug,
    };

    fetch("http://localhost:5000/sub-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setCategory("");
        setSubcategory("");
        setDescription("");
        if (data.acknowledged) {
          toast.success("Sub category added");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="w-[600px] mx-auto ">
      <h3 className="text-2xl font-bold mb-3 text-center">Add Sub-category</h3>
      <div className="px-5 py-10 bg-white border ">
        <form onSubmit={handleSubmit} className="">
          <label htmlFor="category" className="block font-medium text-gray-700">
            Choose Category
          </label>

          <select
            id="category"
            name="category"
            className="select select-bordered w-full"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          >
            <option value="">Select Main Category</option>
            <option value="nahu">নাহূ</option>
            <option value="sarf">সার্ফ</option>
            <option value="balaga">বালাগা</option>
          </select>
          <label
            htmlFor="subcategory"
            className="block font-medium text-gray-700 mt-4"
          >
            Enter Sub Category Name
          </label>
          <input
            type="text"
            name="subcategory"
            id="subcategory"
            className="input input-bordered w-full"
            value={subcategory}
            onChange={(event) => setSubcategory(event.target.value)}
            required
          />
          <label
            htmlFor="description"
            className="block font-medium text-gray-700 mt-4"
          >
            Enter a Description
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            className="textarea textarea-bordered w-full"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent w-full shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Subcategory
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubCategory;
