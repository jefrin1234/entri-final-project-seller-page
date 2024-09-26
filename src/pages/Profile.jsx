import React, { useEffect, useState } from 'react';
import fetchSellerDetails from '../services/fetchSellerDetails';
import { useSelector } from 'react-redux';

function Profile() {
  const [sellerData, setSellerData] = useState(null);

  const {seller} = useSelector(state=>state.user)
  
  const getSellerDetails = async (sellerId) => {
    const data = await fetchSellerDetails(sellerId); // Fetch the data
    if (data) {
      setSellerData(data.data); // Store the data in the state
    }
  };


  useEffect(() => {

    if(seller){
      getSellerDetails(seller.id);
    }
    // Call the async function to fetch data
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Seller Profile</h1>

      {sellerData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Personal Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-bold mb-4 text-green-600">Personal Details</h2>
            <p><strong>Name:</strong> {sellerData.name}</p>
            <p><strong>Email:</strong> {sellerData.email}</p>
            <p><strong>Phone:</strong> {sellerData.phone}</p>
          </div>

          {/* Business Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-bold mb-4 text-green-600">Business Details</h2>
            <p><strong>Business Name:</strong> {sellerData.businessName}</p>
            <p><strong>GSTIN Number:</strong> {sellerData.gstinNumber}</p>
            <p><strong>PAN:</strong> {sellerData.pan}</p>
          </div>

          {/* Address Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-bold mb-4 text-green-600">Address Details</h2>
            <p><strong>City:</strong> {sellerData.city}</p>
            <p><strong>State:</strong> {sellerData.state}</p>
            <p><strong>Postal Code:</strong> {sellerData.postalCode}</p>
          </div>

          {/* Bank Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-bold mb-4 text-green-600">Bank Details</h2>
            <p><strong>Account Holder Name:</strong> {sellerData.accountHolderName}</p>
            <p><strong>Account Number:</strong> {sellerData.accountNumber}</p>
            <p><strong>Bank Name:</strong> {sellerData.bankName}</p>
            <p><strong>IFSC Code:</strong> {sellerData.ifsc}</p>
          </div>

          {/* Additional Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-bold mb-4 text-green-600">Additional Information</h2>
            <p><strong>Pickup Location:</strong> {sellerData.pickupLocation}</p>
            <p><strong>Verified:</strong> {sellerData.verified}</p>
            <p>
              <strong>Registration Certificate:</strong> 
              <a 
                href={sellerData.registrationCetificate[0]} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 underline ml-2">
                View Certificate
              </a>
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
