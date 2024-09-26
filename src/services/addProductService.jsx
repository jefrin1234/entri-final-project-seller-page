import toast from "react-hot-toast"

import { axiosInstance } from "../config/axiosInstance";

export const addProduct = async (formData,navigate) => {
  
 

  try {
    const response = await axiosInstance({
      url: '/products/add-product',
      method: 'POST',       
      data: formData,
    });
    console.log(response);
    
    toast.success("Product waiting for varification")
    navigate('/seller/dashboard')
    
  } catch (error) {
   
     toast.error("error adding product")
    
  }
};


