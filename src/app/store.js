import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../app/reducers/authSlice'

export default configureStore({
  reducer: {
    auth: authReducer
  }
})
