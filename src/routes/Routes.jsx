import { createBrowserRouter } from "react-router-dom";
 import RootLayout from "../layout/RootLayout";
import Login from "../pages/SellerLogin";
import SellerSignup from '../pages/SellerSignup'
import VerificationStatus from "../compoenents/VerificationStatus";
import { AuthSeller } from "./protectedRoutes/AuthSeller";
import Profile from "../pages/Profile";
import SellerLayout from "../layout/SellerLayout";

import SellerHome from "../pages/sellerHome";
import Notifications from "../compoenents/Notifications";
import Products from "../compoenents/Products";
import UploadProduct from "../compoenents/UploadProduct";
import EditProduct from "../compoenents/EditProduct";
import ProductRatings from "../pages/ProductRatings";
import ErrorPage from "../compoenents/ErrorPage";
import SellerOrders from "../compoenents/Orders";
import NotificationDetails from "../compoenents/NotificationDetails";






export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout />,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signin',
    element: <SellerSignup />
  },
  {
    path: '/verification-status',
    element: <VerificationStatus />
  },
  {
    path: '/seller/dashboard',
    element: (<AuthSeller>
      <SellerLayout />
    </AuthSeller>
    ),
    children: [
      {
        path: '',
        element: <SellerHome />,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: '',
            element: <Products />
          },
          {
            path: 'account',
            element: <Profile />
          },
          {
            path: 'notifications',
            element: <Notifications />,
          
          },
          {
            path:'orders',
            element:<SellerOrders/>
          },
          {
            path: 'uploadproducts',
            element: <UploadProduct />
          },
          {
            path:'edit-product',
            element:<EditProduct/>
          },
          {
            path:'product-rating/:productId',
            element:<ProductRatings/>
          },
          {
            path:'/seller/dashboard/notifications/notification-details/:notificationId',
            element:<NotificationDetails/>
          }

        ]
      },

    ]

  }
 
]);