
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-b from-green-500 to-green-700 shadow-lg">
      <div className="flex items-center justify-between p-5 h-20 text-white max-w-screen-xl mx-auto">
        
        <h3 className="text-2xl md:text-3xl font-bold text-green-950">Trends</h3>

       
        <div className="hidden lg:flex gap-6">
          <Link
            className="px-6 py-2 bg-yellow-300 text-green-900 rounded-md hover:bg-green-100 hover:shadow-md transition-all duration-200"
            to={'/login'}
          >
            Login
          </Link>
          <Link
            className="px-6 py-2 border border-green-900 rounded-md hover:bg-green-400 text-yellow-900 hover:text-green-900 hover:shadow-md transition-all duration-200"
            to={'/signin'}
          >
            Start Selling
          </Link>
        </div>

 
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-green-500 to-green-700 p-4">
          <div className="flex flex-col gap-4">
            <Link
              className="px-4 py-2 bg-yellow-300 text-green-900 rounded-md hover:bg-green-100 hover:shadow-md transition-all duration-200"
              to={'/login'}
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              className="px-4 py-2 border border-green-900 rounded-md hover:bg-green-400 text-yellow-900 hover:text-green-900 hover:shadow-md transition-all duration-200"
              to={'/signin'}
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Selling
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
