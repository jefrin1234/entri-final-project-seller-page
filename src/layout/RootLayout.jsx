

import React, {  useState,useEffect } from 'react'
import Header from '../compoenents/Header'
import Footer from '../compoenents/Footer'
import Home from '../pages/Home'
import { axiosInstance } from '../config/axiosInstance'
import { useDispatch } from 'react-redux'
import { setSellerDetails } from '../Slices/userSlice'
import {  useNavigate } from 'react-router-dom'
import Spinner from '../compoenents/LoadingComponent'



function RootLayout() {
 

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)

  const checkUser = async()=>{

   try {
    const response = await axiosInstance({
      method:'POST',
      url:'/seller/check-seller'
    })
    setLoading(false)
    console.log(response.data.data)
    dispatch(setSellerDetails({loggedIn:true,seller:response.data.data}))
    navigate('/seller/dashboard')
   } catch (error) {
    setLoading(false)
    console.log(error)

   }
  }

  useEffect(()=>{
    checkUser()
  },[])
  
if(loading){
  return <Spinner/>
}

  return (
    <div>
       <Header />



//       <div className="min-h-[calc(100vh-130px)] pt-16">

//         <Home />

//       </div>

//       <Footer />
    </div>
  )
}

export default RootLayout
