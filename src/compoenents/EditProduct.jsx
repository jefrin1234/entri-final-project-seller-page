
import productCategoryList from '../data/productCategory';


import useEditProduct from "../hooks/useEditProduct";



  function EditProduct({ product,onClose }) {
    const {
      editedProduct,
      preview,
      handleOnChange,
      handleImageChange,
      handleImageDelete,
      handleSubmit,
    } = useEditProduct(product,onClose);

 
  
  

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-y-auto max-h-full">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Edit Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                onChange={handleOnChange}
                type="text"
                name="name"
                value={editedProduct.name}
                required
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={editedProduct.category}
                onChange={handleOnChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Select a category</option>
                {productCategoryList.map((category) => (
                  <option key={category.id} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Brand</label>
              <input
                onChange={handleOnChange}
                type="text"
                name="brand"
                value={editedProduct.brand || ''}
                required
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Price</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  name="price"
                  value={editedProduct.price}
                  required
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Colour</label>
                <input
                  onChange={handleOnChange}
                  type="text"
                  name="colour"
                  value={editedProduct.colour}
                  required
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Selling Price</label>
                <input
                  onChange={handleOnChange}
                  type="number"
                  name="sellingPrice"
                  value={editedProduct.sellingPrice}
                  required
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Stock</label>
              <input
                onChange={handleOnChange}
                type="number"
                name="stock"
                value={editedProduct.stock}
                required
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Description</label>
              <input
                onChange={handleOnChange}
                type="text"
                name="description"
                value={editedProduct.description}
                required
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

          
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Existing Images</label>
              <div className="grid grid-cols-3 gap-4">
                {editedProduct.images &&
                  editedProduct.images.length > 0 &&
                  editedProduct.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img src={image} alt="Product" className="object-cover h-32 w-full rounded-lg" />
                      <button
                        type="button"
                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                        onClick={() => handleImageDelete(index)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Add New Images</label>
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-600 hover:file:bg-green-100"
              />
              <div className="grid grid-cols-3 gap-4 mt-4">
                {preview.length > 0 &&
                  preview.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Preview ${index}`} className="h-32 w-full object-cover rounded-lg" />
                  ))}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button type="button" className="px-4 py-2 text-gray-600" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
