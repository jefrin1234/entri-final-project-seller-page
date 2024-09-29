import { useState } from "react";
import updateProduct from "../services/updateProducts"; 
import toast from "react-hot-toast";
import { useProducts } from "./useProducts";

function useEditProduct(product, onClose) {

  const [editedProduct, setEditedProduct] = useState({
    ...product,
    newImages: [], 
  });
  const [preview, setPreview] = useState([]); 

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

 
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

  
    const newPreviews = files.map((file) => URL.createObjectURL(file));

    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      newImages: [...prevProduct.newImages, ...files],
    }));

    setPreview((prev) => [...prev, ...newPreviews]);
  };


  const handleImageDelete = (index) => {
    const updatedImages = editedProduct.images.filter((_, i) => i !== index);
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      images: updatedImages,
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

   
    formData.append("name", editedProduct.name);
    formData.append("category", editedProduct.category);
    formData.append("brand", editedProduct.brand);
    formData.append("price", editedProduct.price);
    formData.append("sellingPrice", editedProduct.sellingPrice);
    formData.append("stock", editedProduct.stock);
    formData.append("description", editedProduct.description);
    formData.append("colour", editedProduct.colour);

   
    editedProduct.images.forEach((imageUrl) => {
      formData.append("existingImages", imageUrl);
    });

    editedProduct.newImages.forEach((file) => {
      formData.append("images", file);
    });


    const response = await updateProduct(formData, product._id);

    if (response) {


      if (onClose) {
        onClose(); 
      }
      toast.success("prodcut updated successfully")
    
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
