import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosInstance";

const updateProduct = async (formData, productId,) => {
  try {
    const response = await axiosInstance({
      method: 'POST',
      url: `/products/update-product/${productId}`,
      data: formData,
    });

    if (response.status === 200) {
     
      return response
    } else {
      // Handle non-200 responses explicitly
      toast.error("Error updating product");
      return null
    }
  } catch (error) {
    // Catch and log any unexpected errors
    toast.error(" error occurred updating product");
   
  }
};

export default updateProduct;
