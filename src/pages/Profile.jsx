
import React, { useEffect, useState } from 'react';
import fetchSellerDetails from '../services/fetchSellerDetails';
import { useSelector } from 'react-redux';

function Profile() {
  const [sellerData, setSellerData] = useState(null);
  const { seller } = useSelector(state => state.user);

  const getSellerDetails = async (sellerId) => {
    const data = await fetchSellerDetails(sellerId);
    if (data) {
      setSellerData(data.data);
    }
  };

  useEffect(() => {
    if (seller) {
      getSellerDetails(seller.id);
    }
  }, [seller]);

  return (
    <div className="container mx-auto px-4 py-6 lg:py-10 min-h-screen">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-8 text-center text-gray-800">
        Seller Profile
      </h1>

      {sellerData ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Personal Details */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4 text-green-700">Personal Details</h2>
            <p className="text-gray-700"><strong>Name:</strong> {sellerData.name}</p>
            <p className="text-gray-700 break-words">
              <strong>Email:</strong> {sellerData.email}
            </p>
            <p className="text-gray-700"><strong>Phone:</strong> {sellerData.phone}</p>
          </div>

          {/* Business Details */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4 text-green-700">Business Details</h2>
            <p className="text-gray-700"><strong>Business Name:</strong> {sellerData.businessName}</p>
            <p className="text-gray-700"><strong>GSTIN Number:</strong> {sellerData.gstinNumber}</p>
            <p className="text-gray-700"><strong>PAN:</strong> {sellerData.pan}</p>
          </div>

          {/* Address Details */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4 text-green-700">Address Details</h2>
            <p className="text-gray-700"><strong>City:</strong> {sellerData.city}</p>
            <p className="text-gray-700"><strong>State:</strong> {sellerData.state}</p>
            <p className="text-gray-700"><strong>Postal Code:</strong> {sellerData.postalCode}</p>
          </div>

          {/* Bank Details */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4 text-green-700">Bank Details</h2>
            <p className="text-gray-700"><strong>Account Holder Name:</strong> {sellerData.accountHolderName}</p>
            <p className="text-gray-700 break-words">
              <strong>Account Number:</strong> {sellerData.accountNumber}
            </p>
            <p className="text-gray-700"><strong>Bank Name:</strong> {sellerData.bankName}</p>
            <p className="text-gray-700"><strong>IFSC Code:</strong> {sellerData.ifsc}</p>
          </div>

          {/* Additional Information */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-xl font-bold mb-4 text-green-700">Additional Information</h2>
            <p className="text-gray-700"><strong>Pickup Location:</strong> {sellerData.pickupLocation}</p>
            <p className="text-gray-700">
              <strong>Verified:</strong> {sellerData.verified ? 'Yes' : 'No'}
            </p>
            <p className="text-gray-700">
              <strong>Registration Certificate:</strong>
              <a
                href={sellerData.registrationCetificate[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline ml-2 hover:text-blue-700"
              >
                View Certificate
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl font-medium text-gray-600">Loading...</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
