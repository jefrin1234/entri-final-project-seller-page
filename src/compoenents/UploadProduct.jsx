
import productCategoryList from '../data/productCategory';
import useProductForm from '../hooks/useUploadProduct';
import { XCircleIcon } from 'lucide-react';




function UploadProduct() {

 
    const {
      data,
      preview,
      handleOnchange,
      handleImage,
      handleDeleteImage,
      handleSubmit,
    } = useProductForm();

 

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Product</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleOnchange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={data.brand}
              onChange={handleOnchange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Colour</label>
            <input
              type="text"
              name="colour"
              value={data.colour}
              onChange={handleOnchange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Category</label>
            <select
              name="category"
              value={data.category}
              onChange={handleOnchange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select a category</option>
              {productCategoryList.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={data.price}
              onChange={handleOnchange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">Selling Price</label>
            <input
              type="number"
              name="sellingPrice"
              value={data.sellingPrice}
              onChange={handleOnchange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleOnchange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Stock</label>
          <input
            type="text"
            name="stock"
            value={data.stock}
            onChange={handleOnchange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Product Images</label>
          <input
            type="file"
            onChange={handleImage}
            multiple
            className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {preview.map((src, index) => (
            <div key={index} className="relative">
              <img src={src} alt={`Preview ${index}`} className="w-24 h-24 object-cover rounded-md shadow-sm" />
              <button
                type="button"
                onClick={() => handleDeleteImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs shadow-md hover:bg-red-600"
              >
                <XCircleIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default UploadProduct;
