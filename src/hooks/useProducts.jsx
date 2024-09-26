import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { useSelector } from 'react-redux';

export const useProducts = (page = 1, limit = 20) => {
  const seller = useSelector(state=>state.user.seller)
  // const sellerId = seller?._id || seller?.id;
  // console.log(sellerId)
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0); // Total pages for pagination

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: `/products/seller-products/${seller.id}`,
        params: { page, limit } // Pass page and limit as query parameters
      });

      const products = response?.data?.data;
      const totalPages = response?.data?.totalPages;
      console.log(products)
      if (!products || products.length === 0) {
        setData([]); // No products found
      } else {
        setData(products); // Set the data with the fetched products
      }

      setTotalPages(totalPages); // Set total pages
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
  }, [page]); // Refetch products when the page changes

  return [data, error, loading, totalPages];
};
