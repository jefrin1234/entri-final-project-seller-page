import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { useSelector } from 'react-redux';

export const useProducts = (page = 1, limit = 20) => {
  const seller = useSelector(state=>state.user.seller)
 
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0); 
  const fetchProducts = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: `/products/seller-products/${seller.id}`,
        params: { page, limit } 
      });

      const products = response?.data?.data;
      const totalPages = response?.data?.totalPages;
      console.log(products)
      if (!products || products.length === 0) {
        setData([]); 
      } else {
        setData(products);
      }

      setTotalPages(totalPages); 
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setData([]);
        setError(null);
      } else {
        setError(error);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]); 

  return [data, error, loading, totalPages];
};
