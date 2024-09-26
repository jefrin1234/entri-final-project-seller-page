import React from 'react';
import { axiosInstance } from '../config/axiosInstance'; // Adjust the import path as needed
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout({ onClose }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance({
        method: 'POST',
        url: 'seller/logout'
      });
      toast.success('Logged out successfully');
      navigate('/');
      onClose(); // Close the modal after logging out
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-semibold mb-4 text-red-900">Are you sure you want to log out?</h1>
        <div className="flex justify-end gap-4">
          
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
            onClick={onClose} // Close modal on cancel
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={handleLogout} // Perform logout
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;




