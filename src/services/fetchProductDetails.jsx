import { axiosInstance } from "../config/axiosInstance";


const fetchProduct = async (productId) => {
  try {
    const response = await axiosInstance({
      method:'GET',
      url:`/products/product?productId=${productId}`,
   
    }); // Example API call
    console.log(response.data.data)
     return response.data.data
  } catch (error) {
    console.error('Failed to fetch product data:', error);
  }
};

export default fetchProduct