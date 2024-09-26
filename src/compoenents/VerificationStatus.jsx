import React from 'react';
import { Link } from 'react-router-dom';

function VerificationStatus() {
  return (
    <div className="  bg-green-500 flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-8 shadow-lg rounded-md text-center max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Verification Status</h1>
        <p className="text-gray-700 mb-6">
          Your request for becoming a seller has been submitted. Once the verification is done, you will receive an email. 
          You can log in through the link in the email using your created email and password.
          Thank you for becoming a part of us. Have a great journey!
        </p>
        <Link to={'/'} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default VerificationStatus;
