

import { setSellerNotifications } from "../Slices/userSlice";
import { axiosInstance } from "../config/axiosInstance";

const fetchNotifications = async (dispatch) => {

 
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

export default fetchNotifications