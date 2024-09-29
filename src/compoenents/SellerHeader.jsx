import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from './Logout';

function SellerHeader() {
  const unReadNotifications = useSelector(state => state.user.unReadNotifications);
  const [logoutModel, setLogoutModel] = useState(false);

  return (
    <header className="text-white bg-green-500 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
       
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-green-700 transition-colors duration-300">Trends</Link>
        </div>

       
        <nav className="hidden md:flex space-x-6">
          <Link to="/seller/dashboard" className="text-lg font-semibold hover:text-green-700 transition-colors duration-300">
            Seller Dashboard
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                <img
                  alt="User Avatar"
                  src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-3 w-52 p-2 shadow-lg ring-1 ring-gray-200"
            >
              <li className="hover:bg-gray-50 rounded-lg transition-all duration-200 ease-in-out">
                <Link
                  to="account"
                  aria-label="Account"
                  className="justify-between px-3 py-2 text-gray-700 hover:text-primary font-medium"
                >
                  Profile
                  <span className="badge badge-primary">New</span>
                </Link>
              </li>
              <li className="hover:bg-gray-50 rounded-lg transition-all duration-200 ease-in-out">
                <a className="px-3 py-2 text-gray-700 hover:text-primary font-medium">Settings</a>
              </li>
              <li onClick={() => setLogoutModel(true)} className="hover:bg-gray-50 rounded-lg transition-all duration-200 ease-in-out">
                <a className="px-3 py-2 text-gray-700 hover:text-primary font-medium">Logout</a>
              </li>
            </ul>
          </div>

          <Link to={'notifications'} aria-label="Notifications" className="relative inline-block">
            <div className='flex items-center'>
              <Bell className="h-12 w-8 text-green-900 hover:text-orange-500 transition-colors duration-300" />
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center -translate-x-1/2 translate-y-1/2">
                {unReadNotifications?.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
      {logoutModel && <Logout onClose={() => setLogoutModel(false)} />}
    </header>
  );
}

export default SellerHeader;