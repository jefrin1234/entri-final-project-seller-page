import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn : false,
    seller:null,
    readNotifications:[],
    unReadNotifications:[]
  },
  reducers: {
    setSellerDetails :(state,action)=>{
      
      state.seller = action.payload.seller
      state.loggedIn = action.payload.loggedIn
      console.log(state.seller)
      console.log(state.loggedIn)
    
   },
   setSellerNotifications:(state,action)=>{
    state.readNotifications = action.payload.readNotifications
    state.unReadNotifications = action.payload.unReadNotifications
   
   }
  }
})


export const { setSellerDetails,setSellerNotifications } = userSlice.actions

export default userSlice.reducer