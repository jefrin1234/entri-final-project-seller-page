import React from 'react';
import { Link } from 'react-router-dom';

function Header() {



  return (
    <header className='flex items-center justify-between p-5 h-20  text-white bg-gradient-to-b from-green-500 to-green-700  shadow-lg'>
      <div>
        <h3 className='text-3xl font-bold text-green-950'>Trends</h3>
      </div>
      <div className='flex gap-6'>
        <div>
          <Link
            className="px-6 py-2 bg-yellow-300 text-green-900 rounded-md hover:bg-green-100 hover:shadow-md transition-all duration-200"
            to={'/login'}
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            className="px-6 py-2 border border-green-900 rounded-md hover:bg-green-400 text-yellow-900 hover:text-green-900 hover:shadow-md transition-all duration-200"
            to={'/signin'}
          >
            Start Selling
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;