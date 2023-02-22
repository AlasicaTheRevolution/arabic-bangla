import React, { useState } from "react";
import { toast } from "react-toastify";
import Editor from "../JoditEditor/JoditEditor";

const AddSubCategory = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const slugSpcaRemove = subcategory.toLowerCase().split(" ").join("-");
  const slugQuestionRemove = slugSpcaRemove.split("?").join("");
  const slugSlashRemove =
    slugQuestionRemove.split("/").join("") +
    "-" +
    (Math.random() * 10000).toFixed(0);

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      category: category,
      subcategory: subcategory,
      description: value,
      slug: slugSlashRemove,
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
        if (data.acknowledged) {
          toast.success("Sub category added");
          setCategory("");
          setSubcategory("");
          setValue(" ");
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
          <p className="text-gray-400 text-xs">slug: {slugSlashRemove}</p>
          <label
            htmlFor="description"
            className="block font-medium text-gray-700 mt-4"
          >
            Enter a Description
          </label>
          <Editor setValue={setValue} />
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
