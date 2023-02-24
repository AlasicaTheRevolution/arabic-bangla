import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../../Context/API_URL";
import EditCategoryEditor from "./EditCategoryEditor";

const EditSubcategoryContent = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      await fetch(`${API_URL}sub-category/${slug}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => setSubcategory(res));
      setLoading(false);
    };
    data();
  }, [slug]);

  const [value, setValue] = useState(subcategory?.description);

  if (loading) {
    return <loader />;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      category: category,
      subcategory: subcategory.subcategory,
      description: value,
      slug: subcategory.slug,
    };

    setLoading(false);
    fetch(`${API_URL}update-sub-category/${slug}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Sub category Updated");
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error(error);
      });
    setLoading(false);
  }
  return (
    <div className="mx-5">
      <h3 className="text-2xl font-bold mb-3 text-center">Add Sub-category</h3>
      <div className="px-5 py-10 bg-white border rounded-lg relative">
        {loading ? (
          <div className="bg-[#00000025] absolute right-0 left-0 bottom-0 top-0 z-50">
            <div className="dots-3 absolute top-0 bottom-0 right-0 left-0 m-auto"></div>
          </div>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit} className="rounded-lg">
          <label htmlFor="category" className="block font-medium text-gray-700">
            Update Category
          </label>

          <select
            id="category"
            name="category"
            className="select select-bordered w-full"
            defaultValue={subcategory.category}
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
            Update Sub Category Name
          </label>
          <input
            type="text"
            name="subcategory"
            id="subcategory"
            className="input input-bordered w-full"
            defaultValue={subcategory.subcategory}
            onChange={(event) => setSubcategory(event.target.value)}
            required
          />
          <label
            htmlFor="description"
            className="block font-medium text-gray-700 mt-4"
          >
            Update Description
          </label>
          <EditCategoryEditor setValue={setValue} value={subcategory.description} />
          {value}
          <button
            type="submit"
            className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent w-full shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Subcategory
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSubcategoryContent;
