import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosInstance";

const fetchSellerDetails = async (sellerId) => {
  try {
    const response = await axiosInstance({
      method: 'GET',
      url: `/seller/profile/${sellerId}`,
    });
    return response.data; // Return the data
  } catch (error) {
    toast.error("Error getting profile");
    return null; // Return null in case of error
  }
};

export default fetchSellerDetails;
