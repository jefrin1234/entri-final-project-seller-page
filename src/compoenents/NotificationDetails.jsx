import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../config/axiosInstance';


function NotificationDetails() {
  const { notificationId } = useParams();
  const [notification, setNotification] = useState(null); // Initialize as null

  const fetchNotificationDetails = async () => {
    try {
      const response = await axiosInstance({
        method: 'GET',
        url: `/seller/notification-details/${notificationId}`,
      });
      console.log(response.data);
      setNotification(response.data.data); // Assuming data is stored in response.data.data
    } catch (error) {
      console.error('Error fetching notification details', error);
    }
  };


  const updateNotifciationStatus = async()=>{
    try {
      console.log('huioo')
      const response = await axiosInstance({
        method:'POST',
        url:`/seller/update-notification/${notificationId}`,
        data: { isRead: true }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (notificationId) {
      fetchNotificationDetails();
      updateNotifciationStatus()
    }
  }, [notificationId]);

  if (!notification) {
    return <div>Loading...</div>; // Render a loading state while data is being fetched
  }

  // Destructuring the product details from notification.data
  const { name, price, sellingPrice, stock, description, images, brand, colour, category } = notification.data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notification Details</h1>
      <p className="mb-4 text-green-500"><strong>Message:</strong> {notification.message}</p>
      
      <h2 className="text-xl font-bold mb-2">Product Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Color:</strong> {colour}</p>
      <p><strong>Stock:</strong> {stock}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Selling Price:</strong> ₹{sellingPrice}</p>

      <h2 className="text-xl font-bold mt-6 mb-2">Product Images</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <img  key={index} src={image} alt={`Product image ${index + 1}`} className="w-32 h-40 rounded-md shadow-md" />
        ))}
      </div>
    </div>
  );
}

export default NotificationDetails;
