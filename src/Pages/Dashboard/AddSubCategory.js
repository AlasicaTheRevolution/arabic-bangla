import React, { useEffect, useState } from 'react';

const AddSubCategory = () => {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
          .then((response) => response.json())
          .then((data) => setCategories(data))
          .catch((error) => console.error(error));
      }, []);


    function handleSubmit(event) {
        event.preventDefault();
    
        const data = {
            category: category,
            subcategory: subcategory,
            description: description
        };
    
        fetch('http://localhost:5000/sub-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Reset form fields after successful submission
            setCategory("");
            setSubcategory("");
            setDescription("");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    

    return (
        <div className='w-[600px] mx-auto '>
            <h3 className='text-2xl font-bold mb-3 text-center'>Add Sub-category</h3>
            <div className='px-5 py-10 bg-white border '>
                <form onSubmit={handleSubmit} className="">
                    <label htmlFor="category" className="block font-medium text-gray-700">
                        Choose Category
                    </label>
                    
                    <select
                        id="category"
                        name="category"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option value="">---------</option>
                        <option value="nahu">নাহূ</option>
                        <option value="sarf">সার্ফ</option>
                        <option value="balaga">বালাগা</option>
                    </select>
                    <label htmlFor="subcategory" className="block font-medium text-gray-700 mt-4">
                       Enter a Sub Category
                    </label>
                    <input
                        type="text"
                        name="subcategory"
                        id="subcategory"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={subcategory} placeholder="Enter a Sub Category"
                        onChange={(event) => setSubcategory(event.target.value)}
                    />
                    <label htmlFor="description" className="block font-medium text-gray-700 mt-4">
                       Enter a Description
                    </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={description} placeholder="Enter a Description"
                        onChange={(event) => setDescription(event.target.value)}
                    />
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
