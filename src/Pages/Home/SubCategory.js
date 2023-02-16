import { useState } from 'react';

function AddCategory() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryTitle, setCategoryTitle] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTitleChange = (event) => {
    setCategoryTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selectedCategory and categoryTitle values
    // For example, you could add them to a list of categories stored in state
    // or send them to a server using an API call
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Select Category</label>
        <select value={selectedCategory} onChange={handleCategoryChange} id="category" name="category" className="w-full border border-gray-300 p-2 rounded-md">
          <option value="">-- Select a category --</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Category Title</label>
        <input type="text" value={categoryTitle} onChange={handleTitleChange} id="title" name="title" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Category</button>
    </form>
  );
}

export default AddCategory;
