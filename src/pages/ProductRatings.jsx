import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../config/axiosInstance';
import toast from 'react-hot-toast';

const ITEMS_PER_PAGE = 5;

function ProductRatings() {
  const [ratings, setRatings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRatings, setTotalRatings] = useState(0); 
  const { productId } = useParams();

  const fetchProductRatings = async (productId, page) => {
    try {
      const response = await axiosInstance({
        method: 'GET',
        url: `rating/product/${productId}?page=${page}&limit=${ITEMS_PER_PAGE}`,
      });

      if (response) {
        setRatings(response.data.data); 
        setTotalRatings(response.data.totalRatings); 
      } else {
        toast.error('Error getting ratings');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error getting product ratings');
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductRatings(productId, currentPage);
    }
  }, [productId, currentPage]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (v, i) => (
      <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  const totalPages = Math.ceil(totalRatings / ITEMS_PER_PAGE);
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col min-h-screen"> 
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Ratings</h2>

  
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Total Ratings: <span className="text-blue-500">{totalRatings || 0}</span>
        </p>
      </div>

    
      <div className="flex flex-col flex-grow">
        {ratings?.length > 0 ? (
          <div className="space-y-4 flex-grow"> 
            {ratings.map((rating, index) => (
              <div 
                key={index}
                className="border rounded-lg shadow-md p-4 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">{rating.userId?.name}</h4>
                  <p className="text-gray-600">{rating.comment}</p>
                  <div className="text-yellow-500 flex">{renderStars(rating.rating)}</div>
                </div>
                <p className="text-sm text-gray-500 sm:text-right mt-2 sm:mt-0">
                  {new Date(rating.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-red-900 text-xl">No ratings available for this product.</p>
          </div>
        )}
      </div>
      
    
      {totalRatings > 0 && (
        <div className="mt-6 flex justify-center space-x-2"> 
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-600' : 'bg-blue-500 text-white'}`}
          >
            Previous
          </button>

        
          {Array.from({ length: Math.min(2, totalPages) }, (v, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(currentPage + i)}
              className={`px-4 py-2 border rounded ${currentPage + i === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              disabled={i + currentPage > totalPages}
            >
              {currentPage + i}
            </button>
          ))}

    
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-600' : 'bg-blue-500 text-white'}`}
          >
            Next
          </button>  
        </div>
      )}
    </div>
  );
}

export default ProductRatings;
