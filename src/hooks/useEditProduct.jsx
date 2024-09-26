import { useState } from "react";
import updateProduct from "../services/updateProducts"; // Assuming you have the service here
import toast from "react-hot-toast";
import { useProducts } from "./useProducts";

function useEditProduct(product, onClose) {

  const [editedProduct, setEditedProduct] = useState({
    ...product,
    newImages: [], // To store newly added images
  });
  const [preview, setPreview] = useState([]); // Store image previews

  // Handle input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle image selection (new images)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    // Create previews for the selected files
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      newImages: [...prevProduct.newImages, ...files],
    }));

    setPreview((prev) => [...prev, ...newPreviews]);
  };

  // Delete existing images
  const handleImageDelete = (index) => {
    const updatedImages = editedProduct.images.filter((_, i) => i !== index);
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      images: updatedImages,
    }));
  };

  // Submit the form data (with both existing and new images)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append text data
    formData.append("name", editedProduct.name);
    formData.append("category", editedProduct.category);
    formData.append("brand", editedProduct.brand);
    formData.append("price", editedProduct.price);
    formData.append("sellingPrice", editedProduct.sellingPrice);
    formData.append("stock", editedProduct.stock);
    formData.append("description", editedProduct.description);
    formData.append("colour", editedProduct.colour);

    // Handle images: Append existing images (as URLs) and new images (as files)
    editedProduct.images.forEach((imageUrl) => {
      formData.append("existingImages", imageUrl);
    });

    editedProduct.newImages.forEach((file) => {
      formData.append("images", file);
    });


    const response = await updateProduct(formData, product._id);

    if (response) {


      if (onClose) {
        onClose(); // Ensure onClose is being called properly
      }
      toast.success("prodcut updated successfully")
      // onClose()
    }



  };

  return {
    editedProduct,
    preview,
    handleOnChange,
    handleImageChange,
    handleImageDelete,
    handleSubmit,
  };
}

export default useEditProduct;
