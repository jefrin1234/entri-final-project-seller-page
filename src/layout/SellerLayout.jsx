import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'

import { setSellerNotifications } from '../Slices/userSlice'
import {useDispatch} from 'react-redux'
import { axiosInstance } from '../config/axiosInstance'

import Footer from '../compoenents/Footer'
import SellerHeader from '../compoenents/SellerHeader'
import fetchNotifications from '../services/fetchNotifications'


function SellerLayout() {

  const dispatch = useDispatch()



   useEffect(()=>{
    fetchNotifications(dispatch)
   },[dispatch])

  

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
