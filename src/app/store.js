import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slices/userSlice'
import {thunk} from 'redux-thunk';
export default configureStore({
  reducer: {
    user:userReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})