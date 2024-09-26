import React from 'react'

function Home() {
  return (
    <div className='bg-white  '>
 
 <div className='gap-4 flex flex-col lg:flex-row bg-gray-100'>
 
  <div className='gap-4 lg:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-r from-green-900 to-green-700 text-white'>
    <h1 className='text-5xl font-bold mb-6 leading-tight'>
      Become a Seller and Earn with Us
    </h1>
    <p className='text-lg leading-relaxed'>
      Welcome to our Seller Hub, where your business can shine! Here, you’ll find everything you need to showcase your products, manage your sales, and connect with your customers. Our platform is designed to make selling easy and efficient, providing you with powerful tools to track your inventory, process orders, and analyze performance. Whether you’re an established retailer or just starting out, we’re here to support you every step of the way. Start listing your products, reach a wider audience, and grow your business with us!
    </p>
    <button className='mt-8 py-3 px-6 bg-white text-green-900 font-semibold rounded-lg shadow-md hover:bg-green-100 transition duration-300'>
      Get Started
    </button>
  </div>

  <div className='lg:w-1/2 relative'>
    <img className='w-full h-full object-cover shadow-md lg:rounded-l-lg' src="https://media.istockphoto.com/id/2159422389/photo/blocks-of-foam-rubber-in-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=d6FdseyDVUGKfmEbwTcZ9Ua9Iq9xJ2OPMcGHrLeUJoE=" alt="Warehouse" />
    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50'></div>
  </div>
</div>


<div className='p-8 bg-gray-100'>
  <h2 className='text-4xl font-bold text-green-900 mb-8 text-center'>Why You Should Sell</h2>
  <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>

  
    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105'>
      <div className='bg-green-100 p-4 rounded-full mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414l-2.707-2.707V5z" clipRule="evenodd" />
        </svg>
      </div>
      <span className='text-xl font-semibold text-green-700 mb-3'>Opportunity</span>
      <p className='text-gray-700 text-center'>Our customer community is very large. Selling on this huge market will be a great opportunity to expand your business.</p>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105'>
      <div className='bg-blue-100 p-4 rounded-full mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 6a1 1 0 012 0v5a1 1 0 01-2 0V8z" clipRule="evenodd" />
        </svg>
      </div>
      <span className='text-xl font-semibold text-blue-700 mb-3'>Ease of Doing Business</span>
      <p className='text-gray-700 text-center'>Create your Flipkart seller account in under 10 minutes with simple details and a valid GSTIN number.</p>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105'>
      <div className='bg-yellow-100 p-4 rounded-full mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-10.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
        </svg>
      </div>
      <span className='text-xl font-semibold text-yellow-700 mb-3'>Growth</span>
      <p className='text-gray-700 text-center'>Sellers see an average 2.8X spike in growth, 2.3X more visibility, and up to 5X growth in The Big Billion Days Sale.</p>
    </div>

    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105'>
      <div className='bg-red-100 p-4 rounded-full mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 9a3 3 0 016 0v1a3 3 0 01-3 3v4a1 1 0 11-2 0v-4a3 3 0 01-3-3V9zM9 7a1 1 0 112-0 1 1 0 01-2 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className='text-xl font-semibold text-red-700 mb-3'>Additional Support</span>
      <p className='text-gray-700 text-center'>Account management services, exclusive training programs, business insights, catalogue/photoshoot support, and more.</p>
    </div>

  </div>
</div>

  
<div className='p-8 bg-blue-50'>
  <h2 className='text-4xl font-extrabold text-blue-900 mb-6 text-center'>Start Your Business Journey with Us</h2>
  <p className='text-lg text-gray-600 mb-8 text-center'>Follow these simple steps to create your business account and get started with ease.</p>
  
  <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
  
    <div className='bg-white p-6 rounded-xl shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105'>
      <div className='bg-blue-100 p-4 rounded-full mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zM4.5 8a5.5 5.5 0 109.217-4.707l-8.49 8.49A5.472 5.472 0 004.5 8zm4.207 4.707l8.49-8.49A5.5 5.5 0 004.5 8a5.5 5.5 0 004.207 4.707z" clipRule="evenodd" />
        </svg>
      </div>
      <span className='text-xl font-semibold text-blue-800 mb-3'>Step 1: Sign Up</span>
      <p className='text-gray-600 text-center'>Create your account by signing up with your name, email, and password.</p>
    </div>

   
    <div className='bg-white p-6 rounded-xl shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105'>
      <div className='bg-green-100 p-4 rounded-full mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 4a1 1 0 011 1v6h6a1 1 0 010 2h-6v6a1 1 0 01-2 0v-6H4a1 1 0 010-2h6V5a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </div>
      <span className='text-xl font-semibold text-green-800 mb-3'>Step 2: Add Business Details</span>
      <p className='text-gray-600 text-center'>Provide essential business details to complete your profile.</p>
    </div>

    
    <div className='bg-white p-6 rounded-xl shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105'>
      <div className='bg-yellow-100 p-4 rounded-full mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2 8a6 6 0 0112 0v5a2 2 0 002 2h2a1 1 0 011 1v1a1 1 0 01-1 1H1a1 1 0 01-1-1v-1a1 1 0 011-1h2a2 2 0 002-2V8z" clipRule="evenodd" />
        </svg>
      </div>
      <span className='text-xl font-semibold text-yellow-800 mb-3'>Step 3: Add Account Details</span>
      <p className='text-gray-600 text-center'>Enter your account details to facilitate transactions.</p>
    </div>

    <div className='bg-white p-6 rounded-xl shadow-xl flex flex-col items-center transform transition duration-300 hover:scale-105'>
      <div className='bg-red-100 p-4 rounded-full mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-700" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v2H8V4a1 1 0 00-2 0v2H5V4a1 1 0 00-2 0v2H2a1 1 0 00-1 1v8a1 1 0 001 1h16a1 1 0 001-1V7a1 1 0 00-1-1h-1V4a1 1 0 00-2 0v2h-1V4a1 1 0 00-2 0v2h-1V4a1 1 0 00-1-1zM2 8h16v8H2V8z" clipRule="evenodd" />
        </svg>
      </div>
      <span className='text-xl font-semibold text-red-800 mb-3'>Step 4: Finalize Setup</span>
      <p className='text-gray-600 text-center'>Review and finalize your account setup to get started.</p>
    </div>
  </div>
</div>
<div className='flex justify-end p-8'>
  
<button className=" px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200">
  Create account
</button>
</div>


    </div>
  )
}

export default Home
