import React, { useState } from 'react';
import { Edit, Star } from 'lucide-react';
import EditProduct from './EditProduct';
import { useNavigate } from 'react-router-dom';
function ProductCard({ product }) {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate()
  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const onViewRatings = (productId)=>{
    navigate(`product-rating/${productId}`)
  }

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl mx-auto border border-gray-200 max-w-md w-full sm:max-w-xl lg:max-w-3xl">
  
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src={product.images[0]}
            alt={product.name}
          />
        
          <button
            onClick={handleEditToggle}
            className="absolute top-3 right-3 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-md hover:bg-green-700 transition-colors"
          >
            <Edit size={16} />
          </button>
        </div>

      
        <div className="p-6 bg-green-100 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h2>
          <div className="flex items-center justify-between">
            <span className="text-green-600 font-bold text-lg">${product.price}</span>
          </div>

         
          <button
            onClick={()=>onViewRatings(product._id)}
            className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
          >
            <Star size={16} />
             Ratings
          </button>
        </div>
      </div>

      {isEdit && <EditProduct product={product} onClose={handleEditToggle} />}
    </>
  );
}

export default ProductCard;
