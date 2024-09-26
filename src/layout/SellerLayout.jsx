import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'

import { setSellerNotifications } from '../Slices/userSlice'
import {useDispatch} from 'react-redux'
import { axiosInstance } from '../config/axiosInstance'
import SellerHeader from '../compoenents/SellerHeader'
import Footer from '../compoenents/Footer'


function SellerLayout() {

  const dispatch = useDispatch()

  const fetchNotifications = async () => {
    try {
      const response = await axiosInstance({
        method: 'GET',
        url: '/seller/notifications',
      });

      const notifications = response.data.data || [];
      console.log(notifications)


     const readNotification =  notifications.filter(notification => notification.isRead)


    
     const unreadNotifications =   notifications.filter(notification => !notification.isRead)

  

      dispatch(setSellerNotifications({readNotifications:readNotification,
        unReadNotifications:unreadNotifications,
        allNotifications:notifications}))




    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch notifications');
    } 
  };

   useEffect(()=>{
    fetchNotifications()
   },[])

  

  return (
  <>
     <SellerHeader/>

       <div className="min-h-[calc(100vh-130px)] pt-16">
       <Outlet/>
       </div>

      <Footer/>
  </>

  )
}

export default SellerLayout
