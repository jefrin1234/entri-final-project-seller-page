import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {  User, Box, ShoppingCart, Star, DollarSign, LogOut, Bell, X, Upload } from 'lucide-react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { axiosInstance } from '../config/axiosInstance';
import Logout from '../compoenents/Logout';

function SellerHome() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const readNotification = useSelector(state => state.user.readNotifications);
  const unReadNotifications = useSelector(state => state.user.unReadNotifications);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);  // Close the sidebar when a link is clicked
  };

  const handleBackdropClick = () => {
    setIsSidebarOpen(false);  // Close the sidebar when clicking on the backdrop
  };


  return (
    <div className="flex h-screen mt-8">
      {/* Sidebar */}
      <aside className={`bg-gradient-to-b from-green-500 to-green-700 text-white w-64 max-w-xs shadow-xl border-r border-gray-200 flex-shrink-0 fixed inset-y-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-30 sm:relative sm:translate-x-0 overflow-auto`}>
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="sm:hidden">
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        <nav className="p-6 space-y-4">
          <ul className="space-y-4">
            <li className="flex items-center">
              <Link
                to="notifications"
                onClick={handleLinkClick}
                className={`flex items-center p-3 rounded-md transition-colors duration-300 gap-3 ${location.pathname.includes('notifications') ? 'bg-orange-300 text-green-900' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <Bell className="mr-3 h-5 w-5" />
                <div className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center">{unReadNotifications?.length}</div>
                Notifications
              </Link>
            </li>
            <li>
              <Link
                to="account"
                onClick={handleLinkClick}
                className={`flex items-center p-3 rounded-md transition-colors duration-300 ${location.pathname.includes('account') ? 'bg-violet-600 text-green-900' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={handleLinkClick}
                className={`flex items-center p-3 rounded-md transition-colors duration-300 ${location.pathname.includes('all-product') ? 'bg-orange-500 text-green-900' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <Box className="mr-3 h-5 w-5" />
                Products
              </Link>
            </li>
            <li>
              <Link
                to="uploadproducts"
                onClick={handleLinkClick}
                className={`flex items-center p-3 rounded-md transition-colors duration-300 ${location.pathname.includes('uploadproducts') ? 'bg-red-500 text-green-900' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <Upload className="mr-3 h-5 w-5" />
                List Products
              </Link>
            </li>
            <li>
              <Link
                to="orders"
                onClick={handleLinkClick}
                className={`flex items-center p-3 rounded-md transition-colors duration-300 ${location.pathname.includes('orders') ? 'bg-violet-600 text-green-900' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <ShoppingCart className="mr-3 h-5 w-5" />
                Orders
              </Link>
            </li>
           
            <li>
              <Link
                to="sales"
                onClick={handleLinkClick}
                className={`flex items-center p-3 rounded-md transition-colors duration-300 ${location.pathname.includes('sales') ? 'bg-purple-900 text-green-900' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <DollarSign className="mr-3 h-5 w-5" />
                Sales
              </Link>
            </li>
            <li>
              <button
               
                onClick={() => setShowLogoutModal(true)}
                className={`flex items-center p-3 rounded-md transition-colors duration-300 ${location.pathname.includes('logout') ? 'bg-red-400 text-green-900' : 'hover:bg-blue-600 hover:text-white'}`}
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Backdrop for mobile view */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 sm:hidden"
          onClick={handleBackdropClick}
        ></div>
      )}

      {/* Mobile menu button */}
      <div className="flex items-center justify-center p-4 bg-green-600 sm:hidden">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100  overflow-y-auto">
        <Outlet />
      </main>

      {showLogoutModal && (
        <Logout onClose={() => setShowLogoutModal(false)} />
      )}

    </div>
  );
}

export default SellerHome;
