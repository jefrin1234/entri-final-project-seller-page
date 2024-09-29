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
      
      toast.error("Error updating product");
      return null
    }
  } catch (error) {
  
    toast.error(" error occurred updating product");
   
  }
};

export default updateProduct;
