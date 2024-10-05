import React, { useState } from 'react';
import { axiosInstance } from '../config/axiosInstance';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from './LoadingComponent';

import { Link } from 'react-router-dom';
import fetchNotifications from '../services/fetchNotifications';
function Notifications() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const readNotifications = useSelector(state => state.user.readNotifications);
  const unReadNotifications = useSelector(state => state.user.unReadNotifications);

  const [activeTab, setActiveTab] = useState('unread'); 

  const handleDeleteNotification = async (id) => {
    try {
      await axiosInstance.delete(`/seller/delete-notification/${id}`);
      toast.success('Notification deleted');
      fetchNotifications(dispatch)
     
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete notification');
    }
  };

  if (loading) {
    return (
      <>
              <LoadingComponent />
      </>
    );
  }

  return (
    <div className="p-4 bg-violet-200 rounded-lg shadow-lg border border-gray-200 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6  text-center">Notifications</h2>

      <div className="md:flex justify-center mb-6  gap-6">
        <button
          className={`text-lg md:text-xl font-semibold mx-2 md:mx-4 pb-1 ${activeTab === 'unread' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('unread')}
        >
          Unread Notifications
        </button>
        <button
          className={`text-lg md:text-xl font-semibold mx-2 md:mx-4 pb-1 ${activeTab === 'read' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('read')}
        >
          Read Notifications
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8">

        <section className={`md:w-1/2 ${activeTab === 'unread' ? 'block' : 'hidden md:block'}`}>
          {unReadNotifications.length === 0 ? (
            <p className="text-center text-gray-500">No unread notifications</p>
          ) : (
            <div className="space-y-4">
              {unReadNotifications.map(notification => (
                <div
                  key={notification._id}
                  className="flex justify-between items-center p-3 md:p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-sm"
                >
                  <div>
                    <Link to={`notification-details/${notification._id}`}  className="text-gray-800 font-medium text-sm md:text-base">{notification.message}</Link>
                  </div>
                  <button
                    onClick={() => handleDeleteNotification(notification._id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    title="Delete notification"
                  >
                    <FaTrashAlt className="text-sm md:text-base" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        
        <section className={`md:w-1/2 ${activeTab === 'read' ? 'block' : 'hidden md:block'}`}>
          {readNotifications.length === 0 ? (
            <p className="text-center text-gray-500">No read notifications</p>
          ) : (
            <div className="space-y-4">
              {readNotifications.map(notification => (
                <div
                  key={notification.id}
                  className="flex justify-between items-center p-3 md:p-4 bg-gray-200 border border-gray-400 rounded-lg shadow-sm"
                >
                  <div>
                  <Link to={`notification-details/${notification._id}`}  className="text-gray-800 font-medium text-sm md:text-base">{notification.message}</Link>
                  </div>
                  <button
                    onClick={() => handleDeleteNotification(notification._id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    title="Delete notification"
                  >
                    <FaTrashAlt className="text-sm md:text-base" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Notifications;
